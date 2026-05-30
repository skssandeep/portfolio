import React, { useEffect } from 'react';
import { TubesCursor } from '../components/ui/tube-cursor';
import { useLocation } from 'react-router-dom';
import { LiquidButton } from '../components/ui/liquid-glass-button';
import { ProjectsSection } from '../components/ProjectsSection';
import { CaseStudiesSection } from '../components/CaseStudiesSection';
import { CaseStudiesSectionAlt } from '../components/CaseStudiesSectionAlt';
import { CaseStudiesSectionFinal } from '../components/CaseStudiesSectionFinal';
import { CaseStudiesSectionSideBySide } from '../components/CaseStudiesSectionSideBySide';
import { MoreCaseStudiesSection } from '../components/MoreCaseStudiesSection';
import { LogoReveal } from '../components/ui/LogoReveal';
import { ServicesSection } from '../components/ServicesSection';
import { Testimonials } from '../components/Testimonials';
import { HowItWorks } from '../components/HowItWorks';
import { FAQ } from '../components/FAQ';
import { CTASection } from '../components/CTASection';
import { ToolsSection } from '../components/ToolsSection';
import { AboutSection } from '../components/AboutSection';
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from 'motion/react';

const TUBES_COLORS = ["#f967fb", "#53bc28", "#6958d5"];
const TUBES_LIGHTS = ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"];

export const Home = () => {
  const { hash } = useLocation();
  const [figmaMode, setFigmaMode] = React.useState(false);
  
  // Parallax for the portal
  const { scrollY } = useScroll();
  // Move the portal down at half the speed of the scroll
  const portalY = useTransform(scrollY, [0, 1000], [0, 500]);

  useEffect(() => {
    const handleFigmaToggle = (e: any) => {
      setFigmaMode(e.detail);
    };
    window.addEventListener('figmaModeToggle', handleFigmaToggle);
    return () => window.removeEventListener('figmaModeToggle', handleFigmaToggle);
  }, []);

  // Handle hash scrolling when navigating from another page
  useEffect(() => {
    // Prevent browser from auto-restoring scroll position on refresh
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Check if this is a page reload
    const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
    const isReload = navEntries.length > 0 && navEntries[0].type === 'reload';

    if (isReload) {
      // Force scroll to top on reload, even if there's a hash
      window.scrollTo(0, 0);
      // Optionally clear the hash from the URL
      if (hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    } else if (hash) {
      // Normal navigation with a hash
      const element = document.querySelector(hash);
      if (element) {
        // Add a slight delay to ensure the page is rendered before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  // Mouse tracking for ambient glow and portal hover detection
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHoveringPortal, setIsHoveringPortal] = React.useState(false);
  
  // Create a dynamic radial gradient that follows the mouse
  const backgroundGlow = useMotionTemplate`radial-gradient(circle 800px at ${mouseX}px ${mouseY}px, rgba(229, 9, 20, 0.15), transparent 80%)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      // Calculate distance from portal center to determine if hovering
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2 + portalY.get();
      const radius = window.innerWidth >= 640 ? 400 : window.innerWidth * 0.35;
      const distance = Math.hypot(e.clientX - cx, e.clientY - cy);
      setIsHoveringPortal(distance < radius);
    };
    
    // Set initial position to center
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [portalY]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            (entry.target as HTMLElement).style.opacity = '1';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      (el as HTMLElement).style.opacity = '0';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        width: '100%', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        paddingTop: '128px', 
        paddingBottom: '0', 
        textAlign: 'center', 
        // overflow: 'visible' allows the parallax portal to bleed out behind other sections
        overflow: 'visible'
      }}>
        
        {/* Dynamic Background Glow following cursor */}
        <motion.div style={{
          position: 'absolute',
          inset: 0,
          background: backgroundGlow,
          zIndex: 0,
          pointerEvents: 'none',
        }} />

        {/* Grid overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          zIndex: 0,
          pointerEvents: 'none',
          // Mask out the very bottom to blend smoothly into Case Studies, and mask out the portal center slightly
          maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
        }} />

        <motion.div style={{ y: portalY, position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
          <TubesCursor
            initialColors={TUBES_COLORS}
            lightColors={TUBES_LIGHTS}
            lightIntensity={200}
            enableRandomizeOnClick
            global={false}
            title=""
            subtitle=""
            caption=""
            className="!absolute inset-0 z-0 !h-full pointer-events-none [clip-path:circle(35%_at_50%_50%)] sm:[clip-path:circle(400px_at_50%_50%)]"
          />
        </motion.div>

        <div className="container scroll-reveal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            
            <h1 className="text-hero" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '24px', lineHeight: 1.15, textTransform: 'uppercase', opacity: 0.9 }}>
              <span>DESIGNS THAT SELL</span>
              <span style={{ color: 'var(--accent-color)' }}>
                INTERFACES THAT CONVERT.
              </span>
            </h1>
            
            <p className="text-body-large" style={{ marginBottom: '48px', maxWidth: '1200px' }}>
              Stop losing customers to slow, confusing websites. I design and engineer high-performance web experiences that turn your visitors into paying clients.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', alignItems: 'center' }}>
                
                <LiquidButton 
                  size="lg" 
                  onClick={() => window.open('https://cal.com/sandeepks/15min', '_blank')}
                  style={{ 
                    fontWeight: 700, 
                    letterSpacing: '2px', 
                    padding: '0 48px', 
                    fontSize: '1rem',
                    minHeight: '60px',
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px'
                  }}
                >
                  <span className="animate-pulse" style={{ 
                    width: '10px', 
                    height: '10px', 
                    borderRadius: '50%', 
                    backgroundColor: '#22c55e', 
                    boxShadow: '0 0 12px 4px rgba(34, 197, 94, 0.4)',
                    display: 'inline-block',
                    marginRight: '12px'
                  }} />
                  BOOK A CALL WITH ME
                </LiquidButton>

              </div>
              <span style={{ color: 'var(--text-secondary)', fontSize: '13px', opacity: 0.7 }}>Free 15-Minute Strategy Session</span>
            </div>
          </div>
        </section>

      {/* Sections and below */}
      {!figmaMode && (
        <>
          {/* 2. Visual Proof: Gallery / Projects Carousel */}
          <ProjectsSection />

          {/* 3. Logical Proof: Case Studies */}
          <CaseStudiesSectionSideBySide />

          {/* 4. Social Proof: Clients Trust */}
          <Testimonials />

          {/* 5. Offer: Services Section */}
          <ServicesSection />

          {/* 6. USP: My Armour (Tools) */}
          <ToolsSection />

          {/* 6.5 Founder Intro: Who's behind Sandstormify */}
          <AboutSection />

          {/* 7. Process: How it works */}
          <HowItWorks variant="red" />

          {/* 8. Objection Handling: FAQ */}
          <FAQ />

          {/* 9. Close: Final CTA / Logo Reveal Section */}
          <LogoReveal />
        </>
      )}
    </>
  );
};
