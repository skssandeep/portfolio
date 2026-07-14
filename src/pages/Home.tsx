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
import { LogoRevealOrbital2 } from '../components/ui/LogoRevealOrbital2';
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

  // Handle hash scrolling
  useEffect(() => {
    // Prevent browser from auto-restoring scroll position
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    if (hash) {
      // Wait a moment for the page fade-in transition (400ms) to finish before scrolling
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id) || document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 450);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash, location.pathname]);

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
        paddingBottom: '128px', 
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
          // Mask out the bottom so the glowing cursor light doesn't hit a hard horizontal edge
          maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
        }} />

        {/* Grid overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          zIndex: 0,
          pointerEvents: 'none',
          // Mask out the grid smoothly from top to bottom so it blends seamlessly into the black background
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
        }} />

        <motion.div className="hidden md:block" style={{ y: portalY, position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
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
            {/* 1. DESKTOP HERO (100% UNTOUCHED ORIGINAL) */}
            <div className="hidden md:flex flex-col items-center w-full">
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '32px'
              }}>
                <span className="animate-pulse" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981', boxShadow: '0 0 8px rgba(16, 185, 129, 0.4)' }}></span>
                <span style={{ 
                  color: 'rgba(255, 255, 255, 0.55)', 
                  fontWeight: 500, 
                  letterSpacing: '0.2em', 
                  fontSize: '12px', 
                  textTransform: 'uppercase', 
                  fontFamily: "'Dune Rise', sans-serif" 
                }}>
                  Sandeep KS • Product Designer
                </span>
              </div>
              
              <h1 className="text-hero" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '16px', lineHeight: 1.15, textTransform: 'uppercase', opacity: 0.9 }}>
                <span>DESIGNING FOR USERS.</span>
                <span style={{ 
                  background: 'linear-gradient(to right, #7928CA 0%, #FF007A 50%, var(--accent-color) 100%)', 
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent'
                }}>
                  OPTIMIZING FOR IMPACT.
                </span>
              </h1>
              
              <p className="text-body-large" style={{ 
                marginBottom: '40px', 
                maxWidth: '800px', 
                lineHeight: 1.6, 
                color: 'var(--text-secondary)', 
                fontWeight: 400 
              }}>
                Bridging human-centered design and strategic thinking to build scalable product ecosystems that drive measurable business results.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', alignItems: 'center' }}>
                  <LiquidButton 
                    size="lg" 
                    onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                    style={{ 
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 500, 
                      letterSpacing: '0px', 
                      padding: '0 48px', 
                      fontSize: '16px',
                      minHeight: '60px',
                      position: 'relative',
                      zIndex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px'
                    }}
                  >
                    VIEW CASE STUDIES
                  </LiquidButton>
                </div>
              </div>
            </div>

            {/* 2. MOBILE HERO (NEW SAFE PLAYGROUND) */}
            <div className="flex md:hidden flex-col items-center w-full" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
              {/* Pre-header */}
              <div className="flex flex-col items-center gap-1" style={{ marginBottom: '16px' }}>
                <div className="flex items-center gap-2">
                  <span className="animate-pulse w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                  <span className="text-[10px] tracking-[0.15em] uppercase font-medium text-white/60 text-center" style={{ fontFamily: "'Dune Rise', sans-serif" }}>
                    Sandeep KS
                  </span>
                </div>
                <span className="text-[10px] tracking-[0.15em] uppercase font-medium text-white/60 text-center" style={{ fontFamily: "'Dune Rise', sans-serif" }}>
                  Product Designer
                </span>
              </div>
              
              {/* Main Headline */}
              <h1 
                className="text-center tracking-tight opacity-90 w-full" 
                style={{ 
                  fontFamily: "'Syne', sans-serif", 
                  fontSize: 'clamp(22px, 8vw, 36px)',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  marginBottom: '24px', 
                  lineHeight: 1.15
                }}
              >
                <span className="block">DESIGNING FOR USERS.</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#7928CA] via-[#FF007A] to-[var(--accent-color)]">
                  OPTIMIZING FOR IMPACT.
                </span>
              </h1>
              
              {/* Sub-headline Paragraph */}
              <p className="text-[16px] text-white/70 font-normal leading-relaxed text-center px-4" style={{ marginBottom: '40px' }}>
                Bridging human-centered design and strategic thinking to build scalable product ecosystems that drive measurable business results.
              </p>
              
              {/* CTA Button */}
              <div className="w-full flex justify-center px-4">
                <LiquidButton 
                  size="lg" 
                  onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full flex items-center justify-center min-h-[56px] text-[15px]"
                  style={{ 
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 600, 
                    zIndex: 1,
                  }}
                >
                  VIEW CASE STUDIES
                </LiquidButton>
              </div>
            </div>
          </div>
        </section>

      {/* Sections and below */}
      {!figmaMode && (
        <>
          {/* 2. Establish Seniority & Pedigree */}
          <AboutSection />

          {/* 3. Logical Proof: Deep Problem Solving (Case Studies) */}
          <CaseStudiesSectionSideBySide />

          {/* 4. Process: How you achieve results */}
          <HowItWorks variant="red" />

          {/* 5. Areas of Expertise & Technical Domain */}
          <ServicesSection />
          <ToolsSection />

          {/* 6. Visual Proof: High-fidelity craft (UI Gallery) */}
          <ProjectsSection />

          {/* 7. Social Proof: Clients Trust */}
          <Testimonials />

          {/* 8. Close: Final CTA */}
          <LogoRevealOrbital2 />
        </>
      )}
    </>
  );
};
