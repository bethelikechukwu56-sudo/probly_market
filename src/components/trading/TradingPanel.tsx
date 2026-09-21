import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Market } from "@/types/market";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { usePulse } from "@/store/pulse";
import { toast } from "sonner";
import { Wallet, ArrowRight, Loader2 } from "lucide-react";

export function TradingPanel({ market }: { market: Market }) {
  const [selectedOutcome, setSelectedOutcome] = useState<"yes" | "no">("yes");
  const [amount, setAmount] = useState("");
  const [pending, setPending] = useState(false);
  const navigate = useNavigate();
  const session = usePulse((s) => s.session);
  const wallet = usePulse((s) => s.wallet);
  const connectWallet = usePulse((s) => s.connectWallet);
  const buy = usePulse((s) => s.buy);

  const live = usePulse((s) => s.markets.find((m) => m.id === market.id)) ?? market;
  const price = selectedOutcome === "yes" ? live.yesPrice : live.noPrice;
  const parsed = parseFloat(amount);
  const shares = Number.isFinite(parsed) && parsed > 0 ? parsed / price : 0;
  const potentialReturn = shares;
  const potentialProfit = potentialReturn - (parsed || 0);

  const handleTrade = async () => {
    if (!session) {
      void navigate({ to: "/auth" });
      return;
    }
    if (!wallet.connected) {
      connectWallet();
      return;
    }
    if (!Number.isFinite(parsed) || parsed <= 0) {
      toast.error("Invalid amount", { description: "Enter a valid amount to trade." });
      return;
    }
    setPending(true);
    await new Promise((r) => setTimeout(r, 700));
    const result = buy({ marketId: live.id, outcome: selectedOutcome, amount: parsed });
    setPending(false);
    if (!result.ok) {
      toast.error("Trade failed", { description: result.message });
      return;
    }
    toast.success("Trade executed", { description: result.message });
    setAmount("");
  };

  return (
    <div className="card-surface sticky top-24 rounded-2xl border border-border/50 p-5">
      <h3 className="font-display mb-4 text-lg font-semibold">Trade</h3>

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
          Yes {(live.yesPrice * 100).toFixed(0)}¢
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
          No {(live.noPrice * 100).toFixed(0)}¢
        </button>
      </div>

      <div className="mb-4">
        <label className="mb-2 block text-sm text-muted-foreground">Amount (RIA)</label>
        <Input
          type="number"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="text-lg font-semibold"
          disabled={pending}
          min="0"
        />
        {wallet.connected ? (
          <p className="mt-1 text-xs text-muted-foreground tabular-nums">
            Balance: {wallet.balance.toFixed(2)} RIA
          </p>
        ) : null}
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
            <span className="text-muted-foreground">Shares</span>
            <span className="font-medium tabular-nums">{shares.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Avg Price</span>
            <span className="font-medium tabular-nums">{(price * 100).toFixed(1)}¢</span>
          </div>
          <div className="flex justify-between border-t border-border/50 pt-2 text-sm">
            <span className="text-muted-foreground">Potential return</span>
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
        disabled={pending}
      >
        {pending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Processing
          </>
        ) : !session ? (
          <>
            <Wallet className="h-4 w-4" />
            Sign in to trade
          </>
        ) : !wallet.connected ? (
          <>
            <Wallet className="h-4 w-4" />
            Connect wallet
          </>
        ) : (
          <>
            Buy {selectedOutcome.toUpperCase()}
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">Trades are final · DYOR</p>
    </div>
  );
}
