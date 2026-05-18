import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import './CtaSection.css';

export function CtaSection() {
  const navigate = useNavigate();

  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-box glass-panel">
          <div className="glow-backdrop animate-pulse-glow" style={{ opacity: 0.3 }}></div>
          
          <h2 className="cta-title">Ready to tokenize your network?</h2>
          <p className="cta-subtitle">
            Join the leading decentralized reward ecosystem. Setup takes minutes with our zero-touch integration.
          </p>
          
          <div className="cta-actions">
            <Button 
              variant="primary" 
              size="lg" 
              icon={<ArrowRight size={18} />}
              onClick={() => window.location.href = 'https://netreward.online/login'}
            >
              Get Started Now
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => {
                navigate('/contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
