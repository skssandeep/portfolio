import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowDown, CheckCircle2, XCircle, AlertCircle, Target, Lightbulb, Search, Smartphone, Palette, Users, ChevronLeft, ChevronRight, LayoutGrid, ZoomOut, ZoomIn, Maximize, Landmark, Package, Columns } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

export const SmartEPPCaseStudy = () => {
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [imageWidth, setImageWidth] = useState(500);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setImageWidth(typeof window !== 'undefined' && window.innerWidth < 768 ? window.innerWidth : 500);
    setDirection(0); // Reset direction on open
  }, [modalIndex]);
  const [showHeroPill, setShowHeroPill] = useState(true);
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<{x: number, y: number} | null>(null);
  const pinchDistance = useRef<number>(0);
  const tempZoomWidth = useRef<number>(0);

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
        // Hide if the final-designs section is in view or we've scrolled past it
        if (top < window.innerHeight) {
          setShowHeroPill(false);
        } else if (window.scrollY < 200) {
          // Optionally show it again if they scroll all the way back to top
          setShowHeroPill(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  


  const ecosystemImages = [
    "/images/EPP_CaseStudy_01.png",
    "/images/EPP_CaseStudy_02.png",
    "/images/EPP_CaseStudy_03.png",
    "/images/EPP_CaseStudy_04.png",
    "/images/EPP_CaseStudy_05.png",
    "/images/EPP_CaseStudy_06.png",
    "/images/EPP_CaseStudy_07.png",
    "/images/EPP_CaseStudy_08.png",
    "/images/EPP_CaseStudy_09.png",
    "/images/EPP_CaseStudy_10.png"
  ];

  // Drag-to-scroll logic
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const hasDragged = useRef(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  // Layout toggle logic
  const [isGridView, setIsGridView] = useState(false);
  const [activePortalTab, setActivePortalTab] = useState<'employee' | 'hr' | 'financier' | 'seller'>('employee');
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    hasDragged.current = false;
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };
  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    hasDragged.current = true;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2.5; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleCarouselScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -600 : 600; // Approximate width of one image
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 10);
    }
  };

  useEffect(() => {
    // Initial check
    setTimeout(checkScroll, 100);
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const handleNextImage = (e?: React.SyntheticEvent) => {
    e?.stopPropagation();
    if (modalIndex !== null && modalIndex < modalImages.length - 1) {
      setDirection(1);
      setModalIndex(modalIndex + 1);
    }
  };

  const handlePrevImage = (e?: React.SyntheticEvent) => {
    e?.stopPropagation();
    if (modalIndex !== null && modalIndex > 0) {
      setDirection(-1);
      setModalIndex(modalIndex - 1);
    }
  };

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

  useEffect(() => {
    if (isMobile && modalIndex !== null) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isMobile, modalIndex]);

  return (
    <div style={{ background: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '120px', overflowX: 'hidden' }}>
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
      {/* Animated Gradient Reading Progress Bar */}
      {!(isMobile && modalIndex !== null) && (
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
      )}
      
      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {modalIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={() => setModalIndex(null)}
            style={{ 
              position: 'fixed', 
              inset: 0, 
              zIndex: 9999, 
              background: 'rgba(0,0,0,0.9)', 
              backdropFilter: 'blur(10px)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              padding: isMobile ? 0 : '40px',
              cursor: 'default'
            }}
          >
            <button 
              onClick={(e) => { e.stopPropagation(); setModalIndex(null); }}
              style={{ position: 'absolute', top: isMobile ? '20px' : '40px', right: isMobile ? '20px' : '40px', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', padding: isMobile ? '8px' : '12px', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', zIndex: 10000, backdropFilter: 'blur(10px)' }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.8)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}
            >
              <XCircle size={isMobile ? 24 : 32} />
            </button>

            {/* Prev Button */}
            {modalIndex > 0 && !isMobile && (
              <button 
                onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                style={{ position: 'absolute', left: '40px', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', padding: '16px', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', zIndex: 10000, backdropFilter: 'blur(10px)' }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.8)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}
              >
                <ChevronLeft size={32} />
              </button>
            )}

            {isMobile ? (
              <div 
                className="no-scrollbar"
                style={{
                  display: 'flex',
                  width: '100vw',
                  height: '100vh',
                  overflowX: (typeof window !== 'undefined' && imageWidth > window.innerWidth + 5) ? 'hidden' : 'auto',
                  overflowY: 'hidden',
                  scrollSnapType: (typeof window !== 'undefined' && imageWidth > window.innerWidth + 5) ? 'none' : 'x mandatory',
                  WebkitOverflowScrolling: 'touch'
                }}
                onScroll={(e) => {
                  const isZoomedLocal = typeof window !== 'undefined' && imageWidth > window.innerWidth + 5;
                  if (isZoomedLocal) return;
                  const index = Math.round(e.currentTarget.scrollLeft / window.innerWidth);
                  if (index !== modalIndex) {
                    setModalIndex(index);
                  }
                }}
                ref={(el) => {
                  if (el && !el.dataset.initialized) {
                    el.scrollLeft = (modalIndex || 0) * window.innerWidth;
                    el.dataset.initialized = 'true';
                  }
                }}
              >
                {modalImages.map((src, idx) => (
                  <div 
                    key={idx}
                    style={{
                      minWidth: '100vw',
                      width: '100vw',
                      height: '100vh',
                      scrollSnapAlign: 'start',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      position: 'relative'
                    }}
                  >
                    {idx === modalIndex ? (
                      <div 
                        ref={modalContainerRef}
                        className="no-scrollbar"
                        style={{ width: '100vw', height: '100vh', overflowX: (typeof window !== 'undefined' && imageWidth > window.innerWidth + 5) ? 'auto' : 'hidden', overflowY: 'auto', touchAction: 'pan-x pan-y', WebkitOverflowScrolling: 'touch', textAlign: 'center' }}
                        onClick={() => setModalIndex(null)}
                        onTouchStart={(e) => {
                          if (e.touches.length === 2) {
                            const dx = e.touches[0].clientX - e.touches[1].clientX;
                            const dy = e.touches[0].clientY - e.touches[1].clientY;
                            pinchDistance.current = Math.sqrt(dx * dx + dy * dy);
                            tempZoomWidth.current = imageWidth;
                          }
                        }}
                        onTouchMove={(e) => {
                          if (e.touches.length === 2 && pinchDistance.current) {
                            const dx = e.touches[0].clientX - e.touches[1].clientX;
                            const dy = e.touches[0].clientY - e.touches[1].clientY;
                            const distance = Math.sqrt(dx * dx + dy * dy);
                            const diff = distance - pinchDistance.current;
                            const newWidth = Math.min(3000, Math.max(window.innerWidth, tempZoomWidth.current + diff * 1.5));
                            tempZoomWidth.current = newWidth;
                            pinchDistance.current = distance;
                            if (modalContainerRef.current) {
                              const img = modalContainerRef.current.querySelector('img');
                              if (img) img.style.width = `${newWidth}px`;
                            }
                          }
                        }}
                        onTouchEnd={(e) => {
                          if (e.touches.length < 2) {
                            pinchDistance.current = 0;
                            if (tempZoomWidth.current && tempZoomWidth.current !== imageWidth) {
                              setImageWidth(tempZoomWidth.current);
                            }
                          }
                        }}
                      >
                        <div style={{ display: 'table', width: '100%', height: '100%' }}>
                          <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                            <img 
                               draggable={false}
                               onClick={(e) => e.stopPropagation()}
                               src={src} 
                               style={{ width: `${imageWidth}px`, maxWidth: 'none', height: 'auto', display: 'block', borderRadius: '0px', margin: '0 auto', userSelect: 'none', WebkitUserSelect: 'none', WebkitTouchCallout: 'none' }} 
                               onLoad={(e) => {
                                 const img = e.target as HTMLImageElement;
                                 const aspectRatio = img.naturalWidth / img.naturalHeight;
                                 const maxInitialHeight = window.innerHeight * 0.85;
                                 let fitWidth = maxInitialHeight * aspectRatio;
                                 if (fitWidth > window.innerWidth) {
                                   fitWidth = window.innerWidth;
                                 }
                                 setImageWidth(fitWidth);
                               }}
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                       <img 
                         src={src} 
                         style={{ maxWidth: '100vw', maxHeight: '100vh', objectFit: 'contain' }} 
                       />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div 
                ref={modalContainerRef}
                style={{ maxHeight: '90vh', width: '80vw', overflow: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '20px 0' }} 
                onClick={() => setModalIndex(null)}
              >
                <motion.img 
                   onClick={(e) => e.stopPropagation()}
                   key={modalIndex} 
                   initial={{ opacity: 0, x: direction * 300, y: direction === 0 ? 20 : 0, scale: direction === 0 ? 0.95 : 1 }} 
                   animate={{ opacity: 1, x: 0, y: 0, scale: 1 }} 
                   exit={{ opacity: 0, x: direction * -300, y: direction === 0 ? -20 : 0, scale: direction === 0 ? 0.95 : 1 }}
                   transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
                   src={modalImages[modalIndex]} 
                   onLoad={(e) => {
                     const img = e.target as HTMLImageElement;
                     const aspectRatio = img.naturalWidth / img.naturalHeight;
                     const maxInitialHeight = window.innerHeight * 0.85;
                     const fitWidth = maxInitialHeight * aspectRatio;
                     setImageWidth(img.naturalWidth > img.naturalHeight ? Math.min(1200, fitWidth) : fitWidth);
                   }}
                   style={{ width: `${imageWidth}px`, maxWidth: 'none', height: 'auto', display: 'block', borderRadius: '16px', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))', margin: '0 auto' }} 
                />
              </div>
            )}

            {/* Zoom Controls */}
            {!isMobile && (
              <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: '16px', zIndex: 10000, background: 'rgba(0,0,0,0.7)', padding: '12px 24px', borderRadius: '100px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }} onClick={(e) => e.stopPropagation()}>
                <button onClick={() => setImageWidth(w => Math.max(300, w - 200))} style={{ color: '#fff', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', opacity: imageWidth <= 300 ? 0.5 : 1 }} disabled={imageWidth <= 300} title="Zoom Out">
                  <ZoomOut size={24} />
                </button>
                <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.2)' }} />
                <button onClick={() => setImageWidth(w => Math.min(3000, w + 200))} style={{ color: '#fff', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', opacity: imageWidth >= 3000 ? 0.5 : 1 }} disabled={imageWidth >= 3000} title="Zoom In">
                  <ZoomIn size={24} />
                </button>
              </div>
            )}

            {/* Next Button */}
            {modalIndex < modalImages.length - 1 && !isMobile && (
              <button 
                onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                style={{ position: 'absolute', right: '40px', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', padding: '16px', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', zIndex: 10000, backdropFilter: 'blur(10px)' }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.8)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}
              >
                <ChevronRight size={32} />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Back Button */}
      <div style={{ position: 'fixed', top: '29px', left: '4vw', zIndex: 100, display: isMobile ? 'none' : 'block' }}>
        <Link to="/#case-studies" className="btn-link" style={{fontFamily: 'var(--font-heading)', display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#fff', textDecoration: 'none', fontSize: '16px', fontWeight: 500, letterSpacing: '0', textTransform: 'uppercase', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', padding: '12px 24px', borderRadius: '100px'}}>
          <ArrowLeft size={16} /> Back
        </Link>
      </div>


      {/* 2. Intro & Stats Section */}
      <section style={{ paddingTop: isMobile ? '100px' : '150px', paddingBottom: '80px', background: 'var(--bg-color)', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
          
          {/* Left Text Block */}
          <div style={{ flex: '1 1 700px', zIndex: 10, paddingBottom: isMobile ? '40px' : '80px', maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'center' : 'flex-start', textAlign: isMobile ? 'center' : 'left' }}>

            {/* Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '20px', letterSpacing: '0', textAlign: isMobile ? 'center' : 'left' }}
            >
              Up to 40% of that phone is just tax. <span style={{ color: 'var(--semantic-success)', fontWeight: 500 }}>We built the system that gives it back.</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: "'Jost', sans-serif", fontSize: isMobile ? '18px' : '24px', color: '#D4D4D4', lineHeight: 1.6, marginBottom: '32px', maxWidth: '100%', textAlign: isMobile ? 'center' : 'left' }}
            >
              Employees lease premium devices via salary EMIs, reclaiming up to 40% in tax savings. I led the <strong style={{ color: '#fff', fontWeight: 600 }}>0-to-1 design</strong> of all <strong style={{ color: '#fff', fontWeight: 600 }}>4 interconnected platforms</strong> from a blank canvas.
            </motion.p>

            {/* Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: isMobile ? '8px' : '12px', marginBottom: '20px', justifyContent: isMobile ? 'center' : 'flex-start' }}
            >
              {['Mobile App', 'HR Dashboard', 'Financier Portal', 'Seller Portal'].map((tag, idx) => (
                <div key={idx} style={{ fontFamily: "'Syne', sans-serif", background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: isMobile ? '6px 16px' : '8px 20px', borderRadius: '100px', fontSize: isMobile ? '11px' : '13px', color: '#D4D4D4', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase' }}>
                  {tag}
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Mockup Block */}
          <div style={{ flex: '1 1 400px', position: 'relative', zIndex: 5, minHeight: isMobile ? '350px' : '600px' }}>
            {/* Soft Glow Behind Image */}
            <div style={{ position: 'absolute', top: '50%', left: '30%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(249,87,56,0.15) 0%, transparent 60%)', zIndex: 0 }} />
            
            <motion.img 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              src="/images/Mockup2_EPP.png" 
              alt="Smart EPP Mobile App Mockup" 
              style={{ position: 'absolute', top: '-20%', left: '-25%', width: '165%', maxWidth: '1100px', objectFit: 'contain', zIndex: 2, filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.6))' }}
            />
            
            {/* CTA Removed */}
          </div>

        </div>

        {/* Stats - Top-Border Metric Style */}
        <div className="container" style={{ position: 'relative', zIndex: 20, marginTop: isMobile ? '-32px' : '0px' }}>
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
              { label: 'ROLE', value: 'Product Designer', subtext: 'Solo designer' },
              { label: 'TEAM', value: '1 PM • 2 FE • 1 BE', subtext: '1 QA • 1 Business Analyst' },
              { label: 'PLATFORMS', value: 'iOS • Android • Web', subtext: '4 platforms' },
              { label: 'TIMELINE', value: '5 months', subtext: <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>Blank canvas <ArrowRight size={14} /> shipped MVP</span> },
              { label: 'USER RESEARCH', value: '26 interviews', subtext: 'Across all 4 actor types' },
              { label: 'DESIGN SYSTEM', value: '44 components', subtext: "Built on OneAssist's existing library" },
            ].map((stat, i) => (
              <div 
                key={i}
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  paddingTop: '20px',
                  borderTop: '2px solid',
                  borderColor: (stat as any).highlight ? 'var(--accent-color)' : 'rgba(255,255,255,0.15)',
                  fontFamily: "'Jost', sans-serif",
                  marginTop: isMobile && (stat.label === 'TEAM' || stat.label === 'ROLE') ? '18px' : '0'
                }}
              >
                <div style={{fontFamily: 'var(--font-heading)', color: '#D4D4D4', fontSize: isMobile ? '12px' : '14px', fontWeight: 500, letterSpacing: '0', textTransform: 'uppercase', marginBottom: '8px'}}>
                  {stat.label}
                </div>
                <div style={{ color: (stat as any).highlight ? 'var(--accent-color)' : '#fff', fontSize: isMobile ? '16px' : '20px', fontWeight: 500, marginBottom: '4px', letterSpacing: '0', }}>
                  {stat.value}
                </div>
                <div style={{ color: '#D4D4D4', fontSize: isMobile ? '14px' : '16px', lineHeight: 1.5 }}>
                  {stat.subtext}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <AnimatePresence>
          {showHeroPill && (
            <motion.div
              initial={{ opacity: 0, y: 50, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: 50, scale: 0.9, x: '-50%' }}
              transition={{ delay: 1.5, type: 'spring', stiffness: 200, damping: 20 }}
              style={{
                position: 'fixed',
                bottom: isMobile ? '20px' : '40px',
                left: '50%',
                zIndex: 100,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <button
                onClick={() => {
                  setShowHeroPill(false);
                  const el = document.getElementById('final-designs');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  background: 'rgba(20, 20, 20, 0.85)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '100px',
                  padding: '10px 10px 10px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  color: '#fff',
                  cursor: 'pointer',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(30, 30, 30, 0.95)';
                  e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(20, 20, 20, 0.85)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)';
                }}
              >
                <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em', fontFamily: "'Syne', sans-serif", textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Scroll to final designs</span>
                <div style={{
                  background: 'var(--semantic-success)',
                  color: '#000',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <ArrowDown size={16} strokeWidth={2.5} />
                </div>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>




      {/* 3. Problem */}
      <section style={{ padding: isMobile ? '64px 0' : '120px 0' }}>
        <div className="container">
          
          {/* Zone A & B: The Setup Block */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(145deg, rgba(var(--semantic-error-rgb),0.06) 0%, rgba(10,10,10,0) 45%, rgba(10,10,10,0) 100%)', border: '1px solid rgba(var(--semantic-error-rgb),0.12)', borderRadius: '32px', padding: isMobile ? '16px' : '64px', position: 'relative', overflow: 'hidden' }}>
            
            {/* Background watermark */}
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(var(--semantic-error-rgb),0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

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
                    <linearGradient id="csGrad1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#7928CA" />
                      <stop offset="50%" stopColor="#FF007A" />
                      <stop offset="100%" stopColor="var(--accent-color)" />
                    </linearGradient>
                     <filter id="glow1" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  
                  {/* Left Shard */}
                  <motion.path 
                    d="M 20 6 L 18 12 L 23 20 L 16 28 L 20 34 L 6 20 Z" 
                    fill="rgba(255,0,122,0.1)" stroke="url(#csGrad1)" strokeWidth="1.5" filter="url(#glow1)"
                    style={{ transformOrigin: '13px 20px' }}
                    variants={{ rest: { x: -1, y: 0, rotate: -2 }, hover: { x: -3, y: 1, rotate: -8 }, tap: { x: 0, y: 0, rotate: 0, scale: 0.95 } }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  />

                  {/* Main Right Shard */}
                  <motion.path 
                    d="M 28 14 L 34 20 L 20 34 L 16 28 L 23 20 L 18 12 Z" 
                    fill="rgba(255,0,122,0.1)" stroke="url(#csGrad1)" strokeWidth="1.5" filter="url(#glow1)"
                    style={{ transformOrigin: '25px 24px' }}
                    variants={{ rest: { x: 1, y: 1, rotate: 2 }, hover: { x: 3, y: 3, rotate: 8 }, tap: { x: 0, y: 0, rotate: 0, scale: 0.95 } }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  />

                  {/* Small Top Right Shard */}
                  <motion.path 
                    d="M 20 6 L 28 14 L 18 12 Z" 
                    fill="rgba(255,0,122,0.1)" stroke="url(#csGrad1)" strokeWidth="1.5" filter="url(#glow1)"
                    style={{ transformOrigin: '23px 10px' }}
                    variants={{ rest: { x: 2, y: -2, rotate: 10 }, hover: { x: 6, y: -6, rotate: 25 }, tap: { x: 0, y: 0, rotate: 0, scale: 0.95 } }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  />
                </svg>
              </motion.div>
              <span style={{ color: 'rgba(255, 255, 255, 0.55)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: isMobile ? '11px' : '13px', fontFamily: "'Syne', sans-serif" }}>
                01: The Problem
              </span>
            </div>

            <h2 style={{ fontSize: isMobile ? '28px' : 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#fff', lineHeight: 1.1, letterSpacing: '0', maxWidth: '1100px', margin: 0 }}>
              A 4-party financial product that had to feel as simple as shopping on Amazon.
            </h2>
            
            <div style={{ marginTop: isMobile ? '32px' : '64px' }} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              {/* Narrative (Left) */}
              <div className="lg:col-span-7" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: isMobile ? '16px' : '20px', color: '#e5e5e5', lineHeight: 1.5, letterSpacing: '0', margin: 0 }}>
                  By combining corporate GST benefits with pre-tax salary deductions, we unlocked a massive ~40% discount on premium phones. This birthed a <strong style={{ color: '#fff', fontWeight: 500 }}>0-to-1 product: Smart EPP (Employee Purchase Program).</strong>
                </p>
                <div style={{ marginTop: '32px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: isMobile ? '20px' : '24px' }}>
                  <div style={{ color: '#fff', fontSize: isMobile ? '16px' : '20px', fontWeight: 600, marginBottom: '8px' }}>The Business Goal</div>
                  <p style={{ color: '#D4D4D4', fontSize: isMobile ? '16px' : '18px', lineHeight: 1.5, margin: '0 0 20px 0' }}>Validate a new revenue stream via rapid employee adoption with <strong style={{ color: '#fff', fontWeight: 500 }}>zero manual HR overhead.</strong></p>
                  <div style={{ color: '#fff', fontSize: isMobile ? '16px' : '20px', fontWeight: 600, marginBottom: '8px' }}>The UX Goal</div>
                  <p style={{ color: '#D4D4D4', fontSize: isMobile ? '16px' : '18px', lineHeight: 1.5, margin: 0 }}>Explain the tax savings simply to build immediate trust and <strong style={{ color: '#fff', fontWeight: 500 }}>eliminate anxiety around salary deductions.</strong></p>
                </div>
              </div>

              {/* Stats (Right) */}
              <div className="lg:col-span-5" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', fontFamily: "'Jost', sans-serif" }}>
                <div style={{fontFamily: 'var(--font-heading)', fontSize: isMobile ? '14px' : '16px', color: 'var(--semantic-error)', textTransform: 'uppercase', letterSpacing: '0', marginBottom: '16px', fontWeight: 600}}>
                  Project Scope
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                  
                  <div style={{ background: 'rgba(var(--semantic-error-rgb),0.04)', borderLeft: '3px solid rgba(var(--semantic-error-rgb),0.3)', borderRadius: '4px 12px 12px 4px', padding: '16px 20px' }}>
                    <div style={{fontFamily: 'var(--font-heading)', color: '#D4D4D4', fontSize: isMobile ? '12px' : '16px', fontWeight: 600, letterSpacing: '0', textTransform: 'uppercase', marginBottom: '8px'}}>Core Features</div>
                    <div style={{ color: '#fff', fontSize: isMobile ? '20px' : '24px', fontWeight: 500, lineHeight: 1, marginBottom: '6px' }}>12+</div>
                    <div style={{ color: '#D4D4D4', fontSize: isMobile ? '14px' : '16px', lineHeight: 1.5 }}>End-to-end leasing workflows.</div>
                  </div>

                  <div style={{ background: 'rgba(var(--semantic-error-rgb),0.04)', borderLeft: '3px solid rgba(var(--semantic-error-rgb),0.3)', borderRadius: '4px 12px 12px 4px', padding: '16px 20px' }}>
                    <div style={{fontFamily: 'var(--font-heading)', color: '#D4D4D4', fontSize: isMobile ? '12px' : '16px', fontWeight: 600, letterSpacing: '0', textTransform: 'uppercase', marginBottom: '8px'}}>User Types</div>
                    <div style={{ color: '#fff', fontSize: isMobile ? '20px' : '24px', fontWeight: 500, lineHeight: 1, marginBottom: '6px' }}>4</div>
                    <div style={{ color: '#D4D4D4', fontSize: isMobile ? '14px' : '16px', lineHeight: 1.5 }}>Distinct actors in one shared flow.</div>
                  </div>

                  <div style={{ background: 'rgba(var(--semantic-error-rgb),0.04)', borderLeft: '3px solid rgba(var(--semantic-error-rgb),0.3)', borderRadius: '4px 12px 12px 4px', padding: '16px 20px' }}>
                    <div style={{fontFamily: 'var(--font-heading)', color: '#D4D4D4', fontSize: isMobile ? '12px' : '16px', fontWeight: 600, letterSpacing: '0', textTransform: 'uppercase', marginBottom: '8px'}}>Backbone</div>
                    <div style={{ color: '#fff', fontSize: isMobile ? '20px' : '24px', fontWeight: 500, lineHeight: 1, marginBottom: '6px' }}>1</div>
                    <div style={{ color: '#D4D4D4', fontSize: isMobile ? '14px' : '16px', lineHeight: 1.5 }}>Unified operational backend.</div>
                  </div>

                  <div style={{ background: 'rgba(var(--semantic-error-rgb),0.04)', borderLeft: '3px solid rgba(var(--semantic-error-rgb),0.3)', borderRadius: '4px 12px 12px 4px', padding: '16px 20px' }}>
                    <div style={{fontFamily: 'var(--font-heading)', color: '#D4D4D4', fontSize: isMobile ? '12px' : '16px', fontWeight: 600, letterSpacing: '0', textTransform: 'uppercase', marginBottom: '8px'}}>Integrations</div>
                    <div style={{ color: '#fff', fontSize: isMobile ? '20px' : '24px', fontWeight: 500, lineHeight: 1, marginBottom: '6px' }}>1</div>
                    <div style={{ color: '#D4D4D4', fontSize: isMobile ? '14px' : '16px', lineHeight: 1.5 }}>Backend HRMS sync.</div>
                  </div>

                  <div style={{ background: 'rgba(var(--semantic-error-rgb),0.04)', borderLeft: '3px solid rgba(var(--semantic-error-rgb),0.3)', borderRadius: '4px 12px 12px 4px', padding: '16px 20px' }}>
                    <div style={{fontFamily: 'var(--font-heading)', color: '#D4D4D4', fontSize: isMobile ? '12px' : '16px', fontWeight: 600, letterSpacing: '0', textTransform: 'uppercase', marginBottom: '8px'}}>Key Deliverables</div>
                    <div style={{ color: '#fff', fontSize: isMobile ? '20px' : '24px', fontWeight: 500, lineHeight: 1, marginBottom: '6px' }}>250+</div>
                    <div style={{ color: '#D4D4D4', fontSize: isMobile ? '14px' : '16px', lineHeight: 1.5 }}>High-fidelity screens & flows.</div>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.02)', borderLeft: '3px solid #333', borderRadius: '4px 12px 12px 4px', padding: '16px 20px' }}>
                    <div style={{fontFamily: 'var(--font-heading)', color: '#D4D4D4', fontSize: isMobile ? '12px' : '16px', fontWeight: 600, letterSpacing: '0', textTransform: 'uppercase', marginBottom: '8px'}}>Out of Scope</div>
                    <div style={{ color: '#D4D4D4', fontSize: isMobile ? '14px' : '16px', fontWeight: 400, lineHeight: 1.5, marginTop: '6px' }}>Brand identity.</div>
                  </div>

                </div>
                

              </div>
            </div>


            {/* Bridge: clean divider */}
            <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.06)', margin: '64px 0 48px 0' }} />

            {/* Zone C: Challenges */}
            <div style={{ fontFamily: "'Jost', sans-serif" }}>
              <h3 style={{ fontSize: '28px', fontWeight: 500, color: '#fff', margin: '0 0 40px 0' }}>
                Why it was hard
              </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              
              {/* Challenge 1 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontFamily: "'Jost', sans-serif", background: 'rgba(var(--semantic-error-rgb),0.03)', borderLeft: '3px solid rgba(var(--semantic-error-rgb),0.25)', borderRadius: '4px 16px 16px 4px', padding: isMobile ? '20px' : '28px 32px' }}>
                <div style={{fontFamily: 'var(--font-heading)', color: 'var(--semantic-error)', fontSize: isMobile ? '12px' : '14px', fontWeight: 600, letterSpacing: '0', textTransform: 'uppercase', marginBottom: isMobile ? '4px' : '8px'}}>Abstract savings</div>
                <h4 style={{ fontSize: isMobile ? '18px' : '20px', fontWeight: 600, color: '#fff', lineHeight: 1.3, margin: isMobile ? '0 0 8px 0' : '0 0 12px 0' }}>Tax savings are abstract. Money feels real.</h4>
                <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0 }}>Employees don't think in slabs. They think "what do I actually save?" The math had to become one personal, immediate number.</p>
              </motion.div>

              {/* Challenge 2 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ fontFamily: "'Jost', sans-serif", background: 'rgba(var(--semantic-error-rgb),0.03)', borderLeft: '3px solid rgba(var(--semantic-error-rgb),0.25)', borderRadius: '4px 16px 16px 4px', padding: isMobile ? '20px' : '28px 32px' }}>
                <div style={{fontFamily: 'var(--font-heading)', color: 'var(--semantic-error)', fontSize: isMobile ? '12px' : '14px', fontWeight: 600, letterSpacing: '0', textTransform: 'uppercase', marginBottom: isMobile ? '4px' : '8px'}}>High-trust commitment</div>
                <h4 style={{ fontSize: isMobile ? '18px' : '20px', fontWeight: 600, color: '#fff', lineHeight: 1.3, margin: isMobile ? '0 0 8px 0' : '0 0 12px 0' }}>A monthly salary EMI is terrifying without trust signals.</h4>
                <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0 }}>Committing months of salary is a high-trust act. Without confidence at every step, people abandon at the product page.</p>
              </motion.div>

              {/* Challenge 3 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ fontFamily: "'Jost', sans-serif", background: 'rgba(var(--semantic-error-rgb),0.03)', borderLeft: '3px solid rgba(var(--semantic-error-rgb),0.25)', borderRadius: '4px 16px 16px 4px', padding: isMobile ? '20px' : '28px 32px' }}>
                <div style={{fontFamily: 'var(--font-heading)', color: 'var(--semantic-error)', fontSize: isMobile ? '12px' : '14px', fontWeight: 600, letterSpacing: '0', textTransform: 'uppercase', marginBottom: isMobile ? '4px' : '8px'}}>Scale without friction</div>
                <h4 style={{ fontSize: isMobile ? '18px' : '20px', fontWeight: 600, color: '#fff', lineHeight: 1.3, margin: isMobile ? '0 0 8px 0' : '0 0 12px 0' }}>HR needs to approve hundreds of requests in seconds.</h4>
                <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0 }}>Approvals at scale break without proper tooling. If approval is slow, HR simply stops using it.</p>
              </motion.div>

              {/* Challenge 4 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} style={{ fontFamily: "'Jost', sans-serif", background: 'rgba(var(--semantic-error-rgb),0.03)', borderLeft: '3px solid rgba(var(--semantic-error-rgb),0.25)', borderRadius: '4px 16px 16px 4px', padding: isMobile ? '20px' : '28px 32px' }}>
                <div style={{fontFamily: 'var(--font-heading)', color: 'var(--semantic-error)', fontSize: isMobile ? '12px' : '14px', fontWeight: 600, letterSpacing: '0', textTransform: 'uppercase', marginBottom: isMobile ? '4px' : '8px'}}>No shared vocabulary</div>
                <h4 style={{ fontSize: isMobile ? '18px' : '20px', fontWeight: 600, color: '#fff', lineHeight: 1.3, margin: isMobile ? '0 0 8px 0' : '0 0 12px 0' }}>Four user types. One order. Four completely different meanings.</h4>
                <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0 }}>Employees think products. HR thinks policy. Financiers think risk. Sellers think fulfillment.</p>
              </motion.div>

              {/* Challenge 5 - Full Width Hero Card */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="lg:col-span-2" style={{ fontFamily: "'Jost', sans-serif", background: 'linear-gradient(135deg, rgba(var(--semantic-error-rgb), 0.07) 0%, rgba(var(--semantic-error-rgb),0.02) 100%)', borderLeft: '3px solid var(--semantic-error)', borderRadius: '4px 16px 16px 4px', padding: isMobile ? '24px' : '32px 40px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr', gap: isMobile ? '12px' : '48px', alignItems: 'center' }}>
                <div>
                  <div style={{fontFamily: 'var(--font-heading)', color: 'var(--semantic-error)', fontSize: isMobile ? '12px' : '14px', fontWeight: 600, letterSpacing: '0', textTransform: 'uppercase', marginBottom: isMobile ? '4px' : '8px'}}>The Hardest One</div>
                  <h4 style={{ fontSize: isMobile ? '22px' : '28px', fontWeight: 600, color: '#fff', margin: 0, lineHeight: 1.3 }}>The invisible 4-party chain.</h4>
                </div>
                <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.7, margin: 0 }}>
                  15+ order states across 4 parties. Three days of silence kills trust even when nothing's wrong. <br />The fix: employees see a clean 5-step progress bar. The chain stays hidden.
                </p>
              </motion.div>

            </div>
          </div>
        </motion.div>

        </div>
      </section>

      <section style={{ padding: isMobile ? '64px 0' : '120px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', height: '600px', background: 'radial-gradient(ellipse, rgba(59,130,246,0.04) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>

            {/* Section Label */}
            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', justifyContent: isMobile ? 'center' : 'flex-start', gap: '16px', marginBottom: '32px' }}>
              <motion.div
                style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
                whileHover="hover"
                whileTap="tap"
                initial="rest"
                animate="rest"
              >
                <svg width="56" height="40" viewBox="0 0 56 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                  <defs>
                    <linearGradient id="csGrad2" x1="0" y1="0" x2="56" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#7928CA" />
                      <stop offset="50%" stopColor="#FF007A" />
                      <stop offset="100%" stopColor="var(--accent-color)" />
                    </linearGradient>
                     <filter id="glow2" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  
                  {/* Handles */}
                  <motion.line x1="12" y1="28" stroke="rgba(255,255,255,0.3)" strokeWidth="1" variants={{ rest: { x2: 26, y2: 28 }, hover: { x2: 20, y2: 38 }, tap: { x2: 8, y2: 18 } }} transition={{ type: "spring", stiffness: 300, damping: 12 }} />
                  <motion.line x1="44" y1="12" stroke="rgba(255,255,255,0.3)" strokeWidth="1" variants={{ rest: { x2: 30, y2: 12 }, hover: { x2: 36, y2: 2 }, tap: { x2: 48, y2: 22 } }} transition={{ type: "spring", stiffness: 300, damping: 12 }} />
                  
                  {/* Curve */}
                  <motion.path stroke="url(#csGrad2)" strokeWidth="2" fill="none" filter="url(#glow2)" variants={{ rest: { d: "M 12 28 C 26 28, 30 12, 44 12" }, hover: { d: "M 12 28 C 20 38, 36 2, 44 12" }, tap: { d: "M 12 28 C 8 18, 48 22, 44 12" } }} transition={{ type: "spring", stiffness: 300, damping: 12 }} />
                  
                  {/* Anchor Nodes */}
                  <rect x="10" y="26" width="4" height="4" fill="#000" stroke="#7928CA" strokeWidth="1" />
                  <rect x="42" y="10" width="4" height="4" fill="#000" stroke="var(--accent-color)" strokeWidth="1" />

                  {/* Control Points */}
                  <motion.circle r="1.5" fill="#fff" variants={{ rest: { cx: 26, cy: 28 }, hover: { cx: 20, cy: 38 }, tap: { cx: 8, cy: 18 } }} transition={{ type: "spring", stiffness: 300, damping: 12 }} />
                  <motion.circle r="1.5" fill="#fff" variants={{ rest: { cx: 30, cy: 12 }, hover: { cx: 36, cy: 2 }, tap: { cx: 48, cy: 22 } }} transition={{ type: "spring", stiffness: 300, damping: 12 }} />
                </svg>
              </motion.div>
              <span style={{ color: 'rgba(255, 255, 255, 0.55)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px', fontFamily: "'Syne', sans-serif" }}>
                02: Design Strategy
              </span>
            </div>

            {/* Heading & Central Tension */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'center' : 'flex-start', textAlign: isMobile ? 'center' : 'left', gap: '24px', marginBottom: '56px', maxWidth: '900px' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 700, color: '#fff', lineHeight: 1.15, letterSpacing: '-0.02em', margin: 0, fontFamily: 'var(--font-heading)' }}>
                Design Principles Driven by Data
              </h2>
              <p style={{ fontSize: '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0, fontFamily: 'var(--font-system)' }}>
                Five principles set before wireframes began, derived directly from research, not assumptions.
              </p>
            </div>

            {/* Principles - Asymmetrical Bento Box Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 mb-16">
              
              {/* Principle 1 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-3 group relative overflow-hidden transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '24px', padding: isMobile ? '20px' : '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
                  <div style={{ minWidth: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '14px', fontWeight: 700, fontFamily: 'var(--font-system)', background: 'rgba(255,255,255, 0.02)' }}>
                    01
                  </div>
                  <h4 style={{ fontSize: isMobile ? '18px' : '20px', fontWeight: 600, color: '#fff', margin: 0, lineHeight: 1.3, fontFamily: "'Jost', sans-serif" }}>Show the rupee, hide the formula</h4>
                </div>
                <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.7, margin: 0, fontFamily: 'var(--font-system)' }}>
                  Present ₹38,257 saved, not tax slab math. Outcomes in the primary view. Mechanics on demand.
                </p>
              </motion.div>

              {/* Principle 2 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="lg:col-span-3 group relative overflow-hidden transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '24px', padding: isMobile ? '20px' : '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
                  <div style={{ minWidth: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '14px', fontWeight: 700, fontFamily: 'var(--font-system)', background: 'rgba(255,255,255, 0.02)' }}>
                    02
                  </div>
                  <h4 style={{ fontSize: isMobile ? '18px' : '20px', fontWeight: 600, color: '#fff', margin: 0, lineHeight: 1.35, fontFamily: "'Jost', sans-serif" }}>Compare to Amazon, not nothing</h4>
                </div>
                <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0, fontFamily: 'var(--font-system)' }}>
                  Savings need contrast to land. Comparison is a first-class feature on the product page, not a marketing footnote.
                </p>
              </motion.div>

              {/* Principle 3 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="lg:col-span-2 group relative overflow-hidden transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '24px', padding: isMobile ? '20px' : '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
                  <div style={{ minWidth: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '14px', fontWeight: 700, fontFamily: 'var(--font-system)', background: 'rgba(255,255,255, 0.02)' }}>
                    03
                  </div>
                  <h4 style={{ fontSize: isMobile ? '18px' : '20px', fontWeight: 600, color: '#fff', margin: 0, lineHeight: 1.35, fontFamily: "'Jost', sans-serif" }}>Answer anxieties proactively</h4>
                </div>
                <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0, fontFamily: 'var(--font-system)' }}>
                  What if it breaks? What if I leave? Every anxiety surfaced in-context.
                </p>
              </motion.div>

              {/* Principle 4 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="lg:col-span-2 group relative overflow-hidden transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '24px', padding: isMobile ? '20px' : '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
                  <div style={{ minWidth: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '14px', fontWeight: 700, fontFamily: 'var(--font-system)', background: 'rgba(255,255,255, 0.02)' }}>
                    04
                  </div>
                  <h4 style={{ fontSize: isMobile ? '18px' : '20px', fontWeight: 600, color: '#fff', margin: 0, lineHeight: 1.35, fontFamily: "'Jost', sans-serif" }}>HR approves in seconds</h4>
                </div>
                <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0, fontFamily: 'var(--font-system)' }}>
                  Name, role, device, policy: one card, one click. No endless scrolling.
                </p>
              </motion.div>

              {/* Principle 5 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="lg:col-span-2 group relative overflow-hidden transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '24px', padding: isMobile ? '20px' : '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
                  <div style={{ minWidth: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '14px', fontWeight: 700, fontFamily: 'var(--font-system)', background: 'rgba(255,255,255, 0.02)' }}>
                    05
                  </div>
                  <h4 style={{ fontSize: isMobile ? '18px' : '20px', fontWeight: 600, color: '#fff', margin: 0, lineHeight: 1.35, fontFamily: "'Jost', sans-serif" }}>Status must never be silent</h4>
                </div>
                <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0, fontFamily: 'var(--font-system)' }}>
                  Every state change triggers a notification to prevent anxiety.
                </p>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </section>
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{
            position: 'relative',
            borderRadius: '32px',
            padding: isMobile ? '16px' : '64px',
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

            <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '80px', position: 'relative', zIndex: 1 }}>
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
                    <linearGradient id="csGrad3" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#7928CA" />
                      <stop offset="50%" stopColor="#FF007A" />
                      <stop offset="100%" stopColor="var(--accent-color)" />
                    </linearGradient>
                     <filter id="glow3" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  
                  {/* Bounding Box */}
                  <motion.rect x="10" y="10" width="20" height="20" fill="rgba(255,0,122,0.05)" stroke="url(#csGrad3)" strokeWidth="1" strokeDasharray="3 3" filter="url(#glow3)"
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

                  {/* Figma Cursor */}
                  <motion.path 
                    d="M 24 20 L 24 31 L 27 28 L 30 34 L 32 33 L 29 27 L 33 27 Z" 
                    fill="#fff" stroke="#000" strokeWidth="1.5" strokeLinejoin="round"
                    variants={{ rest: { x: 6, y: 6, scale: 0.8 }, hover: { x: 0, y: 0, scale: 1.1 }, tap: { x: 2, y: 2, scale: 0.95 } }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }} />
                </svg>
              </motion.div>
              <span style={{ color: 'rgba(255, 255, 255, 0.55)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px', fontFamily: "'Syne', sans-serif", marginTop: '16px' }}>
                03: Ideation & Wireframing
              </span>
            </div>
            <h2 style={{ fontSize: '40px', fontWeight: 600, color: '#fff', marginBottom: '16px', letterSpacing: '0', }}>Early Explorations</h2>
            <p style={{ fontSize: '18px', color: '#D4D4D4', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
              From low-fidelity structural wireframes to the first high-fidelity visual drafts.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'center', padding: '40px 0', flexWrap: 'wrap', gap: '20px' }}>
            
            {/* Phase 1: Initial Wireframes */}
            <motion.div 
               whileHover="hover"
               onClick={() => { setModalImages(Array.from({length: 8}, (_, idx) => `/images/wireframe${idx+1}.jpg`)); setModalIndex(0); }}
               style={{ width: '320px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', overflow: 'hidden', transition: 'all 0.3s ease', cursor: 'pointer', zIndex: 1, display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ height: '260px', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '20px', background: 'radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, transparent 70%)' }}>
                <motion.img variants={{ hover: { rotate: -12, x: -40, y: 10, opacity: 0.8 } }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} src="/images/wireframe3.jpg" alt="Wireframe 3" style={{ position: 'absolute', top: '20px', width: '160px', borderRadius: '12px', opacity: 0.4, border: '1px solid rgba(255,255,255,0.1)' }} />
                <motion.img variants={{ hover: { rotate: 12, x: 40, y: 10, opacity: 0.8 } }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} src="/images/wireframe2.jpg" alt="Wireframe 2" style={{ position: 'absolute', top: '20px', width: '160px', borderRadius: '12px', opacity: 0.6, border: '1px solid rgba(255,255,255,0.1)' }} />
                <motion.img variants={{ hover: { scale: 1.05 } }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} src="/images/wireframe1.jpg" alt="Wireframe 1" style={{ position: 'relative', width: '180px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', zIndex: 10 }} />
                
                <motion.div variants={{ hover: { opacity: 1, scale: 1 } }} initial={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.2 }} style={{ position: 'absolute', zIndex: 20, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', padding: '10px 20px', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', fontSize: '14px', fontWeight: 600, border: '1px solid rgba(255,255,255,0.2)', pointerEvents: 'none' }}>
                  <Maximize size={16} /> Open Gallery
                </motion.div>
                
                <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)', padding: '8px', borderRadius: '50%', color: '#fff', zIndex: 15, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
                  <Maximize size={16} />
                </div>
              </div>
              <div style={{ padding: '24px', background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.05)', flex: 1 }}>
                <h4 style={{ color: '#fff', fontSize: '20px', fontWeight: 600, margin: '0 0 8px 0', letterSpacing: '0', }}>Initial Wireframes</h4>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                  Initial wireframes of homepage, product page, and tax savings slider created using UX Pilot.
                </p>
              </div>
            </motion.div>

            {/* Phase 2: Initial Hi-Fi */}
            <motion.div 
               whileHover="hover"
               onClick={() => { setModalImages(Array.from({length: 5}, (_, idx) => `/images/prev0${idx+1}.jpg`)); setModalIndex(0); }}
               style={{ width: '320px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', overflow: 'hidden', transition: 'all 0.3s ease', cursor: 'pointer', zIndex: 2, display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ height: '260px', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '20px', background: 'radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, transparent 70%)' }}>
                <motion.img variants={{ hover: { rotate: -12, x: -40, y: 10, opacity: 0.8 } }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} src="/images/prev03.jpg" alt="HiFi 3" style={{ position: 'absolute', top: '20px', width: '160px', borderRadius: '12px', opacity: 0.4, border: '1px solid rgba(255,255,255,0.1)' }} />
                <motion.img variants={{ hover: { rotate: 12, x: 40, y: 10, opacity: 0.8 } }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} src="/images/prev02.jpg" alt="HiFi 2" style={{ position: 'absolute', top: '20px', width: '160px', borderRadius: '12px', opacity: 0.6, border: '1px solid rgba(255,255,255,0.1)' }} />
                <motion.img variants={{ hover: { scale: 1.05 } }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} src="/images/prev01.jpg" alt="HiFi 1" style={{ position: 'relative', width: '180px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', zIndex: 10 }} />
                
                <motion.div variants={{ hover: { opacity: 1, scale: 1 } }} initial={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.2 }} style={{ position: 'absolute', zIndex: 20, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', padding: '10px 20px', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', fontSize: '14px', fontWeight: 600, border: '1px solid rgba(255,255,255,0.2)', pointerEvents: 'none' }}>
                  <Maximize size={16} /> Open Gallery
                </motion.div>
                
                <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)', padding: '8px', borderRadius: '50%', color: '#fff', zIndex: 15, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
                  <Maximize size={16} />
                </div>
              </div>
              <div style={{ padding: '24px', background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.05)', flex: 1 }}>
                <h4 style={{ color: '#fff', fontSize: '20px', fontWeight: 600, margin: '0 0 8px 0', letterSpacing: '0', }}>Initial Version Hi-Fi</h4>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                  First Hi-Fi version of Smart EPP.
                </p>
              </div>
            </motion.div>

          </div>

          <div style={{ textAlign: 'center', marginTop: '8px', width: '100%' }}>
            <a href="#final-designs" onClick={(e) => { e.preventDefault(); document.getElementById('final-designs')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ display: isMobile ? 'flex' : 'inline-flex', width: isMobile ? '100%' : 'auto', justifyContent: 'center', alignItems: 'center', gap: '8px', padding: isMobile ? '14px 20px' : '12px 32px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', color: '#fff', textDecoration: 'none', fontSize: isMobile ? '12px' : '14px', fontWeight: 600, fontFamily: "'Syne', sans-serif", textTransform: 'uppercase', letterSpacing: '1px', transition: 'all 0.2s ease', cursor: 'pointer', whiteSpace: 'nowrap' }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'} onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}>
              Jump to Final Designs <ArrowDown size={isMobile ? 16 : 18} />
            </a>
          </div>
          </motion.div>

        </div>
      </section>
      {/* Research Section */}
      <section style={{ padding: isMobile ? '64px 0' : '120px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>

            {/* Section Label */}
            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', justifyContent: isMobile ? 'center' : 'flex-start', gap: '16px', marginBottom: '32px' }}>
              <motion.div
                style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
                whileHover="hover"
                whileTap="tap"
                initial="rest"
                animate="rest"
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                  <defs>
                    <linearGradient id="csGrad4" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#7928CA" />
                      <stop offset="50%" stopColor="#FF007A" />
                      <stop offset="100%" stopColor="var(--accent-color)" />
                    </linearGradient>
                     <filter id="glow4" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  {/* Grid Items */}
                  <motion.rect x="8" y="8" width="8" height="8" rx="1" fill="rgba(255,255,255,0)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"
                    style={{ transformOrigin: '12px 12px' }}
                    variants={{ rest: { scale: 1.3, fill: "rgba(255,255,255,1)", stroke: "rgba(255,255,255,1)" }, hover: { scale: 1, fill: "rgba(255,255,255,0)", stroke: "rgba(255,255,255,0.3)" }, tap: { scale: 1.1 } }} transition={{ type: "spring", stiffness: 300, damping: 15 }} />
                  
                  <motion.rect x="24" y="8" width="8" height="8" rx="1" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                  <motion.rect x="8" y="24" width="8" height="8" rx="1" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                  
                  <motion.rect x="24" y="24" width="8" height="8" rx="1" fill="rgba(255,255,255,0)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"
                    style={{ transformOrigin: '28px 28px' }}
                    variants={{ rest: { scale: 1, fill: "rgba(255,255,255,0)", stroke: "rgba(255,255,255,0.3)" }, hover: { scale: 1.3, fill: "rgba(255,255,255,1)", stroke: "rgba(255,255,255,1)" }, tap: { scale: 1.1 } }} transition={{ type: "spring", stiffness: 300, damping: 15 }} />

                  {/* Magnifying Glass (Loupe) */}
                  <motion.g variants={{ rest: { x: 0, y: 0 }, hover: { x: 16, y: 16 }, tap: { x: 14, y: 14, scale: 0.95 } }} transition={{ type: "spring", stiffness: 200, damping: 20 }}>
                    <motion.circle cx="12" cy="12" r="7" fill="rgba(255,0,122,0.1)" stroke="url(#csGrad4)" strokeWidth="1.5" filter="url(#glow4)" />
                    <motion.line x1="17" y1="17" x2="21" y2="21" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                  </motion.g>
                </svg>
              </motion.div>
              <span style={{ color: 'rgba(255, 255, 255, 0.55)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px', fontFamily: "'Syne', sans-serif" }}>
                04: Evaluative Research
              </span>
            </div>

            {/* Heading & Central Tension */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'center' : 'flex-start', textAlign: isMobile ? 'center' : 'left', gap: '24px', marginBottom: '56px', maxWidth: '900px', margin: isMobile ? '0 auto 56px auto' : '0 0 56px 0' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 700, color: '#fff', lineHeight: 1.15, letterSpacing: '0', margin: 0 }}>
                Testing the Prototypes & Final Fixes.
              </h2>
              <p style={{ fontSize: '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0 }}>
                Tested with <strong style={{ color: '#fff', fontWeight: 600 }}>26 users</strong> across all 4 actors. The core insight: The interface had to be <strong style={{ color: '#fff', fontWeight: 600 }}>simple on the surface, detailed on demand.</strong>
              </p>
            </div>

            {/* Unified 3-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
              
              {/* Card 1: Employee Confusion */}
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-3" style={{ background: '#0d0d0d', border: '1px solid rgba(var(--semantic-warning-rgb),0.15)', borderRadius: '20px', padding: isMobile ? '20px' : '32px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ fontSize: '42px', fontWeight: 700, color: 'var(--semantic-warning)', letterSpacing: '0', lineHeight: 1 }}>73%</div>
                  <div style={{ fontSize: '16px', color: '#D4D4D4', lineHeight: 1.4, flex: 1 }}>couldn't calculate their actual tax savings.</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', marginBottom: '24px' }}>
                  <p style={{ fontSize: '16px', color: '#e5e5e5', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>"I need actual rupees, not a generic percentage."</p>
                </div>
                <div style={{ borderTop: '1px solid rgba(var(--semantic-warning-rgb),0.2)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', marginTop: 'auto' }}>
                  <div>
                    <div style={{fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 700, color: 'var(--semantic-success)', letterSpacing: '0', textTransform: 'uppercase', marginBottom: '4px'}}>The Fix</div>
                    <p style={{ fontSize: '16px', color: '#D4D4D4', lineHeight: 1.5, margin: 0 }}>Interactive tax slider for immediate math.</p>
                  </div>
                  <div 
                    onClick={() => { setModalImages(['/images/smart-epp-calculator-screen.png']); setModalIndex(0); }}
                    style={{ height: '76px', width: '38px', borderRadius: '6px', overflow: 'hidden', cursor: 'pointer', border: '1px solid rgba(var(--semantic-warning-rgb),0.4)', flexShrink: 0, transition: 'all 0.2s ease', position: 'relative', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)'; e.currentTarget.style.borderColor = 'rgba(var(--semantic-warning-rgb),0.8)'; e.currentTarget.style.boxShadow = '0 8px 16px rgba(var(--semantic-warning-rgb),0.15)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1) translateY(0)'; e.currentTarget.style.borderColor = 'rgba(var(--semantic-warning-rgb),0.4)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)'; }}
                  >
                    <img src="/images/smart-epp-calculator-screen.png" alt="Calculator Screen" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.9, filter: 'grayscale(10%)' }} />
                    <div style={{ position: 'absolute', bottom: '4px', right: '4px', background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)', borderRadius: '4px', padding: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <polyline points="9 21 3 21 3 15"></polyline>
                        <line x1="21" y1="3" x2="14" y2="10"></line>
                        <line x1="3" y1="21" x2="10" y2="14"></line>
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Employee Anxiety */}
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="lg:col-span-3" style={{ background: '#0d0d0d', border: '1px solid rgba(var(--semantic-warning-rgb),0.15)', borderRadius: '20px', padding: isMobile ? '20px' : '32px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ fontSize: '42px', fontWeight: 700, color: 'var(--semantic-warning)', letterSpacing: '0', lineHeight: 1 }}>8/12</div>
                  <div style={{ fontSize: '16px', color: '#D4D4D4', lineHeight: 1.4, flex: 1 }}>flagged device damage as a major concern.</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', marginBottom: '24px' }}>
                  <p style={{ fontSize: '16px', color: '#e5e5e5', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>"What if I drop the phone? Will I still have to pay the EMI?"</p>
                </div>
                <div style={{ borderTop: '1px solid rgba(var(--semantic-warning-rgb),0.2)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', marginTop: 'auto' }}>
                  <div>
                    <div style={{fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 700, color: 'var(--semantic-success)', letterSpacing: '0', textTransform: 'uppercase', marginBottom: '4px'}}>The Fix</div>
                    <p style={{ fontSize: '16px', color: '#D4D4D4', lineHeight: 1.5, margin: 0 }}>Transparent 2-year protection. Accidental damage & theft covered.</p>
                  </div>
                  <div 
                    onClick={() => { setModalImages(['/images/EPP_CaseStudy_10.png']); setModalIndex(0); }}
                    style={{ height: '76px', width: '38px', borderRadius: '6px', overflow: 'hidden', cursor: 'pointer', border: '1px solid rgba(var(--semantic-warning-rgb),0.4)', flexShrink: 0, transition: 'all 0.2s ease', position: 'relative', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)'; e.currentTarget.style.borderColor = 'rgba(var(--semantic-warning-rgb),0.8)'; e.currentTarget.style.boxShadow = '0 8px 16px rgba(var(--semantic-warning-rgb),0.15)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1) translateY(0)'; e.currentTarget.style.borderColor = 'rgba(var(--semantic-warning-rgb),0.4)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)'; }}
                  >
                    <img src="/images/EPP_CaseStudy_10.png" alt="Screen Preview" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', opacity: 0.9, filter: 'grayscale(10%)' }} />
                    <div style={{ position: 'absolute', bottom: '4px', right: '4px', background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)', borderRadius: '4px', padding: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <polyline points="9 21 3 21 3 15"></polyline>
                        <line x1="21" y1="3" x2="14" y2="10"></line>
                        <line x1="3" y1="21" x2="10" y2="14"></line>
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: HR & Financier Friction */}
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="lg:col-span-3" style={{ background: '#0d0d0d', border: '1px solid rgba(var(--semantic-warning-rgb),0.15)', borderRadius: '20px', padding: isMobile ? '20px' : '32px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ fontSize: '42px', fontWeight: 700, color: 'var(--semantic-warning)', letterSpacing: '0', lineHeight: 1 }}>50+</div>
                  <div style={{ fontSize: '16px', color: '#D4D4D4', lineHeight: 1.4, flex: 1 }}>manual purchase order approvals created massive HR bottlenecks.</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', marginBottom: '24px' }}>
                  <p style={{ fontSize: '16px', color: '#e5e5e5', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>"I can't open 50 purchase orders individually. I need to approve them in bulk."</p>
                </div>
                <div style={{ borderTop: '1px solid rgba(var(--semantic-warning-rgb),0.2)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', marginTop: 'auto' }}>
                  <div>
                    <div style={{fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 700, color: 'var(--semantic-success)', letterSpacing: '0', textTransform: 'uppercase', marginBottom: '4px'}}>The Fix</div>
                    <p style={{ fontSize: '16px', color: '#D4D4D4', lineHeight: 1.5, margin: 0 }}>1-click bulk purchase order approval dashboard.</p>
                  </div>
                  <div 
                    onClick={() => { setModalImages(['/images/HR_BULK.png']); setModalIndex(0); }}
                    style={{ height: '48px', width: '84px', borderRadius: '6px', overflow: 'hidden', cursor: 'pointer', border: '1px solid rgba(var(--semantic-warning-rgb),0.4)', flexShrink: 0, transition: 'all 0.2s ease', position: 'relative', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)'; e.currentTarget.style.borderColor = 'rgba(var(--semantic-warning-rgb),0.8)'; e.currentTarget.style.boxShadow = '0 8px 16px rgba(var(--semantic-warning-rgb),0.15)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1) translateY(0)'; e.currentTarget.style.borderColor = 'rgba(var(--semantic-warning-rgb),0.4)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)'; }}
                  >
                    <img src="/images/HR_BULK.png" alt="Screen Preview" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', opacity: 0.9, filter: 'grayscale(10%)' }} />
                    <div style={{ position: 'absolute', bottom: '4px', right: '4px', background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)', borderRadius: '4px', padding: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <polyline points="9 21 3 21 3 15"></polyline>
                        <line x1="21" y1="3" x2="14" y2="10"></line>
                        <line x1="3" y1="21" x2="10" y2="14"></line>
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 4: Seller Fulfillment */}
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="lg:col-span-3" style={{ background: '#0d0d0d', border: '1px solid rgba(var(--semantic-warning-rgb),0.15)', borderRadius: '20px', padding: isMobile ? '20px' : '32px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ fontSize: '42px', fontWeight: 700, color: 'var(--semantic-warning)', letterSpacing: '0', lineHeight: 1 }}>Late</div>
                  <div style={{ fontSize: '16px', color: '#D4D4D4', lineHeight: 1.4, flex: 1 }}>visibility caused frequent stockouts.</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', marginBottom: '24px' }}>
                  <p style={{ fontSize: '16px', color: '#e5e5e5', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>"By the time it's approved, the device is out of stock."</p>
                </div>
                <div style={{ borderTop: '1px solid rgba(var(--semantic-warning-rgb),0.2)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', marginTop: 'auto' }}>
                  <div>
                     <div style={{fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 700, color: 'var(--semantic-success)', letterSpacing: '0', textTransform: 'uppercase', marginBottom: '4px'}}>The Fix</div>
                     <p style={{ fontSize: '16px', color: '#D4D4D4', lineHeight: 1.5, margin: 0 }}>Pre-approval "Upcoming Orders" pipeline.</p>
                  </div>
                  <div 
                    onClick={() => { setModalImages(['/images/Seller_Upcoming.png']); setModalIndex(0); }}
                    style={{ height: '48px', width: '84px', borderRadius: '6px', overflow: 'hidden', cursor: 'pointer', border: '1px solid rgba(var(--semantic-warning-rgb),0.4)', flexShrink: 0, transition: 'all 0.2s ease', position: 'relative', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)'; e.currentTarget.style.borderColor = 'rgba(var(--semantic-warning-rgb),0.8)'; e.currentTarget.style.boxShadow = '0 8px 16px rgba(var(--semantic-warning-rgb),0.15)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1) translateY(0)'; e.currentTarget.style.borderColor = 'rgba(var(--semantic-warning-rgb),0.4)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)'; }}
                  >
                    <img src="/images/Seller_Upcoming.png" alt="Screen Preview" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', opacity: 0.9, filter: 'grayscale(10%)' }} />
                    <div style={{ position: 'absolute', bottom: '4px', right: '4px', background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)', borderRadius: '4px', padding: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <polyline points="9 21 3 21 3 15"></polyline>
                        <line x1="21" y1="3" x2="14" y2="10"></line>
                        <line x1="3" y1="21" x2="10" y2="14"></line>
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Sub-section divider */}
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', width: '100%', margin: '80px 0 64px 0' }} />
            {/* Heading & Intro */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'center' : 'flex-start', textAlign: isMobile ? 'center' : 'left', gap: '24px', marginBottom: '56px', maxWidth: '900px', margin: isMobile ? '0 auto 56px auto' : '0 0 56px 0' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 700, color: '#fff', lineHeight: 1.15, letterSpacing: '-0.02em', margin: 0, fontFamily: 'var(--font-heading)' }}>
                User Testing: 80% Preference for Context
              </h2>
              <p style={{ fontSize: '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0, fontFamily: 'var(--font-system)' }}>
                Users didn't want a "minimal" interface. They wanted <strong style={{ color: '#fff' }}>proof</strong>. By embedding a real-time savings calculator directly into the product page, we built immediate trust.
              </p>
            </div>

              <div className="flex flex-col gap-6">
                
                {/* The Winner (Top) */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'rgba(16, 185, 129, 0.04)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '24px', padding: isMobile ? '20px' : '48px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '48px', alignItems: 'center' }}>
                  
                  {/* Text Content */}
                  <div style={{ flex: '1 1 400px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 12px', background: 'var(--semantic-success)', borderRadius: '100px', marginBottom: '24px' }}>
                      <span style={{fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 700, color: '#fff', letterSpacing: '0', textTransform: 'uppercase',}}>The Winner</span>
                    </div>
                    <h4 style={{ fontSize: '32px', fontWeight: 700, color: '#fff', margin: '0 0 16px 0', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>Contextual Detail</h4>
                    <p style={{ fontSize: '18px', color: '#D4D4D4', lineHeight: 1.6, margin: '0 0 32px 0', maxWidth: '500px', fontFamily: 'var(--font-system)' }}>
                      How do we prove tax savings without asking for confidential data? We built an <strong style={{ color: '#fff', fontWeight: 600 }}>interactive slider</strong>. Users self-select their tax bracket to instantly reveal their true effective cost—delivering maximum clarity with zero privacy friction.
                    </p>
                    
                    <div>
                      <div style={{ fontSize: '56px', fontWeight: 700, color: 'var(--semantic-success)', lineHeight: 1, fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>9.4%</div>
                      <div style={{ fontSize: '16px', color: '#D4D4D4', fontWeight: 500, fontFamily: 'var(--font-system)', marginTop: '8px' }}>Total Conversion Rate</div>
                    </div>
                    
                    {/* User Quote - Validating the slider */}
                    <div style={{ marginTop: '40px' }}>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.07)', borderLeft: '3px solid rgba(var(--semantic-success-rgb),0.4)', borderRadius: '4px 20px 20px 4px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                      >
                        <p style={{ fontSize: '16px', color: '#e5e5e5', lineHeight: 1.6, margin: '0 0 16px 0', fontStyle: 'italic' }}>
                          "I didn't realise how much I was saving until I put in my tax slab. ₹38,000 is real money. That changed everything for me."
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: 'auto' }}>
                          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 600, color: '#D4D4D4' }}>SE</div>
                          <div style={{ fontSize: '14px', color: '#D4D4D4', fontFamily: "'Jost', sans-serif", letterSpacing: '0', }}>
                            Software Engineer, Hyderabad
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Images */}
                  <div style={{ flex: '1 1 500px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
                    
                    {/* Image 1: Entry Point */}
                    <div 
                      style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', padding: '24px', width: '100%', maxWidth: '280px', display: 'flex', justifyContent: 'center', position: 'relative', cursor: 'pointer', transition: 'transform 0.3s ease' }}
                      onClick={() => { setModalImages(['/images/EPP_CaseStudy_02.png', '/images/EPP_CaseStudy_07.png']); setModalIndex(0); }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      <img 
                        src="/images/EPP_CaseStudy_02.png" 
                        alt="Tax Calculator Entry Point" 
                        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }} 
                      />
                      <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', padding: '8px', borderRadius: '50%', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
                        <Maximize size={16} />
                      </div>
                    </div>

                    {/* Image 2: Slider */}
                    <div 
                      style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', padding: '24px', width: '100%', maxWidth: '280px', display: 'flex', justifyContent: 'center', position: 'relative', cursor: 'pointer', transition: 'transform 0.3s ease' }}
                      onClick={() => { setModalImages(['/images/EPP_CaseStudy_02.png', '/images/EPP_CaseStudy_07.png']); setModalIndex(1); }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      <img 
                        src="/images/EPP_CaseStudy_07.png" 
                        alt="Tax Calculator UI Slider" 
                        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }} 
                      />
                      <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', padding: '8px', borderRadius: '50%', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
                        <Maximize size={16} />
                      </div>
                    </div>

                  </div>
                </motion.div>

                {/* The Losers (Bottom Row) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: isMobile ? '20px' : '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{fontFamily: 'var(--font-heading)', display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#D4D4D4', fontSize: '16px', fontWeight: 700, letterSpacing: '0', textTransform: 'uppercase', marginBottom: '16px',}}>
                      <XCircle size={16} strokeWidth={2.5} /> Rejected Concept
                    </div>
                    <h4 style={{ fontSize: '24px', fontWeight: 600, color: '#e5e5e5', margin: '0 0 16px 0', fontFamily: 'var(--font-heading)' }}>Minimal Product Page</h4>
                    
                    <div style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', borderLeft: '2px solid rgba(255,255,255,0.2)', marginBottom: '20px' }}>
                      <div style={{ fontSize: '16px', color: '#fff', fontStyle: 'italic', marginBottom: '8px', fontFamily: 'var(--font-system)', lineHeight: 1.5 }}>
                        "I don't understand the real benefit. I need to see exactly how much I'm saving."
                      </div>
                      <div style={{fontFamily: 'var(--font-heading)', fontSize: '12px', color: '#737373', textTransform: 'uppercase', letterSpacing: '0', fontWeight: 600}}>
                        — User Testing Feedback
                      </div>
                    </div>

                    <p style={{ fontSize: '16px', color: '#D4D4D4', lineHeight: 1.6, margin: 0, fontFamily: 'var(--font-system)' }}>
                      Too bare. Expecting users to commit to a salary deduction without showing the upfront math was a leap of faith they wouldn't take.
                    </p>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: isMobile ? '20px' : '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{fontFamily: 'var(--font-heading)', display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#D4D4D4', fontSize: '16px', fontWeight: 700, letterSpacing: '0', textTransform: 'uppercase', marginBottom: '16px',}}>
                      <XCircle size={16} strokeWidth={2.5} /> Rejected Concept
                    </div>
                    <h4 style={{ fontSize: '24px', fontWeight: 600, color: '#e5e5e5', margin: '0 0 16px 0', fontFamily: 'var(--font-heading)' }}>Hidden Protection Cost</h4>
                    
                    <div style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', borderLeft: '2px solid rgba(239,68,68,0.5)', marginBottom: '20px' }}>
                      <div style={{ fontSize: '16px', color: '#fff', fontStyle: 'italic', marginBottom: '8px', fontFamily: 'var(--font-system)', lineHeight: 1.5 }}>
                        "Wait, why is the price suddenly higher here? Are there hidden fees?"
                      </div>
                      <div style={{fontFamily: 'var(--font-heading)', fontSize: '12px', color: '#737373', textTransform: 'uppercase', letterSpacing: '0', fontWeight: 600}}>
                        — Drop-off Point Feedback
                      </div>
                    </div>

                    <p style={{ fontSize: '16px', color: '#D4D4D4', lineHeight: 1.6, margin: 0, fontFamily: 'var(--font-system)' }}>
                      Hiding the mandatory insurance cost until checkout destroyed trust. Transparency isn't optional when touching an employee's salary.
                    </p>
                  </motion.div>

                </div>
              </div>
          </motion.div>
        </div>
      </section>



      {/* 06. Final Solution: The Visual Ecosystem */}
      <section id="final-designs" ref={finalDesignsRef} style={{ position: 'relative', padding: isMobile ? '64px 0' : '120px 0', background: '#080808', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
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
        <div className="container" style={{ maxWidth: '1200px', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
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
                    <linearGradient id="csGrad5" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#7928CA" />
                      <stop offset="50%" stopColor="#FF007A" />
                      <stop offset="100%" stopColor="var(--accent-color)" />
                    </linearGradient>
                     <filter id="glow5" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  <motion.g 
                    style={{ transformOrigin: '20px 20px' }} 
                    variants={{ rest: { rotate: 45, scale: 1 }, hover: { rotate: 135, scale: 1.1 }, tap: { rotate: 135, scale: 0.95 } }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    {/* Top Left */}
                    <motion.rect x="7" y="7" width="10" height="10" rx="2" fill="rgba(255,0,122,0.05)" stroke="url(#csGrad5)" strokeWidth="1.5" filter="url(#glow5)"
                      variants={{ rest: { x: -2, y: -2 }, hover: { x: 3, y: 3, fill: "rgba(255,255,255,1)", stroke: "#fff" }, tap: { x: 1, y: 1, fill: "rgba(255,255,255,0.8)", stroke: "#fff" } }} />
                    {/* Top Right */}
                    <motion.rect x="23" y="7" width="10" height="10" rx="2" fill="rgba(255,0,122,0.05)" stroke="url(#csGrad5)" strokeWidth="1.5" filter="url(#glow5)"
                      variants={{ rest: { x: 2, y: -2 }, hover: { x: -3, y: 3, fill: "rgba(255,255,255,1)", stroke: "#fff" }, tap: { x: -1, y: 1, fill: "rgba(255,255,255,0.8)", stroke: "#fff" } }} />
                    {/* Bottom Left */}
                    <motion.rect x="7" y="23" width="10" height="10" rx="2" fill="rgba(255,0,122,0.05)" stroke="url(#csGrad5)" strokeWidth="1.5" filter="url(#glow5)"
                      variants={{ rest: { x: -2, y: 2 }, hover: { x: 3, y: -3, fill: "rgba(255,255,255,1)", stroke: "#fff" }, tap: { x: 1, y: -1, fill: "rgba(255,255,255,0.8)", stroke: "#fff" } }} />
                    {/* Bottom Right */}
                    <motion.rect x="23" y="23" width="10" height="10" rx="2" fill="rgba(255,0,122,0.05)" stroke="url(#csGrad5)" strokeWidth="1.5" filter="url(#glow5)"
                      variants={{ rest: { x: 2, y: 2 }, hover: { x: -3, y: -3, fill: "rgba(255,255,255,1)", stroke: "#fff" }, tap: { x: -1, y: -1, fill: "rgba(255,255,255,0.8)", stroke: "#fff" } }} />
                  </motion.g>
                </svg>
              </motion.div>
              <span style={{ color: 'rgba(255, 255, 255, 0.55)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px', fontFamily: "'Syne', sans-serif", marginTop: '16px' }}>
                05: Final Solution
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.05, letterSpacing: '0', margin: 0 }}>
              The product, screen by screen.
            </h2>
            

            
            {/* Unified Super-Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', marginBottom: '60px', width: '100%' }}>
              <div style={{ display: 'flex', flexWrap: isMobile ? 'nowrap' : 'wrap', justifyContent: 'center', gap: isMobile ? '8px' : '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '100px', padding: '6px', width: 'auto', maxWidth: '100%' }}>
                {[
                  { id: 'employee', label: 'Employee App', icon: <Smartphone size={16} /> },
                  { id: 'hr', label: 'HR Portal', icon: <Users size={16} /> },
                  { id: 'financier', label: 'Financier Portal', icon: <Landmark size={16} /> },
                  { id: 'seller', label: 'Seller Hub', icon: <Package size={16} /> }
                ].map(tab => {
                  const isActive = activePortalTab === tab.id;
                  return (
                  <button
                    key={tab.id}
                    onClick={() => setActivePortalTab(tab.id as any)}
                    style={{
                      position: 'relative',
                      display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
                      padding: isMobile ? (isActive ? '10px 20px' : '12px 14px') : '10px 24px', 
                      borderRadius: '100px',
                      background: 'transparent',
                      color: isActive ? '#fff' : '#888',
                      border: 'none',
                      cursor: 'pointer', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      fontWeight: 500, fontSize: isMobile ? '14px' : '16px', fontFamily: "'Syne', sans-serif"
                    }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="portal-tab-active"
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '100px',
                          zIndex: 0
                        }}
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: isMobile ? '6px' : '8px' }}>
                      {React.cloneElement(tab.icon as any, { size: isMobile ? 18 : 16 })} 
                      {(!isMobile || isActive) && (
                        <motion.span 
                           initial={isMobile ? { width: 0, opacity: 0 } : false} 
                           animate={{ width: 'auto', opacity: 1 }} 
                           transition={{ duration: 0.3 }} 
                           style={{ whiteSpace: 'nowrap', overflow: 'hidden', display: 'inline-block' }}
                        >
                          {tab.label}
                        </motion.span>
                      )}
                    </span>
                  </button>
                )})}
              </div>
            </div>

            </div>

            <motion.div 
              key={activePortalTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{ width: '100%' }}
            >
              {activePortalTab === 'employee' && (
                <div>
                  {/* Grid/Carousel Toggle */}
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
                    <div style={{ display: 'inline-flex', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', padding: '6px' }}>
                      <button 
                        onClick={() => setIsGridView(false)}
                        style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 20px', borderRadius: '100px', background: !isGridView ? 'rgba(255,255,255,0.1)' : 'transparent', color: !isGridView ? '#fff' : 'rgba(255,255,255,0.5)', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', fontSize: '16px', fontWeight: 500, fontFamily: "'Syne', sans-serif" }}
                      >
                        <Columns size={16} /> Carousel
                      </button>
                      <button 
                        onClick={() => setIsGridView(true)}
                        style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 20px', borderRadius: '100px', background: isGridView ? 'rgba(255,255,255,0.1)' : 'transparent', color: isGridView ? '#fff' : 'rgba(255,255,255,0.5)', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', fontSize: '16px', fontWeight: 500, fontFamily: "'Syne', sans-serif" }}
                      >
                        <LayoutGrid size={16} /> Grid View
                      </button>
                    </div>
                  </div>



          {/* Ecosystem Showcase */}
          <style dangerouslySetInnerHTML={{ __html: `
            .ecosystem-scroll::-webkit-scrollbar { display: none; }
            .ecosystem-scroll { -ms-overflow-style: none; scrollbar-width: none; }
          `}} />
          
          <div style={{ 
            position: 'relative',
            width: isGridView ? '100%' : '100vw',
            marginLeft: isGridView ? '0' : 'calc(-50vw + 50%)',
            marginBottom: '80px'
          }}>
            {/* Left Scroll Button */}
            {!isGridView && canScrollLeft && (
              <button 
                onClick={() => handleCarouselScroll('left')}
                style={{ position: 'absolute', left: isMobile ? '2vw' : '4vw', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', padding: isMobile ? '8px' : '16px', color: '#fff', cursor: 'pointer', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)', transition: 'all 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.9)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}
              >
                <ChevronLeft size={isMobile ? 20 : 32} />
              </button>
            )}

            <div 
              className={!isGridView ? "ecosystem-scroll" : ""}
              ref={!isGridView ? scrollRef : null}
              onMouseDown={!isGridView ? handleMouseDown : undefined}
              onMouseLeave={!isGridView ? handleMouseLeave : undefined}
              onMouseUp={!isGridView ? handleMouseUp : undefined}
              onMouseMove={!isGridView ? handleMouseMove : undefined}
              onScroll={!isGridView ? checkScroll : undefined}
              style={{ 
                display: isGridView ? 'grid' : 'flex', 
                gridTemplateColumns: isGridView ? 'repeat(auto-fit, minmax(280px, 1fr))' : undefined,
                gap: isGridView ? '32px' : '48px',
                overflowX: isGridView ? 'visible' : 'auto',
                scrollSnapType: isGridView ? 'none' : (isDragging ? 'none' : 'x mandatory'),
                padding: isGridView ? '0' : '60px 10vw',
                width: '100%',
                alignItems: isGridView ? 'start' : 'center',
                cursor: isGridView ? 'default' : (isDragging ? 'grabbing' : 'default')
            }}>
              {ecosystemImages.map((src, idx) => (
                <motion.img 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true, margin: "0px" }} 
                  transition={{ delay: (idx % 3) * 0.15, duration: 0.6 }} 
                  whileHover={{ y: -10, scale: 1.02 }}
                  onClick={() => {
                    if (!hasDragged.current) {
                      setModalImages(ecosystemImages);
                      setModalIndex(idx);
                    }
                  }}
                  src={src} 
                  alt={`Smart EPP Screen ${idx + 1}`} 
                  draggable={false}
                  style={{ 
                    height: isGridView ? 'auto' : '640px', 
                    width: isGridView ? '100%' : 'auto', 
                    objectFit: 'contain',
                    flexShrink: 0, 
                    scrollSnapAlign: isGridView ? 'none' : 'center', 
                    borderRadius: '24px', 
                    border: '1px solid rgba(255,255,255,0.05)', 
                    boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                    background: '#0a0a0a',
                    pointerEvents: 'auto',
                    cursor: 'pointer',
                    userSelect: 'none',
                    WebkitUserSelect: 'none'
                  }} 
                />
              ))}
            </div>

            {/* Right Scroll Button */}
            {!isGridView && canScrollRight && (
              <button 
                onClick={() => handleCarouselScroll('right')}
                style={{ position: 'absolute', right: isMobile ? '2vw' : '4vw', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', padding: isMobile ? '8px' : '16px', color: '#fff', cursor: 'pointer', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)', transition: 'all 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.9)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}
              >
                <ChevronRight size={isMobile ? 20 : 32} />
              </button>
            )}
          </div>

            
                </div>
              )}

                {activePortalTab === 'hr' && (
                  <div>
                    {/* HR Portal Image */}
                    <div style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <img src="/images/HR.jpg" alt="HR Portal Dashboard" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                  </div>
                )}

                {activePortalTab === 'financier' && (
                  <div>
                    {/* Financier Portal Image */}
                    <div style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <img src="/images/Financier.jpg" alt="Financier Portal Dashboard" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                  </div>
                )}

                {activePortalTab === 'seller' && (
                  <div>
                    {/* Seller Portal Image */}
                    <div style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <img src="/images/Seller.jpg" alt="Seller Hub Dashboard" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
      </section>

      {/* 06: Outcomes & Learnings */}
      <section style={{ padding: isMobile ? '64px 0' : '120px 0', position: 'relative', overflow: 'hidden' }}>

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px' }}>
          
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '16px' }}>
              <motion.div
                style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
                whileHover="hover"
                whileTap="tap"
                initial="rest"
                animate="rest"
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                  <defs>
                    <linearGradient id="csGrad6" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#7928CA" />
                      <stop offset="50%" stopColor="#FF007A" />
                      <stop offset="100%" stopColor="var(--accent-color)" />
                    </linearGradient>
                     <filter id="glow6" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  
                  {/* Background grid line to ground the chart */}
                  <motion.line x1="6" y1="34" x2="34" y2="34" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />

                  {/* Bars */}
                  <motion.rect x="8" width="6" rx="2" fill="rgba(255,0,122,0.05)" stroke="url(#csGrad6)" strokeWidth="1"
                    variants={{ rest: { height: 10, y: 24 }, hover: { height: 14, y: 20 }, tap: { height: 12, y: 22 } }} transition={{ type: "spring", stiffness: 300, damping: 15 }} />

                  <motion.rect x="17" width="6" rx="2" fill="rgba(255,0,122,0.05)" stroke="url(#csGrad6)" strokeWidth="1"
                    variants={{ rest: { height: 16, y: 18 }, hover: { height: 12, y: 22 }, tap: { height: 14, y: 20 } }} transition={{ type: "spring", stiffness: 300, damping: 15 }} />

                  <motion.rect x="26" width="6" rx="2" fill="rgba(255,0,122,0.05)" stroke="url(#csGrad6)" strokeWidth="1" filter="url(#glow6)"
                    variants={{ rest: { height: 24, y: 10 }, hover: { height: 28, y: 6 }, tap: { height: 26, y: 8 } }} transition={{ type: "spring", stiffness: 300, damping: 15 }} />

                  {/* Trend Line */}
                  <motion.path 
                    variants={{ rest: { d: "M 11 24 L 20 18 L 29 10" }, hover: { d: "M 11 20 L 20 22 L 29 6" }, tap: { d: "M 11 22 L 20 20 L 29 8" } }}
                    fill="none" stroke="url(#csGrad6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow6)"
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  />

                  {/* Data Nodes */}
                  <motion.circle cx="11" r="2" fill="#fff" 
                    variants={{ rest: { cy: 24 }, hover: { cy: 20 }, tap: { cy: 22 } }} transition={{ type: "spring", stiffness: 300, damping: 15 }} />
                  <motion.circle cx="20" r="2" fill="#fff" 
                    variants={{ rest: { cy: 18 }, hover: { cy: 22 }, tap: { cy: 20 } }} transition={{ type: "spring", stiffness: 300, damping: 15 }} />
                  
                  {/* Sparkle Node (Success Insight) */}
                  <motion.path 
                    d="M 29 5 L 30 9 L 34 10 L 30 11 L 29 15 L 28 11 L 24 10 L 28 9 Z"
                    fill="#fff" filter="url(#glow6)"
                    style={{ transformOrigin: '29px 10px' }}
                    variants={{ rest: { y: 0, scale: 1, rotate: 0 }, hover: { y: -4, scale: 1.2, rotate: 90 }, tap: { y: -2, scale: 0.9, rotate: 45 } }} 
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  />
                </svg>
              </motion.div>
              <span style={{ color: 'rgba(255, 255, 255, 0.55)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px', fontFamily: "'Syne', sans-serif", marginTop: '16px' }}>
                06: Outcomes & Learnings
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em', margin: '0 0 16px 0', fontFamily: 'var(--font-heading)' }}>
              The Impact Ledger.
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
              Measured 90 days post-launch. A streamlined system delivered powerful business metrics alongside counter-intuitive UX lessons.
            </p>
          </div>

          {/* PART 1: The Hard Numbers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12" style={{ marginBottom: '100px', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '60px 0' }}>
            
            {/* Metric 1 */}
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 700, color: '#D4D4D4', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px'}}>Business Goal</div>
              <div style={{ fontSize: 'clamp(3.5rem, 4.5vw, 4.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
                9.4<span style={{ color: 'var(--semantic-success)', fontSize: '0.5em', letterSpacing: 0, fontWeight: 700 }}>%</span>
              </div>
              <p style={{ fontSize: '18px', color: '#fff', fontWeight: 600, margin: '0 0 8px 0', fontFamily: 'var(--font-heading)' }}>Total Conversion Rate</p>
              <p style={{ fontSize: '16px', color: '#888', lineHeight: 1.6, margin: 0 }}>Nearly double the initial target of 5%, driven by the real-time tax simulator.</p>
            </motion.div>

            {/* Metric 2 */}
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 700, color: '#D4D4D4', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px'}}>HR Efficiency</div>
              <div style={{ fontSize: 'clamp(3.5rem, 4.5vw, 4.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
                11<span style={{ color: 'var(--text-secondary)', fontSize: '0.5em', letterSpacing: 0, fontWeight: 600 }}>s</span>
              </div>
              <p style={{ fontSize: '18px', color: '#fff', fontWeight: 600, margin: '0 0 8px 0', fontFamily: 'var(--font-heading)' }}>Average Approval Time</p>
              <p style={{ fontSize: '16px', color: '#888', lineHeight: 1.6, margin: 0 }}>Drastically reduced from 48 hours thanks to the 1-click bulk PO dashboard.</p>
            </motion.div>

            {/* Metric 3 */}
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 700, color: '#D4D4D4', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px'}}>Seller Network</div>
              <div style={{ fontSize: 'clamp(3.5rem, 4.5vw, 4.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
                -40<span style={{ color: 'var(--semantic-success)', fontSize: '0.5em', letterSpacing: 0, fontWeight: 700 }}>%</span>
              </div>
              <p style={{ fontSize: '18px', color: '#fff', fontWeight: 600, margin: '0 0 8px 0', fontFamily: 'var(--font-heading)' }}>Fulfillment Errors</p>
              <p style={{ fontSize: '16px', color: '#888', lineHeight: 1.6, margin: 0 }}>Stockouts plummeted after giving sellers a "pre-approval" visibility pipeline.</p>
            </motion.div>

          </div>

          {/* PART 2: The Honest Learnings */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', margin: '0 0 16px 0', fontFamily: 'var(--font-heading)' }}>The "So What?"</h3>
              <p style={{ fontSize: '16px', color: '#D4D4D4', lineHeight: 1.6, margin: 0 }}>
                Beyond the metrics, B2B2C FinTech taught us that standard UX "best practices" don't always apply when risk and compliance are involved.
              </p>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-12">
              
              {/* Learning 1 */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <div style={{ display: 'flex', gap: '24px' }}>
                  <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--semantic-info)', fontFamily: 'var(--font-heading)', lineHeight: 1.2 }}>01</div>
                  <div>
                    <h4 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>Strategic Friction Builds Trust</h4>
                    <p style={{ fontSize: '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0 }}>
                      "Zero friction" isn't always the goal in FinTech. Making large loan approvals "1-click" caused panic. We learned that adding <strong style={{ color: '#fff', fontWeight: 600 }}>strategic friction</strong> (like review screens) actually builds necessary psychological safety.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Learning 2 */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <div style={{ display: 'flex', gap: '24px' }}>
                  <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--semantic-warning)', fontFamily: 'var(--font-heading)', lineHeight: 1.2 }}>02</div>
                  <div>
                    <h4 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>Design For Silent Stakeholders</h4>
                    <p style={{ fontSize: '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0 }}>
                      End-users are only half the story. The true bottlenecks were back-office compliance teams. <strong style={{ color: '#fff', fontWeight: 600 }}>B2B UX requires designing the entire operational chain</strong>, not just the consumer-facing interface.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Learning 3 */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <div style={{ display: 'flex', gap: '24px' }}>
                  <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--semantic-error)', fontFamily: 'var(--font-heading)', lineHeight: 1.2 }}>03</div>
                  <div>
                    <h4 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>Transparency Over Cleverness</h4>
                    <p style={{ fontSize: '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0 }}>
                      Trying to make prices look attractive by hiding mandatory insurance until checkout backfired. We learned that in FinTech, <strong style={{ color: '#fff', fontWeight: 600 }}>radical transparency upfront drives higher conversion</strong> than deceptive simplicity.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Learning 4 */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                <div style={{ display: 'flex', gap: '24px' }}>
                  <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--semantic-success)', fontFamily: 'var(--font-heading)', lineHeight: 1.2 }}>04</div>
                  <div>
                    <h4 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>Edge Cases Are The Product</h4>
                    <p style={{ fontSize: '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0 }}>
                      In B2B operations, failure states like stuck orders or rejected KYC aren't edge cases. They are the core user experience. <strong style={{ color: '#fff', fontWeight: 600 }}>You must design failure states first</strong>, rather than treating them as an afterthought.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </section>






    </div>
  );
};
