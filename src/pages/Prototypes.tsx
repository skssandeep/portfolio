import React, { useEffect } from 'react';
import { Play, Code, ExternalLink } from 'lucide-react';

export const Prototypes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: 'var(--bg-color)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        {/* Header */}
        <header style={{ marginBottom: '80px', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <span style={{ fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--accent-color)', fontWeight: 600 }}>Interactive Engineering</span>
          </div>
          <h1 className="text-headline" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '32px', lineHeight: 1.1 }}>
            Functional, Code-Shipped Prototypes.
          </h1>
          <p className="text-body-large" style={{ color: 'var(--text-secondary)', fontSize: '20px', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto' }}>
            Static Figma mocks are a junior signal. When the interaction is the design, I ship it in React to prove technical feasibility, physics, and state management.
          </p>
        </header>

        {/* Prototype 1: Complex State Machine */}
        <section style={{ marginBottom: '120px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '28px', color: 'var(--text-primary)', marginBottom: '16px' }}>01. The Morphing Payment State</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px' }}>
                Figma's smart animate fails at complex staggered state machines. To prove out this checkout flow, I built a Framer Motion prototype that perfectly handles error states, loading spinners, and the success confirmation checkmark morphing from the submit button.
              </p>
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', backgroundColor: 'var(--text-primary)', color: '#000', borderRadius: '100px', textDecoration: 'none', fontWeight: 500, fontSize: '14px' }}>
                  <Play size={16} /> Live Demo
                </a>
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', color: 'var(--text-primary)', borderRadius: '100px', textDecoration: 'none', fontWeight: 500, fontSize: '14px' }}>
                  <Code size={16} /> Source Code
                </a>
              </div>
            </div>
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
              {/* Simulated interactive video/gif placeholder */}
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
                alt="Payment State Prototype"
                style={{ width: '100%', height: '400px', objectFit: 'cover', opacity: 0.8 }}
              />
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '64px', height: '64px', backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.2)' }}>
                <Play size={24} color="white" />
              </div>
            </div>
          </div>
        </section>

        {/* Prototype 2: Custom Animation */}
        <section style={{ marginBottom: '120px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
              <div style={{ backgroundColor: '#000', padding: '24px', height: '400px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
                </div>
                <pre style={{ color: '#e5e7eb', fontSize: '13px', lineHeight: 1.6, overflow: 'hidden' }}>
                  <code style={{ fontFamily: 'monospace' }}>
                    {`// Physics-based spring config
const spring = {
  type: "spring",
  stiffness: 400,
  damping: 30
};

// Orchestrated layout shifts
<motion.div
  layout
  initial={{ borderRadius: 16 }}
  whileHover={{ scale: 1.02 }}
  transition={spring}
>
  <DynamicIsland />
</motion.div>`}
                  </code>
                </pre>
              </div>
            </div>
            <div>
              <h2 style={{ fontSize: '28px', color: 'var(--text-primary)', marginBottom: '16px' }}>02. Novel Input Physics</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px' }}>
                To convince engineering to build a custom "fluid dynamic island" input for a mobile web app, I had to prove it wouldn't drop frames. I wrote this React prototype utilizing CSS hardware acceleration and spring physics to demonstrate 60fps performance on a low-end Android device.
              </p>
              <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-color)', textDecoration: 'none', fontWeight: 500, fontSize: '15px' }}>
                View in CodeSandbox <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
