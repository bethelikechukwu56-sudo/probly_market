import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Share2 } from "lucide-react";
import { sharePrediction } from "@/lib/share-card";
import { toast } from "sonner";
import type { Market } from "@/types/market";
import { useI18n } from "@/lib/i18n";

export function ShareMarketButton({ market }: { market: Market }) {
  const [pending, setPending] = useState(false);
  const { t } = useI18n();

  const share = async () => {
    setPending(true);
    try {
      const mode = await sharePrediction({
        title: market.title,
        yesPrice: market.yesPrice,
        noPrice: market.noPrice,
        category: market.category,
        url: window.location.href,
      });
      toast.success(mode === "shared" ? t("market.shared") : t("market.downloaded"));
    } catch (err) {
      toast.error(err instanceof Error ? err.message : t("market.shareError"));
    } finally {
      setPending(false);
    }
  };

  return (
    <Button variant="ghost" size="sm" onClick={() => void share()} disabled={pending}>
      {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Share2 className="h-4 w-4" />}
      {t("market.share")}
    </Button>
  );
}
