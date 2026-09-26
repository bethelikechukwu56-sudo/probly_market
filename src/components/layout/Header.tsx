import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Menu, X, TrendingUp, LayoutGrid, Trophy, Plus, Wallet, Gem, Settings } from "lucide-react";
import { cn, formatAddress } from "@/lib/utils";
import { FaucetButton } from "@/components/FaucetButton";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { UserButton } from "@/lib/auth/gates";
import { useMyPulse } from "@/lib/pulse-query";
import { toast } from "sonner";
import { useI18n } from "@/lib/i18n";
import { ThemeToggle } from "@/components/prefs/ThemeToggle";
import { LanguageSelect } from "@/components/prefs/LanguageSelect";
import problyLogo from "@/assets/probly-wordmark.png";

function AuthSlot() {
  const { user, isPending } = useCurrentUserState();
  const { t } = useI18n();
  if (isPending) {
    return <div className="h-11 w-24 animate-pulse rounded-lg bg-secondary" />;
  }
  if (!user) {
    return (
      <Link to="/login">
        <Button variant="secondary" size="sm">
          {t("nav.signIn")}
        </Button>
      </Link>
    );
  }
  return (
    <div className="flex items-center gap-2">
      <WalletChip />
      <div className="hidden max-w-[220px] sm:block [&>div>span.text-sm.font-medium]:max-w-[7rem] [&>div>span.text-sm.font-medium]:truncate">
        <UserButton />
      </div>
    </div>
  );
}

function WalletChip() {
  const me = useMyPulse();
  const { t } = useI18n();
  const wallet = me.data?.wallet;
  if (!wallet) {
    return <div className="hidden h-11 w-28 animate-pulse rounded-lg bg-secondary sm:block" />;
  }
  return (
    <button
      type="button"
      className="hidden min-h-11 items-center gap-2 rounded-lg border border-primary/30 px-3 text-sm sm:inline-flex"
      onClick={() => {
        void navigator.clipboard.writeText(wallet.address);
        toast.success(t("faucet.copied"));
      }}
      title={wallet.address}
    >
      <Wallet className="h-4 w-4 text-primary" />
      <span className="tabular-nums">{wallet.balance.toFixed(2)} RIA</span>
      <span className="hidden text-xs text-muted-foreground lg:inline">{formatAddress(wallet.address)}</span>
    </button>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { user, isPending } = useCurrentUserState();
  const { t } = useI18n();
  const navItems = [
    { to: "/", label: t("nav.markets"), icon: LayoutGrid },
    { to: "/nfts", label: t("nav.nfts"), icon: Gem },
    { to: "/portfolio", label: t("nav.portfolio"), icon: TrendingUp },
    { to: "/leaderboard", label: t("nav.leaderboard"), icon: Trophy },
  ] as const;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 glass-bar">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="group flex items-center">
          <img
            src={problyLogo}
            alt="Probly"
            className="h-9 w-auto invert transition-transform group-hover:scale-[1.03] dark:invert-0 sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active =
              item.to === "/"
                ? pathname === "/"
                : item.to === "/nfts"
                  ? pathname === "/nfts" || pathname.startsWith("/nft/")
                  : pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex min-h-11 items-center gap-2 rounded-lg px-4 text-sm font-extrabold transition-transform",
                  active
                    ? "comic-tab bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground",
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <FaucetButton />
          {user ? (
            <Link to="/create" className="hidden sm:block">
              <Button variant="ghost" size="sm" className="gap-2">
                <Plus className="h-4 w-4" />
                {t("nav.create")}
              </Button>
            </Link>
          ) : null}
          {user ? (
            <Link to="/settings" className="hidden md:block" aria-label={t("nav.settings")}>
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </Link>
          ) : null}
          <ThemeToggle />
          <LanguageSelect />
          <AuthSlot />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={mobileMenuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen ? (
        <div className="border-t border-border/50 bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 p-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "comic-tab flex min-h-11 items-center gap-3 rounded-lg px-4 text-sm font-extrabold",
                  pathname === item.to || (item.to === "/nfts" && pathname.startsWith("/nft/"))
                    ? "bg-accent text-accent-foreground"
                    : "bg-card text-muted-foreground",
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            ))}
            {user ? (
              <Link
                to="/create"
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-11 items-center gap-3 rounded-lg px-4 text-sm font-medium text-muted-foreground"
              >
                <Plus className="h-5 w-5" />
                {t("nav.createMarket")}
              </Link>
            ) : !isPending ? (
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-11 items-center gap-3 rounded-lg px-4 text-sm font-medium text-muted-foreground"
              >
                {t("nav.signIn")}
              </Link>
            ) : null}
            {user ? (
              <Link
                to="/settings"
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-11 items-center gap-3 rounded-lg px-4 text-sm font-medium text-muted-foreground"
              >
                <Settings className="h-5 w-5" />
                {t("nav.settings")}
              </Link>
            ) : null}
            {user ? (
              <div className="px-4 py-2">
                <UserButton />
              </div>
            ) : null}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
