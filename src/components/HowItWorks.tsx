import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "1",
    title: "Define the Problem",
    desc: "Partner with Product and Engineering to align on business goals, user needs, and technical scope."
  },
  {
    num: "2",
    title: "Iterative Design",
    desc: "Rapidly explore solutions through wireframes, high-fidelity prototypes, and continuous user feedback."
  },
  {
    num: "3",
    title: "Build & Scale",
    desc: "Deliver production-ready assets and contribute to a scalable design system for a seamless engineering handoff."
  }
];

export const HowItWorks = ({ variant: _variant = 'red' }: { variant?: 'white' | 'red' }) => {
  const StepCard = ({ step }: { step: typeof steps[0] }) => (
    <div 
      className="step-card"
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        textAlign: 'center',
        maxWidth: '320px',
        position: 'relative',
        zIndex: 2
      }}
    >
      {/* Glowing Circle Number */}
      <div style={{ 
        width: '90px', 
        height: '90px', 
        borderRadius: '50%', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        fontSize: '36px',
        fontWeight: 500,
        color: '#fff',
        position: 'relative',
        boxShadow: `0px -10px 30px -15px #7928CA`,
        background: 'var(--bg-secondary)', // Solid dark background so the line doesn't show through
        zIndex: 2
      }}>
        {/* Fading Arc Border */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          borderRadius: '50%',
          background: `linear-gradient(180deg, #7928CA 0%, #FF007A 50%, transparent 80%)`,
          zIndex: 1,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1px',
          pointerEvents: 'none'
        }} />
        
        <span style={{ position: 'relative', zIndex: 2 }}>{step.num}</span>
      </div>
      
      <h3 className="text-title" style={{ fontSize: '24px', margin: 0, marginTop: '-16px', fontWeight: 600, position: 'relative', zIndex: 10 }}>
        {step.title}
      </h3>
      
      <p className="text-body" style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0, marginTop: '16px', fontSize: '18px' }}>
        {step.desc}
      </p>
    </div>
  );

  return (
    <section id="how-it-works" className="section-padding">
      <div className="container">
        
        {/* The Dark Card Container */}
        <div style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 100%)',
          borderRadius: '32px',
          padding: '96px 64px',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.02)',
          borderRight: '1px solid rgba(255, 255, 255, 0.02)',
          borderBottom: 'none',
          position: 'relative',
          overflow: 'hidden'
        }}>
          
          {/* Section Title */}
          <div style={{ textAlign: 'center', marginBottom: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ color: 'var(--accent-color)', fontWeight: 600, letterSpacing: '0', textTransform: 'uppercase', fontSize: '14px', fontFamily: "'Syne', sans-serif", display: 'block', marginBottom: '16px' }}>
              Process
            </span>
            <h2 style={{ fontSize: 'clamp(40px, 5vw, 64px)', marginTop: '0', marginBottom: '16px', fontWeight: 500, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1.15 }}>
              My Process
            </h2>
            <p className="text-body" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: 0, lineHeight: 1.6, fontSize: '18px' }}>
              A simple, proven framework for turning complex problems into scalable, user-centered products.
            </p>
          </div>

          {/* Horizontal Layout (3 in a row) */}
          <div className="grid-3" style={{ gap: '32px', justifyItems: 'center', position: 'relative', zIndex: 1 }}>
            
            {/* The Animated Laser Line (Desktop Only) */}
            <div className="laser-line-container" style={{
              position: 'absolute',
              top: '45px', // Exact vertical center of the 90px glowing circle
              left: '16%',
              right: '16%',
              height: '1px',
              background: 'rgba(255,255,255,0.05)', // Dim track line
              zIndex: 0,
              overflow: 'hidden',
              borderRadius: '2px'
            }}>
              {/* The Glowing Laser Particle */}
              <motion.div 
                animate={{
                  x: ['-200%', '400%'] // Travel across the track
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  width: '25%', // Length of the laser
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, var(--accent-color), transparent)',
                  boxShadow: '0 0 15px 2px var(--accent-color)', // Glowing aura
                  opacity: 0.8
                }}
              />
            </div>

            <StepCard step={steps[0]} />
            <StepCard step={steps[1]} />
            <StepCard step={steps[2]} />
          </div>
          
        </div>
        
        {/* Hide laser line on mobile where grid stacks vertically */}
        <style dangerouslySetInnerHTML={{__html: `
          .laser-line-container { display: none; }
          @media (min-width: 992px) {
            .laser-line-container { display: block; }
          }
        `}} />
      </div>
    </section>
  );
};
