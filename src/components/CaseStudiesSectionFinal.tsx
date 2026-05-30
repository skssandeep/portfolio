import React from 'react';
import { useNavigate } from 'react-router-dom';

const caseStudies = [
  {
    id: 1,
    title: 'OneAssist Smart EPP',
    description: 'An entirely new Employee Purchase Program ecosystem letting employees lease premium devices through salary-linked EMIs. Featuring an elegant mobile experience built from the ground up.',
    tags: ['Product Design', 'Fintech', 'B2B2C'],
    image: '/images/Mockup2_EPP.png'
  },
  {
    id: 4,
    title: 'Fintech Web Platform',
    description: 'A comprehensive desktop web application designed for high-density financial data management and real-time portfolio tracking.',
    tags: ['Web Application', 'Fintech', 'SaaS'],
    image: '/images/LAP01.png'
  }
];

export const CaseStudiesSectionFinal = () => {
  const navigate = useNavigate();

  return (
    <section id="case-studies" className="section-padding" style={{ position: 'relative', zIndex: 10, background: '#0a0a0c', marginTop: '120px' }}>
      <div className="container">
        
        <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '100px' }}>
          <span style={{ color: '#fff', fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase', fontSize: '11px', opacity: 0.5 }}>
            Featured Work
          </span>
          <h2 style={{ fontSize: '56px', marginTop: '24px', fontWeight: 500, letterSpacing: '-0.03em', color: '#fff' }}>
            Selected Projects
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '500px', margin: '24px auto 0', fontSize: '18px', lineHeight: 1.6 }}>
            A deep dive into high-performance product design and engineering.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '160px' }}>
          {caseStudies.map((study, index) => {
            return (
              <div key={study.id} className="scroll-reveal" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '60px',
                width: '100%',
              }}>
                
                {/* Media Presentation */}
                <div style={{
                  width: '100%',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <img 
                    src={study.image} 
                    alt={study.title}
                    style={{
                      width: '100%',
                      maxWidth: '1400px',
                      height: 'auto',
                      objectFit: 'contain',
                      borderRadius: '24px',
                      boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
                      background: '#111'
                    }}
                  />
                </div>

                {/* Typography & Context */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '800px', textAlign: 'center', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontSize: '48px', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: '24px', lineHeight: 1.1, color: '#fff' }}>
                      {study.title}
                    </h3>
                    <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                      {study.description}
                    </p>
                  </div>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                    {study.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} style={{
                        fontSize: '12px',
                        padding: '8px 16px',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '100px',
                        color: 'rgba(255,255,255,0.8)',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button 
                    onClick={() => navigate(`/case-study/${study.id}`)}
                    style={{
                      background: '#fff',
                      border: 'none',
                      color: '#000',
                      fontSize: '14px',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '12px',
                      cursor: 'pointer',
                      padding: '16px 32px',
                      borderRadius: '100px',
                      marginTop: '24px',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      transition: 'transform 0.2s ease',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    Read Case Study
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
