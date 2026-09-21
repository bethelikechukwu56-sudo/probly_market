import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { Area, AreaChart, Tooltip, XAxis, YAxis } from "recharts";
import { PricePoint } from "@/types/market";

interface PriceChartProps {
  yesHistory: PricePoint[];
  noHistory: PricePoint[];
}

function formatTime(timestamp: string): string {
  return new Date(timestamp).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

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

export function PriceChart({ yesHistory, noHistory }: PriceChartProps) {
  const chartData = useMemo(() => {
    const allPoints = new Map<string, { timestamp: string; yes?: number; no?: number }>();
    for (const point of yesHistory) {
      const existing = allPoints.get(point.timestamp) ?? { timestamp: point.timestamp };
      existing.yes = point.price * 100;
      allPoints.set(point.timestamp, existing);
    }
    for (const point of noHistory) {
      const existing = allPoints.get(point.timestamp) ?? { timestamp: point.timestamp };
      existing.no = point.price * 100;
      allPoints.set(point.timestamp, existing);
    }
    return [...allPoints.values()].sort(
      (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime(),
    );
  }, [yesHistory, noHistory]);

  if (chartData.length === 0) {
    return (
      <div className="flex h-56 items-center justify-center text-sm text-muted-foreground">
        No price history yet
      </div>
    );
  }

  return (
    <ChartFrame>
      {({ w, h }) => (
        <AreaChart data={chartData} width={w} height={h} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="yesFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(145 50% 42%)" stopOpacity={0.35} />
              <stop offset="100%" stopColor="hsl(145 50% 42%)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="noFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(0 62% 52%)" stopOpacity={0.28} />
              <stop offset="100%" stopColor="hsl(0 62% 52%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="timestamp"
            tickFormatter={formatTime}
            tick={{ fill: "hsl(45 10% 62%)", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            minTickGap={28}
          />
          <YAxis
            domain={[0, 100]}
            tickFormatter={(v) => `${v}¢`}
            tick={{ fill: "hsl(45 10% 62%)", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            width={40}
          />
          <Tooltip
            contentStyle={{
              background: "hsl(20 10% 11%)",
              border: "1px solid hsl(20 10% 20%)",
              borderRadius: 12,
              color: "hsl(45 20% 95%)",
            }}
            labelFormatter={(label) => formatTime(String(label))}
            formatter={(value, name) => [
              `${Number(value).toFixed(1)}¢`,
              name === "yes" ? "Yes" : "No",
            ]}
          />
          <Area
            type="monotone"
            dataKey="yes"
            stroke="hsl(145 50% 42%)"
            fill="url(#yesFill)"
            strokeWidth={2}
            dot={false}
          />
          <Area
            type="monotone"
            dataKey="no"
            stroke="hsl(0 62% 52%)"
            fill="url(#noFill)"
            strokeWidth={2}
            dot={false}
          />
        </AreaChart>
      )}
    </ChartFrame>
  );
}
