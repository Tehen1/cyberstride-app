"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Banknote, PiggyBank, BarChart2, ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from "@/lib/utils";

export default function DeFi() {
  return (
    <div className="space-y-6 fade-in">
      <Card>
        <CardHeader>
            <CardTitle>DeFi Portfolio</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-2 gap-4 mb-6">
            <MetricCard label="Total Value" value="$617.28" />
            <MetricCard label="Staking Rewards" value="123.45 FIXIE" />
            </div>
            <div className="space-y-3">
            <AssetRow name="FIXIE" balance="1234.567" value="$617.28" change="+5.2%" />
            <AssetRow name="ETH" balance="0.005" value="$15.42" change="-1.8%" />
            </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
            <CardTitle>Staking</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">Amount to Stake</label>
            <div className="relative">
              <Input type="number" placeholder="0.00" className="bg-background text-lg h-12 pr-16" />
              <span className="absolute right-4 top-3.5 text-sm font-bold text-muted-foreground">FIXIE</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Button><PiggyBank className="w-4 h-4 mr-2"/>Stake</Button>
            <Button variant="secondary">Unstake</Button>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center mt-4">
            <MetricCard label="Staked" value="5000" />
            <MetricCard label="APY" value="12.5%" />
            <MetricCard label="Pending" value="25.3" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
            <CardTitle>Market Updates</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <UpdateRow title="FIXIE Token Listed" subtitle="Now trading on DEX exchanges" tag="+15%" tagColor="text-green-600"/>
          <UpdateRow title="Staking Rewards Increased" subtitle="APY raised to 12.5%" tag="NEW" tagColor="text-blue-600"/>
        </CardContent>
      </Card>
    </div>
  );
}

const MetricCard = ({ label, value }: { label: string; value: string }) => (
  <Card className="p-3">
    <p className="text-lg font-bold text-primary">{value}</p>
    <p className="text-xs text-muted-foreground">{label}</p>
  </Card>
);

const AssetRow = ({ name, balance, value, change }: { name: string; balance: string; value: string; change: string }) => {
    const isPositive = change.startsWith('+');
    return (
        <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-muted rounded-full">
                    <Banknote className="w-5 h-5 text-primary"/>
                </div>
                <div>
                    <p className="font-semibold">{name}</p>
                    <p className="text-xs text-muted-foreground">{balance}</p>
                </div>
            </div>
            <div className="text-right">
                <p className="font-semibold">{value}</p>
                <div className={cn("flex items-center justify-end text-xs", isPositive ? 'text-green-600' : 'text-red-600')}>
                   {isPositive ? <ArrowUp className="w-3 h-3 mr-1" /> : <ArrowDown className="w-3 h-3 mr-1" />}
                    <span>{change}</span>
                </div>
            </div>
        </div>
    );
};

const UpdateRow = ({ title, subtitle, tag, tagColor }: { title: string; subtitle: string; tag: string; tagColor: string }) => (
    <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
        <div className="flex items-center gap-3">
            <BarChart2 className="w-6 h-6 text-primary" />
            <div>
                <p className="font-semibold">{title}</p>
                <p className="text-xs text-muted-foreground">{subtitle}</p>
            </div>
        </div>
        <span className={`text-sm font-bold ${tagColor}`}>{tag}</span>
    </div>
)
