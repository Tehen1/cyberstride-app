"use client";

import { Map, Zap, Dumbbell, Flame } from "lucide-react";
import Image from "next/image";
import { CyberCard } from "@/components/ui/cyber-card";
import { CyberButton } from "@/components/ui/cyber-button";
import { AITrainer } from "@/components/ai-trainer";
import { CircularProgress } from "./ui/circular-progress";

export default function Dashboard() {
  return (
    <div className="space-y-6 fade-in">
      <CyberCard className="relative z-10 scan-line">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold cyber-text-gradient">
              Ready to Move?
            </h2>
            <p className="text-primary font-semibold cyber-glow">
              Start your fitness journey
            </p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold cyber-glow">1,234.56</div>
            <div className="text-xs text-cyan-400">$FIXIE earned</div>
          </div>
        </div>
      </CyberCard>

      <CyberCard>
        <h3 className="text-lg font-bold mb-4 cyber-text-gradient">
          Today's Progress
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <CyberCard variant="inner" className="flex flex-col items-center justify-center p-4">
            <CircularProgress value={75} />
            <p className="mt-2 text-sm font-bold">12.5km</p>
            <p className="text-xs text-muted-foreground">Distance</p>
          </CyberCard>
          <CyberCard variant="inner" className="flex flex-col items-center justify-center p-4">
            <Dumbbell className="w-10 h-10 mx-auto text-secondary cyber-glow-secondary"/>
            <p className="mt-2 text-2xl font-bold">1:35:20</p>
            <p className="text-xs text-muted-foreground">Duration</p>
          </CyberCard>
          <CyberCard variant="inner" className="flex flex-col items-center justify-center p-4">
            <Flame className="w-10 h-10 mx-auto text-accent cyber-glow-accent"/>
            <p className="mt-2 text-2xl font-bold">890</p>
            <p className="text-xs text-muted-foreground">Calories</p>
          </CyberCard>
          <CyberCard variant="inner" className="flex flex-col items-center justify-center p-4">
            <Zap className="w-10 h-10 mx-auto text-primary cyber-glow"/>
            <p className="mt-2 text-2xl font-bold">42.10</p>
            <p className="text-xs text-muted-foreground">Tokens</p>
          </CyberCard>
        </div>
      </CyberCard>

      <CyberCard className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold cyber-text-gradient">
            GPS Tracking
          </h3>
          <div className="text-xs text-green-400 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            GPS Active: ±5m
          </div>
        </div>

        <div className="w-full h-64 rounded-lg mb-4 relative overflow-hidden cyber-border-animated">
          <Image
            src="https://placehold.co/800x400.png"
            alt="GPS Map"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
            data-ai-hint="dark map"
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-center text-muted-foreground">
                <Map className="w-16 h-16 mx-auto mb-2 text-primary/50" />
                <p>Map Area</p>
             </div>
          </div>
        </div>

        <CyberButton className="w-full">
          <Dumbbell className="w-5 h-5" />
          Start Workout
        </CyberButton>
      </CyberCard>

      <AITrainer />
      
    </div>
  );
}
