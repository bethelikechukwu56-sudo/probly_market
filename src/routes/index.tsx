import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/layout/Layout";
import { CategoryTabs } from "@/components/markets/CategoryTabs";
import { MarketGrid } from "@/components/markets/MarketGrid";
import { StatsBar } from "@/components/markets/StatsBar";
import { Category } from "@/types/market";
import { Sparkles } from "lucide-react";
import { usePulse } from "@/store/pulse";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const markets = usePulse((s) => s.markets);

  const filtered = useMemo(() => {
    if (activeCategory === "all") return markets;
    return markets.filter((m) => m.category === activeCategory);
  }, [activeCategory, markets]);

  return (
    <Layout>
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium text-primary">Live markets</span>
        </div>
        <h1 className="font-display mb-2 text-3xl font-bold md:text-4xl">Prediction Markets</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Trade on real-world events. Fast, transparent, paper-settled on Rialo.
        </p>
      </div>
      <StatsBar />
      <div className="mb-6">
        <CategoryTabs activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      </div>
      <MarketGrid markets={filtered} />
    </Layout>
  );
}
