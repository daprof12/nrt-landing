import React from 'react';
import { Wifi, Cpu, Coins, ArrowRight } from 'lucide-react';
import './HowItWorksSection.css';

const STEPS = [
  {
    icon: <Wifi size={32} className="step-icon text-accent-primary" />,
    title: '1. Connect',
    description: 'User connects to the SP or ISP network, authenticating via zero-touch SDK or native app.'
  },
  {
    icon: <Cpu size={32} className="step-icon text-purple-400" />,
    title: '2. Telemetry',
    description: 'Background worker measures active usage, bandwidth, and ensures quality of service metrics.'
  },
  {
    icon: <Coins size={32} className="step-icon text-emerald-400" />,
    title: '3. Reward',
    description: 'Smart contracts distribute NRT directly to the user wallet based on dynamic algorithmic pricing.'
  }
];

export function HowItWorksSection() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">A transparent, automated flow from connection to payout.</p>
        </div>

        <div className="steps-container">
          {STEPS.map((step, index) => (
            <React.Fragment key={index}>
              <div className="step-card glass-panel">
                <div className="step-icon-wrapper">
                  {step.icon}
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
              </div>
              {index < STEPS.length - 1 && (
                <div className="step-arrow">
                  <ArrowRight size={32} className="text-text-muted hidden md:block" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
