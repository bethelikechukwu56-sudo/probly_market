import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { usePulse } from "@/store/pulse";
import { toast } from "sonner";
import { MessageSquare, Send, Trash2 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

export function MarketComments({ marketId }: { marketId: string }) {
  const [text, setText] = useState("");
  const session = usePulse((s) => s.session);
  const commentsAll = usePulse((s) => s.comments);
  const comments = commentsAll.filter((c) => c.marketId === marketId);
  const addComment = usePulse((s) => s.addComment);
  const deleteComment = usePulse((s) => s.deleteComment);

  const submit = () => {
    const result = addComment(marketId, text);
    if (!result.ok) {
      toast.error(result.message);
      return;
    }
    setText("");
  };

  return (
    <div className="card-surface rounded-2xl border border-border/50 p-6">
      <div className="mb-4 flex items-center gap-2">
        <MessageSquare className="h-5 w-5 text-primary" />
        <h2 className="font-semibold">Discussion</h2>
        <span className="text-sm text-muted-foreground">{comments.length}</span>
      </div>

      {session ? (
        <div className="mb-6 space-y-3">
          <Textarea
            placeholder="Share your thesis…"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={3}
          />
          <div className="flex justify-end">
            <Button size="sm" onClick={submit} disabled={!text.trim()}>
              <Send className="h-4 w-4" />
              Post
            </Button>
          </div>
        </div>
      ) : (
        <p className="mb-6 text-sm text-muted-foreground">Sign in to join the discussion.</p>
      )}

      <div className="space-y-3">
        {comments.length === 0 ? (
          <p className="py-6 text-center text-sm text-muted-foreground">No comments yet.</p>
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
                      {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                    </p>
                  </div>
                </div>
                {session?.id === comment.userId ? (
                  <button
                    type="button"
                    onClick={() => deleteComment(comment.id)}
                    className="text-muted-foreground hover:text-danger"
                    aria-label="Delete comment"
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
