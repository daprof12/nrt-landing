import React, { useState } from 'react';
import { Terminal, Code2, Cpu, Globe, Braces, FileCode, Zap } from 'lucide-react';
import './ApiSection.css';

const tabs = [
  {
    id: 'html',
    label: 'HTML / CDN',
    icon: <Globe size={14} />,
    filename: 'index.html',
    code: (
      <>
        <span className="comment">{'<!-- One API key powers tracking + payments -->'}</span><br/>
        <span className="tag">&lt;script</span> <span className="attr">src=</span><span className="string">"https://cdn.netreward.online/v1.js"</span><span className="tag">&gt;&lt;/script&gt;</span><br/>
        <br/>
        <span className="tag">&lt;script&gt;</span><br/>
        {'  '}<span className="keyword">const</span> nrt <span className="operator">=</span> <span className="keyword">new</span> NetReward({'{'}<br/>
        {'    '}apiKey: <span className="string">'your_api_key'</span><br/>
        {'  '}{'}'});<br/>
        <br/>
        {'  '}<span className="comment">// Telemetry starts automatically</span><br/>
        {'  '}nrt.<span className="command">startSession</span>();<br/>
        <br/>
        {'  '}<span className="comment">// Accept payments on the same key</span><br/>
        {'  '}nrt.<span className="command">checkout</span>({'{'}<br/>
        {'    '}amount: <span className="boolean">5.0</span>,<br/>
        {'    '}currency: <span className="string">'NRT'</span>,<br/>
        {'    '}description: <span className="string">'Premium Plan'</span><br/>
        {'  '}{'}'});<br/>
        <span className="tag">&lt;/script&gt;</span>
      </>
    ),
  },
  {
    id: 'npm',
    label: 'npm / React',
    icon: <Braces size={14} />,
    filename: 'App.jsx',
    code: (
      <>
        <span className="comment">// npm install @netreward/sdk</span><br/>
        <span className="keyword">import</span> {'{ '}<span className="command">NetReward</span>{' }'} <span className="keyword">from</span> <span className="string">'@netreward/sdk'</span>;<br/>
        <br/>
        <span className="comment">// Single API key — tracking + payments unified</span><br/>
        <span className="keyword">const</span> nrt <span className="operator">=</span> <span className="keyword">new</span> <span className="command">NetReward</span>({'{'} apiKey: <span className="string">'your_api_key'</span> {'}'});<br/>
        <br/>
        <span className="keyword">export default function</span> <span className="command">App</span>() {'{'}<br/>
        {'  '}<span className="keyword">useEffect</span>(() <span className="operator">=&gt;</span> {'{'}<br/>
        {'    '}nrt.<span className="command">startSession</span>();  <span className="comment">// tracking</span><br/>
        {'    '}<span className="keyword">return</span> () <span className="operator">=&gt;</span> nrt.<span className="command">endSession</span>();<br/>
        {'  '}{'}'}, []);<br/>
        <br/>
        {'  '}<span className="keyword">const</span> handlePay <span className="operator">=</span> () <span className="operator">=&gt;</span> nrt.<span className="command">checkout</span>({'{'}<br/>
        {'    '}amount: <span className="boolean">5.0</span>, currency: <span className="string">'NRT'</span><br/>
        {'  '}{'}'});  <span className="comment">// payments</span><br/>
        {'}'}
      </>
    ),
  },
  {
    id: 'javascript',
    label: 'JavaScript',
    icon: <FileCode size={14} />,
    filename: 'server.js',
    code: (
      <>
        <span className="comment">// Node.js — same key for telemetry + payments</span><br/>
        <span className="keyword">const</span> {'{ '}<span className="command">NetReward</span>{' }'} <span className="operator">=</span> <span className="keyword">require</span>(<span className="string">'@netreward/sdk'</span>);<br/>
        <br/>
        <span className="keyword">const</span> nrt <span className="operator">=</span> <span className="keyword">new</span> <span className="command">NetReward</span>({'{'} apiKey: <span className="string">'your_api_key'</span> {'}'});<br/>
        <br/>
        <span className="comment">// Track data usage</span><br/>
        nrt.<span className="command">trackUsage</span>({'{'} userId: <span className="string">'u_123'</span>, dataMb: <span className="boolean">256</span> {'}'});<br/>
        <br/>
        <span className="comment">// Charge user on same instance</span><br/>
        nrt.<span className="command">createPayment</span>({'{'}<br/>
        {'  '}userId: <span className="string">'u_123'</span>,<br/>
        {'  '}amount: <span className="boolean">10</span>,<br/>
        {'  '}currency: <span className="string">'NRT'</span>,<br/>
        {'  '}description: <span className="string">'Data top-up'</span><br/>
        {'}'});
      </>
    ),
  },
  {
    id: 'python',
    label: 'Python',
    icon: <Terminal size={14} />,
    filename: 'app.py',
    code: (
      <>
        <span className="comment"># pip install netreward-sdk</span><br/>
        <span className="keyword">from</span> netreward <span className="keyword">import</span> <span className="command">NetReward</span><br/>
        <br/>
        <span className="comment"># One client for tracking + payments</span><br/>
        nrt <span className="operator">=</span> <span className="command">NetReward</span>(api_key<span className="operator">=</span><span className="string">"your_api_key"</span>)<br/>
        <br/>
        <span className="comment"># Track session</span><br/>
        nrt.<span className="command">track_usage</span>(user_id<span className="operator">=</span><span className="string">"u_123"</span>, data_mb<span className="operator">=</span><span className="boolean">256</span>)<br/>
        <br/>
        <span className="comment"># Process payment</span><br/>
        nrt.<span className="command">create_payment</span>(<br/>
        {'  '}user_id<span className="operator">=</span><span className="string">"u_123"</span>,<br/>
        {'  '}amount<span className="operator">=</span><span className="boolean">10</span>,<br/>
        {'  '}currency<span className="operator">=</span><span className="string">"NRT"</span><br/>
        )
      </>
    ),
  },
  {
    id: 'java',
    label: 'Java',
    icon: <Code2 size={14} />,
    filename: 'App.java',
    code: (
      <>
        <span className="comment">// Maven: com.netreward:sdk:1.0.0</span><br/>
        <span className="keyword">import</span> com.netreward.sdk.*;<br/>
        <br/>
        <span className="comment">// Unified client — tracking and payments</span><br/>
        <span className="command">NetReward</span> nrt <span className="operator">=</span> <span className="keyword">new</span> <span className="command">NetReward</span><br/>
        {'  '}.<span className="command">Builder</span>(<span className="string">"your_api_key"</span>).<span className="command">build</span>();<br/>
        <br/>
        <span className="comment">// Track</span><br/>
        nrt.<span className="command">trackUsage</span>(<span className="string">"u_123"</span>, <span className="boolean">256</span>);<br/>
        <br/>
        <span className="comment">// Pay</span><br/>
        nrt.<span className="command">createPayment</span>(<span className="keyword">new</span> <span className="command">Payment</span>(<br/>
        {'  '}<span className="string">"u_123"</span>, <span className="boolean">10</span>, <span className="string">"NRT"</span><br/>
        ));
      </>
    ),
  },
  {
    id: 'php',
    label: 'PHP',
    icon: <FileCode size={14} />,
    filename: 'index.php',
    code: (
      <>
        <span className="comment">// composer require netreward/sdk</span><br/>
        <span className="keyword">use</span> NetReward\<span className="command">Client</span>;<br/>
        <br/>
        <span className="comment">// One API key — full access</span><br/>
        <span className="tag">$nrt</span> <span className="operator">=</span> <span className="keyword">new</span> <span className="command">Client</span>(<span className="string">'your_api_key'</span>);<br/>
        <br/>
        <span className="comment">// Track usage</span><br/>
        <span className="tag">$nrt</span><span className="operator">-&gt;</span><span className="command">trackUsage</span>([<br/>
        {'  '}<span className="string">'user_id'</span> <span className="operator">=&gt;</span> <span className="string">'u_123'</span>,<br/>
        {'  '}<span className="string">'data_mb'</span> <span className="operator">=&gt;</span> <span className="boolean">256</span><br/>
        ]);<br/>
        <br/>
        <span className="comment">// Create payment</span><br/>
        <span className="tag">$nrt</span><span className="operator">-&gt;</span><span className="command">createPayment</span>([<br/>
        {'  '}<span className="string">'user_id'</span> <span className="operator">=&gt;</span> <span className="string">'u_123'</span>,<br/>
        {'  '}<span className="string">'amount'</span> <span className="operator">=&gt;</span> <span className="boolean">10</span>,<br/>
        {'  '}<span className="string">'currency'</span> <span className="operator">=&gt;</span> <span className="string">'NRT'</span><br/>
        ]);
      </>
    ),
  },
  {
    id: 'curl',
    label: 'cURL / REST',
    icon: <Terminal size={14} />,
    filename: 'terminal',
    code: (
      <>
        <span className="comment"># Same API key header for both endpoints</span><br/>
        <br/>
        <span className="comment"># 1. Track usage</span><br/>
        <span className="command">curl</span> <span className="operator">-X</span> POST api.netreward.online/v1/track \<br/>
        {'  '}<span className="operator">-H</span> <span className="string">"Authorization: Bearer your_api_key"</span> \<br/>
        {'  '}<span className="operator">-d</span> <span className="string">{'\'{"user_id":"u_123","data_mb":256}\''}</span><br/>
        <br/>
        <span className="comment"># 2. Create payment</span><br/>
        <span className="command">curl</span> <span className="operator">-X</span> POST api.netreward.online/v1/pay \<br/>
        {'  '}<span className="operator">-H</span> <span className="string">"Authorization: Bearer your_api_key"</span> \<br/>
        {'  '}<span className="operator">-d</span> <span className="string">{'\'{"user_id":"u_123","amount":10,"currency":"NRT"}\''}</span>
      </>
    ),
  },
];

export function ApiSection() {
  const [activeTab, setActiveTab] = useState('html');
  const activeContent = tabs.find(t => t.id === activeTab)!;

  return (
    <section className="api-section" id="docs">
      <div className="container">
        <div className="api-container glass-panel">
          <div className="api-content">
            <div className="api-badge">
              <Terminal size={14} />
              <span>Developer First</span>
            </div>
            <h2 className="section-title">Everything in One API</h2>
            <p className="section-subtitle">
              One API key powers both SDK tracking and payment processing. Integrate once and get telemetry, rewards, and checkout — no separate credentials needed.
            </p>
            
            <ul className="api-features">
              <li>
                <Zap className="text-accent-primary" size={20} />
                <span>Single API key for tracking + payments</span>
              </li>
              <li>
                <Code2 className="text-accent-primary" size={20} />
                <span>RESTful endpoints and WebSocket streams</span>
              </li>
              <li>
                <Cpu className="text-accent-primary" size={20} />
                <span>Drop-in SDKs for every stack</span>
              </li>
              <li>
                <Globe className="text-accent-primary" size={20} />
                <span>Zero-Touch CDN for instant setup</span>
              </li>
            </ul>
          </div>
          
          <div className="api-code-window">
            {/* Language tabs */}
            <div className="code-tabs">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`code-tab ${activeTab === tab.id ? 'code-tab-active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
            
            {/* Code header with mac dots */}
            <div className="code-header">
              <div className="mac-buttons">
                <span className="dot-close"></span>
                <span className="dot-minimize"></span>
                <span className="dot-maximize"></span>
              </div>
              <div className="code-title">{activeContent.filename}</div>
            </div>
            
            {/* Code body */}
            <div className="code-body">
              <pre>
                <code>{activeContent.code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
