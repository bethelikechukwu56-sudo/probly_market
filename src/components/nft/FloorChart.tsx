import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { Area, AreaChart, Tooltip, XAxis, YAxis } from "recharts";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import type { FloorPoint } from "@/types/nft";

function ChartFrame({ children }: { children: (size: { w: number; h: number }) => ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 224 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const w = Math.floor(el.clientWidth);
      const h = Math.floor(el.clientHeight);
      setSize((prev) => (prev.w === w && prev.h === h ? prev : { w, h }));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return (
    <div ref={ref} className="h-56 w-full overflow-hidden">
      {size.w > 0 ? children(size) : null}
    </div>
  );
}

function readCssVar(name: string, fallback: string) {
  if (typeof window === "undefined") return fallback;
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
}

export function FloorChart({ points, currency }: { points: FloorPoint[]; currency: string }) {
  const { t, intlTag } = useI18n();
  const { theme } = useTheme();
  const colors = useMemo(
    () => ({
      muted: readCssVar("--chart-muted", "hsl(45 10% 62%)"),
      tooltipBg: readCssVar("--chart-tooltip-bg", "hsl(20 10% 11%)"),
      tooltipBorder: readCssVar("--chart-tooltip-border", "hsl(20 10% 20%)"),
      tooltipFg: readCssVar("--chart-tooltip-fg", "hsl(45 20% 95%)"),
    }),
    [theme],
  );
  if (points.length < 2) {
    return <p className="py-8 text-center text-sm text-muted-foreground">{t("chart.empty")}</p>;
  }
  const data = points.map((point) => ({
    t: new Date(point.timestamp).toLocaleDateString(intlTag, { month: "short", day: "numeric" }),
    price: point.price,
  }));
  return (
    <ChartFrame>
      {({ w, h }) => (
        <AreaChart width={w} height={h} data={data}>
          <XAxis dataKey="t" tick={{ fill: colors.muted, fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis
            domain={["auto", "auto"]}
            tick={{ fill: colors.muted, fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            width={64}
          />
          <Tooltip
            contentStyle={{
              background: colors.tooltipBg,
              border: `1px solid ${colors.tooltipBorder}`,
              color: colors.tooltipFg,
              borderRadius: 12,
            }}
            formatter={(value) => [`${Number(value).toLocaleString(intlTag, { maximumFractionDigits: 4 })} ${currency}`, t("nft.floor")]}
          />
          <Area type="monotone" dataKey="price" stroke="var(--color-primary, #9dc9bf)" fill="rgba(157,201,191,0.18)" strokeWidth={2} />
        </AreaChart>
      )}
    </ChartFrame>
  );
}
