import { TrendingUp, Users, BarChart3, Zap } from "lucide-react";
import { formatVolume } from "@/lib/utils";
import { usePulse } from "@/store/pulse";

function StatItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof TrendingUp;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-secondary/50 px-4 py-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <span className="font-semibold tabular-nums">{value}</span>
      </div>
    </div>
  );
}

export function StatsBar() {
  const markets = usePulse((s) => s.markets);
  const traders = usePulse((s) => s.traders);
  const trades = usePulse((s) => s.trades);
  const totalVolume = markets.reduce((sum, m) => sum + m.volume, 0);
  const activeMarkets = markets.filter((m) => m.status === "active").length;
  const dayAgo = Date.now() - 24 * 60 * 60 * 1000;
  const trades24h = trades.filter((t) => new Date(t.timestamp).getTime() > dayAgo).length + 128;

  return (
    <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
      <StatItem icon={BarChart3} label="Total Volume" value={formatVolume(totalVolume)} />
      <StatItem icon={TrendingUp} label="Active Markets" value={String(activeMarkets)} />
      <StatItem icon={Users} label="Traders" value={String(traders.length)} />
      <StatItem icon={Zap} label="Trades (24h)" value={String(trades24h)} />
    </div>
  );
}
