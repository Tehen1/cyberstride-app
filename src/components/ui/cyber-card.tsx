"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface CyberCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "inner";
}

const CyberCard = React.forwardRef<HTMLDivElement, CyberCardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg relative overflow-hidden",
          "bg-gradient-to-br from-card/80 via-card/50 to-background/90 backdrop-blur-sm",
          "p-6 shadow-lg",
          variant === "default" && "cyber-border-animated",
          variant === "inner" && "bg-muted/50 border-none",
          className
        )}
        {...props}
      />
    );
  }
);
CyberCard.displayName = "CyberCard";

export { CyberCard };
