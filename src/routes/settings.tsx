import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { refreshWalletProfile } from "@/lib/auth/wallet-api";
import { applyWalletSession } from "@/lib/auth/wallet-session";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { saveProfile } from "@/lib/nft-api";
import { useI18n } from "@/lib/i18n";
import { ArrowLeft, Loader2, LogIn } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/settings")({ component: SettingsPage });

function SettingsPage() {
  const { user, isPending } = useCurrentUserState();
  const { t } = useI18n();
  const [name, setName] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!user) return;
    setName(user.displayName ?? "");
    setImage(user.profileImageUrl);
    setReady(true);
  }, [user?.id, user?.displayName, user?.profileImageUrl]);

  if (isPending || (user && !ready)) {
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
          <h1 className="font-display mb-2 text-2xl font-bold">{t("settings.signInTitle")}</h1>
          <p className="mb-6 text-muted-foreground">{t("settings.signInBody")}</p>
          <Link to="/login">
            <Button>{t("nav.signIn")}</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const onFile = async (file: File | undefined) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error(t("settings.photoError"));
      return;
    }
    const bitmap = await createImageBitmap(file);
    const size = 128;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const scale = Math.max(size / bitmap.width, size / bitmap.height);
    const w = bitmap.width * scale;
    const h = bitmap.height * scale;
    ctx.drawImage(bitmap, (size - w) / 2, (size - h) / 2, w, h);
    setImage(canvas.toDataURL("image/jpeg", 0.72));
  };

  const save = async () => {
    if (name.trim().length < 2) {
      toast.error(t("settings.nameError"));
      return;
    }
    setPending(true);
    try {
      const result = await saveProfile({ data: { name: name.trim(), image } });
      if (!result.ok) {
        toast.error(result.message);
        return;
      }
      const refreshed = await refreshWalletProfile();
      applyWalletSession(refreshed);
      toast.success(t("settings.saved"));
    } catch {
      toast.error(t("settings.failed"));
    } finally {
      setPending(false);
    }
  };

  const initial = (name.trim() || user.primaryEmail || "?").slice(0, 1).toUpperCase();

  return (
    <Layout>
      <Link to="/" className="mb-6 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" />
        {t("market.back")}
      </Link>
      <div className="mb-6">
        <h1 className="font-display mb-2 text-3xl font-bold">{t("settings.title")}</h1>
        <p className="max-w-xl text-muted-foreground">{t("settings.subtitle")}</p>
      </div>
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="card-surface space-y-6 rounded-2xl border border-border/50 p-6">
          <div className="space-y-2">
            <Label htmlFor="username">{t("settings.username")}</Label>
            <Input id="username" value={name} maxLength={32} onChange={(event) => setName(event.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="photo">{t("settings.photo")}</Label>
            <p className="text-sm text-muted-foreground">{t("settings.photoHint")}</p>
            <Input
              id="photo"
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={(event) => void onFile(event.target.files?.[0])}
            />
            {image ? (
              <Button type="button" variant="ghost" size="sm" onClick={() => setImage(null)}>
                {t("settings.removePhoto")}
              </Button>
            ) : null}
          </div>
          <Button disabled={pending} onClick={() => void save()}>
            {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
            {pending ? t("settings.saving") : t("settings.save")}
          </Button>
        </div>
        <aside className="card-surface sticky top-24 rounded-2xl border border-border/50 p-6 transition-colors">
          <p className="mb-4 text-xs font-medium tracking-wide text-muted-foreground uppercase">{t("settings.preview")}</p>
          <div className="flex items-center gap-4">
            {image ? (
              <img src={image} alt="" className="h-16 w-16 rounded-full object-cover transition-all" />
            ) : (
              <span className="grid h-16 w-16 place-items-center rounded-full bg-secondary text-xl font-semibold transition-all">
                {initial}
              </span>
            )}
            <div className="min-w-0">
              <p className="truncate text-lg font-semibold transition-all">{name.trim() || t("settings.username")}</p>
              <p className="truncate text-sm text-muted-foreground">{user.primaryEmail}</p>
            </div>
          </div>
        </aside>
      </div>
    </Layout>
  );
}
