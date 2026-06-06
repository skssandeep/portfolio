import React, { useEffect, useState } from 'react';
import { CursorEffect } from '../components/CursorEffect';
import { GlitchOrbBackground } from '../components/ui/GlitchOrbBackground';
import { LiquidButton } from '../components/ui/liquid-glass-button';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { PerformanceSection } from '../components/PerformanceSection';
import { FooterModern } from '../components/FooterModern';
import { FooterUnique } from '../components/FooterUnique';
import { FooterCreative } from '../components/FooterCreative';
import { FooterHalo } from '../components/FooterHalo';
import { FooterCurtain } from '../components/FooterCurtain';
import { FooterSchematic } from '../components/FooterSchematic';
import { LogoRevealSpin } from '../components/drafts/LogoRevealSpin';
import { LogoRevealCinematic } from '../components/drafts/LogoRevealCinematic';
import { LogoRevealOrbital } from '../components/drafts/LogoRevealOrbital';
import { Top1Percent } from '../components/drafts/Top1Percent';
import { PostMortems } from '../components/drafts/PostMortems';
import { Avatars } from '../components/drafts/Avatars';
import { Cursors } from '../components/drafts/Cursors';
import { DesignSystemDraft } from '../components/drafts/DesignSystemDraft';


export const Drafts = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Hero Concepts', 'Logo Animations', 'Footer Layouts', 'Content Layouts', 'Design Systems', 'Top 1%', 'Post-Mortems', 'Brand Avatars', 'Cursors'];

  useEffect(() => {
    window.scrollTo(0, 0);

    // Re-initialize intersection observer for scroll reveals in this page
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
    <div style={{ paddingTop: '80px', paddingBottom: '100px' }}>
      <div className="container" style={{ textAlign: 'center', paddingTop: '64px', paddingBottom: '32px' }}>
        <h1 className="text-headline" style={{ marginBottom: '16px' }}>Drafts</h1>
        <p className="text-body-large" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          A categorized repository of experimental UI components, previous layout iterations, and creative concepts.
        </p>

        {/* Filter Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginTop: '40px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 24px',
                borderRadius: '100px',
                border: `1px solid ${activeCategory === cat ? 'var(--accent-color)' : 'rgba(255,255,255,0.1)'}`,
                backgroundColor: activeCategory === cat ? 'var(--accent-color)' : 'rgba(255,255,255,0.02)',
                color: activeCategory === cat ? '#000' : 'var(--text-secondary)',
                fontWeight: activeCategory === cat ? 600 : 400,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.color = 'white';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Render the legacy global CursorEffect ONLY on the Drafts page */}
      <CursorEffect />

      {/* =========================================
          CATEGORY: HERO CONCEPTS
          ========================================= */}
      {(activeCategory === 'All' || activeCategory === 'Hero Concepts') && (
        <section style={{ backgroundColor: '#020202', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className="text-headline" style={{ fontSize: '40px', marginBottom: '16px' }}>Hero Concepts</h2>
            <p className="text-body-large" style={{ color: 'var(--text-secondary)' }}>Experimental hero sections and above-the-fold layouts.</p>
          </div>

          <div style={{ position: 'relative', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '80px' }}>
            {/* Embedded Original Hero Section */}
            <section style={{ position: 'relative', minHeight: '800px', display: 'flex', alignItems: 'center', paddingTop: '128px', paddingBottom: '128px', textAlign: 'center', overflow: 'hidden' }}>
              <GlitchOrbBackground />
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
          </div>
        </div>
      </section>
      )}

      {/* =========================================
          CATEGORY: LOGO ANIMATIONS
          ========================================= */}
      {(activeCategory === 'All' || activeCategory === 'Logo Animations') && (
        <section style={{ backgroundColor: '#050505', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className="text-headline" style={{ fontSize: '40px', marginBottom: '16px' }}>Logo Animations</h2>
            <p className="text-body-large" style={{ color: 'var(--text-secondary)' }}>Various iterations of the final CTA logo reveal.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            <div style={{ paddingBottom: '80px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ marginBottom: '40px' }}>
                <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-color)' }}>Variant 01</span>
                <h3 style={{ fontSize: '24px', margin: '8px 0 0 0', fontWeight: 'normal' }}>Logo Reveal - Spin</h3>
              </div>
              <LogoRevealSpin />
            </div>

            <div style={{ paddingBottom: '80px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ marginBottom: '40px' }}>
                <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-color)' }}>Variant 02</span>
                <h3 style={{ fontSize: '24px', margin: '8px 0 0 0', fontWeight: 'normal' }}>Logo Reveal - Cinematic</h3>
              </div>
              <LogoRevealCinematic />
            </div>

            <div style={{ paddingBottom: '80px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ marginBottom: '40px' }}>
                <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-color)' }}>Variant 03</span>
                <h3 style={{ fontSize: '24px', margin: '8px 0 0 0', fontWeight: 'normal' }}>Logo Reveal - Orbital (V1)</h3>
              </div>
              <LogoRevealOrbital />
            </div>
          </div>
        </div>
      </section>
      )}

      {/* =========================================
          CATEGORY: FOOTER LAYOUTS
          ========================================= */}
      {(activeCategory === 'All' || activeCategory === 'Footer Layouts') && (
        <section style={{ backgroundColor: '#020202', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className="text-headline" style={{ fontSize: '40px', marginBottom: '16px' }}>Footer Layouts</h2>
            <p className="text-body-large" style={{ color: 'var(--text-secondary)' }}>Experimental footer designs and navigational concepts.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            <div style={{ paddingBottom: '80px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ marginBottom: '40px' }}>
                <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-color)' }}>Variant 01</span>
                <h3 style={{ fontSize: '24px', margin: '8px 0 0 0', fontWeight: 'normal' }}>The Modern Grid</h3>
              </div>
              <FooterModern />
            </div>

            <div style={{ paddingBottom: '80px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ marginBottom: '40px' }}>
                <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-color)' }}>Variant 02</span>
                <h3 style={{ fontSize: '24px', margin: '8px 0 0 0', fontWeight: 'normal' }}>The Bento Box</h3>
              </div>
              <FooterUnique />
            </div>

            <div style={{ paddingBottom: '80px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ marginBottom: '40px' }}>
                <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-color)' }}>Variant 03</span>
                <h3 style={{ fontSize: '24px', margin: '8px 0 0 0', fontWeight: 'normal' }}>The Kinetic Marquee</h3>
              </div>
              <FooterCreative />
            </div>

            <div style={{ paddingBottom: '80px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ marginBottom: '40px' }}>
                <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-color)' }}>Variant 04</span>
                <h3 style={{ fontSize: '24px', margin: '8px 0 0 0', fontWeight: 'normal' }}>The Interactive Halo</h3>
              </div>
              <div style={{ position: 'relative', height: '600px' }}>
                <FooterHalo />
              </div>
            </div>

            <div style={{ paddingBottom: '80px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ marginBottom: '40px', position: 'relative', zIndex: 10 }}>
                <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-color)' }}>Variant 05</span>
                <h3 style={{ fontSize: '24px', margin: '8px 0 0 0', fontWeight: 'normal' }}>The Sticky Curtain</h3>
              </div>
              <div style={{ height: '600px' }}>
                <FooterCurtain />
              </div>
            </div>

            <div style={{ paddingBottom: '80px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ marginBottom: '40px' }}>
                <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-color)' }}>Variant 06</span>
                <h3 style={{ fontSize: '24px', margin: '8px 0 0 0', fontWeight: 'normal' }}>The Blueprint Schematic</h3>
              </div>
              <FooterSchematic />
            </div>
          </div>
        </div>
      </section>
      )}

      {/* =========================================
          CATEGORY: CONTENT LAYOUTS
          ========================================= */}
      {(activeCategory === 'All' || activeCategory === 'Content Layouts') && (
        <section style={{ backgroundColor: '#050505', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className="text-headline" style={{ fontSize: '40px', marginBottom: '16px' }}>Content Layouts</h2>
            <p className="text-body-large" style={{ color: 'var(--text-secondary)' }}>Archived content sections including Case Studies and Performance metrics.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            
            <div style={{ paddingBottom: '80px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ marginBottom: '40px' }}>
                <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-color)' }}>Variant 01</span>
                <h3 style={{ fontSize: '24px', margin: '8px 0 0 0', fontWeight: 'normal' }}>Case Studies Grid</h3>
              </div>
              <div className="section-padding">
                <div className="container">
                  <div className="grid-2 scroll-reveal">
                    <CaseStudyCard 
                      title="Enterprise Dashboard Redesign"
                      role="Lead Product Designer"
                      problem="Legacy reporting tools were causing a 40% drop-off in enterprise user engagement due to data density."
                      impact="Increased DAU by 28% and reduced time-to-insight from 5 mins to 45 seconds through a customizable widget architecture."
                      imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
                    />
                    <CaseStudyCard 
                      title="AI-Powered Onboarding"
                      role="UX Designer"
                      problem="High friction in the B2B signup flow resulted in a 65% bounce rate before completing profile setup."
                      impact="Implemented a conversational AI onboarding agent that dynamically adapted to user context, increasing completion rate by 42%."
                      imageUrl="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=1000"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div style={{ paddingBottom: '80px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ marginBottom: '40px' }}>
                <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-color)' }}>Variant 02</span>
                <h3 style={{ fontSize: '24px', margin: '8px 0 0 0', fontWeight: 'normal' }}>Performance Section</h3>
              </div>
              <PerformanceSection />
            </div>

          </div>
        </div>
      </section>
      )}


      {/* =========================================
          CATEGORY: DESIGN SYSTEMS
          ========================================= */}
      {(activeCategory === 'All' || activeCategory === 'Design Systems') && (
        <DesignSystemDraft />
      )}

      {/* =========================================
          CATEGORY: TOP 1%
          ========================================= */}
      {(activeCategory === 'All' || activeCategory === 'Top 1%') && (
        <Top1Percent />
      )}

      {/* =========================================
          CATEGORY: POST-MORTEMS
          ========================================= */}
      {(activeCategory === 'All' || activeCategory === 'Post-Mortems') && (
        <PostMortems />
      )}

      {/* =========================================
          CATEGORY: BRAND AVATARS
          ========================================= */}
      {(activeCategory === 'All' || activeCategory === 'Brand Avatars') && (
        <Avatars />
      )}

      {/* =========================================
          CATEGORY: CURSORS
          ========================================= */}
      {(activeCategory === 'All' || activeCategory === 'Cursors') && (
        <Cursors />
      )}

    </div>
  );
};
