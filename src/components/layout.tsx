"use client";

import { useState } from "react";
import {
  Home,
  Coins,
  LineChart,
  Dumbbell,
  Gift,
  User,
  Power,
} from "lucide-react";
import { cn } from "@/lib/utils";

import Dashboard from "@/components/dashboard";
import Analytics from "@/components/analytics";
import DeFi from "@/components/defi";
import Workouts from "@/components/workouts";
import Rewards from "@/components/rewards";
import Profile from "@/components/profile";

type View = "home" | "defi" | "analytics" | "workouts" | "rewards" | "profile";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "defi", label: "DeFi", icon: Coins },
  { id: "analytics", label: "Analytics", icon: LineChart },
  { id: "workouts", label: "Workouts", icon: Dumbbell },
  { id: "rewards", label: "Rewards", icon: Gift },
  { id: "profile", label: "Profile", icon: User },
];

export default function Layout() {
  const [activeView, setActiveView] = useState<View>("home");

  const renderView = () => {
    switch (activeView) {
      case "home":
        return <Dashboard />;
      case "analytics":
        return <Analytics />;
      case "defi":
        return <DeFi />;
      case "workouts":
        return <Workouts />;
      case "rewards":
        return <Rewards />;
      case "profile":
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 overflow-y-auto pt-20 pb-24 px-4">
        {renderView()}
      </main>
      <BottomNav activeView={activeView} setActiveView={setActiveView} />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b border-primary/20">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-2">
          <Power className="w-8 h-8 text-primary cyber-glow" />
          <h1 className="text-2xl font-bold cyber-text-gradient tracking-widest">
            CyberStride
          </h1>
        </div>
        <button className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md border-2 border-secondary text-secondary transition-all duration-300 hover:bg-secondary hover:text-white hover:shadow-[0_0_15px_hsl(var(--secondary))]">
          Connect
        </button>
      </div>
    </header>
  );
}

function BottomNav({ activeView, setActiveView }: { activeView: View; setActiveView: (view: View) => void; }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-t border-primary/20">
      <div className="grid grid-cols-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id as View)}
            className={cn(
              "flex flex-col items-center justify-center gap-1 py-3 text-xs font-medium transition-all duration-300",
              "text-muted-foreground hover:text-primary",
              activeView === item.id && "text-primary cyber-glow"
            )}
            aria-current={activeView === item.id ? "page" : undefined}
          >
            <item.icon className="w-5 h-5" />
            <span className="hidden sm:inline">{item.label}</span>
            {activeView === item.id && (
              <div className="absolute bottom-0 w-8 h-0.5 bg-primary rounded-full cyber-glow" />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}
