import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import thePileImg from '../assets/the-pile.jpg';
import personaTimelineImg from '../assets/persona-timeline.jpg';
import toolbarMidSelectionImg from '../assets/snipkeep/toolbar-mid-selection.png';
import docsDeadlinePillsImg from '../assets/snipkeep/docs-deadline-pills.png';
import historyHoverActionsImg from '../assets/snipkeep/history-hover-actions.png';
import googleDocFullImg from '../assets/snipkeep/google-doc-full.png';
import worksCitedBlockImg from '../assets/snipkeep/works-cited-block.png';
import voiceNoteRecordingImg from '../assets/snipkeep/voice-note-recording.png';
import aiConnectScreenImg from '../assets/snipkeep/ai-connect-screen.png';
import trustCardImg from '../assets/snipkeep/trust-card.png';
import privacyLedgerImg from '../assets/snipkeep/privacy-ledger.png';
import pacerBoardImg from '../assets/snipkeep/pacer-board.png';
import knowledgeHeatImg from '../assets/snipkeep/knowledge-heat.png';

// A screenshot mockup component, replacing the hatched PlaceholderMockup boxes
const ScreenshotMockup = ({ src, alt, height = 'auto' }: { src: string, alt: string, height?: string }) => (
  <div style={{
    width: '100%',
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid rgba(255,255,255,0.1)',
    background: '#0a0a0a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <img src={src} alt={alt} style={{ width: '100%', height, objectFit: 'contain', display: 'block' }} />
  </div>
);

// A simple reusable placeholder mockup component
const PlaceholderMockup = ({ text, height = '400px' }: { text: string, height?: string }) => (
  <div style={{
    width: '100%',
    height,
    background: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.02), rgba(255,255,255,0.02) 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)',
    border: '1px dashed rgba(255,255,255,0.2)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    textAlign: 'center'
  }}>
    <div style={{
      background: '#fff',
      color: '#000',
      padding: '8px 16px',
      borderRadius: '4px',
      fontFamily: "'Syne', sans-serif",
      fontSize: '12px',
      fontWeight: 600,
      letterSpacing: '1px',
      textTransform: 'uppercase',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
      {text}
    </div>
  </div>
);


const SectionHeader = ({ number, title, isMobile, themeColorRGB = "16,185,129", iconType = "diamond" }: { number: string, title: string, isMobile: boolean, themeColorRGB?: string, iconType?: string }) => {
  const renderIcon = () => {
    switch (iconType) {
      case "lightning":
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <motion.path d="M 26 8 L 14 26 L 24 26 L 22 40 L 34 22 L 24 22 Z" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill={`rgba(${themeColorRGB}, 0.1)`} 
              variants={{ rest: { scale: 1, rotate: 0 }, hover: { scale: 1.1, rotate: -10 }, tap: { scale: 0.9, rotate: 10 } }} transition={{ type: "spring" }} />
          </svg>
        );
      case "warning":
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <motion.circle cx="24" cy="24" r="14" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill={`rgba(${themeColorRGB}, 0.1)`}
              variants={{ rest: { scale: 1 }, hover: { scale: 1.1, strokeDasharray: "4 4" }, tap: { scale: 0.9 } }} transition={{ type: "spring" }} />
            <motion.path d="M 24 16 L 24 26" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" />
            <motion.circle cx="24" cy="32" r="1.5" fill={`rgba(${themeColorRGB}, 1)`} />
          </svg>
        );
      case "nodes":
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <motion.path d="M 24 14 L 14 30 L 34 30 Z" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill={`rgba(${themeColorRGB}, 0.1)`}
              variants={{ rest: { scale: 1 }, hover: { scale: 1.1, rotate: 180 }, tap: { scale: 0.9 } }} transition={{ type: "spring" }} />
            <circle cx="24" cy="14" r="3" fill={`rgba(${themeColorRGB}, 1)`} />
            <circle cx="14" cy="30" r="3" fill={`rgba(${themeColorRGB}, 1)`} />
            <circle cx="34" cy="30" r="3" fill={`rgba(${themeColorRGB}, 1)`} />
          </svg>
        );
      case "target":
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <motion.circle cx="24" cy="24" r="14" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill={`rgba(${themeColorRGB}, 0.1)`}
              variants={{ rest: { scale: 1 }, hover: { scale: 1.2 }, tap: { scale: 0.9 } }} transition={{ type: "spring" }} />
            <motion.circle cx="24" cy="24" r="6" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill={`rgba(${themeColorRGB}, 0.2)`}
              variants={{ rest: { scale: 1 }, hover: { scale: 0.5 }, tap: { scale: 1.5 } }} transition={{ type: "spring" }} />
          </svg>
        );
      case "path":
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <motion.path d="M 12 36 Q 24 12 36 36" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill="none"
              variants={{ rest: { pathLength: 1 }, hover: { pathLength: 0.5 }, tap: { pathLength: 1 } }} transition={{ type: "spring" }} />
            <circle cx="12" cy="36" r="3" fill={`rgba(${themeColorRGB}, 1)`} />
            <circle cx="36" cy="36" r="3" fill={`rgba(${themeColorRGB}, 1)`} />
          </svg>
        );
      case "layers":
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <motion.path d="M 12 24 L 24 18 L 36 24 L 24 30 Z" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill={`rgba(${themeColorRGB}, 0.1)`}
              variants={{ rest: { y: 0 }, hover: { y: -4 }, tap: { y: 2 } }} transition={{ type: "spring" }} />
            <motion.path d="M 12 30 L 24 36 L 36 30" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill="none"
              variants={{ rest: { y: 0 }, hover: { y: 4 }, tap: { y: -2 } }} transition={{ type: "spring" }} />
          </svg>
        );
      case "flow":
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <motion.path d="M 12 20 Q 24 10 36 20" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill="none"
              variants={{ rest: { y: 0 }, hover: { y: -4 }, tap: { y: 4 } }} transition={{ type: "spring" }} />
            <motion.path d="M 12 28 Q 24 38 36 28" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill="none"
              variants={{ rest: { y: 0 }, hover: { y: 4 }, tap: { y: -4 } }} transition={{ type: "spring" }} />
          </svg>
        );
      case "magnify":
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <motion.circle cx="20" cy="20" r="10" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill={`rgba(${themeColorRGB}, 0.1)`}
              variants={{ rest: { scale: 1 }, hover: { scale: 1.2 }, tap: { scale: 0.9 } }} transition={{ type: "spring" }} />
            <motion.line x1="28" y1="28" x2="36" y2="36" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case "cycle":
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <motion.path d="M 24 12 C 17.373 12 12 17.373 12 24 C 12 30.627 17.373 36 24 36" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill="none"
              variants={{ rest: { rotate: 0 }, hover: { rotate: -90 }, tap: { rotate: 90 } }} transition={{ type: "spring" }} />
            <motion.path d="M 24 36 C 30.627 36 36 30.627 36 24" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill="none" strokeDasharray="4 4" />
            <polygon points="24,8 24,16 18,12" fill={`rgba(${themeColorRGB}, 1)`} />
          </svg>
        );
      case "wave":
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <motion.path d="M 8 24 Q 16 8 24 24 T 40 24" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill="none"
              variants={{ rest: { y: 0 }, hover: { y: [0, -4, 4, 0] }, tap: { y: 0 } }} transition={{ repeat: Infinity, duration: 1 }} />
            <circle cx="24" cy="24" r="3" fill={`rgba(${themeColorRGB}, 1)`} />
          </svg>
        );
      case "subtract":
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <motion.rect x="12" y="22" width="24" height="4" fill={`rgba(${themeColorRGB}, 1)`}
              variants={{ rest: { scaleX: 1 }, hover: { scaleX: 0.5 }, tap: { scaleX: 1.2 } }} transition={{ type: "spring" }} />
          </svg>
        );
      case "pulse":
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <motion.path d="M 10 24 L 18 24 L 22 14 L 28 34 L 32 24 L 40 24" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill="none" strokeLinejoin="round"
              variants={{ rest: { scaleY: 1 }, hover: { scaleY: 1.5 }, tap: { scaleY: 0.5 } }} transition={{ type: "spring" }} />
          </svg>
        );
      case "shield":
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <motion.path d="M 24 10 L 36 14 V 24 C 36 30 24 38 24 38 C 24 38 12 30 12 24 V 14 L 24 10 Z" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill={`rgba(${themeColorRGB}, 0.1)`}
              variants={{ rest: { scale: 1 }, hover: { y: -4 }, tap: { scale: 0.9 } }} transition={{ type: "spring" }} />
            <path d="M 20 24 L 23 27 L 28 20" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        );
      case "star":
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <motion.path d="M 24 10 L 28 20 L 38 20 L 30 26 L 33 36 L 24 30 L 15 36 L 18 26 L 10 20 L 20 20 Z" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill={`rgba(${themeColorRGB}, 0.1)`} strokeLinejoin="round"
              variants={{ rest: { rotate: 0 }, hover: { rotate: 144 }, tap: { scale: 1.2 } }} transition={{ type: "spring", damping: 10 }} />
          </svg>
        );
      default: // diamond
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <motion.path d="M 24 8 L 40 24 L 24 40 L 8 24 Z" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill={`rgba(${themeColorRGB}, 0.1)`}
              variants={{ rest: { scale: 1, rotate: 0 }, hover: { scale: 1.1, rotate: 90 }, tap: { scale: 0.9, rotate: -45 } }} transition={{ type: "spring" }} />
            <motion.circle cx="24" cy="24" r="4" fill={`rgba(${themeColorRGB}, 1)`} variants={{ rest: { scale: 1 }, hover: { scale: 1.5 }, tap: { scale: 0.5 } }} />
          </svg>
        );
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', justifyContent: isMobile ? 'center' : 'flex-start', gap: '16px', marginBottom: '32px' }}>
      <motion.div
        style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
        whileHover="hover"
        whileTap="tap"
        initial="rest"
        animate="rest"
      >
        {renderIcon()}
      </motion.div>
      <span style={{ color: `rgba(${themeColorRGB}, 0.8)`, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px', fontFamily: "'Syne', sans-serif" }}>
        {number}: {title}
      </span>
    </div>
  );
};

export const SnipKeepCaseStudy = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '120px', overflowX: 'hidden', color: '#EAE8E3' }}>
      {/* Animated Gradient Reading Progress Bar */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(to right, #7928CA 0%, #FF007A 50%, var(--semantic-success) 100%)',
          transformOrigin: '0%',
          scaleX,
          zIndex: 99999
        }}
      />

      {/* Floating Back Button */}
      <div style={{ position: 'fixed', top: '29px', left: '4vw', zIndex: 100, display: isMobile ? 'none' : 'block' }}>
        <Link to="/#case-studies" className="btn-link" style={{fontFamily: 'var(--font-heading)', display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#fff', textDecoration: 'none', fontSize: '16px', fontWeight: 500, letterSpacing: '0', textTransform: 'uppercase', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', padding: '12px 24px', borderRadius: '100px'}}>
          <ArrowLeft size={16} /> Back
        </Link>
      </div>

      {/* 01 HERO / SNAPSHOT */}
      <section style={{ paddingTop: isMobile ? '100px' : '150px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
          
          {/* Left Text Block */}
          <div style={{ flex: '1 1 700px', zIndex: 10, maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'center' : 'flex-start', textAlign: isMobile ? 'center' : 'left' }}>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '20px', letterSpacing: '0', textAlign: isMobile ? 'center' : 'left', fontFamily: 'var(--font-heading)' }}
            >
              Turn web highlights into perfectly cited research in Google Docs. <span style={{ color: 'var(--semantic-success)' }}>Zero lock-in.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: "'Jost', sans-serif", fontSize: isMobile ? '18px' : '24px', color: '#D4D4D4', lineHeight: 1.6, marginBottom: '32px', maxWidth: '100%', textAlign: isMobile ? 'center' : 'left' }}
            >
              Highlight any text and save it straight to your Google Doc. Fully formatted, properly sourced, and ready to cite. No proprietary databases. You own your notes forever.
            </motion.p>

            {/* Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: isMobile ? '8px' : '12px', marginBottom: '20px', justifyContent: isMobile ? 'center' : 'flex-start' }}
            >
              {['Chrome Extension', 'Productivity', 'Privacy-First', 'Built with Claude Code'].map((tag, idx) => (
                <div key={idx} style={{ fontFamily: "'Syne', sans-serif", background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: isMobile ? '6px 16px' : '8px 20px', borderRadius: '100px', fontSize: isMobile ? '11px' : '13px', color: '#D4D4D4', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase' }}>
                  {tag}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Mockup Block */}
          <div style={{ flex: '1 1 400px', position: 'relative', zIndex: 5, minHeight: isMobile ? '350px' : '500px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            {/* Soft Glow Behind Image */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120%', height: '120%', background: 'radial-gradient(circle, rgba(244,225,81,0.15) 0%, transparent 60%)', zIndex: 0 }} />
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'relative', zIndex: 2, width: isMobile ? '100%' : '100%', marginTop: isMobile ? '20px' : '0', display: 'flex', justifyContent: 'center' }}
            >
              <img 
                src="/images/LAP01.png" 
                alt="SnipKeep Laptop Mockup" 
                style={{ width: '100%', maxWidth: '650px', height: 'auto', display: 'block', objectFit: 'contain', filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.6))' }}
              />
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <div className="container" style={{ position: 'relative', zIndex: 20, marginTop: isMobile ? '32px' : '64px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: isMobile ? '32px 16px' : '24px',
              marginTop: '0px'
            }}
          >
            {[
              { label: 'ROLE', value: 'Product Designer', subtext: '& Developer, solo' },
              { label: 'TEAM', value: 'Solo', subtext: 'AI-paired (Claude Code)' },
              { label: 'PLATFORM', value: 'Chrome Extension', subtext: 'Manifest V3' },
              { label: 'STACK', value: 'React · TypeScript', subtext: 'Shadow DOM, Docs API' },
              { label: 'TIMELINE', value: 'Ongoing', subtext: 'active personal project' },
              { label: 'METHODS', value: 'Live iterative testing', subtext: 'behavioral-psych research' },
            ].map((stat, i) => (
              <div 
                key={i} 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  paddingTop: '20px', 
                  borderTop: '2px solid rgba(255,255,255,0.15)', 
                  fontFamily: "'Jost', sans-serif",
                  marginTop: isMobile && (stat.label === 'TEAM' || stat.label === 'ROLE') ? '18px' : '0'
                }}
              >
                <div style={{fontFamily: 'var(--font-heading)', color: '#D4D4D4', fontSize: isMobile ? '12px' : '14px', fontWeight: 500, letterSpacing: '0', textTransform: 'uppercase', marginBottom: '8px'}}>{stat.label}</div>
                <div style={{ color: '#fff', fontSize: isMobile ? '16px' : '20px', fontWeight: 500, marginBottom: '4px', letterSpacing: '0' }}>{stat.value}</div>
                <div style={{ color: '#D4D4D4', fontSize: isMobile ? '14px' : '16px', lineHeight: 1.5 }}>{stat.subtext}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* 02 TL;DR */}
      <section style={{ padding: isMobile ? '64px 0' : '120px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(145deg, rgba(245,158,11,0.06) 0%, rgba(10,10,10,0) 45%, rgba(10,10,10,0) 100%)', border: '1px solid rgba(245,158,11,0.12)', borderRadius: '32px', padding: isMobile ? '16px' : '64px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <SectionHeader number="02" title="TL;DR - OUTCOMES FIRST" isMobile={isMobile} themeColorRGB="245,158,11" iconType="lightning" />
            
            <h2 style={{ fontSize: isMobile ? '28px' : 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#fff', lineHeight: 1.1, letterSpacing: '0', maxWidth: '1100px', margin: 0, marginBottom: isMobile ? '32px' : '64px' }}>
              Results, before the process
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(12, 1fr)', gap: '24px' }}>
              {/* Card 01 - Spans 7 cols */}
              <motion.div 
                whileHover={{ y: -4, backgroundColor: 'rgba(245,158,11,0.08)', borderColor: 'rgba(245,158,11,0.2)' }}
                transition={{ duration: 0.3 }}
                style={{ gridColumn: isMobile ? 'span 1' : 'span 7', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '32px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ position: 'absolute', right: '-20px', bottom: '-40px', fontSize: '180px', fontWeight: 800, color: 'rgba(245,158,11,0.05)', lineHeight: 1, pointerEvents: 'none', fontFamily: "'Syne', sans-serif" }}>01</div>
                <div style={{ color: 'rgb(245,158,11)', fontSize: '14px', fontWeight: 700, letterSpacing: '1px', marginBottom: '16px', fontFamily: "'Syne', sans-serif" }}>FEATURE VELOCITY</div>
                <p style={{ fontSize: isMobile ? '16px' : '22px', color: '#e5e5e5', lineHeight: 1.5, margin: 0, fontFamily: "'Jost', sans-serif", position: 'relative', zIndex: 1 }}>
                  Across two separate research passes, <strong style={{color:'#fff', fontWeight: 600}}>12 research-backed features shipped</strong>; <strong style={{color:'#fff', fontWeight: 600}}>3 were deliberately built, evaluated against real use, and killed</strong> - that ratio is the differentiator, not a footnote.
                </p>
              </motion.div>

              {/* Card 02 - Spans 5 cols */}
              <motion.div 
                whileHover={{ y: -4, backgroundColor: 'rgba(245,158,11,0.08)', borderColor: 'rgba(245,158,11,0.2)' }}
                transition={{ duration: 0.3 }}
                style={{ gridColumn: isMobile ? 'span 1' : 'span 5', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '32px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ position: 'absolute', right: '-20px', bottom: '-40px', fontSize: '180px', fontWeight: 800, color: 'rgba(245,158,11,0.05)', lineHeight: 1, pointerEvents: 'none', fontFamily: "'Syne', sans-serif" }}>02</div>
                <div style={{ color: 'rgb(245,158,11)', fontSize: '14px', fontWeight: 700, letterSpacing: '1px', marginBottom: '16px', fontFamily: "'Syne', sans-serif" }}>DESIGN SYSTEM</div>
                <p style={{ fontSize: isMobile ? '16px' : '20px', color: '#e5e5e5', lineHeight: 1.5, margin: 0, fontFamily: "'Jost', sans-serif", position: 'relative', zIndex: 1 }}>
                  A full palette replacement mid-project (violet → "Ink & Highlighter"), re-verified numerically against WCAG on every token - nothing shipped on a guess.
                </p>
              </motion.div>

              {/* Card 03 - Spans 4 cols */}
              <motion.div 
                whileHover={{ y: -4, backgroundColor: 'rgba(245,158,11,0.08)', borderColor: 'rgba(245,158,11,0.2)' }}
                transition={{ duration: 0.3 }}
                style={{ gridColumn: isMobile ? 'span 1' : 'span 4', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '32px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ position: 'absolute', right: '-20px', bottom: '-40px', fontSize: '180px', fontWeight: 800, color: 'rgba(245,158,11,0.05)', lineHeight: 1, pointerEvents: 'none', fontFamily: "'Syne', sans-serif" }}>03</div>
                <div style={{ color: 'rgb(245,158,11)', fontSize: '14px', fontWeight: 700, letterSpacing: '1px', marginBottom: '16px', fontFamily: "'Syne', sans-serif" }}>ARCHITECTURE</div>
                <p style={{ fontSize: isMobile ? '16px' : '20px', color: '#e5e5e5', lineHeight: 1.5, margin: 0, fontFamily: "'Jost', sans-serif", position: 'relative', zIndex: 1 }}>
                  Zero-backend architecture treated as a UX decision, not an engineering constraint: <strong style={{color:'#fff', fontWeight: 500}}>privacy = trust = adoption.</strong>
                </p>
              </motion.div>

              {/* Card 04 - Spans 8 cols */}
              <motion.div 
                whileHover={{ y: -4, backgroundColor: 'rgba(245,158,11,0.08)', borderColor: 'rgba(245,158,11,0.2)' }}
                transition={{ duration: 0.3 }}
                style={{ gridColumn: isMobile ? 'span 1' : 'span 8', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '32px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ position: 'absolute', right: '-20px', bottom: '-40px', fontSize: '180px', fontWeight: 800, color: 'rgba(245,158,11,0.05)', lineHeight: 1, pointerEvents: 'none', fontFamily: "'Syne', sans-serif" }}>04</div>
                <div style={{ color: 'rgb(245,158,11)', fontSize: '14px', fontWeight: 700, letterSpacing: '1px', marginBottom: '16px', fontFamily: "'Syne', sans-serif" }}>AI INTEGRATION</div>
                <p style={{ fontSize: isMobile ? '16px' : '22px', color: '#e5e5e5', lineHeight: 1.5, margin: 0, fontFamily: "'Jost', sans-serif", position: 'relative', zIndex: 1 }}>
                  AI integrated under one hard rule, reapplied independently in two unrelated features: <strong style={{color:'#fff', fontWeight: 600}}>it may classify and ask - it may never do the student's thinking for them.</strong>
                </p>
              </motion.div>

              {/* Card 05 - Spans 12 cols */}
              <motion.div 
                whileHover={{ y: -4, backgroundColor: 'rgba(245,158,11,0.08)', borderColor: 'rgba(245,158,11,0.2)' }}
                transition={{ duration: 0.3 }}
                style={{ gridColumn: isMobile ? 'span 1' : 'span 12', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '32px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '32px' }}
              >
                <div style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', fontSize: '240px', fontWeight: 800, color: 'rgba(245,158,11,0.03)', lineHeight: 1, pointerEvents: 'none', fontFamily: "'Syne', sans-serif" }}>05</div>
                <div style={{ position: 'relative', zIndex: 1, flex: 1 }}>
                  <div style={{ color: 'rgb(245,158,11)', fontSize: '14px', fontWeight: 700, letterSpacing: '1px', marginBottom: '16px', fontFamily: "'Syne', sans-serif" }}>SECOND RESEARCH PASS</div>
                  <p style={{ fontSize: isMobile ? '16px' : '24px', color: '#e5e5e5', lineHeight: 1.5, margin: 0, fontFamily: "'Jost', sans-serif", maxWidth: '900px' }}>
                    A second, later research pass added an entire retrieval-practice study system (spaced repetition, Feynman-technique explain-back, practice exams) on top of the original clipping product - <strong style={{color:'#fff', fontWeight: 500}}>same principles, new surface.</strong>
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* 03 THE PROBLEM */}
      <section style={{ padding: isMobile ? '64px 0' : '120px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(145deg, rgba(244,63,94,0.06) 0%, rgba(10,10,10,0) 45%, rgba(10,10,10,0) 100%)', border: '1px solid rgba(244,63,94,0.12)', borderRadius: '32px', padding: isMobile ? '16px' : '64px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(244,63,94,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <SectionHeader number="03" title="THE PROBLEM" isMobile={isMobile} themeColorRGB="244,63,94" iconType="warning" />
            <h2 style={{ fontSize: isMobile ? '28px' : 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#fff', lineHeight: 1.1, letterSpacing: '0', maxWidth: '1100px', margin: 0, marginBottom: isMobile ? '32px' : '64px' }}>
              The collector's fallacy
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              <div className="lg:col-span-7" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: isMobile ? '16px' : '20px', color: '#e5e5e5', lineHeight: 1.5, letterSpacing: '0', margin: 0, marginBottom: '24px' }}>
                  Saving feels like learning. It isn't. Students highlight, bookmark, and hoard - then never return. Existing tools make this worse: they optimize for capture volume and lock the archive inside their own app, so the pile grows somewhere the student never looks again. Two of the biggest names in this exact category - Pocket and Omnivore - both shut down within the last two years and took users' archives with them.
                </p>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: isMobile ? '20px' : '24px' }}>
                  <div style={{ color: '#fff', fontSize: isMobile ? '16px' : '20px', fontWeight: 600, marginBottom: '8px' }}>The Insight</div>
                  <p style={{ color: '#D4D4D4', fontSize: isMobile ? '16px' : '18px', lineHeight: 1.5, margin: 0 }}>
                    The enemy isn't friction. It's false productivity. <span style={{fontWeight: 400, color: '#fff'}}>Every later decision traces back to this.</span>
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <img 
                  src={thePileImg} 
                  alt="The Pile of chaotic research tabs" 
                  style={{ width: '100%', height: 'auto', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)' }} 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* 04 WHO IT'S FOR */}
      <section style={{ padding: isMobile ? '64px 0' : '120px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(145deg, rgba(139,92,246,0.06) 0%, rgba(10,10,10,0) 45%, rgba(10,10,10,0) 100%)', border: '1px solid rgba(139,92,246,0.12)', borderRadius: '32px', padding: isMobile ? '16px' : '64px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <SectionHeader number="04" title="WHO IT'S FOR" isMobile={isMobile} themeColorRGB="139,92,246" iconType="nodes" />
            <h2 style={{ fontSize: isMobile ? '28px' : 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#fff', lineHeight: 1.1, letterSpacing: '0', maxWidth: '1100px', margin: 0, marginBottom: isMobile ? '32px' : '64px' }}>
              One persona, done deeply
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              <div className="lg:col-span-7" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: isMobile ? '16px' : '20px', color: '#e5e5e5', lineHeight: 1.5, letterSpacing: '0', margin: 0, marginBottom: '24px' }}>
                  <strong style={{color:'#fff', fontWeight: 500}}>The student researcher</strong> - writing essays and studying from articles and lecture videos. Their real workflow: gather → quote → cite → cram. Two fears sit underneath every session: <em>losing their sources</em>, and <em>plagiarizing by accident</em>.
                </p>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: isMobile ? '20px' : '24px' }}>
                  <div style={{ color: '#fff', fontSize: isMobile ? '16px' : '20px', fontWeight: 600, marginBottom: '8px' }}>The Job-to-be-Done</div>
                  <p style={{ color: '#D4D4D4', fontSize: isMobile ? '16px' : '18px', lineHeight: 1.5, margin: 0 }}>
                    When they find a good quote, it's simple: <strong style={{color:'#fff', fontWeight: 500}}>"capture it with its provenance, so citing it later is free."</strong>
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <img 
                  src={personaTimelineImg} 
                  alt="A sleek timeline of a student's research week" 
                  style={{ width: '100%', height: 'auto', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)' }} 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* 05 PRODUCT THESIS */}
      <section style={{ padding: isMobile ? '64px 0' : '120px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(145deg, rgba(59,130,246,0.06) 0%, rgba(10,10,10,0) 45%, rgba(10,10,10,0) 100%)', border: '1px solid rgba(59,130,246,0.12)', borderRadius: '32px', padding: isMobile ? '16px' : '64px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <SectionHeader number="05" title="PRODUCT THESIS & DESIGN PRINCIPLES" isMobile={isMobile} themeColorRGB="59,130,246" iconType="target" />
            <h2 style={{ fontSize: isMobile ? '28px' : 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#fff', lineHeight: 1.1, letterSpacing: '0', maxWidth: '1100px', margin: 0, marginBottom: '24px' }}>
              Four tiebreakers, not four posters
            </h2>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: isMobile ? '16px' : '20px', color: '#e5e5e5', lineHeight: 1.5, letterSpacing: '0', margin: 0, marginBottom: isMobile ? '40px' : '64px', maxWidth: '800px' }}>
              Good UX for learners is mostly restraint - the product's job is to disappear into the user's own work, never to trap them in ours.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '24px', marginBottom: '48px' }}>
              {[
                { num: '01', title: 'The Google Doc is the real product', desc: 'SnipKeep is just how content got there. If it vanished tomorrow, nothing is lost. A one-time Trust Card says this to the user directly, with a live link to their own Doc.' },
                { num: '02', title: 'No server, ever', desc: 'Privacy isn\'t a policy, it\'s an architecture. The Privacy Ledger gives a literal account of what leaves the device: three green checks, one honest red ✕ - "A SnipKeep server - there isn\'t one."' },
                { num: '03', title: 'No shame mechanics', desc: 'No streaks, no guilt, no delete-if-unread countdowns - a deliberate rejection of punitive competitor patterns. Every nudge is zero-consequence to ignore.' },
                { num: '04', title: 'Invisible by default', desc: 'Optional features render nothing until opted in. The entire AI layer is absent from every menu until a key is connected - never shown disabled.' }
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(59,130,246,0.04)', borderLeft: '3px solid rgba(59,130,246,0.3)', padding: '24px', borderRadius: '4px 16px 16px 4px' }}>
                  <div style={{ color: 'var(--semantic-success)', fontSize: '14px', fontWeight: 600, fontFamily: "'Syne', sans-serif", marginBottom: '8px' }}>{item.num}</div>
                  <h4 style={{ fontSize: '20px', color: '#fff', fontWeight: 600, marginBottom: '12px', fontFamily: "'Jost', sans-serif" }}>{item.title}</h4>
                  <p style={{ fontSize: isMobile ? '14px' : '16px', color: '#D4D4D4', lineHeight: 1.5, fontFamily: "'Jost', sans-serif", margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '32px' }}>
              <div><ScreenshotMockup src={trustCardImg} alt="SnipKeep's one-time Trust Card screen" /></div>
              <div><ScreenshotMockup src={privacyLedgerImg} alt="SnipKeep's Privacy Ledger showing three checks and one honest red X" /></div>
            </div>
            <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.5)', fontSize: '14px', fontFamily: "'Jost', sans-serif" }}>
              The one-time Trust Card screen (left) vs the Privacy Ledger's literal three-checks-one-✕ account of what leaves the device (right) — both live captures from the real extension.
            </p>
          </motion.div>
        </div>
      </section>



      {/* 06 RESEARCH -> ROADMAP */}
      <section style={{ padding: isMobile ? '64px 0' : '120px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(145deg, rgba(16,185,129,0.06) 0%, rgba(10,10,10,0) 45%, rgba(10,10,10,0) 100%)', border: '1px solid rgba(16,185,129,0.12)', borderRadius: '32px', padding: isMobile ? '16px' : '64px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <SectionHeader number="06" title="RESEARCH → ROADMAP" isMobile={isMobile} themeColorRGB="16,185,129" iconType="path" />
            <h2 style={{ fontSize: isMobile ? '28px' : 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#fff', lineHeight: 1.1, letterSpacing: '0', maxWidth: '1100px', margin: 0, marginBottom: '24px' }}>
              A competitor + behavioral-psychology research pass
            </h2>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: isMobile ? '16px' : '20px', color: '#e5e5e5', lineHeight: 1.5, letterSpacing: '0', margin: 0, marginBottom: '40px', maxWidth: '900px' }}>
              The core thesis came from a research report comparing SnipKeep against every read-later/clipper competitor: Pocket and Omnivore both stored user archives in a database <em>they</em> controlled - both died in the last 18 months, and took those archives with them. That's the structural trust advantage the roadmap below was built to make visible and protect.
            </p>

            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: isMobile ? '20px' : '32px', marginBottom: '48px' }}>
              <div style={{ color: '#fff', fontSize: isMobile ? '18px' : '22px', fontWeight: 600, marginBottom: '16px', fontFamily: "'Jost', sans-serif" }}>Ground rules for anything built after the research pass</div>
              <ol style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0, fontFamily: "'Jost', sans-serif", paddingLeft: '20px', listStyleType: 'decimal' }}>
                <li style={{ marginBottom: '12px' }}>Never let "investment" become lock-in - notes, tags, citations, deadlines all stay in the user's own Doc or local device storage, never in a SnipKeep-only database.</li>
                <li style={{ marginBottom: '12px' }}>No punitive/shame mechanics - a deliberate rejection of delete-if-unread-style patterns seen in competitor research.</li>
                <li style={{ marginBottom: '12px' }}>Any feature needing real backend infrastructure gets treated with real caution (opt-in, anonymized, audited) - the one deferred exception in the whole roadmap.</li>
                <li style={{ marginBottom: '12px' }}>Every feature defaults to invisible/zero-friction for a user who doesn't touch it.</li>
              </ol>
            </div>

            <h4 style={{ fontSize: '20px', color: '#fff', fontWeight: 600, marginBottom: '24px', fontFamily: "'Jost', sans-serif" }}>Shipped - 8 of 11 report features</h4>
            
            <div style={{ overflowX: 'auto', marginBottom: '32px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}>
              <table style={{ width: '100%', minWidth: '600px', borderCollapse: 'collapse', textAlign: 'left', fontFamily: "'Jost', sans-serif", fontSize: '16px' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <th style={{ padding: '16px', color: 'var(--semantic-success)' }}>#</th>
                    <th style={{ padding: '16px', color: 'var(--semantic-success)' }}>FEATURE</th>
                    <th style={{ padding: '16px', color: 'var(--semantic-success)' }}>ONE-LINE</th>
                    <th style={{ padding: '16px', color: 'var(--semantic-success)' }}>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: '1', feature: 'Privacy Ledger', desc: 'Honest, literal account of what leaves the device', status: 'SHIPPED', statusColor: '#7928CA' },
                    { id: '2', feature: 'Trust Card', desc: '"Your Doc is the real thing" - shown once, with a real link to it', status: 'SHIPPED', statusColor: '#7928CA' },
                    { id: '3', feature: 'Link-Rot Insurance', desc: 'Best-effort Wayback Machine snapshot, written back into the Doc', status: 'SHIPPED', statusColor: '#7928CA' },
                    { id: '4', feature: <s style={{opacity: 0.5}}>Soft Triage ("Someday")</s>, desc: <s style={{opacity: 0.5}}>Optional tag + "still relevant?" check-in</s>, status: 'REMOVED', statusColor: 'var(--semantic-error)' },
                    { id: '5', feature: 'Gentle Reflection Nudge', desc: "Soft one-liner after several note-less clips - targets the collector's fallacy", status: 'SHIPPED', statusColor: '#7928CA' },
                    { id: '6', feature: 'Deadline-Aware Citations', desc: 'Calm→warn→danger countdown + uncited-clip count', status: 'SHIPPED', statusColor: '#7928CA' },
                    { id: '7', feature: 'Assignment / Project Mode', desc: 'Mark a Doc "done" → moves to its own Completed tab', status: 'SHIPPED', statusColor: '#7928CA' },
                    { id: '8', feature: 'Living Resurface', desc: 'Writes a freshly dated note back into the Doc at any bookmarked clip', status: 'SHIPPED', statusColor: '#7928CA' },
                    { id: '10', feature: <s style={{opacity: 0.5}}>Topic Auto-Clustering</s>, desc: <s style={{opacity: 0.5}}>Tag/domain chips above search</s>, status: 'KILLED', statusColor: 'var(--semantic-error)' },
                    { id: '✨', feature: 'Resurfaced', desc: 'Daily spotlight of one old clip', status: 'PAUSED', statusColor: '#eab308' },
                    { id: '9', feature: 'Weekly Synthesis Digest', desc: "Opt-in weekly clustering of that week's clips", status: 'DEFERRED', statusColor: '#6b7280' },
                    { id: '11', feature: 'Anonymous Highlight Signal', desc: '"14 people also highlighted this" - needs real backend + privacy review', status: 'DEFERRED', statusColor: '#6b7280' },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '16px', color: '#D4D4D4' }}>{row.id}</td>
                      <td style={{ padding: '16px', color: '#fff', fontWeight: 500 }}>{row.feature}</td>
                      <td style={{ padding: '16px', color: '#D4D4D4' }}>{row.desc}</td>
                      <td style={{ padding: '16px' }}>
                        <span style={{ fontSize: '12px', fontWeight: 600, fontFamily: "'Syne', sans-serif", background: 'rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '4px', color: row.statusColor }}>{row.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0, fontFamily: "'Jost', sans-serif" }}>
              <strong style={{color:'#fff'}}>Why the strikethroughs matter more than the checkmarks:</strong> a roadmap with visible kills is more credible than a clean one. Topic Auto-Clustering shipped, then got deleted outright - not paused - once real archive sizes showed the chips carried no signal (a domain chip covering ~100% of clips filters to "everything"). One capability was salvaged: search now also matches source URLs.
            </p>
          </motion.div>
        </div>
      </section>



      {/* 07 DESIGN SYSTEM */}
      <section style={{ padding: isMobile ? '64px 0' : '120px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(145deg, rgba(236,72,153,0.06) 0%, rgba(10,10,10,0) 45%, rgba(10,10,10,0) 100%)', border: '1px solid rgba(236,72,153,0.12)', borderRadius: '32px', padding: isMobile ? '16px' : '64px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <SectionHeader number="07" title="DESIGN SYSTEM - SMALL, STRICT, VERIFIED" isMobile={isMobile} themeColorRGB="236,72,153" iconType="layers" />
            <h2 style={{ fontSize: isMobile ? '28px' : 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#fff', lineHeight: 1.1, letterSpacing: '0', maxWidth: '1100px', margin: 0, marginBottom: '24px' }}>
              "Ink & Highlighter" - engineered, not curated
            </h2>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: isMobile ? '16px' : '20px', color: '#e5e5e5', lineHeight: 1.5, letterSpacing: '0', margin: 0, marginBottom: '40px', maxWidth: '900px' }}>
              The palette shipped once as an electric-violet accent, then was fully replaced mid-project by "Ink & Highlighter": warm ink-black surfaces plus one marker-yellow accent - chosen after a three-way OKLCH/APCA-checked study, and semantically motivated: the product <em>is</em> a highlighter.
            </p>
            
            {/* Palette Swatches */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
              {[
                { label: '--bg', hex: '#100D08' },
                { label: '--card', hex: '#24201A' },
                { label: '--accent', hex: '#F4E151' },
                { label: '--text', hex: '#EAE8E3' },
                { label: '--warn', hex: '#E78A45' },
                { label: '--danger', hex: '#FF6B6B' },
              ].map((color, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '8px', background: color.hex, border: '1px solid rgba(255,255,255,0.2)', marginBottom: '8px' }}></div>
                  <div style={{ fontSize: '12px', fontFamily: "'Syne', sans-serif", color: '#fff' }}>{color.label}</div>
                  <div style={{ fontSize: '10px', color: '#888' }}>{color.hex}</div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, marginBottom: '24px', fontFamily: "'Jost', sans-serif" }}>
              <strong style={{color:'#fff'}}>The star exhibit - the ceiling is a computed number, not taste.</strong> The "active pill" accent-tint fill is capped at <strong>0.34 alpha</strong> because accent-colored text on it computes to <strong>4.63:1</strong> contrast (WCAG AA passes at 4.5:1); the everyday tint used elsewhere sits at 0.18 alpha, which computes to a much safer <strong>7.45:1</strong>. When the whole palette was replaced mid-project, this ceiling was <em>recomputed from scratch</em> against the new accent rather than carried over by assumption.
            </p>
            <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, marginBottom: '40px', fontFamily: "'Jost', sans-serif" }}>
              Text ramp is WCAG-locked with a hard floor: the tertiary gray (#979189) can't legibly go dimmer than 5.2:1 on a card, 6.2:1 on the page background. Even the note ink written into the actual Google Doc is accounted for - a dark marker-yellow, #71631D, computing to 6.0:1 on the Doc's white page.
            </p>
            
            <h4 style={{ fontSize: '20px', color: '#fff', fontWeight: 600, marginBottom: '16px', fontFamily: "'Jost', sans-serif" }}>Spacing & type</h4>
            <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, marginBottom: '40px', fontFamily: "'Jost', sans-serif" }}>
              A 4px grid (4/8/12/16/20/24 as tokens) and a real bug that produced a rule: "never stack a child margin on a parent flex gap." A 22px gap plus per-child margins once produced 32–34px real gaps in production - traced and fixed, then written down so it wouldn't recur.
            </p>
            <h4 style={{ fontSize: '20px', color: '#fff', fontWeight: 600, marginBottom: '16px', fontFamily: "'Jost', sans-serif" }}>Icons</h4>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr', gap: '24px', marginBottom: '32px' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px' }}>
                <div style={{ color: 'var(--semantic-success)', fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>~25</div>
                <div style={{ color: '#888', fontSize: '14px', fontFamily: "'Jost', sans-serif" }}>call sites migrated</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px' }}>
                <div style={{ color: 'var(--semantic-success)', fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>17</div>
                <div style={{ color: '#888', fontSize: '14px', fontFamily: "'Jost', sans-serif" }}>distinct icons</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px' }}>
                <div style={{ color: 'var(--semantic-success)', fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>~8.7KB</div>
                <div style={{ color: '#888', fontSize: '14px', fontFamily: "'Jost', sans-serif" }}>added to the bundle</div>
              </div>
            </div>
            <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, marginBottom: '40px', fontFamily: "'Jost', sans-serif" }}>
              An inconsistent mix of emoji (rendered differently per OS, colorful against an otherwise monochrome UI) was migrated to a tree-shaken Material icon set - chosen over bundling Google's full icon font specifically to keep that number small.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '32px' }}>
              <div><PlaceholderMockup text="TOKEN SHEET" height="250px" /></div>
              <div><PlaceholderMockup text="BEFORE / AFTER ICONS" height="250px" /></div>
            </div>
            <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', fontSize: '14px', fontFamily: "'Jost', sans-serif" }}>
              [PLACEHOLDER, left: the full token sheet with contrast ratios annotated next to each swatch. PLACEHOLDER, right: a side-by-side of a card before (mixed emoji) and after (Material icon set).]
            </p>
          </motion.div>
        </div>
      </section>



      {/* 08 CORE FLOWS */}
      <section style={{ padding: isMobile ? '64px 0' : '120px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(145deg, rgba(14,165,233,0.06) 0%, rgba(10,10,10,0) 45%, rgba(10,10,10,0) 100%)', border: '1px solid rgba(14,165,233,0.12)', borderRadius: '32px', padding: isMobile ? '16px' : '64px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <SectionHeader number="08" title="CORE FLOWS" isMobile={isMobile} themeColorRGB="14,165,233" iconType="flow" />
            <h2 style={{ fontSize: isMobile ? '28px' : 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#fff', lineHeight: 1.1, letterSpacing: '0', maxWidth: '1100px', margin: 0, marginBottom: '40px' }}>
              Three end-to-end walkthroughs
            </h2>
            
            <div style={{ marginBottom: '64px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: "'Jost', sans-serif" }}>1 - Capture</h3>
              <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, marginBottom: '24px', fontFamily: "'Jost', sans-serif" }}>
                Select text → floating toolbar appears → save. Layers of depth: a bare clip, a margin note ("your take"), a <em>voice</em> note (speak it instead of typing - silence auto-stops <em>listening</em> but never auto-saves, preserving one review beat always), a fully keyboard-first path (Enter saves, an ↵ badge teaches the shortcut), preserved hyperlinks, and right-click image capture.
              </p>
              <ScreenshotMockup src={toolbarMidSelectionImg} alt="SnipKeep's floating toolbar appearing over a text selection on Wikipedia" />
              <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.5)', fontSize: '14px', fontFamily: "'Jost', sans-serif" }}>
                The floating toolbar appearing over a live text selection, save/note/menu options visible.
              </p>
            </div>

            <div style={{ marginBottom: '64px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: "'Jost', sans-serif" }}>2 - The Doc as artifact</h3>
              <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, marginBottom: '24px', fontFamily: "'Jost', sans-serif" }}>
                This is the money shot of the whole study: <strong>the deliverable is theirs, not ours.</strong> A heading per article, a grey provenance caption, bulleted quotes, italic dark-gold margin notes, an auto-maintained Works Cited section, archive links, and lecture timestamps - all written straight into a Doc the student already owns.
              </p>
              <ScreenshotMockup src={googleDocFullImg} alt="A real, populated SnipKeep research Doc with headings, provenance captions, and bulleted quotes" />
              <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.5)', fontSize: '14px', fontFamily: "'Jost', sans-serif" }}>
                A real, populated research Doc — a heading per article, a grey provenance caption, and bulleted quotes, all written straight in by the extension.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: "'Jost', sans-serif" }}>3 - Revisit & cite</h3>
              <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, marginBottom: '24px', fontFamily: "'Jost', sans-serif" }}>
                History with full-text search (also matches source URLs), #tag filter chips, per-clip Cite with the style picked at the moment of citing (an earlier persistent "Cite as" strip was removed - most users never cite, so the jargon shouldn't own prime space), deadlines with calm→warn→danger escalation, and a Completed tab for finished projects.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '32px' }}>
                <div><ScreenshotMockup src={docsDeadlinePillsImg} alt="SnipKeep Docs list with deadline pills in their overdue/warn state" /></div>
                <div><ScreenshotMockup src={historyHoverActionsImg} alt="SnipKeep History list with one card's hover actions expanded: Source, Doc, Cite" /></div>
              </div>
              <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.5)', fontSize: '14px', fontFamily: "'Jost', sans-serif" }}>
                Deadline pills in their overdue state (left) and a History card's hover actions expanded — Source / Doc / Cite (right).
              </p>
            </div>
          </motion.div>
        </div>
      </section>



      {/* 09 FEATURE DEEP-DIVES */}
      <section style={{ padding: isMobile ? '64px 0' : '120px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(145deg, rgba(99,102,241,0.06) 0%, rgba(10,10,10,0) 45%, rgba(10,10,10,0) 100%)', border: '1px solid rgba(99,102,241,0.12)', borderRadius: '32px', padding: isMobile ? '16px' : '64px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <SectionHeader number="09" title="FEATURE DEEP-DIVES" isMobile={isMobile} themeColorRGB="99,102,241" iconType="magnify" />
            <h2 style={{ fontSize: isMobile ? '28px' : 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#fff', lineHeight: 1.1, letterSpacing: '0', maxWidth: '1100px', margin: 0, marginBottom: '40px' }}>
              Four stories: problem → options → principle → shipped → learned
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              <div style={{ borderLeft: '4px solid var(--semantic-success)', paddingLeft: '24px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#fff', marginBottom: '8px', fontFamily: "'Jost', sans-serif" }}>Works Cited, auto-maintained</h3>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px', fontFamily: "'Syne', sans-serif" }}>REBUILD, DON'T APPEND</div>
                <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, marginBottom: '24px', fontFamily: "'Jost', sans-serif" }}>
                  Per-clip citations existed but assembling a real bibliography was still manual. Now every Cite click rebuilds a "Works Cited" block at the true end of the Doc - deduplicated by source page, alphabetized, and re-rendered entirely in whichever style was just picked. Live testing found a real bug: re-citing an already-cited clip in a new style updated the clipboard but not the Doc. The fix - rebuilding on <em>every</em> successful cite, not patching one entry - made the whole list style-consistent as a side effect. One user report ("my citation got replaced") turned out to be correct dedup behavior; the fix there was an explanation, not code.
                </p>
                <ScreenshotMockup src={worksCitedBlockImg} alt="An auto-generated Works Cited block, alphabetized with real citation URLs" />
              </div>

              <div style={{ borderLeft: '4px solid var(--semantic-success)', paddingLeft: '24px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#fff', marginBottom: '8px', fontFamily: "'Jost', sans-serif" }}>Lecture-timestamp clipping</h3>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px', fontFamily: "'Syne', sans-serif" }}>THE INVISIBLE DESIGN WORK</div>
                <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, marginBottom: '24px', fontFamily: "'Jost', sans-serif" }}>
                  A clip from a 90-minute YouTube lecture used to point at the video, not the moment. Now it carries the exact video timestamp - the transcript line's own timestamp when available, else playback time - as a " · 43:21" link that reopens the lecture right there. The trap avoided: the timestamp is never baked into the clip's URL, because that URL doubles as page identity across five other subsystems (grouping, dedup, archiving). A naive &t=43s would have made every clip from one lecture look like a different source.
                </p>
                <PlaceholderMockup text="DOC BULLET WITH TIMESTAMP LINK" height="150px" />
              </div>

              <div style={{ borderLeft: '4px solid var(--semantic-success)', paddingLeft: '24px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#fff', marginBottom: '8px', fontFamily: "'Jost', sans-serif" }}>Voice notes</h3>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px', fontFamily: "'Syne', sans-serif" }}>TWO FAILED ARCHITECTURES FIRST</div>
                <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, marginBottom: '24px', fontFamily: "'Jost', sans-serif" }}>
                  Chrome's offscreen documents can never obtain microphone permission - confirmed twice by live testing, including a pre-grant attempt. The shipped design runs speech recognition in a real, backgrounded tab instead. The interaction design: silence auto-stops <em>listening</em> (a 1.8s pause once speaking begins) but never <em>auto-saves</em>, since transcription is imperfect and a review beat matters. A real bug - manually correcting a mis-heard word mid-recording got silently overwritten by the next transcript update - was fixed by switching to append-mode the instant a manual edit is detected.
                </p>
                <ScreenshotMockup src={voiceNoteRecordingImg} alt="A voice note mid-recording, live transcript visible, mic active" />
              </div>

              <div style={{ borderLeft: '4px solid var(--semantic-success)', paddingLeft: '24px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#fff', marginBottom: '8px', fontFamily: "'Jost', sans-serif" }}>Bring-your-own-AI layer</h3>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px', fontFamily: "'Syne', sans-serif" }}>THE PHILOSOPHY CAME BEFORE ANY CODE</div>
                <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, marginBottom: '24px', fontFamily: "'Jost', sans-serif" }}>
                  <strong>AI may classify and ask questions; it may never do the student's thinking.</strong> A user connects their own OpenAI, Anthropic, or Gemini key - validated against a free endpoint, stored device-local (never synced, never seen by any SnipKeep server), invisible in every menu until connected. Live debugging surfaced three real findings: a generic "key rejected" error was hiding the actual cause (Anthropic blocking direct browser requests without an explicit opt-in header); and a genuine UX finding - users assume a Claude Pro subscription includes API access. It doesn't. The surfaced error text became the diagnostic.
                </p>
                <ScreenshotMockup src={aiConnectScreenImg} alt="The bring-your-own-AI-key connection screen, showing a connected, redacted key" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* 09B A SECOND RESEARCH PASS */}
      <section style={{ padding: isMobile ? '64px 0' : '120px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(145deg, rgba(132,204,22,0.06) 0%, rgba(10,10,10,0) 45%, rgba(10,10,10,0) 100%)', border: '1px solid rgba(132,204,22,0.12)', borderRadius: '32px', padding: isMobile ? '16px' : '64px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(132,204,22,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <SectionHeader number="09B" title="A SECOND RESEARCH PASS - THE STUDY TAB" isMobile={isMobile} themeColorRGB="132,204,22" iconType="cycle" />
            <h2 style={{ fontSize: isMobile ? '28px' : 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#fff', lineHeight: 1.1, letterSpacing: '0', maxWidth: '1100px', margin: 0, marginBottom: '24px' }}>
              Retrieval-first learning, built on top of the clipping product
            </h2>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: isMobile ? '16px' : '20px', color: '#e5e5e5', lineHeight: 1.5, letterSpacing: '0', margin: 0, marginBottom: '40px', maxWidth: '900px' }}>
              A later, separate research pass (learning-science literature: the testing effect, spaced exposure, the generation effect) produced a full study surface - the newest and largest part of the product today. The same ground rule from the AI layer above was independently rediscovered here and applied again: <strong>AI asks and classifies; it never digests the material for the student.</strong>
            </p>
            
            <div style={{ overflowX: 'auto', marginBottom: '40px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}>
              <table style={{ width: '100%', minWidth: '600px', borderCollapse: 'collapse', textAlign: 'left', fontFamily: "'Jost', sans-serif", fontSize: '16px' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <th style={{ padding: '16px', color: 'var(--semantic-success)' }}>FEATURE</th>
                    <th style={{ padding: '16px', color: 'var(--semantic-success)' }}>WHAT IT DOES</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { f: 'Retrieval Flip', d: 'Every saved clip quietly gets one AI-drafted question attached to it' },
                    { f: 'Five-Minute Review', d: 'A spaced-repetition ladder (1 → 3 → 7 → 14 → 30 → 60 days) resurfaces due questions' },
                    { f: 'Teach-It-Back', d: 'Explain a doc out loud; AI classifies covered / missing / conflicting - never grades' },
                    { f: 'Predict-First', d: 'Pauses chaptered YouTube lectures, alternating recall and predict prompts' },
                    { f: 'PACER Board', d: 'AI sorts clips into Procedural / Analogical / Conceptual / Evidence / Reference; drag to correct' },
                    { f: 'Exam Forge', d: "A practice exam forged fresh from a doc's own clips - written or multiple choice" },
                    { f: 'Knowledge Heat', d: 'Collected-vs-recalled shown as two bars on one scale - no percentages, no red, no streaks' },
                    { f: 'Study Pact', d: "A weekly review schedule synced to the student's own Google Calendar" },
                    { f: <s style={{opacity: 0.5}}>Confusion Flag</s>, d: <s style={{opacity: 0.5}}>BUILT + REVERTED SAME DAY</s> }
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '16px', color: '#fff', fontWeight: 500 }}>{row.f}</td>
                      <td style={{ padding: '16px', color: '#D4D4D4' }}>{row.d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, marginBottom: '40px', fontFamily: "'Jost', sans-serif" }}>
              Exam Forge in particular went through several rapid rounds of live iteration: an exit-confirm shared identically between its own button and every Sidebar navigation link (not two separate prompts for one decision); mandatory completion before submission, with a question-jump palette instead of a hidden progress counter; and always-visible correct answers for both formats after a written/MCQ asymmetry was caught live.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '32px' }}>
              <div><ScreenshotMockup src={pacerBoardImg} alt="The PACER board sorting real clips into Procedural, Analogical, Conceptual, Evidence, and Reference columns" /></div>
              <div><ScreenshotMockup src={knowledgeHeatImg} alt="The Overview page's Knowledge Heat section, collected vs recalled bars for two real docs" /></div>
            </div>
            <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.5)', fontSize: '14px', fontFamily: "'Jost', sans-serif" }}>
              The PACER board sorting real clips (left), and the Overview page's Knowledge Heat section — collected/recalled bars for real docs (right).
            </p>
          </motion.div>
        </div>
      </section>



      {/* 10 MOTION */}
      <section style={{ padding: isMobile ? '64px 0' : '120px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(145deg, rgba(245,158,11,0.06) 0%, rgba(10,10,10,0) 45%, rgba(10,10,10,0) 100%)', border: '1px solid rgba(245,158,11,0.12)', borderRadius: '32px', padding: isMobile ? '16px' : '64px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <SectionHeader number="10" title="MOTION & MICROINTERACTION CRAFT" isMobile={isMobile} themeColorRGB="245,158,11" iconType="wave" />
            <h2 style={{ fontSize: isMobile ? '28px' : 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#fff', lineHeight: 1.1, letterSpacing: '0', maxWidth: '1100px', margin: 0, marginBottom: '24px' }}>
              The toggle-reorder saga - wrong fixes first
            </h2>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: isMobile ? '16px' : '20px', color: '#e5e5e5', lineHeight: 1.5, letterSpacing: '0', margin: 0, marginBottom: '40px', maxWidth: '900px' }}>
              Toggling a doc card active/inactive reorders the whole list, animated with FLIP (measure each card's position before and after, play the delta as a slide) using the Web Animations API - chosen over CSS transitions because setting an inline CSS transition <em>replaces</em> a card's own hover transition outright.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, fontFamily: "'Syne', sans-serif", background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', padding: '4px 8px', borderRadius: '4px', whiteSpace: 'nowrap' }}>VERIFIED</span>
                <p style={{ margin: 0, fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, fontFamily: "'Jost', sans-serif" }}>Easing checked numerically, not by eye: Material's "standard" curve has a zero tangent at t=0 yet reaches ~24% progress by 25% of duration - near-linear in practice. The chosen curve reaches only ~7% by the same point: genuinely slow at both ends.</p>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, fontFamily: "'Syne', sans-serif", background: 'rgba(244, 63, 94, 0.1)', color: '#f43f5e', padding: '4px 8px', borderRadius: '4px', whiteSpace: 'nowrap' }}>WRONG FIX #1</span>
                <p style={{ margin: 0, fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, fontFamily: "'Jost', sans-serif" }}>User reported a "sudden jerk" on toggle. GPU layer promotion (<code style={{background:'rgba(255,255,255,0.1)', padding:'2px 4px', borderRadius:'4px', fontSize:'14px'}}>will-change</code>) - a real improvement, but not the actual cause.</p>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, fontFamily: "'Syne', sans-serif", background: 'rgba(244, 63, 94, 0.1)', color: '#f43f5e', padding: '4px 8px', borderRadius: '4px', whiteSpace: 'nowrap' }}>WRONG FIX #2</span>
                <p style={{ margin: 0, fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, fontFamily: "'Jost', sans-serif" }}>A 140ms hold before the slide ("click, pause, move") - made it worse.</p>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, fontFamily: "'Syne', sans-serif", background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', padding: '4px 8px', borderRadius: '4px', whiteSpace: 'nowrap' }}>ROOT CAUSE</span>
                <p style={{ margin: 0, fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, fontFamily: "'Jost', sans-serif" }}>With <code style={{background:'rgba(255,255,255,0.1)', padding:'2px 4px', borderRadius:'4px', fontSize:'14px'}}>fill: 'none'</code>, a delayed animation applies no keyframes during its delay - so the card jumped to its final spot, sat there, jumped back, then slid. <code style={{background:'rgba(255,255,255,0.1)', padding:'2px 4px', borderRadius:'4px', fontSize:'14px'}}>fill: 'backwards'</code> was the one-word fix.</p>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, fontFamily: "'Syne', sans-serif", background: 'rgba(99, 102, 241, 0.1)', color: '#6366f1', padding: '4px 8px', borderRadius: '4px', whiteSpace: 'nowrap' }}>PRINCIPLE</span>
                <p style={{ margin: 0, fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, fontFamily: "'Jost', sans-serif" }}>"Data arriving is not movement" - an async docs list load meant the first render was always empty and the second populated; anything existing in both renders ghost-slid on open until a guard distinguished data-arrival from an actual reorder.</p>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, fontFamily: "'Syne', sans-serif", background: 'rgba(168, 85, 247, 0.1)', color: '#a855f7', padding: '4px 8px', borderRadius: '4px', whiteSpace: 'nowrap' }}>FINAL LESSON</span>
                <p style={{ margin: 0, fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, fontFamily: "'Jost', sans-serif" }}>From direct user feedback ("keep it simple and minimal") on an over-choreographed animation: two motion registers. Slow symmetric curves for system-initiated rearrangement; a fast ease-out for direct user commands. A user-invoked control on the system's clock reads as laggy, not gentle.</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '32px' }}>
              <div><PlaceholderMockup text="EASING CURVES PLOTTED" height="250px" /></div>
              <div><PlaceholderMockup text="REORDER - SCREEN RECORDING" height="250px" /></div>
            </div>
            <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', fontSize: '14px', fontFamily: "'Jost', sans-serif" }}>
              [PLACEHOLDER, left: the two bezier curves (Material standard vs. chosen) plotted on the same axes. PLACEHOLDER, right: a short screen recording of the card reorder, before/after the fill:'backwards' fix.]
            </p>
          </motion.div>
        </div>
      </section>



      {/* 11 DESIGNING BY SUBTRACTION */}
      <section style={{ padding: isMobile ? '64px 0' : '120px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(145deg, rgba(239,68,68,0.06) 0%, rgba(10,10,10,0) 45%, rgba(10,10,10,0) 100%)', border: '1px solid rgba(239,68,68,0.12)', borderRadius: '32px', padding: isMobile ? '16px' : '64px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(239,68,68,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <SectionHeader number="11" title="DESIGNING BY SUBTRACTION" isMobile={isMobile} themeColorRGB="239,68,68" iconType="subtract" />
            <h2 style={{ fontSize: isMobile ? '28px' : 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#fff', lineHeight: 1.1, letterSpacing: '0', maxWidth: '1100px', margin: 0, marginBottom: '40px' }}>
              The roadmap's strikethroughs are the proof of a real evaluation loop
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr', gap: '24px' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'inline-block', background: 'rgba(244, 63, 94, 0.1)', color: '#f43f5e', fontSize: '12px', fontWeight: 600, fontFamily: "'Syne', sans-serif", padding: '4px 10px', borderRadius: '4px', marginBottom: '16px' }}>BUILT, THEN DELETED</div>
                <h4 style={{ fontSize: '20px', color: '#fff', fontWeight: 600, marginBottom: '12px', fontFamily: "'Jost', sans-serif" }}>Topic Auto-Clustering</h4>
                <p style={{ fontSize: isMobile ? '14px' : '16px', color: '#D4D4D4', lineHeight: 1.6, fontFamily: "'Jost', sans-serif", margin: 0 }}>Tag/domain chips above search that dropped a query in on click. At realistic archive sizes the chips carried no signal - a domain chip covering ~100% of clips filters to "everything." One capability was salvaged: search now also matches source URLs.</p>
              </div>
              
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'inline-block', background: 'rgba(244, 63, 94, 0.1)', color: '#f43f5e', fontSize: '12px', fontWeight: 600, fontFamily: "'Syne', sans-serif", padding: '4px 10px', borderRadius: '4px', marginBottom: '16px' }}>SHIPPED, THEN FULLY REMOVED</div>
                <h4 style={{ fontSize: '20px', color: '#fff', fontWeight: 600, marginBottom: '12px', fontFamily: "'Jost', sans-serif" }}>Soft Triage / "Someday"</h4>
                <p style={{ fontSize: isMobile ? '14px' : '16px', color: '#D4D4D4', lineHeight: 1.6, fontFamily: "'Jost', sans-serif", margin: 0 }}>Removed on direct user feedback: "I don't like it." The lesson: features that add standing UI and bookkeeping lose; features that live inside existing actions win.</p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'inline-block', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', fontSize: '12px', fontWeight: 600, fontFamily: "'Syne', sans-serif", padding: '4px 10px', borderRadius: '4px', marginBottom: '16px' }}>PAUSED, NOT DELETED</div>
                <h4 style={{ fontSize: '20px', color: '#fff', fontWeight: 600, marginBottom: '12px', fontFamily: "'Jost', sans-serif" }}>✨ Resurfaced</h4>
                <p style={{ fontSize: isMobile ? '14px' : '16px', color: '#D4D4D4', lineHeight: 1.6, fontFamily: "'Jost', sans-serif", margin: 0 }}>A daily spotlight of one old clip. The picker function stays fully intact - one line disables it. A deliberately different verdict from the two above.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* 12 ITERATING ON LIVE FEEDBACK */}
      <section style={{ padding: isMobile ? '64px 0' : '120px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(145deg, rgba(20,184,166,0.06) 0%, rgba(10,10,10,0) 45%, rgba(10,10,10,0) 100%)', border: '1px solid rgba(20,184,166,0.12)', borderRadius: '32px', padding: isMobile ? '16px' : '64px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(20,184,166,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <SectionHeader number="12" title="ITERATING ON LIVE FEEDBACK" isMobile={isMobile} themeColorRGB="20,184,166" iconType="pulse" />
            <h2 style={{ fontSize: isMobile ? '28px' : 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#fff', lineHeight: 1.1, letterSpacing: '0', maxWidth: '1100px', margin: 0, marginBottom: '40px' }}>
              Three diagnostic stories
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                <div style={{ flex: '0 0 auto' }}>
                  <PlaceholderMockup text="" height="80px" />
                </div>
                <div>
                  <h4 style={{ fontSize: '20px', color: '#fff', fontWeight: 600, marginBottom: '12px', fontFamily: "'Jost', sans-serif" }}>The invisible "Copied ✓"</h4>
                  <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0, fontFamily: "'Jost', sans-serif" }}>Choosing a citation style closed the dropdown, which physically moved the cursor onto the <em>next</em> card - collapsing the action row before the feedback could ever render. Fixed by pinning the row open by state for exactly as long as feedback is showing, regardless of where the cursor lands.</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                <div style={{ flex: '0 0 auto' }}>
                  <PlaceholderMockup text="" height="80px" />
                </div>
                <div>
                  <h4 style={{ fontSize: '20px', color: '#fff', fontWeight: 600, marginBottom: '12px', fontFamily: "'Jost', sans-serif" }}>The phantom padding</h4>
                  <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0, fontFamily: "'Jost', sans-serif" }}>"Top padding looks smaller than bottom" was actually an invisible collapsed row: with border-box sizing, an element's height can never shrink below its own padding. The hidden hover-row's padding was leaving a phantom band under every card.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                <div style={{ flex: '0 0 auto' }}>
                  <PlaceholderMockup text="" height="80px" />
                </div>
                <div>
                  <h4 style={{ fontSize: '20px', color: '#fff', fontWeight: 600, marginBottom: '12px', fontFamily: "'Jost', sans-serif" }}>The "replaced" citation that wasn't a bug</h4>
                  <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0, fontFamily: "'Jost', sans-serif" }}>A report that citing a second quote from the same article "replaced" the first entry - actually correct dedup-by-source behavior, working as designed. The fix here was an explanation, not a code change: knowing when the design is right and the mental model just needs a bridge is its own UX skill.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* 13 ACCESSIBILITY & TRUST */}
      <section style={{ padding: isMobile ? '64px 0' : '120px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(145deg, rgba(59,130,246,0.06) 0%, rgba(10,10,10,0) 45%, rgba(10,10,10,0) 100%)', border: '1px solid rgba(59,130,246,0.12)', borderRadius: '32px', padding: isMobile ? '16px' : '64px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <SectionHeader number="13" title="ACCESSIBILITY & TRUST" isMobile={isMobile} themeColorRGB="59,130,246" iconType="shield" />
            <h2 style={{ fontSize: isMobile ? '28px' : 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#fff', lineHeight: 1.1, letterSpacing: '0', maxWidth: '1100px', margin: 0, marginBottom: '40px' }}>
              Verified, not assumed
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
              {[
                "Every contrast ratio in the token sheet computed and recorded - not eyeballed.",
                "Full keyboard operability, focus-visible rings on every interactive element.",
                "A long-lived invalid-HTML bug - the account dropdown was nested inside its own trigger <button>, which browsers silently re-parent. Found by diffing the parsed DOM against the JSX source, not by inspection alone.",
                "prefers-reduced-motion honored across every animation, including mount-gated ones.",
                "Undo-over-confirm as a standing philosophy: reversible deletes get a 6-second undo bar; blocking confirms are reserved for genuinely destructive bulk actions."
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: 'rgba(255,255,255,0.02)', padding: '24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <CheckCircle2 size={24} color="var(--semantic-success)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0, fontFamily: "'Jost', sans-serif" }}>
                    {item.includes('<button>') ? (
                      <>A long-lived invalid-HTML bug - the account dropdown was nested inside its own trigger <code style={{background:'rgba(255,255,255,0.1)', padding:'2px 4px', borderRadius:'4px', fontSize:'14px'}}>&lt;button&gt;</code>, which browsers silently re-parent. Found by diffing the parsed DOM against the JSX source, not by inspection alone.</>
                    ) : item.includes('prefers-reduced-motion') ? (
                      <><code style={{background:'rgba(255,255,255,0.1)', padding:'2px 4px', borderRadius:'4px', fontSize:'14px'}}>prefers-reduced-motion</code> honored across every animation, including mount-gated ones.</>
                    ) : item}
                  </p>
                </div>
              ))}
            </div>

            <ScreenshotMockup src={privacyLedgerImg} alt="A close crop of the Privacy Ledger's three-checks-and-one-X layout" />
            <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.5)', fontSize: '14px', fontFamily: "'Jost', sans-serif" }}>
              The Privacy Ledger's three-checks-and-one-✕ layout, legible enough to read the actual copy.
            </p>
          </motion.div>
        </div>
      </section>



      {/* 14 RESULTS */}
      <section style={{ padding: isMobile ? '64px 0' : '120px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(145deg, rgba(168,85,247,0.06) 0%, rgba(10,10,10,0) 45%, rgba(10,10,10,0) 100%)', border: '1px solid rgba(168,85,247,0.12)', borderRadius: '32px', padding: isMobile ? '16px' : '64px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <SectionHeader number="14" title="RESULTS, REFLECTION & WHAT'S NEXT" isMobile={isMobile} themeColorRGB="168,85,247" iconType="star" />
            <h2 style={{ fontSize: isMobile ? '28px' : 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#fff', lineHeight: 1.1, letterSpacing: '0', maxWidth: '1100px', margin: 0, marginBottom: '24px' }}>
              Honest framing for a solo, personal project
            </h2>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: isMobile ? '16px' : '20px', color: '#e5e5e5', lineHeight: 1.5, letterSpacing: '0', margin: 0, marginBottom: '48px', maxWidth: '900px' }}>
              Validated through continuous live testing with one primary user whose screenshot-driven bug reports shaped multiple iterations. Every feature listed here shipped and builds clean. No usage metrics exist yet - none are fabricated here as a stand-in.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '32px', marginBottom: '48px' }}>
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '32px', borderRadius: '16px' }}>
                <h4 style={{ fontSize: '20px', color: '#fff', fontWeight: 600, marginBottom: '16px', fontFamily: "'Jost', sans-serif" }}>What I'd do differently</h4>
                <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0, fontFamily: "'Jost', sans-serif" }}>
                  Establish the motion invariants before the animation work, instead of excavating them bug by bug. Concept-test ideas like Soft Triage with a user before building the whole thing.
                </p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '32px', borderRadius: '16px' }}>
                <h4 style={{ fontSize: '20px', color: '#fff', fontWeight: 600, marginBottom: '16px', fontFamily: "'Jost', sans-serif" }}>What's next - Closed-Book Revisit</h4>
                <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0, fontFamily: "'Jost', sans-serif" }}>
                  A designed-but-unbuilt concept: when a student organically returns to a page they clipped weeks ago, a small dismissible pill asks them to recall what mattered <em>before</em> revealing their old clips - the testing effect, ambushing the exact moment students default to re-reading. Its own honest critique: it must be one-click dismissible and per-site muteable (interruption risk), and the reveal must never auto-grade - "you remembered 1 of 3" would be exactly the shame mechanic this whole product refuses to build.
                </p>
              </div>
            </div>

            <PlaceholderMockup text="CLOSED-BOOK REVISIT - CONCEPT SKETCH" height="250px" />
            <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', fontSize: '14px', fontFamily: "'Jost', sans-serif" }}>
              [PLACEHOLDER: a low-fidelity concept sketch of the dismissible recall pill appearing on an already-clipped page - this is unbuilt, so a sketch is honest; don't fake a real screenshot for it.]
            </p>
          </motion.div>
        </div>
      </section>
      
      <div style={{ padding: '40px 0', textAlign: 'center', opacity: 0.5 }}>
        <p style={{ fontSize: '14px', fontFamily: "'Jost', sans-serif", color: '#888' }}>
          END OF WIREFRAME - every fact above traces to CLAUDE.md / ROADMAP.md / FEATURES.md. Replace hatched boxes only.
        </p>
      </div>
      
    </div>
  );
};
