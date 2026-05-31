import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { Footer } from './components/Footer';
import { LiquidButton } from './components/ui/liquid-glass-button';
import { Preloader } from './components/ui/Preloader';
import { Home } from './pages/Home';
import { Drafts } from './pages/Drafts';
import { CaseStudy } from './pages/CaseStudy';
import { Top1Percent } from './pages/Top1Percent';
import { AIWorkflow } from './pages/AIWorkflow';
import { Prototypes } from './pages/Prototypes';
import { Essays } from './pages/Essays';
import { Process } from './pages/Process';
import { PostMortems } from './pages/PostMortems';
import { Avatars } from './pages/Avatars';
import { Cursors } from './pages/Cursors';
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
  { label: 'How it works', id: 'how-it-works' },
  { label: 'Projects', id: 'projects' },
  { label: 'Services', id: 'services' },
  { label: 'FAQs', id: 'faq' }
];

function App() {
  const [hideNav, setHideNav] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  // Smooth scroll progress for the thermometer line to prevent jumping
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const scrollFillHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

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
      <div className="portfolio" style={{ position: 'relative' }}>
        
        {/* Global Navigation Container */}
        <div 
          style={{ position: 'fixed', width: '100%', top: '20px', zIndex: 100, display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}
        >
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', pointerEvents: 'auto' }}>
            {/* The main navbar pill */}
            <motion.div 
              initial={{ y: 0 }}
              animate={{ y: hideNav ? -100 : 0, opacity: hideNav ? 0 : 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="glass" 
              style={{ 
              display: 'flex', 
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
                <Link to="/" style={{ fontFamily: "'Dune Rise', var(--font-system)", fontWeight: 'normal', fontSize: '18px', letterSpacing: '2px', color: 'var(--text-primary)', paddingTop: '2px', display: 'flex', alignItems: 'center' }}>
                  SANDST<span style={{ color: 'var(--accent-color)', display: 'inline-block', transform: 'scale(1.15)', margin: '0 2px' }}>o</span>RMIFY
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
                    to={`/#${link.id}`} 
                    onClick={(e) => handleScrollTo(e, link.id)} 
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
                  onClick={() => window.open('https://cal.com/sandeepks/15min', '_blank')}
                >
                  Book a Call
                </LiquidButton>
              </div>

            </motion.div>


          </div>
        </div>

        {/* Global Vertical Edge Typography */}
        {!hideNav && (
          <div className="edge-typography" style={{
            position: 'fixed',
            left: '32px',
            bottom: '48px',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            fontFamily: "'Dune Rise', var(--font-system)",
            fontSize: '10px',
            letterSpacing: '4px',
            color: 'var(--text-secondary)',
            zIndex: 50,
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/drafts" element={<Drafts />} />
            <Route path="/case-study/:id" element={<CaseStudy />} />
            <Route path="/top-1-percent" element={<Top1Percent />} />
            <Route path="/ai-workflow" element={<AIWorkflow />} />
            <Route path="/prototypes" element={<Prototypes />} />
            <Route path="/essays" element={<Essays />} />
            <Route path="/process" element={<Process />} />
            <Route path="/post-mortems" element={<PostMortems />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/cursors" element={<Cursors />} />
          </Routes>
        </ErrorBoundary>

        {/* Global Footer (Original) */}
        {!hideNav && <Footer />}
      </div>
    </Router>
  );
}

export default App;
