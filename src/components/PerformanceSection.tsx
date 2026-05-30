import React from 'react';
import { CpuArchitecture } from './ui/cpu-architecture';

export const PerformanceSection = () => {
  return (
    <section className="section-padding" style={{ background: 'var(--bg-color)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 className="text-headline" style={{ fontSize: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
            <span style={{ color: 'var(--accent-color)' }}>✦</span>
            Under The Hood
            <span style={{ color: 'var(--accent-color)' }}>✦</span>
          </h2>
          <p className="text-body-large" style={{ marginTop: '16px', maxWidth: '800px', margin: '16px auto 0' }}>
            Aesthetics are important, but performance is king. Every website I build is heavily optimized, structurally sound, and engineered for maximum conversions.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'center', gap: '64px' }}>
          {/* Left Side: The CPU SVG */}
          <div style={{ 
            background: 'var(--glass-bg)', 
            padding: '40px', 
            borderRadius: '24px',
            border: '1px solid var(--glass-border)',
            boxShadow: 'var(--glass-shadow)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '400px'
          }}>
            <CpuArchitecture 
              width="100%" 
              height="100%" 
              text="PERFORMANCE" 
              className="w-full h-full"
            />
          </div>

          {/* Right Side: The Stats/Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div className="card" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '12px', color: 'var(--accent-color)' }}>99+ Lighthouse Scores</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Lightning-fast load times drastically reduce bounce rates and keep your users engaged. I ensure that your Core Web Vitals are perfectly tuned.
              </p>
            </div>
            
            <div className="card" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '12px', color: 'var(--accent-color)' }}>Modern Architecture</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Built with industry-leading frameworks like React, Next.js, and Tailwind CSS. Clean code ensures scalability and easy future maintenance.
              </p>
            </div>

            <div className="card" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '12px', color: 'var(--accent-color)' }}>SEO Optimized</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Semantic HTML, proper meta tags, and structured data ensure that search engines can easily crawl, index, and rank your site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
