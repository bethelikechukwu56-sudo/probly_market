import { ReactNode } from "react";
import { Header } from "./Header";
import { useI18n } from "@/lib/i18n";
import problyMark from "@/assets/probly-mark.png";

export function Layout({ children }: { children: ReactNode }) {
  const { t } = useI18n();
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6">{children}</main>
      <footer className="mt-12 border-t-[3px] border-ink py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <img src={problyMark} alt="" className="h-6 w-6 invert dark:invert-0" />
            <span>{t("footer.tagline")}</span>
          </div>
          <p>{t("footer.disclaimer")}</p>
        </div>
      </footer>
    </div>
  );
}
