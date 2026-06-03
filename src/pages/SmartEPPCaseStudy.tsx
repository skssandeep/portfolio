import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, XCircle, AlertCircle, TrendingUp, Clock, Target, Lightbulb, Search, Code, Smartphone, Palette, FileText, Building2, Users, Fingerprint, Wallet, Zap, ChevronLeft, ChevronRight, LayoutGrid, Columns , Package, Landmark, Briefcase} from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

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
        <span style={{ fontSize: '14px', color: 'var(--accent-color)', fontWeight: 500 }}>Step {step} of 3</span>
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
                    <div style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>{device.specs}</div>
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
              fontSize: '14px',
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
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>
              Your new device is being dispatched. The first EMI will be automatically deducted from your next month's payroll.
            </p>
            <button 
                onClick={() => { setStep(1); setSelectedDevice(null); }}
                style={{ marginTop: '24px', padding: '8px 16px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'var(--text-primary)', borderRadius: '100px', cursor: 'pointer', fontSize: '13px' }}
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
        <Link to="/#case-studies" className="btn-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#fff', textDecoration: 'none', fontSize: '14px', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', padding: '12px 24px', borderRadius: '100px' }}>
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
            <div style={{ display: 'inline-flex', background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-secondary)', padding: '8px 24px', borderRadius: '100px', fontSize: '13px', fontWeight: 700, letterSpacing: '3px', marginBottom: '24px', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
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
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-color)', fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                    {chip.icon} {chip.title}
                  </div>
                  <div style={{ color: '#fff', fontSize: '14px', fontWeight: 500, letterSpacing: '0.5px' }}>{chip.val}</div>
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
              <div style={{ color: '#e0e0e0', fontSize: '13px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase' }}>
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
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '32px', letterSpacing: '-0.02em' }}
            >
              Up to 40% of that phone is just tax. <span style={{ color: 'var(--semantic-success)', fontWeight: 500 }}>We built the system that gives it back.</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{ fontSize: '18px', color: '#a3a3a3', lineHeight: 1.7, marginBottom: '40px', maxWidth: '100%' }}
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
                <div key={idx} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '8px 20px', borderRadius: '100px', fontSize: '13px', color: '#a3a3a3', fontWeight: 500, letterSpacing: '0.5px' }}>
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
              { label: 'MY ROLE', value: 'UX Designer', subtext: 'Solo designer' },
              { label: 'I WORKED WITH', value: '1 PM • 2 FE • 1 BE', subtext: '1 QA • 1 Business Analyst' },
              { label: 'PLATFORMS', value: 'iOS • Android • Web', subtext: '4 portals • 2 mobile OS' },
              { label: 'TIMELINE', value: '5 months', subtext: 'Blank canvas → shipped MVP' },
              { label: 'USER RESEARCH', value: '26 interviews', subtext: 'Across all 4 actor types' },
              { label: 'DESIGN SYSTEM', value: '44 components', subtext: 'Shared across all 4 portals' },
            ].map((stat, i) => (
              <div 
                key={i}
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  paddingTop: '20px',
                  borderTop: '2px solid',
                  borderColor: stat.highlight ? 'var(--accent-color)' : 'rgba(255,255,255,0.15)'
                }}
              >
                <div style={{ color: '#888', fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>
                  {stat.label}
                </div>
                <div style={{ color: stat.highlight ? 'var(--accent-color)' : '#fff', fontSize: '20px', fontWeight: 500, marginBottom: '6px', letterSpacing: '-0.01em', fontFamily: 'var(--font-heading)' }}>
                  {stat.value}
                </div>
                <div style={{ color: '#666', fontSize: '14px', lineHeight: 1.5 }}>
                  {stat.subtext}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Problem */}
      <section style={{ padding: '160px 0' }}>
        <div className="container">
          
          {/* Zone A & B: The Setup Block */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(145deg, rgba(var(--semantic-error-rgb),0.06) 0%, rgba(10,10,10,0) 45%, rgba(10,10,10,0) 100%)', border: '1px solid rgba(var(--semantic-error-rgb),0.12)', borderRadius: '32px', padding: '64px', position: 'relative', overflow: 'hidden' }}>
            
            {/* Background watermark */}
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(var(--semantic-error-rgb),0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--semantic-error)', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '32px' }}>
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
                <p style={{ fontSize: '18px', color: '#e5e5e5', lineHeight: 1.7, margin: 0, marginBottom: '24px' }}>
                  OneAssist launched a new category: employee device leasing. Employees lease premium phones through work and save up to 40%, paid via monthly salary EMIs. The employer pays nothing and gains a zero-cost retention perk; OneAssist earns on the mandatory theft-and-damage protection bundled into every lease.
                </p>
                <p style={{ fontSize: '18px', color: '#e5e5e5', lineHeight: 1.7, margin: 0 }}>
                  Why now: a 2023–24 tax change unlocked the savings. 30% income-tax relief plus 18% GST nets ~40% after financier interest.
                </p>
              </div>

              {/* Stats (Right) */}
              <div className="lg:col-span-5 font-mono" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: '11px', color: 'var(--semantic-error)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px', fontWeight: 600 }}>
                  Project Scope
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                  
                  <div style={{ background: 'rgba(var(--semantic-error-rgb),0.04)', borderLeft: '3px solid rgba(var(--semantic-error-rgb),0.3)', borderRadius: '4px 12px 12px 4px', padding: '14px 16px' }}>
                    <div style={{ color: '#888', fontSize: '10px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '6px' }}>Platforms</div>
                    <div style={{ color: '#fff', fontSize: '22px', fontWeight: 500, lineHeight: 1, marginBottom: '4px' }}>4</div>
                    <div style={{ color: '#666', fontSize: '11px', lineHeight: 1.4 }}>Employee, HR, Financier, Seller.</div>
                  </div>

                  <div style={{ background: 'rgba(var(--semantic-error-rgb),0.04)', borderLeft: '3px solid rgba(var(--semantic-error-rgb),0.3)', borderRadius: '4px 12px 12px 4px', padding: '14px 16px' }}>
                    <div style={{ color: '#888', fontSize: '10px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '6px' }}>User Types</div>
                    <div style={{ color: '#fff', fontSize: '22px', fontWeight: 500, lineHeight: 1, marginBottom: '4px' }}>4</div>
                    <div style={{ color: '#666', fontSize: '11px', lineHeight: 1.4 }}>Distinct actors in one shared flow.</div>
                  </div>

                  <div style={{ background: 'rgba(var(--semantic-error-rgb),0.04)', borderLeft: '3px solid rgba(var(--semantic-error-rgb),0.3)', borderRadius: '4px 12px 12px 4px', padding: '14px 16px' }}>
                    <div style={{ color: '#888', fontSize: '10px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '6px' }}>Backbone</div>
                    <div style={{ color: '#fff', fontSize: '22px', fontWeight: 500, lineHeight: 1, marginBottom: '4px' }}>1</div>
                    <div style={{ color: '#666', fontSize: '11px', lineHeight: 1.4 }}>Unified operational backend.</div>
                  </div>

                  <div style={{ background: 'rgba(var(--semantic-error-rgb),0.04)', borderLeft: '3px solid rgba(var(--semantic-error-rgb),0.3)', borderRadius: '4px 12px 12px 4px', padding: '14px 16px' }}>
                    <div style={{ color: '#888', fontSize: '10px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '6px' }}>Design System</div>
                    <div style={{ color: '#fff', fontSize: '16px', fontWeight: 500, lineHeight: 1, marginBottom: '4px' }}>Existing</div>
                    <div style={{ color: '#666', fontSize: '11px', lineHeight: 1.4 }}>Built on OneAssist's library.</div>
                  </div>

                  <div style={{ background: 'rgba(var(--semantic-error-rgb),0.04)', borderLeft: '3px solid rgba(var(--semantic-error-rgb),0.3)', borderRadius: '4px 12px 12px 4px', padding: '14px 16px' }}>
                    <div style={{ color: '#888', fontSize: '10px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '6px' }}>Timeline</div>
                    <div style={{ color: '#fff', fontSize: '22px', fontWeight: 500, lineHeight: 1, marginBottom: '4px' }}>5 mo</div>
                    <div style={{ color: '#666', fontSize: '11px', lineHeight: 1.4 }}>Blank canvas to shipped MVP.</div>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.02)', borderLeft: '3px solid #333', borderRadius: '4px 12px 12px 4px', padding: '14px 16px' }}>
                    <div style={{ color: '#555', fontSize: '10px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '6px' }}>Out of Scope</div>
                    <div style={{ color: '#555', fontSize: '12px', fontWeight: 400, lineHeight: 1.4, marginTop: '6px' }}>Brand identity.</div>
                  </div>

                </div>
                

              </div>
            </div>


            {/* Bridge: clean divider */}
            <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.06)', margin: '64px 0 48px 0' }} />

            {/* Zone C: Challenges */}
            <div>
              <h3 style={{ fontSize: '28px', fontWeight: 500, color: '#fff', margin: '0 0 40px 0' }}>
                Why it was hard
              </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              
              {/* Challenge 1 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'rgba(var(--semantic-error-rgb),0.03)', borderLeft: '3px solid rgba(var(--semantic-error-rgb),0.25)', borderRadius: '4px 16px 16px 4px', padding: '28px 32px' }}>
                <div style={{ color: 'var(--semantic-error)', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>Abstract savings</div>
                <h4 style={{ fontSize: '17px', fontWeight: 600, color: '#fff', marginBottom: '10px', lineHeight: 1.3, margin: '0 0 10px 0' }}>Tax savings are abstract. Money feels real.</h4>
                <p style={{ fontSize: '14px', color: '#777', lineHeight: 1.6, margin: 0 }}>Employees don't think in slabs. They think "what do I actually save?" The math had to become one personal, immediate number.</p>
              </motion.div>

              {/* Challenge 2 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ background: 'rgba(var(--semantic-error-rgb),0.03)', borderLeft: '3px solid rgba(var(--semantic-error-rgb),0.25)', borderRadius: '4px 16px 16px 4px', padding: '28px 32px' }}>
                <div style={{ color: 'var(--semantic-error)', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>High-trust commitment</div>
                <h4 style={{ fontSize: '17px', fontWeight: 600, color: '#fff', margin: '0 0 10px 0', lineHeight: 1.3 }}>A monthly salary EMI is terrifying without trust signals.</h4>
                <p style={{ fontSize: '14px', color: '#777', lineHeight: 1.6, margin: 0 }}>Committing months of salary is a high-trust act. Without confidence at every step, people abandon at the product page.</p>
              </motion.div>

              {/* Challenge 3 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ background: 'rgba(var(--semantic-error-rgb),0.03)', borderLeft: '3px solid rgba(var(--semantic-error-rgb),0.25)', borderRadius: '4px 16px 16px 4px', padding: '28px 32px' }}>
                <div style={{ color: 'var(--semantic-error)', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>Scale without friction</div>
                <h4 style={{ fontSize: '17px', fontWeight: 600, color: '#fff', margin: '0 0 10px 0', lineHeight: 1.3 }}>HR needs to approve hundreds of requests in seconds.</h4>
                <p style={{ fontSize: '14px', color: '#777', lineHeight: 1.6, margin: 0 }}>Approvals at scale break without proper tooling. If approval is slow, HR simply stops using it.</p>
              </motion.div>

              {/* Challenge 4 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} style={{ background: 'rgba(var(--semantic-error-rgb),0.03)', borderLeft: '3px solid rgba(var(--semantic-error-rgb),0.25)', borderRadius: '4px 16px 16px 4px', padding: '28px 32px' }}>
                <div style={{ color: 'var(--semantic-error)', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>No shared vocabulary</div>
                <h4 style={{ fontSize: '17px', fontWeight: 600, color: '#fff', margin: '0 0 10px 0', lineHeight: 1.3 }}>Four user types. One order. Four completely different meanings.</h4>
                <p style={{ fontSize: '14px', color: '#777', lineHeight: 1.6, margin: 0 }}>Employees think products. HR thinks policy. Lessors think risk. Sellers think fulfillment.</p>
              </motion.div>

              {/* Challenge 5 - Full Width Hero Card */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="lg:col-span-2" style={{ background: 'linear-gradient(135deg, rgba(var(--semantic-error-rgb), 0.07) 0%, rgba(var(--semantic-error-rgb),0.02) 100%)', borderLeft: '3px solid var(--semantic-error)', borderRadius: '4px 16px 16px 4px', padding: '32px 40px', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '48px', alignItems: 'center' }}>
                <div>
                  <div style={{ color: 'var(--semantic-error)', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>The Hardest One</div>
                  <h4 style={{ fontSize: '22px', fontWeight: 600, color: '#fff', margin: 0, lineHeight: 1.3 }}>The invisible 4-party chain.</h4>
                </div>
                <p style={{ fontSize: '15px', color: '#a3a3a3', lineHeight: 1.7, margin: 0 }}>
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
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#a3a3a3', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '32px' }}>
              <Search size={14} strokeWidth={2.5} />
              Research
            </div>

            {/* Heading & Central Tension */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '56px', maxWidth: '900px' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 700, color: '#fff', lineHeight: 1.15, letterSpacing: '-0.02em', margin: 0 }}>
                Validating the prototype.
              </h2>
              <p style={{ fontSize: '17px', color: '#888', lineHeight: 1.6, margin: 0 }}>
                26 early prototype testing sessions revealed a core tension: B2B complexity vs. consumer simplicity. The interface had to be <strong style={{ color: '#e5e5e5', fontWeight: 600 }}>simple on the surface, detailed on demand.</strong>
              </p>
            </div>

            {/* Unified 3-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              
              {/* Card 1: Employee Confusion */}
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: '#0d0d0d', border: '1px solid rgba(var(--semantic-warning-rgb),0.15)', borderRadius: '20px', padding: '32px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                  <div style={{ fontSize: '42px', fontWeight: 700, color: 'var(--semantic-warning)', letterSpacing: '-0.03em', lineHeight: 1 }}>73%</div>
                  <div style={{ fontSize: '13px', color: '#777', lineHeight: 1.4, flex: 1 }}>failed to calculate their savings using the initial concept.</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', marginBottom: '24px', flex: 1 }}>
                  <p style={{ fontSize: '14px', color: '#e5e5e5', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>"I need actual rupees based on my salary, not a generic percentage."</p>
                </div>
                <div style={{ borderTop: '1px solid rgba(var(--semantic-warning-rgb),0.2)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--semantic-success)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '8px' }}>The Fix</div>
                    <p style={{ fontSize: '14px', color: '#a3a3a3', lineHeight: 1.5, margin: 0 }}>Personalized calculator. Math must be immediate.</p>
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                  <div style={{ fontSize: '42px', fontWeight: 700, color: 'var(--semantic-warning)', letterSpacing: '-0.03em', lineHeight: 1 }}>8/12</div>
                  <div style={{ fontSize: '13px', color: '#777', lineHeight: 1.4, flex: 1 }}>flagged salary EMIs as their top fear.</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', marginBottom: '24px', flex: 1 }}>
                  <p style={{ fontSize: '14px', color: '#e5e5e5', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>"What if I leave the company? What if the device breaks?"</p>
                </div>
                <div style={{ borderTop: '1px solid rgba(var(--semantic-warning-rgb),0.2)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--semantic-success)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '8px' }}>The Fix</div>
                    <p style={{ fontSize: '14px', color: '#a3a3a3', lineHeight: 1.5, margin: 0 }}>In-context trust signals. No hidden FAQs.</p>
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                  <div style={{ fontSize: '42px', fontWeight: 700, color: 'var(--semantic-warning)', letterSpacing: '-0.03em', lineHeight: 1 }}>&lt;30s</div>
                  <div style={{ fontSize: '13px', color: '#777', lineHeight: 1.4, flex: 1 }}>required per HR approval to survive at scale.</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', marginBottom: '24px', flex: 1 }}>
                  <p style={{ fontSize: '14px', color: '#e5e5e5', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>"I can't open 50 profiles a week to check eligibility."</p>
                </div>
                <div style={{ borderTop: '1px solid rgba(var(--semantic-warning-rgb),0.2)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--semantic-success)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '8px' }}>The Fix</div>
                    <p style={{ fontSize: '14px', color: '#a3a3a3', lineHeight: 1.5, margin: 0 }}>Single-row approval dashboard. Zero tab-switching.</p>
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

      {/* Problem Reframe (Simplified Before/After) */}
      <section style={{ padding: '0 0 160px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '32px', padding: '64px' }}>

            {/* Section Label */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#a3a3a3', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'var(--font-system)' }}>
                <Target size={14} strokeWidth={2.5} />
                Problem Reframe
              </div>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <h3 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, margin: '0 0 16px 0', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
                Stop designing 4 products.<br/>Design 1 system.
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '64px', maxWidth: '900px', margin: '0 auto' }}>

              {/* Before */}
              <div style={{ background: 'rgba(225, 29, 72, 0.02)', border: '1px solid rgba(225, 29, 72, 0.15)', borderRadius: '24px', padding: '40px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--semantic-error)', fontSize: '12px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px', fontFamily: 'var(--font-system)' }}>
                  <XCircle size={16} strokeWidth={2.5} />
                  Before: Fragmented Apps
                </div>
                
                {/* 4 disconnected red boxes (now neutral) */}
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
                  {['Employee App', 'HR Portal', 'Lessor Dashboard', 'Seller System'].map(sys => (
                    <div key={sys} style={{ flex: '1 1 140px', background: 'rgba(255, 255, 255, 0.02)', border: '1px dashed rgba(255, 255, 255, 0.15)', borderRadius: '12px', padding: '20px', textAlign: 'center', color: '#e5e5e5', fontSize: '13px', fontWeight: 500, fontFamily: 'var(--font-system)' }}>
                      {sys}
                    </div>
                  ))}
                </div>

                <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.6, margin: 0, fontFamily: 'var(--font-system)' }}>
                  If we build four separate apps, the data gets out of sync. HR sees <span style={{ color: '#fff' }}>"Pending"</span> while the Employee sees <span style={{ color: '#fff' }}>"Processing"</span>. Nobody trusts the software, resulting in endless support calls.
                </p>
              </div>

              {/* After */}
              <div style={{ background: 'rgba(16, 185, 129, 0.03)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '24px', padding: '40px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--semantic-success)', fontSize: '12px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px', fontFamily: 'var(--font-system)' }}>
                  <CheckCircle2 size={16} strokeWidth={2.5} />
                  After: Unified System
                </div>
                
                {/* 1 solid foundation with 4 tabs */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '32px' }}>
                  <div style={{ display: 'flex', gap: '8px', padding: '0 16px' }}>
                    {['Employee', 'HR', 'Lessor', 'Seller'].map(tab => (
                      <div key={tab} style={{ flex: 1, background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderBottom: 'none', borderRadius: '12px 12px 0 0', padding: '12px', textAlign: 'center', color: '#fff', fontSize: '13px', fontWeight: 500, fontFamily: 'var(--font-system)' }}>
                        {tab} View
                      </div>
                    ))}
                  </div>
                  <div style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(16, 185, 129, 0.05))', border: '1px solid rgba(16, 185, 129, 0.4)', borderRadius: '16px', padding: '24px', textAlign: 'center', color: '#fff', fontSize: '15px', fontWeight: 600, fontFamily: 'var(--font-system)' }}>
                    Single Source of Truth (Database)
                  </div>
                </div>

                <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.6, margin: 0, fontFamily: 'var(--font-system)' }}>
                  We designed a single central database. The four apps are just "windows" looking at the exact same data. When HR hits approve, the employee's screen updates instantly.
                </p>
              </div>

            </div>
            
            <div style={{ marginTop: '64px', textAlign: 'center' }}>
              <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '100px', padding: '16px 32px' }}>
                <p style={{ fontSize: '15px', color: '#e5e5e5', lineHeight: 1, margin: 0, fontFamily: 'var(--font-system)' }}>
                  <strong style={{ color: 'var(--semantic-success)' }}>The Result:</strong> Designing this shared data model first cut design time by ~30%.
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Design Exploration */}
      <section style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '32px', padding: '64px' }}>

            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '55% 45%', gap: '48px', alignItems: 'end', marginBottom: '56px' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '100px', padding: '6px 14px', marginBottom: '28px' }}>
                  <span style={{ fontSize: '12px', color: '#777', fontFamily: 'var(--font-mono)', letterSpacing: '0.5px' }}>04: Design Exploration</span>
                </div>
                <h2 style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0 }}>
                  Principles, then pixels.
                </h2>
              </div>
              <p style={{ fontSize: '16px', color: '#666', lineHeight: 1.75, margin: 0 }}>
                Five principles set before wireframes began, derived directly from research, not assumptions.
              </p>
            </div>

            {/* Principles - Bento Box Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
              
              {/* Principle 1: Hero Card (Spans 2 cols) */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-2 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '48px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ position: 'absolute', right: '-20px', bottom: '-50px', fontSize: '240px', fontWeight: 900, color: 'rgba(255,255,255,0.03)', lineHeight: 0.8, letterSpacing: '-0.04em', userSelect: 'none', fontFamily: 'var(--font-heading)' }}>
                  1
                </div>
                <div style={{ position: 'relative', zIndex: 10 }}>
                  <h4 style={{ fontSize: '24px', fontWeight: 600, color: '#e5e5e5', margin: '0 0 12px 0', lineHeight: 1.3, fontFamily: 'var(--font-heading)' }}>Show the rupee, hide the formula</h4>
                  <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.7, margin: 0, maxWidth: '600px', fontFamily: 'var(--font-system)' }}>Present ₹38,257 saved, not tax slab math. Outcomes in the primary view. Mechanics on demand.</p>
                </div>
              </motion.div>

              {/* Principle 2 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '24px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ position: 'absolute', right: '-10px', bottom: '-20px', fontSize: '140px', fontWeight: 900, color: 'rgba(255,255,255,0.03)', lineHeight: 0.8, letterSpacing: '-0.04em', userSelect: 'none', fontFamily: 'var(--font-heading)' }}>
                  2
                </div>
                <div style={{ position: 'relative', zIndex: 10 }}>
                  <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#e5e5e5', margin: '0 0 8px 0', lineHeight: 1.35, fontFamily: 'var(--font-heading)' }}>Compare Smart EPP to Amazon, not to nothing</h4>
                  <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.6, margin: 0, fontFamily: 'var(--font-system)' }}>Savings need contrast to land. Comparison is a first-class feature on the PDP, not a marketing footnote.</p>
                </div>
              </motion.div>

              {/* Principle 3 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '24px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ position: 'absolute', right: '-10px', bottom: '-20px', fontSize: '140px', fontWeight: 900, color: 'rgba(255,255,255,0.03)', lineHeight: 0.8, letterSpacing: '-0.04em', userSelect: 'none', fontFamily: 'var(--font-heading)' }}>
                  3
                </div>
                <div style={{ position: 'relative', zIndex: 10 }}>
                  <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#e5e5e5', margin: '0 0 8px 0', lineHeight: 1.35, fontFamily: 'var(--font-heading)' }}>Every anxious question answered before it's asked</h4>
                  <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.6, margin: 0, fontFamily: 'var(--font-system)' }}>What if it breaks? What if I leave? Every anxiety surfaced in-context, before the user has to search.</p>
                </div>
              </motion.div>

              {/* Principle 4 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '24px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ position: 'absolute', right: '-10px', bottom: '-20px', fontSize: '140px', fontWeight: 900, color: 'rgba(255,255,255,0.03)', lineHeight: 0.8, letterSpacing: '-0.04em', userSelect: 'none', fontFamily: 'var(--font-heading)' }}>
                  4
                </div>
                <div style={{ position: 'relative', zIndex: 10 }}>
                  <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#e5e5e5', margin: '0 0 8px 0', lineHeight: 1.35, fontFamily: 'var(--font-heading)' }}>HR approves in seconds, not minutes</h4>
                  <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.6, margin: 0, fontFamily: 'var(--font-system)' }}>Name, role, device, eligibility, policy: one card, one click. No tab-switching.</p>
                </div>
              </motion.div>

              {/* Principle 5 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '24px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ position: 'absolute', right: '-10px', bottom: '-20px', fontSize: '140px', fontWeight: 900, color: 'rgba(255,255,255,0.03)', lineHeight: 0.8, letterSpacing: '-0.04em', userSelect: 'none', fontFamily: 'var(--font-heading)' }}>
                  5
                </div>
                <div style={{ position: 'relative', zIndex: 10 }}>
                  <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#e5e5e5', margin: '0 0 8px 0', lineHeight: 1.35, fontFamily: 'var(--font-heading)' }}>Order status must never be silent</h4>
                  <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.6, margin: 0, fontFamily: 'var(--font-system)' }}>Every state change triggers a notification. The app answers "where is my order?" before they ask.</p>
                </div>
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
                        <span style={{ fontSize: '11px', fontWeight: 700, color: '#fff', letterSpacing: '1px', textTransform: 'uppercase', fontFamily: 'var(--font-system)' }}>The Winner</span>
                      </div>
                      <h4 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', margin: '0 0 8px 0', fontFamily: 'var(--font-heading)' }}>Contextual Detail</h4>
                      <p style={{ fontSize: '15px', color: '#a3a3a3', lineHeight: 1.6, margin: 0, maxWidth: '400px', fontFamily: 'var(--font-system)' }}>
                        Savings calculator, inline comparison, and protection summary built into one scrollable PDP. Completeness built confidence.
                      </p>
                    </div>
                    
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '48px', fontWeight: 700, color: 'var(--semantic-success)', lineHeight: 1, fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>68%</div>
                      <div style={{ fontSize: '13px', color: '#a3a3a3', fontWeight: 500, fontFamily: 'var(--font-system)', marginTop: '4px' }}>Conversion Rate</div>
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
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#777', fontSize: '10px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px', fontFamily: 'var(--font-system)' }}>
                      <XCircle size={14} strokeWidth={2.5} /> Rejected Concept
                    </div>
                    <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#e5e5e5', margin: '0 0 8px 0', fontFamily: 'var(--font-heading)' }}>Minimal PDP</h4>
                    <div style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>28% <span style={{ fontSize: '14px', color: '#777', fontWeight: 500, fontFamily: 'var(--font-system)' }}>Conversion</span></div>
                    <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.6, margin: 0, fontFamily: 'var(--font-system)' }}>
                      Too bare. Without seeing exact savings upfront, users wouldn't convert. A monthly salary EMI felt like a leap of faith.
                    </p>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '32px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#777', fontSize: '10px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px', fontFamily: 'var(--font-system)' }}>
                      <XCircle size={14} strokeWidth={2.5} /> Rejected Concept
                    </div>
                    <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#e5e5e5', margin: '0 0 8px 0', fontFamily: 'var(--font-heading)' }}>Guided Wizard</h4>
                    <div style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>44% <span style={{ fontSize: '14px', color: '#777', fontWeight: 500, fontFamily: 'var(--font-system)' }}>Drop-off</span></div>
                    <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.6, margin: 0, fontFamily: 'var(--font-system)' }}>
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
      <section style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '100px', padding: '6px 14px', marginBottom: '28px' }}>
              <span style={{ fontSize: '12px', color: '#777', fontFamily: 'var(--font-mono)', letterSpacing: '0.5px' }}>05: Final Solution</span>
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
                      fontWeight: 500, fontSize: '14px'
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
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
                    <div style={{ display: 'inline-flex', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', padding: '6px' }}>
                      <button 
                        onClick={() => setIsGridView(false)}
                        style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 20px', borderRadius: '100px', background: !isGridView ? 'rgba(255,255,255,0.1)' : 'transparent', color: !isGridView ? '#fff' : 'rgba(255,255,255,0.5)', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', fontSize: '14px', fontWeight: 500 }}
                      >
                        <Columns size={16} /> Carousel
                      </button>
                      <button 
                        onClick={() => setIsGridView(true)}
                        style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 20px', borderRadius: '100px', background: isGridView ? 'rgba(255,255,255,0.1)' : 'transparent', color: isGridView ? '#fff' : 'rgba(255,255,255,0.5)', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', fontSize: '14px', fontWeight: 500 }}
                      >
                        <LayoutGrid size={16} /> Grid View
                      </button>
                    </div>
                  </div>



          {/* Ecosystem Showcase */}
          <style>{`
            .ecosystem-scroll::-webkit-scrollbar { display: none; }
            .ecosystem-scroll { -ms-overflow-style: none; scrollbar-width: none; }
          `}</style>
          
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

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '32px', padding: '64px' }}>
            {/* Divider */}
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '80px' }} />

            
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
                          <span style={{ color: '#fff', fontWeight: 600, fontSize: '15px', letterSpacing: '-0.01em' }}>HR Portal</span>
                        </div>
                        <div style={{ display: 'flex', gap: '16px' }}>
                          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', color: '#aaa' }}>Total Savings: <strong style={{color: '#fff'}}>₹18.4L</strong></div>
                          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', color: '#aaa' }}>Pending: <strong style={{color: '#fff'}}>12</strong></div>
                        </div>
                      </div>
                      <div style={{ padding: '24px' }}>
                        {/* Table Header */}
                        <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr 1fr', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.06)', color: '#666', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
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
                              <div style={{ color: '#fff', fontWeight: 500, fontSize: '14px', marginBottom: '4px' }}>{row.name}</div>
                              <div style={{ color: '#666', fontSize: '12px' }}>{row.role}</div>
                            </div>
                            <div>
                              <div style={{ color: '#e5e5e5', fontSize: '14px', marginBottom: '4px' }}>{row.device}</div>
                              <div style={{ color: '#888', fontSize: '12px' }}>{row.cost}</div>
                            </div>
                            <div>
                              <span style={{ display: 'inline-block', padding: '4px 8px', borderRadius: '4px', background: `${row.statusColor}22`, color: row.statusColor, fontSize: '11px', fontWeight: 600 }}>{row.status}</span>
                            </div>
                            <div style={{ textAlign: 'right', display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                              <button style={{ background: 'rgba(255,255,255,0.05)', border: 'none', color: '#fff', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', cursor: 'pointer' }}>Reject</button>
                              <button style={{ background: 'var(--semantic-success)', border: 'none', color: '#fff', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 500, cursor: 'pointer' }}>Approve</button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                      <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px' }}>
                        <strong style={{ color: '#e5e5e5', fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '14px' }}>Everything at a glance.</strong>
                        <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.7, margin: 0 }}>Employee name, role, band, and requested device cost are visible in a single row. No tab-switching or profile opening required.</p>
                      </div>
                      <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px' }}>
                        <strong style={{ color: '#e5e5e5', fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '14px' }}>Band-based eligibility.</strong>
                        <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.7, margin: 0 }}>HR immediately knows if the device is within policy. Requests outside band limits are automatically flagged for review.</p>
                      </div>
                      <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px' }}>
                        <strong style={{ color: '#e5e5e5', fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '14px' }}>Emotional reframing.</strong>
                        <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.7, margin: 0 }}>Showing "Total Savings" reframes HR from an admin approving requests to a champion delivering real employee value.</p>
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
                          <span style={{ color: '#fff', fontWeight: 600, fontSize: '15px', letterSpacing: '-0.01em' }}>Financier Portal</span>
                        </div>
                        <div style={{ display: 'flex', gap: '16px' }}>
                          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', color: '#aaa' }}>Disbursed (Mtd): <strong style={{color: '#fff'}}>₹1.2Cr</strong></div>
                          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', color: '#aaa' }}>Avg EMI: <strong style={{color: '#fff'}}>12 Mo</strong></div>
                        </div>
                      </div>
                      <div style={{ padding: '24px' }}>
                        {/* Top Widgets */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
                           <div style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.1) 0%, rgba(168,85,247,0.02) 100%)', border: '1px solid rgba(168,85,247,0.2)', padding: '20px', borderRadius: '8px' }}>
                              <div style={{ color: '#a855f7', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Active Loans</div>
                              <div style={{ color: '#fff', fontSize: '28px', fontWeight: 700 }}>1,432</div>
                           </div>
                           <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '20px', borderRadius: '8px' }}>
                              <div style={{ color: '#777', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Risk Assessment</div>
                              <div style={{ color: '#22c55e', fontSize: '24px', fontWeight: 600 }}>Low (Corporate)</div>
                           </div>
                           <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '20px', borderRadius: '8px' }}>
                              <div style={{ color: '#777', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Upcoming EMI Collection</div>
                              <div style={{ color: '#fff', fontSize: '24px', fontWeight: 600 }}>Oct 1st</div>
                           </div>
                        </div>
                        {/* Table Header */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.06)', color: '#666', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
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
                            <div style={{ color: '#fff', fontWeight: 500, fontSize: '14px' }}>{row.corp}</div>
                            <div style={{ color: '#e5e5e5', fontSize: '14px' }}>{row.amount}</div>
                            <div style={{ color: '#888', fontSize: '13px' }}>{row.tenure}</div>
                            <div style={{ textAlign: 'right' }}>
                              <span style={{ display: 'inline-block', padding: '4px 8px', borderRadius: '4px', background: `${row.statusColor}22`, color: row.statusColor, fontSize: '11px', fontWeight: 600 }}>{row.status}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                      <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px' }}>
                        <strong style={{ color: '#e5e5e5', fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '14px' }}>Corporate Risk Profiling.</strong>
                        <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.7, margin: 0 }}>Financiers can evaluate loan books based on corporate partner risk rather than individual retail risk, enabling better rates.</p>
                      </div>
                      <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px' }}>
                        <strong style={{ color: '#e5e5e5', fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '14px' }}>Automated Disbursals.</strong>
                        <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.7, margin: 0 }}>Once HR approves and KYC is complete, capital is automatically routed to sellers without manual intervention.</p>
                      </div>
                      <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px' }}>
                        <strong style={{ color: '#e5e5e5', fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '14px' }}>EMI Collection Sync.</strong>
                        <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.7, margin: 0 }}>Direct integration with corporate payroll systems ensures EMI collections are perfectly synced with salary cycles.</p>
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
                          <span style={{ color: '#fff', fontWeight: 600, fontSize: '15px', letterSpacing: '-0.01em' }}>Seller Hub</span>
                        </div>
                        <div style={{ display: 'flex', gap: '16px' }}>
                          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', color: '#aaa' }}>To Dispatch: <strong style={{color: '#fff'}}>45</strong></div>
                        </div>
                      </div>
                      <div style={{ display: 'flex' }}>
                        {/* Sidebar */}
                        <div style={{ width: '200px', borderRight: '1px solid rgba(255,255,255,0.06)', padding: '24px' }}>
                          <div style={{ color: '#eab308', fontWeight: 600, fontSize: '13px', marginBottom: '16px', padding: '8px', background: 'rgba(234,179,8,0.1)', borderRadius: '6px' }}>Active Orders</div>
                          <div style={{ color: '#777', fontWeight: 500, fontSize: '13px', marginBottom: '16px', padding: '8px' }}>Inventory Sync</div>
                          <div style={{ color: '#777', fontWeight: 500, fontSize: '13px', marginBottom: '16px', padding: '8px' }}>Logistics</div>
                        </div>
                        {/* Main Content */}
                        <div style={{ flex: 1, padding: '24px' }}>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr 1fr', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.06)', color: '#666', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
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
                              <div style={{ color: '#a3a3a3', fontSize: '13px', fontFamily: 'var(--font-mono)' }}>{row.id}</div>
                              <div style={{ color: '#fff', fontSize: '14px', fontWeight: 500 }}>{row.product}</div>
                              <div style={{ color: '#888', fontSize: '13px' }}>{row.shipping}</div>
                              <div style={{ textAlign: 'right' }}>
                                <button style={{ background: 'var(--semantic-info)', border: 'none', color: '#fff', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 500, cursor: 'pointer' }}>{row.status}</button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                      <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px' }}>
                        <strong style={{ color: '#e5e5e5', fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '14px' }}>Inventory Protection.</strong>
                        <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.7, margin: 0 }}>Devices are temporarily reserved during the HR approval window to prevent out-of-stock scenarios for approved requests.</p>
                      </div>
                      <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px' }}>
                        <strong style={{ color: '#e5e5e5', fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '14px' }}>Streamlined Fulfillment.</strong>
                        <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.7, margin: 0 }}>Sellers only see fully funded, approved orders. Financing and corporate approvals are abstracted away completely.</p>
                      </div>
                      <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px' }}>
                        <strong style={{ color: '#e5e5e5', fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '14px' }}>B2B Tax Invoicing.</strong>
                        <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.7, margin: 0 }}>GST invoices are automatically generated in the correct B2B format to ensure corporate tax benefits can be claimed.</p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Bottom 3 cards Divider */}
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '80px' }} />
{/* Bottom 3 cards: Design System / Accessibility / Edge Cases */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>

              <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '20px', padding: '28px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#a3a3a3', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', fontFamily: 'var(--font-mono)' }}>Design System</div>
                <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.8, margin: 0 }}>
                  Built a 28-component system shared across all 4 portals: buttons, form fields, status badges, notification toasts, data tables. The order status badge (7 states × 3 visual weights) was the most-reused component. Defining it once eliminated the inconsistency that would have emerged from 4 independent implementations.
                </p>
              </div>

              <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '20px', padding: '28px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#a3a3a3', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', fontFamily: 'var(--font-mono)' }}>Accessibility</div>
                <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.8, margin: 0 }}>
                  All text meets WCAG AA (4.5:1 minimum). The savings amount (₹38,257) uses a 28px bold typeface at 7:2:1 contrast on white. All interactive elements meet 44×44px minimum touch target. The green/red comparison panel uses icons (✓/✗) in addition to colour so the distinction is not colour-only. Screen reader labels applied to all icon-only buttons in the HR dashboard.
                </p>
              </div>

              <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '20px', padding: '28px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#a3a3a3', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', fontFamily: 'var(--font-mono)' }}>Edge Cases Designed</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: '#e5e5e5', marginBottom: '6px' }}>HR rejects a request:</div>
                    <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.7, margin: 0 }}>Employee receives an in-app notification with the rejection reason (required field for HR) and a prompt to contact HR, not a dead end.</p>
                  </div>
                  <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: '#e5e5e5', marginBottom: '6px' }}>Device goes out of stock after cart:</div>
                    <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.7, margin: 0 }}>Employee is notified with an estimated restock date and offered comparable alternatives, not a blank error state.</p>
                  </div>
                </div>
              </div>

            </div>

          </motion.div>
        </div>
      </section>

      {/* 06. Validation */}
      <section style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '32px', padding: '64px' }}>

            {/* Header */}
            <div style={{ marginBottom: '48px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '100px', padding: '6px 14px', marginBottom: '28px' }}>
                <span style={{ fontSize: '12px', color: '#777', fontFamily: 'var(--font-mono)', letterSpacing: '0.5px' }}>06: Validation</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0 }}>
                How we tested across all four portals.
              </h2>
            </div>

            {/* Three testing blocks */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
              {[
                {
                  label: 'Employee app',
                  body: 'Unmoderated prototype testing with 14 employees across 3 companies. Task: "Find an iPhone that fits your budget and understand exactly how much you\'ll save." Success metric: could they state their personal saving amount without prompting? Pre-calculator: 3/14. Post-calculator: 11/14.',
                },
                {
                  label: 'HR dashboard',
                  body: '5 HR managers, timed approval session. Average time to approve a request on v1 prototype: 48 seconds. After redesigning the approval card to show all required information in one row: 11 seconds. Target was 30 seconds, and we beat it by 3×.',
                },
                {
                  label: 'Order tracking',
                  body: 'The most critical validation. We tested two versions: one that showed "HR Approved → Processing → Shipped → Delivered" (simplified, 4 steps), and one that showed the full 15-state order model. Employees with the simplified version reported significantly lower anxiety during the "processing" phase because they knew what came next.',
                },
              ].map((item, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  style={{ fontSize: '16px', color: '#888', lineHeight: 1.8, margin: 0 }}
                >
                  <strong style={{ color: '#e5e5e5', fontWeight: 700 }}>{item.label}:</strong>{' '}{item.body}
                </motion.p>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.07)', borderLeft: '3px solid rgba(var(--semantic-success-rgb),0.4)', borderRadius: '4px 16px 16px 4px', padding: '28px 32px', marginBottom: '24px' }}
            >
              <p style={{ fontSize: '17px', color: '#e5e5e5', lineHeight: 1.7, margin: '0 0 14px 0', fontStyle: 'italic' }}>
                "I didn't realise how much I was saving until I put in my tax slab. ₹38,000 is real money. That changed everything for me."
              </p>
              <div style={{ fontSize: '12px', color: '#555', fontFamily: 'var(--font-mono)', letterSpacing: '0.5px' }}>
                Software Engineer, test participant, Hyderabad
              </div>
            </motion.div>

            {/* What changed from testing */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ background: 'rgba(var(--semantic-warning-rgb),0.03)', border: '1px solid rgba(var(--semantic-warning-rgb),0.12)', borderRadius: '20px', padding: '32px 40px', marginBottom: '40px' }}
            >
              <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--semantic-warning)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', fontFamily: 'var(--font-mono)' }}>
                What changed from testing
              </div>
              <p style={{ fontSize: '18px', color: '#c0c0c0', lineHeight: 1.65, margin: 0, fontWeight: 500 }}>
                The original "How does it work?" section was a separate page. Testing showed employees abandoned it entirely. They wanted the explanation{' '}
                <span style={{ color: 'var(--semantic-warning)' }}>in context</span>{' '}
                of the product they were looking at, not on a standalone page. It moved into the calculator screen as an inline accordion.
              </p>
            </motion.div>

            {/* What was NOT validated */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ fontSize: '15px', color: '#666', lineHeight: 1.85, margin: 0, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '32px' }}
            >
              <strong style={{ color: '#888', fontWeight: 600 }}>What was NOT validated before launch:</strong>{' '}The lessor and seller portal flows were not user-tested, only stakeholder-reviewed. Timeline constraints meant we prioritised the employee-facing and HR flows, which had the highest volume of users. Both portals launched on assumption and generated 3× the post-launch change requests compared to the validated portals. We also did not test the complete end-to-end journey (employee submits → HR approves → lessor approves → device ships) with a single participant observing all steps, so cross-portal handoff friction wasn't caught until live usage.
            </motion.p>

          </motion.div>
        </div>
      </section>

      {/* 07. Outcomes & Impact */}
      <section style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '32px', padding: '64px' }}>

            {/* Header */}
            <div style={{ marginBottom: '48px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '100px', padding: '6px 14px', marginBottom: '28px' }}>
                <span style={{ fontSize: '12px', color: '#777', fontFamily: 'var(--font-mono)', letterSpacing: '0.5px' }}>07: Outcomes & Impact</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 16px 0' }}>
                What shipped and what it delivered.
              </h2>
              <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.6, margin: 0 }}>
                Measured at 90 days post-launch across the employee app and HR portal.
              </p>
            </div>

            {/* Metric cards . 3×2 grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '32px' }}>
              {[
                { value: '68%', label: 'PDP-to-cart conversion rate', sub: 'employees who viewed product detail and added to cart', color: 'var(--semantic-success)' },
                { value: '<12s', label: 'Average HR approval time', sub: 'from request open to decision', color: 'var(--semantic-success)' },
                { value: '11/14', label: 'Personalised saving recall', sub: 'vs 3/14 before the calculator', color: 'var(--semantic-success)' },
                { value: '4.4★', label: 'App store rating', sub: 'Play Store + App Store combined', color: 'var(--semantic-success)' },
                { value: '0%', label: 'HR program abandonment', sub: 'no enterprise client dropped the program post-launch', color: 'var(--semantic-success)' },
                { value: '5 mo', label: 'MVP to launch', sub: '4 products shipped, design system included', color: 'var(--semantic-success)' },
              ].map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '20px', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '8px' }}
                >
                  <div style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 700, color: m.color, letterSpacing: '-0.03em', lineHeight: 1, fontFamily: 'var(--font-heading)' }}>
                    {m.value}
                  </div>
                  <div style={{ fontSize: '13px', color: '#bbb', fontWeight: 500, lineHeight: 1.35 }}>{m.label}</div>
                  <div style={{ fontSize: '11px', color: '#444', fontFamily: 'var(--font-mono)', lineHeight: 1.5 }}>{m.sub}</div>
                </motion.div>
              ))}
            </div>

            {/* Two text cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>

              {/* Qualitative */}
              <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '20px', padding: '28px 32px' }}>
                <div style={{ fontSize: '10px', fontWeight: 700, color: '#555', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', fontFamily: 'var(--font-mono)' }}>Qualitative Outcomes</div>
                <p style={{ fontSize: '14px', color: '#777', lineHeight: 1.8, margin: 0 }}>
                  4.4★ combined app store rating. Top user review theme: "Finally understand how the tax saving works" (appeared in 34% of written reviews). Support ticket volume for "how do I calculate my saving?" dropped to near-zero after the calculator launched . the previous version generated this as the #1 inbound query. HR managers at 3 enterprise clients specifically cited the dashboard's one-row approval design in renewal conversations with the OneAssist sales team.
                </p>
              </div>

              {/* Success criteria */}
              <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '20px', padding: '28px 32px' }}>
                <div style={{ fontSize: '10px', fontWeight: 700, color: '#555', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px', fontFamily: 'var(--font-mono)' }}>Success Criteria Check</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    { text: 'Target: Employee cart conversion ≥ 50% → Hit at 68%', hit: true },
                    { text: 'Target: HR approval time ≤ 30s → Hit at 12s', hit: true },
                    { text: 'Target: 0 enterprise clients dropping post-launch → Hit', hit: true },
                    { text: 'Target: Lessor + seller portal change requests ≤ 5 per portal in 90 days → Missed (11 and 8 respectively) . the cost of skipping validation on those two portals.', hit: false },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: item.hit ? 'var(--semantic-success)' : 'var(--semantic-error)', flexShrink: 0, marginTop: '1px' }}>
                        {item.hit ? '✓' : '✗'}
                      </span>
                      <p style={{ fontSize: '13px', color: item.hit ? '#777' : '#666', lineHeight: 1.65, margin: 0, fontStyle: item.hit ? 'normal' : 'italic' }}>
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Attribution note */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ background: 'rgba(var(--semantic-info-rgb),0.03)', border: '1px solid rgba(var(--semantic-info-rgb),0.1)', borderRadius: '20px', padding: '32px 40px' }}
            >
              <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--semantic-info)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', fontFamily: 'var(--font-mono)' }}>
                Attribution Note
              </div>
              <p style={{ fontSize: '18px', color: '#c0c0c0', lineHeight: 1.65, margin: 0, fontWeight: 500 }}>
                The 68% PDP-to-cart conversion is directionally strong but influenced by the product's novelty. First-time users were inherently more motivated.{' '}
                <span style={{ color: 'var(--semantic-info)' }}>30-day retention</span>{' '}
                of employees who added to cart (i.e., completed the full request cycle) was 84%, suggesting the flow held up beyond initial enthusiasm.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 08. Reflection */}
      <section style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '32px', padding: '64px' }}>

            {/* Header */}
            <div style={{ marginBottom: '48px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '100px', padding: '6px 14px', marginBottom: '28px' }}>
                <span style={{ fontSize: '12px', color: '#777', fontFamily: 'var(--font-mono)', letterSpacing: '0.5px' }}>08: Reflection</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0 }}>
                What I'd do differently. What I learned.
              </h2>
            </div>

            {/* Reflection cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                {
                  title: 'The lessor and seller portals deserved more research time',
                  body: 'The employee app and HR dashboard got the majority of research investment. The lessor and seller portals were designed primarily from stakeholder workshops rather than direct user observation. Post-launch, both portals received significantly more change requests than the employee-facing screens, a signal that the workshop-only research wasn\'t sufficient for those user types.',
                  highlight: false,
                },
                {
                  title: 'Build the design system before the first feature screen',
                  body: 'We started building feature screens and extracted components into a design system halfway through. This created inconsistencies between early screens (employee onboarding) and later ones (order tracking) that took two weeks of cleanup to resolve. Starting with a 20-component design system first . even before the full IA was set . would have saved that time and improved consistency.',
                  highlight: false,
                },
                {
                  title: 'The "What if I leave the company?" question needed a full flow, not a tooltip',
                  body: 'Employee anxiety about salary EMIs in the context of job changes was the most common question in testing. We handled it with a tooltip and an FAQ entry. What it deserved was a dedicated "end-of-tenure" flow that walked employees through their options. Post-launch support tickets confirmed this was the #1 source of employee confusion.',
                  highlight: false,
                },
                {
                  title: 'What I learned about my own process',
                  body: 'I default to solving the "happy path" first and treating edge cases as cleanup. This project, with its 15-state order model and 4-party failure modes, taught me that for B2B operational products, edge cases are the product. The anxiety a user feels when their order is stuck in "processing" for 3 days is not an edge case. It\'s a core UX problem that deserves the same design rigour as the checkout flow. I now audit edge cases and failure states as part of the initial problem definition, not as a final polish pass.',
                  highlight: true,
                },
                {
                  title: 'What the next iteration would address',
                  body: 'Three things earned by the data: (1) A "power user" mode for the savings calculator . full tax breakdown with editable inputs for employees who want to verify the math themselves, not just see the output. (2) A dedicated "end-of-tenure" flow for employees leaving the company . the #1 support query post-launch, currently handled by a tooltip. (3) Redesign the lessor and seller portals from scratch with actual user research . the missed success criteria from v1 is a clear mandate.',
                  highlight: false,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  style={{
                    background: item.highlight ? 'rgba(249,87,56,0.04)' : '#0d0d0d',
                    border: `1px solid ${item.highlight ? 'rgba(249,87,56,0.15)' : 'rgba(255,255,255,0.06)'}`,
                    borderRadius: '20px',
                    padding: '28px 32px',
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'flex-start',
                  }}
                >
                  <div style={{ flexShrink: 0, marginTop: '3px' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="var(--semantic-brand)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#e5e5e5', margin: '0 0 10px 0', lineHeight: 1.35 }}>{item.title}</h4>
                    <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.8, margin: 0 }}>{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </section>

      {/* 4. Breakdown of Solution (Single Pitch Slide) */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '1600px' }}>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(145deg, rgba(30,30,30,0.8) 0%, rgba(10,10,10,0.9) 100%)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)', padding: '64px', display: 'flex', flexDirection: 'column', gap: '64px', boxShadow: '0 40px 80px rgba(0,0,0,0.4)' }}>
             
             {/* Slide Header */}
             <div style={{ textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', padding: '8px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px' }}>
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
                      <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>Bypassing manual KYC entirely by authenticating directly through the employee's existing corporate HR portal.</p>
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
                      <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>Pre-calculating maximum EMIs based on salary bands so users browse with total financial confidence.</p>
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
                      <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>Automatically routing the first EMI deduction to the next month's payroll, eliminating credit cards entirely.</p>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

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
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: 1.5 }}>In-depth user interviews across 3 massive partner companies.</div>
                </div>
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)' }} />
                <div>
                  <div style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1, background: 'linear-gradient(135deg, #10b981, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '8px' }}>15k</div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: 1.5 }}>Funnel data points analyzed via Mixpanel to find the drop-off.</div>
                </div>
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)' }} />
                <div>
                  <div style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1, background: 'linear-gradient(135deg, #10b981, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '8px' }}>3</div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: 1.5 }}>Competitor platforms fully audited for UX teardowns.</div>
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
                    <div style={{ color: '#10b981', fontSize: '13px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>Insight 01</div>
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
                      <div style={{ color: '#3b82f6', fontSize: '13px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>Insight 02</div>
                      <Fingerprint size={24} color="#3b82f6" style={{ opacity: 0.6 }} />
                    </div>
                    <h4 style={{ color: '#fff', fontSize: '20px', fontWeight: 600, marginBottom: '12px', paddingRight: '20px' }}>KYC is a Funnel Killer</h4>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>Asking for PAN numbers and salary slips upfront caused immediate mistrust. Users felt they were applying for a mortgage just to browse devices.</p>
                  </motion.div>

                  {/* Insight 3 */}
                  <motion.div 
                     whileHover={{ y: -5 }}
                     style={{ background: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}
                  >
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #f59e0b, transparent)' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                      <div style={{ color: '#f59e0b', fontSize: '13px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>Insight 03</div>
                      <AlertCircle size={24} color="#f59e0b" style={{ opacity: 0.6 }} />
                    </div>
                    <h4 style={{ color: '#fff', fontSize: '20px', fontWeight: 600, marginBottom: '12px', paddingRight: '20px' }}>The "Blind Cart" Effect</h4>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>Users didn't know their approved EMI limit while browsing. Reaching checkout only to be rejected caused them to abandon the cart entirely.</p>
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
        
        <div style={{ position: 'absolute', left: '32px', bottom: '32px', transform: 'rotate(-90deg)', transformOrigin: 'left bottom', color: '#3b82f6', letterSpacing: '8px', fontSize: '11px', textTransform: 'uppercase', fontWeight: 600, opacity: 0.8 }}>
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
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#3b82f6', background: 'rgba(59,130,246,0.1)', padding: '8px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px' }}>
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
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(239,68,68,0.1)', color: '#ef4444', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '12px' }}>
                  <XCircle size={12} /> Draft 01
                </div>
                <h4 style={{ color: '#fff', fontSize: '16px', fontWeight: 600, margin: '0 0 8px 0' }}>Sticker Shock</h4>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: 1.5, margin: 0 }}>
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
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(239,68,68,0.1)', color: '#ef4444', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '12px' }}>
                  <XCircle size={12} /> Draft 02
                </div>
                <h4 style={{ color: '#fff', fontSize: '16px', fontWeight: 600, margin: '0 0 8px 0' }}>High Friction</h4>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: 1.5, margin: 0 }}>
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
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(16,185,129,0.1)', color: '#10b981', padding: '6px 16px', borderRadius: '100px', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '16px' }}>
                  <CheckCircle2 size={16} /> The Winner
                </div>
                <h4 style={{ color: '#fff', fontSize: '24px', fontWeight: 600, margin: '0 0 16px 0', lineHeight: 1.2 }}>Frictionless SSO & Instant Credit</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                  By syncing Corporate SSO, we unlocked instant credit limits <strong style={{ color: '#fff' }}>before</strong> browsing. Complex KYC was delayed until checkout, boosting confidence and skyrocketing conversions.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 10. Final Design w prototype (Live Verification Prototype) */}
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

      {/* 11. Styleguide, Slidedeck, Figma File */}
      <section style={{ padding: '100px 0' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '48px' }}>
            <Palette size={28} color="var(--accent-color)" />
            <h2 style={{ fontSize: '32px', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '-0.02em', margin: 0 }}>Design System & Assets</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '48px' }}>
            {/* Colors */}
            <div>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '18px', marginBottom: '24px' }}>Core Colors</h4>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ height: '80px', background: '#0a0a0a', borderRadius: '12px', border: '1px solid var(--glass-border)', marginBottom: '12px' }} />
                  <div style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: 600 }}>Obsidian</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '12px', fontFamily: "'JetBrains Mono', monospace" }}>#0a0a0a</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ height: '80px', background: '#e50914', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.2)', marginBottom: '12px' }} />
                  <div style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: 600 }}>Action Red</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '12px', fontFamily: "'JetBrains Mono', monospace" }}>#e50914</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ height: '80px', background: '#ffffff', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '12px' }} />
                  <div style={{ color: 'var(--bg-color)', fontSize: '14px', fontWeight: 600 }}>Primary Text</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '12px', fontFamily: "'JetBrains Mono', monospace" }}>#ffffff</div>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '18px', marginBottom: '24px' }}>Typography</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', color: 'var(--text-primary)', lineHeight: 1 }}>Aa</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '8px' }}>Syne (Headings)</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '24px', color: 'var(--text-primary)', lineHeight: 1 }}>Aa</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '8px' }}>JetBrains Mono (Data & Code)</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', marginTop: '48px' }}>
            <button className="btn btn-primary" style={{ flex: 1, padding: '20px' }}>
              <FileText size={20} /> View Pitch Deck (PDF)
            </button>
            <button className="btn btn-primary" style={{ flex: 1, padding: '20px' }}>
              <Code size={20} /> View Figma File
            </button>
          </div>
        </div>
      </section>

      {/* 12. Reflections */}
      <section style={{ padding: '120px 0', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '800px', background: 'radial-gradient(ellipse at top, rgba(59,130,246,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
        
        <div className="container" style={{ maxWidth: '1000px', position: 'relative', zIndex: 1 }}>
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', marginBottom: '16px' }}>Hindsight is 20/20</h2>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', maxWidth: '600px', margin: '0 auto' }}>The biggest breakthroughs often come from our biggest failures. Here is what I learned.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px', marginBottom: '80px' }}>
            {/* The Mistake Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              style={{ background: 'rgba(239,68,68,0.03)', border: '1px solid rgba(239,68,68,0.15)', borderRadius: '24px', padding: '40px', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(239,68,68,0.1)', color: '#ef4444', padding: '6px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '24px' }}>
                <AlertCircle size={16} /> The Fallacy
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#fff', marginBottom: '16px', lineHeight: 1.3 }}>The "Universal App" Obsession</h3>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '24px' }}>
                Initially, I spent two weeks designing a beautiful, standalone native iOS & Android application. I obsessed over push notifications, persistent login states, and native biometric auth.
              </p>
              <div style={{ background: 'rgba(0,0,0,0.4)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #ef4444' }}>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', margin: 0, fontStyle: 'italic', lineHeight: 1.6 }}>
                  "Corporate employees absolutely refused to download another heavy app just to buy a device once a year. The app store friction killed our acquisition funnel instantly."
                </p>
              </div>
            </motion.div>

            {/* The Pivot Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              style={{ background: 'rgba(16,185,129,0.03)', border: '1px solid rgba(16,185,129,0.15)', borderRadius: '24px', padding: '40px', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(16,185,129,0.1)', color: '#10b981', padding: '6px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '24px' }}>
                <Zap size={16} /> The Pivot
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#fff', marginBottom: '16px', lineHeight: 1.3 }}>Embedded PWA Integration</h3>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '24px' }}>
                We scrapped the native app entirely and rebuilt the flow as a lightweight Progressive Web App (PWA) that could be deeply embedded inside their existing corporate intranet portal.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'rgba(0,0,0,0.4)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981' }}>
                <TrendingUp size={32} color="#10b981" />
                <div>
                  <div style={{ fontSize: '24px', fontWeight: 700, color: '#10b981' }}>+300%</div>
                  <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '1px' }}>Conversion Spike</div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ background: 'linear-gradient(145deg, rgba(30,30,30,0.8) 0%, rgba(10,10,10,0.9) 100%)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)', padding: '64px', textAlign: 'center', boxShadow: '0 40px 80px rgba(0,0,0,0.4)' }}
          >
            <Target size={40} color="#3b82f6" style={{ margin: '0 auto 24px auto', display: 'block' }} />
            <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#fff', marginBottom: '24px' }}>Final Thoughts</h3>
            <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto 48px auto', fontStyle: 'italic' }}>
              "Smart EPP was a masterclass in designing for trust and low friction over pure aesthetics. By deeply understanding FinTech regulations and corporate HR integrations, we were able to engineer a truly frictionless checkout experience."
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '48px' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 24px', borderRadius: '100px', fontSize: '14px', color: 'rgba(255,255,255,0.7)', display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
                <Palette size={18} color="var(--accent-color)" /> 
                <span><strong style={{ color: '#fff' }}>Built with:</strong> Figma, Claude, & UX Pilot</span>
              </div>
            </div>

            <Link 
              to="/" 
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#0a0a0a', background: '#fff', padding: '16px 40px', borderRadius: '100px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', letterSpacing: '1px', textTransform: 'uppercase', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Back to All Projects
            </Link>
          </motion.div>

        </div>
      </section>

    </div>
  );
};
