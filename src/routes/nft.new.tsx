import { useState, type ReactNode } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createNftMarket } from "@/lib/nft-api";
import { useInvalidateNft } from "@/lib/nft-query";
import { useMyPulse } from "@/lib/pulse-query";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { useI18n } from "@/lib/i18n";
import { type NftKind } from "@/types/nft";
import { ArrowLeft, Loader2, LogIn } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/nft/new")({ component: CreateNftPage });

function CreateNftPage() {
  const { user, isPending } = useCurrentUserState();
  const { t } = useI18n();
  const me = useMyPulse();
  const navigate = useNavigate();
  const invalidate = useInvalidateNft();
  const [kind, setKind] = useState<NftKind>("pump_dump");
  const [name, setName] = useState("");
  const [lookup, setLookup] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [deadline, setDeadline] = useState("");
  const [liquidity, setLiquidity] = useState("50");
  const [manualFloor, setManualFloor] = useState("");
  const [currency, setCurrency] = useState("ETH");
  const [supply, setSupply] = useState("");
  const [minted, setMinted] = useState("");
  const [pending, setPending] = useState(false);

  if (isPending) {
    return (
      <Layout>
        <div className="h-40 animate-pulse rounded-2xl bg-secondary" />
      </Layout>
    );
  }
  if (!user) {
    return (
      <Layout>
        <div className="flex flex-col items-center py-16 text-center">
          <LogIn className="mb-4 h-10 w-10 text-muted-foreground" />
          <h1 className="font-display mb-2 text-2xl font-bold">{t("create.signInTitle")}</h1>
          <p className="mb-6 max-w-md text-muted-foreground">{t("nft.signInBody")}</p>
          <Link to="/login">
            <Button>{t("nav.signIn")}</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const submit = async () => {
    const end = new Date(deadline);
    if (!name.trim() || !deadline || Number.isNaN(end.getTime())) {
      toast.error(t("create.missing"), { description: t("create.missingBody") });
      return;
    }
    setPending(true);
    try {
      const result = await createNftMarket({
        data: {
          kind,
          name: name.trim(),
          lookup: lookup.trim() || undefined,
          imageUrl: imageUrl.trim() || undefined,
          deadline: end.toISOString(),
          primitive: "native_https",
          liquidity: Number(liquidity) || 0,
          manualFloor: manualFloor ? Number(manualFloor) : undefined,
          currency: currency.trim() || undefined,
          supply: supply ? Number(supply) : undefined,
          minted: minted ? Number(minted) : undefined,
        },
      });
      if (!result.ok || !result.id) {
        toast.error(t("create.failed"), { description: result.message });
        return;
      }
      toast.success(t("create.success"));
      invalidate(result.id);
      void navigate({ to: "/nft/$id", params: { id: result.id } });
    } catch {
      toast.error(t("create.signInError"));
    } finally {
      setPending(false);
    }
  };

  return (
    <Layout>
      <Link to="/nfts" className="mb-6 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" />
        {t("nft.back")}
      </Link>
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display mb-2 text-3xl font-bold">{t("nft.createTitle")}</h1>
        <p className="mb-6 text-muted-foreground">{t("nft.createSubtitle")}</p>
        <div className="card-surface space-y-5 rounded-2xl border border-border/50 p-6">
          <div className="grid grid-cols-2 gap-2">
            {(
              [
                ["pump_dump", t("nft.tabPump")],
                ["sell_out", t("nft.tabMint")],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setKind(id)}
                className={cn(
                  "comic-tab min-h-12 rounded-xl px-3 text-sm font-extrabold",
                  kind === id ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground",
                )}
              >
                {label}
              </button>
            ))}
          </div>
          <Field label={t("nft.collectionName")}>
            <Input value={name} onChange={(event) => setName(event.target.value)} />
          </Field>
          <Field label={kind === "pump_dump" ? t("nft.lookupPump") : t("nft.lookupMint")}>
            <Input value={lookup} onChange={(event) => setLookup(event.target.value)} placeholder={kind === "pump_dump" ? "pudgy-penguins" : "collection symbol or address"} />
          </Field>
          <Field label={t("create.image")}>
            <Input value={imageUrl} onChange={(event) => setImageUrl(event.target.value)} placeholder="https://" />
          </Field>
          {kind === "pump_dump" ? (
            <div className="grid grid-cols-2 gap-3">
              <Field label={t("nft.floorManual")}>
                <Input value={manualFloor} onChange={(event) => setManualFloor(event.target.value)} inputMode="decimal" />
              </Field>
              <Field label={t("nft.currency")}>
                <Input value={currency} onChange={(event) => setCurrency(event.target.value)} />
              </Field>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              <Field label={t("nft.supply")}>
                <Input value={supply} onChange={(event) => setSupply(event.target.value)} inputMode="numeric" />
              </Field>
              <Field label={t("nft.mintedNow")}>
                <Input value={minted} onChange={(event) => setMinted(event.target.value)} inputMode="numeric" />
              </Field>
            </div>
          )}
          <div className="grid grid-cols-2 gap-3">
            <Field label={t("create.endDate")}>
              <Input type="datetime-local" value={deadline} onChange={(event) => setDeadline(event.target.value)} />
            </Field>
            <Field label={t("create.liquidity")}>
              <Input value={liquidity} onChange={(event) => setLiquidity(event.target.value)} inputMode="decimal" />
            </Field>
          </div>
          <p className="text-xs text-muted-foreground">
            {t("create.balance", { balance: (me.data?.wallet?.balance ?? 0).toFixed(2) })}
          </p>
          <Button className="w-full" disabled={pending} onClick={() => void submit()}>
            {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
            {pending ? t("create.creating") : t("nft.submit")}
          </Button>
        </div>
      </div>
    </Layout>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {children}
    </div>
  );
}
