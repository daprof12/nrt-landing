import React from 'react';
import { Smartphone, Monitor, Globe, Gamepad2 } from 'lucide-react';
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

const PlayStationIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="mr-2">
    <path d="M9.5 2.1v16.3l3.6 1.3V5.6c0-.6.1-1.2.5-1.5.3-.3.8-.2 1.1 0 .6.4.5 1.2.5 1.9v2.1c1.8.7 3.2 1.2 3.7 1.5 1.6.8 1.9 2.2 1.5 3.5-.4 1.3-1.6 2.2-3.4 2.8V18l5.2-1.8c.4-.1.7-.1 1 .1.2.1.3.3.3.5s-.1.4-.3.5L9.5 22l-5.2-1.8c-1.4-.5-2.5-1.2-3-2.3-.5-1-.3-2.3.6-3l3.7-1.3v2.1l-2 .7c-.4.1-.7.3-.9.6-.2.3-.1.7.2.9.4.3 1 .3 1.5.1l4.1-1.5V2.1z"/>
  </svg>
);

const XboxIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="mr-2">
    <path d="M6.43 3.72A9.97 9.97 0 0 1 12 2a9.97 9.97 0 0 1 5.57 1.72c-.41.39-1.1.82-1.97 1.05A6.54 6.54 0 0 0 12 3.96c-1.37 0-2.55.34-3.6.81-.87-.23-1.56-.66-1.97-1.05zM2 12c0-2.4.85-4.6 2.26-6.33.46.3 1.05.81 1.64 1.53C4.7 8.62 4 10.22 4 12c0 2.67 1.26 5.03 3.22 6.55.34.36.69.65 1.01.86A9.96 9.96 0 0 1 2 12zm10 10a9.96 9.96 0 0 0 6.23-2.18c-.93.13-2.09-.09-3.32-.68C13.82 19.69 12.95 20 12 20s-1.82-.31-2.91-.86c-1.23.59-2.39.81-3.32.68A9.96 9.96 0 0 0 12 22zm10-10c0 2.4-.85 4.6-2.26 6.33-.46-.3-1.05-.81-1.64-1.53C19.3 15.38 20 13.78 20 12c0-2.67-1.26-5.03-3.22-6.55a8.83 8.83 0 0 0-1.01-.86A9.96 9.96 0 0 1 22 12zM12 7.5c1.1 0 2.12.36 2.95.96.63.76 1.17 1.8 1.55 3.04.3 1 .45 2.08.45 3.13 0 .96-.36 1.75-.96 2.33-.71.38-1.58.54-2.5.54H10.5c-.92 0-1.79-.16-2.5-.54-.6-.58-.96-1.37-.96-2.33 0-1.05.15-2.13.45-3.13.38-1.24.92-2.28 1.55-3.04A4.97 4.97 0 0 1 12 7.5z"/>
  </svg>
);

const SteamIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="mr-2">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15l-2.55-1.02a2.5 2.5 0 1 1 1.92-4.62L12 10.5l2.46-1.23a3.5 3.5 0 1 1 1.72 3.27L14 13.5v8.3c4.56-.93 8-4.96 8-9.8 0-5.52-4.48-10-10-10zm4-3a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"/>
  </svg>
);

export function IntegrationSection() {
  return (
    <section className="integration" id="integration">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Download on all your devices & manage your rewards from one account</h2>
          <p className="section-subtitle">
            Available across all platforms — mobile, desktop, browser, and gaming consoles. Track your data usage and earn rewards everywhere you connect.
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

          <div className="platform-card glass-panel group">
            <div className="platform-icon" style={{ color: '#a78bfa' }}>
              <Gamepad2 size={32} />
            </div>
            <h3 className="platform-title">Gaming</h3>
            <p className="platform-desc">Track online game data on your console. Link your gaming accounts and earn NRT rewards on every connected SP title you play.</p>
            <div className="platform-actions">
              <Button variant="outline" size="sm" className="w-full">
                <PlayStationIcon /> PlayStation (PSN)
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                <XboxIcon /> Xbox (Gamertag)
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                <SteamIcon /> Steam (Link ID)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
