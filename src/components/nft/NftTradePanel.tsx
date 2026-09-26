import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { buyNft } from "@/lib/nft-api";
import { useInvalidateNft } from "@/lib/nft-query";
import { useMyPulse } from "@/lib/pulse-query";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { NftMarket } from "@/types/nft";
import { Loader2, Wallet } from "lucide-react";
import { toast } from "sonner";

export function NftTradePanel({ market }: { market: NftMarket }) {
  const [side, setSide] = useState<"yes" | "no">("yes");
  const [amount, setAmount] = useState("");
  const [pending, setPending] = useState(false);
  const navigate = useNavigate();
  const { user, isPending } = useCurrentUserState();
  const me = useMyPulse();
  const invalidate = useInvalidateNft();
  const { t } = useI18n();
  const pump = market.kind === "pump_dump";
  const yesLabel = pump ? t("nft.pump") : t("nft.sellOut");
  const noLabel = pump ? t("nft.dump") : t("nft.wont");
  const price = side === "yes" ? market.yesPrice : market.noPrice;
  const parsed = parseFloat(amount);
  const shares = Number.isFinite(parsed) && parsed > 0 ? parsed / price : 0;
  const wallet = me.data?.wallet;
  const closed = market.status !== "active" || new Date(market.deadline).getTime() <= Date.now();

  const trade = async () => {
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
      const result = await buyNft({ data: { marketId: market.id, outcome: side, amount: parsed } });
      if (!result.ok) {
        toast.error(t("trade.failed"), { description: result.message });
        return;
      }
      toast.success(t("trade.executed"), { description: result.message });
      setAmount("");
      invalidate(market.id);
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
      {closed ? (
        <p className="text-sm text-muted-foreground">
          {market.outcome ? t("nft.resolvedAs", { outcome: outcomeLabel(market.outcome, t) }) : t("nft.ended")}
        </p>
      ) : (
        <>
          <div className="mb-4 flex gap-2">
            <button
              type="button"
              onClick={() => setSide("yes")}
              className={cn(
                "min-h-12 flex-1 rounded-xl px-3 text-sm font-semibold transition-colors",
                side === "yes"
                  ? "bg-success text-success-foreground"
                  : "border border-success/30 bg-success/10 text-success hover:bg-success/20",
              )}
            >
              {yesLabel} {(market.yesPrice * 100).toFixed(0)}¢
            </button>
            <button
              type="button"
              onClick={() => setSide("no")}
              className={cn(
                "min-h-12 flex-1 rounded-xl px-3 text-sm font-semibold transition-colors",
                side === "no"
                  ? "bg-danger text-danger-foreground"
                  : "border border-danger/30 bg-danger/10 text-danger hover:bg-danger/20",
              )}
            >
              {noLabel} {(market.noPrice * 100).toFixed(0)}¢
            </button>
          </div>
          <label className="mb-2 block text-sm text-muted-foreground">{t("trade.amount")}</label>
          <Input value={amount} onChange={(event) => setAmount(event.target.value)} inputMode="decimal" placeholder="50" />
          <div className="mt-3 space-y-1 text-sm text-muted-foreground">
            <div className="flex justify-between">
              <span>{t("trade.shares")}</span>
              <span className="tabular-nums text-foreground">{shares.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>{t("trade.return")}</span>
              <span className="tabular-nums text-foreground">{shares.toFixed(2)} RIA</span>
            </div>
          </div>
          {wallet ? (
            <p className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
              <Wallet className="h-3.5 w-3.5" />
              {t("trade.wallet", { balance: wallet.balance.toFixed(2) })}
            </p>
          ) : user ? null : (
            <p className="mt-3 text-xs text-muted-foreground">
              <Link to="/login" className="text-primary">{t("nav.signIn")}</Link> {t("trade.signInWallet")}
            </p>
          )}
          <Button className="mt-4 w-full" disabled={pending} onClick={() => void trade()}>
            {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
            {t("trade.buy", { side: side === "yes" ? yesLabel : noLabel })}
          </Button>
          <p className="mt-3 text-xs text-muted-foreground">{t("trade.disclaimer")}</p>
        </>
      )}
    </div>
  );
}

function outcomeLabel(
  outcome: string,
  t: (key: "nft.pump" | "nft.dump" | "nft.sellOut" | "nft.wont" | "nft.void", vars?: Record<string, string | number>) => string,
) {
  if (outcome === "pump") return t("nft.pump");
  if (outcome === "dump") return t("nft.dump");
  if (outcome === "sell_out") return t("nft.sellOut");
  if (outcome === "miss") return t("nft.wont");
  return t("nft.void");
}
