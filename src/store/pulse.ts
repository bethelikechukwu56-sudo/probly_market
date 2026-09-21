import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  Comment,
  Market,
  Position,
  Session,
  Trade,
  Trader,
  Category,
  PricePoint,
} from "@/types/market";
import { seedMarkets, seedPriceHistory, seedTraders } from "@/data/seed";
import {
  generateId,
  generateTxHash,
  generateWalletAddress,
} from "@/lib/utils";

const STARTING_BALANCE = 1_000;
const FAUCET_AMOUNT = 100;
const FAUCET_COOLDOWN_MS = 24 * 60 * 60 * 1000;

interface WalletState {
  connected: boolean;
  address: string | null;
  balance: number;
  faucetClaimedAt: number | null;
}

interface PulseState {
  hydrated: boolean;
  session: Session | null;
  wallet: WalletState;
  markets: Market[];
  comments: Comment[];
  positions: Position[];
  trades: Trade[];
  priceHistory: Record<string, PricePoint[]>;
  traders: Trader[];

  signIn: (email: string, username?: string) => void;
  signOut: () => void;
  connectWallet: () => void;
  disconnectWallet: () => void;
  claimFaucet: () => { ok: boolean; message: string };
  buy: (input: {
    marketId: string;
    outcome: "yes" | "no";
    amount: number;
  }) => { ok: boolean; message: string; txHash?: string; shares?: number };
  createMarket: (input: {
    title: string;
    description: string;
    category: Exclude<Category, "all">;
    endDate: string;
    resolutionSource: string;
    imageUrl?: string;
    liquidity: number;
  }) => { ok: boolean; message: string; id?: string };
  addComment: (marketId: string, content: string) => { ok: boolean; message: string };
  deleteComment: (id: string) => void;
}

function clampPrice(n: number) {
  return +Math.max(0.02, Math.min(0.98, n)).toFixed(3);
}

function refreshPositions(positions: Position[], markets: Market[]): Position[] {
  return positions
    .map((pos) => {
      const market = markets.find((m) => m.id === pos.marketId);
      const currentPrice = market
        ? pos.outcome === "yes"
          ? market.yesPrice
          : market.noPrice
        : pos.currentPrice;
      const pnl = (currentPrice - pos.avgPrice) * pos.shares;
      const cost = pos.avgPrice * pos.shares;
      return {
        ...pos,
        currentPrice,
        pnl,
        pnlPercent: cost > 0 ? (pnl / cost) * 100 : 0,
      };
    })
    .filter((p) => p.shares > 0.0001);
}

export const usePulse = create<PulseState>()(
  persist(
    (set, get) => ({
      hydrated: false,
      session: null,
      wallet: {
        connected: false,
        address: null,
        balance: STARTING_BALANCE,
        faucetClaimedAt: null,
      },
      markets: seedMarkets,
      comments: [],
      positions: [],
      trades: [],
      priceHistory: seedPriceHistory(seedMarkets),
      traders: seedTraders,

      signIn: (email, username) => {
        const name = (username || email.split("@")[0] || "trader").slice(0, 24);
        set({
          session: {
            id: generateId("user"),
            email,
            username: name,
          },
        });
      },

      signOut: () => set({ session: null }),

      connectWallet: () => {
        const current = get().wallet;
        set({
          wallet: {
            ...current,
            connected: true,
            address: current.address ?? generateWalletAddress(),
          },
        });
      },

      disconnectWallet: () =>
        set((s) => ({
          wallet: { ...s.wallet, connected: false },
        })),

      claimFaucet: () => {
        const { wallet } = get();
        if (!wallet.connected) {
          return { ok: false, message: "Connect your wallet first." };
        }
        if (
          wallet.faucetClaimedAt &&
          Date.now() - wallet.faucetClaimedAt < FAUCET_COOLDOWN_MS
        ) {
          return { ok: false, message: "Faucet already claimed today." };
        }
        set({
          wallet: {
            ...wallet,
            balance: wallet.balance + FAUCET_AMOUNT,
            faucetClaimedAt: Date.now(),
          },
        });
        return { ok: true, message: `${FAUCET_AMOUNT} RIA sent to your wallet.` };
      },

      buy: ({ marketId, outcome, amount }) => {
        const { session, wallet, markets, positions, trades, priceHistory, traders } =
          get();
        if (!session) return { ok: false, message: "Sign in to trade." };
        if (!wallet.connected) return { ok: false, message: "Connect your wallet." };
        if (!Number.isFinite(amount) || amount <= 0) {
          return { ok: false, message: "Enter a valid amount." };
        }
        if (amount > wallet.balance) {
          return { ok: false, message: "Insufficient RIA balance." };
        }

        const market = markets.find((m) => m.id === marketId);
        if (!market || market.status !== "active") {
          return { ok: false, message: "Market is not available." };
        }

        const price = outcome === "yes" ? market.yesPrice : market.noPrice;
        const shares = amount / price;
        const delta = Math.min(0.04, amount / (market.liquidity + amount) * 0.12);
        const yesPrice =
          outcome === "yes"
            ? clampPrice(market.yesPrice + delta)
            : clampPrice(market.yesPrice - delta);
        const noPrice = clampPrice(1 - yesPrice);
        const now = new Date().toISOString();
        const txHash = generateTxHash();

        const nextMarkets = markets.map((m) => {
          if (m.id !== marketId) return m;
          return {
            ...m,
            yesPrice,
            noPrice,
            volume: m.volume + amount,
            outcomes: m.outcomes.map((o) => {
              const isYes = o.name === "Yes";
              const next = isYes ? yesPrice : noPrice;
              return {
                ...o,
                price: next,
                change24h: +(o.change24h + (isYes ? delta : -delta) * 100).toFixed(1),
              };
            }),
          };
        });

        const existing = positions.find(
          (p) => p.marketId === marketId && p.outcome === outcome,
        );
        let nextPositions: Position[];
        if (existing) {
          const newShares = existing.shares + shares;
          const avgPrice =
            (existing.shares * existing.avgPrice + shares * price) / newShares;
          nextPositions = positions.map((p) =>
            p.id === existing.id ? { ...p, shares: newShares, avgPrice } : p,
          );
        } else {
          nextPositions = [
            ...positions,
            {
              id: generateId("pos"),
              marketId,
              marketTitle: market.title,
              outcome,
              shares,
              avgPrice: price,
              currentPrice: price,
              pnl: 0,
              pnlPercent: 0,
            },
          ];
        }

        const trade: Trade = {
          id: generateId("tx"),
          marketId,
          marketTitle: market.title,
          outcome,
          type: "buy",
          shares,
          price,
          total: amount,
          timestamp: now,
          txHash,
        };

        const nextHistory = { ...priceHistory };
        for (const o of nextMarkets.find((m) => m.id === marketId)!.outcomes) {
          const list = nextHistory[o.id] ? [...nextHistory[o.id]] : [];
          list.push({ timestamp: now, price: o.price });
          nextHistory[o.id] = list;
        }

        const userTrader: Trader = {
          id: session.id,
          username: session.username,
          walletAddress: wallet.address ?? session.id,
          totalVolume: amount,
          totalProfit: 0,
          totalTrades: 1,
          winRate: 50,
        };
        const nextTraders = [...traders];
        const idx = nextTraders.findIndex((t) => t.id === session.id);
        if (idx >= 0) {
          nextTraders[idx] = {
            ...nextTraders[idx],
            totalVolume: nextTraders[idx].totalVolume + amount,
            totalTrades: nextTraders[idx].totalTrades + 1,
          };
        } else {
          nextTraders.push(userTrader);
        }

        set({
          wallet: { ...wallet, balance: wallet.balance - amount },
          markets: nextMarkets,
          positions: refreshPositions(nextPositions, nextMarkets),
          trades: [trade, ...trades],
          priceHistory: nextHistory,
          traders: nextTraders,
        });

        return {
          ok: true,
          message: `Bought ${shares.toFixed(2)} ${outcome.toUpperCase()} shares`,
          txHash,
          shares,
        };
      },

      createMarket: (input) => {
        const { session, wallet, markets, priceHistory } = get();
        if (!session) return { ok: false, message: "Sign in to create a market." };
        if (!wallet.connected) return { ok: false, message: "Connect your wallet." };
        if (input.liquidity < 10) {
          return { ok: false, message: "Minimum liquidity is 10 RIA." };
        }
        if (input.liquidity > wallet.balance) {
          return { ok: false, message: "Insufficient RIA for initial liquidity." };
        }
        const id = generateId("m");
        const market: Market = {
          id,
          title: input.title.trim(),
          description: input.description.trim(),
          category: input.category,
          imageUrl: input.imageUrl || undefined,
          endDate: input.endDate,
          volume: 0,
          liquidity: input.liquidity,
          yesPrice: 0.5,
          noPrice: 0.5,
          outcomes: [
            { id: `${id}-yes`, name: "Yes", price: 0.5, change24h: 0 },
            { id: `${id}-no`, name: "No", price: 0.5, change24h: 0 },
          ],
          status: "active",
          createdAt: new Date().toISOString(),
          creatorId: session.id,
          resolutionSource: input.resolutionSource.trim(),
        };
        const now = new Date().toISOString();
        set({
          wallet: { ...wallet, balance: wallet.balance - input.liquidity },
          markets: [market, ...markets],
          priceHistory: {
            ...priceHistory,
            [`${id}-yes`]: [{ timestamp: now, price: 0.5 }],
            [`${id}-no`]: [{ timestamp: now, price: 0.5 }],
          },
        });
        return { ok: true, message: "Market is live.", id };
      },

      addComment: (marketId, content) => {
        const { session, comments } = get();
        if (!session) return { ok: false, message: "Sign in to comment." };
        const text = content.trim();
        if (!text) return { ok: false, message: "Write a comment first." };
        set({
          comments: [
            {
              id: generateId("c"),
              marketId,
              userId: session.id,
              username: session.username,
              content: text,
              createdAt: new Date().toISOString(),
            },
            ...comments,
          ],
        });
        return { ok: true, message: "Comment posted." };
      },

      deleteComment: (id) =>
        set((s) => ({ comments: s.comments.filter((c) => c.id !== id) })),
    }),
    {
      name: "predictix-pulse",
      skipHydration: true,
      partialize: (state) => ({
        session: state.session,
        wallet: state.wallet,
        markets: state.markets,
        comments: state.comments,
        positions: state.positions,
        trades: state.trades,
        priceHistory: state.priceHistory,
        traders: state.traders,
      }),
    },
  ),
);

export function usePulseHydrated() {
  return usePulse((s) => s.hydrated);
}

export function markPulseHydrated() {
  usePulse.setState({ hydrated: true });
}
