import React from 'react';
import './TrustedBySection.css';

const PARTNERS = [
  'Vodafone', 'Orange', 'AT&T', 'Verizon', 'T-Mobile', 'Starlink', 'Telefonica', 'MTN', 'Airtel', 'Jio'
];

export function TrustedBySection() {
  return (
    <section className="trusted-by" id="trusted">
      <div className="container">
        <p className="trusted-title">Trusted by leading SP and ISP companies globally</p>
        
        <div className="marquee-container">
          <div className="animate-marquee">
            {/* Double the list for seamless infinite scrolling */}
            {[...PARTNERS, ...PARTNERS].map((partner, index) => (
              <div key={index} className="partner-logo">
                <span className="partner-text text-gradient">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
