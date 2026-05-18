import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FaqSection.css';

const FAQS = [
  {
    question: "What is NetReward (NRT)?",
    answer: "NetReward is a decentralized reward network that tokenizes data usage. It allows Internet Service Providers (ISPs) and Service Providers (SPs) to reward users with NRT tokens for bandwidth consumption, driving engagement and loyalty."
  },
  {
    question: "How do I integrate the API into my app?",
    answer: "We offer native SDKs for iOS and Android, as well as a zero-touch JavaScript CDN script for web applications. You can initialize the tracker with a single line of code after obtaining your API key from the Admin Dashboard."
  },
  {
    question: "Do users need a crypto wallet?",
    answer: "Yes, but our Scan2Pay and Instant Purchase flows are designed to be seamless. Users can connect standard Solana wallets like Phantom, and our system automatically handles the Associated Token Accounts (ATAs) and rent exemptions."
  },
  {
    question: "How does the campaign targeted advertising work?",
    answer: "SPs can create targeted ad campaigns using their NRT budget. Our system calculates the estimated reach based on global variables (like Target User Incentive USD) and serves these campaigns directly to active network users."
  },
  {
    question: "Is there a cost to join as an ISP?",
    answer: "Integration is free. The network operates on a revenue-share model where processing fees and platform value scaling are transparently managed on-chain and through our global Reward Settings."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Questions before you start?</h2>
          <p className="section-subtitle">Everything you need to know about the product and billing.</p>
        </div>

        <div className="faq-container">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item glass-panel ${openIndex === index ? 'is-open' : ''}`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <ChevronDown 
                  size={20} 
                  className={`faq-icon ${openIndex === index ? 'rotate' : ''}`} 
                />
              </div>
              <div 
                className="faq-answer-wrapper"
                style={{ height: openIndex === index ? 'auto' : '0px' }}
              >
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
