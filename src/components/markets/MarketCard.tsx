import { Link } from "@tanstack/react-router";
import { Market } from "@/types/market";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Clock, BarChart3 } from "lucide-react";
import { cn, formatDate, formatVolume } from "@/lib/utils";
import { ReactionBar } from "./ReactionBar";
import { useI18n } from "@/lib/i18n";

export function MarketCard({ market }: { market: Market }) {
  const { t, intlTag } = useI18n();
  const yesChange = market.outcomes[0]?.change24h || 0;
  const isPositive = yesChange >= 0;

  return (
    <Link to="/market/$id" params={{ id: market.id }} className="block h-full">
      <article className="card-surface group flex h-full flex-col rounded-2xl border border-border/50 p-5 transition-colors hover:border-primary/30">
        <div className="mb-4 flex items-start gap-4">
          {market.imageUrl ? (
            <img
              src={market.imageUrl}
              alt=""
              className="h-12 w-12 rounded-lg bg-secondary object-cover"
            />
          ) : (
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
              <BarChart3 className="h-6 w-6 text-muted-foreground" />
            </div>
          )}
          <div className="min-w-0 flex-1">
            <h3 className="mb-1 line-clamp-2 leading-tight font-semibold text-foreground transition-colors group-hover:text-primary">
              {market.title}
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <Badge variant="secondary">{t(`category.${market.category}` as "category.crypto")}</Badge>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {formatDate(market.endDate, undefined, intlTag)}
              </span>
            </div>
          </div>
        </div>

        <div className="mb-4 space-y-3">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{t("yes")}</span>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-success tabular-nums">
                  {(market.yesPrice * 100).toFixed(0)}¢
                </span>
                <span
                  className={cn(
                    "flex items-center gap-0.5 text-xs",
                    isPositive ? "text-success" : "text-danger",
                  )}
                >
                  {isPositive ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {Math.abs(yesChange).toFixed(1)}%
                </span>
              </div>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-success"
                style={{ width: `${market.yesPrice * 100}%` }}
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{t("no")}</span>
              <span className="font-semibold text-danger tabular-nums">
                {(market.noPrice * 100).toFixed(0)}¢
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-danger"
                style={{ width: `${market.noPrice * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="mt-auto flex items-center gap-2">
          <Button variant="yes" className="flex-1" size="sm" tabIndex={-1}>
            {t("buyYes")}
          </Button>
          <Button variant="no" className="flex-1" size="sm" tabIndex={-1}>
            {t("buyNo")}
          </Button>
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-border/50 pt-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <BarChart3 className="h-3 w-3" />
            {formatVolume(market.volume)} {t("vol")}
          </span>
          <ReactionBar market={market} compact />
        </div>
      </article>
    </Link>
  );
}
