"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bike, Footprints, Plus, Trash2, Dumbbell } from "lucide-react";

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
      <Card>
        <CardHeader>
            <CardTitle>Workout Library</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          {categories.map((cat) => (
            <Card
              key={cat.name}
              className="text-center p-4 hover:border-primary transition-all duration-300 cursor-pointer group"
            >
              <cat.icon className="w-10 h-10 mx-auto text-primary transition-all" />
              <p className="font-bold mt-2">{cat.name}</p>
              <p className="text-xs text-muted-foreground">{cat.details}</p>
            </Card>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Workouts</CardTitle>
            <Button variant="ghost" size="sm" className="flex items-center gap-2 text-xs text-red-600 hover:text-red-700">
                <Trash2 className="w-3 h-3"/> Clear All
            </Button>
        </CardHeader>
        <CardContent className="space-y-3">
           {history.map((item, index) => (
             <div key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-muted rounded-full">
                        <Dumbbell className="w-5 h-5 text-primary"/>
                    </div>
                    <div>
                        <p className="font-semibold">{item.distance}</p>
                        <p className="text-xs text-muted-foreground">{item.type}</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="font-semibold text-green-600">+{item.tokens} FIXIE</p>
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                </div>
             </div>
           ))}
        </CardContent>
      </Card>
    </div>
  );
}
