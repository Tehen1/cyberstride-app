"use client";

import { CyberCard } from "@/components/ui/cyber-card";
import { CyberButton } from "@/components/ui/cyber-button";
import { Medal, Lock, Trophy } from "lucide-react";

const rewards = [
    { title: "First Workout Badge", subtitle: "Complete your first workout", claimed: false },
    { title: "5km Champion", subtitle: "Complete 5km in one workout", claimed: true },
    { title: "Week Warrior", subtitle: "7 day workout streak", claimed: false, locked: true },
]

const leaderboard = [
    { rank: 1, name: "CycleKing", tokens: 1245, icon: "👑" },
    { rank: 2, name: "RunnerPro", tokens: 987, icon: "🥈" },
    { rank: 3, name: "FitnessQueen", tokens: 756, icon: "🥉" },
    { rank: 47, name: "You", tokens: 234, icon: "💪", isUser: true },
]

export default function Rewards() {
  return (
    <div className="space-y-6 fade-in">
        <CyberCard>
            <h2 className="text-2xl font-bold mb-6 cyber-text-gradient">Rewards Center</h2>
             <div className="grid grid-cols-2 gap-4 mb-6">
                <MetricCard label="Total Rewards" value="15" />
                <MetricCard label="Day Streak" value="5" />
            </div>

            <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                    <span className="font-medium">Level 5 Progress</span>
                    <span className="text-muted-foreground">450 / 500 XP</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3 cyber-border-animated">
                    <div className="bg-gradient-to-r from-secondary to-primary h-full rounded-full" style={{ width: '90%' }}></div>
                </div>
            </div>
        </CyberCard>

        <CyberCard>
            <h3 className="text-lg font-bold mb-4 cyber-text-gradient">Available Rewards</h3>
            <div className="space-y-3">
                {rewards.map(reward => (
                    <div key={reward.title} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary/20">
                               {reward.locked ? <Lock className="w-5 h-5 text-muted-foreground"/> : <Medal className="w-5 h-5 text-secondary cyber-glow-secondary"/>}
                            </div>
                            <div>
                                <p className="font-semibold">{reward.title}</p>
                                <p className="text-xs text-muted-foreground">{reward.subtitle}</p>
                            </div>
                        </div>
                        {reward.locked ? (
                             <span className="text-sm font-bold text-muted-foreground">Locked</span>
                        ) : reward.claimed ? (
                             <span className="text-sm font-bold text-green-400">Claimed</span>
                        ) : (
                            <CyberButton size="sm">Claim</CyberButton>
                        )}
                    </div>
                ))}
            </div>
        </CyberCard>

         <CyberCard>
            <h3 className="text-lg font-bold mb-4 cyber-text-gradient">Leaderboard</h3>
            <div className="space-y-2">
                {leaderboard.map(entry => (
                    <div key={entry.rank} className={`flex items-center justify-between p-2 rounded-lg ${entry.isUser ? 'cyber-border-animated' : 'bg-muted/50'}`}>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary/20 text-primary font-bold">{entry.rank}</div>
                            <div>
                               <p className="font-semibold">{entry.name}</p>
                               <p className="text-xs text-muted-foreground">{entry.tokens} FIXIE</p>
                            </div>
                        </div>
                        <span className="text-2xl">{entry.icon}</span>
                    </div>
                ))}
            </div>
        </CyberCard>

    </div>
  );
}

const MetricCard = ({ label, value }: { label: string; value: string }) => (
  <CyberCard variant="inner" className="p-3 text-center">
    <p className="text-2xl font-bold text-primary cyber-glow">{value}</p>
    <p className="text-xs text-muted-foreground">{label}</p>
  </CyberCard>
);
