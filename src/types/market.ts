export interface Market {
  id: string;
  title: string;
  description: string;
  category: Category;
  imageUrl?: string;
  endDate: string;
  volume: number;
  liquidity: number;
  yesPrice: number;
  noPrice: number;
  outcomes: Outcome[];
  status: "active" | "resolved" | "cancelled";
  createdAt: string;
  creatorId?: string;
  resolutionSource?: string;
  reactions: ReactionCounts;
  volume24h: number;
}

export interface ReactionCounts {
  fire: number;
  eyes: number;
  skull: number;
}

export type ReactionKind = "fire" | "eyes" | "skull";

export interface Outcome {
  id: string;
  name: "Yes" | "No";
  price: number;
  change24h: number;
}

export interface Position {
  id: string;
  marketId: string;
  marketTitle: string;
  outcome: "yes" | "no";
  shares: number;
  avgPrice: number;
  currentPrice: number;
  pnl: number;
  pnlPercent: number;
}

export interface Trade {
  id: string;
  marketId: string;
  marketTitle: string;
  outcome: "yes" | "no";
  type: "buy" | "sell";
  shares: number;
  price: number;
  total: number;
  timestamp: string;
  txHash: string;
}

export interface PricePoint {
  timestamp: string;
  price: number;
}

export interface Comment {
  id: string;
  marketId: string;
  userId: string;
  username: string;
  content: string;
  createdAt: string;
}

export interface Trader {
  id: string;
  username: string;
  walletAddress: string;
  totalVolume: number;
  totalProfit: number;
  totalTrades: number;
  winRate: number;
  rank: number;
}

export interface WalletInfo {
  address: string;
  balance: number;
  faucetReady: boolean;
}

export interface UserPulseStats {
  username: string;
  totalVolume: number;
  totalProfit: number;
  totalTrades: number;
  wins: number;
  winRate: number;
  streakDays: number;
  bestCategory: string | null;
  rank: number | null;
  badges: string[];
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  weekStart: string;
  bonusRia: number;
  targetTrades: number;
  progress: number;
  claimed: boolean;
}

export type Category =
  | "all"
  | "crypto"
  | "politics"
  | "sports"
  | "entertainment"
  | "tech"
  | "science"
  | "economics";

export const REACTION_META: { kind: ReactionKind; label: string; glyph: string }[] = [
  { kind: "fire", label: "Fire", glyph: "🔥" },
  { kind: "eyes", label: "Watching", glyph: "👀" },
  { kind: "skull", label: "Rekt", glyph: "💀" },
];

export const BADGE_META: Record<string, { title: string; blurb: string }> = {
  first_prediction: { title: "First Prediction", blurb: "You placed your first trade." },
  ten_wins: { title: "10 Wins", blurb: "Ten positions in the green." },
  top_ten: { title: "Top 10 Leaderboard", blurb: "You cracked the top ten." },
};
