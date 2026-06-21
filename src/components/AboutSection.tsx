import React from 'react';
import { motion } from 'framer-motion';
import { LiquidButton } from './ui/liquid-glass-button';
import { DotPattern } from './ui/dot-pattern';

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding scroll-reveal" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <motion.div 
              style={{ display: 'inline-flex', width: 'fit-content', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
              whileHover="hover"
              whileTap="tap"
              initial="rest"
            >
              <svg width="56" height="40" viewBox="0 0 56 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                <defs>
                  <linearGradient id="penGradient" x1="0" y1="0" x2="56" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#7928CA" />
                    <stop offset="50%" stopColor="#FF007A" />
                    <stop offset="100%" stopColor="var(--accent-color)" />
                  </linearGradient>
                </defs>
                
                {/* Handles (White faint lines) */}
                <motion.line x1="12" y1="28" stroke="rgba(255,255,255,0.3)" strokeWidth="1" variants={{ rest: { x2: 26, y2: 28 }, hover: { x2: 20, y2: 38 }, tap: { x2: 8, y2: 18 } }} transition={{ type: "spring", stiffness: 300, damping: 12 }} />
                <motion.line x1="44" y1="12" stroke="rgba(255,255,255,0.3)" strokeWidth="1" variants={{ rest: { x2: 30, y2: 12 }, hover: { x2: 36, y2: 2 }, tap: { x2: 48, y2: 22 } }} transition={{ type: "spring", stiffness: 300, damping: 12 }} />
                
                {/* Bezier Curve */}
                <motion.path stroke="url(#penGradient)" strokeWidth="2" fill="none" variants={{ rest: { d: "M 12 28 C 26 28, 30 12, 44 12" }, hover: { d: "M 12 28 C 20 38, 36 2, 44 12" }, tap: { d: "M 12 28 C 8 18, 48 22, 44 12" } }} transition={{ type: "spring", stiffness: 300, damping: 12 }} />
                
                {/* Anchor Nodes (Black Squares with Colored Borders) */}
                <rect x="10" y="26" width="4" height="4" fill="#000" stroke="#7928CA" strokeWidth="1" />
                <rect x="42" y="10" width="4" height="4" fill="#000" stroke="var(--accent-color)" strokeWidth="1" />

                {/* Control Points (Solid White Circles) */}
                <motion.circle r="1.5" fill="#fff" variants={{ rest: { cx: 26, cy: 28 }, hover: { cx: 20, cy: 38 }, tap: { cx: 8, cy: 18 } }} transition={{ type: "spring", stiffness: 300, damping: 12 }} />
                <motion.circle r="1.5" fill="#fff" variants={{ rest: { cx: 30, cy: 12 }, hover: { cx: 36, cy: 2 }, tap: { cx: 48, cy: 22 } }} transition={{ type: "spring", stiffness: 300, damping: 12 }} />
              </svg>
            </motion.div>
            <span style={{ color: 'rgba(255, 255, 255, 0.55)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px', fontFamily: "'Syne', sans-serif" }}>
              About Me
            </span>
          </div>
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
                  width: '400px',
                  height: '480px',
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
                 {/* Online Status Dot */}
                 <span 
                   className="animate-pulse" 
                   style={{ 
                     position: 'absolute',
                     top: '20px',
                     right: '20px',
                     width: '12px', 
                     height: '12px', 
                     borderRadius: '50%', 
                     backgroundColor: '#10b981', 
                     boxShadow: '0 0 12px rgba(16, 185, 129, 0.8)',
                     border: '2px solid rgba(0,0,0,0.4)',
                     zIndex: 3 
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
                  background: 'linear-gradient(90deg, #7928CA 0%, #FF007A 35%, #ff0033 75%)', 
                  color: '#fff', 
                  padding: '8px 20px', 
                  borderRadius: '100px', 
                  fontSize: '16px', 
                  fontWeight: 500,
                  boxShadow: '0 8px 24px rgba(255, 0, 122, 0.4)',
                  letterSpacing: '0px',
                  fontFamily: "'Syne', sans-serif"
                }}>
                  Sandeep KS
                </div>
                <div style={{ 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#fff', 
                  padding: '8px 20px', 
                  borderRadius: '100px', 
                  fontSize: '16px', 
                  fontWeight: 500,
                  boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
                  letterSpacing: '0px',
                  fontFamily: "'Syne', sans-serif"
                }}>
                  Product Designer
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
                  I'm a Product Designer with <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>3+ years of experience</span> transforming complex B2B and consumer ecosystems into seamless, high-converting experiences. I focus on building products that people actually love to use, driving real business growth.
                </p>
                <p className="text-body" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: 0, lineHeight: 1.6, fontSize: '18px' }}>
                  Recently, I led the design of an enterprise mobile and web platform adopted by <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>20+ corporate partners</span>. By creating a unified design system, I eliminated user friction and drastically reduced post-launch support tickets.
                  <br /><br />
                  <span style={{ position: 'relative', display: 'inline-block', marginRight: '4px' }}>
                    <span style={{ position: 'absolute', left: '0px', right: '0px', bottom: '4px', height: '9px', background: 'linear-gradient(90deg, #8a0000, #b30000)', borderRadius: '2px', zIndex: 0 }} />
                    <span style={{ color: '#ffffff', fontWeight: 700, fontFamily: "'Syne', sans-serif", letterSpacing: '0.02em', position: 'relative', zIndex: 1 }}>My Edge:</span>
                  </span> I started my career in QA Engineering. I bring that same analytical mindset into my design process, ensuring every product I build is not only beautiful, but technically flawless and ready to scale.
                </p>
              </div>
              
              <div style={{ marginTop: '8px' }}>
                <LiquidButton 
                  size="lg"
                  data-cal-link="sandeepks/15min" data-cal-config='{"layout":"month_view"}' 
                  style={{
                    fontWeight: 500,
                    padding: '0 40px',
                    minHeight: '56px',
                    borderRadius: '100px',
                    letterSpacing: '0px',
                    fontSize: '16px'
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
