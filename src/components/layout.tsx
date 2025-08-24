"use client";

import { useState, useMemo } from "react";
import {
  Home,
  Coins,
  LineChart,
  Dumbbell,
  Gift,
  User,
  Power,
  Bike,
} from "lucide-react";
import { cn } from "@/lib/utils";

import Dashboard from "@/components/dashboard";
import Analytics from "@/components/analytics";
import DeFi from "@/components/defi";
import Workouts from "@/components/workouts";
import Rewards from "@/components/rewards";
import Profile from "@/components/profile";
import { Button } from "./ui/button";

type View = "home" | "defi" | "analytics" | "workouts" | "rewards" | "profile";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "defi", label: "DeFi", icon: Coins },
  { id: "analytics", label: "Analytics", icon: LineChart },
  { id: "workouts", label: "Workouts", icon: Dumbbell },
  { id: "rewards", label: "Rewards", icon: Gift },
  { id: "profile", label: "Profile", icon: User },
];

const videoSources = {
  home: "https://ipfs.io/ipfs/QmY5CCvnXpzH93gvAzbwHGyiwtXLUMtJ2yn9FqGLW6SnY5",
  analytics: "https://ipfs.io/ipfs/QmTxhqRF8rQZxcwL1hfoqrrEjLahfymPRtpGXRq4gRK4Xn",
  defi: "https://ipfs.io/ipfs/QmPbM9iDT3v5o4zDvLntNhySmYpjEsKvgY4YmhskHvRn24",
  default: "https://ipfs.io/ipfs/QmY6skxApAer2bfMPXvvuEEx3WunScoN8b8hmmez8VCK6q",
};

export default function Layout() {
  const [activeView, setActiveView] = useState<View>("home");

  const videoSrc = useMemo(() => {
    return videoSources[activeView as keyof typeof videoSources] || videoSources.default;
  }, [activeView]);

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
    <div className="flex flex-col min-h-screen bg-background relative">
      <video 
        key={videoSrc}
        autoPlay 
        loop 
        muted 
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 opacity-20 transition-opacity duration-1000"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="fixed top-0 left-0 w-full h-full bg-background/80 -z-10" />

      <Header />
      <main className="flex-1 overflow-y-auto pt-20 pb-24 px-4 z-10">
        <div className="max-w-4xl mx-auto">
          {renderView()}
        </div>
      </main>
      <BottomNav activeView={activeView} setActiveView={setActiveView} />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-4xl mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-2">
          <Bike className="w-6 h-6 text-primary" />
          <h1 className="text-xl font-bold text-foreground">
            CyberStride
          </h1>
        </div>
        <Button variant="outline">
          Connect Wallet
        </Button>
      </div>
    </header>
  );
}

function BottomNav({ activeView, setActiveView }: { activeView: View; setActiveView: (view: View) => void; }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-t border-border/50">
      <div className="max-w-4xl mx-auto grid grid-cols-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id as View)}
            className={cn(
              "flex flex-col items-center justify-center gap-1 py-3 text-xs font-medium transition-colors relative",
              "text-muted-foreground hover:text-primary",
              activeView === item.id && "text-primary"
            )}
            aria-current={activeView === item.id ? "page" : undefined}
          >
            <item.icon className="w-5 h-5" />
            <span className="hidden sm:inline">{item.label}</span>
            {activeView === item.id && (
              <div className="absolute top-0 w-1/2 h-0.5 bg-primary rounded-full" />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}

const CyberstrideHeader = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border/50">
            <div className="max-w-4xl mx-auto flex items-center justify-between h-16 px-4">
                <div className="flex items-center gap-2">
                    <Bike className="w-6 h-6 text-primary" />
                    <h1 className="text-xl font-bold text-foreground">
                        CyberStride
                    </h1>
                </div>
                <Button variant="outline">
                    Connect Wallet
                </Button>
            </div>
        </header>
    );
};