import { useEffect, useRef, useState } from "react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LOCALES, useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSelect() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const current = LOCALES.find((item) => item.id === locale) ?? LOCALES[0];

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="min-w-11 gap-2 px-2"
        aria-label={t("language.label")}
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((v) => !v)}
      >
        <Globe className="h-4 w-4" />
        <span className="hidden text-xs font-semibold tracking-wide uppercase sm:inline">
          {current.id}
        </span>
      </Button>
      {open ? (
        <div
          role="listbox"
          aria-label={t("language.label")}
          className="absolute end-0 z-50 mt-1 min-w-44 rounded-xl border border-border bg-popover p-1 text-popover-foreground shadow-md"
        >
          {LOCALES.map((item) => (
            <button
              key={item.id}
              type="button"
              role="option"
              aria-selected={item.id === locale}
              className={cn(
                "flex min-h-11 w-full items-center justify-between rounded-lg px-3 text-sm",
                item.id === locale
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground",
              )}
              onClick={() => {
                setLocale(item.id);
                setOpen(false);
              }}
            >
              <span>{item.native}</span>
              <span className="text-xs uppercase">{item.id}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
