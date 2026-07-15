import React from 'react';
import { motion } from 'framer-motion';

export const ServicesSection = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div style={{
          position: 'relative',
          borderRadius: '32px',
          padding: isMobile ? '96px 16px' : '96px 64px',
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
          <motion.div 
            style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '8px', marginBottom: '32px', cursor: 'pointer' }}
            whileHover="hover"
            whileTap="tap"
            initial="rest"
          >
            {/* Interactive Component Master Icon */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
              <defs>
                 <filter id="compGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              
              {/* Top Diamond (Purple) */}
              <motion.path d="M 20 6 L 26 12 L 20 18 L 14 12 Z" fill="rgba(121, 40, 202, 0.8)" stroke="#7928CA" strokeWidth="1" filter="url(#compGlow)"
                variants={{ rest: { y: 0, scale: 1 }, hover: { y: -4, scale: 1.1 }, tap: { y: 6, scale: 0.8 } }} transition={{ type: "spring", stiffness: 300, damping: 12 }} />
              
              {/* Left Diamond (Pink) */}
              <motion.path d="M 12 14 L 18 20 L 12 26 L 6 20 Z" fill="rgba(255, 0, 122, 0.6)" stroke="#FF007A" strokeWidth="1"
                variants={{ rest: { x: 0, scale: 1 }, hover: { x: -4, scale: 1.1 }, tap: { x: 6, scale: 0.8 } }} transition={{ type: "spring", stiffness: 300, damping: 12 }} />
              
              {/* Right Diamond (Red) */}
              <motion.path d="M 28 14 L 34 20 L 28 26 L 22 20 Z" fill="rgba(229, 9, 20, 0.6)" stroke="var(--accent-color)" strokeWidth="1"
                variants={{ rest: { x: 0, scale: 1 }, hover: { x: 4, scale: 1.1 }, tap: { x: -6, scale: 0.8 } }} transition={{ type: "spring", stiffness: 300, damping: 12 }} />
              
              {/* Bottom Diamond (White/Glass) */}
              <motion.path d="M 20 22 L 26 28 L 20 34 L 14 28 Z" fill="rgba(255, 255, 255, 0.1)" stroke="rgba(255,255,255,0.4)" strokeWidth="1"
                variants={{ rest: { y: 0, scale: 1 }, hover: { y: 4, scale: 1.1 }, tap: { y: -6, scale: 0.8 } }} transition={{ type: "spring", stiffness: 300, damping: 12 }} />
            </svg>
            <span style={{ color: 'rgba(255, 255, 255, 0.55)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px', fontFamily: "'Syne', sans-serif" }}>
              Areas of Expertise
            </span>
          </motion.div>
            <h2 style={{ fontSize: 'clamp(40px, 5vw, 64px)', marginTop: '0', marginBottom: '16px', fontWeight: 500, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1.15 }}>
              Domains I specialize in
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '96px', position: 'relative', zIndex: 1 }}>
          
          {/* Service 01 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '48px', alignItems: 'start', marginBottom: '32px' }}>
              <h3 className="text-title" style={{ fontSize: '40px', margin: 0, fontWeight: 700, display: 'flex', gap: '12px', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', justifyContent: isMobile ? 'center' : 'flex-start', textAlign: isMobile ? 'center' : 'left' }}>
                <span style={{ 
                  background: 'linear-gradient(to right, #7928CA 0%, #FF007A 50%, var(--accent-color) 100%)', 
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent'
                }}>01.</span> <span style={{ color: '#ffffff' }}>Product Design</span>
              </h3>
              <p className="text-body" style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '18px', margin: 0, textAlign: isMobile ? 'center' : 'left' }}>
                I transform complex business requirements into intuitive, high-converting product experiences. By bridging the gap between user needs and technical constraints, I design scalable interfaces that drive measurable business growth.
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
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'center',
              justifyContent: 'center', 
              flexWrap: 'wrap', 
              gap: isMobile ? '24px' : '48px',
              padding: '28px 0'
            }}>
              {['Landing Pages', 'Mobile Apps', 'Wireframes', 'Design Systems', 'SaaS Platforms'].map((item) => (
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
              <h3 className="text-title" style={{ fontSize: '40px', margin: 0, fontWeight: 700, display: 'flex', gap: '12px', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', justifyContent: isMobile ? 'center' : 'flex-start', textAlign: isMobile ? 'center' : 'left' }}>
                <span style={{ 
                  background: 'linear-gradient(to right, #7928CA 0%, #FF007A 50%, var(--accent-color) 100%)', 
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent'
                }}>02.</span> <span style={{ color: '#ffffff' }}>Framer Development</span>
              </h3>
              <p className="text-body" style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '18px', margin: 0, textAlign: isMobile ? 'center' : 'left' }}>
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
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'center',
              justifyContent: 'center', 
              flexWrap: 'wrap', 
              gap: isMobile ? '24px' : '48px',
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
