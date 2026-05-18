import React from 'react';
import { User, Server, Wifi, ArrowRight } from 'lucide-react';
import './IntroSection.css';

export function IntroSection() {
  return (
    <section className="intro-section" id="about">
      <div className="container intro-container">
        <div className="intro-content glass-panel">
          <h2 className="section-title">Tokenize Data Usage</h2>
          <p className="intro-text">
            The traditional model of internet service is one-sided. We're changing that. NetReward creates an incentivizes data economy where users get rewarded for their engagement, and providers can leverage targeted campaigns to drive value directly to the platforms.
          </p>

          <div className="intro-earnings-flow">
            <div className="flow-item">
              <div className="flow-icon-wrapper user-icon">
                <User size={24} />
              </div>
              <div className="flow-text">
                <strong>User</strong> earns<br />
                <span className="text-gradient-accent text-lg">2.6 NRT</span>
              </div>
            </div>

            <ArrowRight className="flow-arrow" />

            <div className="flow-item">
              <div className="flow-icon-wrapper sp-icon">
                <Server size={24} />
              </div>
              <div className="flow-text">
                <strong>SP</strong> gets<br />
                <span className="text-gradient-accent text-lg">10%</span>
              </div>
            </div>

            <ArrowRight className="flow-arrow" />

            <div className="flow-item">
              <div className="flow-icon-wrapper isp-icon">
                <Wifi size={24} />
              </div>
              <div className="flow-text">
                <strong>ISP</strong> gets<br />
                <span className="text-gradient-accent text-lg">5%</span>
              </div>
            </div>
          </div>

          <p className="intro-disclaimer">
            *SP and ISP percentages are based on the user's earnings when accessing the SP platform through the ISP network.
          </p>
        </div>
      </div>
    </section>
  );
}
