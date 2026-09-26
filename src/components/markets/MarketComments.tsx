import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { addComment, deleteComment } from "@/lib/pulse-api";
import { useInvalidatePulse, useMarketDetail } from "@/lib/pulse-query";
import { useCurrentUser } from "@/lib/auth/use-current-user";
import { toast } from "sonner";
import { MessageSquare, Send, Trash2 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { Link } from "@tanstack/react-router";
import type { Comment } from "@/types/market";
import { useI18n } from "@/lib/i18n";

export function MarketComments({
  marketId,
  initialComments,
}: {
  marketId: string;
  initialComments: Comment[];
}) {
  const [text, setText] = useState("");
  const [pending, setPending] = useState(false);
  const user = useCurrentUser();
  const detail = useMarketDetail(marketId);
  const comments = detail.data?.comments ?? initialComments;
  const invalidate = useInvalidatePulse();
  const { t, dateLocale } = useI18n();

  const submit = async () => {
    if (!text.trim()) return;
    setPending(true);
    try {
      await addComment({ data: { marketId, content: text.trim() } });
      setText("");
      invalidate(marketId);
    } catch {
      toast.error(t("comments.signInError"));
    } finally {
      setPending(false);
    }
  };

  const remove = async (id: string) => {
    try {
      await deleteComment({ data: { id } });
      invalidate(marketId);
    } catch {
      toast.error(t("comments.deleteError"));
    }
  };

  return (
    <div className="card-surface rounded-2xl border border-border/50 p-6">
      <div className="mb-4 flex items-center gap-2">
        <MessageSquare className="h-5 w-5 text-primary" />
        <h2 className="font-semibold">{t("comments.title")}</h2>
        <span className="text-sm text-muted-foreground">{comments.length}</span>
      </div>

      {user ? (
        <div className="mb-6 space-y-3">
          <Textarea
            placeholder={t("comments.placeholder")}
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={3}
          />
          <div className="flex justify-end">
            <Button size="sm" onClick={() => void submit()} disabled={!text.trim() || pending}>
              <Send className="h-4 w-4" />
              {t("comments.post")}
            </Button>
          </div>
        </div>
      ) : (
        <p className="mb-6 text-sm text-muted-foreground">
          <Link to="/login" className="text-primary hover:underline">
            {t("comments.signIn")}
          </Link>{" "}
          {t("comments.join")}
        </p>
      )}

      <div className="space-y-3">
        {comments.length === 0 ? (
          <p className="py-6 text-center text-sm text-muted-foreground">{t("comments.empty")}</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="rounded-xl border border-border/40 bg-secondary/30 p-4">
              <div className="mb-2 flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-medium">
                    {comment.username[0]?.toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{comment.username}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true, locale: dateLocale })}
                    </p>
                  </div>
                </div>
                {user?.id === comment.userId ? (
                  <button
                    type="button"
                    onClick={() => void remove(comment.id)}
                    className="text-muted-foreground hover:text-danger"
                    aria-label={t("comments.delete")}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                ) : null}
              </div>
              <p className="text-sm leading-relaxed text-foreground/90">{comment.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
