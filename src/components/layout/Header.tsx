import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  TrendingUp,
  LayoutGrid,
  Trophy,
  Plus,
  Wallet,
  LogOut,
} from "lucide-react";
import { cn, formatAddress } from "@/lib/utils";
import { FaucetButton } from "@/components/FaucetButton";
import { usePulse } from "@/store/pulse";
import predictixLogo from "@/assets/predictix-logo.png";

const navItems = [
  { to: "/", label: "Markets", icon: LayoutGrid },
  { to: "/portfolio", label: "Portfolio", icon: TrendingUp },
  { to: "/leaderboard", label: "Leaderboard", icon: Trophy },
] as const;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const session = usePulse((s) => s.session);
  const wallet = usePulse((s) => s.wallet);
  const connectWallet = usePulse((s) => s.connectWallet);
  const disconnectWallet = usePulse((s) => s.disconnectWallet);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 glass-bar">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="group flex items-center gap-3">
          <img
            src={predictixLogo}
            alt="Predictix"
            className="h-9 w-9 rounded-xl transition-transform group-hover:scale-105"
          />
          <span className="font-display hidden text-xl font-bold sm:block">
            Predict<span className="text-primary">ix</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex min-h-11 items-center gap-2 rounded-lg px-4 text-sm font-medium transition-colors",
                  active
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground",
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <FaucetButton />
          {session ? (
            <Link to="/create" className="hidden sm:block">
              <Button variant="ghost" size="sm" className="gap-2">
                <Plus className="h-4 w-4" />
                Create
              </Button>
            </Link>
          ) : null}

          {wallet.connected && wallet.address ? (
            <Button
              variant="outline"
              size="sm"
              className="hidden gap-2 sm:inline-flex"
              onClick={disconnectWallet}
            >
              <Wallet className="h-4 w-4 text-primary" />
              {formatAddress(wallet.address)}
              <LogOut className="h-3.5 w-3.5 text-muted-foreground" />
            </Button>
          ) : (
            <Button variant="wallet" size="sm" onClick={connectWallet}>
              <Wallet className="h-4 w-4" />
              Connect
            </Button>
          )}

          {!session ? (
            <Link to="/auth" className="hidden sm:block">
              <Button variant="secondary" size="sm">
                Sign in
              </Button>
            </Link>
          ) : null}

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
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
                  "flex min-h-11 items-center gap-3 rounded-lg px-4 text-sm font-medium",
                  pathname === item.to
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground",
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            ))}
            {session ? (
              <Link
                to="/create"
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-11 items-center gap-3 rounded-lg px-4 text-sm font-medium text-muted-foreground"
              >
                <Plus className="h-5 w-5" />
                Create Market
              </Link>
            ) : (
              <Link
                to="/auth"
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-11 items-center gap-3 rounded-lg px-4 text-sm font-medium text-muted-foreground"
              >
                Sign in
              </Link>
            )}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
