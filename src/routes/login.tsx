import { useState } from "react";
import { createFileRoute, Link, Navigate } from "@tanstack/react-router";
import { GROK_PROVIDERS, authClient, authEnabled, signIn } from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, User, ArrowRight, Loader2 } from "lucide-react";
import problyLogo from "@/assets/probly-wordmark.png";
import { useI18n } from "@/lib/i18n";
import { ThemeToggle } from "@/components/prefs/ThemeToggle";
import { LanguageSelect } from "@/components/prefs/LanguageSelect";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  const { user, isPending } = useCurrentUserState();
  if (isPending) {
    return (
      <main className="grid min-h-dvh place-items-center bg-background p-6">
        <div className="h-12 w-48 animate-pulse rounded-xl bg-secondary" />
      </main>
    );
  }
  if (user) return <Navigate to="/" />;
  return <LoginForm />;
}

function LoginForm() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState<"google" | "x" | "email" | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { t } = useI18n();

  const onProvider = async (providerId: string) => {
    setError(null);
    setLoading(providerId.includes("google") ? "google" : "x");
    try {
      await signIn(providerId, { callbackURL: "/", errorCallbackURL: "/login" });
    } catch (err) {
      setError(err instanceof Error ? err.message : t("trade.signIn"));
      setLoading(null);
    }
  };

  const onEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(t("login.invalidEmail"));
      return;
    }
    if (password.length < 8) {
      setError(t("login.shortPassword"));
      return;
    }
    setLoading("email");
    try {
      if (mode === "signup") {
        const name = (username || email.split("@")[0] || "trader").slice(0, 24);
        const { error: signUpError } = await authClient.signUp.email({
          email,
          password,
          name,
        });
        if (signUpError) throw new Error(signUpError.message || t("create.failed"));
      } else {
        const { error: signInError } = await authClient.signIn.email({ email, password });
        if (signInError) throw new Error(signInError.message || t("trade.signIn"));
      }
      await authClient.getSession();
      window.location.href = "/";
    } catch (err) {
      setError(err instanceof Error ? err.message : t("trade.signIn"));
      setLoading(null);
    }
  };

  return (
    <main className="relative grid min-h-dvh place-items-center bg-background p-6">
      <div className="absolute end-4 top-4 flex items-center gap-1">
        <ThemeToggle />
        <LanguageSelect />
      </div>
      <div className="w-full max-w-md">
        <Link to="/" className="mb-8 flex items-center justify-center">
          <img src={problyLogo} alt="Probly" className="h-16 w-auto invert dark:invert-0 sm:h-[4.5rem]" />
        </Link>
        <div className="card-surface rounded-2xl border border-border/50 p-8">
          <h1 className="font-display mb-2 text-center text-2xl font-bold">
            {mode === "signin" ? t("login.welcome") : t("login.create")}
          </h1>
          <p className="mb-6 text-center text-sm text-muted-foreground">
            {mode === "signin" ? t("login.signinHint") : t("login.signupHint")}
          </p>

          {authEnabled ? (
            <div className="mb-6 grid gap-2">
              {GROK_PROVIDERS.map((p) => (
                <Button
                  key={p.providerId}
                  type="button"
                  variant="outline"
                  className="h-12 w-full"
                  disabled={loading !== null}
                  onClick={() => void onProvider(p.providerId)}
                >
                  {loading === (p.label === "Google" ? "google" : "x") ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : null}
                  {t("login.continueWith", { provider: p.label })}
                </Button>
              ))}
            </div>
          ) : (
            <p className="mb-6 text-center text-sm text-muted-foreground">{t("login.disabled")}</p>
          )}

          <div className="mb-6 flex items-center gap-3 text-xs tracking-wide text-muted-foreground uppercase">
            <span className="h-px flex-1 bg-border" />
            {t("login.orEmail")}
            <span className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={(e) => void onEmail(e)} className="space-y-4">
            {mode === "signup" ? (
              <div className="space-y-2">
                <Label htmlFor="username">{t("login.username")}</Label>
                <div className="relative">
                  <User className="absolute top-1/2 start-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="satoshi"
                    className="ps-10"
                    autoComplete="username"
                  />
                </div>
              </div>
            ) : null}
            <div className="space-y-2">
              <Label htmlFor="email">{t("login.email")}</Label>
              <div className="relative">
                <Mail className="absolute top-1/2 start-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="ps-10"
                  autoComplete="email"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">{t("login.password")}</Label>
              <div className="relative">
                <Lock className="absolute top-1/2 start-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t("login.passwordHint")}
                  className="ps-10"
                  autoComplete={mode === "signup" ? "new-password" : "current-password"}
                  required
                />
              </div>
            </div>
            {error ? <p className="text-sm text-destructive">{error}</p> : null}
            <Button type="submit" className="w-full" size="lg" disabled={loading !== null}>
              {loading === "email" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <ArrowRight className="h-4 w-4" />
              )}
              {mode === "signin" ? t("login.submitIn") : t("login.submitUp")}
            </Button>
          </form>

          <button
            type="button"
            className="mt-6 w-full text-center text-sm text-muted-foreground hover:text-primary"
            onClick={() => {
              setMode(mode === "signin" ? "signup" : "signin");
              setError(null);
            }}
          >
            {mode === "signin" ? t("login.noAccount") : t("login.hasAccount")}
          </button>
        </div>
      </div>
    </main>
  );
}
