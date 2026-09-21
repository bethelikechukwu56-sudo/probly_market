import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/layout/Layout";
import { PositionCard } from "@/components/portfolio/PositionCard";
import { TradeHistory } from "@/components/portfolio/TradeHistory";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wallet, TrendingUp, TrendingDown, History, PieChart, LogIn } from "lucide-react";
import { usePulse } from "@/store/pulse";

export const Route = createFileRoute("/portfolio")({ component: PortfolioPage });

function PortfolioPage() {
  const session = usePulse((s) => s.session);
  const wallet = usePulse((s) => s.wallet);
  const connectWallet = usePulse((s) => s.connectWallet);
  const positions = usePulse((s) => s.positions);
  const trades = usePulse((s) => s.trades);

  const totalValue = positions.reduce((sum, pos) => sum + pos.shares * pos.currentPrice, 0);
  const totalPnl = positions.reduce((sum, pos) => sum + pos.pnl, 0);
  const cost = totalValue - totalPnl;
  const pnlPercent = cost > 0 ? (totalPnl / cost) * 100 : 0;
  const isProfitable = totalPnl >= 0;

  if (!session) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
            <LogIn className="h-10 w-10 text-muted-foreground" />
          </div>
          <h1 className="font-display mb-2 text-2xl font-bold">Sign in required</h1>
          <p className="mb-6 max-w-md text-muted-foreground">
            Sign in to view your portfolio, track positions, and see your trading history.
          </p>
          <Link to="/auth">
            <Button variant="wallet" size="lg">
              <LogIn className="h-4 w-4" />
              Sign in
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  if (!wallet.connected) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
            <Wallet className="h-10 w-10 text-muted-foreground" />
          </div>
          <h1 className="font-display mb-2 text-2xl font-bold">Connect your wallet</h1>
          <p className="mb-6 max-w-md text-muted-foreground">
            Connect a paper wallet to view positions and trading history.
          </p>
          <Button variant="wallet" size="lg" onClick={connectWallet}>
            <Wallet className="h-4 w-4" />
            Connect wallet
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="font-display mb-2 text-3xl font-bold md:text-4xl">Portfolio</h1>
        <p className="text-muted-foreground">Track your positions and trading activity</p>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="card-surface rounded-2xl border border-border/50 p-6">
          <div className="mb-2 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Wallet className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">Wallet balance</span>
          </div>
          <p className="text-3xl font-bold tabular-nums">{wallet.balance.toFixed(2)} RIA</p>
        </div>
        <div className="card-surface rounded-2xl border border-border/50 p-6">
          <div className="mb-2 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <PieChart className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">Portfolio value</span>
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
            <span className="text-sm text-muted-foreground">Total P&L</span>
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
            Positions
          </TabsTrigger>
          <TabsTrigger value="history" className="gap-2">
            <History className="h-4 w-4" />
            History
          </TabsTrigger>
        </TabsList>
        <TabsContent value="positions">
          {positions.length === 0 ? (
            <div className="py-12 text-center text-muted-foreground">
              <p>No open positions yet</p>
              <Link to="/" className="mt-2 inline-block text-sm text-primary hover:underline">
                Browse markets to start trading
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
