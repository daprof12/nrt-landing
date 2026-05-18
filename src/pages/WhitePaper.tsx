import React from 'react';
import { Button } from '../components/ui/Button';
import { Download, FileText, BarChart3, Shield } from 'lucide-react';
import './PageStyles.css';

export function WhitePaper() {
  return (
    <div className="page-wrapper">
      <div className="container page-container">
        <div className="page-header text-center">
          <div className="inline-flex items-center justify-center p-3 bg-accent-primary/10 rounded-full mb-6">
            <FileText size={48} className="text-accent-primary" />
          </div>
          <h1 className="page-title text-gradient-accent">NRT Token White Paper</h1>
          <p className="page-subtitle max-w-2xl mx-auto">
            A comprehensive overview of the NetReward token economy, technical architecture, and the decentralized incentive model powering global internet services.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button variant="primary" size="lg" icon={<Download size={18} />}>
              Download PDF Version
            </Button>
            <Button variant="outline" size="lg">
              Read Online
            </Button>
          </div>
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-2xl max-w-4xl mx-auto mt-16 text-left">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-text-primary border-b border-glass-border pb-4">Executive Summary</h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              NetReward (NRT) is a native utility token built on the Solana blockchain, designed to disrupt the traditional Internet Service Provider (ISP) and Service Provider (SP) operational models. By introducing a "Zero-Touch" telemetry and decentralized rewards system, NetReward allows providers to tokenize user bandwidth consumption, turning data usage into a liquid, tradable asset.
            </p>

            <h3 className="text-xl font-bold mb-4 mt-8 text-text-primary flex items-center gap-2">
              <BarChart3 className="text-purple-400" /> Tokenomics & Distribution
            </h3>
            <p className="text-text-secondary mb-4 leading-relaxed">
              The NRT ecosystem operates on a dynamic valuation model rather than a fixed peg. The token's value is programmatically derived from multiple network factors:
            </p>
            <ul className="list-disc pl-6 text-text-secondary mb-6 space-y-2">
              <li><strong>Data Consumption Volume (40% Weight):</strong> Rewards scale with the total gigabytes routed through partner networks.</li>
              <li><strong>Platform Revenue (30% Weight):</strong> Fiat inflows from targeted ad campaigns and premium services inject liquidity into the token pool.</li>
              <li><strong>Supply/Demand Dynamics (20% Weight):</strong> Market activity on decentralized exchanges.</li>
              <li><strong>Staking Rewards (10% Weight):</strong> Yields for long-term network participants.</li>
            </ul>

            <h3 className="text-xl font-bold mb-4 mt-8 text-text-primary flex items-center gap-2">
              <Shield className="text-emerald-400" /> Security & Decentralization
            </h3>
            <p className="text-text-secondary mb-4 leading-relaxed">
              By leveraging Solana's Token-2022 program extensions, NetReward implements advanced transfer hooks for automated platform cashbacks (SP/ISP revenue share) without relying on centralized escrows. Metadata is hosted securely on decentralized storage and synced via zero-downtime APIs.
            </p>

            <div className="mt-12 p-6 bg-accent-primary/5 border border-accent-primary/20 rounded-xl">
              <p className="text-sm text-text-secondary text-center">
                This is an abridged version. For deep technical specifications regarding the telemetry SDK, SPL-Token configurations, and integration endpoints, please download the full PDF.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
