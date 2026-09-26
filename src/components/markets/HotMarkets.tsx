import { Link } from "@tanstack/react-router";
import { Flame } from "lucide-react";
import type { Market } from "@/types/market";
import { formatVolume } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";

export function HotMarkets({ markets }: { markets: Market[] }) {
  const { t } = useI18n();
  const hot = markets.filter((m) => m.volume24h > 0).slice(0, 4);
  if (hot.length === 0) return null;

  return (
    <section className="mb-8">
      <div className="comic-tab mb-3 inline-flex items-center gap-2 rounded-lg bg-accent px-3 py-1 text-accent-foreground">
        <Flame className="h-5 w-5" />
        <h2 className="font-display text-lg">{t("hot.title")}</h2>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {hot.map((market, i) => (
          <Link
            key={market.id}
            to="/market/$id"
            params={{ id: market.id }}
            className="card-surface rounded-2xl border border-border/50 p-4 transition-colors hover:border-primary/40"
          >
            <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
              <span>{t(`category.${market.category}`)}</span>
              <span className="font-medium text-primary">#{i + 1}</span>
            </div>
            <p className="mb-3 line-clamp-2 text-sm font-semibold leading-snug">{market.title}</p>
            <div className="flex items-center justify-between text-xs">
              <span className="text-success tabular-nums">
                {(market.yesPrice * 100).toFixed(0)}¢ {t("yes")}
              </span>
              <span className="text-muted-foreground tabular-nums">
                {formatVolume(market.volume24h)} 24h
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
