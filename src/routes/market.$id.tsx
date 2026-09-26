import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/layout/Layout";
import { TradingPanel } from "@/components/trading/TradingPanel";
import { PriceChart } from "@/components/charts/PriceChart";
import { MarketComments } from "@/components/markets/MarketComments";
import { ShareMarketButton } from "@/components/markets/ShareMarketButton";
import { ReactionBar } from "@/components/markets/ReactionBar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, BarChart3, TrendingUp, TrendingDown } from "lucide-react";
import { cn, formatDate, formatVolume } from "@/lib/utils";
import { getMarketDetail } from "@/lib/pulse-api";
import { useMarketDetail } from "@/lib/pulse-query";
import { useI18n } from "@/lib/i18n";

const EMPTY_HISTORY: { timestamp: string; price: number }[] = [];

export const Route = createFileRoute("/market/$id")({
  loader: ({ params }) => getMarketDetail({ data: { id: params.id } }),
  component: MarketDetail,
});

function MarketDetail() {
  const { id } = Route.useParams();
  const initial = Route.useLoaderData();
  const query = useMarketDetail(id);
  const data = query.data ?? initial;
  const market = data.market;
  const { t, intlTag } = useI18n();

  if (!market) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <h1 className="mb-4 text-2xl font-bold">{t("market.notFound")}</h1>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4" />
              {t("market.back")}
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const yesHistory = data.yesHistory.length ? data.yesHistory : EMPTY_HISTORY;
  const noHistory = data.noHistory.length ? data.noHistory : EMPTY_HISTORY;
  const yesChange = market.outcomes[0]?.change24h ?? 0;
  const isPositive = yesChange >= 0;

  return (
    <Layout>
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        {t("market.back")}
      </Link>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="card-surface rounded-2xl border border-border/50 p-6">
            <div className="mb-4 flex items-start gap-4">
              {market.imageUrl ? (
                <img
                  src={market.imageUrl}
                  alt=""
                  className="h-16 w-16 rounded-xl bg-secondary object-cover"
                />
              ) : (
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-secondary">
                  <BarChart3 className="h-8 w-8 text-muted-foreground" />
                </div>
              )}
              <div className="flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">{t(`category.${market.category}` as "category.crypto")}</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    {market.status === "active" ? t("market.active") : market.status}
                  </Badge>
                </div>
                <h1 className="font-display mb-2 text-2xl font-bold">{market.title}</h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {t("market.ends", {
                      date: formatDate(market.endDate, { month: "long", day: "numeric", year: "numeric" }, intlTag),
                    })}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <ReactionBar market={market} />
              <ShareMarketButton market={market} />
            </div>
          </div>

          <div className="card-surface rounded-2xl border border-border/50 p-6">
            <h2 className="mb-4 font-semibold">{t("market.sentiment")}</h2>
            <div className="mb-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-success/20 bg-success/10 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{t("yes")}</span>
                  <span className={cn("flex items-center gap-1 text-xs", isPositive ? "text-success" : "text-danger")}>
                    {isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                    {Math.abs(yesChange).toFixed(1)}%
                  </span>
                </div>
                <span className="text-3xl font-bold text-success tabular-nums">
                  {(market.yesPrice * 100).toFixed(0)}¢
                </span>
              </div>
              <div className="rounded-xl border border-danger/20 bg-danger/10 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{t("no")}</span>
                  <span className={cn("flex items-center gap-1 text-xs", !isPositive ? "text-success" : "text-danger")}>
                    {!isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                    {Math.abs(yesChange).toFixed(1)}%
                  </span>
                </div>
                <span className="text-3xl font-bold text-danger tabular-nums">
                  {(market.noPrice * 100).toFixed(0)}¢
                </span>
              </div>
            </div>
            <PriceChart yesHistory={yesHistory} noHistory={noHistory} />
          </div>

          <div className="card-surface rounded-2xl border border-border/50 p-6">
            <h2 className="mb-4 font-semibold">{t("market.resolution")}</h2>
            <p className="leading-relaxed text-muted-foreground">{market.description}</p>
            {market.resolutionSource ? (
              <p className="mt-4 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{t("market.resolutionSource")}</span>{" "}
                {market.resolutionSource}
              </p>
            ) : null}
          </div>

          <div className="card-surface rounded-2xl border border-border/50 p-6">
            <h2 className="mb-4 font-semibold">{t("market.stats")}</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div>
                <p className="mb-1 text-xs text-muted-foreground">{t("market.volume")}</p>
                <p className="font-semibold tabular-nums">{formatVolume(market.volume)}</p>
              </div>
              <div>
                <p className="mb-1 text-xs text-muted-foreground">{t("market.activity24h")}</p>
                <p className="font-semibold tabular-nums">{formatVolume(market.volume24h)}</p>
              </div>
              <div>
                <p className="mb-1 text-xs text-muted-foreground">{t("market.created")}</p>
                <p className="font-semibold">{formatDate(market.createdAt, undefined, intlTag)}</p>
              </div>
              <div>
                <p className="mb-1 text-xs text-muted-foreground">{t("market.endDate")}</p>
                <p className="font-semibold">{formatDate(market.endDate, undefined, intlTag)}</p>
              </div>
            </div>
          </div>

          <MarketComments marketId={market.id} initialComments={data.comments} />
        </div>

        <div className="lg:col-span-1">
          <TradingPanel market={market} />
        </div>
      </div>
    </Layout>
  );
}
