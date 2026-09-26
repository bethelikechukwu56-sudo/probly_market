import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-extrabold ring-offset-background transition-transform duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "comic-press bg-primary text-primary-foreground",
        destructive: "comic-press bg-destructive text-destructive-foreground",
        outline: "comic-press bg-card text-foreground hover:bg-accent hover:text-accent-foreground",
        secondary: "comic-press bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground",
        ghost: "border-2 border-transparent hover:border-ink hover:bg-accent hover:text-accent-foreground",
        link: "font-extrabold text-primary underline-offset-4 hover:underline",
        yes: "comic-press bg-success/15 text-success hover:bg-success hover:text-success-foreground",
        no: "comic-press bg-danger/15 text-danger hover:bg-danger hover:text-danger-foreground",
        yesActive: "comic-press bg-success text-success-foreground",
        noActive: "comic-press bg-danger text-danger-foreground",
        hero: "comic-press bg-primary text-primary-foreground",
        heroOutline: "comic-press bg-card text-primary",
        wallet: "comic-press bg-primary text-primary-foreground",
      },
      size: {
        default: "h-11 min-h-11 px-4 py-2",
        sm: "h-11 min-h-11 rounded-lg px-3",
        lg: "h-12 min-h-12 rounded-xl px-8",
        xl: "h-12 min-h-12 rounded-xl px-10 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
