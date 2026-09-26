import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/layout/Layout";
import { Trophy, TrendingUp, BarChart3, Medal } from "lucide-react";
import { cn, formatAddress, formatVolume } from "@/lib/utils";
import { getLeaderboard } from "@/lib/pulse-api";
import { useLeaderboard } from "@/lib/pulse-query";
import { useCurrentUser } from "@/lib/auth/use-current-user";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/leaderboard")({
  loader: () => getLeaderboard(),
  component: LeaderboardPage,
});

function LeaderboardPage() {
  const initial = Route.useLoaderData();
  const query = useLeaderboard();
  const ranked = query.data ?? initial;
  const user = useCurrentUser();
  const { t } = useI18n();

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="h-5 w-5 text-accent" />;
    if (rank === 2) return <Medal className="h-5 w-5 text-muted-foreground" />;
    if (rank === 3) return <Medal className="h-5 w-5 text-primary" />;
    return (
      <span className="flex h-5 w-5 items-center justify-center text-sm text-muted-foreground">
        {rank}
      </span>
    );
  };

  return (
    <Layout>
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-3">
          <Trophy className="h-6 w-6 text-primary" />
          <h1 className="font-display text-3xl font-bold md:text-4xl">{t("leaderboard.title")}</h1>
        </div>
        <p className="text-lg text-muted-foreground">{t("leaderboard.subtitle")}</p>
      </div>

      {ranked.length >= 3 ? (
        <div className="mb-8 grid grid-cols-3 gap-3 md:gap-4">
          <div className="card-surface order-1 rounded-2xl border border-border/50 p-4 text-center md:p-6">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted md:h-16 md:w-16">
              <Medal className="h-6 w-6 text-muted-foreground md:h-8 md:w-8" />
            </div>
            <p className="truncate font-semibold">{ranked[1].username}</p>
            <p className="text-lg font-bold text-success">+{formatVolume(ranked[1].totalProfit)}</p>
            <p className="text-xs text-muted-foreground">{t("leaderboard.tradesCount", { n: ranked[1].totalTrades })}</p>
          </div>
          <div className="card-surface order-0 -mt-2 rounded-2xl border border-primary/30 p-4 text-center md:order-1 md:-mt-4 md:p-6">
            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 md:h-20 md:w-20">
              <Trophy className="h-8 w-8 text-primary md:h-10 md:w-10" />
            </div>
            <p className="truncate text-lg font-semibold">{ranked[0].username}</p>
            <p className="text-2xl font-bold text-success">+{formatVolume(ranked[0].totalProfit)}</p>
            <p className="text-sm text-muted-foreground">{t("leaderboard.tradesCount", { n: ranked[0].totalTrades })}</p>
          </div>
          <div className="card-surface order-2 rounded-2xl border border-border/50 p-4 text-center md:p-6">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 md:h-16 md:w-16">
              <Medal className="h-6 w-6 text-primary md:h-8 md:w-8" />
            </div>
            <p className="truncate font-semibold">{ranked[2].username}</p>
            <p className="text-lg font-bold text-success">+{formatVolume(ranked[2].totalProfit)}</p>
            <p className="text-xs text-muted-foreground">{t("leaderboard.tradesCount", { n: ranked[2].totalTrades })}</p>
          </div>
        </div>
      ) : null}

      <div className="card-surface overflow-hidden rounded-2xl border border-border/50">
        <div className="hidden grid-cols-12 gap-4 border-b border-border/50 p-4 text-sm font-medium text-muted-foreground md:grid">
          <div className="col-span-1">{t("leaderboard.rank")}</div>
          <div className="col-span-4">{t("leaderboard.trader")}</div>
          <div className="col-span-2 text-right">{t("leaderboard.volume")}</div>
          <div className="col-span-2 text-right">{t("leaderboard.profit")}</div>
          <div className="col-span-2 text-right">{t("leaderboard.trades")}</div>
          <div className="col-span-1 text-right">{t("leaderboard.win")}</div>
        </div>
        {ranked.length > 0 ? (
          <div className="divide-y divide-border/30">
            {ranked.map((trader) => (
              <div
                key={trader.id}
                className={cn(
                  "grid grid-cols-6 items-center gap-2 p-4 md:grid-cols-12 md:gap-4",
                  user?.id === trader.id ? "bg-primary/5" : "",
                )}
              >
                <div className="col-span-1">{getRankIcon(trader.rank)}</div>
                <div className="col-span-3 flex min-w-0 items-center gap-3 md:col-span-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-medium">
                    {trader.username[0]?.toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-medium">{trader.username}</p>
                    <p className="hidden truncate text-xs text-muted-foreground sm:block">
                      {formatAddress(trader.walletAddress)}
                    </p>
                  </div>
                </div>
                <div className="col-span-2 hidden text-right md:block">
                  <span className="inline-flex items-center justify-end gap-1">
                    <BarChart3 className="h-3 w-3 text-muted-foreground" />
                    {formatVolume(trader.totalVolume)}
                  </span>
                </div>
                <div className="col-span-2 text-right">
                  <span
                    className={cn(
                      "font-semibold tabular-nums",
                      trader.totalProfit >= 0 ? "text-success" : "text-danger",
                    )}
                  >
                    {trader.totalProfit >= 0 ? "+" : ""}
                    {formatVolume(trader.totalProfit)}
                  </span>
                </div>
                <div className="col-span-2 hidden text-right tabular-nums md:block">
                  {trader.totalTrades}
                </div>
                <div className="col-span-1 hidden text-right md:block">
                  <span
                    className={cn(
                      "text-sm tabular-nums",
                      trader.winRate >= 50 ? "text-success" : "text-muted-foreground",
                    )}
                  >
                    {trader.winRate.toFixed(0)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center text-muted-foreground">
            <TrendingUp className="mx-auto mb-4 h-12 w-12 opacity-50" />
            <p>{t("leaderboard.empty")}</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
