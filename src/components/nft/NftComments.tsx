import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { addComment, deleteComment } from "@/lib/pulse-api";
import { useInvalidateNft } from "@/lib/nft-query";
import { useCurrentUser } from "@/lib/auth/use-current-user";
import { useI18n } from "@/lib/i18n";
import type { Comment } from "@/types/market";
import { formatDistanceToNow } from "date-fns";
import { MessageSquare, Send, Trash2 } from "lucide-react";
import { toast } from "sonner";

export function NftComments({ marketId, comments }: { marketId: string; comments: Comment[] }) {
  const [text, setText] = useState("");
  const [pending, setPending] = useState(false);
  const user = useCurrentUser();
  const invalidate = useInvalidateNft();
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

  return (
    <div className="card-surface rounded-2xl border border-border/50 p-6">
      <h2 className="mb-4 flex items-center gap-2 font-semibold">
        <MessageSquare className="h-4 w-4" />
        {t("comments.title")}
      </h2>
      {user ? (
        <div className="mb-4 space-y-2">
          <Textarea
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder={t("comments.placeholder")}
            maxLength={500}
          />
          <Button size="sm" disabled={pending || !text.trim()} onClick={() => void submit()}>
            <Send className="h-4 w-4" />
            {t("comments.post")}
          </Button>
        </div>
      ) : (
        <p className="mb-4 text-sm text-muted-foreground">
          <Link to="/login" className="text-primary">{t("comments.signIn")}</Link> {t("comments.join")}
        </p>
      )}
      {comments.length === 0 ? (
        <p className="text-sm text-muted-foreground">{t("comments.empty")}</p>
      ) : (
        <ul className="space-y-3">
          {comments.map((comment) => (
            <li key={comment.id} className="rounded-xl border border-border/50 p-3">
              <div className="mb-1 flex items-center justify-between gap-2 text-xs text-muted-foreground">
                <span className="font-medium text-foreground">{comment.username}</span>
                <span>
                  {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true, locale: dateLocale })}
                </span>
              </div>
              <p className="text-sm">{comment.content}</p>
              {user?.id === comment.userId ? (
                <button
                  type="button"
                  className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-danger"
                  onClick={() => {
                    void deleteComment({ data: { id: comment.id } })
                      .then(() => invalidate(marketId))
                      .catch(() => toast.error(t("comments.deleteError")));
                  }}
                >
                  <Trash2 className="h-3 w-3" />
                  {t("comments.delete")}
                </button>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
