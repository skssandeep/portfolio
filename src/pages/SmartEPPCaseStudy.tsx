import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, XCircle, AlertCircle, TrendingUp, Clock, Target, Lightbulb, Search, Code, Smartphone, Palette, FileText } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 300]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '120px' }}>
      
      {/* 1 & 2. Out-of-the-box Hero Section */}
      <section style={{ width: '100%', minHeight: '100vh', paddingTop: '140px', paddingBottom: '64px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#0a0a0a' }}>
        
        <style>
          {`
            .floating-chips {
              position: absolute; 
              inset: 0; 
              pointer-events: none;
              z-index: 15;
            }
            .chip-wrapper {
              position: absolute; 
              pointer-events: auto;
            }
            .chip-1 { top: 15%; left: 5%; }
            .chip-2 { top: 30%; right: 0%; }
            .chip-3 { bottom: 30%; left: 0%; }
            .chip-4 { bottom: 15%; right: 5%; }
            
            @media (max-width: 900px) {
              .floating-chips {
                position: relative;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 16px;
                padding: 24px;
                margin-top: -20px;
                z-index: 20;
              }
              .chip-wrapper {
                position: relative; 
                top: auto !important; 
                left: auto !important; 
                right: auto !important; 
                bottom: auto !important;
              }
            }
          `}
        </style>

        {/* Subtle background glow */}
        <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', width: '80vw', height: '80vw', background: 'radial-gradient(circle, rgba(229,9,20,0.15) 0%, rgba(0,0,0,0) 50%)', zIndex: 1, pointerEvents: 'none' }} />

        <div style={{ position: 'fixed', top: '29px', left: '4vw', zIndex: 100 }}>
          <Link to="/#case-studies" className="btn-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#fff', textDecoration: 'none', fontSize: '14px', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', padding: '12px 24px', borderRadius: '100px' }}>
            <ArrowLeft size={16} /> Back
          </Link>
        </div>

        {/* Massive Typography */}
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', marginBottom: '-6vw', width: '100%', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div style={{ display: 'inline-flex', background: 'rgba(229, 9, 20, 0.15)', color: 'var(--accent-color)', padding: '8px 24px', borderRadius: '100px', fontSize: '13px', fontWeight: 700, letterSpacing: '3px', marginBottom: '24px', border: '1px solid rgba(229, 9, 20, 0.3)' }}>
              B2B2C FINTECH CASE STUDY
            </div>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(4rem, 13vw, 11rem)', fontWeight: 800, color: '#fff', margin: '0', letterSpacing: '-0.06em', lineHeight: 0.85, opacity: 0.95 }}>
              SMART EPP
            </h1>
            <p style={{ fontFamily: 'var(--font-system)', fontSize: 'clamp(1rem, 1.5vw, 1.3rem)', color: '#a3a3a3', maxWidth: '600px', margin: '32px auto 0 auto', lineHeight: 1.6, fontWeight: 400 }}>
              Revolutionizing Employee Purchase Programs with zero-friction, salary-linked financing.
            </p>
          </motion.div>
        </div>

        {/* The Floating Ecosystem */}
        <div style={{ position: 'relative', zIndex: 20, width: '100%', maxWidth: '1100px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '60px' }}>
          
          <motion.img 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: 'spring', bounce: 0.2 }}
            src="/images/Mockup2_EPP.png" 
            alt="Smart EPP" 
            style={{ width: '100%', maxWidth: '900px', filter: 'drop-shadow(0 40px 100px rgba(0,0,0,0.8))', position: 'relative', zIndex: 10, objectFit: 'contain' }} 
          />

          {/* Floating Context Cards (Chips) */}
          <div className="floating-chips">
            {[
              { class: 'chip-1', icon: <Target size={14}/>, title: "My Role", val: "Lead Product Designer", delay: 0.4 },
              { class: 'chip-2', icon: <Clock size={14}/>, title: "Timeline", val: "4 Months", delay: 0.5 },
              { class: 'chip-3', icon: <Smartphone size={14}/>, title: "Platform", val: "PWA Mobile-First", delay: 0.6 },
              { class: 'chip-4', icon: <AlertCircle size={14}/>, title: "Constraint", val: "Strict KYC & NBFC", delay: 0.7 }
            ].map((chip, idx) => (
              <motion.div key={idx} className={`chip-wrapper ${chip.class}`}
                initial={{ scale: 0.8, opacity: 0 }} 
                animate={{ scale: 1, opacity: 1 }} 
                transition={{ delay: chip.delay, type: 'spring' }}
                whileHover={{ scale: 1.05 }}
              >
                <div style={{
                  background: 'rgba(20, 20, 20, 0.75)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '16px 24px',
                  borderRadius: '100px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                  whiteSpace: 'nowrap'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-color)', fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                    {chip.icon} {chip.title}
                  </div>
                  <div style={{ color: '#fff', fontSize: '14px', fontWeight: 500, letterSpacing: '0.5px' }}>{chip.val}</div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Problem */}
      <section style={{ padding: '100px 0' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="grid-2" style={{ alignItems: 'center', gap: '80px' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-color)', background: 'rgba(239, 68, 68, 0.1)', padding: '8px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px' }}>
                <AlertCircle size={16} /> The Problem
              </div>
              <h2 style={{ fontSize: '40px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '24px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>The $12M Funnel Bleed</h2>
              <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                Traditional Employee Purchase Programs (EPPs) suffered from an abysmal <strong>12% conversion rate</strong>. Why? Because the flow was fundamentally broken.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.5 }}>
                  <XCircle size={20} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                  Employees were forced to undergo tedious manual KYC document uploads before knowing if they were even approved for a loan.
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.5 }}>
                  <XCircle size={20} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                  Credit limits were entirely opaque, leading to massive sticker shock at the final checkout step.
                </li>
              </ul>
            </div>
            <div style={{ position: 'relative' }}>
              {/* Visual of the Problem */}
              <div style={{ background: 'var(--bg-secondary)', padding: '24px', borderRadius: '24px', border: '1px solid var(--glass-border)' }}>
                <img src="/images/EPP_CaseStudy_01.png" alt="Problem Visual" style={{ width: '100%', borderRadius: '12px', filter: 'grayscale(30%)' }} />
                <div style={{ position: 'absolute', top: '-20px', right: '-20px', background: '#ef4444', color: '#fff', padding: '16px 24px', borderRadius: '16px', boxShadow: '0 20px 40px rgba(239, 68, 68, 0.4)', fontWeight: 600, fontSize: '18px' }}>
                  88% Drop-off Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Breakdown of Solution */}
      <section style={{ padding: '100px 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', padding: '8px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px' }}>
              <CheckCircle2 size={16} /> The Solution
            </div>
            <h2 style={{ fontSize: '40px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '24px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>Zero-Friction Financing</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
              A seamless B2B2C FinTech mobile ecosystem offering corporate employees instant salary-linked EMIs and 1-click checkout for premium devices.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            <div style={{ background: 'var(--bg-color)', padding: '32px', borderRadius: '24px', border: '1px solid var(--glass-border)', textAlign: 'center' }}>
              <img src="/images/EPP_CaseStudy_02.png" alt="SSO Auth" style={{ width: '100%', borderRadius: '16px', marginBottom: '24px' }} />
              <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px' }}>Corporate SSO Auth</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>Bypassing manual KYC entirely by authenticating directly through the employee's existing corporate HR portal.</p>
            </div>
            <div style={{ background: 'var(--bg-color)', padding: '32px', borderRadius: '24px', border: '1px solid var(--glass-border)', textAlign: 'center', transform: 'translateY(24px)' }}>
              <img src="/images/EPP_CaseStudy_03.png" alt="Dynamic Limits" style={{ width: '100%', borderRadius: '16px', marginBottom: '24px' }} />
              <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px' }}>Dynamic Credit Limits</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>Pre-calculating maximum EMIs based on salary bands so users browse with total financial confidence.</p>
            </div>
            <div style={{ background: 'var(--bg-color)', padding: '32px', borderRadius: '24px', border: '1px solid var(--glass-border)', textAlign: 'center' }}>
              <img src="/images/EPP_CaseStudy_04.png" alt="1-Click Checkout" style={{ width: '100%', borderRadius: '16px', marginBottom: '24px' }} />
              <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px' }}>1-Click Checkout</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>Automatically routing the first EMI deduction to the next month's payroll, eliminating credit card processing entirely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Research & 6. Analysis */}
      <section style={{ padding: '100px 0' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px' }}>
            
            {/* Research */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <Search size={28} color="var(--accent-color)" />
                <h2 style={{ fontSize: '32px', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '-0.02em', margin: 0 }}>Research</h2>
              </div>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                To understand why employees were abandoning their carts, we conducted mixed-methods research including:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: 0, margin: 0, listStyle: 'none' }}>
                <li style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ color: 'var(--accent-color)', fontWeight: 700, fontSize: '24px' }}>40+</div>
                  <div style={{ color: 'var(--text-primary)', fontSize: '14px' }}>User Interviews with corporate employees across 3 partner companies.</div>
                </li>
                <li style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ color: 'var(--accent-color)', fontWeight: 700, fontSize: '24px' }}>15k</div>
                  <div style={{ color: 'var(--text-primary)', fontSize: '14px' }}>Funnel analytics data points analyzed via Mixpanel.</div>
                </li>
                <li style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ color: 'var(--accent-color)', fontWeight: 700, fontSize: '24px' }}>3</div>
                  <div style={{ color: 'var(--text-primary)', fontSize: '14px' }}>Competitor EPP platforms audited for UX teardowns.</div>
                </li>
              </ul>
            </div>

            {/* Analysis */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <TrendingUp size={28} color="var(--accent-color)" />
                <h2 style={{ fontSize: '32px', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '-0.02em', margin: 0 }}>Analysis</h2>
              </div>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                Synthesizing our research revealed three critical insights that redefined our entire approach to the product logic:
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontSize: '16px', marginBottom: '8px' }}>Insight 1: The "App Fatigue" Hurdle</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.5, margin: 0 }}>Users purchase a laptop once every 3 years. They explicitly refused to download a dedicated native app for a rare transaction.</p>
                </div>
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)' }} />
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontSize: '16px', marginBottom: '8px' }}>Insight 2: KYC is a Funnel Killer</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.5, margin: 0 }}>Asking for PAN numbers and salary slips upfront caused immediate mistrust. Users felt they were applying for a mortgage just to browse phones.</p>
                </div>
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)' }} />
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontSize: '16px', marginBottom: '8px' }}>Insight 3: The "Blind Cart" Effect</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.5, margin: 0 }}>Users didn't know their approved EMI limit while browsing. When they finally reached checkout and saw they didn't qualify for the iPhone 15 Pro, they abandoned the cart entirely out of frustration.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. How Might We's */}
      <section style={{ padding: '80px 0', background: 'var(--accent-color)' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <Lightbulb size={48} color="#fff" style={{ margin: '0 auto 24px auto', opacity: 0.9 }} />
          <h2 style={{ fontSize: '32px', fontWeight: 600, color: '#fff', marginBottom: '24px', letterSpacing: '-0.02em' }}>The Core HMW</h2>
          <h3 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 400, color: '#fff', lineHeight: 1.4, margin: 0, fontStyle: 'italic' }}>
            "How might we allow employees to confidently browse devices within their pre-approved budget, without manual KYC blocking the funnel?"
          </h3>
        </div>
      </section>

      {/* 8. Ideating/Solutions & 9. Iterations (The Messy Middle) */}
      <section style={{ padding: '120px 0' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', background: 'rgba(255, 255, 255, 0.05)', padding: '8px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px' }}>
              Ideation & Iteration
            </div>
            <h2 style={{ fontSize: '40px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px', letterSpacing: '-0.02em' }}>The Messy Middle</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
              Design isn't linear. Here are the three primary directions we explored for the e-commerce purchase flow, and why the first two failed.
            </p>
          </div>

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
            <div style={{ background: 'var(--bg-color)', border: '2px solid var(--accent-color)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 0 0 4px rgba(229, 9, 20, 0.1)' }}>
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

      {/* 10. Final Design w prototype (The Visual Ecosystem + Component) */}
      <section style={{ padding: '120px 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-color)', background: 'rgba(239, 68, 68, 0.1)', padding: '8px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px' }}>
              Final Design
            </div>
            <h2 style={{ fontSize: '40px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px', letterSpacing: '-0.02em' }}>The Visual Ecosystem</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
              A unified FinTech design language scaling from comprehensive admin dashboards down to the pocket-sized employee mobile purchasing experience.
            </p>
          </div>

          {/* Custom Bento Grid for 9 Images */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '24px',
            alignItems: 'start',
            marginBottom: '120px'
          }}>
            <div style={{ display: 'grid', gap: '24px' }}>
              <motion.img initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} src="/images/EPP_CaseStudy_01.png" alt="Smart EPP Mobile Flow" style={{ width: '100%', borderRadius: '24px', border: '1px solid var(--glass-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} />
              <motion.img initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} src="/images/EPP_CaseStudy_04.png" alt="Smart EPP Components" style={{ width: '100%', borderRadius: '24px', border: '1px solid var(--glass-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} />
              <motion.img initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} src="/images/EPP_CaseStudy_07.png" alt="Smart EPP Dashboard" style={{ width: '100%', borderRadius: '24px', border: '1px solid var(--glass-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} />
            </div>
            <div style={{ display: 'grid', gap: '24px', paddingTop: '40px' }}>
              <motion.img initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} src="/images/EPP_CaseStudy_02.png" alt="Smart EPP Handheld" style={{ width: '100%', borderRadius: '24px', border: '1px solid var(--glass-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} />
              <motion.img initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} src="/images/EPP_CaseStudy_05.png" alt="Smart EPP UI Details" style={{ width: '100%', borderRadius: '24px', border: '1px solid var(--glass-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} />
              <motion.img initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} src="/images/EPP_CaseStudy_08.png" alt="Smart EPP Settings" style={{ width: '100%', borderRadius: '24px', border: '1px solid var(--glass-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} />
            </div>
            <div style={{ display: 'grid', gap: '24px', paddingTop: '80px' }}>
              <motion.img initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} src="/images/EPP_CaseStudy_03.png" alt="Smart EPP Screens" style={{ width: '100%', borderRadius: '24px', border: '1px solid var(--glass-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} />
              <motion.img initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} src="/images/EPP_CaseStudy_06.png" alt="Smart EPP Interface" style={{ width: '100%', borderRadius: '24px', border: '1px solid var(--glass-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} />
              <motion.img initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} src="/images/EPP_CaseStudy_09.png" alt="Smart EPP Approvals" style={{ width: '100%', borderRadius: '24px', border: '1px solid var(--glass-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} />
            </div>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px', letterSpacing: '-0.02em' }}>Live Verification Prototype</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '600px', marginInline: 'auto' }}>
              By linking directly to corporate HRMS systems, we eliminated the need for manual income verification entirely. Try the flow yourself.
            </p>
          </div>
          
          <SmartEPPPrototype />
        </div>
      </section>

      {/* 11. Styleguide, Slidedeck, Figma File */}
      <section style={{ padding: '100px 0' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '48px' }}>
            <Palette size={28} color="var(--accent-color)" />
            <h2 style={{ fontSize: '32px', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '-0.02em', margin: 0 }}>Design System & Assets</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '48px' }}>
            {/* Colors */}
            <div>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '18px', marginBottom: '24px' }}>Core Colors</h4>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ height: '80px', background: '#0a0a0a', borderRadius: '12px', border: '1px solid var(--glass-border)', marginBottom: '12px' }} />
                  <div style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: 600 }}>Obsidian</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '12px', fontFamily: "'JetBrains Mono', monospace" }}>#0a0a0a</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ height: '80px', background: '#e50914', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.2)', marginBottom: '12px' }} />
                  <div style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: 600 }}>Action Red</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '12px', fontFamily: "'JetBrains Mono', monospace" }}>#e50914</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ height: '80px', background: '#ffffff', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '12px' }} />
                  <div style={{ color: 'var(--bg-color)', fontSize: '14px', fontWeight: 600 }}>Primary Text</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '12px', fontFamily: "'JetBrains Mono', monospace" }}>#ffffff</div>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '18px', marginBottom: '24px' }}>Typography</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', color: 'var(--text-primary)', lineHeight: 1 }}>Aa</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '8px' }}>Syne (Headings)</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '24px', color: 'var(--text-primary)', lineHeight: 1 }}>Aa</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '8px' }}>JetBrains Mono (Data & Code)</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', marginTop: '48px' }}>
            <button className="btn btn-primary" style={{ flex: 1, padding: '20px' }}>
              <FileText size={20} /> View Pitch Deck (PDF)
            </button>
            <button className="btn btn-primary" style={{ flex: 1, padding: '20px' }}>
              <Code size={20} /> View Figma File
            </button>
          </div>
        </div>
      </section>

      {/* 12. Reflections */}
      <section style={{ padding: '120px 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '48px' }}>
            <Target size={28} color="var(--accent-color)" />
            <h2 style={{ fontSize: '32px', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '-0.02em', margin: 0 }}>Reflections</h2>
          </div>
          
          <div style={{ background: 'var(--bg-color)', padding: '40px', borderRadius: '24px', border: '1px solid var(--glass-border)', marginBottom: '48px' }}>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '20px', marginBottom: '16px' }}>What I Got Wrong: The "Universal App" Fallacy</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px' }}>
              Initially, I spent two weeks designing a beautiful, standalone native iOS & Android application. I obsessed over push notifications, persistent login states, and native biometric auth.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px' }}>
              <strong>The Reality Check:</strong> During beta testing, corporate employees absolutely refused to download *another* app just to buy a phone once a year. The app store friction killed our acquisition funnel instantly.
            </p>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px' }}>
              <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '8px' }}>The Pivot</strong>
              <span style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.6 }}>
                We scrapped the native app entirely and rebuilt the entire flow as a lightweight Progressive Web App (PWA) that could be deeply embedded inside their existing corporate intranet portal (HRMS). Conversion spiked by 300% overnight.
              </span>
            </div>
          </div>

          <h3 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px' }}>Final Thoughts</h3>
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
