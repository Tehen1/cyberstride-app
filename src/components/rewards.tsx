"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Medal, Lock, Trophy } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

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
        <Card>
            <CardHeader>
                <CardTitle>Rewards Center</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <MetricCard label="Total Rewards" value="15" />
                    <MetricCard label="Day Streak" value="5" />
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                        <span className="font-medium">Level 5 Progress</span>
                        <span className="text-muted-foreground">450 / 500 XP</span>
                    </div>
                    <Progress value={90} className="h-3" />
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Available Rewards</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                {rewards.map(reward => (
                    <div key={reward.title} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10">
                               {reward.locked ? <Lock className="w-5 h-5 text-muted-foreground"/> : <Medal className="w-5 h-5 text-primary"/>}
                            </div>
                            <div>
                                <p className="font-semibold">{reward.title}</p>
                                <p className="text-xs text-muted-foreground">{reward.subtitle}</p>
                            </div>
                        </div>
                        {reward.locked ? (
                             <span className="text-sm font-bold text-muted-foreground">Locked</span>
                        ) : reward.claimed ? (
                             <span className="text-sm font-bold text-green-600">Claimed</span>
                        ) : (
                            <Button size="sm">Claim</Button>
                        )}
                    </div>
                ))}
            </CardContent>
        </Card>

         <Card>
            <CardHeader>
                <CardTitle>Leaderboard</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                {leaderboard.map(entry => (
                    <div key={entry.rank} className={cn("flex items-center justify-between p-2 rounded-lg", entry.isUser ? 'bg-primary/10 border border-primary/20' : 'bg-secondary/50')}>
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
            </CardContent>
        </Card>
    </div>
  );
}

const MetricCard = ({ label, value }: { label: string; value: string }) => (
  <Card className="p-3 text-center">
    <p className="text-2xl font-bold text-primary">{value}</p>
    <p className="text-xs text-muted-foreground">{label}</p>
  </Card>
);
