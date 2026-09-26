import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Countdown } from "@/components/nft/Countdown";
import { useI18n } from "@/lib/i18n";
import { formatVolume } from "@/lib/utils";
import type { NftMarket } from "@/types/nft";
import { Clock } from "lucide-react";

function formatQty(value: number) {
  if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(2)}B`;
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(2)}M`;
  if (value >= 1000) return value.toLocaleString("en-US");
  return value.toLocaleString("en-US", { maximumFractionDigits: 4 });
}

export function formatFloor(value: number, currency: string) {
  const digits = value >= 100 ? 2 : value >= 1 ? 3 : 4;
  return `${value.toLocaleString("en-US", { maximumFractionDigits: digits })} ${currency}`;
}

function Sparkline({ points }: { points: { price: number }[] }) {
  if (points.length < 2) return null;
  const w = 320;
  const h = 56;
  const prices = points.map((point) => point.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const span = max - min || min * 0.02 || 1;
  const d = prices
    .map((price, index) => {
      const x = (index / (prices.length - 1)) * w;
      const y = h - ((price - min) / span) * (h - 6) - 3;
      return `${index === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  const up = prices[prices.length - 1] >= prices[0];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={`h-14 w-full ${up ? "text-success" : "text-danger"}`} aria-hidden>
      <path d={d} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export function NftCard({ market }: { market: NftMarket }) {
  const { t } = useI18n();
  const pump = market.kind === "pump_dump";
  const minted = market.minted ?? 0;
  const supply = market.supply ?? 0;
  const ratio = supply > 0 ? Math.min(1, minted / supply) : 0;
  const live = market.quoteSource === "coingecko" || market.quoteSource === "magiceden" || market.quoteSource === "chain";

  return (
    <Link to="/nft/$id" params={{ id: market.id }} className="block h-full">
      <article className="card-surface group flex h-full flex-col rounded-2xl border border-border/50 p-5 transition-colors hover:border-primary/30">
        <div className="mb-4 flex items-start gap-4">
          {market.imageUrl ? (
            <img
              src={market.imageUrl}
              alt=""
              referrerPolicy="no-referrer"
              className="h-12 w-12 rounded-lg bg-secondary object-cover"
            />
          ) : (
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-sm font-semibold text-muted-foreground">
              {market.name.slice(0, 1)}
            </div>
          )}
          <div className="min-w-0 flex-1">
            <h3 className="mb-1 line-clamp-2 leading-tight font-semibold transition-colors group-hover:text-primary">
              {market.name}
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <Badge variant="secondary">{pump ? t("nft.tabPump") : t("nft.tabMint")}</Badge>
            </div>
          </div>
        </div>

        {pump ? (
          <div className="mb-3">
            <div className="mb-1 flex items-baseline justify-between gap-2">
              <span className="text-xs text-muted-foreground">{t("nft.floor")}</span>
              <span className="font-semibold tabular-nums">
                {market.floorNative != null ? formatFloor(market.floorNative, market.currency) : t("nft.awaiting")}
              </span>
            </div>
            {market.floorChange24h != null ? (
              <p className={`mb-1 text-xs tabular-nums ${market.floorChange24h >= 0 ? "text-success" : "text-danger"}`}>
                {market.floorChange24h >= 0 ? "+" : ""}
                {market.floorChange24h.toFixed(2)}% 24h
              </p>
            ) : null}
            <Sparkline points={market.floorHistory} />
          </div>
        ) : (
          <div className="mb-3 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{t("nft.mintProgress")}</span>
              <span className="font-semibold tabular-nums">
                {market.minted != null && market.supply != null
                  ? `${formatQty(market.minted)} / ${formatQty(market.supply)}`
                  : t("nft.awaiting")}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-secondary">
              <div className="h-full rounded-full bg-primary" style={{ width: `${Math.max(ratio * 100, ratio > 0 ? 2 : 0)}%` }} />
            </div>
            {market.mintPrice != null ? (
              <p className="text-xs text-muted-foreground">
                {t("nft.mintPrice")} {formatFloor(market.mintPrice, market.currency)}
              </p>
            ) : null}
          </div>
        )}

        <div className="mb-4 flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          <Countdown deadline={market.deadline} />
          <span className="ms-auto">{live ? t("nft.live") : t("nft.manual")}</span>
        </div>

        <div className="mt-auto space-y-2">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{pump ? t("nft.pump") : t("nft.sellOut")}</span>
              <span className="font-semibold text-success tabular-nums">{(market.yesPrice * 100).toFixed(0)}¢</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-secondary">
              <div className="h-full rounded-full bg-success" style={{ width: `${market.yesPrice * 100}%` }} />
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{pump ? t("nft.dump") : t("nft.wont")}</span>
              <span className="font-semibold text-danger tabular-nums">{(market.noPrice * 100).toFixed(0)}¢</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-secondary">
              <div className="h-full rounded-full bg-danger" style={{ width: `${market.noPrice * 100}%` }} />
            </div>
          </div>
          <div className="flex items-center gap-2 pt-1">
            <Button variant="yes" className="flex-1" size="sm" tabIndex={-1}>
              {pump ? t("nft.predictPump") : t("nft.predictSell")} {(market.yesPrice * 100).toFixed(0)}¢
            </Button>
            <Button variant="no" className="flex-1" size="sm" tabIndex={-1}>
              {pump ? t("nft.predictDump") : t("nft.predictWont")} {(market.noPrice * 100).toFixed(0)}¢
            </Button>
          </div>
        </div>

        <div className="mt-3 border-t border-border/50 pt-2 text-xs text-muted-foreground">
          {formatVolume(market.volume)} {t("vol")}
          {market.volume24h > 0 ? ` · ${formatVolume(market.volume24h)} 24h` : ""}
        </div>
      </article>
    </Link>
  );
}
