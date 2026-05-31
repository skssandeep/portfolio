import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const caseStudies = [
  {
    id: 1,
    title: 'OneAssist Smart EPP',
    description: 'An entirely new Employee Purchase Program ecosystem letting employees lease premium devices through salary-linked EMIs. Featuring an elegant mobile experience built from the ground up to maximize user conversion.',
    tags: ['Product Design', 'Fintech', 'B2B2C'],
    image: '/images/Mockup2_EPP.png',
    bgColor: '#161618',
    customLink: '/smart-epp'
  },
  {
    id: 4,
    title: 'Fintech Web Platform',
    description: 'A comprehensive desktop web application designed for high-density financial data management, real-time portfolio tracking, and sophisticated trading algorithms.',
    tags: ['Web Application', 'Fintech', 'SaaS'],
    image: '/images/LAP01.png',
    bgColor: '#0f1115'
  }
];

// Text uses scroll scrubbing instead of a triggered animation

const CaseStudyRow = ({ study, isEven, navigate }: { study: any, isEven: boolean, navigate: any }) => {
  const ref = React.useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "center 60%"] // Starts animating when top of card hits 90% from top of screen, finishes when center hits 60%
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
    <div ref={ref} className="case-study-row" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '80px',
      alignItems: 'center',
      width: '100%',
    }}>
      
      {/* Static Text Content (No Animation for maximum performance and elegance) */}
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '32px', 
          padding: '40px',
          order: isEven ? 1 : 2,
        }}
      >
        <div>
          <h3 style={{ fontSize: '48px', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: '24px', lineHeight: 1.1, color: '#fff' }}>
            {study.title}
          </h3>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
            {study.description}
          </p>
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {study.tags.map((tag: string, tagIndex: number) => (
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
          onClick={() => navigate(study.customLink || `/case-study/${study.id}`)}
          style={{
            background: '#fff',
            border: 'none',
            color: '#000',
            fontSize: '13px',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer',
            padding: '16px 32px',
            borderRadius: '100px',
            marginTop: '24px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            width: 'fit-content'
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
          View Project
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>

      {/* Image Showcase perfectly synchronized to scroll position */}
      <motion.div 
        className="image-showcase-container"
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
        order: isEven ? 2 : 1,
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

  return (
    <section id="case-studies" className="section-padding" style={{ position: 'relative', zIndex: 10, marginTop: '60px', paddingBottom: '160px', background: 'transparent' }}>
      <div className="container" style={{ maxWidth: '1600px', position: 'relative', zIndex: 1 }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ textAlign: 'center', marginBottom: '140px', willChange: 'transform, opacity, filter' }}
        >
          <span style={{ color: 'var(--accent-color)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '14px', fontFamily: "'Syne', sans-serif" }}>
            Selected Works
          </span>
          <h2 style={{ fontSize: 'clamp(40px, 5vw, 64px)', marginTop: '24px', fontWeight: 500, letterSpacing: '-0.03em', color: '#fff' }}>
            Featured Case Studies
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '160px' }}>
          {caseStudies.map((study, index) => (
            <CaseStudyRow key={study.id} study={study} isEven={index % 2 === 0} navigate={navigate} />
          ))}
        </div>
      </div>
    </section>
  );
};
