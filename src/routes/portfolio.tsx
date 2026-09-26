import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/layout/Layout";
import { PositionCard } from "@/components/portfolio/PositionCard";
import { TradeHistory } from "@/components/portfolio/TradeHistory";
import { StatsDashboard } from "@/components/pulse/StatsDashboard";
import { ChallengeBanner } from "@/components/pulse/ChallengeBanner";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wallet, TrendingUp, TrendingDown, History, PieChart, LogIn } from "lucide-react";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { useMyPulse } from "@/lib/pulse-query";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/portfolio")({ component: PortfolioPage });

function PortfolioPage() {
  const { user, isPending } = useCurrentUserState();
  const me = useMyPulse();
  const { t } = useI18n();

  if (isPending) {
    return (
      <Layout>
        <div className="h-40 animate-pulse rounded-2xl bg-secondary" />
      </Layout>
    );
  }
  if (!user) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
            <LogIn className="h-10 w-10 text-muted-foreground" />
          </div>
          <h1 className="font-display mb-2 text-2xl font-bold">{t("portfolio.signInTitle")}</h1>
          <p className="mb-6 max-w-md text-muted-foreground">{t("portfolio.signInBody")}</p>
          <Link to="/login">
            <Button variant="wallet" size="lg">
              <LogIn className="h-4 w-4" />
              {t("nav.signIn")}
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const wallet = me.data?.wallet;
  const positions = me.data?.positions ?? [];
  const trades = me.data?.trades ?? [];
  const totalValue = positions.reduce((sum, pos) => sum + pos.shares * pos.currentPrice, 0);
  const totalPnl = positions.reduce((sum, pos) => sum + pos.pnl, 0);
  const cost = totalValue - totalPnl;
  const pnlPercent = cost > 0 ? (totalPnl / cost) * 100 : 0;
  const isProfitable = totalPnl >= 0;

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="font-display mb-2 text-3xl font-bold md:text-4xl">{t("portfolio.title")}</h1>
        <p className="text-muted-foreground">{t("portfolio.subtitle")}</p>
      </div>

      <ChallengeBanner />
      <StatsDashboard />

      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="card-surface rounded-2xl border border-border/50 p-6">
          <div className="mb-2 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Wallet className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">{t("portfolio.wallet")}</span>
          </div>
          <p className="text-3xl font-bold tabular-nums">{(wallet?.balance ?? 0).toFixed(2)} RIA</p>
          {wallet ? (
            <p className="mt-1 truncate text-xs text-muted-foreground">{wallet.address}</p>
          ) : null}
        </div>
        <div className="card-surface rounded-2xl border border-border/50 p-6">
          <div className="mb-2 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <PieChart className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">{t("portfolio.value")}</span>
          </div>
          <p className="text-3xl font-bold tabular-nums">${totalValue.toFixed(2)}</p>
        </div>
        <div className="card-surface rounded-2xl border border-border/50 p-6">
          <div className="mb-2 flex items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-lg ${isProfitable ? "bg-success/10" : "bg-danger/10"}`}
            >
              {isProfitable ? (
                <TrendingUp className="h-5 w-5 text-success" />
              ) : (
                <TrendingDown className="h-5 w-5 text-danger" />
              )}
            </div>
            <span className="text-sm text-muted-foreground">{t("portfolio.pnl")}</span>
          </div>
          <div className="flex items-baseline gap-2">
            <p className={`text-3xl font-bold tabular-nums ${isProfitable ? "text-success" : "text-danger"}`}>
              {isProfitable ? "+" : ""}${totalPnl.toFixed(2)}
            </p>
            {totalValue > 0 ? (
              <span className={`text-sm ${isProfitable ? "text-success" : "text-danger"}`}>
                {isProfitable ? "+" : ""}
                {pnlPercent.toFixed(1)}%
              </span>
            ) : null}
          </div>
        </div>
      </div>

      <Tabs defaultValue="positions" className="space-y-6">
        <TabsList className="bg-secondary">
          <TabsTrigger value="positions" className="gap-2">
            <PieChart className="h-4 w-4" />
            {t("portfolio.positions")}
          </TabsTrigger>
          <TabsTrigger value="history" className="gap-2">
            <History className="h-4 w-4" />
            {t("portfolio.history")}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="positions">
          {positions.length === 0 ? (
            <div className="py-12 text-center text-muted-foreground">
              <p>{t("portfolio.noPositions")}</p>
              <Link to="/" className="mt-2 inline-block text-sm text-primary hover:underline">
                {t("portfolio.browse")}
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {positions.map((position) => (
                <PositionCard key={position.id} position={position} />
              ))}
            </div>
          )}
        </TabsContent>
        <TabsContent value="history">
          <TradeHistory trades={trades} />
        </TabsContent>
      </Tabs>
    </Layout>
  );
}
