"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Tab = "overview" | "analytics" | "trends" | "urban" | "ecological";

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: "overview", label: "Overview", icon: "📊" },
  { id: "analytics", label: "Analytics", icon: "📈" },
  { id: "trends", label: "Trends", icon: "📊" },
  { id: "urban", label: "Urban Perf.", icon: "🏙️" },
  { id: "ecological", label: "Eco Impact", icon: "🌱" },
];

const yearlyData = [
  { name: "2021", trajets: 1200, tokens: 1500 },
  { name: "2022", trajets: 1800, tokens: 2200 },
  { name: "2023", trajets: 2500, tokens: 3100 },
  { name: "2024", trajets: 3932, tokens: 4000 },
  { name: "2025", trajets: 3200, tokens: 3800 },
];

const monthlyData = [
  { name: "Day 2", distance: 4, speed: 12 },
  { name: "Day 8", distance: 6, speed: 15 },
  { name: "Day 14", distance: 8, speed: 18 },
  { name: "Day 20", distance: 7, speed: 16 },
  { name: "Day 30", distance: 11, speed: 22 },
];

export default function Analytics() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  return (
    <div className="space-y-6 fade-in">
      <Card>
        <CardContent className="p-2">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-1">
            {tabs.map((tab) => (
                <Button
                    key={tab.id}
                    variant={activeTab === tab.id ? 'default' : 'ghost'}
                    onClick={() => setActiveTab(tab.id)}
                    className="flex items-center justify-center gap-2 text-xs sm:text-sm"
                >
                <span>{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
                </Button>
            ))}
            </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'analytics' && <AnalyticsSubTab />}
        {activeTab === 'trends' && <TrendsTab />}
        {activeTab === 'urban' && <UrbanTab />}
        {activeTab === 'ecological' && <EcologicalTab />}
      </div>
    </div>
  );
}

const ChartCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">{title}</CardTitle>
        </CardHeader>
        <CardContent className="h-72">
            {children}
        </CardContent>
    </Card>
)

const OverviewTab = () => (
    <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Bike Trips</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                    <MetricStat label="Total" value="3,932" />
                    <MetricStat label="Total Distance (km)" value="10,606.8" />
                    <MetricStat label="Total Time (hours)" value="1,253.0" />
                    <MetricStat label="Avg. Distance (km)" value="2.7" subValue="+18%" />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>FIXIE Token Economics</CardTitle>
                </CardHeader>
                 <CardContent className="grid grid-cols-2 gap-4">
                     <MetricStat label="FIXIE Earned" value="8,550" subValue="+855 this week" />
                     <MetricStat label="Avg Tokens/km" value="0.8" subValue="Urban Grade: A+" />
                 </CardContent>
            </Card>
        </div>
         <ChartCard title="Annual Performance">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={yearlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{fontSize: "0.8rem"}}/>
                    <Bar yAxisId="left" dataKey="trajets" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    <Bar yAxisId="right" dataKey="tokens" fill="hsl(var(--secondary-foreground))" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </ChartCard>
    </div>
)

const AnalyticsSubTab = () => (
    <div className="space-y-6">
        <Card>
            <CardHeader>
                <CardTitle>Personal Records</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-4">
                <MetricStat label="Longest Distance" value="93.4 km" icon="🏃‍♂️" />
                <MetricStat label="Fastest Speed" value="33.7 km/h" icon="⚡" />
                <MetricStat label="Most Calories" value="2,803 cal" icon="🔥" />
                <MetricStat label="Max Power" value="285 W" icon="💪" />
                <MetricStat label="Best Cadence" value="95 RPM" icon="🎯" />
            </CardContent>
        </Card>
         <Card>
            <CardHeader>
                <CardTitle>Activity Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <MetricStat label="Total Workouts" value="3932" />
                <MetricStat label="Cycling Sessions" value="3932" />
                <MetricStat label="Avg Session Duration" value="19 min" />
                <MetricStat label="Avg Heart Rate" value="145 BPM" />
            </CardContent>
        </Card>
    </div>
)

const TrendsTab = () => (
     <div className="grid md:grid-cols-2 gap-6">
        <ChartCard title="Distance Over Time (30d)">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip content={<CustomTooltip />} />
                    <Line type="monotone" dataKey="distance" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="Average Speed Trend (30d)">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip content={<CustomTooltip />} />
                    <Line type="monotone" dataKey="speed" stroke="hsl(var(--secondary-foreground))" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </ChartCard>
    </div>
)

const UrbanTab = () => (
    <div className="space-y-6">
        <Card>
            <CardHeader>
                <CardTitle>Urban Ranking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <UrbanStat label="Speed" value={5} rank="Beginner" color="bg-red-500" />
                <UrbanStat label="Endurance" value={27} rank="Beginner" color="bg-orange-500" />
                <UrbanStat label="Consistency" value={100} rank="Expert" color="bg-green-500" />
                <UrbanStat label="Exploration" value={73} rank="Advanced" color="bg-blue-500" />
            </CardContent>
        </Card>
         <Card>
            <CardHeader>
                <CardTitle>Urban Challenges Mastered</CardTitle>
            </CardHeader>
             <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <MetricStat label="Red Lights" value="85%" icon="🚦" />
                <MetricStat label="Heavy Traffic" value="78%" icon="🚗" />
                <MetricStat label="Hills" value="92%" icon="⛰️" />
                <MetricStat label="Intersections" value="88%" icon="🛣️" />
                <MetricStat label="Weather" value="76%" icon="🌦️" />
                <MetricStat label="Safety" value="95%" icon="🛡️" />
            </CardContent>
        </Card>
    </div>
)

const EcologicalTab = () => (
     <Card>
        <CardHeader>
            <CardTitle>Ecological Impact</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <MetricStat label="CO₂ Saved" value="1,272.8 kg" icon="🌱" size="large"/>
            <MetricStat label="Tree Equivalent" value="530 🌳" icon="🌳" size="large" />
            <MetricStat label="Gas Saved" value="848.5 L" icon="⛽" size="large" />
        </CardContent>
    </Card>
)

const MetricStat = ({ label, value, icon, subValue, size = 'normal' }: { label: string, value: string, icon?: string, subValue?: string, size?: 'normal' | 'large' }) => (
    <div className={cn("p-2 rounded-lg bg-secondary/50", size === 'large' && 'text-center')}>
        <div className="flex items-center gap-3">
             {icon && <div className="text-2xl">{icon}</div>}
             <div>
                <p className={cn("font-bold",
                    size === 'normal' ? "text-lg" : "text-xl"
                )}>{value}</p>
                <p className="text-xs text-muted-foreground">{label}</p>
                {subValue && <p className="text-xs text-green-500">{subValue}</p>}
             </div>
        </div>
    </div>
)

const UrbanStat = ({ label, value, rank, color }: { label: string, value: number, rank: string, color: string }) => (
    <div>
        <div className="flex justify-between items-center mb-1 text-sm">
            <span className="font-bold">{label}</span>
            <span className="text-muted-foreground">{value}/100 - {rank}</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2.5">
            <div className={cn("h-2.5 rounded-full", color)} style={{ width: `${value}%` }}></div>
        </div>
    </div>
)

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-background/80 backdrop-blur-sm border rounded-lg shadow-lg">
        <p className="label font-bold text-primary">{`${label}`}</p>
        {payload.map((pld: any, index: number) => (
          <div key={index} style={{ color: pld.fill }}>
            <p className="intro text-sm">{`${pld.name}: ${pld.value}`}</p>
          </div>
        ))}
      </div>
    );
  }

  return null;
};
