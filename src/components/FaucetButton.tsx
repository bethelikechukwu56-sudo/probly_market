import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Droplets, Loader2, Check } from "lucide-react";
import { toast } from "sonner";
import { claimFaucet } from "@/lib/pulse-api";
import { useInvalidatePulse, useMyPulse } from "@/lib/pulse-query";
import { useI18n } from "@/lib/i18n";

export function FaucetButton() {
  const [isLoading, setIsLoading] = useState(false);
  const me = useMyPulse();
  const invalidate = useInvalidatePulse();
  const { t } = useI18n();
  const wallet = me.data?.wallet;
  if (!wallet) return null;

  const handleClaim = async () => {
    setIsLoading(true);
    try {
      const result = await claimFaucet();
      if (result.ok) {
        toast.success(t("faucet.claimed"), { description: result.message });
        invalidate();
      } else {
        toast.error(result.message);
      }
    } catch {
      toast.error(t("trade.signIn"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => void handleClaim()}
      disabled={isLoading || !wallet.faucetReady}
      className="hidden gap-2 border-primary/30 text-primary hover:bg-primary/10 sm:inline-flex"
    >
      {isLoading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          {t("faucet.claiming")}
        </>
      ) : !wallet.faucetReady ? (
        <>
          <Check className="h-4 w-4" />
          {t("faucet.claimed")}
        </>
      ) : (
        <>
          <Droplets className="h-4 w-4" />
          {t("faucet.label")}
        </>
      )}
    </Button>
  );
}
