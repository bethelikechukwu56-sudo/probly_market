import { cn } from "@/lib/utils";
import { Category } from "@/types/market";
import {
  LayoutGrid,
  Bitcoin,
  Vote,
  Trophy,
  Film,
  Cpu,
  FlaskConical,
  TrendingUp,
} from "lucide-react";

const categories: { id: Category; label: string; icon: typeof LayoutGrid }[] = [
  { id: "all", label: "All", icon: LayoutGrid },
  { id: "crypto", label: "Crypto", icon: Bitcoin },
  { id: "politics", label: "Politics", icon: Vote },
  { id: "sports", label: "Sports", icon: Trophy },
  { id: "entertainment", label: "Entertainment", icon: Film },
  { id: "tech", label: "Tech", icon: Cpu },
  { id: "science", label: "Science", icon: FlaskConical },
  { id: "economics", label: "Economics", icon: TrendingUp },
];

interface CategoryTabsProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2">
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          onClick={() => onCategoryChange(category.id)}
          className={cn(
            "flex min-h-11 shrink-0 items-center gap-2 rounded-lg px-4 text-sm font-medium whitespace-nowrap transition-colors",
            activeCategory === category.id
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground",
          )}
        >
          <category.icon className="h-4 w-4" />
          {category.label}
        </button>
      ))}
    </div>
  );
}
