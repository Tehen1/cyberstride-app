"use client";

import { Map, Zap, Dumbbell, Flame, Activity } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AITrainer } from "@/components/ai-trainer";
import { Progress } from "@/components/ui/progress";


export default function Dashboard() {
  return (
    <div className="space-y-6 fade-in">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Earnings</CardTitle>
          <span className="text-sm font-medium">$FIXIE</span>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,234.56</div>
          <p className="text-xs text-muted-foreground">
            +20.1% from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Today's Progress</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <StatCard icon={<Activity className="w-6 h-6 text-muted-foreground" />} label="Distance" value="12.5km" progress={75} />
          <StatCard icon={<Dumbbell className="w-6 h-6 text-muted-foreground" />} label="Duration" value="1:35:20" />
          <StatCard icon={<Flame className="w-6 h-6 text-muted-foreground" />} label="Calories" value="890" />
          <StatCard icon={<Zap className="w-6 h-6 text-muted-foreground" />} label="Tokens" value="42.10" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
            <CardTitle>GPS Tracking</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="w-full h-64 rounded-lg mb-4 relative overflow-hidden bg-gray-100">
                <Image
                    src="https://placehold.co/800x400.png"
                    alt="GPS Map"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-20"
                    data-ai-hint="light map"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                        <Map className="w-16 h-16 mx-auto mb-2" />
                        <p>Map Area</p>
                    </div>
                </div>
            </div>
            <Button className="w-full">
                <Dumbbell className="mr-2 h-4 w-4" /> Start Workout
            </Button>
        </CardContent>
      </Card>
      
      <AITrainer />
    </div>
  );
}

const StatCard = ({ icon, label, value, progress }: { icon: React.ReactNode, label: string, value: string, progress?: number }) => (
    <Card className="flex flex-col items-center justify-center p-4">
        {icon}
        <p className="mt-2 text-xl font-bold">{value}</p>
        <p className="text-xs text-muted-foreground">{label}</p>
        {progress !== undefined && <Progress value={progress} className="mt-2 h-2 w-full" />}
    </Card>
)
