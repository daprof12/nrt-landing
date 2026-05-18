import React from 'react';
import { Smartphone, Monitor, Globe } from 'lucide-react';
import { Button } from '../ui/Button';
import './IntegrationSection.css';

// SVG Icons for OS/Browsers
const AppleIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
    <path d="M10 2c1 .5 2 2 2 5" />
  </svg>
);

const AndroidIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-4h1.79a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H15" />
    <path d="m8 2 1.88 1.88" />
    <path d="M14.12 3.88 16 2" />
    <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
  </svg>
);

const WindowsIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
    <rect x="2" y="3" width="20" height="18" rx="2" />
    <path d="M2 12h20" />
    <path d="M12 3v18" />
  </svg>
);

const LinuxIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
    <path d="m18 16 4-4-4-4" />
    <path d="m6 8-4 4 4 4" />
    <path d="m14.5 4-5 16" />
  </svg>
);

const ChromeIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <line x1="21.17" y1="8" x2="12" y2="8" />
    <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
    <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
  </svg>
);

export function IntegrationSection() {
  return (
    <section className="integration" id="integration">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Download on all your device & manage your rewards from one account</h2>
          <p className="section-subtitle">
            Available across all platforms. Download native applications, browser extensions, desktops, or embed the SDK directly into your existing stack.
          </p>
        </div>

        <div className="integration-grid">
          <div className="platform-card glass-panel group">
            <div className="platform-icon text-accent-primary">
              <Smartphone size={32} />
            </div>
            <h3 className="platform-title">Mobile</h3>
            <p className="platform-desc">Native apps with low footprint and background telemetry for maximum earnings.</p>
            <div className="platform-actions">
              <Button variant="outline" size="sm" className="w-full">
                <AndroidIcon /> Android (.apk)
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                <AppleIcon /> iOS (TestFlight)
              </Button>
            </div>
          </div>

          <div className="platform-card glass-panel group">
            <div className="platform-icon text-purple-400">
              <Monitor size={32} />
            </div>
            <h3 className="platform-title">Desktop</h3>
            <p className="platform-desc">Run NetReward as a background service on your personal computer or server node.</p>
            <div className="platform-actions">
              <Button variant="outline" size="sm" className="w-full">
                <WindowsIcon /> Windows (.exe)
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                <AppleIcon /> macOS (.dmg)
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                <LinuxIcon /> Linux (.deb)
              </Button>
            </div>
          </div>

          <div className="platform-card glass-panel group">
            <div className="platform-icon text-emerald-400">
              <Globe size={32} />
            </div>
            <h3 className="platform-title">Browser</h3>
            <p className="platform-desc">Lightweight extensions to track session data and manage your NRT wallet easily.</p>
            <div className="platform-actions">
              <Button variant="outline" size="sm" className="w-full">
                <ChromeIcon /> Chrome Web Store
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                <Globe className="mr-2" size={18} /> Edge Add-ons
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
