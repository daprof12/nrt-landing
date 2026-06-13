import React from 'react';
import './Legal.css';

export function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="legal-header">
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-date">Last Updated: June 13, 2026</p>
      </div>

      <div className="legal-content">
        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to NetReward. This Privacy Policy applies to your use of the NetReward website,
            the NetReward mobile application ("App Version"), the NetReward browser extension, and our
            related services (collectively, the "Services"). We respect your privacy and are committed
            to protecting your personal data.
          </p>
        </section>

        <section>
          <h2>2. Data We Collect</h2>
          <p>We may collect and process the following data about you:</p>
          <ul>
            <li><strong>Account Information:</strong> Name, email address, password, and KYC documents (when applicable).</li>
            <li><strong>Device and Telemetry Data:</strong> IP address, device fingerprints, operating system, and network data usage statistics (bytes uploaded and downloaded).</li>
            <li><strong>App Version Data:</strong> When using the NetReward mobile application, we may collect mobile-specific identifiers and usage data to accurately track bandwidth consumption for reward allocation.</li>
            <li><strong>Financial Data:</strong> Wallet addresses, transaction history, and related NRT token balances.</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Data</h2>
          <p>Your data is used to:</p>
          <ul>
            <li>Provide, operate, and maintain our Services.</li>
            <li>Calculate and distribute NRT rewards based on your verified data consumption.</li>
            <li>Prevent fraud, abuse, and ensure the security of our network.</li>
            <li>Comply with legal and regulatory requirements, including KYC and AML obligations.</li>
          </ul>
        </section>

        <section>
          <h2>4. Data Sharing and Disclosure</h2>
          <p>
            We do not sell your personal data. We may share information with Service Providers (SPs)
            and Internet Service Providers (ISPs) solely for the purpose of validating data sessions
            and distributing rewards. All partners are bound by strict confidentiality agreements.
          </p>
        </section>

        <section>
          <h2>5. Your Rights (GDPR & CCPA)</h2>
          <p>
            Depending on your jurisdiction, you have the right to access, correct, export, or delete
            your personal data. You can exercise these rights directly within the NetReward App Version
            settings or by contacting our support team.
          </p>
        </section>

        <section>
          <h2>6. Security</h2>
          <p>
            We implement industry-standard security measures, including HMAC-SHA256 signature verification,
            Row Level Security (RLS) on our databases, and encryption in transit and at rest to protect your data.
          </p>
        </section>

        <section>
          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@netreward.app.
          </p>
        </section>
      </div>
    </div>
  );
}
