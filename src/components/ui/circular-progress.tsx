"use client";

import * as React from "react";

interface CircularProgressProps {
  value: number;
  className?: string;
}

export function CircularProgress({ value, className }: CircularProgressProps) {
  const circumference = 2 * Math.PI * 45; // 2 * pi * radius
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className={`relative w-24 h-24 ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          className="text-muted/50"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r="45"
          cx="50"
          cy="50"
        />
        {/* Foreground circle */}
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--cyber-blue))" />
            <stop offset="50%" stopColor="hsl(var(--cyber-purple))" />
            <stop offset="100%" stopColor="hsl(var(--cyber-pink))" />
          </linearGradient>
        </defs>
        <circle
          className="text-primary"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="url(#progressGradient)"
          fill="transparent"
          r="45"
          cx="50"
          cy="50"
          style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
        />
      </svg>
    </div>
  );
}
