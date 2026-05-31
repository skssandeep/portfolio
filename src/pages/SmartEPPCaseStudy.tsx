import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, XCircle, AlertCircle, TrendingUp, Clock, Target } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock Interactive Component for the Prototype Section
const SmartEPPPrototype = () => {
  const [step, setStep] = useState(1);
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);

  const devices = [
    { id: 'iphone', name: 'iPhone 15 Pro', specs: 'Zero-Cost EMI', price: '₹4,166/mo' },
    { id: 'macbook', name: 'MacBook Air M3', specs: 'Salary Linked', price: '₹5,833/mo' },
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
        <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)' }}>Instant Eligibility Check</h3>
        <span style={{ fontSize: '14px', color: 'var(--accent-color)', fontWeight: 500 }}>Step {step} of 3</span>
      </div>

      <div style={{ minHeight: '200px' }}>
        {step === 1 && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>Select a premium device to calculate your pre-approved salary deduction.</p>
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
              Continue to verification
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>Auto-verifying your employment via corporate HRMS integration...</p>
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
              "Successfully fetched employee records. Salary band qualifies for up to ₹2,50,000 in zero-cost EMI financing with no manual KYC required."
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
                Confirm 1-Click Checkout
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '32px 0' }}>
            <CheckCircle2 size={48} color="var(--accent-color)" style={{ margin: '0 auto 16px auto' }} />
            <h4 style={{ color: 'var(--text-primary)', fontSize: '20px', marginBottom: '8px' }}>Purchase Approved</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>
              Your new device is being dispatched. The first EMI will be automatically deducted from your next month's payroll.
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
                  <p style={{ color: 'var(--text-primary)', fontSize: '16px', margin: 0, lineHeight: 1.5 }}>Traditional Employee Purchase Programs (EPPs) suffered from an abysmal 12% conversion rate due to tedious manual KYC, opaque credit limits, and fragmented checkout flows.</p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>The Solution</span>
                  <p style={{ color: 'var(--text-primary)', fontSize: '16px', margin: 0, lineHeight: 1.5 }}>A seamless B2B2C FinTech mobile ecosystem offering corporate employees instant salary-linked EMIs and 1-click checkout for premium devices.</p>
                </div>
              </div>

              {/* The Impact Metrics */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                <div>
                  <div style={{ color: 'var(--text-primary)', fontSize: '32px', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '-1px' }}>-85%</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>Drop-off Rate</div>
                </div>
                <div>
                  <div style={{ color: 'var(--text-primary)', fontSize: '32px', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '-1px' }}>$12.4M</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>Additional GMV</div>
                </div>
                <div>
                  <div style={{ color: 'var(--text-primary)', fontSize: '32px', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '-1px' }}>40k+</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>Devices Financed</div>
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
              <div style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: 500 }}>Mobile Web / PWA</div>
            </div>
            <div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>My Role</div>
              <div style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: 500 }}>Lead Product Designer</div>
            </div>
            <div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Constraints</div>
              <div style={{ color: 'var(--accent-color)', fontSize: '15px', fontWeight: 500 }}>Complex NBFC Integrations</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Business Problem & The "Why" */}
      <section style={{ padding: '40px 0 80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '24px', letterSpacing: '-0.02em' }}>The Business Problem</h2>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '32px' }}>
            Most UX case studies focus entirely on aesthetics. In FinTech e-commerce, user friction is a symptom; the disease is cart abandonment. 
          </p>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', background: 'rgba(255,255,255,0.02)', padding: '32px', borderRadius: '16px', borderLeft: '4px solid var(--accent-color)' }}>
            <AlertCircle color="var(--accent-color)" size={32} style={{ flexShrink: 0, marginTop: '4px' }} />
            <div>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '18px', marginBottom: '12px' }}>The $12M Bleed</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                When a corporate employee gets frustrated by manual KYC document uploads just to buy a phone, they bounce. A 5% drop in the funnel for high-ticket electronics like smartphones and laptops was costing our retail partners millions in lost GMV.
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
            Design isn't linear. Here are the three primary directions we explored for the e-commerce purchase flow, and why the first two failed.
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
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Standard E-Commerce Flow</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.5, margin: 0 }}>
                  <strong>Why it failed:</strong> Ignored the B2B context. Employees didn't know their pre-approved EMI credit limits upfront, resulting in sticker shock at checkout.
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
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>The Heavy KYC Wizard</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.5, margin: 0 }}>
                  <strong>Why it failed:</strong> Asked for PAN cards and salary slips before users even browsed the product catalog. The friction caused an immediate 70% bounce rate.
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
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Progressive Disclosure</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.5, margin: 0 }}>
                  <strong>The Winner:</strong> Authenticate via Corporate SSO to show instant credit limits, letting them browse confidently. We delayed technical KYC until checkout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 The Visual Ecosystem (Bento Gallery) */}
      <section style={{ padding: '80px 0', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px', letterSpacing: '-0.02em' }}>The Visual Ecosystem</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
              A unified FinTech design language scaling from comprehensive admin dashboards down to the pocket-sized employee mobile purchasing experience.
            </p>
          </div>

          {/* Custom Bento Grid for 9 Images */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '24px',
            alignItems: 'start'
          }}>
            <div style={{ display: 'grid', gap: '24px' }}>
              <motion.img 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                src="/images/EPP_CaseStudy_01.png" alt="Smart EPP Mobile Flow" 
                style={{ width: '100%', borderRadius: '24px', border: '1px solid var(--glass-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} 
              />
              <motion.img 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                src="/images/EPP_CaseStudy_04.png" alt="Smart EPP Components" 
                style={{ width: '100%', borderRadius: '24px', border: '1px solid var(--glass-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} 
              />
              <motion.img 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                src="/images/EPP_CaseStudy_07.png" alt="Smart EPP Dashboard" 
                style={{ width: '100%', borderRadius: '24px', border: '1px solid var(--glass-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} 
              />
            </div>
            
            <div style={{ display: 'grid', gap: '24px', paddingTop: '40px' }}>
              <motion.img 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                src="/images/EPP_CaseStudy_02.png" alt="Smart EPP Handheld" 
                style={{ width: '100%', borderRadius: '24px', border: '1px solid var(--glass-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} 
              />
              <motion.img 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                src="/images/EPP_CaseStudy_05.png" alt="Smart EPP UI Details" 
                style={{ width: '100%', borderRadius: '24px', border: '1px solid var(--glass-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} 
              />
              <motion.img 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                src="/images/EPP_CaseStudy_08.png" alt="Smart EPP Settings" 
                style={{ width: '100%', borderRadius: '24px', border: '1px solid var(--glass-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} 
              />
            </div>

            <div style={{ display: 'grid', gap: '24px', paddingTop: '80px' }}>
              <motion.img 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                src="/images/EPP_CaseStudy_03.png" alt="Smart EPP Screens" 
                style={{ width: '100%', borderRadius: '24px', border: '1px solid var(--glass-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} 
              />
              <motion.img 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                src="/images/EPP_CaseStudy_06.png" alt="Smart EPP Interface" 
                style={{ width: '100%', borderRadius: '24px', border: '1px solid var(--glass-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} 
              />
              <motion.img 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
                src="/images/EPP_CaseStudy_09.png" alt="Smart EPP Approvals" 
                style={{ width: '100%', borderRadius: '24px', border: '1px solid var(--glass-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} 
              />
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
          <h2 style={{ fontSize: '32px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '24px', letterSpacing: '-0.02em' }}>The "Zero-Touch" Verification Flow</h2>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '64px', marginInline: 'auto' }}>
            Instead of showing a flat PNG, try the actual coded component below. By linking directly to corporate HRMS systems, we eliminated the need for manual income verification entirely.
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
            <h4 style={{ color: 'var(--text-primary)', fontSize: '20px', marginBottom: '16px' }}>The "Universal App" Fallacy</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px' }}>
              Initially, I spent two weeks designing a beautiful, standalone native iOS & Android application. I obsessed over push notifications, persistent login states, and native biometric auth.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px' }}>
              <strong>The Reality Check:</strong> During beta testing, corporate employees absolutely refused to download *another* app just to buy a phone once a year. The app store friction killed our acquisition funnel instantly.
            </p>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <Target size={24} color="var(--accent-color)" style={{ flexShrink: 0 }} />
              <div>
                <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '4px' }}>The Pivot</strong>
                <span style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.5 }}>
                  We scrapped the native app entirely and rebuilt the entire flow as a lightweight Progressive Web App (PWA) that could be deeply embedded inside their existing corporate intranet portal (HRMS). Conversion spiked by 300% overnight.
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
            Smart EPP was a masterclass in designing for trust and low friction over pure aesthetics. By deeply understanding FinTech regulations and corporate HR integrations, we were able to design a frictionless checkout experience.
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
