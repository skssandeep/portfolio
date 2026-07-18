import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const caseStudies = [
  {
    id: 1,
    title: 'OneAssist Smart EPP',
    description: 'A 0-to-1 Employee Purchase Program unlocking ~40% discounts on premium devices via salary-linked EMIs. I designed the end-to-end mobile experience to simplify complex financial flows and drive maximum user conversion.',
    tags: ['Product Design', 'Fintech', 'B2B2C'],
    image: '/images/Mockup2_EPP.png',
    bgColor: '#161618',
    customLink: '/smart-epp'
  },
  {
    id: 4,
    title: 'SnipKeep',
    description: 'A privacy-first Chrome extension that saves web highlights directly to your Google Docs. Featuring gentle triage, deadline-aware citations, and one-click archiving, it cures the "collector\'s fallacy" and ensures you actually use what you save.',
    tags: ['CHROME EXTENSION', 'PRODUCTIVITY', 'PRIVACY-FIRST', 'BUILT WITH CLAUDE CODE'],
    image: '/images/LAP01.png',
    bgColor: '#0f1115',
    cta: 'VIEW CASE STUDY',
    customLink: '/snipkeep'
  }
];

// Text uses scroll scrubbing instead of a triggered animation

const CaseStudyRow = ({ study, isEven, navigate }: { study: any, isEven: boolean, navigate: any }) => {
  const ref = React.useRef(null);
  
  // Synchronous check for mobile screen size to adjust scroll offsets safely
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: isMobile ? ["start 90%", "start 40%"] : ["start 90%", "center 60%"] // Desktop uses center 60%, Mobile uses start 40% so it doesn't scroll offscreen before finishing
  });

  // Apply a buttery smooth physics spring to the raw scroll data
  // This absorbs the "ticks" from physical mouse wheels and turns it into perfectly fluid motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Tie the 3D flip, fade, and translation perfectly to the smoothed scroll position
  const rotateX = useTransform(smoothProgress, [0, 1], [35, 0]);
  const y = useTransform(smoothProgress, [0, 1], [80, 0]);
  const opacity = useTransform(smoothProgress, [0, 1], [0, 1]);
  
  // Glare sweeps across as you scroll
  const glareX = useTransform(smoothProgress, [0, 1], ['-150%', '250%']);
  const glareOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0, 0.4, 0]);

  // Subtle image parallax
  const imgScale = useTransform(smoothProgress, [0, 1], [1.1, 1.2]);
  const imgY = useTransform(smoothProgress, [0, 1], [30, 0]);

  return (
    <div ref={ref} className="case-study-row grid gap-12 md:gap-20 w-full" style={{
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
      alignItems: 'center',
    }}>
      
      {/* Static Text Content (No Animation for maximum performance and elegance) */}
      <div 
        className={`flex flex-col items-center md:items-start text-center md:text-left p-4 md:p-10 order-2 ${isEven ? 'md:order-1' : 'md:order-2'}`}
      >
        <div style={{ marginBottom: '32px' }}>
          <h3 className="text-[36px] md:text-[48px]" style={{ fontWeight: 500, letterSpacing: '-0.02em', marginBottom: '16px', lineHeight: 1.1, color: '#fff' }}>
            {study.title}
          </h3>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            {study.description}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-start gap-2" style={{ marginBottom: '48px' }}>
          {study.tags.map((tag: string, tagIndex: number) => (
            <span key={tagIndex} style={{
              display: 'inline-flex',
              alignItems: 'center',
              fontSize: '12px',
              fontFamily: "'Syne', sans-serif",
              fontWeight: 600,
              padding: '6px 16px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '100px',
              color: 'rgba(255,255,255,0.7)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase'
            }}>
              {tag}
            </span>
          ))}
        </div>

        <button 
          onClick={() => navigate(study.customLink || `/case-study/${study.id}`)}
          className="w-full md:w-auto flex justify-center items-center"
          style={{
            fontFamily: "'Syne', sans-serif",
            background: '#fff',
            border: 'none',
            color: '#000',
            fontSize: '14px',
            fontWeight: 600,
            gap: '12px',
            cursor: 'pointer',
            padding: '16px 32px',
            borderRadius: '100px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          onMouseOver={(e: any) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(255,255,255,0.2)';
            const img = e.currentTarget.closest('.case-study-row')?.querySelector('img');
            if (img) img.style.filter = 'drop-shadow(0 0 60px rgba(239,68,68,0.4))';
          }}
          onMouseOut={(e: any) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
            const img = e.currentTarget.closest('.case-study-row')?.querySelector('img');
            if (img) img.style.filter = 'drop-shadow(0 40px 60px rgba(0,0,0,0.5))';
          }}
        >
          {study.cta || 'View Project'}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>

      {/* Image Showcase perfectly synchronized to scroll position */}
      <motion.div 
        className={`image-showcase-container order-1 ${isEven ? 'md:order-2' : 'md:order-1'}`}
        style={{
        opacity,
        rotateX,
        y,
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end', 
        justifyContent: 'center',
        background: study.bgColor,
        borderRadius: '32px',
        willChange: 'transform, opacity',
        paddingTop: '40px', 
        paddingBottom: '0', 
        paddingLeft: '20px',
        paddingRight: '20px',
        border: '1px solid rgba(255,255,255,0.03)',
        overflow: 'hidden',
        cursor: 'pointer',
        transformPerspective: 1200,
        transformOrigin: 'bottom center',
      }}
      onClick={() => navigate(study.customLink || `/case-study/${study.id}`)}
      onMouseOver={(e: any) => {
        const img = e.currentTarget.querySelector('img');
        if (img) img.style.filter = 'drop-shadow(0 0 60px rgba(239,68,68,0.4))';
      }}
      onMouseOut={(e: any) => {
        const img = e.currentTarget.querySelector('img');
        if (img) img.style.filter = 'drop-shadow(0 40px 60px rgba(0,0,0,0.5))';
      }}
      >
        {/* Glare Sweep Effect */}
        <motion.div 
          style={{
            opacity: glareOpacity,
            x: glareX,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '60%',
            height: '100%',
            background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0) 100%)',
            zIndex: 10,
            pointerEvents: 'none',
            skewX: -30
          }}
        />
        
        <motion.img 
          src={study.image} 
          alt={study.title}
          style={{
            scale: imgScale,
            y: imgY,
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            objectPosition: 'bottom center',
            filter: 'drop-shadow(0 40px 60px rgba(0,0,0,0.5))',
            display: 'block',
            transformOrigin: 'bottom center',
            position: 'relative',
            zIndex: 1,
            willChange: 'transform',
            transition: 'filter 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        />
      </motion.div>
    </div>
  );
};

export const CaseStudiesSectionSideBySide = () => {
  const navigate = useNavigate();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section id="case-studies" className="section-padding" style={{ position: 'relative', zIndex: 10, marginTop: '60px', paddingBottom: '160px', background: 'transparent' }}>
      <div className="container" style={{ maxWidth: '1600px', position: 'relative', zIndex: 1 }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ textAlign: 'center', marginBottom: isMobile ? '100px' : '140px', willChange: 'transform, opacity, filter' }}
        >
          <motion.div 
            style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '8px', marginBottom: '32px', cursor: 'pointer' }}
            whileHover="hover"
            whileTap="tap"
            initial="rest"
          >
            {/* Interactive Isometric Layer Stack */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
              <defs>
                <filter id="layerGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              {/* Layer 3 (Bottom - Red) */}
              <motion.path d="M6,24 L20,17 L34,24 L20,31 Z" stroke="var(--accent-color)" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(229, 9, 20, 0.05)"
                variants={{ rest: { y: 0 }, hover: { y: 8 }, tap: { y: -4 } }} 
                transition={{ type: 'spring', stiffness: 300, damping: 15 }} />
              {/* Layer 2 (Middle - Pink) */}
              <motion.path d="M6,24 L20,17 L34,24 L20,31 Z" stroke="#FF007A" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(255, 0, 122, 0.1)"
                variants={{ rest: { y: -5 }, hover: { y: -2 }, tap: { y: -4 } }} 
                transition={{ type: 'spring', stiffness: 300, damping: 15 }} />
              {/* Layer 1 (Top - Purple) */}
              <motion.path d="M6,24 L20,17 L34,24 L20,31 Z" stroke="#7928CA" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(121, 40, 202, 0.15)" filter="url(#layerGlow)"
                variants={{ rest: { y: -10 }, hover: { y: -12 }, tap: { y: -4 } }} 
                transition={{ type: 'spring', stiffness: 300, damping: 15 }} />
            </svg>
            <span style={{ color: 'rgba(255, 255, 255, 0.55)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px', fontFamily: "'Syne', sans-serif" }}>
              Deep Dives
            </span>
          </motion.div>
          <h2 style={{ fontSize: 'clamp(40px, 5vw, 64px)', marginTop: '0', marginBottom: '16px', fontWeight: 500, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1.15 }}>
            Case Studies
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '120px' : '160px' }}>
          {caseStudies.map((study, index) => (
            <CaseStudyRow key={study.id} study={study} isEven={index % 2 === 0} navigate={navigate} />
          ))}
        </div>
      </div>
    </section>
  );
};
