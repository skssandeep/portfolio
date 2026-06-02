import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, XCircle, AlertCircle, TrendingUp, Clock, Target, Lightbulb, Search, Code, Smartphone, Palette, FileText, Building2, Users, Fingerprint, Wallet, Zap, ChevronLeft, ChevronRight, LayoutGrid, Columns } from 'lucide-react';
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
            <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>Select a premium device to calculate your pre-approved salary deduction.</p>
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

      {/* 1 & 2. Out-of-the-box Hero Section */}
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

        <div style={{ position: 'fixed', top: '29px', left: '4vw', zIndex: 100 }}>
          <Link to="/#case-studies" className="btn-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#fff', textDecoration: 'none', fontSize: '14px', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', padding: '12px 24px', borderRadius: '100px' }}>
            <ArrowLeft size={16} /> Back
          </Link>
        </div>

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



      {/* 3. Problem */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-color)', background: 'rgba(239, 68, 68, 0.1)', padding: '8px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px' }}>
              <AlertCircle size={16} /> The Problem
            </div>
            <h2 style={{ fontSize: '40px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>A Two-Sided Dilemma</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: '0 auto', maxWidth: '700px' }}>
              A compromise at the enterprise level triggers a cascading breakdown that completely ruins the employee experience.
            </p>
          </div>

          {/* Unified Horizontal Console */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ display: 'flex', background: 'rgba(20,20,20,0.6)', backdropFilter: 'blur(20px)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
            
            {/* Col 1: Enterprise & HR (Combined) */}
            <div style={{ flex: 2, padding: '40px', borderRight: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '32px', fontWeight: 600 }}>
                 <Building2 size={14}/> Enterprise & HR
               </div>
               
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', height: '100%' }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                     <h3 style={{ fontSize: '22px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>Limited Budgets</h3>
                     <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>Enterprises struggle to secure upfront funding, resulting in a watered-down, generic perk catalog.</p>
                     
                     {/* Mini Visual */}
                     <div style={{ marginTop: 'auto', paddingTop: '32px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}><span>Funded</span><span>30%</span></div>
                        <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '100px', overflow: 'hidden' }}><div style={{ width: '30%', height: '100%', background: 'var(--text-secondary)' }}/></div>
                     </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                     <h3 style={{ fontSize: '22px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>Admin Overhead</h3>
                     <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>HR is bogged down by manual tracking and multi-stage approvals, slowing the process to a crawl.</p>
                     
                     {/* Mini Visual */}
                     <div style={{ marginTop: 'auto', paddingTop: '32px', display: 'flex', gap: '8px' }}>
                        <div style={{ flex: 3, height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '100px' }} />
                        <div style={{ flex: 1, height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px' }} />
                        <div style={{ flex: 1, height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px' }} />
                     </div>
                  </div>
               </div>
            </div>

            {/* Col 3: Employee */}
            <div style={{ flex: 1, padding: '40px', background: 'radial-gradient(circle at top right, rgba(239,68,68,0.1) 0%, transparent 70%)', display: 'flex', flexDirection: 'column', position: 'relative' }}>
               <div style={{ position: 'absolute', top: 0, left: 0, width: '2px', height: '100%', background: 'linear-gradient(to bottom, transparent, #ef4444, transparent)', opacity: 0.5 }} />
               
               <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ef4444', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '32px', fontWeight: 600 }}>
                 <Users size={14}/> Employee UX
               </div>
               <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>Opaque Credit Limits</h3>
               <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>Employees navigate the funnel blind. Hidden limits cause massive sticker shock at checkout.</p>
               
               {/* Mini Visual */}
               <div style={{ marginTop: 'auto', paddingTop: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ color: '#ef4444' }}><AlertCircle size={20} /></div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#ef4444', letterSpacing: '1px' }}>HIGH DROP-OFF</div>
               </div>
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
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>Asking for PAN numbers and salary slips upfront caused immediate mistrust. Users felt they were applying for a mortgage just to browse phones.</p>
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
                  By syncing Corporate SSO, we unlocked instant credit limits <strong style={{ color: '#fff' }}>before</strong> browsing. Complex KYC was delayed until checkout—boosting confidence and skyrocketing conversions.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 10. Final Design w prototype (The Visual Ecosystem + Component) */}
      <section style={{ padding: '120px 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-color)', background: 'rgba(239, 68, 68, 0.1)', padding: '8px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px' }}>
              Final Design
            </div>
            <h2 style={{ fontSize: '40px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px', letterSpacing: '-0.02em' }}>The Visual Ecosystem</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
              A unified FinTech design language scaling from comprehensive admin dashboards down to the pocket-sized employee mobile purchasing experience.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
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
                  "Corporate employees absolutely refused to download another heavy app just to buy a phone once a year. The app store friction killed our acquisition funnel instantly."
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
