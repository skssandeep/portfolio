import React from 'react';
import { useNavigate } from 'react-router-dom';

const additionalCaseStudies = [
  {
    id: 2,
    title: 'Oasys Admin Console',
    description: 'A brutalist admin interface designed to orchestrate partner onboarding and lifecycle management seamlessly.',
    tags: ['Dashboard', 'Enterprise'],
    image: '/images/mockup_hand_jpg.jpg'
  },
  {
    id: 3,
    title: 'AI Shopping Assistant',
    description: 'An intelligent in-app Ask AI assistant designed to navigate complex catalog selections through conversational interfaces.',
    tags: ['AI/ML', 'Mobile'],
    image: '/images/EPP - 04.jpg'
  }
];

export const MoreCaseStudiesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding" style={{ position: 'relative', zIndex: 10, background: '#0a0a0c', paddingBottom: '120px' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', 
          gap: '40px',
          width: '100%'
        }}>
          {additionalCaseStudies.map((study) => (
            <div 
              key={study.id} 
              className="scroll-reveal"
              style={{
                background: '#111',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(255,255,255,0.05)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
              onClick={() => navigate(`/case-study/${study.id}`)}
            >
              <div style={{
                width: '100%',
                height: '350px',
                background: '#1a1a1a',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img 
                  src={study.image} 
                  alt={study.title} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.9,
                    transition: 'opacity 0.3s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseOut={(e) => e.currentTarget.style.opacity = '0.9'}
                />
              </div>

              <div style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '28px', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: '16px', color: '#fff' }}>
                  {study.title}
                </h3>
                <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '24px' }}>
                  {study.description}
                </p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {study.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} style={{
                      fontSize: '11px',
                      padding: '6px 12px',
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
