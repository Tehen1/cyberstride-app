"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { User, Bell, Moon, MapPin, ChevronRight, UploadCloud, LogOut, Link, Heart, Smartphone, Footprints } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const services = [
  { name: "Apple HealthKit", icon: Heart, connected: true },
  { name: "Strava", icon: Footprints, connected: true },
  { name: "Google Fit", icon: Heart, connected: false },
  { name: "Fitbit", icon: Smartphone, connected: false },
];

export default function Profile() {
  return (
    <div className="space-y-6 fade-in">
        <Card>
            <CardContent className="pt-6 flex items-center gap-4">
                <Avatar className="w-20 h-20">
                    <AvatarImage src="https://placehold.co/100x100.png" alt="User Avatar" data-ai-hint="avatar profile" />
                    <AvatarFallback>CR</AvatarFallback>
                </Avatar>
                <div>
                    <h2 className="text-2xl font-bold">CyberRunner</h2>
                    <p className="text-muted-foreground">runner@cyber.net</p>
                    <div className="mt-2 flex items-center gap-2">
                        <span className="px-2 py-1 bg-primary text-primary-foreground rounded-full text-xs font-bold">Level 5</span>
                        <span className="px-2 py-1 bg-green-500/20 text-green-600 rounded-full text-xs font-bold">Active</span>
                    </div>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
                <SettingRow label="Notifications" icon={Bell} defaultChecked={true} />
                <SettingRow label="Dark Mode" icon={Moon} defaultChecked={false} />
                <SettingRow label="GPS Auto-start" icon={MapPin} defaultChecked={true} />
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Connected Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                {services.map(service => (
                    <div key={service.name} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                        <div className="flex items-center gap-3">
                            <service.icon className="w-5 h-5 text-primary"/>
                            <span className="font-medium">{service.name}</span>
                        </div>
                        <Button size="sm" variant={service.connected ? "secondary" : "default"}>
                             <Link className="w-4 h-4 mr-2" />
                            {service.connected ? 'Connected' : 'Connect'}
                        </Button>
                    </div>
                ))}
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Account</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                <AccountAction label="Edit Profile" icon={User} />
                <AccountAction label="Export Data" icon={UploadCloud} />
                <AccountAction label="Logout" icon={LogOut} className="text-red-600 hover:bg-red-50 hover:text-red-700" />
            </CardContent>
        </Card>
    </div>
  );
}

const SettingRow = ({ label, icon: Icon, defaultChecked }: { label: string; icon: React.ElementType; defaultChecked?: boolean }) => (
    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50">
        <div className="flex items-center gap-3">
            <Icon className="w-5 h-5 text-muted-foreground" />
            <span className="font-medium">{label}</span>
        </div>
        <Switch defaultChecked={defaultChecked} />
    </div>
);

const AccountAction = ({ label, icon: Icon, className }: { label: string; icon: React.ElementType; className?: string }) => (
     <button className={cn("w-full flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors", className)}>
        <div className="flex items-center gap-3">
            <Icon className="w-5 h-5 text-muted-foreground"/>
            <span className="font-medium">{label}</span>
        </div>
        <ChevronRight className="w-5 h-5 text-muted-foreground"/>
    </button>
)
