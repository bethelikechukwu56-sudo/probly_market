import { Market } from "@/types/market";
import { MarketCard } from "./MarketCard";
import { SearchX } from "lucide-react";

export function MarketGrid({ markets }: { markets: Market[] }) {
  if (markets.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
          <SearchX className="h-7 w-7 text-muted-foreground" />
        </div>
        <h3 className="mb-2 text-lg font-semibold">No markets found</h3>
        <p className="text-sm text-muted-foreground">
          Try a different category or check back later.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {markets.map((market) => (
        <MarketCard key={market.id} market={market} />
      ))}
    </div>
  );
}
