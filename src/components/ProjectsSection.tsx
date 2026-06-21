import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: "Enterprise Dashboard", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" },
  { title: "Fintech Platform", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
  { title: "Healthcare App", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" style={{ 
      position: 'relative',
      padding: '120px 0'
    }}>
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
          <div style={{ textAlign: 'center', marginBottom: '64px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div 
            style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '8px', marginBottom: '32px', cursor: 'pointer' }}
            whileHover="hover"
            whileTap="tap"
            initial="rest"
            animate="rest"
          >
            {/* Interactive Fanning Artboards Icon */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
              <defs>
                 <filter id="cardGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="1.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              
              {/* Back Artboard (Purple) */}
              <motion.rect x="12" y="10" width="16" height="20" rx="3" fill="rgba(121, 40, 202, 0.15)" stroke="#7928CA" strokeWidth="1.5"
                style={{ transformOrigin: '20px 20px' }}
                variants={{ rest: { x: -8, y: 2, rotate: -25 }, hover: { x: 0, y: 0, rotate: -6 }, tap: { x: 0, y: 0, rotate: -2 } }} transition={{ type: "spring", stiffness: 300, damping: 15 }} />
              
              {/* Middle Artboard (Pink) */}
              <motion.rect x="12" y="10" width="16" height="20" rx="3" fill="rgba(255, 0, 122, 0.15)" stroke="#FF007A" strokeWidth="1.5"
                style={{ transformOrigin: '20px 20px' }}
                variants={{ rest: { x: 0, y: -4, rotate: 0 }, hover: { x: 0, y: 0, rotate: 0 }, tap: { x: 0, y: 0, rotate: 0 } }} transition={{ type: "spring", stiffness: 300, damping: 15 }} />
              
              {/* Front Artboard (Red) */}
              <motion.rect x="12" y="10" width="16" height="20" rx="3" fill="rgba(229, 9, 20, 0.15)" stroke="var(--accent-color)" strokeWidth="1.5" filter="url(#cardGlow)"
                style={{ transformOrigin: '20px 20px' }}
                variants={{ rest: { x: 8, y: 2, rotate: 25 }, hover: { x: 0, y: 0, rotate: 6 }, tap: { x: 0, y: 0, rotate: 2 } }} transition={{ type: "spring", stiffness: 300, damping: 15 }} />
            </svg>
            <span style={{ color: 'rgba(255, 255, 255, 0.55)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px', fontFamily: "'Syne', sans-serif" }}>
              Projects
            </span>
          </motion.div>
            <h2 style={{ fontSize: 'clamp(40px, 5vw, 64px)', marginTop: '0', marginBottom: '16px', fontWeight: 500, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1.15 }}>
              Selected Work
            </h2>
            <p className="text-body-large" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: 0, lineHeight: 1.6 }}>
              A collection of my design work.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '32px',
            padding: '0',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {projects.map((project, i) => (
              <a 
                key={i} 
                href="#"
                className="carousel-card glass"
                style={{
                  display: 'block',
                  width: '100%',
                  aspectRatio: '4/3',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                  border: '1px solid var(--glass-border)',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02) translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(239,68,68,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                onClick={(e) => {
                  e.preventDefault();
                  // Add specific link handling here later
                }}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                  }} 
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  padding: '32px 24px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                  textAlign: 'left',
                }}>
                  <h3 style={{ margin: 0, color: '#fff', fontSize: '24px', fontWeight: 600, letterSpacing: '1px' }}>{project.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
