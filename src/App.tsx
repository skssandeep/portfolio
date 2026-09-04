import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { getCalApi } from "@calcom/embed-react";
import { Footer } from './components/Footer';
import { LiquidButton } from './components/ui/liquid-glass-button';
import { Preloader } from './components/ui/Preloader';
import { Home } from './pages/Home';
import { pageLoaders, prefetchPage } from './pageLoaders';

// Home stays eager: it is the entry point and must paint immediately.
const Drafts = React.lazy(pageLoaders['/drafts']);
const CaseStudy = React.lazy(pageLoaders['/case-study']);
const AIWorkflow = React.lazy(pageLoaders['/ai-workflow']);
const Prototypes = React.lazy(pageLoaders['/prototypes']);
const Essays = React.lazy(pageLoaders['/essays']);
const Process = React.lazy(pageLoaders['/process']);
const SmartEPPCaseStudy = React.lazy(pageLoaders['/smart-epp']);
const SnipKeepCaseStudy = React.lazy(pageLoaders['/snipkeep']);
import { ErrorBoundary } from './components/ErrorBoundary';
import './index.css';

const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  if (window.location.pathname === '/') {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `/#${id}`);
    }
  }
};

const navLinks = [
  { label: 'About', path: '/#about', id: 'about' },
  { label: 'Case Studies', path: '/#case-studies', id: 'case-studies' },
  { label: 'Process', path: '/#how-it-works', id: 'how-it-works' },
  { label: 'Expertise', path: '/#services', id: 'services' }
];

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <React.Suspense fallback={
          <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: '#050505', color: 'var(--accent-color)',
                        fontFamily: "'Dune Rise', var(--font-system)", fontSize: '14px', letterSpacing: '2px' }}>
            LOADING
          </div>
        }>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/drafts" element={<Drafts />} />
          <Route path="/case-study/:id" element={<CaseStudy />} />
          <Route path="/smart-epp" element={<SmartEPPCaseStudy />} />
          <Route path="/snipkeep" element={<SnipKeepCaseStudy />} />
          <Route path="/ai-workflow" element={<AIWorkflow />} />
          <Route path="/prototypes" element={<Prototypes />} />
          <Route path="/essays" element={<Essays />} />
          <Route path="/process" element={<Process />} />
        </Routes>
        </React.Suspense>
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  const [hideNav, setHideNav] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Smooth scroll progress for the thermometer line to prevent jumping
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const scrollFillHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  // Recruiters almost always go on to read a case study, so fetch those chunks
  // once the browser is idle. By the time they click, the code is already here.
  useEffect(() => {
    const warm = () => { prefetchPage('/smart-epp'); prefetchPage('/snipkeep'); };
    const ric = (window as unknown as { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }).requestIdleCallback;
    if (ric) ric(warm, { timeout: 4000 });
    else setTimeout(warm, 2500);
  }, []);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  useEffect(() => {
    const handleFigmaToggle = (e: any) => {
      setHideNav(e.detail);
    };
    window.addEventListener('figmaModeToggle', handleFigmaToggle);
    return () => window.removeEventListener('figmaModeToggle', handleFigmaToggle);
  }, []);

  useEffect(() => {
    if (hideNav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [hideNav]);

  return (
    <Router>
      <Preloader />
      <div className="portfolio overflow-x-hidden w-full max-w-full" style={{ position: 'relative' }}>
        
        {/* Global Navigation Container */}
        <div 
          style={{ position: 'fixed', left: '16px', right: '16px', top: '16px', zIndex: 100, display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}
        >
          <div className="w-full md:w-auto" style={{ display: 'flex', gap: '20px', alignItems: 'center', pointerEvents: 'auto', justifyContent: 'center' }}>
            
            {/* --- DESKTOP NAVBAR (100% UNTOUCHED ORIGINAL) --- */}
            <motion.div 
              initial={{ y: 0 }}
              animate={{ y: hideNav ? -100 : 0, opacity: hideNav ? 0 : 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="glass hidden md:flex" 
              style={{ 
              alignItems: 'center', 
              justifyContent: 'space-between',
              padding: '8px 8px 8px 32px', 
              borderRadius: '100px', 
              gap: '48px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              background: 'var(--glass-bg)',
              boxShadow: 'var(--glass-shadow)'
            }}>
              
              {/* Left: Logo */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ fontFamily: "'Dune Rise', var(--font-system)", fontWeight: 'normal', fontSize: '18px', letterSpacing: '0', color: 'var(--text-primary)', paddingTop: '2px', display: 'flex', alignItems: 'center' }}>
                  ST<span style={{ color: 'var(--accent-color)', display: 'inline-block', transform: 'scale(1.15)', margin: '0 2px' }}>o</span>RMIFY
                </Link>
              </div>
              
              {/* Center: Links */}
              <div 
                style={{ display: 'flex', gap: '4px', alignItems: 'center' }}
                onMouseLeave={() => setHoveredNav(null)}
              >
                {navLinks.map((link) => (
                  <Link 
                    key={link.id}
                    to={link.path} 
                    onClick={(e) => {
                      if (link.path.startsWith('/#')) {
                        handleScrollTo(e, link.id);
                      }
                    }} 
                    style={{ 
                      position: 'relative',
                      padding: '8px 16px',
                      borderRadius: '100px',
                      fontSize: '15px',
                      color: hoveredNav === link.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                      transition: 'color 0.2s ease',
                      zIndex: 1,
                    }}
                    onMouseEnter={() => setHoveredNav(link.id)}
                  >
                    {hoveredNav === link.id && (
                      <motion.div
                        layoutId="navbar-hover"
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'rgba(255, 255, 255, 0.08)',
                          borderRadius: '100px',
                          zIndex: -1
                        }}
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Right: CTA */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <LiquidButton 
                  size="sm"
                  style={{ fontWeight: 600, fontSize: '14px', padding: '0 24px', minHeight: '40px', borderRadius: '100px' }}
                  data-cal-link="sandeepks/15min"
                  data-cal-config='{"layout":"month_view"}'
                >
                  Book a Call
                </LiquidButton>
              </div>

            </motion.div>

            {/* --- MOBILE NAVBAR --- */}
            <motion.div 
              initial={{ y: 0 }}
              animate={{ y: hideNav ? -100 : 0, opacity: hideNav ? 0 : 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="glass flex md:hidden w-full items-center justify-between" 
              style={{ 
              padding: '8px 8px 8px 24px', 
              borderRadius: '100px', 
              border: '1px solid rgba(255, 255, 255, 0.15)',
              background: 'var(--glass-bg)',
              boxShadow: 'var(--glass-shadow)'
            }}>
              {/* Left: Logo */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ fontFamily: "'Dune Rise', var(--font-system)", fontWeight: 'normal', fontSize: '15px', letterSpacing: '0', color: 'var(--text-primary)', paddingTop: '2px', display: 'flex', alignItems: 'center' }}>
                  ST<span style={{ color: 'var(--accent-color)', display: 'inline-block', transform: 'scale(1.15)', margin: '0 2px' }}>o</span>RMIFY
                </Link>
              </div>

              {/* Right: Burger Menu Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {isMobileMenuOpen ? (
                    <>
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </>
                  ) : (
                    <>
                      <line x1="3" y1="12" x2="21" y2="12"></line>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <line x1="3" y1="18" x2="21" y2="18"></line>
                    </>
                  )}
                </svg>
              </button>
            </motion.div>

          </div>
        </div>

        {/* --- MOBILE MENU OVERLAY --- */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8"
              style={{ pointerEvents: 'auto', paddingTop: '80px' }}
            >
              {/* Close button inside overlay as backup */}
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-[28px] right-[20px] w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white z-50"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="flex flex-col items-center gap-6">
                {navLinks.map((link) => (
                  <Link 
                    key={link.id}
                    to={link.path} 
                    onClick={(e) => {
                      if (link.path.startsWith('/#')) {
                        handleScrollTo(e, link.id);
                      }
                      setIsMobileMenuOpen(false);
                    }} 
                    style={{ 
                      fontSize: '24px',
                      color: 'var(--text-primary)',
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 500
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-8">
                <LiquidButton 
                  size="lg"
                  style={{ fontWeight: 600, fontSize: '16px', padding: '0 32px', minHeight: '56px', borderRadius: '100px' }}
                  data-cal-link="sandeepks/15min"
                  data-cal-config='{"layout":"month_view"}'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book a Call
                </LiquidButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Global Vertical Edge Typography */}
        {!hideNav && (
          <div className="edge-typography hidden md:flex items-center gap-4" style={{
            position: 'fixed',
            left: '32px',
            bottom: '48px',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            fontFamily: "'Dune Rise', var(--font-system)",
            fontSize: '10px',
            letterSpacing: '0', color: 'var(--text-secondary)',
            zIndex: 50,
            pointerEvents: 'none',
            opacity: 0.6
          }}>
            <div style={{ position: 'relative', width: '2px', height: '60px', background: 'rgba(255, 255, 255, 0.1)' }}>
              <motion.div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: scrollFillHeight,
                background: 'var(--accent-color)',
                boxShadow: '0 0 8px var(--accent-color)'
              }} />
            </div>
            SCROLL TO EXPLORE
          </div>
        )}

        {/* Page Routing */}
        <ErrorBoundary>
          <AnimatedRoutes />
        </ErrorBoundary>

        {/* Global Footer (Original) */}
        {!hideNav && <Footer />}
      </div>
    </Router>
  );
}

export default App;
