import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { I18nProvider } from "@/lib/i18n";
import { ThemeProvider, useTheme } from "@/lib/theme";
import { Toaster } from "sonner";
import appCss from "../styles.css?url";

const APP_NAME = "Probly";

const PREFS_BOOTSTRAP = `(function(){try{var t=localStorage.getItem("predictix-theme");var theme=t==="light"?"light":"dark";var d=document.documentElement;d.classList.remove("light","dark");d.classList.add(theme);d.style.colorScheme=theme;var l=localStorage.getItem("predictix-lang");if(l){d.lang=l;d.dir=l==="ar"?"rtl":"ltr";}}catch(e){document.documentElement.classList.add("dark");}})();`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content: "Trade on real-world events. Fast, transparent prediction markets.",
      },
      { name: "theme-color", content: "#0c1224" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Lilita+One&family=Nunito:wght@600;700;800&display=swap",
      },
    ],
  }),
  component: RootDocument,
});

function ThemedToaster() {
  const { theme } = useTheme();
  return (
    <Toaster
      theme={theme}
      position="top-right"
      toastOptions={{
        className: "bg-card text-foreground border-border",
      }}
    />
  );
}

function RootDocument() {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: PREFS_BOOTSTRAP }} />
        <HeadContent />
      </head>
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <PreviewHostBridge />
        <ThemeProvider>
          <I18nProvider>
            <AuthProvider>
              <Outlet />
            </AuthProvider>
            <ThemedToaster />
          </I18nProvider>
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
}
