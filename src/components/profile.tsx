"use client";

import { CyberCard } from "@/components/ui/cyber-card";
import { CyberButton } from "@/components/ui/cyber-button";
import { Switch } from "@/components/ui/switch";
import { User, Bell, Moon, Gps, ChevronRight, UploadCloud, LogOut, Power } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { name: "Apple HealthKit", icon: "fab fa-apple", connected: true },
  { name: "Strava", icon: "fab fa-strava", connected: true },
  { name: "Google Fit", icon: "fab fa-google", connected: false },
  { name: "Fitbit", icon: "fas fa-heartbeat", connected: false },
];

export default function Profile() {
  return (
    <div className="space-y-6 fade-in">
        <CyberCard className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary cyber-border-animated">
                <User className="w-10 h-10 text-white"/>
            </div>
            <div>
                <h2 className="text-2xl font-bold">CyberRunner</h2>
                <p className="text-muted-foreground">runner@cyber.net</p>
                <div className="mt-2 flex items-center gap-2">
                    <span className="px-2 py-1 bg-primary text-primary-foreground rounded-full text-xs font-bold">Level 5</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold">Active</span>
                </div>
            </div>
        </CyberCard>

        <CyberCard>
            <h3 className="text-lg font-bold mb-4 cyber-text-gradient">Settings</h3>
            <div className="space-y-3">
                <SettingRow label="Notifications" icon={Bell} defaultChecked={true} />
                <SettingRow label="Dark Mode" icon={Moon} defaultChecked={true} />
                <SettingRow label="GPS Auto-start" icon={Gps} defaultChecked={true} />
            </div>
        </CyberCard>
        
        <CyberCard>
            <h3 className="text-lg font-bold mb-4 cyber-text-gradient">Connected Services</h3>
            <div className="space-y-3">
                {services.map(service => (
                    <div key={service.name} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-3">
                            <i className={`${service.icon} w-6 h-6 text-primary text-xl text-center`}></i>
                            <span className="font-medium">{service.name}</span>
                        </div>
                        <CyberButton size="sm" variant={service.connected ? "secondary" : "default"}>
                            {service.connected ? 'Connected' : 'Connect'}
                        </CyberButton>
                    </div>
                ))}
            </div>
        </CyberCard>

        <CyberCard>
             <h3 className="text-lg font-bold mb-4 cyber-text-gradient">Account</h3>
            <div className="space-y-3">
                <AccountAction label="Edit Profile" icon={User} />
                <AccountAction label="Export Data" icon={UploadCloud} />
                <AccountAction label="Logout" icon={LogOut} className="text-destructive/80 hover:bg-destructive/20 hover:text-destructive" />
            </div>
        </CyberCard>
    </div>
  );
}

const SettingRow = ({ label, icon: Icon, defaultChecked }: { label: string; icon: React.ElementType; defaultChecked?: boolean }) => (
    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
        <div className="flex items-center gap-3">
            <Icon className="w-5 h-5 text-primary" />
            <span className="font-medium">{label}</span>
        </div>
        <Switch defaultChecked={defaultChecked} />
    </div>
);

const AccountAction = ({ label, icon: Icon, className }: { label: string; icon: React.ElementType; className?: string }) => (
     <button className={cn("w-full flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-primary/10 transition-colors", className)}>
        <div className="flex items-center gap-3">
            <Icon className="w-5 h-5"/>
            <span className="font-medium">{label}</span>
        </div>
        <ChevronRight className="w-5 h-5 text-muted-foreground"/>
    </button>
)

// Add FontAwesome to head
import Head from 'next/head';
const ProfileWithHead = () => (
    <>
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        </Head>
        <Profile />
    </>
);

export { ProfileWithHead as Profile };
