import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Layers, ArrowLeft, ArrowDown, CheckCircle2, XCircle, AlertCircle, TrendingUp, Clock, Target, Lightbulb, Search, Code, Smartphone, Palette, FileText, Building2, Users, Fingerprint, Wallet, Zap, ChevronLeft, ChevronRight, LayoutGrid, Columns , Package, Landmark, Briefcase, FastForward } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';

// Mock Interactive Component for the Prototype Section
const SmartEPPPrototype = () => {
  const [step, setStep] = useState(1);
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);

  const devices = [
    { id: 'iphone', name: 'iPhone 15 Pro', specs: 'Zero-Cost EMI', price: '₹4,166/mo' },
    { id: 'macbook', name: 'MacBook Air M3', specs: 'Salary Linked', price: '₹5,833/mo' },
  ];

  return (
    <div style={{
      background: 'var(--bg-color)',
      border: '1px solid var(--glass-border)',
      borderRadius: '24px',
      padding: '32px',
      maxWidth: '600px',
      margin: '0 auto',
      boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
      fontFamily: 'var(--font-system)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)' }}>Instant Eligibility Check</h3>
        <span style={{ fontSize: '16px', color: 'var(--accent-color)', fontWeight: 500 }}>Step {step} of 3</span>
      </div>

      <div style={{ minHeight: '200px' }}>
        {step === 1 && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>Select a premium device to calculate your pre-approved monthly EMI.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {devices.map(device => (
                <div 
                  key={device.id}
                  onClick={() => setSelectedDevice(device.id)}
                  style={{
                    padding: '16px',
                    borderRadius: '12px',
                    border: `1px solid ${selectedDevice === device.id ? 'var(--accent-color)' : 'rgba(255,255,255,0.1)'}`,
                    background: selectedDevice === device.id ? 'rgba(239, 68, 68, 0.05)' : 'transparent',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div>
                    <div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{device.name}</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '16px' }}>{device.specs}</div>
                  </div>
                  <div style={{ color: 'var(--text-primary)', fontFamily: "'JetBrains Mono', monospace" }}>{device.price}</div>
                </div>
              ))}
            </div>
            <button 
              onClick={() => selectedDevice && setStep(2)}
              disabled={!selectedDevice}
              style={{
                marginTop: '24px',
                width: '100%',
                padding: '12px',
                background: selectedDevice ? 'var(--text-primary)' : 'rgba(255,255,255,0.1)',
                color: selectedDevice ? 'var(--bg-color)' : 'rgba(255,255,255,0.3)',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 600,
                cursor: selectedDevice ? 'pointer' : 'not-allowed'
              }}
            >
              Continue to verification
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>Auto-verifying your employment via corporate HRMS integration...</p>
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.05)',
              color: 'var(--text-secondary)',
              fontSize: '16px',
              lineHeight: 1.6,
              marginBottom: '24px'
            }}>
              "Successfully fetched employee records. Salary band qualifies for up to ₹2,50,000 in zero-cost EMI financing with no manual KYC required."
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                onClick={() => setStep(1)}
                style={{ flex: 1, padding: '12px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'var(--text-primary)', borderRadius: '8px', cursor: 'pointer' }}
              >
                Back
              </button>
              <button 
                onClick={() => setStep(3)}
                style={{ flex: 2, padding: '12px', background: 'var(--accent-color)', border: 'none', color: '#fff', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}
              >
                Confirm 1-Click Checkout
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '32px 0' }}>
            <CheckCircle2 size={48} color="var(--accent-color)" style={{ margin: '0 auto 16px auto' }} />
            <h4 style={{ color: 'var(--text-primary)', fontSize: '20px', marginBottom: '8px' }}>Purchase Approved</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.6 }}>
              Your new device is being dispatched. The first EMI will be automatically deducted from your next month's payroll.
            </p>
            <button 
                onClick={() => { setStep(1); setSelectedDevice(null); }}
                style={{ marginTop: '24px', padding: '8px 16px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'var(--text-primary)', borderRadius: '100px', cursor: 'pointer', fontSize: '16px' }}
              >
                Reset Prototype
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export const SmartEPPCaseStudy = () => {
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [showHeroPill, setShowHeroPill] = useState(true);
  
  const finalDesignsRef = useRef<HTMLElement>(null);
  const isFinalDesignsInView = useInView(finalDesignsRef, { margin: "0px 0px -20% 0px" });

  useEffect(() => {
    if (isFinalDesignsInView) {
      setShowHeroPill(false);
    }
  }, [isFinalDesignsInView]);
  
  const solutionImages = [
    "/images/EPP_CaseStudy_02.png",
    "/images/EPP_CaseStudy_03.png",
    "/images/EPP_CaseStudy_04.png"
  ];

  const ecosystemImages = [
    "/images/EPP_CaseStudy_01.png",
    "/images/EPP_CaseStudy_02.png",
    "/images/EPP_CaseStudy_03.png",
    "/images/EPP_CaseStudy_04.png",
    "/images/EPP_CaseStudy_05.png",
    "/images/EPP_CaseStudy_06.png",
    "/images/EPP_CaseStudy_07.png",
    "/images/EPP_CaseStudy_08.png",
    "/images/EPP_CaseStudy_09.png"
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

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (modalIndex !== null && modalIndex < modalImages.length - 1) {
      setModalIndex(modalIndex + 1);
    }
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (modalIndex !== null && modalIndex > 0) {
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

  return (
    <div style={{ background: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '120px', overflowX: 'hidden' }}>
      
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
              padding: '40px',
              cursor: 'zoom-out'
            }}
          >
            <button 
              onClick={(e) => { e.stopPropagation(); setModalIndex(null); }}
              style={{ position: 'absolute', top: '40px', right: '40px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', padding: '12px', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', zIndex: 10000 }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >
              <XCircle size={32} />
            </button>

            {/* Prev Button */}
            {modalIndex > 0 && (
              <button 
                onClick={handlePrevImage}
                style={{ position: 'absolute', left: '40px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', padding: '16px', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', zIndex: 10000 }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              >
                <ChevronLeft size={32} />
              </button>
            )}

            <motion.img 
               key={modalIndex} // Add key to trigger animation on index change
               initial={{ scale: 0.9, opacity: 0, x: 50 }} 
               animate={{ scale: 1, opacity: 1, x: 0 }} 
               exit={{ scale: 0.9, opacity: 0, x: -50 }}
               transition={{ type: 'spring', damping: 25, stiffness: 300 }}
               src={modalImages[modalIndex]} 
               style={{ maxHeight: '90vh', maxWidth: '80vw', objectFit: 'contain', display: 'block', borderRadius: '16px', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))' }} 
               onClick={(e) => e.stopPropagation()} 
            />

            {/* Next Button */}
            {modalIndex < modalImages.length - 1 && (
              <button 
                onClick={handleNextImage}
                style={{ position: 'absolute', right: '40px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', padding: '16px', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', zIndex: 10000 }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              >
                <ChevronRight size={32} />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Back Button */}
      <div style={{ position: 'fixed', top: '29px', left: '4vw', zIndex: 100 }}>
        <Link to="/#case-studies" className="btn-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#fff', textDecoration: 'none', fontSize: '16px', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', padding: '12px 24px', borderRadius: '100px' }}>
          <ArrowLeft size={16} /> Back
        </Link>
      </div>

      {/* 1. Out-of-the-box Hero Section (Moved to Drafts) */}
      {false && (
      <section style={{ width: '100%', minHeight: '100vh', paddingTop: '140px', paddingBottom: '0', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#0a0a0a' }}>
        
        <style>
          {`
            .floating-chips {
              position: absolute; 
              inset: 0; 
              pointer-events: none;
              z-index: 15;
            }
            .chip-wrapper {
              position: absolute; 
              pointer-events: auto;
            }
            .chip-1 { top: 15%; left: 5%; }
            .chip-2 { top: 30%; right: 0%; }
            .chip-3 { bottom: 30%; left: 0%; }
            .chip-4 { bottom: 15%; right: 5%; }
            
            @media (max-width: 900px) {
              .floating-chips {
                position: relative;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 16px;
                padding: 24px;
                margin-top: -20px;
                z-index: 20;
              }
              .chip-wrapper {
                position: relative; 
                top: auto !important; 
                left: auto !important; 
                right: auto !important; 
                bottom: auto !important;
              }
            }
          `}
        </style>

        {/* Subtle background glow */}
        <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', width: '80vw', height: '80vw', background: 'radial-gradient(circle, rgba(229,9,20,0.15) 0%, rgba(0,0,0,0) 50%)', zIndex: 1, pointerEvents: 'none' }} />


        {/* Massive Typography */}
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', marginBottom: '-6vw', width: '100%', padding: '0 24px' }}>
          <div>
            <div style={{ display: 'inline-flex', background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-secondary)', padding: '8px 24px', borderRadius: '100px', fontSize: '16px', fontWeight: 700, letterSpacing: '3px', marginBottom: '24px', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
              B2B2C FINTECH CASE STUDY
            </div>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(3rem, 10vw, 8rem)', fontWeight: 800, color: '#fff', margin: '0', letterSpacing: '-0.04em', lineHeight: 1, opacity: 0.95, whiteSpace: 'nowrap' }}>
              SMART EPP
            </h1>
            <p style={{ fontFamily: 'var(--font-system)', fontSize: 'clamp(1rem, 1.5vw, 1.3rem)', color: '#a3a3a3', maxWidth: '600px', margin: '32px auto 0 auto', lineHeight: 1.6, fontWeight: 400 }}>
              Revolutionizing Employee Purchase Programs with zero-friction, salary-linked financing.
            </p>
          </div>
        </div>

        {/* The Floating Ecosystem */}
        <div style={{ position: 'relative', zIndex: 20, width: '100%', maxWidth: '1100px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 'auto' }}>
          
          <img 
            src="/images/Mockup2_EPP.png" 
            alt="Smart EPP" 
            fetchPriority="high"
            style={{ width: '100%', maxWidth: '900px', filter: 'drop-shadow(0 40px 100px rgba(0,0,0,0.8))', position: 'relative', zIndex: 10, objectFit: 'contain', marginBottom: '-5%' }} 
          />

          {/* Floating Context Cards (Chips) */}
          <div className="floating-chips">
            {[
              { class: 'chip-1', icon: <Target size={14}/>, title: "My Role", val: "UX Designer", delay: 0.4 },
              { class: 'chip-2', icon: <Clock size={14}/>, title: "Timeline", val: "4 Months", delay: 0.5 },
              { class: 'chip-3', icon: <Smartphone size={14}/>, title: "Platform", val: "Mobile App", delay: 0.6 },
              { class: 'chip-4', icon: <AlertCircle size={14}/>, title: "Constraint", val: "Strict KYC & NBFC", delay: 0.7 }
            ].map((chip, idx) => (
              <motion.div key={idx} className={`chip-wrapper ${chip.class}`}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <div style={{
                  background: 'rgba(20, 20, 20, 0.75)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '16px 24px',
                  borderRadius: '100px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                  whiteSpace: 'nowrap'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-color)', fontSize: '16px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                    {chip.icon} {chip.title}
                  </div>
                  <div style={{ color: '#fff', fontSize: '16px', fontWeight: 500, letterSpacing: '0.5px' }}>{chip.val}</div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
      )}

      {/* 2. Intro & Stats Section */}
      <section style={{ paddingTop: '150px', paddingBottom: '0', background: 'var(--bg-color)', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
          
          {/* Left Text Block */}
          <div style={{ flex: '1 1 700px', zIndex: 10, paddingBottom: '80px', maxWidth: '800px' }}>
            {/* Pre-header Pill (Drafted) */}
            {false && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ display: 'inline-block', padding: '10px 28px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '100px', background: 'rgba(255,255,255,0.03)', marginBottom: '32px' }}
            >
              <div style={{ color: '#e0e0e0', fontSize: '16px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase' }}>
                0→1 APP DESIGN • ONEASSIST
              </div>
            </motion.div>
            )}

            {/* Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '20px', letterSpacing: '-0.02em' }}
            >
              Up to 40% of that phone is just tax. <span style={{ color: 'var(--semantic-success)', fontWeight: 500 }}>We built the system that gives it back.</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{ fontFamily: "'Jost', sans-serif", fontSize: '24px', color: '#a3a3a3', lineHeight: 1.6, marginBottom: '32px', maxWidth: '100%' }}
            >
              SmartEPP lets employees lease premium devices and reclaim that 40%. Paid via monthly Salary EMIs, covered by insurance. I designed all 4 platforms end to end, from a blank canvas.
            </motion.p>

            {/* Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}
            >
              {['Mobile App', 'HR Dashboard', 'Lessor Portal', 'Seller Portal'].map((tag, idx) => (
                <div key={idx} style={{ fontFamily: "'Jost', sans-serif", background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '8px 20px', borderRadius: '100px', fontSize: '16px', color: '#a3a3a3', fontWeight: 500, letterSpacing: '0.5px' }}>
                  {tag}
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Mockup Block */}
          <div style={{ flex: '1 1 400px', position: 'relative', zIndex: 5, minHeight: '600px' }}>
            {/* Soft Glow Behind Image */}
            <div style={{ position: 'absolute', top: '50%', left: '30%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(249,87,56,0.15) 0%, transparent 60%)', zIndex: 0 }} />
            
            <motion.img 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, type: 'spring', stiffness: 100 }}
              src="/images/Mockup2_EPP.png" 
              alt="Smart EPP Mobile App Mockup" 
              style={{ position: 'absolute', top: '-20%', left: '-25%', width: '165%', maxWidth: '1100px', objectFit: 'contain', zIndex: 2, filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.6))' }}
            />
            
            {/* CTA Removed */}
          </div>

        </div>

        {/* Stats - Top-Border Metric Style */}
        <div className="container" style={{ position: 'relative', zIndex: 20 }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '24px',
              marginTop: '0px'
            }}
          >
            {[
              { label: 'ROLE', value: 'UX Designer', subtext: 'Solo designer' },
              { label: 'TEAM', value: '1 PM • 2 FE • 1 BE', subtext: '1 QA • 1 Business Analyst' },
              { label: 'PLATFORMS', value: 'iOS • Android • Web', subtext: '4 portals • 2 mobile OS' },
              { label: 'TIMELINE', value: '5 months', subtext: 'Blank canvas → shipped MVP' },
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
                  fontFamily: "'Jost', sans-serif"
                }}
              >
                <div style={{ color: '#a3a3a3', fontSize: '14px', fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '8px' }}>
                  {stat.label}
                </div>
                <div style={{ color: (stat as any).highlight ? 'var(--accent-color)' : '#fff', fontSize: '20px', fontWeight: 500, marginBottom: '4px', letterSpacing: '-0.01em' }}>
                  {stat.value}
                </div>
                <div style={{ color: '#a3a3a3', fontSize: '16px', lineHeight: 1.5 }}>
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
                bottom: '40px',
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
                <span style={{ fontSize: '16px', fontWeight: 600, letterSpacing: '0.5px' }}>Scroll to final designs</span>
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
      <section style={{ padding: '160px 0' }}>
        <div className="container">
          
          {/* Zone A & B: The Setup Block */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(145deg, rgba(var(--semantic-error-rgb),0.06) 0%, rgba(10,10,10,0) 45%, rgba(10,10,10,0) 100%)', border: '1px solid rgba(var(--semantic-error-rgb),0.12)', borderRadius: '32px', padding: '64px', position: 'relative', overflow: 'hidden' }}>
            
            {/* Background watermark */}
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(var(--semantic-error-rgb),0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--semantic-error)', fontSize: '16px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '32px' }}>
              <AlertCircle size={14} strokeWidth={2.5} />
              The Problem
            </div>

            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', maxWidth: '1100px', margin: 0 }}>
              A 4-party financial product that had to feel as simple as shopping on Amazon.
            </h2>
            
            <div style={{ marginTop: '64px' }} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              {/* Narrative (Left) */}
              <div className="lg:col-span-7" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '20px', color: '#e5e5e5', lineHeight: 'normal', letterSpacing: '0px', margin: 0, marginBottom: '24px' }}>
                  OneAssist launched a new category: employee device leasing. Employees lease premium phones through work and save up to 40%, paid via monthly salary EMIs. The employer pays nothing and gains a zero-cost retention perk; OneAssist earns on the mandatory theft-and-damage protection bundled into every lease.
                </p>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '20px', color: '#e5e5e5', lineHeight: 'normal', letterSpacing: '0px', margin: 0 }}>
                  Why now: a 2023–24 tax change unlocked the savings. 30% income-tax relief plus 18% GST nets ~40% after financier interest.
                </p>
              </div>

              {/* Stats (Right) */}
              <div className="lg:col-span-5" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', fontFamily: "'Jost', sans-serif" }}>
                <div style={{ fontSize: '16px', color: 'var(--semantic-error)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px', fontWeight: 600 }}>
                  Project Scope
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                  
                  <div style={{ background: 'rgba(var(--semantic-error-rgb),0.04)', borderLeft: '3px solid rgba(var(--semantic-error-rgb),0.3)', borderRadius: '4px 12px 12px 4px', padding: '16px 20px' }}>
                    <div style={{ color: '#a3a3a3', fontSize: '16px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '8px' }}>Core Features</div>
                    <div style={{ color: '#fff', fontSize: '24px', fontWeight: 500, lineHeight: 1, marginBottom: '6px' }}>12+</div>
                    <div style={{ color: '#a3a3a3', fontSize: '16px', lineHeight: 1.5 }}>End-to-end leasing workflows.</div>
                  </div>

                  <div style={{ background: 'rgba(var(--semantic-error-rgb),0.04)', borderLeft: '3px solid rgba(var(--semantic-error-rgb),0.3)', borderRadius: '4px 12px 12px 4px', padding: '16px 20px' }}>
                    <div style={{ color: '#a3a3a3', fontSize: '16px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '8px' }}>User Types</div>
                    <div style={{ color: '#fff', fontSize: '24px', fontWeight: 500, lineHeight: 1, marginBottom: '6px' }}>4</div>
                    <div style={{ color: '#a3a3a3', fontSize: '16px', lineHeight: 1.5 }}>Distinct actors in one shared flow.</div>
                  </div>

                  <div style={{ background: 'rgba(var(--semantic-error-rgb),0.04)', borderLeft: '3px solid rgba(var(--semantic-error-rgb),0.3)', borderRadius: '4px 12px 12px 4px', padding: '16px 20px' }}>
                    <div style={{ color: '#a3a3a3', fontSize: '16px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '8px' }}>Backbone</div>
                    <div style={{ color: '#fff', fontSize: '24px', fontWeight: 500, lineHeight: 1, marginBottom: '6px' }}>1</div>
                    <div style={{ color: '#a3a3a3', fontSize: '16px', lineHeight: 1.5 }}>Unified operational backend.</div>
                  </div>

                  <div style={{ background: 'rgba(var(--semantic-error-rgb),0.04)', borderLeft: '3px solid rgba(var(--semantic-error-rgb),0.3)', borderRadius: '4px 12px 12px 4px', padding: '16px 20px' }}>
                    <div style={{ color: '#a3a3a3', fontSize: '16px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '8px' }}>Integrations</div>
                    <div style={{ color: '#fff', fontSize: '24px', fontWeight: 500, lineHeight: 1, marginBottom: '6px' }}>3</div>
                    <div style={{ color: '#a3a3a3', fontSize: '16px', lineHeight: 1.5 }}>HRMS, Payment Gateway & IAM.</div>
                  </div>

                  <div style={{ background: 'rgba(var(--semantic-error-rgb),0.04)', borderLeft: '3px solid rgba(var(--semantic-error-rgb),0.3)', borderRadius: '4px 12px 12px 4px', padding: '16px 20px' }}>
                    <div style={{ color: '#a3a3a3', fontSize: '16px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '8px' }}>Key Deliverables</div>
                    <div style={{ color: '#fff', fontSize: '24px', fontWeight: 500, lineHeight: 1, marginBottom: '6px' }}>250+</div>
                    <div style={{ color: '#a3a3a3', fontSize: '16px', lineHeight: 1.5 }}>High-fidelity screens & flows.</div>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.02)', borderLeft: '3px solid #333', borderRadius: '4px 12px 12px 4px', padding: '16px 20px' }}>
                    <div style={{ color: '#a3a3a3', fontSize: '16px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '8px' }}>Out of Scope</div>
                    <div style={{ color: '#a3a3a3', fontSize: '16px', fontWeight: 400, lineHeight: 1.5, marginTop: '6px' }}>Brand identity.</div>
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
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontFamily: "'Jost', sans-serif", background: 'rgba(var(--semantic-error-rgb),0.03)', borderLeft: '3px solid rgba(var(--semantic-error-rgb),0.25)', borderRadius: '4px 16px 16px 4px', padding: '28px 32px' }}>
                <div style={{ color: 'var(--semantic-error)', fontSize: '14px', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Abstract savings</div>
                <h4 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '6px', lineHeight: 1.3, margin: '0 0 6px 0' }}>Tax savings are abstract. Money feels real.</h4>
                <p style={{ fontSize: '18px', color: '#a3a3a3', lineHeight: 1.6, margin: 0 }}>Employees don't think in slabs. They think "what do I actually save?" The math had to become one personal, immediate number.</p>
              </motion.div>

              {/* Challenge 2 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ fontFamily: "'Jost', sans-serif", background: 'rgba(var(--semantic-error-rgb),0.03)', borderLeft: '3px solid rgba(var(--semantic-error-rgb),0.25)', borderRadius: '4px 16px 16px 4px', padding: '28px 32px' }}>
                <div style={{ color: 'var(--semantic-error)', fontSize: '14px', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>High-trust commitment</div>
                <h4 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', margin: '0 0 6px 0', lineHeight: 1.3 }}>A monthly salary EMI is terrifying without trust signals.</h4>
                <p style={{ fontSize: '18px', color: '#a3a3a3', lineHeight: 1.6, margin: 0 }}>Committing months of salary is a high-trust act. Without confidence at every step, people abandon at the product page.</p>
              </motion.div>

              {/* Challenge 3 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ fontFamily: "'Jost', sans-serif", background: 'rgba(var(--semantic-error-rgb),0.03)', borderLeft: '3px solid rgba(var(--semantic-error-rgb),0.25)', borderRadius: '4px 16px 16px 4px', padding: '28px 32px' }}>
                <div style={{ color: 'var(--semantic-error)', fontSize: '14px', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Scale without friction</div>
                <h4 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', margin: '0 0 6px 0', lineHeight: 1.3 }}>HR needs to approve hundreds of requests in seconds.</h4>
                <p style={{ fontSize: '18px', color: '#a3a3a3', lineHeight: 1.6, margin: 0 }}>Approvals at scale break without proper tooling. If approval is slow, HR simply stops using it.</p>
              </motion.div>

              {/* Challenge 4 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} style={{ fontFamily: "'Jost', sans-serif", background: 'rgba(var(--semantic-error-rgb),0.03)', borderLeft: '3px solid rgba(var(--semantic-error-rgb),0.25)', borderRadius: '4px 16px 16px 4px', padding: '28px 32px' }}>
                <div style={{ color: 'var(--semantic-error)', fontSize: '14px', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>No shared vocabulary</div>
                <h4 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', margin: '0 0 6px 0', lineHeight: 1.3 }}>Four user types. One order. Four completely different meanings.</h4>
                <p style={{ fontSize: '18px', color: '#a3a3a3', lineHeight: 1.6, margin: 0 }}>Employees think products. HR thinks policy. Lessors think risk. Sellers think fulfillment.</p>
              </motion.div>

              {/* Challenge 5 - Full Width Hero Card */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="lg:col-span-2" style={{ fontFamily: "'Jost', sans-serif", background: 'linear-gradient(135deg, rgba(var(--semantic-error-rgb), 0.07) 0%, rgba(var(--semantic-error-rgb),0.02) 100%)', borderLeft: '3px solid var(--semantic-error)', borderRadius: '4px 16px 16px 4px', padding: '32px 40px', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '48px', alignItems: 'center' }}>
                <div>
                  <div style={{ color: 'var(--semantic-error)', fontSize: '14px', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>The Hardest One</div>
                  <h4 style={{ fontSize: '28px', fontWeight: 600, color: '#fff', margin: 0, lineHeight: 1.3 }}>The invisible 4-party chain.</h4>
                </div>
                <p style={{ fontSize: '18px', color: '#a3a3a3', lineHeight: 1.7, margin: 0 }}>
                  15+ order states across 4 parties. Three days of silence kills trust even when nothing's wrong. The fix: employees see a clean 5-step progress bar. The chain stays hidden.
                </p>
              </motion.div>

            </div>
          </div>
        </motion.div>

        </div>
      </section>

      {/* Research Section */}
      <section style={{ padding: '0 0 160px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '32px', padding: '64px' }}>

            {/* Section Label */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--semantic-info)', fontSize: '16px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '32px' }}>
              <Search size={14} strokeWidth={2.5} />
              Research
            </div>

            {/* Heading & Central Tension */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '56px', maxWidth: '900px' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 700, color: '#fff', lineHeight: 1.15, letterSpacing: '-0.02em', margin: 0 }}>
                Validating the prototype.
              </h2>
              <p style={{ fontSize: '18px', color: '#a3a3a3', lineHeight: 1.6, margin: 0 }}>
                26 early prototype testing sessions revealed a core tension: B2B complexity vs. consumer simplicity. The interface had to be <strong style={{ color: '#fff', fontWeight: 600 }}>simple on the surface, detailed on demand.</strong>
              </p>
            </div>

            {/* Unified 3-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              
              {/* Card 1: Employee Confusion */}
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: '#0d0d0d', border: '1px solid rgba(var(--semantic-warning-rgb),0.15)', borderRadius: '20px', padding: '32px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ fontSize: '42px', fontWeight: 700, color: 'var(--semantic-warning)', letterSpacing: '-0.03em', lineHeight: 1 }}>73%</div>
                  <div style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.4, flex: 1 }}>failed to calculate their savings using the initial concept.</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', marginBottom: '24px', flex: 1 }}>
                  <p style={{ fontSize: '16px', color: '#e5e5e5', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>"I need actual rupees based on my salary, not a generic percentage."</p>
                </div>
                <div style={{ borderTop: '1px solid rgba(var(--semantic-warning-rgb),0.2)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--semantic-success)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>The Fix</div>
                    <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.5, margin: 0 }}>Personalized calculator. Math must be immediate.</p>
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
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ background: '#0d0d0d', border: '1px solid rgba(var(--semantic-warning-rgb),0.15)', borderRadius: '20px', padding: '32px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ fontSize: '42px', fontWeight: 700, color: 'var(--semantic-warning)', letterSpacing: '-0.03em', lineHeight: 1 }}>8/12</div>
                  <div style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.4, flex: 1 }}>flagged salary EMIs as their top fear.</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', marginBottom: '24px', flex: 1 }}>
                  <p style={{ fontSize: '16px', color: '#e5e5e5', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>"What if I leave the company? What if the device breaks?"</p>
                </div>
                <div style={{ borderTop: '1px solid rgba(var(--semantic-warning-rgb),0.2)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--semantic-success)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>The Fix</div>
                    <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.5, margin: 0 }}>In-context trust signals. No hidden FAQs.</p>
                  </div>
                  <div 
                    onClick={() => { setModalImages(['/images/smart-epp-calculator-screen.png']); setModalIndex(0); }}
                    style={{ height: '76px', width: '38px', borderRadius: '6px', overflow: 'hidden', cursor: 'pointer', border: '1px solid rgba(var(--semantic-warning-rgb),0.4)', flexShrink: 0, transition: 'all 0.2s ease', position: 'relative', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)'; e.currentTarget.style.borderColor = 'rgba(var(--semantic-warning-rgb),0.8)'; e.currentTarget.style.boxShadow = '0 8px 16px rgba(var(--semantic-warning-rgb),0.15)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1) translateY(0)'; e.currentTarget.style.borderColor = 'rgba(var(--semantic-warning-rgb),0.4)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)'; }}
                  >
                    <img src="/images/smart-epp-calculator-screen.png" alt="Screen Preview" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.9, filter: 'grayscale(10%)' }} />
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

              {/* Card 3: HR Friction */}
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ background: '#0d0d0d', border: '1px solid rgba(var(--semantic-warning-rgb),0.15)', borderRadius: '20px', padding: '32px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ fontSize: '42px', fontWeight: 700, color: 'var(--semantic-warning)', letterSpacing: '-0.03em', lineHeight: 1 }}>&lt;30s</div>
                  <div style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.4, flex: 1 }}>required per HR approval to survive at scale.</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', marginBottom: '24px', flex: 1 }}>
                  <p style={{ fontSize: '16px', color: '#e5e5e5', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>"I can't open 50 profiles a week to check eligibility."</p>
                </div>
                <div style={{ borderTop: '1px solid rgba(var(--semantic-warning-rgb),0.2)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--semantic-success)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>The Fix</div>
                    <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.5, margin: 0 }}>Single-row approval dashboard. Zero tab-switching.</p>
                  </div>
                  <div 
                    onClick={() => { setModalImages(['/images/smart-epp-calculator-screen.png']); setModalIndex(0); }}
                    style={{ height: '76px', width: '38px', borderRadius: '6px', overflow: 'hidden', cursor: 'pointer', border: '1px solid rgba(var(--semantic-warning-rgb),0.4)', flexShrink: 0, transition: 'all 0.2s ease', position: 'relative', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)'; e.currentTarget.style.borderColor = 'rgba(var(--semantic-warning-rgb),0.8)'; e.currentTarget.style.boxShadow = '0 8px 16px rgba(var(--semantic-warning-rgb),0.15)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1) translateY(0)'; e.currentTarget.style.borderColor = 'rgba(var(--semantic-warning-rgb),0.4)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)'; }}
                  >
                    <img src="/images/smart-epp-calculator-screen.png" alt="Screen Preview" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.9, filter: 'grayscale(10%)' }} />
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

          </motion.div>
        </div>
      </section>



      {/* Design Exploration */}
      <section style={{ padding: '0 0 80px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '32px', padding: '64px' }}>

            {/* Section Label */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--semantic-brand)', fontSize: '16px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '32px' }}>
              <Palette size={14} strokeWidth={2.5} />
              Design Exploration
            </div>

            {/* Heading & Central Tension */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '56px', maxWidth: '900px' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 700, color: '#fff', lineHeight: 1.15, letterSpacing: '-0.02em', margin: 0, fontFamily: 'var(--font-heading)' }}>
                Principles, then pixels.
              </h2>
              <p style={{ fontSize: '18px', color: '#a3a3a3', lineHeight: 1.6, margin: 0, fontFamily: 'var(--font-system)' }}>
                Five principles set before wireframes began, derived directly from research, not assumptions.
              </p>
            </div>

            {/* Principles - High Conversion Staggered Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              
              {/* Principle 1: Hero Card (Spans 2 cols) */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-2 group relative overflow-hidden transition-all duration-300" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '40px', display: 'flex', flexDirection: 'column', gap: '16px', cursor: 'default' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(var(--semantic-brand-rgb), 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--semantic-brand)', fontSize: '14px', fontWeight: 700, fontFamily: 'var(--font-system)', background: 'rgba(var(--semantic-brand-rgb), 0.05)' }}>
                    01
                  </div>
                  <h4 style={{ fontSize: '24px', fontWeight: 600, color: '#fff', margin: 0, lineHeight: 1.3, fontFamily: 'var(--font-heading)' }}>Show the rupee, hide the formula</h4>
                </div>
                <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.7, margin: 0, maxWidth: '800px', fontFamily: 'var(--font-system)' }}>
                  Present ₹38,257 saved, not tax slab math. Outcomes in the primary view. Mechanics on demand.
                </p>
              </motion.div>

              {/* Principle 2 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="group relative overflow-hidden transition-all duration-300" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '24px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '14px', fontWeight: 700, fontFamily: 'var(--font-system)', background: 'rgba(255,255,255, 0.02)' }}>
                    02
                  </div>
                  <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#fff', margin: 0, lineHeight: 1.35, fontFamily: 'var(--font-heading)' }}>Compare to Amazon, not nothing</h4>
                </div>
                <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.6, margin: 0, fontFamily: 'var(--font-system)' }}>
                  Savings need contrast to land. Comparison is a first-class feature on the PDP, not a marketing footnote.
                </p>
              </motion.div>

              {/* Principle 3 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="group relative overflow-hidden transition-all duration-300" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '24px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '14px', fontWeight: 700, fontFamily: 'var(--font-system)', background: 'rgba(255,255,255, 0.02)' }}>
                    03
                  </div>
                  <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#fff', margin: 0, lineHeight: 1.35, fontFamily: 'var(--font-heading)' }}>Answer anxieties proactively</h4>
                </div>
                <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.6, margin: 0, fontFamily: 'var(--font-system)' }}>
                  What if it breaks? What if I leave? Every anxiety surfaced in-context, before the user has to search.
                </p>
              </motion.div>

              {/* Principle 4 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="group relative overflow-hidden transition-all duration-300" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '24px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '14px', fontWeight: 700, fontFamily: 'var(--font-system)', background: 'rgba(255,255,255, 0.02)' }}>
                    04
                  </div>
                  <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#fff', margin: 0, lineHeight: 1.35, fontFamily: 'var(--font-heading)' }}>HR approves in seconds, not minutes</h4>
                </div>
                <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.6, margin: 0, fontFamily: 'var(--font-system)' }}>
                  Name, role, device, eligibility, policy: one card, one click. No tab-switching or endless scrolling.
                </p>
              </motion.div>

              {/* Principle 5 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="group relative overflow-hidden transition-all duration-300" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '24px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '14px', fontWeight: 700, fontFamily: 'var(--font-system)', background: 'rgba(255,255,255, 0.02)' }}>
                    05
                  </div>
                  <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#fff', margin: 0, lineHeight: 1.35, fontFamily: 'var(--font-heading)' }}>Order status must never be silent</h4>
                </div>
                <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.6, margin: 0, fontFamily: 'var(--font-system)' }}>
                  Every state change triggers a notification. The app answers "where is my order?" before they ask.
                </p>
              </motion.div>

            </div>

            {/* Design Exploration - Asymmetrical Split */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '80px', marginBottom: '80px' }}>
              <div style={{ marginBottom: '48px' }}>
                <h3 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 700, color: '#fff', margin: '0 0 16px 0', letterSpacing: '-0.02em', fontFamily: 'var(--font-heading)' }}>
                  The Winning Formula: 2.4x Higher Conversion
                </h3>
                <p style={{ fontSize: '18px', color: '#a3a3a3', lineHeight: 1.6, margin: 0, maxWidth: '800px', fontFamily: 'var(--font-system)' }}>
                  Users didn't want a "minimal" interface. They wanted <strong style={{ color: '#fff' }}>proof</strong>. By embedding a real-time savings calculator directly into the product page, we built immediate trust.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* The Winner (Left Side) */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-2" style={{ background: 'rgba(16, 185, 129, 0.04)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '24px', padding: '48px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '24px' }}>
                    <div>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 12px', background: 'var(--semantic-success)', borderRadius: '100px', marginBottom: '16px' }}>
                        <span style={{ fontSize: '16px', fontWeight: 700, color: '#fff', letterSpacing: '1px', textTransform: 'uppercase', fontFamily: 'var(--font-system)' }}>The Winner</span>
                      </div>
                      <h4 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', margin: '0 0 8px 0', fontFamily: 'var(--font-heading)' }}>Contextual Detail</h4>
                      <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.6, margin: 0, maxWidth: '400px', fontFamily: 'var(--font-system)' }}>
                        Savings calculator, inline comparison, and protection summary built into one scrollable PDP. Completeness built confidence.
                      </p>
                    </div>
                    
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '48px', fontWeight: 700, color: 'var(--semantic-success)', lineHeight: 1, fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>68%</div>
                      <div style={{ fontSize: '16px', color: '#a3a3a3', fontWeight: 500, fontFamily: 'var(--font-system)', marginTop: '4px' }}>Conversion Rate</div>
                    </div>
                  </div>

                  {/* Wireframe: Contextual Detail */}
                  <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', height: '60px' }} />
                    <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '12px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '6px', height: '12px', width: '90%' }} />
                        <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '6px', height: '12px', width: '70%' }} />
                        <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '6px', height: '12px', width: '50%' }} />
                      </div>
                      <div style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.05))', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '8px', height: '60px' }} />
                    </div>
                    <div style={{ background: 'rgba(16, 185, 129, 0.15)', borderRadius: '8px', height: '40px', marginTop: '8px' }} />
                  </div>
                </motion.div>

                {/* The Losers (Right Side) */}
                <div className="lg:col-span-1" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  
                  <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '32px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#a3a3a3', fontSize: '16px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px', fontFamily: 'var(--font-system)' }}>
                      <XCircle size={14} strokeWidth={2.5} /> Rejected Concept
                    </div>
                    <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#e5e5e5', margin: '0 0 8px 0', fontFamily: 'var(--font-heading)' }}>Minimal PDP</h4>
                    <div style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>28% <span style={{ fontSize: '16px', color: '#a3a3a3', fontWeight: 500, fontFamily: 'var(--font-system)' }}>Conversion</span></div>
                    <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.6, margin: 0, fontFamily: 'var(--font-system)' }}>
                      Too bare. Without seeing exact savings upfront, users wouldn't convert. A monthly salary EMI felt like a leap of faith.
                    </p>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '32px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#a3a3a3', fontSize: '16px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px', fontFamily: 'var(--font-system)' }}>
                      <XCircle size={14} strokeWidth={2.5} /> Rejected Concept
                    </div>
                    <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#e5e5e5', margin: '0 0 8px 0', fontFamily: 'var(--font-heading)' }}>Guided Wizard</h4>
                    <div style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginBottom: '2px', fontFamily: 'var(--font-heading)' }}>44% <span style={{ fontSize: '16px', color: '#a3a3a3', fontWeight: 500, fontFamily: 'var(--font-system)' }}>Step-1 Abandonment</span></div>
                    <div style={{ fontSize: '13px', color: '#737373', marginBottom: '12px', fontFamily: 'var(--font-system)', fontStyle: 'italic' }}>(measures friction, not conversion)</div>
                    <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.6, margin: 0, fontFamily: 'var(--font-system)' }}>
                      Too much friction. People want to browse before they configure. Abandoned at step 1.
                    </p>
                  </motion.div>

                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 05. Final Solution: The Visual Ecosystem */}
      <section id="final-designs" ref={finalDesignsRef} style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '100px', padding: '6px 14px', marginBottom: '28px' }}>
              <span style={{ fontSize: '16px', color: '#a3a3a3', fontFamily: "'Jost', sans-serif", letterSpacing: '0.5px' }}>05: Final Solution</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.03em', margin: 0 }}>
              The product, screen by screen.
            </h2>
            
            
            {/* Unified Super-Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', marginBottom: '60px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '100px', padding: '6px' }}>
                {[
                  { id: 'employee', label: 'Employee App', icon: <Smartphone size={16} /> },
                  { id: 'hr', label: 'HR Portal', icon: <Users size={16} /> },
                  { id: 'financier', label: 'Financier Portal', icon: <Landmark size={16} /> },
                  { id: 'seller', label: 'Seller Hub', icon: <Package size={16} /> }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActivePortalTab(tab.id as any)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      padding: '10px 24px', borderRadius: '100px',
                      background: activePortalTab === tab.id ? 'rgba(255,255,255,0.1)' : 'transparent',
                      color: activePortalTab === tab.id ? '#fff' : '#888',
                      border: 'none',
                      cursor: 'pointer', transition: 'all 0.3s ease',
                      fontWeight: 500, fontSize: '16px'
                    }}
                  >
                    {tab.icon} {tab.label}
                  </button>
                ))}
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
                        style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 20px', borderRadius: '100px', background: !isGridView ? 'rgba(255,255,255,0.1)' : 'transparent', color: !isGridView ? '#fff' : 'rgba(255,255,255,0.5)', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', fontSize: '16px', fontWeight: 500 }}
                      >
                        <Columns size={16} /> Carousel
                      </button>
                      <button 
                        onClick={() => setIsGridView(true)}
                        style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 20px', borderRadius: '100px', background: isGridView ? 'rgba(255,255,255,0.1)' : 'transparent', color: isGridView ? '#fff' : 'rgba(255,255,255,0.5)', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', fontSize: '16px', fontWeight: 500 }}
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
                style={{ position: 'absolute', left: '4vw', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', padding: '16px', color: '#fff', cursor: 'pointer', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)', transition: 'all 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.9)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}
              >
                <ChevronLeft size={32} />
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
                cursor: isGridView ? 'default' : (isDragging ? 'grabbing' : 'pointer')
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
                style={{ position: 'absolute', right: '4vw', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', padding: '16px', color: '#fff', cursor: 'pointer', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)', transition: 'all 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.9)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}
              >
                <ChevronRight size={32} />
              </button>
            )}
          </div>

            
                </div>
              )}

                {activePortalTab === 'hr' && (
                  <div>
                    {/* CSS Mockup for HR */}
                    <div style={{ background: '#111', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden', marginBottom: '40px', boxShadow: '0 24px 60px rgba(0,0,0,0.6)' }}>
                      <div style={{ background: '#1a1a1a', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                          <div style={{ display: 'flex', gap: '6px' }}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
                          </div>
                          <span style={{ color: '#fff', fontWeight: 600, fontSize: '16px', letterSpacing: '-0.01em' }}>HR Portal</span>
                        </div>
                        <div style={{ display: 'flex', gap: '16px' }}>
                          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: '6px', fontSize: '16px', color: '#aaa' }}>Total Savings: <strong style={{color: '#fff'}}>₹18.4L</strong></div>
                          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: '6px', fontSize: '16px', color: '#aaa' }}>Pending: <strong style={{color: '#fff'}}>12</strong></div>
                        </div>
                      </div>
                      <div style={{ padding: '24px' }}>
                        {/* Table Header */}
                        <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr 1fr', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.06)', color: '#a3a3a3', fontSize: '16px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                          <div>Employee</div>
                          <div>Request</div>
                          <div>Eligibility</div>
                          <div style={{ textAlign: 'right' }}>Action</div>
                        </div>
                        {/* Rows */}
                        {[
                          { name: 'Arjun Mehta', role: 'Sr. Engineer (Band 4)', device: 'iPhone 17 Pro Max', cost: '₹11,500/mo', status: 'In Policy', statusColor: '#22c55e' },
                          { name: 'Priya Sharma', role: 'Design Lead (Band 3)', device: 'MacBook Pro 16"', cost: '₹14,200/mo', status: 'Requires Review', statusColor: '#f59e0b' },
                          { name: 'Rahul Desai', role: 'Marketing (Band 2)', device: 'iPad Air', cost: '₹3,400/mo', status: 'In Policy', statusColor: '#22c55e' }
                        ].map((row, i) => (
                          <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr 1fr', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                            <div>
                              <div style={{ color: '#fff', fontWeight: 500, fontSize: '16px', marginBottom: '4px' }}>{row.name}</div>
                              <div style={{ color: '#a3a3a3', fontSize: '16px' }}>{row.role}</div>
                            </div>
                            <div>
                              <div style={{ color: '#e5e5e5', fontSize: '16px', marginBottom: '4px' }}>{row.device}</div>
                              <div style={{ color: '#a3a3a3', fontSize: '16px' }}>{row.cost}</div>
                            </div>
                            <div>
                              <span style={{ display: 'inline-block', padding: '4px 8px', borderRadius: '4px', background: `${row.statusColor}22`, color: row.statusColor, fontSize: '16px', fontWeight: 600 }}>{row.status}</span>
                            </div>
                            <div style={{ textAlign: 'right', display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                              <button style={{ background: 'rgba(255,255,255,0.05)', border: 'none', color: '#fff', padding: '6px 12px', borderRadius: '6px', fontSize: '16px', cursor: 'pointer' }}>Reject</button>
                              <button style={{ background: 'var(--semantic-success)', border: 'none', color: '#fff', padding: '6px 12px', borderRadius: '6px', fontSize: '16px', fontWeight: 500, cursor: 'pointer' }}>Approve</button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                      <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px' }}>
                        <strong style={{ color: '#e5e5e5', fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '16px' }}>Everything at a glance.</strong>
                        <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.7, margin: 0 }}>Employee name, role, band, and requested device cost are visible in a single row. No tab-switching or profile opening required.</p>
                      </div>
                      <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px' }}>
                        <strong style={{ color: '#e5e5e5', fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '16px' }}>Band-based eligibility.</strong>
                        <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.7, margin: 0 }}>HR immediately knows if the device is within policy. Requests outside band limits are automatically flagged for review.</p>
                      </div>
                      <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px' }}>
                        <strong style={{ color: '#e5e5e5', fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '16px' }}>Emotional reframing.</strong>
                        <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.7, margin: 0 }}>Showing "Total Savings" reframes HR from an admin approving requests to a champion delivering real employee value.</p>
                      </div>
                    </div>
                  </div>
                )}

                {activePortalTab === 'financier' && (
                  <div>
                    {/* CSS Mockup for Financier */}
                    <div style={{ background: '#111', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden', marginBottom: '40px', boxShadow: '0 24px 60px rgba(0,0,0,0.6)' }}>
                      <div style={{ background: '#1a1a1a', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                          <div style={{ display: 'flex', gap: '6px' }}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
                          </div>
                          <span style={{ color: '#fff', fontWeight: 600, fontSize: '16px', letterSpacing: '-0.01em' }}>Financier Portal</span>
                        </div>
                        <div style={{ display: 'flex', gap: '16px' }}>
                          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: '6px', fontSize: '16px', color: '#aaa' }}>Disbursed (Mtd): <strong style={{color: '#fff'}}>₹1.2Cr</strong></div>
                          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: '6px', fontSize: '16px', color: '#aaa' }}>Avg EMI: <strong style={{color: '#fff'}}>12 Mo</strong></div>
                        </div>
                      </div>
                      <div style={{ padding: '24px' }}>
                        {/* Top Widgets */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
                           <div style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.1) 0%, rgba(168,85,247,0.02) 100%)', border: '1px solid rgba(168,85,247,0.2)', padding: '20px', borderRadius: '8px' }}>
                              <div style={{ color: '#a855f7', fontSize: '16px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Active Loans</div>
                              <div style={{ color: '#fff', fontSize: '28px', fontWeight: 700 }}>1,432</div>
                           </div>
                           <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '20px', borderRadius: '8px' }}>
                              <div style={{ color: '#a3a3a3', fontSize: '16px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Risk Assessment</div>
                              <div style={{ color: '#22c55e', fontSize: '24px', fontWeight: 600 }}>Low (Corporate)</div>
                           </div>
                           <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '20px', borderRadius: '8px' }}>
                              <div style={{ color: '#a3a3a3', fontSize: '16px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Upcoming EMI Collection</div>
                              <div style={{ color: '#fff', fontSize: '24px', fontWeight: 600 }}>Oct 1st</div>
                           </div>
                        </div>
                        {/* Table Header */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.06)', color: '#a3a3a3', fontSize: '16px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                          <div>Corporate Partner</div>
                          <div>Approved Amount</div>
                          <div>Tenure</div>
                          <div style={{ textAlign: 'right' }}>Status</div>
                        </div>
                        {/* Rows */}
                        {[
                          { corp: 'Infosys Ltd', amount: '₹4,50,000', tenure: '12 Months', status: 'Disbursed', statusColor: '#22c55e' },
                          { corp: 'Wipro', amount: '₹1,20,000', tenure: '24 Months', status: 'Pending KYC', statusColor: '#f59e0b' }
                        ].map((row, i) => (
                          <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                            <div style={{ color: '#fff', fontWeight: 500, fontSize: '16px' }}>{row.corp}</div>
                            <div style={{ color: '#e5e5e5', fontSize: '16px' }}>{row.amount}</div>
                            <div style={{ color: '#a3a3a3', fontSize: '16px' }}>{row.tenure}</div>
                            <div style={{ textAlign: 'right' }}>
                              <span style={{ display: 'inline-block', padding: '4px 8px', borderRadius: '4px', background: `${row.statusColor}22`, color: row.statusColor, fontSize: '16px', fontWeight: 600 }}>{row.status}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                      <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px' }}>
                        <strong style={{ color: '#e5e5e5', fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '16px' }}>Corporate Risk Profiling.</strong>
                        <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.7, margin: 0 }}>Financiers can evaluate loan books based on corporate partner risk rather than individual retail risk, enabling better rates.</p>
                      </div>
                      <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px' }}>
                        <strong style={{ color: '#e5e5e5', fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '16px' }}>Automated Disbursals.</strong>
                        <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.7, margin: 0 }}>Once HR approves and KYC is complete, capital is automatically routed to sellers without manual intervention.</p>
                      </div>
                      <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px' }}>
                        <strong style={{ color: '#e5e5e5', fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '16px' }}>EMI Collection Sync.</strong>
                        <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.7, margin: 0 }}>Direct integration with corporate payroll systems ensures EMI collections are perfectly synced with salary cycles.</p>
                      </div>
                    </div>
                  </div>
                )}

                {activePortalTab === 'seller' && (
                  <div>
                    {/* CSS Mockup for Seller */}
                    <div style={{ background: '#111', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden', marginBottom: '40px', boxShadow: '0 24px 60px rgba(0,0,0,0.6)' }}>
                      <div style={{ background: '#1a1a1a', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                          <div style={{ display: 'flex', gap: '6px' }}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
                          </div>
                          <span style={{ color: '#fff', fontWeight: 600, fontSize: '16px', letterSpacing: '-0.01em' }}>Seller Hub</span>
                        </div>
                        <div style={{ display: 'flex', gap: '16px' }}>
                          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: '6px', fontSize: '16px', color: '#aaa' }}>To Dispatch: <strong style={{color: '#fff'}}>45</strong></div>
                        </div>
                      </div>
                      <div style={{ display: 'flex' }}>
                        {/* Sidebar */}
                        <div style={{ width: '200px', borderRight: '1px solid rgba(255,255,255,0.06)', padding: '24px' }}>
                          <div style={{ color: '#eab308', fontWeight: 600, fontSize: '16px', marginBottom: '16px', padding: '8px', background: 'rgba(234,179,8,0.1)', borderRadius: '6px' }}>Active Orders</div>
                          <div style={{ color: '#a3a3a3', fontWeight: 500, fontSize: '16px', marginBottom: '16px', padding: '8px' }}>Inventory Sync</div>
                          <div style={{ color: '#a3a3a3', fontWeight: 500, fontSize: '16px', marginBottom: '16px', padding: '8px' }}>Logistics</div>
                        </div>
                        {/* Main Content */}
                        <div style={{ flex: 1, padding: '24px' }}>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr 1fr', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.06)', color: '#a3a3a3', fontSize: '16px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                            <div>Order ID</div>
                            <div>Product</div>
                            <div>Shipping</div>
                            <div style={{ textAlign: 'right' }}>Action</div>
                          </div>
                          {[
                            { id: '#ORD-8821', product: 'iPhone 17 Pro Max (256GB)', shipping: 'Express (1 Day)', status: 'Generate AWB' },
                            { id: '#ORD-8822', product: 'MacBook Pro 16" (M4)', shipping: 'Standard (3 Days)', status: 'Pack Order' }
                          ].map((row, i) => (
                            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr 1fr', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                              <div style={{ color: '#a3a3a3', fontSize: '16px', fontFamily: "'Jost', sans-serif" }}>{row.id}</div>
                              <div style={{ color: '#fff', fontSize: '16px', fontWeight: 500 }}>{row.product}</div>
                              <div style={{ color: '#a3a3a3', fontSize: '16px' }}>{row.shipping}</div>
                              <div style={{ textAlign: 'right' }}>
                                <button style={{ background: 'var(--semantic-info)', border: 'none', color: '#fff', padding: '6px 12px', borderRadius: '6px', fontSize: '16px', fontWeight: 500, cursor: 'pointer' }}>{row.status}</button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                      <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px' }}>
                        <strong style={{ color: '#e5e5e5', fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '16px' }}>Inventory Protection.</strong>
                        <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.7, margin: 0 }}>Devices are temporarily reserved during the HR approval window to prevent out-of-stock scenarios for approved requests.</p>
                      </div>
                      <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px' }}>
                        <strong style={{ color: '#e5e5e5', fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '16px' }}>Streamlined Fulfillment.</strong>
                        <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.7, margin: 0 }}>Sellers only see fully funded, approved orders. Financing and corporate approvals are abstracted away completely.</p>
                      </div>
                      <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px' }}>
                        <strong style={{ color: '#e5e5e5', fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '16px' }}>B2B Tax Invoicing.</strong>
                        <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.7, margin: 0 }}>GST invoices are automatically generated in the correct B2B format to ensure corporate tax benefits can be claimed.</p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>

            {/* System Foundations Block - Integrated as Appendix */}
        </div>

        <div className="container">
            {/* System Foundations Block - Integrated as Appendix */}
            <div style={{ marginTop: '40px', paddingBottom: '40px', maxWidth: '100%', margin: '0 auto' }}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Title Block (Inside Grid) */}
                <div className="md:col-span-1 flex flex-col justify-center" style={{ padding: '24px 0' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--semantic-info)' }} />
                    <span style={{ fontSize: '16px', color: '#a3a3a3', fontFamily: "'Jost', sans-serif", letterSpacing: '1px', textTransform: 'uppercase' }}>Behind the Scenes</span>
                  </div>
                  <h3 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 600, color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                    System Foundations.
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.6, maxWidth: '90%' }}>
                    The core design principles powering all four platforms.
                  </p>
                </div>

                {/* Card 1: Design System */}
                <div className="md:col-span-1 flex flex-col justify-center" style={{ background: 'linear-gradient(145deg, #111, #0a0a0a)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '32px' }}>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: '#a3a3a3', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', fontFamily: "'Jost', sans-serif" }}>Design System</div>
                  <h4 style={{ fontSize: '20px', color: '#fff', fontWeight: 500, marginBottom: '12px', letterSpacing: '-0.01em' }}>1 System. 4 Portals.</h4>
                  <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.6, margin: 0, maxWidth: '400px' }}>
                    A unified component library keeps every screen perfectly in sync. We designed once to scale everywhere.
                  </p>
                </div>

                {/* Card 2: Accessibility */}
                <div className="md:col-span-1 flex flex-col justify-center" style={{ background: 'linear-gradient(145deg, #111, #0a0a0a)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '32px' }}>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: '#a3a3a3', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', fontFamily: "'Jost', sans-serif" }}>Accessibility</div>
                  <h4 style={{ fontSize: '20px', color: '#fff', fontWeight: 500, marginBottom: '12px', letterSpacing: '-0.01em' }}>Inclusive by Design.</h4>
                  <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.6, margin: 0 }}>
                    Built for everyone. High-contrast text and large touch targets ensure a frictionless experience.
                  </p>
                </div>

                {/* Card 3: Edge Cases Designed */}
                <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6" style={{ background: 'linear-gradient(145deg, #111, #0a0a0a)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '32px' }}>
                  <div className="flex flex-col justify-center">
                    <div style={{ fontSize: '16px', fontWeight: 700, color: '#a3a3a3', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', fontFamily: "'Jost', sans-serif" }}>Edge Cases Designed</div>
                    <h4 style={{ fontSize: '24px', color: '#fff', fontWeight: 500, marginBottom: '12px', letterSpacing: '-0.01em' }}>Zero Dead Ends.</h4>
                    <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.6, margin: 0 }}>
                      We mapped out failure states so users never hit a wall. Every error offers a way forward.
                    </p>
                  </div>
                  
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.04)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ fontSize: '16px', fontWeight: 600, color: '#e5e5e5', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--semantic-error)' }} /> HR Rejections
                    </div>
                    <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.5, margin: 0 }}>Clear feedback & instant next steps.</p>
                  </div>
                  
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.04)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ fontSize: '16px', fontWeight: 600, color: '#e5e5e5', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--semantic-warning)' }} /> Out of Stock
                    </div>
                    <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.5, margin: 0 }}>Smart alternatives. No blank screens.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* 06. Validation */}
      <section style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '32px', padding: '64px' }}>

            {/* Header */}
            <div style={{ marginBottom: '48px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '100px', padding: '6px 14px', marginBottom: '28px' }}>
                <span style={{ fontSize: '16px', color: '#a3a3a3', fontFamily: "'Jost', sans-serif", letterSpacing: '0.5px' }}>06: Validation</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0 }}>
                How we tested across all four portals.
              </h2>
            </div>

            {/* Testing Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ marginBottom: '24px' }}>
              
              {/* Metric 1 */}
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ background: 'linear-gradient(145deg, #111, #0a0a0a)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '32px' }}>
                <div style={{ fontSize: '16px', fontWeight: 700, color: '#a3a3a3', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', fontFamily: "'Jost', sans-serif" }}>Employee App</div>
                <div style={{ fontSize: 'clamp(2.5rem, 4vw, 3rem)', fontWeight: 700, color: '#fff', lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '12px' }}>
                  11<span style={{ color: '#555', fontSize: '0.6em' }}>/14</span>
                </div>
                <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.6, margin: 0 }}>
                  Employees instantly understood their exact tax savings, up from just 3/14 before we added the interactive calculator.
                </p>
              </motion.div>

              {/* Metric 2 */}
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ background: 'linear-gradient(145deg, #111, #0a0a0a)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '32px' }}>
                <div style={{ fontSize: '16px', fontWeight: 700, color: '#a3a3a3', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', fontFamily: "'Jost', sans-serif" }}>HR Dashboard</div>
                <div style={{ fontSize: 'clamp(2.5rem, 4vw, 3rem)', fontWeight: 700, color: '#fff', lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '12px', display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                  11<span style={{ color: 'var(--semantic-success)', fontSize: '0.4em', letterSpacing: 0, fontWeight: 600 }}>sec</span>
                </div>
                <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.6, margin: 0 }}>
                  Average request approval time. By redesigning the data hierarchy, we slashed this down from 48 seconds.
                </p>
              </motion.div>

              {/* Metric 3 */}
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} style={{ background: 'linear-gradient(145deg, #111, #0a0a0a)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '32px' }}>
                <div style={{ fontSize: '16px', fontWeight: 700, color: '#a3a3a3', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', fontFamily: "'Jost', sans-serif" }}>Order Tracking</div>
                <div style={{ fontSize: 'clamp(2.5rem, 4vw, 3rem)', fontWeight: 700, color: '#fff', lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '12px' }}>
                  -60<span style={{ color: 'var(--semantic-success)', fontSize: '0.6em' }}>%</span>
                </div>
                <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.6, margin: 0 }}>
                  Lower reported anxiety during the "processing" phase by simplifying a complex 15-state model into 4 clear steps.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" style={{ marginBottom: '40px' }}>
              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.07)', borderLeft: '3px solid rgba(var(--semantic-success-rgb),0.4)', borderRadius: '4px 20px 20px 4px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
              >
                <p style={{ fontSize: '17px', color: '#e5e5e5', lineHeight: 1.6, margin: '0 0 20px 0', fontStyle: 'italic' }}>
                  "I didn't realise how much I was saving until I put in my tax slab. ₹38,000 is real money. That changed everything for me."
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 600, color: '#a3a3a3' }}>SE</div>
                  <div style={{ fontSize: '16px', color: '#a3a3a3', fontFamily: "'Jost', sans-serif", letterSpacing: '0.5px' }}>
                    Software Engineer, Hyderabad
                  </div>
                </div>
              </motion.div>

              {/* What changed from testing */}
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{ background: 'rgba(var(--semantic-warning-rgb),0.03)', border: '1px solid rgba(var(--semantic-warning-rgb),0.12)', borderRadius: '20px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--semantic-warning)' }} />
                  <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--semantic-warning)', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: "'Jost', sans-serif" }}>
                    Key Pivot
                  </div>
                </div>
                <p style={{ fontSize: '16px', color: '#c0c0c0', lineHeight: 1.6, margin: 0 }}>
                  Testing showed users completely ignored our standalone "How it works" page. We pivoted immediately, moving the explanation <span style={{ color: 'var(--semantic-warning)', fontWeight: 600 }}>in-context</span> as an inline accordion directly inside the calculator.
                </p>
              </motion.div>
            </div>

            {/* What was NOT validated */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '32px' }}
            >
              <div style={{ fontSize: '16px', fontWeight: 600, color: '#a3a3a3', marginBottom: '8px' }}>What we missed (The Reality Check)</div>
              <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.6, margin: 0 }}>
                Due to timeline constraints, the lessor and seller portals were only stakeholder-reviewed, not user-tested. Upon launch, they generated 3× more change requests than the validated employee apps. We also failed to test the full cross-portal handoff, catching friction only after going live.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 07. Outcomes & Impact */}
      <section style={{ padding: '120px 0', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>

            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '64px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--semantic-success)', fontSize: '16px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px' }}>
                <Target size={14} strokeWidth={2.5} />
                Outcomes & Impact
              </div>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 20px 0', fontFamily: 'var(--font-heading)' }}>
                High adoption. Zero churn.
              </h2>
              <p style={{ fontSize: '18px', color: '#a3a3a3', lineHeight: 1.6, margin: 0, maxWidth: '600px' }}>
                Measured 90 days post-launch. The simplified 4-party flow delivered strong business results and dramatically reduced HR overhead.
              </p>
            </div>

            {/* Hero Metrics - 3 Column */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { value: '68%', label: 'Cart Conversion', sub: 'Target: ≥ 50%' },
                { value: '<12s', label: 'HR Approval', sub: 'Target: ≤ 30s' },
                { value: '0%', label: 'Client Churn', sub: 'Target: Zero drop-offs' }
              ].map((m, i) => (
                <div key={i} style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)', borderTop: '2px solid var(--semantic-success)', borderRadius: '16px', padding: '32px 24px', textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(3rem, 4vw, 4rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1, fontFamily: 'var(--font-heading)', marginBottom: '12px' }}>
                    {m.value}
                  </div>
                  <div style={{ fontSize: '18px', color: '#fff', fontWeight: 600, marginBottom: '8px', fontFamily: "'Jost', sans-serif" }}>{m.label}</div>
                  <div style={{ fontSize: '15px', color: 'var(--semantic-success)', fontWeight: 500 }}>{m.sub}</div>
                </div>
              ))}
            </div>

            {/* Secondary details in 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {/* Qualitative Wins */}
               <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '40px' }}>
                 <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '24px', fontFamily: "'Jost', sans-serif" }}>Beyond the Numbers</h3>
                 <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                       <div style={{ color: 'var(--semantic-success)', marginTop: '2px' }}><CheckCircle2 size={18} /></div>
                       <p style={{ color: '#a3a3a3', fontSize: '16px', lineHeight: 1.5, margin: 0 }}><strong style={{ color: '#fff' }}>4.4★ Rating</strong> across App Store & Play Store.</p>
                    </li>
                    <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                       <div style={{ color: 'var(--semantic-success)', marginTop: '2px' }}><CheckCircle2 size={18} /></div>
                       <p style={{ color: '#a3a3a3', fontSize: '16px', lineHeight: 1.5, margin: 0 }}><strong style={{ color: '#fff' }}>Support tickets</strong> for savings calculation dropped to near-zero.</p>
                    </li>
                    <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                       <div style={{ color: 'var(--semantic-success)', marginTop: '2px' }}><CheckCircle2 size={18} /></div>
                       <p style={{ color: '#a3a3a3', fontSize: '16px', lineHeight: 1.5, margin: 0 }}><strong style={{ color: '#fff' }}>Sales impact:</strong> 3 enterprise clients cited the HR dashboard during renewals.</p>
                    </li>
                 </ul>
               </div>

               {/* The Trade-off */}
               <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '40px', display: 'flex', flexDirection: 'column' }}>
                 <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '24px', fontFamily: "'Jost', sans-serif" }}>The Trade-off</h3>
                 <div style={{ flex: 1, background: 'rgba(239,68,68,0.05)', borderLeft: '3px solid var(--semantic-error)', padding: '24px', borderRadius: '4px 16px 16px 4px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <p style={{ fontSize: '16px', color: '#a3a3a3', margin: '0 0 16px 0', lineHeight: 1.6 }}>
                      We skipped early validation on the <strong style={{ color: '#fff' }}>Lessor/Seller portals</strong> to hit the 5-month MVP deadline.
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
                      <XCircle size={18} color="var(--semantic-error)" style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: '15px', color: '#fff', fontWeight: 500 }}>Missed target of ≤5 change requests, causing unplanned rework.</span>
                    </div>
                 </div>
               </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 08. Reflection */}
      <section style={{ padding: '120px 0', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle reflection background elements */}
        <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '50%', height: '80%', background: 'radial-gradient(ellipse, rgba(255,255,255,0.03) 0%, transparent 60%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '60%', height: '80%', background: 'radial-gradient(ellipse, rgba(59,130,246,0.04) 0%, transparent 60%)', filter: 'blur(100px)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Sticky Header */}
            <div className="lg:col-span-4" style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: 0, paddingTop: 0 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--semantic-info)', fontSize: '16px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', alignSelf: 'flex-start' }}>
                <FastForward size={14} strokeWidth={2.5} />
                <span>08: Reflection</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0, fontFamily: 'var(--font-heading)' }}>
                Looking Back.
              </h2>
              <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '400px' }}>
                Five core lessons from designing a B2B2C FinTech product from scratch, where friction is the enemy and trust is the currency.
              </p>
            </div>

            {/* Right Column: Glass Insight Cards */}
            <div className="lg:col-span-8" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Card 1 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                style={{ background: 'rgba(255,255,255,0.01)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '40px', display: 'flex', gap: '24px', alignItems: 'flex-start', position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.01)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; }}
              >
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '16px', color: '#fff' }}><Search size={24} /></div>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '12px', fontFamily: "'Jost', sans-serif" }}>Research gaps cost time</h3>
                  <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>Lessor and seller portals relied on stakeholder workshops instead of user observation, resulting in significantly higher post-launch change requests.</p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                style={{ background: 'rgba(255,255,255,0.01)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '40px', display: 'flex', gap: '24px', alignItems: 'flex-start', position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.01)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; }}
              >
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '16px', color: '#fff' }}><Layers size={24} /></div>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '12px', fontFamily: "'Jost', sans-serif" }}>System before screens</h3>
                  <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>Extracting components halfway through caused inconsistencies that took 2 weeks to fix. A foundational design system must always come first.</p>
                </div>
              </motion.div>

              {/* HERO CARD - Card 3 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                style={{ background: 'radial-gradient(120% 120% at 50% 0%, rgba(249,87,56,0.1) 0%, rgba(249,87,56,0.02) 100%)', backdropFilter: 'blur(30px)', border: '1px solid rgba(249,87,56,0.2)', borderRadius: '32px', padding: '56px', display: 'flex', flexDirection: 'column', gap: '24px', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(249,87,56,0.4)'; e.currentTarget.style.boxShadow = '0 30px 60px rgba(249,87,56,0.1), inset 0 1px 0 rgba(255,255,255,0.2)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(249,87,56,0.2)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'var(--semantic-brand)' }} />
                <div style={{ background: 'rgba(249,87,56,0.15)', padding: '20px', borderRadius: '20px', color: 'var(--semantic-brand)', alignSelf: 'flex-start' }}><AlertCircle size={32} /></div>
                <div>
                  <h3 style={{ fontSize: '32px', fontWeight: 600, color: '#fff', marginBottom: '16px', lineHeight: 1.2, fontFamily: "'Jost', sans-serif" }}>Edge cases are the product</h3>
                  <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, margin: 0 }}>I used to treat edge cases as final cleanup. This project taught me that in B2B operations, failure states (like a stuck order) are core UX problems. I now audit edge cases during initial problem definition, not as a polish pass.</p>
                </div>
              </motion.div>

              {/* Card 4 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                style={{ background: 'rgba(255,255,255,0.01)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '40px', display: 'flex', gap: '24px', alignItems: 'flex-start', position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.01)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; }}
              >
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '16px', color: '#fff' }}><Lightbulb size={24} /></div>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '12px', fontFamily: "'Jost', sans-serif" }}>Tooltips aren't flows</h3>
                  <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>We answered "What if I leave the company?" with a tooltip. It instantly became the #1 support ticket. It desperately needed a dedicated user flow.</p>
                </div>
              </motion.div>

              {/* Card 5 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
                style={{ background: 'rgba(255,255,255,0.01)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '40px', display: 'flex', gap: '24px', alignItems: 'flex-start', position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.01)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; }}
              >
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '16px', color: '#fff' }}><FastForward size={24} /></div>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '12px', fontFamily: "'Jost', sans-serif" }}>The Next Iteration</h3>
                  <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>(1) Power-user tax calculator mode. (2) Full end-of-tenure flow. (3) Complete redesign of lessor/seller portals backed by actual user research.</p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. Breakdown of Solution (Single Pitch Slide) - MOVED TO DRAFTS */}
      {false && (
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '1600px' }}>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(145deg, rgba(30,30,30,0.8) 0%, rgba(10,10,10,0.9) 100%)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)', padding: '64px', display: 'flex', flexDirection: 'column', gap: '64px', boxShadow: '0 40px 80px rgba(0,0,0,0.4)' }}>
             
             {/* Slide Header */}
             <div style={{ textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', padding: '8px 16px', borderRadius: '100px', fontSize: '16px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px' }}>
                  <CheckCircle2 size={16} /> The Solution
                </div>
                <h2 style={{ fontSize: '40px', fontWeight: 600, color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>Zero-Friction Financing</h2>
                <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
                  A seamless B2B2C FinTech mobile ecosystem offering corporate employees instant salary-linked EMIs and 1-click checkout for premium devices.
                </p>
             </div>

             {/* The 3 Pillars */}
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px' }}>
                {/* Pillar 1 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                   <div style={{ background: 'rgba(255,255,255,0.02)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'center' }}>
                     <img 
                        src="/images/EPP_CaseStudy_02.png" 
                        alt="SSO Auth" 
                        style={{ width: '100%', maxWidth: '180px', borderRadius: '8px', display: 'block', cursor: 'pointer', transition: 'transform 0.3s ease' }} 
                        onClick={() => { setModalImages(solutionImages); setModalIndex(0); }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                     />
                   </div>
                   <div style={{ textAlign: 'center', padding: '0 16px' }}>
                      <h4 style={{ fontSize: '22px', fontWeight: 500, color: '#fff', marginBottom: '12px', letterSpacing: '-0.02em' }}>01. Corporate SSO Auth</h4>
                      <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>Bypassing manual KYC entirely by authenticating directly through the employee's existing corporate HR portal.</p>
                   </div>
                </div>

                {/* Pillar 2 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                   <div style={{ background: 'rgba(255,255,255,0.02)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'center' }}>
                     <img 
                        src="/images/EPP_CaseStudy_03.png" 
                        alt="Dynamic Limits" 
                        style={{ width: '100%', maxWidth: '180px', borderRadius: '8px', display: 'block', cursor: 'pointer', transition: 'transform 0.3s ease' }} 
                        onClick={() => { setModalImages(solutionImages); setModalIndex(1); }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                     />
                   </div>
                   <div style={{ textAlign: 'center', padding: '0 16px' }}>
                      <h4 style={{ fontSize: '22px', fontWeight: 500, color: '#fff', marginBottom: '12px', letterSpacing: '-0.02em' }}>02. Dynamic Limits</h4>
                      <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>Pre-calculating maximum EMIs based on salary bands so users browse with total financial confidence.</p>
                   </div>
                </div>

                {/* Pillar 3 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                   <div style={{ background: 'rgba(255,255,255,0.02)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'center' }}>
                     <img 
                        src="/images/EPP_CaseStudy_04.png" 
                        alt="1-Click Checkout" 
                        style={{ width: '100%', maxWidth: '180px', borderRadius: '8px', display: 'block', cursor: 'pointer', transition: 'transform 0.3s ease' }} 
                        onClick={() => { setModalImages(solutionImages); setModalIndex(2); }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                     />
                   </div>
                   <div style={{ textAlign: 'center', padding: '0 16px' }}>
                      <h4 style={{ fontSize: '22px', fontWeight: 500, color: '#fff', marginBottom: '12px', letterSpacing: '-0.02em' }}>03. 1-Click Checkout</h4>
                      <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>Automatically routing the first EMI deduction to the next month's payroll, eliminating credit cards entirely.</p>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>
      )}

      {/* Moved to drafts */}
      {false && (
      <>
      {/* 5. Research & 6. Analysis */}
      <section style={{ padding: '120px 0', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
             <h2 style={{ fontSize: '36px', fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', margin: '0 0 16px 0' }}>Discovery & Insights</h2>
             <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>We didn't just guess. We looked at the hard data and talked to real employees to understand where the friction lived.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '24px' }}>
            
            {/* Left Column (Spans 4 columns) */}
            <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingLeft: '8px' }}>
                <Search size={24} color="#10b981" />
                <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#fff', margin: 0 }}>The Research</h3>
              </div>
              
              <motion.div 
                 whileHover={{ y: -5 }}
                 style={{ background: 'rgba(255,255,255,0.02)', padding: '40px 32px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '32px', flexGrow: 1 }}
              >
                <div>
                  <div style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1, background: 'linear-gradient(135deg, #10b981, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '8px' }}>40+</div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: 1.5 }}>In-depth user interviews across 3 massive partner companies.</div>
                </div>
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)' }} />
                <div>
                  <div style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1, background: 'linear-gradient(135deg, #10b981, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '8px' }}>15k</div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: 1.5 }}>Funnel data points analyzed via Mixpanel to find the drop-off.</div>
                </div>
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)' }} />
                <div>
                  <div style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1, background: 'linear-gradient(135deg, #10b981, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '8px' }}>3</div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: 1.5 }}>Competitor platforms fully audited for UX teardowns.</div>
                </div>
              </motion.div>
            </div>

            {/* Right Column (Spans 8 columns) */}
            <div style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingLeft: '8px' }}>
                <Lightbulb size={24} color="#3b82f6" />
                <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#fff', margin: 0 }}>The Insights</h3>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flexGrow: 1 }}>
                {/* Insight 1 - Full Width */}
                <motion.div 
                   whileHover={{ y: -5 }}
                   style={{ background: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', flexGrow: 1, display: 'flex', gap: '32px', alignItems: 'center', position: 'relative', overflow: 'hidden' }}
                >
                  <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)', borderRadius: '50%' }} />
                  <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(16,185,129,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Smartphone size={32} color="#10b981" />
                  </div>
                  <div>
                    <div style={{ color: '#10b981', fontSize: '16px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>Insight 01</div>
                    <h4 style={{ color: '#fff', fontSize: '24px', fontWeight: 600, marginBottom: '12px' }}>The "App Fatigue" Hurdle</h4>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', lineHeight: 1.6, margin: 0 }}>Users purchase a laptop once every 3 years. They explicitly refused to download a dedicated, heavy native app for a rare transaction. We needed a lightweight web flow.</p>
                  </div>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', flexGrow: 1 }}>
                  {/* Insight 2 */}
                  <motion.div 
                     whileHover={{ y: -5 }}
                     style={{ background: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}
                  >
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #3b82f6, transparent)' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                      <div style={{ color: '#3b82f6', fontSize: '16px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>Insight 02</div>
                      <Fingerprint size={24} color="#3b82f6" style={{ opacity: 0.6 }} />
                    </div>
                    <h4 style={{ color: '#fff', fontSize: '20px', fontWeight: 600, marginBottom: '12px', paddingRight: '20px' }}>KYC is a Funnel Killer</h4>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', lineHeight: 1.6, margin: 0 }}>Asking for PAN numbers and salary slips upfront caused immediate mistrust. Users felt they were applying for a mortgage just to browse devices.</p>
                  </motion.div>

                  {/* Insight 3 */}
                  <motion.div 
                     whileHover={{ y: -5 }}
                     style={{ background: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}
                  >
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #f59e0b, transparent)' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                      <div style={{ color: '#f59e0b', fontSize: '16px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>Insight 03</div>
                      <AlertCircle size={24} color="#f59e0b" style={{ opacity: 0.6 }} />
                    </div>
                    <h4 style={{ color: '#fff', fontSize: '20px', fontWeight: 600, marginBottom: '12px', paddingRight: '20px' }}>The "Blind Cart" Effect</h4>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', lineHeight: 1.6, margin: 0 }}>Users didn't know their approved EMI limit while browsing. Reaching checkout only to be rejected caused them to abandon the cart entirely.</p>
                  </motion.div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. How Might We's */}
      <section style={{ padding: '120px 0', background: '#050505', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 60%)', borderRadius: '50%', pointerEvents: 'none' }} />
        
        <div style={{ position: 'absolute', left: '32px', bottom: '32px', transform: 'rotate(-90deg)', transformOrigin: 'left bottom', color: '#3b82f6', letterSpacing: '8px', fontSize: '16px', textTransform: 'uppercase', fontWeight: 600, opacity: 0.8 }}>
          Explore
        </div>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <Lightbulb size={40} color="#3b82f6" style={{ margin: '0 auto 24px auto', display: 'block' }} />
          <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#3b82f6', marginBottom: '32px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>The Core HMW</h2>
          <h3 style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 400, color: '#fff', lineHeight: 1.5, margin: 0, fontStyle: 'italic', letterSpacing: '-0.01em' }}>
            "How might we allow employees to confidently browse devices within their pre-approved budget, without manual KYC blocking the funnel?"
          </h3>
        </div>
      </section>

      {/* 8. Ideating/Solutions & 9. Iterations (The Messy Middle) */}
      <section style={{ padding: '120px 0' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#3b82f6', background: 'rgba(59,130,246,0.1)', padding: '8px 16px', borderRadius: '100px', fontSize: '16px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px' }}>
              Ideation & Iteration
            </div>
            <h2 style={{ fontSize: '40px', fontWeight: 600, color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em' }}>The Messy Middle</h2>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
              Design isn't linear. 3 Iterations. 1 Clear Winner.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 0', flexWrap: 'wrap', gap: '20px' }}>
            
            {/* Draft 1 (Failed) */}
            <motion.div 
               whileHover={{ y: -5, rotate: 0, opacity: 1, filter: 'grayscale(0%)', zIndex: 10 }}
               style={{ width: '280px', transform: 'rotate(-6deg)', opacity: 0.5, filter: 'grayscale(100%)', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', overflow: 'hidden', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', zIndex: 1 }}
            >
              <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                <img src="/images/wireframe_v1.png" alt="Draft 1" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100px', background: 'linear-gradient(to bottom, transparent, #0a0a0a)' }} />
              </div>
              <div style={{ padding: '24px', background: '#0a0a0a', marginTop: '-40px', position: 'relative' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(239,68,68,0.1)', color: '#ef4444', padding: '4px 10px', borderRadius: '6px', fontSize: '16px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '12px' }}>
                  <XCircle size={12} /> Draft 01
                </div>
                <h4 style={{ color: '#fff', fontSize: '16px', fontWeight: 600, margin: '0 0 8px 0' }}>Sticker Shock</h4>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', lineHeight: 1.5, margin: 0 }}>
                  Credit limits were hidden until checkout, causing mass cart abandonment.
                </p>
              </div>
            </motion.div>

            {/* Draft 2 (Failed) */}
            <motion.div 
               whileHover={{ y: -5, rotate: 0, opacity: 1, filter: 'grayscale(0%)', zIndex: 10 }}
               style={{ width: '280px', transform: 'rotate(4deg)', opacity: 0.5, filter: 'grayscale(100%)', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', overflow: 'hidden', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', zIndex: 2, marginLeft: '-40px' }}
            >
              <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                <img src="/images/wireframe_v2.png" alt="Draft 2" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100px', background: 'linear-gradient(to bottom, transparent, #0a0a0a)' }} />
              </div>
              <div style={{ padding: '24px', background: '#0a0a0a', marginTop: '-40px', position: 'relative' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(239,68,68,0.1)', color: '#ef4444', padding: '4px 10px', borderRadius: '6px', fontSize: '16px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '12px' }}>
                  <XCircle size={12} /> Draft 02
                </div>
                <h4 style={{ color: '#fff', fontSize: '16px', fontWeight: 600, margin: '0 0 8px 0' }}>High Friction</h4>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', lineHeight: 1.5, margin: 0 }}>
                  Forcing KYC uploads before browsing caused a fatal 70% bounce rate.
                </p>
              </div>
            </motion.div>

            {/* The Winner */}
            <motion.div 
               whileHover={{ y: -10, scale: 1.02 }}
               style={{ width: '560px', background: 'rgba(16,185,129,0.02)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '24px', overflow: 'hidden', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', zIndex: 3, marginLeft: '20px', boxShadow: '0 20px 40px rgba(16,185,129,0.15)', position: 'relative' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '3px', background: 'linear-gradient(90deg, #10b981, #3b82f6)', zIndex: 10 }} />
              <div style={{ height: '300px', overflow: 'hidden', position: 'relative' }}>
                <img src="/images/wireframe_final.png" alt="Winner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '120px', background: 'linear-gradient(to bottom, transparent, #0a0a0a)' }} />
              </div>
              <div style={{ padding: '32px', background: '#0a0a0a', marginTop: '-60px', position: 'relative' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(16,185,129,0.1)', color: '#10b981', padding: '6px 16px', borderRadius: '100px', fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '16px' }}>
                  <CheckCircle2 size={16} /> The Winner
                </div>
                <h4 style={{ color: '#fff', fontSize: '24px', fontWeight: 600, margin: '0 0 16px 0', lineHeight: 1.2 }}>Frictionless SSO & Instant Credit</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: 1.6, margin: 0 }}>
                  By syncing Corporate SSO, we unlocked instant credit limits <strong style={{ color: '#fff' }}>before</strong> browsing. Complex KYC was delayed until checkout, boosting confidence and skyrocketing conversions.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
      </>
      )}

      {/* 10. Final Design w prototype (Live Verification Prototype) - MOVED TO DRAFTS */}
      {false && (
      <section style={{ padding: '120px 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>

          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px', letterSpacing: '-0.02em' }}>Live Verification Prototype</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '600px', marginInline: 'auto' }}>
              By linking directly to corporate HRMS systems, we eliminated the need for manual income verification entirely. Try the flow yourself.
            </p>
          </div>
          
          <SmartEPPPrototype />
        </div>
      </section>
      )}





    </div>
  );
};
