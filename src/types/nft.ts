import type { Comment, PricePoint, ReactionCounts } from "@/types/market";

export type NftKind = "pump_dump" | "sell_out";
export type NftPrimitive = "native_https" | "conditional_tx" | "async_await" | "rex";
export type NftOutcome = "pump" | "dump" | "sell_out" | "miss" | "void";

export interface FloorPoint {
  timestamp: string;
  price: number;
}

export interface NftMarket {
  id: string;
  kind: NftKind;
  source: "live" | "user";
  name: string;
  imageUrl?: string;
  chain: string;
  currency: string;
  description: string;
  floorNative: number | null;
  floorUsd: number | null;
  floorChange24h: number | null;
  minted: number | null;
  supply: number | null;
  mintPrice: number | null;
  openFloor: number | null;
  openMinted: number | null;
  deadline: string;
  volume: number;
  liquidity: number;
  yesPrice: number;
  noPrice: number;
  yesChange: number;
  status: "active" | "resolved";
  outcome: NftOutcome | null;
  primitive: NftPrimitive;
  quoteSource: string;
  quoteUpdatedAt: string | null;
  floorHistory: FloorPoint[];
  reactions: ReactionCounts;
  volume24h: number;
  creatorId?: string;
}

export interface NftStake {
  outcome: "yes" | "no";
  shares: number;
  avgPrice: number;
  settled: boolean;
}

export interface NftDetail {
  market: NftMarket | null;
  yesHistory: PricePoint[];
  noHistory: PricePoint[];
  comments: Comment[];
}

export const NFT_PRIMITIVES: NftPrimitive[] = [
  "native_https",
  "conditional_tx",
  "async_await",
  "rex",
];
