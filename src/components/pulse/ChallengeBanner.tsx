import { Button } from "@/components/ui/button";
import { claimChallenge } from "@/lib/pulse-api";
import { useInvalidatePulse, useMyPulse } from "@/lib/pulse-query";
import { toast } from "sonner";
import { Flame, Gift } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export function ChallengeBanner() {
  const me = useMyPulse();
  const invalidate = useInvalidatePulse();
  const [pending, setPending] = useState(false);
  const { t } = useI18n();
  const challenge = me.data?.challenge;
  if (!challenge) return null;

  const pct = Math.min(100, (challenge.progress / challenge.targetTrades) * 100);
  const ready = challenge.progress >= challenge.targetTrades && !challenge.claimed;

  const claim = async () => {
    setPending(true);
    try {
      const result = await claimChallenge();
      if (!result.ok) toast.error(result.message);
      else {
        toast.success(result.message);
        invalidate();
      }
    } catch {
      toast.error(t("challenge.signIn"));
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="card-surface mb-8 rounded-2xl border border-primary/25 p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="mb-1 flex items-center gap-2 text-sm font-medium text-primary">
            <Flame className="h-4 w-4" />
            {t("challenge.weekly")}
          </div>
          <h2 className="font-display text-lg font-semibold">{t("challenge.title")}</h2>
          <p className="text-sm text-muted-foreground">
            {t("challenge.body", { n: challenge.targetTrades, bonus: challenge.bonusRia })}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm tabular-nums text-muted-foreground">
            {challenge.progress}/{challenge.targetTrades}
          </span>
          {challenge.claimed ? (
            <span className="text-sm font-medium text-success">{t("challenge.claimed")}</span>
          ) : (
            <Button size="sm" disabled={!ready || pending} onClick={() => void claim()}>
              <Gift className="h-4 w-4" />
              {t("challenge.claim", { amount: challenge.bonusRia })}
            </Button>
          )}
        </div>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-secondary">
        <div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
