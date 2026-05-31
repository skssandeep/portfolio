import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, XCircle, AlertCircle, TrendingUp, Clock, Target } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock Interactive Component for the Prototype Section
const SmartEPPPrototype = () => {
  const [step, setStep] = useState(1);
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);

  const devices = [
    { id: 'macbook', name: 'MacBook Pro 16"', specs: 'M3 Max, 32GB RAM', price: '$2,499' },
    { id: 'thinkpad', name: 'ThinkPad X1', specs: 'Core i7, 16GB RAM', price: '$1,899' },
  ];

  return (
    <div style={{
      background: 'var(--bg-color)',
      border: '1px solid var(--glass-border)',
      borderRadius: '24px',
      padding: '32px',
      maxWidth: '600px',
      margin: '0 auto',
      boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
      fontFamily: 'var(--font-system)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)' }}>Hardware Request</h3>
        <span style={{ fontSize: '14px', color: 'var(--accent-color)', fontWeight: 500 }}>Step {step} of 3</span>
      </div>

      <div style={{ minHeight: '200px' }}>
        {step === 1 && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>Select your required device based on your engineering tier.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {devices.map(device => (
                <div 
                  key={device.id}
                  onClick={() => setSelectedDevice(device.id)}
                  style={{
                    padding: '16px',
                    borderRadius: '12px',
                    border: `1px solid ${selectedDevice === device.id ? 'var(--accent-color)' : 'rgba(255,255,255,0.1)'}`,
                    background: selectedDevice === device.id ? 'rgba(239, 68, 68, 0.05)' : 'transparent',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div>
                    <div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{device.name}</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>{device.specs}</div>
                  </div>
                  <div style={{ color: 'var(--text-primary)', fontFamily: "'JetBrains Mono', monospace" }}>{device.price}</div>
                </div>
              ))}
            </div>
            <button 
              onClick={() => selectedDevice && setStep(2)}
              disabled={!selectedDevice}
              style={{
                marginTop: '24px',
                width: '100%',
                padding: '12px',
                background: selectedDevice ? 'var(--text-primary)' : 'rgba(255,255,255,0.1)',
                color: selectedDevice ? 'var(--bg-color)' : 'rgba(255,255,255,0.3)',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 600,
                cursor: selectedDevice ? 'pointer' : 'not-allowed'
              }}
            >
              Continue to Justification
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>Auto-justification generated based on your role (Senior Frontend Engineer).</p>
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.05)',
              color: 'var(--text-secondary)',
              fontSize: '14px',
              lineHeight: 1.6,
              marginBottom: '24px'
            }}>
              "Requires high-performance compute for running local Docker containers, large Webpack builds, and multiple Figma instances simultaneously."
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                onClick={() => setStep(1)}
                style={{ flex: 1, padding: '12px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'var(--text-primary)', borderRadius: '8px', cursor: 'pointer' }}
              >
                Back
              </button>
              <button 
                onClick={() => setStep(3)}
                style={{ flex: 2, padding: '12px', background: 'var(--accent-color)', border: 'none', color: '#fff', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}
              >
                Submit for Auto-Approval
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '32px 0' }}>
            <CheckCircle2 size={48} color="var(--accent-color)" style={{ margin: '0 auto 16px auto' }} />
            <h4 style={{ color: 'var(--text-primary)', fontSize: '20px', marginBottom: '8px' }}>Instantly Approved</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>
              Your request met the pre-approved budget rules for your tier. It has been routed to fulfillment immediately.
            </p>
            <button 
                onClick={() => { setStep(1); setSelectedDevice(null); }}
                style={{ marginTop: '24px', padding: '8px 16px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'var(--text-primary)', borderRadius: '100px', cursor: 'pointer', fontSize: '13px' }}
              >
                Reset Prototype
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export const SmartEPPCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '120px' }}>
      
      {/* 1. The Executive Summary (The Hook) */}
      <section style={{ paddingTop: '160px', paddingBottom: '80px', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <Link to="/#case-studies" className="btn-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '48px', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '14px', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase' }}>
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
          
          <div className="grid-2" style={{ gap: '64px', alignItems: 'center' }}>
            <div>
              <div style={{ color: 'var(--accent-color)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '12px', marginBottom: '16px' }}>
                OneAssist • Lead Product Designer
              </div>
              <h1 className="text-hero" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', lineHeight: 1.05, marginBottom: '32px', letterSpacing: '-0.02em' }}>
                Smart EPP
              </h1>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>The Problem</span>
                  <p style={{ color: 'var(--text-primary)', fontSize: '16px', margin: 0, lineHeight: 1.5 }}>Corporate employees were waiting an average of 3 weeks to receive essential work hardware due to a fragmented, manual approval chain.</p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>The Solution</span>
                  <p style={{ color: 'var(--text-primary)', fontSize: '16px', margin: 0, lineHeight: 1.5 }}>An automated, rule-based Enterprise Procurement Platform that reduced hardware request-to-fulfillment time from 21 days to 48 hours.</p>
                </div>
              </div>

              {/* The Impact Metrics */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                <div>
                  <div style={{ color: 'var(--text-primary)', fontSize: '32px', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '-1px' }}>-85%</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>Fulfillment Time</div>
                </div>
                <div>
                  <div style={{ color: 'var(--text-primary)', fontSize: '32px', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '-1px' }}>$2.4M</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>Saved Productivity</div>
                </div>
                <div>
                  <div style={{ color: 'var(--text-primary)', fontSize: '32px', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '-1px' }}>10k+</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>Users Onboarded</div>
                </div>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', inset: '-20px', background: 'radial-gradient(circle at center, rgba(239, 68, 68, 0.15) 0%, transparent 70%)', zIndex: 0 }} />
              <img src="/images/Mockup2_EPP.png" alt="Smart EPP Hero" style={{ width: '100%', height: 'auto', position: 'relative', zIndex: 1, filter: 'drop-shadow(0 40px 60px rgba(0,0,0,0.5))', transform: 'scale(1.1)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Context & Constraints */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)', padding: '32px 0' }}>
            <div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Timeline</div>
              <div style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: 500 }}>4 Months</div>
            </div>
            <div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Platform</div>
              <div style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: 500 }}>Web / Desktop</div>
            </div>
            <div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>My Role</div>
              <div style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: 500 }}>Lead Product Designer</div>
            </div>
            <div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Constraints</div>
              <div style={{ color: 'var(--accent-color)', fontSize: '15px', fontWeight: 500 }}>Legacy DB Sync</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Business Problem & The "Why" */}
      <section style={{ padding: '40px 0 80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '24px', letterSpacing: '-0.02em' }}>The Business Problem</h2>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '32px' }}>
            Most UX case studies focus entirely on "the user was confused." In enterprise software, confusion is a symptom; the disease is lost revenue. 
          </p>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', background: 'rgba(255,255,255,0.02)', padding: '32px', borderRadius: '16px', borderLeft: '4px solid var(--accent-color)' }}>
            <AlertCircle color="var(--accent-color)" size={32} style={{ flexShrink: 0, marginTop: '4px' }} />
            <div>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '18px', marginBottom: '12px' }}>The $2.4M Bleed</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                When a Senior Engineer is hired at $180k/yr, every week they wait for a laptop costs the company ~$3,500 in wasted salary. Multiplied by 700 new hires a year, the broken procurement UI wasn't just "bad UX" — it was a multi-million dollar leak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Messy Middle (Trade-offs) */}
      <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px', letterSpacing: '-0.02em' }}>The Messy Middle</h2>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '48px', maxWidth: '600px' }}>
            Design isn't linear. Here are the three primary directions we explored for the approval matrix, and why the first two failed.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {/* Concept A */}
            <div style={{ background: 'var(--bg-color)', border: '1px solid var(--glass-border)', borderRadius: '16px', overflow: 'hidden' }}>
              <div style={{ height: '200px', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--glass-border)' }}>
                <span style={{ color: 'rgba(255,255,255,0.2)', fontFamily: "'JetBrains Mono', monospace" }}>[ Wireframe v1 ]</span>
              </div>
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <XCircle size={16} color="#ef4444" />
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>The Kanban Approach</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.5, margin: 0 }}>
                  <strong>Why it failed:</strong> IT Managers process 100+ requests a day. Dragging and dropping cards across columns was too high-friction compared to bulk actions.
                </p>
              </div>
            </div>

            {/* Concept B */}
            <div style={{ background: 'var(--bg-color)', border: '1px solid var(--glass-border)', borderRadius: '16px', overflow: 'hidden' }}>
              <div style={{ height: '200px', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--glass-border)' }}>
                <span style={{ color: 'rgba(255,255,255,0.2)', fontFamily: "'JetBrains Mono', monospace" }}>[ Wireframe v2 ]</span>
              </div>
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <XCircle size={16} color="#ef4444" />
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>The Chatbot Flow</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.5, margin: 0 }}>
                  <strong>Why it failed:</strong> Engineering rejected the NLP complexity. Furthermore, users wanted to visually compare laptop specs, which chat interfaces handle poorly.
                </p>
              </div>
            </div>

            {/* Concept C */}
            <div style={{ background: 'var(--bg-color)', border: '1px solid var(--accent-color)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 0 0 1px var(--accent-color)' }}>
              <div style={{ height: '200px', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <span style={{ color: 'var(--accent-color)', fontFamily: "'JetBrains Mono', monospace" }}>[ Final UI ]</span>
              </div>
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <CheckCircle2 size={16} color="var(--accent-color)" />
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Rules-Engine Wizard</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.5, margin: 0 }}>
                  <strong>The Winner:</strong> A simple step-by-step wizard that auto-approved requests if they matched the employee's tier-budget. Zero manual intervention required for 80% of cases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Prototype */}
      <section style={{ padding: '120px 0' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <div style={{ color: 'var(--accent-color)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '12px', marginBottom: '16px' }}>
            Live Prototype
          </div>
          <h2 style={{ fontSize: '32px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '24px', letterSpacing: '-0.02em' }}>The "Zero-Touch" Flow</h2>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '64px', marginInline: 'auto' }}>
            Instead of showing a flat PNG, try the actual coded component below. By offloading justification to a rules engine, we eliminated the need for manual manager approval entirely.
          </p>
          
          {/* Embedded React Prototype */}
          <SmartEPPPrototype />

        </div>
      </section>

      {/* 6. What I Got Wrong (Post-Mortem) */}
      <section style={{ padding: '80px 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '32px', letterSpacing: '-0.02em' }}>What I Got Wrong</h2>
          
          <div style={{ background: 'var(--bg-color)', padding: '40px', borderRadius: '24px', border: '1px solid var(--glass-border)' }}>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '20px', marginBottom: '16px' }}>The "Manager Dashboard" Fallacy</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px' }}>
              Initially, I spent two weeks designing a beautiful, high-density dashboard for IT managers to manually review edge-case requests. I obsessed over table sorting, bulk actions, and filtering.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px' }}>
              <strong>The Reality Check:</strong> During beta testing, IT managers ignored the dashboard. They just wanted an email notification with an "Approve" or "Deny" button that they could tap from their phones while walking between meetings.
            </p>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <Target size={24} color="var(--accent-color)" style={{ flexShrink: 0 }} />
              <div>
                <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '4px' }}>The Pivot</strong>
                <span style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.5 }}>
                  We scrapped the complex dashboard entirely and built interactive email widgets using AMP for Email. It reduced engineering scope by a month and resulted in a 90% faster response time from managers. Sometimes the best UI is no UI.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final Outcomes & Reflection */}
      <section style={{ padding: '120px 0' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '24px', letterSpacing: '-0.02em' }}>Final Thoughts</h2>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '48px' }}>
            Smart EPP was a masterclass in designing for business logic over aesthetics. By deeply understanding the procurement rules, we were able to design an interface that essentially made itself obsolete for 80% of transactions.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/" style={{ color: 'var(--bg-color)', background: 'var(--text-primary)', padding: '16px 32px', borderRadius: '100px', textDecoration: 'none', fontWeight: 600, fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase' }}>
              View More Projects
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
