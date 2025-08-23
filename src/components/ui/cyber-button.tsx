"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cyberButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold uppercase tracking-wider ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-[0_0_20px_hsl(var(--primary))] active:scale-95",
        secondary:
          "bg-gradient-to-r from-secondary to-accent text-primary-foreground hover:shadow-[0_0_20px_hsl(var(--secondary))] active:scale-95",
        outline:
          "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_hsl(var(--primary))]",
      },
      size: {
        default: "h-12 px-6 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-14 rounded-md px-8 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const ShineEffect = () => (
    <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500 group-hover:left-[100%]" />
)


export interface CyberButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof cyberButtonVariants> {
  asChild?: boolean;
}

const CyberButton = React.forwardRef<HTMLButtonElement, CyberButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(cyberButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
        <ShineEffect />
      </Comp>
    );
  }
);
CyberButton.displayName = "CyberButton";

export { CyberButton, cyberButtonVariants };
