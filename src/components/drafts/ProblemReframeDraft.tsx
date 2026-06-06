import React from 'react';
import { motion } from 'framer-motion';
import { Target, XCircle, CheckCircle2 } from 'lucide-react';

export const ProblemReframeDraft = () => {
  return (
    <section style={{ padding: '0 0 160px 0' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '32px', padding: '64px' }}>

          {/* Section Label */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#a3a3a3', fontSize: '16px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'var(--font-system)' }}>
              <Target size={14} strokeWidth={2.5} />
              Problem Reframe
            </div>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h3 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, margin: '0 0 16px 0', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
              Stop designing 4 products.<br/>Design 1 system.
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">

            {/* Before */}
            <div className="flex flex-col h-full" style={{ background: 'rgba(225, 29, 72, 0.02)', border: '1px solid rgba(225, 29, 72, 0.15)', borderRadius: '24px', padding: '40px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--semantic-error)', fontSize: '14px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '32px', fontFamily: 'var(--font-system)' }}>
                <XCircle size={16} strokeWidth={2.5} />
                Before: Fragmented Chaos
              </div>
              
              {/* 4 disconnected boxes feeling disjointed */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: 'auto' }}>
                {['Employee App', 'HR Portal', 'Lessor Dashboard', 'Seller System'].map((sys, i) => (
                  <div key={sys} style={{ transform: i % 2 === 0 ? 'translateY(8px)' : 'translateY(-8px)', background: 'rgba(255, 255, 255, 0.02)', border: '1px dashed rgba(225, 29, 72, 0.3)', borderRadius: '12px', padding: '24px 16px', textAlign: 'center', color: '#a3a3a3', fontSize: '15px', fontWeight: 500, fontFamily: 'var(--font-system)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {sys}
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '40px', paddingTop: '32px', borderTop: '1px solid rgba(225, 29, 72, 0.1)' }}>
                <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.6, margin: 0, fontFamily: 'var(--font-system)' }}>
                  <strong style={{ color: '#fff', fontWeight: 600 }}>4 isolated apps.</strong> Out-of-sync data. HR sees "Pending" while employees see "Processing". Trust evaporates.
                </p>
              </div>
            </div>

            {/* After */}
            <div className="flex flex-col h-full" style={{ background: 'rgba(16, 185, 129, 0.03)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '24px', padding: '40px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--semantic-success)', fontSize: '14px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '32px', fontFamily: 'var(--font-system)' }}>
                <CheckCircle2 size={16} strokeWidth={2.5} />
                After: Unified Ecosystem
              </div>
              
              {/* 1 solid foundation with 4 tabs tightly connected */}
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 'auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4px' }}>
                  {['Employee', 'HR', 'Lessor', 'Seller'].map(tab => (
                    <div key={tab} style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderBottom: 'none', borderRadius: '12px 12px 0 0', padding: '16px 8px', textAlign: 'center', color: '#fff', fontSize: '14px', fontWeight: 500, fontFamily: 'var(--font-system)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {tab}
                    </div>
                  ))}
                </div>
                <div style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(16, 185, 129, 0.05))', border: '1px solid rgba(16, 185, 129, 0.4)', borderRadius: '0 0 16px 16px', padding: '32px', textAlign: 'center', color: '#fff', fontSize: '16px', fontWeight: 600, fontFamily: 'var(--font-system)', boxShadow: '0 8px 32px rgba(16,185,129,0.1)' }}>
                  Single Source of Truth (Core Database)
                </div>
              </div>

              <div style={{ marginTop: '40px', paddingTop: '32px', borderTop: '1px solid rgba(16, 185, 129, 0.1)' }}>
                <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.6, margin: 0, fontFamily: 'var(--font-system)' }}>
                  <strong style={{ color: '#fff', fontWeight: 600 }}>1 central database.</strong> 4 contextual lenses. Real-time sync. When HR approves, the employee's screen updates instantly.
                </p>
              </div>
            </div>

          </div>
          
          <div style={{ marginTop: '64px', textAlign: 'center' }}>
            <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '100px', padding: '16px 32px' }}>
              <p style={{ fontSize: '16px', color: '#e5e5e5', lineHeight: 1, margin: 0, fontFamily: 'var(--font-system)' }}>
                <strong style={{ color: 'var(--semantic-success)' }}>The Result:</strong> Designing this shared data model first cut design time by ~30%.
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
