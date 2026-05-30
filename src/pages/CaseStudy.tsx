import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { LiquidButton } from '../components/ui/liquid-glass-button';
import { GlitchOrbBackground } from '../components/ui/GlitchOrbBackground';

// Mock Database for Case Studies
const caseStudiesDB: Record<string, any> = {
  '1': {
    title: 'OneAssist Smart EPP',
    client: 'OneAssist',
    timeline: 'Product Launch',
    role: 'Lead UI/UX Designer',
    heroMetric: '10k+',
    heroMetricLabel: 'Employees Onboarded',
    metrics: [
      { value: '30+', label: 'Partner Orgs' },
      { value: '4', label: 'Connected Products' },
      { value: '0-1', label: 'Ground Up Design' },
    ],
    challenge: 'OneAssist wanted to launch an Employee Purchase Program (Smart EPP) letting employees lease phones, laptops, and tablets through salary-linked EMIs with built-in tax savings and damage protection. This required designing a cohesive ecosystem spanning an employee app, partner dashboards for HR, financiers, and sellers, as well as an internal admin console.',
    solution: 'Designed the platform from the ground up, built every flow on OneAssist\'s design system for consistency, and partnered with product leads on research, wireframing, high-fidelity prototyping, and Figma developer handoff. Also designed an in-app Ask AI assistant and streamlined onboarding flows in the Oasys admin console to accelerate partner setup.',
    heroImage: '/images/oneassist-epp.jpg',
    solutionImage: '/images/oneassist-epp.jpg',
    testimonial: {
      quote: "Sandeep's end-to-end product design thinking accelerated our go-to-market. The design system implementation across four distinct products was flawless and helped us scale to 10,000+ users quickly.",
      author: "Product Lead, OneAssist"
    }
  },
  '2': {
    title: 'Fintech Mobile App Launch',
    client: 'Stripe for Web3',
    timeline: '4 Months',
    role: 'Product Designer & Frontend',
    heroMetric: '$2M',
    heroMetricLabel: 'Seed Funding Secured',
    metrics: [
      { value: '10k+', label: 'Waitlist Signups' },
      { value: '4.9', label: 'App Store Rating' },
      { value: '60%', label: 'Lower CAC' },
    ],
    challenge: 'A promising fintech startup needed an MVP that didn\'t look like an MVP. They needed a premium, trustworthy mobile interface to secure their next round of funding in a highly competitive and skeptical market.',
    solution: 'I designed a sleek, dark-mode-first interface using subtle glassmorphism and rigorous user testing. The app felt incredibly premium and secure, instilling immediate trust in beta testers and investors alike.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
    solutionImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    testimonial: {
      quote: "The design was so polished that investors thought we had a team of 10 designers. Sandeep was instrumental in helping us close our $2M seed round.",
      author: "Michael T., Co-Founder & CEO"
    }
  }
};

export const CaseStudy = () => {
  const { id } = useParams();
  const study = caseStudiesDB[id || '1'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!study) {
    return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Case Study Not Found</div>;
  }

  return (
    <div style={{ background: 'var(--bg-color)', minHeight: '100vh' }}>
      
      {/* Hero Section */}
      <section style={{ position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center', paddingTop: '128px' }}>
        <GlitchOrbBackground />
        
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <Link to="/" className="btn-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '48px', color: 'var(--text-secondary)' }}>
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>

          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            
            {/* Titles & Metrics */}
            <div className="animate-fade-up">
              <span style={{ display: 'inline-block', color: 'var(--accent-color)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px', marginBottom: '16px' }}>
                {study.client} • {study.role}
              </span>
              <h1 className="text-hero" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '48px', whiteSpace: 'normal', wordBreak: 'break-word' }}>
                {study.title}
              </h1>

              {/* Massive Hero Metric */}
              <div style={{ marginBottom: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ fontSize: '5rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1, letterSpacing: '-2px' }}>
                  {study.heroMetric}
                </div>
                <div style={{ fontSize: '18px', color: 'var(--accent-color)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginTop: '8px' }}>
                  {study.heroMetricLabel}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Story & Solution Section */}
      <section className="section-padding" style={{ position: 'relative', zIndex: 10, borderTop: '1px solid var(--glass-border)', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          <div className="grid-2" style={{ gap: '64px', marginBottom: '96px' }}>
            <div>
              <h2 className="text-title" style={{ fontSize: '32px', marginBottom: '24px', color: 'var(--accent-color)' }}>
                The Challenge
              </h2>
              <p className="text-body-large" style={{ color: 'var(--text-secondary)' }}>
                {study.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-title" style={{ fontSize: '32px', marginBottom: '24px' }}>
                The Solution
              </h2>
              <p className="text-body-large" style={{ color: 'var(--text-secondary)' }}>
                {study.solution}
              </p>
            </div>
          </div>

          {/* Large Solution Image */}
          <div className="glass" style={{
            width: '100%',
            height: 'auto',
            minHeight: '400px',
            borderRadius: '32px',
            overflow: 'hidden',
            marginBottom: '96px',
            border: '1px solid var(--glass-border)'
          }}>
            <img src={study.solutionImage} alt="Solution Design" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>

          {/* ROI Metrics Grid */}
          <div style={{ marginBottom: '96px', textAlign: 'center' }}>
            <h3 className="text-title" style={{ fontSize: '24px', marginBottom: '48px' }}>The Impact</h3>
            <div className="grid-3" style={{ gap: '32px' }}>
              {study.metrics.map((metric: any, i: number) => (
                <div key={i} className="glass" style={{ padding: '48px 32px', borderRadius: '24px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}>
                  <div style={{ fontSize: '48px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>{metric.value}</div>
                  <div style={{ fontSize: '15px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="glass" style={{ padding: '64px', borderRadius: '32px', background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)', border: '1px solid var(--glass-border)', textAlign: 'center' }}>
            <p style={{ fontSize: '24px', lineHeight: 1.6, color: 'var(--text-primary)', fontStyle: 'italic', marginBottom: '32px' }}>
              "{study.testimonial.quote}"
            </p>
            <div style={{ color: 'var(--accent-color)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
              — {study.testimonial.author}
            </div>
          </div>

        </div>
      </section>

      {/* Final Conversion CTA */}
      <section className="section-padding" style={{ textAlign: 'center', background: 'var(--bg-color)' }}>
        <div className="container">
          <h2 className="text-headline" style={{ fontSize: '48px', marginBottom: '24px' }}>
            Ready for results like these?
          </h2>
          <p className="text-body-large" style={{ color: 'var(--text-secondary)', marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px auto' }}>
            Stop leaving money on the table with poor UX. Let's design an interface that converts your visitors into loyal customers.
          </p>
          <LiquidButton 
            size="lg" 
            onClick={() => window.open('https://cal.com/sandeepks/15min', '_blank')}
            style={{ 
              fontWeight: 700, 
              letterSpacing: '2px', 
              padding: '0 56px', 
              fontSize: '1rem',
              minHeight: '60px'
            }}
          >
            BOOK YOUR FREE STRATEGY CALL
          </LiquidButton>
        </div>
      </section>

    </div>
  );
};
