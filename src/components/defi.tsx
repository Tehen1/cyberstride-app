"use client";

import { CyberCard } from "@/components/ui/cyber-card";
import { CyberButton } from "@/components/ui/cyber-button";
import { Input } from "@/components/ui/input";
import { Banknote, PiggyBank, BarChart2 } from 'lucide-react';

export default function DeFi() {
  return (
    <div className="space-y-6 fade-in">
      <CyberCard>
        <h2 className="text-2xl font-bold mb-6 cyber-text-gradient">DeFi Portfolio</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <MetricCard label="Total Value" value="$617.28" />
          <MetricCard label="Staking Rewards" value="123.45 FIXIE" />
        </div>
        <div className="space-y-3">
          <AssetRow name="FIXIE" balance="1234.567" value="$617.28" change="+5.2%" />
          <AssetRow name="ETH" balance="0.005" value="$15.42" change="-1.8%" />
        </div>
      </CyberCard>

      <CyberCard>
        <h3 className="text-lg font-bold mb-4 cyber-text-gradient">Staking</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-primary">Amount to Stake</label>
            <div className="relative">
              <Input type="number" placeholder="0.00" className="bg-transparent border-primary/50 text-lg h-12 pr-16" />
              <span className="absolute right-4 top-3.5 text-sm font-bold text-primary">FIXIE</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <CyberButton><PiggyBank className="w-4 h-4"/>Stake</CyberButton>
            <CyberButton variant="secondary">Unstake</CyberButton>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center mt-4">
            <MetricCard label="Staked" value="5000" />
            <MetricCard label="APY" value="12.5%" />
            <MetricCard label="Pending" value="25.3" />
          </div>
        </div>
      </CyberCard>

      <CyberCard>
        <h3 className="text-lg font-bold mb-4 cyber-text-gradient">Market Updates</h3>
        <div className="space-y-3">
          <UpdateRow title="FIXIE Token Listed" subtitle="Now trading on DEX exchanges" tag="+15%" tagColor="text-green-400"/>
          <UpdateRow title="Staking Rewards Increased" subtitle="APY raised to 12.5%" tag="NEW" tagColor="text-blue-400"/>
        </div>
      </CyberCard>
    </div>
  );
}

const MetricCard = ({ label, value }: { label: string; value: string }) => (
  <CyberCard variant="inner" className="p-3">
    <p className="text-lg font-bold text-primary cyber-glow">{value}</p>
    <p className="text-xs text-muted-foreground">{label}</p>
  </CyberCard>
);

const AssetRow = ({ name, balance, value, change }: { name: string; balance: string; value: string; change: string }) => (
  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
    <div className="flex items-center gap-3">
        <Banknote className="w-8 h-8 text-primary"/>
        <div>
            <p className="font-semibold">{name}</p>
            <p className="text-xs text-muted-foreground">{balance}</p>
        </div>
    </div>
    <div className="text-right">
        <p className="font-semibold">{value}</p>
        <p className={`text-xs ${change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{change}</p>
    </div>
  </div>
);

const UpdateRow = ({ title, subtitle, tag, tagColor }: { title: string; subtitle: string; tag: string; tagColor: string }) => (
    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
        <div className="flex items-center gap-3">
            <BarChart2 className="w-6 h-6 text-secondary" />
            <div>
                <p className="font-semibold">{title}</p>
                <p className="text-xs text-muted-foreground">{subtitle}</p>
            </div>
        </div>
        <span className={`text-sm font-bold ${tagColor}`}>{tag}</span>
    </div>
)
