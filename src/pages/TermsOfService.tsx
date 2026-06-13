import React from 'react';
import './Legal.css';

export function TermsOfService() {
  return (
    <div className="legal-page">
      <div className="legal-header">
        <h1 className="legal-title">Terms of Service</h1>
        <p className="legal-date">Last Updated: June 13, 2026</p>
      </div>

      <div className="legal-content">
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the NetReward platform, including our website, mobile application ("App Version"),
            and browser extensions, you agree to be bound by these Terms of Service. If you do not agree to these terms,
            please do not use our Services.
          </p>
        </section>

        <section>
          <h2>2. The NetReward Service</h2>
          <p>
            NetReward provides a decentralized platform that rewards users with NetReward Tokens (NRT) for verified
            data bandwidth consumption across participating Service Providers (SPs) and Internet Service Providers (ISPs).
            Usage is tracked automatically through our SDKs and the NetReward App Version.
          </p>
        </section>

        <section>
          <h2>3. User Responsibilities and Accounts</h2>
          <p>
            To use certain features of the Service, you must register for an account. You agree to:
          </p>
          <ul>
            <li>Provide accurate and complete registration and KYC information where required.</li>
            <li>Maintain the security of your account credentials and wallet keys.</li>
            <li>Use the App Version strictly for its intended purpose of legitimate data consumption tracking.</li>
            <li>Not engage in fraudulent activities, such as artificial bandwidth generation, spoofing, or tampering with the telemetry SDK.</li>
          </ul>
        </section>

        <section>
          <h2>4. Rewards and NRT Tokens</h2>
          <p>
            Rewards are distributed based on verified data usage parameters set by active campaigns. 
            NetReward reserves the right to withhold, reverse, or cancel NRT distributions in the event 
            of suspected fraud, network anomalies, or violation of these Terms. NRT token value is subject 
            to market fluctuations; NetReward does not guarantee any fiat value for NRT.
          </p>
        </section>

        <section>
          <h2>5. App Version License</h2>
          <p>
            We grant you a limited, non-exclusive, non-transferable, revocable license to download, install, 
            and use the NetReward App Version on your personal mobile device solely in connection with your 
            use of the Services.
          </p>
        </section>

        <section>
          <h2>6. Limitation of Liability</h2>
          <p>
            NetReward and its affiliates shall not be liable for any indirect, incidental, special, consequential, 
            or punitive damages, including loss of profits, data, or digital assets, resulting from your use of 
            or inability to use the Services or the App Version.
          </p>
        </section>

        <section>
          <h2>7. Modifications to the Service and Terms</h2>
          <p>
            We reserve the right to modify or discontinue the Services at any time. We may also update these 
            Terms periodically. Continued use of the Services after such changes constitutes your acceptance 
            of the new Terms.
          </p>
        </section>

        <section>
          <h2>8. Contact Information</h2>
          <p>
            If you have any questions regarding these Terms, please contact us at legal@netreward.app.
          </p>
        </section>
      </div>
    </div>
  );
}
