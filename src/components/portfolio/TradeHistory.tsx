import { cn, formatAddress } from "@/lib/utils";
import { Trade } from "@/types/market";

export function TradeHistory({ trades }: { trades: Trade[] }) {
  if (trades.length === 0) {
    return <div className="py-8 text-center text-muted-foreground">No trades yet</div>;
  }

  return (
    <div className="space-y-3">
      {trades.map((trade) => (
        <div key={trade.id} className="rounded-xl border border-border/50 bg-card p-4">
          <div className="mb-2 flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <p className="line-clamp-1 text-sm font-medium">{trade.marketTitle}</p>
              <p className="text-xs text-muted-foreground">
                {new Date(trade.timestamp).toLocaleString("en-US", {
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "rounded px-2 py-0.5 text-xs font-semibold",
                  trade.type === "buy" ? "bg-success/20 text-success" : "bg-danger/20 text-danger",
                )}
              >
                {trade.type.toUpperCase()}
              </span>
              <span
                className={cn(
                  "rounded px-2 py-0.5 text-xs font-semibold",
                  trade.outcome === "yes" ? "bg-success/20 text-success" : "bg-danger/20 text-danger",
                )}
              >
                {trade.outcome.toUpperCase()}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground tabular-nums">
              {trade.shares.toFixed(2)} shares @ {(trade.price * 100).toFixed(1)}¢
            </span>
            <span className="font-semibold tabular-nums">
              ${trade.total.toFixed(2)}
              <span className="ml-2 text-xs font-normal text-muted-foreground">
                {formatAddress(trade.txHash)}
              </span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
