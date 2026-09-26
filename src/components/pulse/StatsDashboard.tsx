import { useMyPulse } from "@/lib/pulse-query";
import { Award, Flame, Percent, Layers, Compass } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const BADGE_KEYS = {
  first_prediction: { title: "badge.first", blurb: "badge.firstBlurb" },
  ten_wins: { title: "badge.ten", blurb: "badge.tenBlurb" },
  top_ten: { title: "badge.top", blurb: "badge.topBlurb" },
} as const;

export function StatsDashboard() {
  const me = useMyPulse();
  const { t } = useI18n();
  const stats = me.data?.stats;
  if (!stats) return null;

  const items = [
    { icon: Percent, label: t("stats.winRate"), value: `${stats.winRate.toFixed(0)}%` },
    { icon: Layers, label: t("stats.predictions"), value: String(stats.totalTrades) },
    {
      icon: Compass,
      label: t("stats.bestCategory"),
      value: stats.bestCategory ? t(`category.${stats.bestCategory}` as "category.crypto") : "—",
    },
    { icon: Flame, label: t("stats.streak"), value: `${stats.streakDays}d` },
  ];

  return (
    <section className="mb-8">
      <div className="mb-3 flex items-center gap-2">
        <Award className="h-5 w-5 text-primary" />
        <h2 className="font-display text-lg font-semibold">{t("stats.title")}</h2>
        {stats.rank ? (
          <span className="text-sm text-muted-foreground">{t("stats.rank", { n: stats.rank })}</span>
        ) : null}
      </div>
      <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="card-surface rounded-2xl border border-border/50 p-4">
            <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
              <item.icon className="h-4 w-4 text-primary" />
              {item.label}
            </div>
            <p className="font-display text-xl font-semibold capitalize tabular-nums">{item.value}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {Object.entries(BADGE_KEYS).map(([id, meta]) => {
          const earned = stats.badges.includes(id);
          return (
            <div
              key={id}
              className={`rounded-xl border px-3 py-2 text-sm ${
                earned
                  ? "border-primary/40 bg-primary/10 text-foreground"
                  : "border-border/50 text-muted-foreground"
              }`}
            >
              <p className="font-medium">{t(meta.title)}</p>
              <p className="text-xs">{earned ? t(meta.blurb) : t("stats.locked")}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
