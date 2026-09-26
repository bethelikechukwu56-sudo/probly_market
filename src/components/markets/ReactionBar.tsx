import { REACTION_META, type ReactionKind, type Market } from "@/types/market";
import { cn } from "@/lib/utils";
import { toggleReaction } from "@/lib/pulse-api";
import { useInvalidatePulse, useMyPulse } from "@/lib/pulse-query";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { useI18n } from "@/lib/i18n";

export function ReactionBar({
  market,
  compact = false,
}: {
  market: Market;
  compact?: boolean;
}) {
  const { user, isPending } = useCurrentUserState();
  const me = useMyPulse();
  const invalidate = useInvalidatePulse();
  const navigate = useNavigate();
  const { t } = useI18n();
  const mine = me.data?.myReactions[market.id] ?? [];

  const onReact = async (kind: ReactionKind, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isPending) return;
    if (!user) {
      void navigate({ to: "/login" });
      return;
    }
    try {
      await toggleReaction({ data: { marketId: market.id, kind } });
      invalidate(market.id);
    } catch {
      toast.error("Could not save reaction");
    }
  };

  return (
    <div className={cn("flex items-center gap-1", compact ? "" : "pt-1")}>
      {REACTION_META.map((item) => {
        const count = market.reactions[item.kind];
        const active = mine.includes(item.kind);
        return (
          <button
            key={item.kind}
            type="button"
            aria-label={t(`reaction.${item.kind}` as "reaction.fire")}
            onClick={(e) => void onReact(item.kind, e)}
            className={cn(
              "inline-flex min-h-11 min-w-11 items-center justify-center gap-1 rounded-lg px-2 text-sm transition-colors",
              active
                ? "bg-primary/15 text-foreground"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground",
            )}
          >
            <span aria-hidden="true">{item.glyph}</span>
            {count > 0 ? <span className="tabular-nums">{count}</span> : null}
          </button>
        );
      })}
    </div>
  );
}
