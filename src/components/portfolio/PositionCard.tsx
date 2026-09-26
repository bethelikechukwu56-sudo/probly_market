import { Link } from "@tanstack/react-router";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Position } from "@/types/market";
import { useI18n } from "@/lib/i18n";

export function PositionCard({ position }: { position: Position }) {
  const isProfit = position.pnl >= 0;
  const { t } = useI18n();

  return (
    <Link to="/market/$id" params={{ id: position.marketId }} className="block">
      <div className="card-surface rounded-2xl border border-border/50 p-5 transition-colors hover:border-primary/30">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h3 className="mb-2 line-clamp-2 leading-tight font-semibold">{position.marketTitle}</h3>
            <span
              className={cn(
                "inline-flex items-center rounded px-2 py-1 text-xs font-semibold",
                position.outcome === "yes" ? "bg-success/20 text-success" : "bg-danger/20 text-danger",
              )}
            >
              {position.outcome === "yes" ? t("yes") : t("no")}
            </span>
          </div>
          <div
            className={cn(
              "flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-semibold",
              isProfit ? "bg-success/20 text-success" : "bg-danger/20 text-danger",
            )}
          >
            {isProfit ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
            {isProfit ? "+" : ""}
            {position.pnlPercent.toFixed(1)}%
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="mb-1 text-xs text-muted-foreground">{t("position.shares")}</p>
            <p className="font-semibold tabular-nums">{position.shares.toFixed(2)}</p>
          </div>
          <div>
            <p className="mb-1 text-xs text-muted-foreground">{t("position.avg")}</p>
            <p className="font-semibold tabular-nums">{(position.avgPrice * 100).toFixed(1)}¢</p>
          </div>
          <div>
            <p className="mb-1 text-xs text-muted-foreground">{t("position.current")}</p>
            <p className="font-semibold tabular-nums">{(position.currentPrice * 100).toFixed(1)}¢</p>
          </div>
          <div>
            <p className="mb-1 text-xs text-muted-foreground">{t("position.pnl")}</p>
            <p className={cn("font-semibold tabular-nums", isProfit ? "text-success" : "text-danger")}>
              {isProfit ? "+" : ""}${position.pnl.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
