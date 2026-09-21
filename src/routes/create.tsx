import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePulse } from "@/store/pulse";
import { toast } from "sonner";
import { ArrowLeft, Loader2, Sparkles, Calendar, Link as LinkIcon, DollarSign } from "lucide-react";
import { Category } from "@/types/market";

export const Route = createFileRoute("/create")({ component: CreateMarketPage });

const CATEGORY_OPTIONS: Exclude<Category, "all">[] = [
  "crypto",
  "politics",
  "sports",
  "entertainment",
  "tech",
  "science",
  "economics",
];

function CreateMarketPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<Exclude<Category, "all"> | "">("");
  const [endDate, setEndDate] = useState("");
  const [resolutionSource, setResolutionSource] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [initialLiquidity, setInitialLiquidity] = useState("100");
  const [pending, setPending] = useState(false);

  const session = usePulse((s) => s.session);
  const wallet = usePulse((s) => s.wallet);
  const connectWallet = usePulse((s) => s.connectWallet);
  const createMarket = usePulse((s) => s.createMarket);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session) {
      void navigate({ to: "/auth" });
      return;
    }
    if (!wallet.connected) {
      connectWallet();
      return;
    }
    if (!title || !description || !category || !endDate || !resolutionSource) {
      toast.error("Missing fields", { description: "Fill in all required fields." });
      return;
    }
    setPending(true);
    await new Promise((r) => setTimeout(r, 500));
    const result = createMarket({
      title,
      description,
      category,
      endDate: new Date(endDate).toISOString(),
      resolutionSource,
      imageUrl: imageUrl || undefined,
      liquidity: parseFloat(initialLiquidity),
    });
    setPending(false);
    if (!result.ok || !result.id) {
      toast.error("Could not create market", { description: result.message });
      return;
    }
    toast.success("Market created", { description: result.message });
    void navigate({ to: "/market/$id", params: { id: result.id } });
  };

  if (!session) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
            <Sparkles className="h-10 w-10 text-muted-foreground" />
          </div>
          <h1 className="font-display mb-2 text-2xl font-bold">Sign in required</h1>
          <p className="mb-6 max-w-md text-muted-foreground">
            You need to be signed in to create a prediction market.
          </p>
          <Link to="/auth">
            <Button variant="wallet" size="lg">
              Sign in to continue
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to markets
      </Link>

      <div className="mx-auto max-w-2xl">
        <div className="mb-8">
          <h1 className="font-display mb-2 text-3xl font-bold">Create market</h1>
          <p className="text-muted-foreground">
            Launch a yes/no market for the community to trade.
          </p>
        </div>

        <form onSubmit={(e) => void handleSubmit(e)} className="space-y-6">
          <div className="card-surface space-y-5 rounded-2xl border border-border/50 p-6">
            <div className="space-y-2">
              <Label htmlFor="title">Market question</Label>
              <Input
                id="title"
                placeholder="Will Bitcoin reach $150K by end of 2026?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-lg"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Resolution criteria</Label>
              <Textarea
                id="description"
                placeholder="Describe exactly how and when this market will be resolved."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Category</Label>
                <Select value={category} onValueChange={(v) => setCategory(v as Exclude<Category, "all">)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORY_OPTIONS.map((cat) => (
                      <SelectItem key={cat} value={cat} className="capitalize">
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="endDate">End date</Label>
                <div className="relative">
                  <Calendar className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="endDate"
                    type="datetime-local"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="resolutionSource">Resolution source</Label>
              <div className="relative">
                <LinkIcon className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="resolutionSource"
                  placeholder="https://coingecko.com/bitcoin"
                  value={resolutionSource}
                  onChange={(e) => setResolutionSource(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="imageUrl">Image URL (optional)</Label>
              <Input
                id="imageUrl"
                placeholder="https://example.com/image.png"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="liquidity">Initial liquidity (RIA)</Label>
              <div className="relative">
                <DollarSign className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="liquidity"
                  type="number"
                  placeholder="100"
                  value={initialLiquidity}
                  onChange={(e) => setInitialLiquidity(e.target.value)}
                  className="pl-10"
                  min="10"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Minimum 10 RIA.
                {wallet.connected ? ` Balance: ${wallet.balance.toFixed(2)} RIA` : ""}
              </p>
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <Link to="/">
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </Link>
            <Button type="submit" disabled={pending} className="min-w-[140px]">
              {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
              {pending ? "Creating" : "Create market"}
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
