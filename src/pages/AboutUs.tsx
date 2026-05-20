import React from 'react';
import { ShieldCheck, Cpu, Coins, Users, Zap, TrendingUp, Globe, Layers } from 'lucide-react';
import './PageStyles.css';

export function AboutUs() {
  return (
    <div className="page-wrapper">
      <div className="container page-container">
        {/* Header */}
        <div className="page-header text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-accent-primary/10 text-accent-primary mb-4">
            <Zap size={12} /> The NetReward Mission
          </span>
          <h1 className="page-title text-gradient-accent">Empowering a Decentralized Data Economy</h1>
          <p className="page-subtitle max-w-2xl mx-auto">
            We are redefining how bandwidth, content, and engagement value flow across the internet. By aligning the incentives of users, service providers, and network operators, we are building a fairer web for all.
          </p>
        </div>

        {/* Story Section */}
        <div className="glass-panel p-8 mb-6 text-left">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">Our Vision</h2>
          <p className="leading-relaxed text-text-secondary mb-4">
            For decades, the internet economy has been heavily centralized. Mega-platforms capture trillions in value from user engagement and data, while the infrastructure providers (ISPs) who deliver this traffic, and the creators/SPs who power the experiences, remain decoupled from this value generation loop.
          </p>
          <p className="leading-relaxed text-text-secondary">
            NetReward changes the paradigm. Through our robust NRT blockchain layer, telemetry validation networks, and micro-escrow reward pools, we turn data delivery into a direct, peer-to-peer incentive framework.
          </p>
        </div>

        {/* Core Values / Pillar Cards */}
        <h2 className="text-2xl font-bold text-center mt-16 mb-6 text-text-primary">Our Core Pillars</h2>
        <div className="contact-grid">
          <div className="info-card glass-panel text-left">
            <ShieldCheck className="text-accent-primary mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2 text-text-primary">Absolute Privacy</h3>
            <p className="text-text-secondary leading-relaxed">
              We never track user identities or personal details. Our Zero-Touch Telemetry checks only aggregate session data volumes to distribute rewards safely, privately, and reliably.
            </p>
          </div>

          <div className="info-card glass-panel text-left">
            <Cpu className="text-purple-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2 text-text-primary">Next-Gen Integration</h3>
            <p className="text-text-secondary leading-relaxed">
              With cross-platform SDKs supporting web, mobile (Android/iOS), VR platforms, and home gaming consoles, integration for Service Providers is fully seamless.
            </p>
          </div>

          <div className="info-card glass-panel text-left">
            <Coins className="text-emerald-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2 text-text-primary">Tokenized Incentive</h3>
            <p className="text-text-secondary leading-relaxed">
              Users earn NRT tokens in real-time. Service Providers get high-value engagement campaigns. ISPs earn node routing fees. Everyone wins.
            </p>
          </div>
        </div>

        {/* How It All Connects */}
        <div className="glass-panel p-8 mt-16 text-left">
          <div className="flex items-center gap-4 mb-6">
            <Layers className="text-accent-primary" size={32} />
            <h2 className="text-2xl font-bold text-text-primary">The NetReward Loop</h2>
          </div>
          
          <div className="space-y-4 text-text-secondary">
            <div className="flex gap-4 items-start pl-6 border-l border-glass-border">
              <span className="font-bold text-accent-primary text-xl">01.</span>
              <div>
                <strong className="text-text-primary">Users Connect & Link</strong>
                <p className="text-sm mt-1">Users link their apps, games, and devices to the NetReward dashboard to verify engagement.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start pl-6 border-l border-glass-border">
              <span className="font-bold text-purple-400 text-xl">02.</span>
              <div>
                <strong className="text-text-primary">SPs Launch Campaigns</strong>
                <p className="text-sm mt-1">Service Providers launch target outreach campaigns using smart NRT escrow contracts.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start pl-6 border-l border-glass-border">
              <span className="font-bold text-emerald-400 text-xl">03.</span>
              <div>
                <strong className="text-text-primary">ISPs Validate & Route</strong>
                <p className="text-sm mt-1">Internet Service Providers route, cache, and validate the campaign telemetry to secure the rewards delivery pipeline.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Stats or Vision Grid */}
        <div className="contact-grid mt-16">
          <div className="info-card glass-panel text-left">
            <Globe className="text-accent-primary mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2 text-text-primary">Decentralized Web</h3>
            <p className="text-text-secondary text-sm">
              Connecting millions of endpoints globally without central middleman fees.
            </p>
          </div>
          
          <div className="info-card glass-panel text-left">
            <TrendingUp className="text-purple-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2 text-text-primary">Scalable Velocity</h3>
            <p className="text-text-secondary text-sm">
              Real-time block confirmations and transaction throughput tailored for high-volume content delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
