import React from 'react';
import { Palette, FileText, Code } from 'lucide-react';

export const DesignSystemDraft = () => {
  return (
    <section style={{ backgroundColor: '#050505', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 className="text-headline" style={{ fontSize: '40px', marginBottom: '16px' }}>Design System & Assets</h2>
          <p className="text-body-large" style={{ color: 'var(--text-secondary)' }}>An archived view of the core colors and typography for the case study.</p>
        </div>

        <div style={{ maxWidth: '1000px', margin: '0 auto', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '32px', padding: '64px' }}>
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
                  <div style={{ color: 'var(--text-primary)', fontSize: '16px', fontWeight: 600 }}>Obsidian</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '16px', fontFamily: "'JetBrains Mono', monospace" }}>#0a0a0a</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ height: '80px', background: '#e50914', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.2)', marginBottom: '12px' }} />
                  <div style={{ color: 'var(--text-primary)', fontSize: '16px', fontWeight: 600 }}>Action Red</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '16px', fontFamily: "'JetBrains Mono', monospace" }}>#e50914</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ height: '80px', background: '#ffffff', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '12px' }} />
                  <div style={{ color: 'var(--bg-color)', fontSize: '16px', fontWeight: 600 }}>Primary Text</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '16px', fontFamily: "'JetBrains Mono', monospace" }}>#ffffff</div>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '18px', marginBottom: '24px' }}>Typography</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', color: 'var(--text-primary)', lineHeight: 1 }}>Aa</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '16px', marginTop: '8px' }}>Syne (Headings)</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '24px', color: 'var(--text-primary)', lineHeight: 1 }}>Aa</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '16px', marginTop: '8px' }}>JetBrains Mono (Data & Code)</div>
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
      </div>
    </section>
  );
};
