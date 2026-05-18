import React from 'react';
import { QrCode, Activity, Target, ArrowLeftRight, Zap, Coins, Gift } from 'lucide-react';
import './FeaturesSection.css';

const FEATURES = [
  {
    title: 'Scan2Pay',
    description: 'Seamless, instant payments via QR codes. Fast, secure, and fully decentralized.',
    icon: <QrCode size={24} className="feature-icon text-accent-primary" />
  },
  {
    title: 'Data Tracking & Reward Calculator',
    description: 'Real-time telemetry measuring bandwidth and duration to dynamically calculate NRT rewards.',
    icon: <Activity size={24} className="feature-icon text-blue-400" />
  },
  {
    title: 'Targeted Advert Campaigns',
    description: 'Launch high-converting campaigns directly to users consuming your network data.',
    icon: <Target size={24} className="feature-icon text-purple-400" />
  },
  {
    title: 'P2P Trade',
    description: 'Trade NRT seamlessly between users and providers without centralized intermediaries.',
    icon: <ArrowLeftRight size={24} className="feature-icon text-emerald-400" />
  },
  {
    title: 'Instant Purchase',
    description: 'Allow users to buy NRT instantly to unlock premium services and bandwidth tiers.',
    icon: <Zap size={24} className="feature-icon text-amber-400" />
  },
  {
    title: 'Cashback',
    description: 'Automated revenue share. Providers get a percentage of user earnings back to treasury.',
    icon: <Coins size={24} className="feature-icon text-rose-400" />
  },
  {
    title: 'Referral Bonus',
    description: 'Viral growth engineered. Incentivize users to onboard others with automated payouts.',
    icon: <Gift size={24} className="feature-icon text-cyan-400" />
  }
];

export function FeaturesSection() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">The Complete Ecosystem</h2>
          <p className="section-subtitle">
            NetReward provides every tool you need to tokenize your Platform or network while incentivizing users.
          </p>
        </div>

        <div className="features-grid">
          {FEATURES.map((feature, index) => (
            <div key={index} className="feature-card glass-panel group">
              <div className="feature-icon-wrapper group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
