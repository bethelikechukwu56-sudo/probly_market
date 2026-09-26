import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/layout/Layout";
import { PriceChart } from "@/components/charts/PriceChart";
import { Countdown } from "@/components/nft/Countdown";
import { FloorChart } from "@/components/nft/FloorChart";
import { formatFloor } from "@/components/nft/NftCard";
import { NftComments } from "@/components/nft/NftComments";
import { NftTradePanel } from "@/components/nft/NftTradePanel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getNft } from "@/lib/nft-api";
import { useMyNftStake, useNftDetail } from "@/lib/nft-query";
import { shareNftResult } from "@/lib/share-card";
import { useI18n } from "@/lib/i18n";
import { formatDate, formatVolume } from "@/lib/utils";
import { ArrowLeft, BarChart3, Clock, Share2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/nft/$id")({
  loader: ({ params }) => getNft({ data: { id: params.id } }),
  component: NftDetailPage,
});

function NftDetailPage() {
  const { id } = Route.useParams();
  const initial = Route.useLoaderData();
  const query = useNftDetail(id);
  const data = query.data ?? initial;
  const market = data.market;
  const stake = useMyNftStake(id);
  const { t, intlTag } = useI18n();

  if (!market) {
    return (
      <Layout>
        <div className="flex flex-col items-center py-16 text-center">
          <h1 className="mb-4 text-2xl font-bold">{t("nft.notFound")}</h1>
          <Link to="/nfts">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4" />
              {t("nft.back")}
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const pump = market.kind === "pump_dump";
  const yesLabel = pump ? t("nft.pump") : t("nft.sellOut");
  const noLabel = pump ? t("nft.dump") : t("nft.wont");
  const detailLine =
    pump && market.floorNative != null
      ? `${t("nft.floor")} ${formatFloor(market.floorNative, market.currency)}`
      : market.minted != null && market.supply != null
        ? `${Math.round(market.minted).toLocaleString(intlTag)} / ${Math.round(market.supply).toLocaleString(intlTag)}`
        : market.name;
  const my = stake.data;
  const result = market.outcome
    ? t("nft.resolvedAs", { outcome: labelOutcome(market.outcome, yesLabel, noLabel, t("nft.void")) })
    : my
      ? `${my.outcome === "yes" ? yesLabel : noLabel} @ ${Math.round(my.avgPrice * 100)}¢`
      : undefined;

  const share = async () => {
    try {
      const mode = await shareNftResult({
        title: market.name,
        eyebrow: pump ? t("nft.tabPump") : t("nft.tabMint"),
        leftLabel: yesLabel,
        rightLabel: noLabel,
        leftPrice: market.yesPrice,
        rightPrice: market.noPrice,
        detail: detailLine,
        result,
        url: window.location.href,
      });
      toast.success(mode === "shared" ? t("market.shared") : t("market.downloaded"));
    } catch {
      toast.error(t("market.shareError"));
    }
  };

  return (
    <Layout>
      <Link to="/nfts" className="mb-6 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" />
        {t("nft.back")}
      </Link>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="card-surface rounded-2xl border border-border/50 p-6">
            <div className="mb-4 flex items-start gap-4">
              {market.imageUrl ? (
                <img src={market.imageUrl} alt="" referrerPolicy="no-referrer" className="h-16 w-16 rounded-xl bg-secondary object-cover" />
              ) : (
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-secondary">
                  <BarChart3 className="h-8 w-8 text-muted-foreground" />
                </div>
              )}
              <div className="flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">{pump ? t("nft.tabPump") : t("nft.tabMint")}</Badge>
                  <Badge variant="outline">{market.status === "active" ? t("market.active") : t("nft.resolved")}</Badge>
                </div>
                <h1 className="font-display mb-2 text-2xl font-bold">{market.name}</h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <Countdown deadline={market.deadline} />
                  </span>
                  <span>{market.chain}</span>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Button variant="outline" size="sm" className="gap-2" onClick={() => void share()}>
                <Share2 className="h-4 w-4" />
                {t("nft.share")}
              </Button>
            </div>
          </div>

          <div className="card-surface rounded-2xl border border-border/50 p-6">
            <h2 className="mb-4 font-semibold">{pump ? t("nft.floorChart") : t("nft.mintProgress")}</h2>
            {pump ? (
              <>
                <p className="mb-4 text-3xl font-bold tabular-nums">
                  {market.floorNative != null ? formatFloor(market.floorNative, market.currency) : t("nft.awaiting")}
                </p>
                <FloorChart points={market.floorHistory} currency={market.currency} />
                {market.quoteSource === "coingecko" ? (
                  <p className="mt-2 text-xs text-muted-foreground">{t("nft.floorNote")}</p>
                ) : null}
              </>
            ) : (
              <MintBlock minted={market.minted} supply={market.supply} mintPrice={market.mintPrice} currency={market.currency} />
            )}
          </div>

          <div className="card-surface rounded-2xl border border-border/50 p-6">
            <h2 className="mb-4 font-semibold">{t("market.sentiment")}</h2>
            <div className="mb-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-success/20 bg-success/10 p-4">
                <p className="mb-2 text-sm text-muted-foreground">{yesLabel}</p>
                <span className="text-3xl font-bold text-success tabular-nums">{(market.yesPrice * 100).toFixed(0)}¢</span>
              </div>
              <div className="rounded-xl border border-danger/20 bg-danger/10 p-4">
                <p className="mb-2 text-sm text-muted-foreground">{noLabel}</p>
                <span className="text-3xl font-bold text-danger tabular-nums">{(market.noPrice * 100).toFixed(0)}¢</span>
              </div>
            </div>
            <PriceChart yesHistory={data.yesHistory} noHistory={data.noHistory} yesLabel={yesLabel} noLabel={noLabel} />
          </div>

          <div className="card-surface rounded-2xl border border-border/50 p-6">
            <h2 className="mb-4 font-semibold">{t("market.resolution")}</h2>
            <p className="leading-relaxed text-muted-foreground">{market.description}</p>
          </div>

          <div className="card-surface rounded-2xl border border-border/50 p-6">
            <h2 className="mb-4 font-semibold">{t("market.stats")}</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <Stat label={t("market.volume")} value={formatVolume(market.volume)} />
              <Stat label={t("market.activity24h")} value={formatVolume(market.volume24h)} />
              <Stat label={t("nft.openPrint")} value={pump && market.openFloor != null ? formatFloor(market.openFloor, market.currency) : market.openMinted != null ? String(Math.round(market.openMinted)) : "—"} />
              <Stat label={t("market.endDate")} value={formatDate(market.deadline, undefined, intlTag)} />
            </div>
          </div>

          <NftComments marketId={market.id} comments={data.comments} />
        </div>
        <div className="lg:col-span-1">
          <NftTradePanel market={market} />
        </div>
      </div>
    </Layout>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-1 text-xs text-muted-foreground">{label}</p>
      <p className="font-semibold tabular-nums">{value}</p>
    </div>
  );
}

function MintBlock({
  minted,
  supply,
  mintPrice,
  currency,
}: {
  minted: number | null;
  supply: number | null;
  mintPrice: number | null;
  currency: string;
}) {
  const { t, intlTag } = useI18n();
  const ratio = minted != null && supply ? Math.min(1, minted / supply) : 0;
  return (
    <div>
      <p className="mb-2 text-3xl font-bold tabular-nums">
        {minted != null && supply != null
          ? `${Math.round(minted).toLocaleString(intlTag)} / ${Math.round(supply).toLocaleString(intlTag)}`
          : t("nft.awaiting")}
      </p>
      <div className="mb-3 h-2 overflow-hidden rounded-full bg-secondary">
        <div className="h-full rounded-full bg-primary" style={{ width: `${ratio * 100}%` }} />
      </div>
      {mintPrice != null ? (
        <p className="text-sm text-muted-foreground">
          {t("nft.mintPrice")} {formatFloor(mintPrice, currency)}
        </p>
      ) : null}
    </div>
  );
}

function labelOutcome(outcome: string, yes: string, no: string, voided: string) {
  if (outcome === "pump" || outcome === "sell_out") return yes;
  if (outcome === "dump" || outcome === "miss") return no;
  return voided;
}
