import React from 'react';
import { useNavigate } from 'react-router-dom';

const caseStudies = [
  {
    id: 1,
    title: 'OneAssist Smart EPP',
    description: 'An entirely new Employee Purchase Program ecosystem letting employees lease premium devices through salary-linked EMIs. Featuring an elegant mobile experience built from the ground up.',
    tags: ['Product Design', 'Fintech', 'B2B2C'],
    images: ['/images/EPP - 01.jpg', '/images/EPP - 02.jpg', '/images/EPP - 03.jpg', '/images/EPP - 04.jpg'],
    presentationStyle: 'hand-composite',
    bgText: 'EPP',
    handImage: '/images/Mockup2_EPP.png'
  },
  {
    id: 2,
    title: 'Oasys Admin Console',
    description: 'A powerful, brutalist admin interface designed to orchestrate partner onboarding and device lifecycle management seamlessly.',
    tags: ['Dashboard', 'UX Research', 'Enterprise'],
    images: ['/images/EPP - 02.jpg'],
    presentationStyle: 'hand-composite',
    bgText: 'OASYS',
    handImage: '/images/mockup_hand_jpg.jpg',
    screenImage: '/images/EPP - 01 MOCK.jpg',
    screenTransform: {
      width: '32.5%',
      height: '68%',
      top: '16%',
      left: '32%',
      transform: 'rotateZ(-7deg) rotateY(-18deg) rotateX(12deg) skewX(2deg)'
    }
  },
  {
    id: 3,
    title: 'AI Shopping Assistant',
    description: 'An intelligent in-app Ask AI assistant designed to navigate complex catalog selections through conversational interfaces.',
    tags: ['AI/ML', 'Interaction Design', 'Mobile'],
    images: ['/images/EPP - 04.jpg'],
    background: '/images/mockup_bg_liquid_silk.png',
    presentationStyle: 'liquid-float',
    bgText: ''
  }
];

const customAnimations = `
  @keyframes float-crisp { 0%, 100% { transform: translateY(0px) rotate(-4deg); } 50% { transform: translateY(-15px) rotate(-6deg); } }
  @keyframes float-crisp-shadow { 0%, 100% { transform: translateY(0px) scale(1); opacity: 0.3; } 50% { transform: translateY(15px) scale(0.9); opacity: 0.15; } }
`;

export const CaseStudiesSectionAlt = () => {
  const navigate = useNavigate();

  return (
    <section id="case-studies-alt" className="section-padding" style={{ position: 'relative', zIndex: 10, background: '#0a0a0c', marginTop: '120px' }}>
      <style>{customAnimations}</style>
      <div className="container">
        
        <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '140px' }}>
          <span style={{ color: '#fff', fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase', fontSize: '11px', opacity: 0.5 }}>
            Bespoke Environments
          </span>
          <h2 style={{ fontSize: '56px', marginTop: '24px', fontWeight: 500, letterSpacing: '-0.03em', color: '#fff' }}>
            Ultra-Premium Showroom
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '500px', margin: '24px auto 0', fontSize: '18px', lineHeight: 1.6 }}>
            Showcasing your work in custom-generated, photorealistic 3D architectural spaces.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '160px' }}>
          {caseStudies.map((study, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={study.id} className="scroll-reveal" style={{
                display: 'flex',
                flexDirection: isEven ? 'row' : 'row-reverse',
                alignItems: 'center',
                gap: '80px',
                width: '100%',
              }}>
                
                {/* Typography Side */}
                <div style={{ flex: '0 0 35%', display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  <div>
                    <h3 style={{ fontSize: '48px', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: '24px', lineHeight: 1.1, color: '#fff' }}>
                      {study.title}
                    </h3>
                    <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                      {study.description}
                    </p>
                  </div>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
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
                      background: 'transparent',
                      border: 'none',
                      color: '#fff',
                      fontSize: '15px',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '12px',
                      cursor: 'pointer',
                      padding: 0,
                      marginTop: '24px',
                      alignSelf: 'flex-start',
                      letterSpacing: '1px',
                      textTransform: 'uppercase'
                    }}
                  >
                    View Project
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>

                {/* Media Environment Side */}
                <div style={{
                  flex: '0 0 65%',
                  height: '700px',
                  borderRadius: '40px',
                  backgroundColor: ['crisp-grid', 'hand-composite'].includes(study.presentationStyle) ? '#f4f4f5' : 'transparent',
                  backgroundImage: ['crisp-grid', 'hand-composite'].includes(study.presentationStyle)
                    ? 'linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)' 
                    : (study.background ? `url(${study.background})` : 'none'),
                  backgroundSize: ['crisp-grid', 'hand-composite'].includes(study.presentationStyle) ? '40px 40px' : 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: ['crisp-grid', 'hand-composite'].includes(study.presentationStyle) ? 'repeat' : 'no-repeat',
                  border: ['crisp-grid', 'hand-composite'].includes(study.presentationStyle) ? '1px solid rgba(0,0,0,0.05)' : '1px solid rgba(255,255,255,0.05)',
                  boxShadow: ['crisp-grid', 'hand-composite'].includes(study.presentationStyle) ? 'none' : '0 40px 100px rgba(0,0,0,0.8)',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  perspective: '2000px'
                }}>
                  
                  {/* Background Text for Crisp Grid Style */}
                  {['crisp-grid', 'hand-composite'].includes(study.presentationStyle) && study.bgText && (
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      fontSize: '320px',
                      fontWeight: 900,
                      letterSpacing: '-0.05em',
                      background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      opacity: 0.9,
                      whiteSpace: 'nowrap',
                      zIndex: 1,
                      userSelect: 'none'
                    }}>
                      {study.bgText}
                    </div>
                  )}
                  
                  {/* Dynamic Device Insertion */}
                  <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                    
                    {study.presentationStyle === 'hand-composite' && study.handImage && (
                      <div style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        animation: 'float-crisp 8s ease-in-out infinite',
                        transformOrigin: 'center center',
                        zIndex: 2
                      }}>
                        {/* Shadow */}
                        <div style={{
                          position: 'absolute',
                          bottom: '10%',
                          left: '20%',
                          width: '60%',
                          height: '20px',
                          background: 'rgba(0,0,0,0.5)',
                          filter: 'blur(30px)',
                          borderRadius: '50%',
                          animation: 'float-crisp-shadow 8s ease-in-out infinite',
                          zIndex: 1
                        }}></div>
                        
                        {/* Screen UI Image (Mapped to 3D phone screen) */}
                        {study.screenImage && study.screenTransform && (
                          <div style={{
                            position: 'absolute',
                            width: study.screenTransform.width,
                            height: study.screenTransform.height,
                            top: study.screenTransform.top,
                            left: study.screenTransform.left,
                            transform: study.screenTransform.transform,
                            transformOrigin: 'center center',
                            zIndex: 2,
                            borderRadius: '30px',
                            overflow: 'hidden',
                            backgroundColor: '#000'
                          }}>
                            <img 
                              src={study.screenImage} 
                              alt="UI Screen" 
                              style={{ 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover'
                              }} 
                            />
                          </div>
                        )}

                        {/* Hand Cutout Image (In front) */}
                        <img 
                          src={study.handImage} 
                          alt="Hand Mockup" 
                          style={{ 
                            position: 'relative',
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 30px 50px rgba(0,0,0,0.4))',
                            zIndex: 3,
                            pointerEvents: 'none',
                            mixBlendMode: study.handImage.endsWith('.jpg') ? 'screen' : 'normal'
                          }} 
                        />
                      </div>
                    )}

                    {study.presentationStyle === 'float-dark' && study.images.map((imgSrc, idx) => {
                      const offsets = [
                        { x: -180, y: -40, delay: '0s', anim: 'float-crisp' },
                        { x: -60, y: 40, delay: '1s', anim: 'float-crisp' },
                        { x: 60, y: -50, delay: '0.5s', anim: 'float-crisp' },
                        { x: 180, y: 20, delay: '1.5s', anim: 'float-crisp' }
                      ];
                      const conf = offsets[idx % offsets.length];
                      return (
                        <div key={idx} style={{
                          position: 'absolute',
                          width: '220px',
                          height: '480px',
                          borderRadius: '32px',
                          border: '4px solid #111',
                          boxShadow: '0 30px 60px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.1)',
                          overflow: 'hidden',
                          transform: `translate(${conf.x}px, ${conf.y}px)`,
                          zIndex: 4 - Math.abs(idx - 1.5),
                          animation: `${conf.anim} 10s ease-in-out infinite ${conf.delay}`,
                          willChange: 'transform'
                        }}>
                          <img src={imgSrc} alt="Mockup" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                        </div>
                      );
                    })}

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
