import React from 'react';
import { motion } from 'framer-motion';
import { SiClaude } from 'react-icons/si';
import { FullscreenImageModal } from './FullscreenImageModal';

const projects = [
  { 
    title: "Saarthi", 
    image: "/images/saarthi_01.webp", 
    preview: "/images/saarthi_02.webp",
    description: "A smart home manager that proactively supervises appliances, experts, and updates."
  },
  { 
    title: "Pause.", 
    image: "/images/pause.webp", 
    preview: "/images/pause_web.webp",
    description: "A premium coffee subscription concept focusing on mindful, slow morning rituals.",
    madeWith: "Claude Design"
  }
];

export const ProjectsSection = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const [activePreview, setActivePreview] = React.useState<string | null>(null);

  return (
    <section id="projects" style={{ 
      position: 'relative',
      padding: isMobile ? '0' : '120px 0'
    }}>
      <div style={{
        position: 'relative',
        padding: isMobile ? '96px 16px' : '96px 64px',
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        borderBottom: 'none',
        overflow: 'hidden',
        width: '100%'
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

          {isMobile ? (
            /* Mobile Layout: Groups Image and Text together for each project */
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '64px',
              maxWidth: '1440px',
              margin: '0 auto',
              padding: '0'
            }}>
              {projects.map((project, i) => (
                <div key={`mobile-proj-${i}`} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {/* Mobile Image */}
                  <a 
                    href="#"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                      position: 'relative',
                      transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      borderBottom: 'none'
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      if ((project as any).preview) {
                        setActivePreview((project as any).preview);
                      }
                    }}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      style={{ 
                        width: '100%', 
                        height: 'auto', 
                        display: 'block',
                        objectFit: 'contain',
                      }} 
                    />
                  </a>

                  {/* Mobile Text */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
                    <h3 style={{ 
                      margin: 0, 
                      color: '#fff', 
                      fontSize: '28px', 
                      fontWeight: 600, 
                      letterSpacing: '0.5px' 
                    }}>
                      {project.title}
                    </h3>
                    
                    <p style={{ margin: 0, fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {(project as any).description}
                    </p>

                    {(project as any).madeWith && (
                      <div style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '8px', 
                        marginTop: '8px',
                        padding: '8px 14px',
                        background: 'rgba(217, 119, 87, 0.1)',
                        border: '1px solid rgba(217, 119, 87, 0.25)',
                        borderRadius: '8px',
                        alignSelf: 'flex-start',
                      }}>
                        <SiClaude size={16} color="#D97757" />
                        <span style={{ 
                          fontSize: '12px', 
                          color: '#D97757', 
                          fontWeight: 600, 
                          letterSpacing: '1px', 
                          textTransform: 'uppercase',
                        }}>
                          Made with {(project as any).madeWith}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Web Layout: Separates Images and Details into independent aligned rows */
            <>
              {/* Images Row */}
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '48px',
                padding: '0',
                maxWidth: '1440px',
                margin: '0 auto'
              }}>
                {projects.map((project, i) => (
                  <a 
                    key={`img-${i}`} 
                    href="#"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: i === 0 ? '24%' : '72%',
                      position: 'relative',
                      transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      borderBottom: 'none',
                      borderRadius: '24px',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.02) translateY(-12px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1) translateY(0)';
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      if ((project as any).preview) {
                        setActivePreview((project as any).preview);
                      }
                    }}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      style={{ 
                        width: '100%', 
                        height: 'auto', 
                        display: 'block',
                        objectFit: 'cover',
                      }} 
                    />
                  </a>
                ))}
              </div>

              {/* Details Row */}
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'center',
                gap: '48px',
                maxWidth: '1440px',
                margin: '40px auto 0',
                padding: '0'
              }}>
                {projects.map((project, i) => (
                  <div key={`details-${i}`} style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '16px',
                    width: i === 0 ? '24%' : '72%'
                  }}>
                    {/* Visual Connector Line */}
                    <div style={{ 
                      width: '100%', 
                      height: '1px', 
                      background: 'linear-gradient(90deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%)',
                      marginBottom: '8px'
                    }} />

                    <h3 style={{ 
                      margin: 0, 
                      color: '#fff', 
                      fontSize: '28px', 
                      fontWeight: 600, 
                      letterSpacing: '0.5px' 
                    }}>
                      {project.title}
                    </h3>
                    
                    <p style={{ margin: 0, fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {(project as any).description}
                    </p>

                    {(project as any).madeWith && (
                      <div style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '8px', 
                        marginTop: '8px',
                        padding: '8px 14px',
                        background: 'rgba(217, 119, 87, 0.1)',
                        border: '1px solid rgba(217, 119, 87, 0.25)',
                        borderRadius: '8px',
                        alignSelf: 'flex-start',
                      }}>
                        <SiClaude size={16} color="#D97757" />
                        <span style={{ 
                          fontSize: '12px', 
                          color: '#D97757', 
                          fontWeight: 600, 
                          letterSpacing: '1px', 
                          textTransform: 'uppercase',
                        }}>
                          Made with {(project as any).madeWith}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

      {/* Lightbox Preview */}
      <FullscreenImageModal
        isOpen={!!activePreview}
        images={activePreview ? [activePreview] : []}
        initialIndex={0}
        onClose={() => setActivePreview(null)}
      />
    </section>
  );
};
