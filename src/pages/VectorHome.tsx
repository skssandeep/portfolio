import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LiquidButton } from '../components/ui/liquid-glass-button';
import { ProjectsSection } from '../components/ProjectsSection';
import { CaseStudiesSection } from '../components/CaseStudiesSection';
import { LogoReveal } from '../components/ui/LogoReveal';
import { ServicesSection } from '../components/ServicesSection';
import { Testimonials } from '../components/Testimonials';
import { HowItWorks } from '../components/HowItWorks';
import { FAQ } from '../components/FAQ';
import VectorPad from '../components/ui/vector-pad';

export const VectorHome = () => {
  const { hash } = useLocation();
  const [figmaMode, setFigmaMode] = React.useState(false);

  // Handle hash scrolling when navigating from another page
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  useEffect(() => {
    const handleFigmaToggle = (e: any) => {
      setFigmaMode(e.detail);
    };
    window.addEventListener('figmaModeToggle', handleFigmaToggle);
    return () => window.removeEventListener('figmaModeToggle', handleFigmaToggle);
  }, []);

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
      <section style={{ position: 'relative', height: '100vh', minHeight: '800px', zIndex: 0 }}>
        
        <VectorPad />

      </section>

      {/* Sections below Hero */}
      {!figmaMode && (
        <>
          <CaseStudiesSection />

          {/* Services Section */}
          <ServicesSection />

          {/* Gallery / Projects Carousel */}
          <ProjectsSection />

          {/* Clients Trust */}
          <Testimonials />

          {/* How it works */}
          <HowItWorks variant="red" />

          {/* FAQ */}
          <FAQ />

          {/* Final CTA / Logo Reveal Section */}
          <LogoReveal />
        </>
      )}
    </>
  );
};
