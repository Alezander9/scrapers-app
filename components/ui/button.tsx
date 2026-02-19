import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-bold uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-pumpkin-500 disabled:pointer-events-none disabled:opacity-50 rounded-none",
  {
    variants: {
      variant: {
        default:
          "bg-pumpkin-500 text-black hover:bg-pumpkin-600 hover:translate-y-[-1px]",
        secondary:
          "bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white",
        ghost:
          "text-zinc-400 hover:text-white hover:bg-zinc-800/50 font-medium normal-case tracking-normal",
        outline:
          "border border-zinc-700 text-zinc-400 hover:bg-zinc-800 hover:text-white hover:border-pumpkin-500/50 font-mono",
      },
      size: {
        default: "h-10 px-5 py-2 text-sm",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-8 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
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
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
