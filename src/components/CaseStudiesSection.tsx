import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LiquidButton } from './ui/liquid-glass-button';

const caseStudies = [
  {
    id: 1,
    title: 'OneAssist Smart EPP',
    description: 'Designed an Employee Purchase Program from the ground up, letting employees lease devices through salary-linked EMIs. Built a mobile app, partner dashboards, and an admin console.',
    tags: ['Product Design', 'Design System', 'B2B2C'],
    image: '/images/EPP - 01.jpg',
    images: ['/images/EPP - 01.jpg', '/images/EPP - 02.jpg', '/images/EPP - 03.jpg', '/images/EPP - 04.jpg'],
    presentationStyle: 'mobile-isometric'
  },
  {
    id: 2,
    title: 'Fintech Mobile App Launch',
    description: 'Designed and engineered the MVP for a disruptive fintech startup, enabling them to secure $2M in seed funding within 3 months of launch.',
    tags: ['Mobile Design', 'Prototyping', 'User Testing'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  }
];

export const CaseStudiesSection = () => {
  const navigate = useNavigate();

  return (
    <section id="case-studies" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '96px' }}>
          <span style={{ color: 'var(--accent-color)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px' }}>
            Featured Work
          </span>
          <h2 className="text-headline" style={{ fontSize: '48px', marginTop: '16px' }}>
            Case Studies
          </h2>
        </div>

        {/* CSS Grid for Case Studies */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', 
          gap: '32px' 
        }}>
          {caseStudies.map((study) => (
            <div key={study.id} className="scroll-reveal glass" style={{
              borderRadius: '32px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              boxShadow: 'var(--glass-shadow)',
              transition: 'transform 0.4s var(--apple-easing), box-shadow 0.4s var(--apple-easing)',
            }}>
              
              {/* Image Container */}
              <div 
                style={{ 
                  width: '100%', 
                  height: '350px', 
                  overflow: 'hidden', 
                  position: 'relative',
                  display: 'flex',
                  alignItems: study.presentationStyle?.includes('mobile') ? 'center' : 'flex-start',
                  justifyContent: 'center',
                  background: study.presentationStyle?.includes('mobile')
                    ? 'radial-gradient(circle at center, rgba(120, 119, 198, 0.15) 0%, var(--bg-secondary) 100%)' 
                    : 'var(--bg-secondary)',
                  perspective: '2000px'
                }}
                onMouseEnter={(e) => {
                  if (study.presentationStyle === 'mobile-isometric') {
                    const layers = e.currentTarget.querySelectorAll('.mockup-layer');
                    layers.forEach((layer, idx) => {
                      const offset = idx - (layers.length - 1) / 2;
                      (layer as HTMLElement).style.transform = `rotateX(0deg) rotateZ(0deg) translateX(${offset * 170}px) translateY(0px) translateZ(${Math.abs(offset) * -40}px) scale(0.55)`;
                      (layer as HTMLElement).style.boxShadow = '0 60px 120px -24px rgba(0, 0, 0, 0.8), 0 0 0 2px rgba(255,255,255,0.05)';
                    });
                  } else if (study.presentationStyle === 'mobile') {
                    const target = e.currentTarget.children[0] as HTMLElement;
                    if (target) {
                      target.style.transform = 'translateY(-10px) rotateY(-5deg) rotateX(2deg) scale(1.05)';
                      target.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
                    }
                  } else {
                    const target = e.currentTarget.children[0] as HTMLElement;
                    if (target) {
                      const containerHeight = e.currentTarget.clientHeight;
                      const imgHeight = target.clientHeight;
                      if (imgHeight > containerHeight + 10) {
                        target.style.transform = `translateY(-${imgHeight - containerHeight}px)`;
                        target.style.transition = 'transform 6s cubic-bezier(0.25, 1, 0.5, 1)';
                      } else {
                        target.style.transform = 'scale(1.05)';
                        target.style.transition = 'transform 0.6s var(--apple-easing)';
                      }
                    }
                  }
                }}
                onMouseLeave={(e) => {
                  if (study.presentationStyle === 'mobile-isometric') {
                    const layers = e.currentTarget.querySelectorAll('.mockup-layer');
                    layers.forEach((layer, idx) => {
                      const offset = idx - (layers.length - 1) / 2;
                      (layer as HTMLElement).style.transform = `rotateX(55deg) rotateZ(-35deg) translateX(${offset * 80}px) translateY(${offset * 80}px) translateZ(${idx * 40}px) scale(0.5)`;
                      (layer as HTMLElement).style.boxShadow = '-40px 40px 60px rgba(0,0,0,0.6), 0 0 0 2px rgba(255,255,255,0.05)';
                    });
                  } else if (study.presentationStyle === 'mobile') {
                    const target = e.currentTarget.children[0] as HTMLElement;
                    if (target) {
                      target.style.transform = 'translateY(15px) rotateY(-15deg) rotateX(5deg) scale(1)';
                      target.style.transition = 'transform 0.6s var(--apple-easing)';
                    }
                  } else {
                    const target = e.currentTarget.children[0] as HTMLElement;
                    if (target) {
                      target.style.transform = 'translateY(0) scale(1)';
                      target.style.transition = 'transform 0.6s var(--apple-easing)';
                    }
                  }
                }}
              >
                {study.presentationStyle === 'mobile-isometric' && study.images ? (
                  // Isometric Flat-Lay Presentation
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transformStyle: 'preserve-3d',
                  }}>
                    {study.images.map((imgSrc, idx) => {
                      const offset = idx - (study.images.length - 1) / 2;
                      return (
                        <div key={idx} className="mockup-layer" style={{
                          position: 'absolute',
                          width: '220px',
                          height: '600px',
                          borderRadius: '32px',
                          overflow: 'hidden',
                          border: '6px solid #1a1a1a',
                          boxShadow: '-40px 40px 60px rgba(0,0,0,0.6), 0 0 0 2px rgba(255,255,255,0.05)',
                          transform: `rotateX(55deg) rotateZ(-35deg) translateX(${offset * 80}px) translateY(${offset * 80}px) translateZ(${idx * 40}px) scale(0.5)`,
                          transition: 'transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)',
                          transformStyle: 'preserve-3d',
                          backfaceVisibility: 'hidden',
                          WebkitFontSmoothing: 'antialiased',
                          willChange: 'transform',
                          zIndex: idx
                        }}>
                          {/* Screen glare effect */}
                          <div style={{
                            position: 'absolute',
                            top: 0, left: 0, right: 0, height: '100%',
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 40%)',
                            pointerEvents: 'none',
                            zIndex: 2
                          }} />
                          <img 
                            src={imgSrc} 
                            alt={`Mockup ${idx + 1}`} 
                            style={{ 
                              width: '100%', 
                              height: '100%',
                              objectFit: 'cover',
                              objectPosition: 'top',
                              display: 'block',
                              imageRendering: '-webkit-optimize-contrast'
                            }} 
                          />
                        </div>
                      );
                    })}
                  </div>
                ) : study.presentationStyle === 'mobile' ? (
                  // Elegant Multi-Mobile Mockup Presentation
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transformStyle: 'preserve-3d',
                  }}>
                    {study.images.map((imgSrc, idx) => {
                      const offset = idx - (study.images.length - 1) / 2;
                      return (
                        <div key={idx} className="mockup-layer" style={{
                          position: 'absolute',
                          width: '140px',
                          height: '300px',
                          borderRadius: '20px',
                          overflow: 'hidden',
                          border: '4px solid #1a1a1a',
                          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255,255,255,0.05)',
                          transform: `translateX(${offset * 30}px) translateY(${Math.abs(offset) * 10 + 15}px) rotateY(-15deg) rotateX(5deg) translateZ(${offset * -20}px) scale(1)`,
                          transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                          transformStyle: 'preserve-3d',
                          zIndex: study.images.length - idx
                        }}>
                          {/* Screen glare effect */}
                          <div style={{
                            position: 'absolute',
                            top: 0, left: 0, right: 0, height: '40%',
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%)',
                            pointerEvents: 'none',
                            zIndex: 2
                          }} />
                          <img 
                            src={imgSrc} 
                            alt={`Mockup ${idx + 1}`} 
                            style={{ 
                              width: '100%', 
                              height: '100%',
                              objectFit: 'cover',
                              objectPosition: 'top',
                              display: 'block'
                            }} 
                          />
                        </div>
                      );
                    })}
                  </div>
                ) : study.presentationStyle === 'mobile' ? (
                  // Elegant Mobile Mockup Presentation
                  <div style={{
                    width: '180px',
                    height: '390px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '6px solid #1a1a1a',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255,255,255,0.05)',
                    transform: 'translateY(15px) rotateY(-15deg) rotateX(5deg) scale(1)',
                    transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                    transformStyle: 'preserve-3d',
                    position: 'relative'
                  }}>
                    {/* Screen glare effect */}
                    <div style={{
                      position: 'absolute',
                      top: 0, left: 0, right: 0, height: '40%',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
                      pointerEvents: 'none',
                      zIndex: 2
                    }} />
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      style={{ 
                        width: '100%', 
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        display: 'block'
                      }} 
                    />
                  </div>
                ) : (
                  // Standard Presentation
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    style={{ 
                      width: '100%', 
                      height: 'auto',
                      minHeight: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      transition: 'transform 0.6s var(--apple-easing)'
                    }} 
                  />
                )}
              </div>

              {/* Content Container */}
              <div style={{ padding: '48px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                  {study.tags.map(tag => (
                    <span key={tag} style={{ 
                      fontSize: '12px', 
                      fontWeight: 600, 
                      letterSpacing: '1px', 
                      textTransform: 'uppercase',
                      padding: '8px 16px', 
                      borderRadius: '100px', 
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'var(--text-secondary)'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-title" style={{ fontSize: '32px', marginBottom: '16px', lineHeight: 1.2 }}>
                  {study.title}
                </h3>
                
                <p className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '40px', flexGrow: 1 }}>
                  {study.description}
                </p>
                
                <LiquidButton size="lg" style={{ alignSelf: 'flex-start', padding: '0 32px' }} onClick={() => navigate(`/case-study/${study.id}`)}>
                  Read Case Study
                </LiquidButton>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
