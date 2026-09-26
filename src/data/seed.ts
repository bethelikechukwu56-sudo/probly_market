import { Category, PricePoint } from "@/types/market";

export type SeedMarket = {
  id: string;
  title: string;
  description: string;
  category: Exclude<Category, "all">;
  imageUrl?: string;
  endDate: string;
  volume: number;
  liquidity: number;
  yesPrice: number;
  noPrice: number;
  yesChange: number;
  status: "active";
  createdAt: string;
  resolutionSource?: string;
};

function hash(str: string) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const seedMarkets: SeedMarket[] = [
  {
    id: "m-btc",
    title: "Will Bitcoin reach $150K by end of 2026?",
    description:
      "This market will resolve to Yes if the price of Bitcoin (BTC) reaches or exceeds $150,000 USD on any major exchange before December 31, 2026 11:59 PM UTC.",
    category: "crypto",
    imageUrl: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    endDate: "2026-12-31",
    volume: 2_450_000,
    liquidity: 890_000,
    yesPrice: 0.42,
    noPrice: 0.58,
    yesChange: 3.2,
    status: "active",
    createdAt: "2026-01-15",
    resolutionSource: "https://www.coingecko.com/en/coins/bitcoin",
  },
  {
    id: "m-rialo",
    title: "Will Rialo mainnet launch in Q1 2027?",
    description:
      "This market resolves Yes if Rialo blockchain mainnet goes live before April 1, 2027.",
    category: "crypto",
    endDate: "2027-03-31",
    volume: 1_250_000,
    liquidity: 450_000,
    yesPrice: 0.67,
    noPrice: 0.33,
    yesChange: 5.8,
    status: "active",
    createdAt: "2026-03-01",
    resolutionSource: "Official Rialo announcements",
  },
  {
    id: "m-turing",
    title: "Will AI pass a public Turing Test by 2027?",
    description:
      "Resolves Yes if a publicly demonstrated AI system passes a standardized Turing Test judged by independent experts before January 1, 2028.",
    category: "tech",
    endDate: "2027-12-31",
    volume: 3_200_000,
    liquidity: 1_200_000,
    yesPrice: 0.55,
    noPrice: 0.45,
    yesChange: 1.2,
    status: "active",
    createdAt: "2026-02-20",
  },
  {
    id: "m-fed",
    title: "Fed rate cut at the December 2026 FOMC?",
    description:
      "Will the Federal Reserve cut interest rates at the December 2026 FOMC meeting?",
    category: "economics",
    endDate: "2026-12-18",
    volume: 5_800_000,
    liquidity: 2_100_000,
    yesPrice: 0.73,
    noPrice: 0.27,
    yesChange: 2.1,
    status: "active",
    createdAt: "2026-06-01",
    resolutionSource: "Federal Reserve FOMC statement",
  },
  {
    id: "m-starship",
    title: "SpaceX Starship fully reusable flight in 2026?",
    description:
      "Will SpaceX achieve a fully successful Starship orbital flight including controlled return of both stages by end of 2026?",
    category: "science",
    endDate: "2026-12-31",
    volume: 1_800_000,
    liquidity: 650_000,
    yesPrice: 0.81,
    noPrice: 0.19,
    yesChange: 0.5,
    status: "active",
    createdAt: "2026-04-10",
  },
  {
    id: "m-eth",
    title: "Ethereum ETF AUM over $50B by mid-2027?",
    description:
      "Will Ethereum spot ETFs have over $50 billion in total assets under management by July 1, 2027?",
    category: "crypto",
    endDate: "2027-07-01",
    volume: 4_100_000,
    liquidity: 1_500_000,
    yesPrice: 0.38,
    noPrice: 0.62,
    yesChange: -1.8,
    status: "active",
    createdAt: "2026-05-15",
  },
  {
    id: "m-vision",
    title: "Apple Vision Pro 2 ships in 2027?",
    description:
      "Will Apple release a second-generation Vision Pro headset before December 31, 2027?",
    category: "tech",
    endDate: "2027-12-31",
    volume: 920_000,
    liquidity: 340_000,
    yesPrice: 0.45,
    noPrice: 0.55,
    yesChange: 4.2,
    status: "active",
    createdAt: "2026-07-01",
  },
  {
    id: "m-swift",
    title: "Will Taylor Swift tour in Asia in 2027?",
    description: "Will Taylor Swift announce or perform tour dates in Asia during 2027?",
    category: "entertainment",
    endDate: "2027-12-31",
    volume: 680_000,
    liquidity: 250_000,
    yesPrice: 0.72,
    noPrice: 0.28,
    yesChange: 0.9,
    status: "active",
    createdAt: "2026-08-20",
  },
  {
    id: "m-election",
    title: "US midterms: House majority stays with current party?",
    description:
      "Resolves Yes if the party currently holding the House of Representatives retains a majority after the 2026 midterm elections.",
    category: "politics",
    endDate: "2026-11-04",
    volume: 7_400_000,
    liquidity: 2_800_000,
    yesPrice: 0.51,
    noPrice: 0.49,
    yesChange: -0.6,
    status: "active",
    createdAt: "2026-01-08",
  },
  {
    id: "m-ucl",
    title: "Will a Premier League side win the 2027 Champions League?",
    description:
      "Resolves Yes if an English Premier League club wins the 2026–27 UEFA Champions League.",
    category: "sports",
    endDate: "2027-06-01",
    volume: 3_900_000,
    liquidity: 1_100_000,
    yesPrice: 0.34,
    noPrice: 0.66,
    yesChange: 2.4,
    status: "active",
    createdAt: "2026-08-12",
  },
  {
    id: "m-oscars",
    title: "A streaming original wins Best Picture at the 2027 Oscars?",
    description:
      "Resolves Yes if the Academy Award for Best Picture goes to a film that premiered on a streaming platform.",
    category: "entertainment",
    endDate: "2027-03-15",
    volume: 540_000,
    liquidity: 180_000,
    yesPrice: 0.29,
    noPrice: 0.71,
    yesChange: -2.1,
    status: "active",
    createdAt: "2026-09-01",
  },
  {
    id: "m-fusion",
    title: "Net-energy fusion demo announced by 2028?",
    description:
      "Resolves Yes if a peer-reviewed or government-confirmed net-energy fusion demonstration is publicly announced before January 1, 2028.",
    category: "science",
    endDate: "2027-12-31",
    volume: 1_100_000,
    liquidity: 420_000,
    yesPrice: 0.22,
    noPrice: 0.78,
    yesChange: 1.1,
    status: "active",
    createdAt: "2026-03-22",
  },
];

export const seedBots = [
  { id: "t-aria", username: "aria.markets", walletAddress: "0xa11ce0000000000000000000000000000000aria", totalVolume: 1_240_000, totalProfit: 186_400, totalTrades: 412, winRate: 61 },
  { id: "t-keel", username: "keel", walletAddress: "0xkee1000000000000000000000000000000000eel", totalVolume: 980_000, totalProfit: 142_200, totalTrades: 301, winRate: 58 },
  { id: "t-nova", username: "novalabs", walletAddress: "0xn0va00000000000000000000000000000000nova", totalVolume: 2_100_000, totalProfit: 98_750, totalTrades: 640, winRate: 54 },
  { id: "t-hex", username: "hexstack", walletAddress: "0xhex0000000000000000000000000000000000hex", totalVolume: 610_000, totalProfit: 74_100, totalTrades: 188, winRate: 57 },
  { id: "t-mira", username: "mira", walletAddress: "0xmira000000000000000000000000000000000mira", totalVolume: 430_000, totalProfit: 41_800, totalTrades: 155, winRate: 52 },
  { id: "t-otto", username: "otto.eth", walletAddress: "0x0tt000000000000000000000000000000000otto", totalVolume: 770_000, totalProfit: 22_400, totalTrades: 209, winRate: 49 },
  { id: "t-sage", username: "sagebook", walletAddress: "0x5age00000000000000000000000000000000sage", totalVolume: 290_000, totalProfit: 11_200, totalTrades: 94, winRate: 51 },
  { id: "t-rune", username: "runemarket", walletAddress: "0xrune00000000000000000000000000000000rune", totalVolume: 155_000, totalProfit: -8_400, totalTrades: 67, winRate: 44 },
];

export const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "crypto", label: "Crypto" },
  { id: "politics", label: "Politics" },
  { id: "sports", label: "Sports" },
  { id: "entertainment", label: "Entertainment" },
  { id: "tech", label: "Tech" },
  { id: "science", label: "Science" },
  { id: "economics", label: "Economics" },
];

export function seedPriceHistory(markets: SeedMarket[]): { marketId: string; outcome: "yes" | "no"; price: number; ts: string }[] {
  const now = Date.parse("2026-09-20T00:00:00.000Z");
  const rows: { marketId: string; outcome: "yes" | "no"; price: number; ts: string }[] = [];
  for (const market of markets) {
    for (const side of ["yes", "no"] as const) {
      const target = side === "yes" ? market.yesPrice : market.noPrice;
      const rand = mulberry32(hash(market.id + side));
      let price = Math.max(0.08, Math.min(0.92, target - 0.08));
      for (let i = 30; i >= 0; i--) {
        price = Math.max(0.04, Math.min(0.96, price + (rand() - 0.48) * 0.04));
        if (i === 0) price = target;
        rows.push({
          marketId: market.id,
          outcome: side,
          price: +price.toFixed(3),
          ts: new Date(now - i * 24 * 60 * 60 * 1000).toISOString(),
        });
      }
    }
  }
  return rows;
}
