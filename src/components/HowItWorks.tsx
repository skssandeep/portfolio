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
    desc: "Deliver pixel-perfect specs and reusable components so engineering can build faster and ship with zero friction."
  }
];

export const HowItWorks = ({ variant: _variant = 'red' }: { variant?: 'white' | 'red' }) => {
  const StepCard = ({ step }: { step: typeof steps[0] }) => (
    <div 
      className="step-card px-4 md:px-0 w-full"
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
          position: 'relative'
        }}>
          
          {/* Section Title */}
          <div className="px-4 md:px-0" style={{ textAlign: 'center', marginBottom: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div 
            style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '8px', marginBottom: '32px', cursor: 'pointer' }}
            whileHover="hover"
            whileTap="tap"
            initial="rest"
          >
            {/* Interactive Prototyping Noodle Icon */}
            <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
              <defs>
                 <linearGradient id="protoGradient" x1="0" y1="0" x2="48" y2="0" gradientUnits="userSpaceOnUse">
                   <stop offset="0%" stopColor="#7928CA" />
                   <stop offset="50%" stopColor="#FF007A" />
                   <stop offset="100%" stopColor="var(--accent-color)" />
                 </linearGradient>
                 <filter id="protoGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="1.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              
              {/* Frame 1 (Left) */}
              <motion.g variants={{ rest: { x: 0 }, hover: { x: -6 }, tap: { x: 3 } }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                <rect x="4" y="6" width="12" height="12" rx="2" fill="rgba(121, 40, 202, 0.1)" stroke="#7928CA" strokeWidth="1.5" />
                <circle cx="17" cy="12" r="2.5" fill="#7928CA" filter="url(#protoGlow)" />
                <circle cx="17" cy="12" r="1.5" fill="#fff" />
              </motion.g>

              {/* Frame 2 (Right) */}
              <motion.g variants={{ rest: { x: 0 }, hover: { x: 6 }, tap: { x: -3 } }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                <rect x="32" y="6" width="12" height="12" rx="2" fill="rgba(229, 9, 20, 0.1)" stroke="var(--accent-color)" strokeWidth="1.5" />
                {/* Arrow Head */}
                <path d="M 29 9 L 32 12 L 29 15" stroke="var(--accent-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </motion.g>

              {/* Connecting Prototype Noodle */}
              <motion.line 
                y1="12" y2="12"
                stroke="url(#protoGradient)" strokeWidth="2" strokeLinecap="round"
                variants={{
                  rest: { x1: 17, x2: 31 },
                  hover: { x1: 11, x2: 37 },
                  tap: { x1: 20, x2: 28 }
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              />
            </svg>
            <span style={{ color: 'rgba(255, 255, 255, 0.55)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px', fontFamily: "'Syne', sans-serif" }}>
              Process
            </span>
          </motion.div>
            <h2 style={{ fontSize: 'clamp(40px, 5vw, 64px)', marginTop: '0', marginBottom: '16px', fontWeight: 500, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1.15 }}>
              My Process
            </h2>
            <p className="text-body-large" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: 0, lineHeight: 1.6 }}>
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
                  background: 'linear-gradient(90deg, transparent, #FF007A, transparent)',
                  boxShadow: '0 0 15px 2px #7928CA', // Glowing aura
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
