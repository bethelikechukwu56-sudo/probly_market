import { createFileRoute, Link, Navigate } from "@tanstack/react-router";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { ConnectWalletButton } from "@/components/auth/ConnectWalletButton";
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
  const { t } = useI18n();

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
          <h1 className="font-display mb-2 text-center text-2xl font-bold">{t("login.welcome")}</h1>
          <p className="mb-6 text-center text-sm text-muted-foreground">{t("login.signinHint")}</p>
          <ConnectWalletButton size="lg" />
          <p className="mt-6 text-center text-xs text-muted-foreground">{t("login.signupHint")}</p>
        </div>
      </div>
    </main>
  );
}
