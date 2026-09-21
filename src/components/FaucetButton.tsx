import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Droplets, Loader2, Check } from "lucide-react";
import { toast } from "sonner";
import { usePulse } from "@/store/pulse";

export function FaucetButton() {
  const [isLoading, setIsLoading] = useState(false);
  const wallet = usePulse((s) => s.wallet);
  const claimFaucet = usePulse((s) => s.claimFaucet);
  const claimed =
    !!wallet.faucetClaimedAt &&
    Date.now() - wallet.faucetClaimedAt < 24 * 60 * 60 * 1000;

  if (!wallet.connected) return null;

  const handleClaim = async () => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    const result = claimFaucet();
    if (result.ok) toast.success("Faucet claimed", { description: result.message });
    else toast.error("Claim failed", { description: result.message });
    setIsLoading(false);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleClaim}
      disabled={isLoading || claimed}
      className="hidden gap-2 border-primary/30 text-primary hover:bg-primary/10 sm:inline-flex"
    >
      {isLoading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Claiming
        </>
      ) : claimed ? (
        <>
          <Check className="h-4 w-4" />
          Claimed
        </>
      ) : (
        <>
          <Droplets className="h-4 w-4" />
          Faucet
        </>
      )}
    </Button>
  );
}
