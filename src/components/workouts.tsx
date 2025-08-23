"use client";

import { CyberCard } from "@/components/ui/cyber-card";
import { CyberButton } from "@/components/ui/cyber-button";
import { Bike, Footprints, Plus, Trash2 } from "lucide-react";

const categories = [
  { name: "Cycling", icon: Bike, details: "Road & Mountain" },
  { name: "Running", icon: Footprints, details: "Indoor & Outdoor" },
  { name: "Walking", icon: Footprints, details: "Leisure & Fitness" },
  { name: "Custom", icon: Plus, details: "Create Your Own" },
];

const history = [
    { type: "Cycling", distance: "15.2 km", tokens: "7.60", date: "2024-07-20" },
    { type: "Running", distance: "5.0 km", tokens: "3.50", date: "2024-07-19" },
    { type: "Cycling", distance: "25.8 km", tokens: "12.90", date: "2024-07-18" },
]

export default function Workouts() {
  return (
    <div className="space-y-6 fade-in">
      <CyberCard>
        <h2 className="text-2xl font-bold mb-4 cyber-text-gradient">Workout Library</h2>
        <div className="grid grid-cols-2 gap-4">
          {categories.map((cat) => (
            <CyberCard
              key={cat.name}
              variant="inner"
              className="text-center p-4 hover:border-primary transition-all duration-300 cursor-pointer group"
            >
              <cat.icon className="w-12 h-12 mx-auto text-primary transition-all group-hover:cyber-glow" />
              <p className="font-bold mt-2">{cat.name}</p>
              <p className="text-xs text-muted-foreground">{cat.details}</p>
            </CyberCard>
          ))}
        </div>
      </CyberCard>

      <CyberCard>
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold cyber-text-gradient">Recent Workouts</h3>
            <button className="flex items-center gap-2 text-xs text-destructive/80 hover:text-destructive transition-colors">
                <Trash2 className="w-3 h-3"/> Clear All
            </button>
        </div>
        <div className="space-y-3">
           {history.map((item, index) => (
             <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                    <Bike className="w-8 h-8 text-secondary"/>
                    <div>
                        <p className="font-semibold">{item.distance}</p>
                        <p className="text-xs text-muted-foreground">{item.type}</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="font-semibold text-green-400">+{item.tokens} FIXIE</p>
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                </div>
             </div>
           ))}
        </div>
      </CyberCard>
    </div>
  );
}
