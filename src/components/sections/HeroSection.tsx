import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, ChevronRight, Activity, Globe, Shield, Coins, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import './HeroSection.css';

// Custom Counter Component for animating numbers
const AnimatedCounter = ({ from, to, suffix }: { from: number, to: number, suffix: string }) => {
  const [count, setCount] = React.useState(from);

  React.useEffect(() => {
    const duration = 2000; // 2 seconds
    const frames = 60;
    const step = (to - from) / (duration / (1000 / frames));
    let current = from;

    const timer = setInterval(() => {
      current += step;
      if (current >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / frames);

    return () => clearInterval(timer);
  }, [from, to]);

  // Format large numbers (e.g. 1000000 -> 1M)
  const formattedCount = count >= 1000000
    ? (count / 1000000).toFixed(0) + 'M'
    : count >= 1000
      ? (count / 1000).toFixed(0) + 'K'
      : count;

  return <span>{formattedCount}{suffix}</span>;
};

export function HeroSection() {
  return (
    <section className="hero" id="home">
      {/* Background elements */}
      <div className="hero-bg-pattern"></div>
      <div className="glow-backdrop animate-pulse-glow"></div>

      {/* Floating Icons */}
      <motion.div className="floating-icon icon-1" animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
        <Activity size={32} className="text-accent-primary" />
      </motion.div>
      <motion.div className="floating-icon icon-2" animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
        <Globe size={40} className="text-purple-400" />
      </motion.div>
      <motion.div className="floating-icon icon-3" animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
        <Shield size={28} className="text-emerald-400" />
      </motion.div>
      <motion.div className="floating-icon icon-4" animate={{ y: [0, 25, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
        <Coins size={36} className="text-amber-400" />
      </motion.div>
      <motion.div className="floating-icon icon-5" animate={{ y: [0, -25, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}>
        <Smartphone size={32} className="text-blue-400" />
      </motion.div>

      <div className="container hero-container">
        <div className="hero-badge">
          <span className="badge-text">New Release</span>
          <span className="badge-divider"></span>
          <span className="badge-desc">NetReward v2.0 is live</span>
          <ChevronRight size={14} />
        </div>

        <h1 className="hero-title animate-float">
          The Decentralized <br />
          <span className="text-gradient-accent">Reward Network</span>
        </h1>

        <p className="hero-subtitle">
          Everything in one API. Powering ISPs and SPs globally with seamless Scan2Pay, data tracking, and converting targeted Ad campaign through incentives.
        </p>

        <div className="hero-actions">
          <Button variant="primary" size="lg" icon={<ArrowRight size={18} />} onClick={() => document.getElementById('integration')?.scrollIntoView({ behavior: 'smooth' })}>
            Start Integrating
          </Button>
          <Button variant="secondary" size="lg" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore Features
          </Button>
        </div>

        <div className="hero-stats glass-panel">
          <div className="stat-item">
            <span className="stat-value text-gradient-accent">
              <AnimatedCounter from={0} to={1000000} suffix="+" />
            </span>
            <span className="stat-label">Total Users</span>
          </div>
          <div className="stat-item">
            <span className="stat-value text-gradient-accent">
              <AnimatedCounter from={0} to={120} suffix="+" />
            </span>
            <span className="stat-label">SP Partners</span>
          </div>
          <div className="stat-item">
            <span className="stat-value text-gradient-accent">
              <AnimatedCounter from={0} to={50} suffix="+" />
            </span>
            <span className="stat-label">ISP Partners</span>
          </div>
          <div className="stat-item">
            <span className="stat-value text-gradient-accent">
              <AnimatedCounter from={0} to={5000} suffix="+" />
            </span>
            <span className="stat-label">Total Campaigns</span>
          </div>
          <div className="stat-item">
            <span className="stat-value text-gradient-accent">
              $<AnimatedCounter from={0} to={2000000} suffix="+" />
            </span>
            <span className="stat-label">Rewards Paid</span>
          </div>
        </div>

      </div>
    </section>
  );
}
