import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

function parts(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  return { days, hours, minutes, seconds };
}

export function Countdown({ deadline }: { deadline: string }) {
  const { t } = useI18n();
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  if (now == null) {
    return <span className="tabular-nums text-muted-foreground">{t("nft.countdown")}</span>;
  }
  const left = new Date(deadline).getTime() - now;
  if (left <= 0) return <span className="text-danger">{t("nft.ended")}</span>;
  const { days, hours, minutes, seconds } = parts(left);
  const clock = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  return (
    <span className="tabular-nums" suppressHydrationWarning>
      {days > 0 ? `${days}d ${clock}` : clock}
    </span>
  );
}
