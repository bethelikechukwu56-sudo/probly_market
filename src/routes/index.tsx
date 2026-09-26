import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/layout/Layout";
import { CategoryTabs } from "@/components/markets/CategoryTabs";
import { MarketGrid } from "@/components/markets/MarketGrid";
import { StatsBar } from "@/components/markets/StatsBar";
import { HotMarkets } from "@/components/markets/HotMarkets";
import { ChallengeBanner } from "@/components/pulse/ChallengeBanner";
import { Category } from "@/types/market";
import { Sparkles } from "lucide-react";
import { listHome } from "@/lib/pulse-api";
import { useHomePulse } from "@/lib/pulse-query";
import { useCurrentUser } from "@/lib/auth/use-current-user";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  loader: () => listHome(),
  component: Home,
});

function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const initial = Route.useLoaderData();
  const query = useHomePulse();
  const data = query.data ?? initial;
  const user = useCurrentUser();
  const { t } = useI18n();
  const markets = data.markets;
  const filtered = useMemo(() => {
    if (activeCategory === "all") return markets;
    return markets.filter((m) => m.category === activeCategory);
  }, [activeCategory, markets]);

  return (
    <Layout>
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium text-primary">{t("home.live")}</span>
        </div>
        <h1 className="font-display mb-2 text-3xl font-bold md:text-4xl">{t("home.title")}</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">{t("home.subtitle")}</p>
      </div>
      {user ? <ChallengeBanner /> : null}
      <StatsBar {...data.overview} />
      <HotMarkets markets={data.hot} />
      <div className="mb-6">
        <CategoryTabs activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      </div>
      <MarketGrid markets={filtered} />
    </Layout>
  );
}
