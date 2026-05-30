import React from 'react';

const logos = [
  {
    id: 1,
    name: 'The Dotted O',
    svg: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="2.5" fill="var(--accent-color)"/>
      </svg>
    )
  },
  {
    id: 2,
    name: 'Minimal S',
    svg: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8C16 5.5 14 4 12 4C10 4 8 5.5 8 8C8 12 16 12 16 16C16 18.5 14 20 12 20C10 20 8 18.5 8 16" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: 3,
    name: 'Sandglass',
    svg: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 4H6L11 12L6 20H18L13 12L18 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 20L12 16L14 20H10Z" fill="var(--accent-color)" />
      </svg>
    )
  },
  {
    id: 4,
    name: 'Vortex',
    svg: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4"/>
        <circle cx="12" cy="12" r="6" stroke="var(--accent-color)" strokeWidth="1.5" strokeDasharray="4 4"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
      </svg>
    )
  },
  {
    id: 5,
    name: 'Dune Peak',
    svg: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 20L12 4L21 20H3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 4L21 20H12V4Z" fill="var(--accent-color)" opacity="0.3" />
      </svg>
    )
  },
  {
    id: 6,
    name: 'Infinite Process',
    svg: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 12C8 9 10 9 12 12C14 15 16 15 16 12C16 9 14 9 12 12C10 15 8 15 8 12Z" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="8" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    id: 7,
    name: 'Precision',
    svg: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 2V6M12 18V22M2 12H6M18 12H22" stroke="var(--accent-color)" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="1.5" fill="var(--accent-color)" />
      </svg>
    )
  },
  {
    id: 8,
    name: 'Waveform',
    svg: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 14C8 6 12 6 16 14C20 22 24 22 28 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" transform="translate(-4, -2)" />
        <path d="M4 18C8 10 12 10 16 18C20 26 24 26 28 18" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" transform="translate(-4, -2)" opacity="0.6" />
      </svg>
    )
  },
  {
    id: 9,
    name: 'Prism',
    svg: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="14" height="14" transform="rotate(45 12 12)" stroke="currentColor" strokeWidth="1.5" />
        <rect x="9" y="9" width="6" height="6" transform="rotate(45 12 12)" fill="var(--accent-color)" />
      </svg>
    )
  },
  {
    id: 10,
    name: 'Eclipse',
    svg: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="12" r="6" fill="var(--accent-color)" opacity="0.8" />
      </svg>
    )
  },
  {
    id: 11,
    name: 'Neural Node',
    svg: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 9V4M12 20V15M9 12H4M20 12H15M10 10L6 6M18 18L14 14M18 6L14 10M10 14L6 18" stroke="var(--accent-color)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      </svg>
    )
  },
  {
    id: 12,
    name: 'Bezier Curve',
    svg: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 20C4 20 12 4 20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="4" cy="20" r="2" fill="var(--accent-color)" />
        <circle cx="20" cy="4" r="2" fill="var(--accent-color)" />
        <path d="M12 12L20 4" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
      </svg>
    )
  },
  {
    id: 13,
    name: 'Code Brackets',
    svg: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 8L4 12L8 16M16 8L20 12L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 4L10 20" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: 14,
    name: 'Synapse',
    svg: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="6" cy="12" r="2" fill="currentColor" />
        <circle cx="12" cy="6" r="2" fill="currentColor" />
        <circle cx="12" cy="18" r="2" fill="currentColor" />
        <circle cx="18" cy="12" r="2" fill="var(--accent-color)" />
        <path d="M7 11L11 7M7 13L11 17M13 7L17 11M13 17L17 13" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      </svg>
    )
  },
  {
    id: 15,
    name: 'Layer Logic',
    svg: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" opacity="0.5" />
        <path d="M2 17L12 22L22 17" stroke="var(--accent-color)" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: 16,
    name: 'AI Spark',
    svg: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3L13.5 9.5L20 11L13.5 12.5L12 19L10.5 12.5L4 11L10.5 9.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="12" cy="11" r="1.5" fill="var(--accent-color)" />
      </svg>
    )
  },
  {
    id: 17,
    name: 'Pixel Perfect',
    svg: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="8" height="8" stroke="currentColor" strokeWidth="1.5" />
        <rect x="12" y="12" width="8" height="8" stroke="currentColor" strokeWidth="1.5" />
        <rect x="4" y="12" width="4" height="4" fill="var(--accent-color)" />
        <rect x="16" y="4" width="4" height="4" fill="var(--accent-color)" />
      </svg>
    )
  },
  {
    id: 18,
    name: 'Terminal',
    svg: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 8L10 12L6 16" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 16H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: 19,
    name: 'Visionary',
    svg: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5C6 5 2 12 2 12C2 12 6 19 12 19C18 19 22 12 22 12C22 12 18 5 12 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="3" stroke="var(--accent-color)" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 20,
    name: 'Algorhythm',
    svg: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 12V8C4 5.8 5.8 4 8 4H16C18.2 4 20 5.8 20 8V16C20 18.2 18.2 20 16 20H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 16C12 13.8 10.2 12 8 12C5.8 12 4 13.8 4 16C4 18.2 5.8 20 8 20C10.2 20 12 18.2 12 16Z" stroke="var(--accent-color)" strokeWidth="1.5" />
      </svg>
    )
  }
];

export const CompanyLogos = () => {
  return (
    <section className="section-padding" style={{ borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 className="text-headline" style={{ fontSize: '28px' }}>Sandstormify Logo Concepts</h2>
          <p className="text-body-large" style={{ color: 'var(--text-secondary)', marginTop: '12px' }}>A collection of 20 modern, sleek, and minimal brand marks for Sandstormify.</p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '40px', 
          alignItems: 'center', 
          justifyItems: 'center'
        }}>
          {logos.map((logo) => (
            <div 
              key={logo.id} 
              style={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                gap: '16px',
                color: 'var(--text-secondary)',
                transition: 'all 0.3s var(--apple-easing)',
                cursor: 'pointer',
                padding: '24px',
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid transparent',
                width: '100%'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.background = 'var(--glass-bg)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {logo.svg}
              <span style={{ 
                fontFamily: 'var(--font-system)', 
                fontWeight: 500, 
                fontSize: '14px', 
                letterSpacing: '1px' 
              }}>
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
