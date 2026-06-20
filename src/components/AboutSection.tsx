import React from 'react';
import { motion } from 'framer-motion';
import { LiquidButton } from './ui/liquid-glass-button';
import { DotPattern } from './ui/dot-pattern';

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding scroll-reveal" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '64px' }}>
          <span style={{ color: 'var(--accent-color)', fontWeight: 600, letterSpacing: '0', textTransform: 'uppercase', fontSize: '14px', fontFamily: "'Syne', sans-serif", display: 'block', marginBottom: '16px' }}>
            About Me
          </span>
          <h2 style={{ 
            fontSize: 'clamp(40px, 5vw, 56px)', 
            fontWeight: 500, 
            color: '#fff', 
            letterSpacing: '-0.03em', 
            lineHeight: 1.15,
            margin: 0
          }}>
            Designing for Scale.
          </h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', 
          gap: '80px', 
          alignItems: 'start' 
        }}>
          
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            
            {/* Image Card Container */}
            <div style={{ 
              position: 'relative', 
              width: 'fit-content', 
              marginLeft: '24px' // Offset to account for tilted badges
            }}>
            {/* Tilted Photo */}
              <motion.div 
                initial={{ rotate: -8, scale: 0.9, opacity: 0 }}
                whileInView={{ rotate: -4, scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', bounce: 0.4, duration: 1 }}
                style={{
                  position: 'relative',
                  width: '320px',
                  height: '380px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.1)',
                  background: '#111'
                }}
              >
                 <img 
                   src="/images/sandeep.png" 
                   alt="Sandeep Kumar Singh" 
                   style={{ 
                     width: '100%', 
                     height: '100%', 
                     objectFit: 'cover', 
                     filter: 'grayscale(100%) contrast(1.1)' 
                   }} 
                 />
                 {/* Dark gradient overlay for text legibility at bottom */}
                 <div style={{ 
                   position: 'absolute', 
                   bottom: 0, left: 0, right: 0, 
                   height: '60%', 
                   background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)' 
                 }} />
              </motion.div>
              
              {/* Overlapping Badges */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '-24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '8px',
                  transform: 'rotate(-4deg)',
                  zIndex: 2
                }}
              >
                <div style={{ 
                  background: 'var(--accent-color)', 
                  color: '#fff', 
                  padding: '6px 16px', 
                  borderRadius: '100px', 
                  fontSize: '14px', 
                  fontWeight: 800,
                  boxShadow: '0 8px 16px rgba(229, 9, 20, 0.2)'
                }}>
                  Sandeep
                </div>
                <div style={{ 
                  background: 'rgba(255, 255, 255, 0.1)', 
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#fff', 
                  padding: '8px 20px', 
                  borderRadius: '100px', 
                  fontSize: '14px', 
                  fontWeight: 600,
                  boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
                }}>
                  UX Designer
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative flex flex-col"
            style={{ 
              paddingTop: '0px' // Removed nudge since headline is no longer adjacent
            }}
          >
            <div className="relative z-20 flex flex-col gap-8 w-full">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <p className="text-body" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: 0, lineHeight: 1.6, fontSize: '18px' }}>
                  I'm a UX Designer specializing in complex SaaS systems and zero-to-one execution. For over 4 years, I've simplified dense B2B workflows into frictionless experiences that drive enterprise adoption.
                </p>
                <p className="text-body" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: 0, lineHeight: 1.6, fontSize: '18px' }}>
                  I blend analytical precision with deep user empathy—architecting unified design systems that reduce cross-platform friction and scale seamlessly.
                  <br /><br />
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>My focus:</span> Bridging human needs and business objectives through world-class UX design.
                </p>
              </div>
              
              <div style={{ marginTop: '8px' }}>
                <LiquidButton 
                  size="lg"
                  data-cal-link="sandeepks/15min" data-cal-config='{"layout":"month_view"}' 
                  style={{
                    fontWeight: 800,
                    padding: '0 32px',
                    minHeight: '56px',
                    borderRadius: '100px',
                    letterSpacing: '1px'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    BOOK AN INTRO CALL
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor"></polygon>
                    </svg>
                  </span>
                </LiquidButton>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
