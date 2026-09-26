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
import { useI18n } from "@/lib/i18n";

const categories: { id: Category; icon: typeof LayoutGrid }[] = [
  { id: "all", icon: LayoutGrid },
  { id: "crypto", icon: Bitcoin },
  { id: "politics", icon: Vote },
  { id: "sports", icon: Trophy },
  { id: "entertainment", icon: Film },
  { id: "tech", icon: Cpu },
  { id: "science", icon: FlaskConical },
  { id: "economics", icon: TrendingUp },
];

interface CategoryTabsProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  const { t } = useI18n();
  return (
    <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2">
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          onClick={() => onCategoryChange(category.id)}
          className={cn(
            "comic-tab flex min-h-11 shrink-0 items-center gap-2 rounded-lg px-4 text-sm font-extrabold whitespace-nowrap transition-transform",
            activeCategory === category.id
              ? "bg-primary text-primary-foreground"
              : "bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground",
          )}
        >
          <category.icon className="h-4 w-4" />
          {t(`category.${category.id}`)}
        </button>
      ))}
    </div>
  );
}
