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
}

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
}

export interface Session {
  id: string;
  username: string;
  email: string;
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
