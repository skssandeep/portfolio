import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowDown, CheckCircle2, XCircle, Maximize } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

export const SnipKeepCaseStudy = () => {
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [imageWidth, setImageWidth] = useState(500);
  const [showHeroPill, setShowHeroPill] = useState(true);
  const modalContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setImageWidth(1000);
  }, [modalIndex]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        const zoomDelta = e.deltaY * -3;
        setImageWidth(w => Math.max(300, Math.min(3000, w + zoomDelta)));
      }
    };

    const el = modalContainerRef.current;
    if (el) {
      el.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (el) el.removeEventListener('wheel', handleWheel);
    };
  }, [modalIndex]);
  
  const { scrollYProgress } = useScroll();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const finalDesignsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (finalDesignsRef.current) {
        const { top } = finalDesignsRef.current.getBoundingClientRect();
        if (top < window.innerHeight) {
          setShowHeroPill(false);
        } else if (window.scrollY < 200) {
          setShowHeroPill(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (modalIndex === null) return;
      if (e.key === 'ArrowRight' && modalIndex < modalImages.length - 1) {
        setModalIndex(modalIndex + 1);
      } else if (e.key === 'ArrowLeft' && modalIndex > 0) {
        setModalIndex(modalIndex - 1);
      } else if (e.key === 'Escape') {
        setModalIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalIndex, modalImages.length]);

  return (
    <div style={{ background: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '120px', overflowX: 'hidden' }}>
      {/* Animated Gradient Reading Progress Bar */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(to right, #7928CA 0%, #FF007A 50%, var(--accent-color) 100%)',
          transformOrigin: '0%',
          scaleX,
          zIndex: 99999
        }}
      />
      
      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {modalIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={() => setModalIndex(null)}
            style={{ 
              position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.9)', 
              backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', 
              justifyContent: 'center', padding: '40px', cursor: 'default'
            }}
          >
            <button 
              onClick={(e) => { e.stopPropagation(); setModalIndex(null); }}
              style={{ position: 'absolute', top: '40px', right: '40px', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', padding: '12px', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', zIndex: 10000, backdropFilter: 'blur(10px)' }}
            >
              <XCircle size={32} />
            </button>
            <div 
              ref={modalContainerRef}
              style={{ maxHeight: '90vh', width: '80vw', overflowY: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '20px 0' }} 
              onClick={() => setModalIndex(null)}
            >
              <motion.img 
                 onClick={(e) => e.stopPropagation()}
                 key={modalIndex} 
                 initial={{ scale: 0.95, opacity: 0, y: 20 }} 
                 animate={{ scale: 1, opacity: 1, y: 0 }} 
                 exit={{ scale: 0.95, opacity: 0, y: -20 }}
                 transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                 src={modalImages[modalIndex]} 
                 style={{ width: '100%', maxWidth: `${imageWidth}px`, height: 'auto', display: 'block', borderRadius: '4px', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))', margin: '0 auto', transition: 'max-width 0.3s ease' }} 
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Back Button */}
      <div style={{ position: 'fixed', top: '29px', left: '4vw', zIndex: 100, display: isMobile ? 'none' : 'block' }}>
        <Link to="/#case-studies" className="btn-link" style={{fontFamily: 'var(--font-heading)', display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#fff', textDecoration: 'none', fontSize: '16px', fontWeight: 500, letterSpacing: '0', textTransform: 'uppercase', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', padding: '12px 24px', borderRadius: '100px'}}>
          <ArrowLeft size={16} /> Back
        </Link>
      </div>

      {/* Floating "Scroll to final designs" Pill */}
      <AnimatePresence>
        {showHeroPill && (
          <motion.a 
            href="#final-designs"
            onClick={(e) => { e.preventDefault(); finalDesignsRef.current?.scrollIntoView({ behavior: 'smooth' }); }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            style={{ position: 'fixed', bottom: '40px', left: '50%', transform: 'translateX(-50%)', zIndex: 100, display: isMobile ? 'none' : 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', color: '#fff', textDecoration: 'none', fontSize: '14px', fontWeight: 600, fontFamily: "'Syne', sans-serif", textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
            whileHover={{ scale: 1.05, background: 'rgba(0,0,0,1)', borderColor: 'var(--accent-color)' }}
            whileTap={{ scale: 0.95 }}
          >
            Jump to final designs <ArrowDown size={16} />
          </motion.a>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section style={{ paddingTop: '150px', paddingBottom: '80px', background: 'var(--bg-color)', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
          <div style={{ flex: '1 1 700px', zIndex: 10, paddingBottom: '80px', maxWidth: '800px' }}>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '20px', letterSpacing: '0', }}
            >
              SnipKeep: <span style={{ color: 'var(--semantic-success)', fontWeight: 500 }}>Designing for the Collector's Fallacy</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: "'Jost', sans-serif", fontSize: '24px', color: '#D4D4D4', lineHeight: 1.6, marginBottom: '32px', maxWidth: '100%' }}
            >
              A Chrome extension for saving web highlights straight into a Google Doc you already own. Designed to combat the collector's fallacy and optimize for learning through restraint.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}
            >
              {['Chrome Extension', 'React', 'Manifest V3', 'Google Docs API'].map((tag, idx) => (
                <div key={idx} style={{ fontFamily: "'Syne', sans-serif", background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '8px 20px', borderRadius: '100px', fontSize: '13px', color: '#D4D4D4', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase' }}>
                  {tag}
                </div>
              ))}
            </motion.div>
          </div>
          <div style={{ flex: '1 1 400px', position: 'relative', zIndex: 5, minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', top: '50%', left: '30%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(169, 156, 255, 0.15) 0%, transparent 60%)', zIndex: 0 }} />
            
            {/* Screenshot Display aligned with Smart EPP structure */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '500px' }}
            >
              <div 
                style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 40px 80px rgba(0,0,0,0.5)', background: 'linear-gradient(145deg, #1A1A1A, #111)', padding: '40px', textAlign: 'center', cursor: 'pointer' }}
                onClick={() => { setModalImages(['/images/LAP01.png']); setModalIndex(0); }}
              >
                <div style={{ color: '#D4D4D4', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>[HERO SCREENSHOT]</div>
                <p style={{ color: '#888', fontSize: '14px' }}>Browser window with the SnipKeep extension saving highlights.</p>
                <p style={{ color: 'var(--semantic-success)', fontSize: '14px', marginTop: '16px', fontStyle: 'italic' }}>Capturing notes directly to Google Docs.</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats - Top-Border Metric Style */}
        <div className="container" style={{ position: 'relative', zIndex: 20 }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '24px',
              marginTop: '40px'
            }}
          >
            {[
              { label: 'ROLE', value: 'UI/UX Designer & Developer', subtext: 'Solo project' },
              { label: 'METHODS', value: 'Live Testing', subtext: 'Iterative unmoderated evaluation' },
              { label: 'PLATFORM', value: 'Chrome Extension', subtext: 'React, Shadow DOM' },
              { label: 'DESIGN SYSTEM', value: 'Strict Contrast', subtext: '4.8:1 accent ratio achieved', highlight: true },
            ].map((stat, i) => (
              <div 
                key={i}
                style={{ 
                  display: 'flex', flexDirection: 'column', paddingTop: '20px', borderTop: '2px solid',
                  borderColor: stat.highlight ? 'var(--accent-color)' : 'rgba(255,255,255,0.15)',
                  fontFamily: "'Jost', sans-serif"
                }}
              >
                <div style={{fontFamily: 'var(--font-heading)', color: '#D4D4D4', fontSize: '14px', fontWeight: 500, letterSpacing: '0', textTransform: 'uppercase', marginBottom: '8px'}}>
                  {stat.label}
                </div>
                <div style={{ color: stat.highlight ? 'var(--accent-color)' : '#fff', fontSize: '20px', fontWeight: 500, marginBottom: '4px', letterSpacing: '0', }}>
                  {stat.value}
                </div>
                <div style={{ color: '#D4D4D4', fontSize: '16px', lineHeight: 1.5 }}>
                  {stat.subtext}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Context / Problem Section */}
      <section style={{ padding: '120px 0', background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
        {/* Background Glow */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100vw',
          height: '600px',
          background: 'linear-gradient(145deg, rgba(121, 40, 202, 0.06) 0%, rgba(10,10,10,0) 45%, rgba(10,10,10,0) 100%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>

            {/* Section Label */}
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
              <motion.div
                style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
                whileHover="hover"
                whileTap="tap"
                initial="rest"
                animate="rest"
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                  <defs>
                    <linearGradient id="csGrad1Snip" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#7928CA" />
                      <stop offset="50%" stopColor="#FF007A" />
                      <stop offset="100%" stopColor="var(--accent-color)" />
                    </linearGradient>
                     <filter id="glow1Snip" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  
                  <motion.path 
                    d="M 12 28 L 22 12 L 28 18" 
                    fill="none" stroke="url(#csGrad1Snip)" strokeWidth="2" strokeLinecap="square" filter="url(#glow1Snip)"
                    variants={{ rest: { pathLength: 1, opacity: 1, x: 0, y: 0 }, hover: { pathLength: 0.8, opacity: 0.8, x: -2, y: 2 }, tap: { pathLength: 1, opacity: 1, scale: 0.95 } }} transition={{ type: "spring", stiffness: 200, damping: 15 }} />
                  
                  <motion.path 
                    d="M 18 28 L 28 12 L 34 18" 
                    fill="none" stroke="url(#csGrad1Snip)" strokeWidth="3" strokeLinecap="square" filter="url(#glow1Snip)"
                    variants={{ rest: { pathLength: 1, opacity: 1, x: 0, y: 0 }, hover: { pathLength: 1, opacity: 1, x: 4, y: -4 }, tap: { pathLength: 1, opacity: 1, scale: 0.95 } }} transition={{ type: "spring", stiffness: 200, damping: 15 }} />

                  <motion.path 
                    d="M 32 10 L 36 6" 
                    fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="square"
                    variants={{ rest: { pathLength: 1, opacity: 1, x: 0, y: 0 }, hover: { pathLength: 1, opacity: 1, x: 8, y: -8 }, tap: { opacity: 0 } }} transition={{ type: "spring", stiffness: 200, damping: 15 }} />
                </svg>
              </motion.div>
              <span style={{ color: 'rgba(255, 255, 255, 0.55)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px', fontFamily: "'Syne', sans-serif" }}>
                01: The Problem
              </span>
            </div>

            {/* Heading & Intro */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '56px', maxWidth: '900px' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 700, color: '#fff', lineHeight: 1.15, letterSpacing: '0', margin: 0 }}>
                The Collector’s Fallacy
              </h2>
              <p style={{ fontSize: '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0 }}>
                Saving feels productive, but it isn’t learning. This is the collector's fallacy: students highlight and hoard content, assuming the act of capturing is equivalent to the act of understanding.
              </p>
            </div>

            {/* Bento Grid similar to Smart EPP */}
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
              
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-3" style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px', padding: '32px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ fontSize: '42px', fontWeight: 700, color: 'var(--semantic-warning)', letterSpacing: '0', lineHeight: 1 }}>90%</div>
                  <div style={{ fontSize: '16px', color: '#D4D4D4', lineHeight: 1.4, flex: 1 }}>of clipped notes are never read again.</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', marginBottom: '24px' }}>
                  <p style={{ fontSize: '16px', color: 'var(--semantic-warning)', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>"I have 500 articles saved in Notion. I dread opening the folder."</p>
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', marginTop: 'auto' }}>
                  <div>
                    <div style={{fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 700, color: 'var(--semantic-success)', letterSpacing: '0', textTransform: 'uppercase', marginBottom: '4px'}}>The Fix</div>
                    <p style={{ fontSize: '16px', color: '#D4D4D4', lineHeight: 1.5, margin: 0 }}>Save directly to active Google Docs, bypassing "inboxes" entirely.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="lg:col-span-3" style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px', padding: '32px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ fontSize: '42px', fontWeight: 700, color: 'var(--semantic-warning)', letterSpacing: '0', lineHeight: 1 }}>Lost</div>
                  <div style={{ fontSize: '16px', color: '#D4D4D4', lineHeight: 1.4, flex: 1 }}>context fragments the learning process.</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', marginBottom: '24px' }}>
                  <p style={{ fontSize: '16px', color: 'var(--semantic-warning)', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>"I saved this quote but I forgot what the author was responding to."</p>
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', marginTop: 'auto' }}>
                  <div>
                    <div style={{fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 700, color: 'var(--semantic-success)', letterSpacing: '0', textTransform: 'uppercase', marginBottom: '4px'}}>The Fix</div>
                    <p style={{ fontSize: '16px', color: '#D4D4D4', lineHeight: 1.5, margin: 0 }}>Auto-captured citations and deep-links back to exact video timestamps.</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Design Strategy & Principles */}
      <section style={{ padding: '120px 0', background: 'var(--bg-color)', position: 'relative' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            
            {/* Section Label */}
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
              <motion.div
                style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
                whileHover="hover"
                whileTap="tap"
                initial="rest"
                animate="rest"
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                  <defs>
                    <linearGradient id="csGrad2Snip" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#7928CA" />
                      <stop offset="50%" stopColor="#FF007A" />
                      <stop offset="100%" stopColor="var(--accent-color)" />
                    </linearGradient>
                     <filter id="glow2Snip" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  
                  <motion.circle cx="10" cy="20" r="4" fill="none" stroke="url(#csGrad2Snip)" strokeWidth="2" filter="url(#glow2Snip)"
                    variants={{ rest: { scale: 1 }, hover: { scale: 1.5 }, tap: { scale: 0.9 } }} transition={{ type: "spring", stiffness: 300, damping: 15 }} />
                  
                  <motion.circle cx="30" cy="20" r="4" fill="none" stroke="url(#csGrad2Snip)" strokeWidth="2" filter="url(#glow2Snip)"
                    variants={{ rest: { scale: 1 }, hover: { scale: 1.5 }, tap: { scale: 0.9 } }} transition={{ type: "spring", stiffness: 300, damping: 15 }} />

                  <motion.path 
                    d="M 14 20 C 14 20, 20 8, 26 20" 
                    fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"
                    variants={{ rest: { pathLength: 1, opacity: 1, d: "M 14 20 C 14 20, 20 8, 26 20" }, hover: { pathLength: 1, opacity: 1, d: "M 14 20 C 14 20, 20 32, 26 20" }, tap: { opacity: 0.5 } }} transition={{ type: "spring", stiffness: 100, damping: 10 }} />
                </svg>
              </motion.div>
              <span style={{ color: 'rgba(255, 255, 255, 0.55)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px', fontFamily: "'Syne', sans-serif" }}>
                02: Product Thesis & Principles
              </span>
            </div>

            {/* Heading & Intro */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '56px', maxWidth: '900px' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 700, color: '#fff', lineHeight: 1.15, letterSpacing: '0', margin: 0 }}>
                The Google Doc is the real product.
              </h2>
              <p style={{ fontSize: '20px', color: 'var(--semantic-success)', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
                "Good UX for learners is mostly restraint. The product's job is to disappear into the user's own work—their Google Doc—never to trap them in ours."
              </p>
            </div>

            {/* Principles Grid aligned with Smart EPP layout */}
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
              
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-3 group relative overflow-hidden transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '24px', padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ minWidth: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(255,255,255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '16px', fontWeight: 700, fontFamily: 'var(--font-system)', background: 'rgba(255,255,255, 0.02)' }}>
                    01
                  </div>
                  <h4 style={{ fontSize: '24px', fontWeight: 600, color: '#fff', margin: 0, lineHeight: 1.3, fontFamily: "'Jost', sans-serif" }}>No server, ever</h4>
                </div>
                <p style={{ fontSize: '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0, fontFamily: 'var(--font-system)' }}>
                  Privacy is an architecture, not a policy. A "Privacy Ledger" gives a literal account of what leaves the device: no SnipKeep server exists.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="lg:col-span-3 group relative overflow-hidden transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '24px', padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ minWidth: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(255,255,255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '16px', fontWeight: 700, fontFamily: 'var(--font-system)', background: 'rgba(255,255,255, 0.02)' }}>
                    02
                  </div>
                  <h4 style={{ fontSize: '24px', fontWeight: 600, color: '#fff', margin: 0, lineHeight: 1.3, fontFamily: "'Jost', sans-serif" }}>No shame mechanics</h4>
                </div>
                <p style={{ fontSize: '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0, fontFamily: 'var(--font-system)' }}>
                  No streaks, no guilt, no delete-if-unread countdowns. Every nudge must be zero-consequence to ignore.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="lg:col-span-6 group relative overflow-hidden transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '24px', padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ minWidth: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(255,255,255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '16px', fontWeight: 700, fontFamily: 'var(--font-system)', background: 'rgba(255,255,255, 0.02)' }}>
                    03
                  </div>
                  <h4 style={{ fontSize: '24px', fontWeight: 600, color: '#fff', margin: 0, lineHeight: 1.3, fontFamily: "'Jost', sans-serif" }}>Invisible by default</h4>
                </div>
                <p style={{ fontSize: '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0, fontFamily: 'var(--font-system)' }}>
                  Optional features render nothing until opted into. The AI layer is absent from every menu until the user connects an API key.
                </p>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Feature Deep-Dives / Ideation */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{
            position: 'relative',
            borderRadius: '32px',
            padding: '64px',
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

            <div style={{ textAlign: 'center', marginBottom: '80px', position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '32px' }}>
                <motion.div
                  style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
                  whileHover="hover"
                  whileTap="tap"
                  initial="rest"
                  animate="rest"
                >
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                    <defs>
                      <linearGradient id="csGrad3Snip" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#7928CA" />
                        <stop offset="50%" stopColor="#FF007A" />
                        <stop offset="100%" stopColor="var(--accent-color)" />
                      </linearGradient>
                       <filter id="glow3Snip" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>
                    
                    {/* Bounding Box */}
                    <motion.rect x="10" y="10" width="20" height="20" fill="rgba(255,0,122,0.05)" stroke="url(#csGrad3Snip)" strokeWidth="1" strokeDasharray="3 3" filter="url(#glow3Snip)"
                      style={{ transformOrigin: '20px 20px' }}
                      variants={{ rest: { scale: 1, rotate: 0 }, hover: { scale: 1.1, rotate: 90 }, tap: { scale: 0.95, rotate: 45 } }} 
                      transition={{ type: "spring", stiffness: 200, damping: 15 }} />

                    {/* Inner Layout Shape */}
                    <motion.rect x="14" y="14" width="12" height="12" rx="2" fill="none" stroke="#fff" strokeWidth="1.5"
                      style={{ transformOrigin: '20px 20px' }}
                      variants={{ rest: { scale: 1, rotate: 0 }, hover: { scale: 0.7, rotate: -90 }, tap: { scale: 0.85, rotate: -45 } }} 
                      transition={{ type: "spring", stiffness: 200, damping: 15 }} />

                    {/* Corner Anchors */}
                    <motion.rect x="8" y="8" width="4" height="4" fill="#000" stroke="#fff" strokeWidth="1"
                      style={{ transformOrigin: '10px 10px' }}
                      variants={{ rest: { x: 0, y: 0, scale: 1 }, hover: { x: -2, y: -2, scale: 1.2 }, tap: { x: 0, y: 0, scale: 0.9 } }} />
                    <motion.rect x="28" y="8" width="4" height="4" fill="#000" stroke="#fff" strokeWidth="1"
                      style={{ transformOrigin: '30px 10px' }}
                      variants={{ rest: { x: 0, y: 0, scale: 1 }, hover: { x: 2, y: -2, scale: 1.2 }, tap: { x: 0, y: 0, scale: 0.9 } }} />
                    <motion.rect x="8" y="28" width="4" height="4" fill="#000" stroke="#fff" strokeWidth="1"
                      style={{ transformOrigin: '10px 30px' }}
                      variants={{ rest: { x: 0, y: 0, scale: 1 }, hover: { x: -2, y: 2, scale: 1.2 }, tap: { x: 0, y: 0, scale: 0.9 } }} />
                    <motion.rect x="28" y="28" width="4" height="4" fill="#000" stroke="#fff" strokeWidth="1"
                      style={{ transformOrigin: '30px 30px' }}
                      variants={{ rest: { x: 0, y: 0, scale: 1 }, hover: { x: 2, y: 2, scale: 1.2 }, tap: { x: 0, y: 0, scale: 0.9 } }} />
                  </svg>
                </motion.div>
                <span style={{ color: 'rgba(255, 255, 255, 0.55)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px', fontFamily: "'Syne', sans-serif", marginTop: '16px' }}>
                  03: Feature Deep-Dives
                </span>
              </div>
              <h2 style={{ fontSize: '40px', fontWeight: 600, color: '#fff', marginBottom: '16px', letterSpacing: '0', }}>Designing for Workflow Purity</h2>
              <p style={{ fontSize: '18px', color: '#D4D4D4', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
                Choosing workflow purity over sunk costs and cognitive overload.
              </p>
            </div>

            {/* Deep Dive Blocks using standard layout */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              
              <div style={{ borderLeft: '2px solid rgba(255,255,255,0.1)', paddingLeft: '32px' }}>
                <h3 style={{ fontSize: '28px', color: '#fff', marginBottom: '24px' }}>1. Auto-Maintained Bibliographies</h3>
                <p style={{ color: '#D4D4D4', fontSize: '18px', lineHeight: 1.7, marginBottom: '16px' }}>
                  <strong style={{ color: '#fff' }}>The Problem:</strong> Citations existed per-clip, but assembling a final bibliography was a manual chore.
                </p>
                <p style={{ color: '#D4D4D4', fontSize: '18px', lineHeight: 1.7, marginBottom: '16px' }}>
                  <strong style={{ color: '#fff' }}>What Shipped:</strong> I chose rebuild-don't-append. Every time a user clicks "Cite," SnipKeep rebuilds a "Works Cited" block at the true end of the Doc. It deduplicates by source page, alphabetizes them, and re-renders the entire block in whichever citation style was just picked.
                </p>
              </div>

              <div style={{ borderLeft: '2px solid rgba(255,255,255,0.1)', paddingLeft: '32px' }}>
                <h3 style={{ fontSize: '28px', color: '#fff', marginBottom: '24px' }}>2. Lecture Timestamps</h3>
                <p style={{ color: '#D4D4D4', fontSize: '18px', lineHeight: 1.7, marginBottom: '16px' }}>
                  <strong style={{ color: '#fff' }}>The Problem:</strong> A clip's source link pointed at the start of a YouTube video, meaning "re-check that proof" meant scrubbing through a 90-minute lecture.
                </p>
                <p style={{ color: '#D4D4D4', fontSize: '18px', lineHeight: 1.7, marginBottom: '16px' }}>
                  <strong style={{ color: '#fff' }}>What Shipped:</strong> Clips saved on a YouTube watch page capture the video moment. If the selection sits inside the transcript panel, it grabs the transcript line's timestamp (precise to the sentence).
                </p>
              </div>

              <div style={{ borderLeft: '2px solid rgba(255,255,255,0.1)', paddingLeft: '32px' }}>
                <h3 style={{ fontSize: '28px', color: '#fff', marginBottom: '24px' }}>3. Voice Notes Architecture</h3>
                <p style={{ color: '#D4D4D4', fontSize: '18px', lineHeight: 1.7, marginBottom: '16px' }}>
                  <strong style={{ color: '#fff' }}>The Problem:</strong> Typing margin notes interrupts the flow of reading.
                </p>
                <p style={{ color: '#D4D4D4', fontSize: '18px', lineHeight: 1.7, marginBottom: '16px' }}>
                  <strong style={{ color: '#fff' }}>What Shipped:</strong> After Chrome's offscreen documents failed to obtain mic permissions twice, I ran speech recognition in a real background tab. Silence auto-stops the *listening* state (after a 1.8s pause) but never auto-*saves*, preserving a review beat since transcription is imperfect. 
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Subtraction & Results */}
      <section style={{ padding: '120px 0' }} id="final-designs" ref={finalDesignsRef}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
               <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <span style={{ color: 'rgba(255, 255, 255, 0.55)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px', fontFamily: "'Syne', sans-serif" }}>
                    04: Designing by Subtraction
                </span>
              </div>
              <p style={{ color: '#D4D4D4', fontSize: '18px', lineHeight: 1.7, marginBottom: '24px' }}>
                I ruthlessly pruned features that distracted from the core thesis, even after I had written the code for them.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <li>
                  <strong style={{ color: '#fff', fontSize: '18px' }}>Topic Auto-Clustering (Deleted):</strong>
                  <p style={{ color: '#A0A0A0', fontSize: '16px', lineHeight: 1.6, marginTop: '8px' }}>Built domain chips above search, but a domain chip covering ~100% of clips carries no signal. The UI was deleted, but search was upgraded to match URLs natively.</p>
                </li>
                <li>
                  <strong style={{ color: '#fff', fontSize: '18px' }}>Soft Triage / "Someday" (Deleted):</strong>
                  <p style={{ color: '#A0A0A0', fontSize: '16px', lineHeight: 1.6, marginTop: '8px' }}>User feedback was blunt: "I don't like it." Features adding standing UI and bookkeeping lose; features living inside existing actions win.</p>
                </li>
                <li>
                  <strong style={{ color: '#fff', fontSize: '18px' }}>Resurfaced (Paused):</strong>
                  <p style={{ color: '#A0A0A0', fontSize: '16px', lineHeight: 1.6, marginTop: '8px' }}>A daily spotlight of one old clip. The picker remains in the codebase, disabled by one line. A deliberate pause for the future.</p>
                </li>
              </ul>
            </div>
            <div>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <span style={{ color: 'rgba(255, 255, 255, 0.55)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px', fontFamily: "'Syne', sans-serif" }}>
                    05: Reflection & What's Next
                </span>
              </div>
              <p style={{ color: '#D4D4D4', fontSize: '18px', lineHeight: 1.7, marginBottom: '24px' }}>
                I designed and built SnipKeep entirely solo, validated through continuous, screenshot-driven live testing with a single primary user. Every feature discussed shipped and functions end-to-end. Because the architecture mandates no server, I have absolutely no usage metrics.
              </p>
              <div style={{ background: 'rgba(169, 156, 255, 0.05)', border: '1px solid rgba(169, 156, 255, 0.2)', padding: '32px', borderRadius: '16px' }}>
                <h4 style={{ color: '#fff', fontSize: '20px', marginBottom: '16px' }}>Next: Closed-Book Revisit</h4>
                <p style={{ color: '#D4D4D4', fontSize: '16px', lineHeight: 1.6 }}>
                  When a student returns to a clipped page weeks later, a small dismissible pill asks them to recall what mattered *before* revealing old clips—triggering the testing effect based on organic browsing. 
                </p>
                <p style={{ color: '#A0A0A0', fontSize: '14px', lineHeight: 1.6, marginTop: '16px', fontStyle: 'italic' }}>
                  Critique: It interrupts browsing, must never auto-grade (introduces shame mechanics), and is invisible until organic revisits happen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
