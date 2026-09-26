import { TrendingUp, Users, BarChart3, Zap } from "lucide-react";
import { formatVolume } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";

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
    <div className="card-surface flex items-center gap-3 rounded-xl px-4 py-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-ink bg-accent text-accent-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <span className="font-semibold tabular-nums">{value}</span>
      </div>
    </div>
  );
}

export function StatsBar({
  totalVolume,
  activeMarkets,
  traders,
  trades24h,
}: {
  totalVolume: number;
  activeMarkets: number;
  traders: number;
  trades24h: number;
}) {
  const { t } = useI18n();
  return (
    <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
      <StatItem icon={BarChart3} label={t("stats.volume")} value={formatVolume(totalVolume)} />
      <StatItem icon={TrendingUp} label={t("stats.active")} value={String(activeMarkets)} />
      <StatItem icon={Users} label={t("stats.traders")} value={String(traders)} />
      <StatItem icon={Zap} label={t("stats.trades24h")} value={String(trades24h)} />
    </div>
  );
}
