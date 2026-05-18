import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../components/ui/Button';
import { Mail, MessageSquare, MapPin, Send } from 'lucide-react';
import './PageStyles.css';

export function ContactUs() {
  const [contactType, setContactType] = useState<'sp' | 'isp' | 'user'>('sp');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="page-wrapper">
      <div className="container page-container">
        <div className="page-header text-center">
          <h1 className="page-title text-gradient-accent">Get in Touch</h1>
          <p className="page-subtitle max-w-2xl mx-auto">
            Whether you're an ISP looking to integrate NetReward or a user with questions, our team is here to help you scale your operations.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card glass-panel">
              <Mail className="text-accent-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2 text-text-primary">Email Us</h3>
              <p className="text-text-secondary mb-4">Our friendly team is here to help.</p>
              <a href="mailto:support@netreward.online" className="text-accent-primary font-medium hover:underline">
                support@netreward.online
              </a>
            </div>

            <div className="info-card glass-panel">
              <MessageSquare className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2 text-text-primary">Live Chat</h3>
              <p className="text-text-secondary mb-4">Chat directly with our integration specialists.</p>
              <span className="text-purple-400 font-medium cursor-pointer hover:underline">
                Start a conversation
              </span>
            </div>

            <div className="info-card glass-panel">
              <MapPin className="text-emerald-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2 text-text-primary">Global HQ</h3>
              <p className="text-text-secondary mb-4">Fully remote, decentralized operations worldwide.</p>
              <span className="text-emerald-400 font-medium">
                San Francisco, CA
              </span>
            </div>
          </div>

          <div className="contact-form-container glass-panel">
            <h2 className="text-2xl font-bold mb-6 text-text-primary">Send us a message</h2>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="John Doe" className="form-input" />
              </div>
              
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="john@company.com" className="form-input" />
              </div>

              <div className="form-group">
                <label>I am a...</label>
                <div className="custom-select-container" ref={dropdownRef}>
                  <div 
                    className={`custom-select-trigger ${isOpen ? 'active' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span>{
                      contactType === 'sp' ? 'Service Provider (SP)' :
                      contactType === 'isp' ? 'Internet Service Provider (ISP)' :
                      'User'
                    }</span>
                    <svg 
                      viewBox="0 0 24 24" 
                      width="16" 
                      height="16" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      fill="none" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className={`select-chevron ${isOpen ? 'open' : ''}`}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                  
                  {isOpen && (
                    <div className="custom-select-options glass-panel">
                      <div 
                        className={`custom-select-option ${contactType === 'sp' ? 'selected' : ''}`}
                        onClick={() => {
                          setContactType('sp');
                          setIsOpen(false);
                        }}
                      >
                        Service Provider (SP)
                      </div>
                      <div 
                        className={`custom-select-option ${contactType === 'isp' ? 'selected' : ''}`}
                        onClick={() => {
                          setContactType('isp');
                          setIsOpen(false);
                        }}
                      >
                        Internet Service Provider (ISP)
                      </div>
                      <div 
                        className={`custom-select-option ${contactType === 'user' ? 'selected' : ''}`}
                        onClick={() => {
                          setContactType('user');
                          setIsOpen(false);
                        }}
                      >
                        User
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label>{contactType === 'user' ? 'User Full Name' : 'Company Name'}</label>
                <input 
                  type="text" 
                  placeholder={contactType === 'user' ? 'e.g. Jane Doe' : 'Optional'} 
                  className="form-input" 
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="How can we help you?" className="form-input" rows={5}></textarea>
              </div>

              <Button variant="primary" size="lg" className="w-full mt-4" icon={<Send size={18} />}>
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
