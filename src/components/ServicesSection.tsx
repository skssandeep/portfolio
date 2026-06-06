import React from 'react';

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div style={{
          position: 'relative',
          borderRadius: '32px',
          padding: '96px 64px',
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 100%)',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.02)',
          borderRight: '1px solid rgba(255, 255, 255, 0.02)',
          borderBottom: 'none',
          overflow: 'hidden'
        }}>
          {/* Top Edge Glow */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60%',
            height: '1px',
            background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)',
          }} />
          
          {/* Large Radial Glow at the top */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            height: '500px',
            background: 'radial-gradient(ellipse at top center, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 70%)',
            pointerEvents: 'none'
          }} />


          <div style={{ textAlign: 'center', marginBottom: '96px', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ 
              background: 'linear-gradient(to right, #7928CA 0%, #FF007A 50%, var(--accent-color) 100%)', 
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
              fontWeight: 600, 
              letterSpacing: '2px', 
              textTransform: 'uppercase', 
              fontSize: '14px', 
              fontFamily: "'Syne', sans-serif" 
            }}>
              Services
            </span>
            <h2 style={{ fontSize: 'clamp(40px, 5vw, 64px)', marginTop: '24px', marginBottom: '16px', fontWeight: 500, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1.1 }}>
              Available Services that I<br />work on
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '96px', position: 'relative', zIndex: 1 }}>
          
          {/* Service 01 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '48px', alignItems: 'start', marginBottom: '32px' }}>
              <h3 className="text-title" style={{ fontSize: '40px', margin: 0, fontWeight: 700, display: 'flex', gap: '12px' }}>
                <span style={{ 
                  background: 'linear-gradient(to right, #7928CA 0%, #FF007A 50%, var(--accent-color) 100%)', 
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent'
                }}>01.</span> <span style={{ color: '#ffffff' }}>Visual Design</span>
              </h3>
              <p className="text-body" style={{ color: '#a0a0a0', lineHeight: 1.6, fontSize: '18px', margin: 0 }}>
                Using my Figma UI/UX design skills, I craft wireframes and prototypes that drive leads and boost conversions. I focus on creating standout brands with engaging, resonant messaging that convinces your audience to take action.
              </p>
            </div>
            
            {/* Glowing line top */}
            <div style={{ 
              width: '100%', 
              height: '1px', 
              background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)',
            }} />
            
            {/* Tags row */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              flexWrap: 'wrap', 
              gap: '48px',
              padding: '28px 0'
            }}>
              {['Landing Pages', 'Mockup Designs', 'Wireframes', 'Design Systems', 'Logos'].map((item) => (
                <span key={item} style={{ fontSize: '16px', fontWeight: 500, color: '#ffffff' }}>
                  {item}
                </span>
              ))}
            </div>

            {/* Glowing line bottom */}
            <div style={{ 
              width: '100%', 
              height: '1px', 
              background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)',
            }} />
          </div>

          {/* Service 02 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '48px', alignItems: 'start', marginBottom: '32px' }}>
              <h3 className="text-title" style={{ fontSize: '40px', margin: 0, fontWeight: 700, display: 'flex', gap: '12px' }}>
                <span style={{ 
                  background: 'linear-gradient(to right, #7928CA 0%, #FF007A 50%, var(--accent-color) 100%)', 
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent'
                }}>02.</span> <span style={{ color: '#ffffff' }}>Framer Development</span>
              </h3>
              <p className="text-body" style={{ color: '#a0a0a0', lineHeight: 1.6, fontSize: '18px', margin: 0 }}>
                Leveraging my Framer development skills, I build CMS-driven, responsive sites that excel in SEO. I create multipage websites with custom animations, designed to drive leads and boost conversions.
              </p>
            </div>
            
            {/* Glowing line top */}
            <div style={{ 
              width: '100%', 
              height: '1px', 
              background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)',
            }} />
            
            {/* Tags row */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              flexWrap: 'wrap', 
              gap: '48px',
              padding: '28px 0'
            }}>
              {['CMS', 'Responsive Sites', 'Custom Animations', 'SEO', 'Multipage Websites'].map((item) => (
                <span key={item} style={{ fontSize: '16px', fontWeight: 500, color: '#ffffff' }}>
                  {item}
                </span>
              ))}
            </div>

            {/* Glowing line bottom */}
            <div style={{ 
              width: '100%', 
              height: '1px', 
              background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)',
            }} />
          </div>

        </div>
        </div>
      </div>
    </section>
  );
};
