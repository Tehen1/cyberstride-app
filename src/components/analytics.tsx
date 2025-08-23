"use client";

import { useState } from "react";
import { CyberCard } from "@/components/ui/cyber-card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
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
  RadialBarChart,
  RadialBar,
} from "recharts";
import { cn } from "@/lib/utils";

type Tab = "overview" | "analytics" | "trends" | "urban" | "ecological";

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: "overview", label: "Vue d'ensemble", icon: "📊" },
  { id: "analytics", label: "Analytiques", icon: "📈" },
  { id: "trends", label: "Trends", icon: "📊" },
  { id: "urban", label: "Perf. Urbaine", icon: "🏙️" },
  { id: "ecological", label: "Impact Éco.", icon: "🌱" },
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
      <CyberCard>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-2 py-2 text-xs sm:text-sm font-bold rounded-md transition-all duration-300 flex items-center justify-center gap-2",
                activeTab === tab.id
                  ? "bg-primary/20 text-primary cyber-glow"
                  : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
              )}
            >
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>
      </CyberCard>

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
    <CyberCard variant="inner" className="p-4">
        <h4 className="text-sm font-bold text-primary mb-4">{title}</h4>
        <div className="h-56">
            {children}
        </div>
    </CyberCard>
)

const OverviewTab = () => (
    <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
            <CyberCard className="data-stream">
                <h3 className="text-2xl font-bold mb-4 cyber-text-gradient">Trajets Vélo</h3>
                <div className="grid grid-cols-2 gap-4">
                    <MetricStat label="Total" value="3,932" icon="🚲" glow="primary" />
                    <MetricStat label="Distance totale (km)" value="10,606.8" icon="🚲" glow="secondary" />
                    <MetricStat label="Temps total (heures)" value="1,253.0" icon="🚲" glow="accent" />
                    <MetricStat label="Distance Moy. (km)" value="2.7" subValue="+18%" icon="🚲" glow="green" />
                </div>
            </CyberCard>
            <CyberCard>
                <h3 className="text-2xl font-bold mb-4 cyber-text-gradient">FIXIE Token Economics</h3>
                 <div className="grid grid-cols-2 gap-4 mb-4">
                     <MetricStat label="FIXIE gagnés" value="8,550" subValue="+855 cette semaine" glow="primary" />
                     <MetricStat label="Tokens/km moyen" value="0.8" subValue="Grade urbain: A+" glow="secondary" />
                 </div>
            </CyberCard>
        </div>
         <ChartCard title="Performance Annuelle">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={yearlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--primary) / 0.1)" />
                    <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar yAxisId="left" dataKey="trajets" fill="hsl(var(--primary))" />
                    <Bar yAxisId="right" dataKey="tokens" fill="hsl(var(--secondary))" />
                </BarChart>
            </ResponsiveContainer>
        </ChartCard>
    </div>
)

const AnalyticsSubTab = () => (
    <div className="space-y-6">
        <CyberCard>
            <h3 className="text-lg font-bold mb-4 cyber-text-gradient">Personal Records</h3>
            <div className="grid md:grid-cols-3 gap-4">
                <MetricStat label="Distance la plus longue" value="93.4 km" icon="🏃‍♂️" />
                <MetricStat label="Vitesse la plus rapide" value="33.7 km/h" icon="⚡" />
                <MetricStat label="Plus de calories" value="2,803 cal" icon="🔥" />
                <MetricStat label="Puissance max" value="285 W" icon="💪" />
                <MetricStat label="Meilleure cadence" value="95 RPM" icon="🎯" />
            </div>
        </CyberCard>
         <CyberCard>
            <h3 className="text-lg font-bold mb-4 cyber-text-gradient">Activity Breakdown</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <MetricStat label="Total Workouts" value="3932" />
                <MetricStat label="Cycling Sessions" value="3932" />
                <MetricStat label="Avg Session Duration" value="19 min" />
                <MetricStat label="Avg Heart Rate" value="145 BPM" />
            </div>
        </CyberCard>
    </div>
)

const TrendsTab = () => (
     <div className="grid md:grid-cols-2 gap-6">
        <ChartCard title="Distance Over Time (30j)">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--primary) / 0.1)" />
                    <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip content={<CustomTooltip />} />
                    <Line type="monotone" dataKey="distance" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ fill: 'hsl(var(--primary))', r: 4 }} activeDot={{ r: 8, fill: 'hsl(var(--background))', stroke: 'hsl(var(--primary))' }} />
                </LineChart>
            </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="Average Speed Trend (30j)">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--secondary) / 0.1)" />
                    <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip content={<CustomTooltip />} />
                    <Line type="monotone" dataKey="speed" stroke="hsl(var(--secondary))" strokeWidth={2} dot={{ fill: 'hsl(var(--secondary))', r: 4 }} activeDot={{ r: 8, fill: 'hsl(var(--background))', stroke: 'hsl(var(--secondary))' }} />
                </LineChart>
            </ResponsiveContainer>
        </ChartCard>
    </div>
)

const UrbanTab = () => (
    <div className="space-y-6">
        <CyberCard>
            <h3 className="text-lg font-bold mb-4 cyber-text-gradient">Classement Urbain</h3>
            <div className="space-y-3">
                <UrbanStat label="Vitesse" value={5} rank="Débutant" color="bg-red-500" />
                <UrbanStat label="Endurance" value={27} rank="Débutant" color="bg-orange-500" />
                <UrbanStat label="Régularité" value={100} rank="Expert" color="bg-green-500" />
                <UrbanStat label="Exploration" value={73} rank="Avancé" color="bg-blue-500" />
            </div>
        </CyberCard>
         <CyberCard>
            <h3 className="text-lg font-bold mb-4 cyber-text-gradient">Défis Urbains Maîtrisés</h3>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <MetricStat label="Feux Rouges" value="85%" icon="🚦" />
                <MetricStat label="Trafic Dense" value="78%" icon="🚗" />
                <MetricStat label="Côtes" value="92%" icon="⛰️" />
                <MetricStat label="Intersections" value="88%" icon="🛣️" />
                <MetricStat label="Météo" value="76%" icon="🌦️" />
                <MetricStat label="Sécurité" value="95%" icon="🛡️" />
            </div>
        </CyberCard>
    </div>
)

const EcologicalTab = () => (
     <CyberCard>
        <h3 className="text-lg font-bold mb-4 cyber-text-gradient">Impact Écologique</h3>
        <div className="space-y-4">
            <MetricStat label="CO₂ économisé" value="1,272.8 kg" icon="🌱" size="large"/>
            <MetricStat label="Équivalent arbres" value="530 🌳" icon="🌳" size="large" />
            <MetricStat label="Essence économisée" value="848.5 L" icon="⛽" size="large" />
        </div>
    </CyberCard>
)

const MetricStat = ({ label, value, icon, subValue, glow, size = 'normal' }: { label: string, value: string, icon?: string, subValue?: string, glow?: string, size?: 'normal' | 'large' }) => (
    <CyberCard variant="inner" className={cn("p-4", size === 'large' && 'text-center')}>
        <div className="flex items-center gap-3">
             {icon && <div className="text-2xl">{icon}</div>}
             <div>
                <p className={cn("font-bold",
                    size === 'normal' ? "text-xl" : "text-3xl",
                    glow === 'primary' && 'text-primary cyber-glow',
                    glow === 'secondary' && 'text-secondary cyber-glow-secondary',
                    glow === 'accent' && 'text-accent cyber-glow-accent',
                    glow === 'green' && 'text-green-400',
                )}>{value}</p>
                <p className="text-xs text-muted-foreground">{label}</p>
                {subValue && <p className="text-xs text-green-400">{subValue}</p>}
             </div>
        </div>
    </CyberCard>
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
      <div className="p-2 bg-background/80 backdrop-blur-sm border border-primary/20 rounded-lg shadow-lg">
        <p className="label text-primary cyber-glow">{`${label}`}</p>
        {payload.map((pld: any, index: number) => (
          <div key={index} style={{ color: pld.fill }}>
            <p className="intro">{`${pld.name}: ${pld.value}`}</p>
          </div>
        ))}
      </div>
    );
  }

  return null;
};
