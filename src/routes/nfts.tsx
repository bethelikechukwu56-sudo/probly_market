import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/layout/Layout";
import { NftCard } from "@/components/nft/NftCard";
import { Button } from "@/components/ui/button";
import { listNfts } from "@/lib/nft-api";
import { useNftList } from "@/lib/nft-query";
import { useCurrentUser } from "@/lib/auth/use-current-user";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Gem, Plus } from "lucide-react";

export const Route = createFileRoute("/nfts")({
  loader: () => listNfts(),
  component: NftHome,
});

function NftHome() {
  const initial = Route.useLoaderData();
  const query = useNftList();
  const data = query.data ?? initial;
  const [tab, setTab] = useState<"pump_dump" | "sell_out">("pump_dump");
  const user = useCurrentUser();
  const { t } = useI18n();
  const markets = tab === "pump_dump" ? data.pump : data.mint;

  return (
    <Layout>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <Gem className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">{t("nft.kicker")}</span>
          </div>
          <h1 className="font-display mb-2 text-3xl font-bold md:text-4xl">{t("nft.title")}</h1>
          <p className="max-w-2xl text-lg text-muted-foreground">{t("nft.subtitle")}</p>
        </div>
        {user ? (
          <Link to="/nft/new">
            <Button variant="ghost" className="gap-2">
              <Plus className="h-4 w-4" />
              {t("nft.create")}
            </Button>
          </Link>
        ) : null}
      </div>

      <div className="-mx-4 mb-6 flex gap-2 overflow-x-auto px-4 pb-2">
        {(
          [
            ["pump_dump", t("nft.tabPump")],
            ["sell_out", t("nft.tabMint")],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={cn(
              "comic-tab min-h-11 shrink-0 rounded-lg px-4 text-sm font-extrabold transition-transform",
              tab === id ? "bg-accent text-accent-foreground" : "bg-card text-muted-foreground hover:bg-secondary",
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {markets.length === 0 ? (
        <div className="card-surface rounded-2xl border border-border/50 px-6 py-16 text-center">
          <h2 className="mb-2 text-lg font-semibold">{t("nft.empty")}</h2>
          <p className="text-muted-foreground">{t("nft.emptyBody")}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {markets.map((market) => (
            <NftCard key={market.id} market={market} />
          ))}
        </div>
      )}
    </Layout>
  );
}
