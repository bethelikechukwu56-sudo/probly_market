import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Market } from "@/types/market";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { buyShares } from "@/lib/pulse-api";
import { useInvalidatePulse, useMarketDetail, useMyPulse } from "@/lib/pulse-query";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { toast } from "sonner";
import { Wallet, ArrowRight, Loader2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function TradingPanel({ market }: { market: Market }) {
  const [selectedOutcome, setSelectedOutcome] = useState<"yes" | "no">("yes");
  const [amount, setAmount] = useState("");
  const [pending, setPending] = useState(false);
  const navigate = useNavigate();
  const { user, isPending } = useCurrentUserState();
  const me = useMyPulse();
  const detail = useMarketDetail(market.id);
  const invalidate = useInvalidatePulse();
  const { t } = useI18n();
  const live = detail.data?.market ?? market;
  const wallet = me.data?.wallet;
  const price = selectedOutcome === "yes" ? live.yesPrice : live.noPrice;
  const parsed = parseFloat(amount);
  const shares = Number.isFinite(parsed) && parsed > 0 ? parsed / price : 0;
  const potentialReturn = shares;
  const potentialProfit = potentialReturn - (parsed || 0);

  const handleTrade = async () => {
    if (isPending) return;
    if (!user) {
      void navigate({ to: "/login" });
      return;
    }
    if (!Number.isFinite(parsed) || parsed <= 0) {
      toast.error(t("trade.invalid"), { description: t("trade.invalidBody") });
      return;
    }
    setPending(true);
    try {
      const result = await buyShares({
        data: { marketId: live.id, outcome: selectedOutcome, amount: parsed },
      });
      if (!result.ok) {
        toast.error(t("trade.failed"), { description: result.message });
        return;
      }
      toast.success(t("trade.executed"), { description: result.message });
      setAmount("");
      invalidate(live.id);
    } catch {
      toast.error(t("trade.signIn"));
      void navigate({ to: "/login" });
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="card-surface sticky top-24 rounded-2xl border border-border/50 p-5">
      <h3 className="font-display mb-4 text-lg font-semibold">{t("trade.title")}</h3>

      <div className="mb-4 flex gap-2">
        <button
          type="button"
          onClick={() => setSelectedOutcome("yes")}
          className={cn(
            "min-h-12 flex-1 rounded-xl px-4 text-sm font-semibold transition-colors",
            selectedOutcome === "yes"
              ? "bg-success text-success-foreground"
              : "border border-success/30 bg-success/10 text-success hover:bg-success/20",
          )}
        >
          {t("yes")} {(live.yesPrice * 100).toFixed(0)}¢
        </button>
        <button
          type="button"
          onClick={() => setSelectedOutcome("no")}
          className={cn(
            "min-h-12 flex-1 rounded-xl px-4 text-sm font-semibold transition-colors",
            selectedOutcome === "no"
              ? "bg-danger text-danger-foreground"
              : "border border-danger/30 bg-danger/10 text-danger hover:bg-danger/20",
          )}
        >
          {t("no")} {(live.noPrice * 100).toFixed(0)}¢
        </button>
      </div>

      <div className="mb-4">
        <label className="mb-2 block text-sm text-muted-foreground">{t("trade.amount")}</label>
        <Input
          type="number"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="text-lg font-semibold"
          disabled={pending}
          min="0"
        />
        {wallet ? (
          <p className="mt-1 text-xs text-muted-foreground tabular-nums">
            {t("trade.wallet", { balance: wallet.balance.toFixed(2) })}
          </p>
        ) : user ? (
          <p className="mt-1 text-xs text-muted-foreground">{t("trade.provisioning")}</p>
        ) : (
          <p className="mt-1 text-xs text-muted-foreground">
            <Link to="/login" className="text-primary hover:underline">
              {t("nav.signIn")}
            </Link>{" "}
            {t("trade.signInWallet")}
          </p>
        )}
      </div>

      <div className="mb-4 flex gap-2">
        {[10, 50, 100, 250].map((val) => (
          <button
            key={val}
            type="button"
            onClick={() => setAmount(String(val))}
            disabled={pending}
            className="min-h-10 flex-1 rounded-lg bg-secondary text-xs font-medium transition-colors hover:bg-secondary/80 disabled:opacity-50"
          >
            ${val}
          </button>
        ))}
      </div>

      {shares > 0 ? (
        <div className="mb-4 space-y-2 rounded-xl bg-secondary/50 p-4">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">{t("trade.shares")}</span>
            <span className="font-medium tabular-nums">{shares.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">{t("trade.avgPrice")}</span>
            <span className="font-medium tabular-nums">{(price * 100).toFixed(1)}¢</span>
          </div>
          <div className="flex justify-between border-t border-border/50 pt-2 text-sm">
            <span className="text-muted-foreground">{t("trade.return")}</span>
            <span className="font-semibold text-success tabular-nums">
              ${potentialReturn.toFixed(2)} (
              {parsed > 0 ? `+${((potentialProfit / parsed) * 100).toFixed(0)}%` : "0%"})
            </span>
          </div>
        </div>
      ) : null}

      <Button
        onClick={() => void handleTrade()}
        className="w-full"
        variant={selectedOutcome === "yes" ? "yesActive" : "noActive"}
        size="lg"
        disabled={pending || isPending}
      >
        {pending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {t("trade.processing")}
          </>
        ) : !user ? (
          <>
            <Wallet className="h-4 w-4" />
            {t("trade.signIn")}
          </>
        ) : (
          <>
            {t("trade.buy", { side: selectedOutcome === "yes" ? t("yes") : t("no") })}
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">{t("trade.disclaimer")}</p>
    </div>
  );
}
