import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Top1Percent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Initialize intersection observer for scroll reveals
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

  const principles = [
    {
      id: "01",
      title: "A documented AI workflow",
      description: "Everyone in 2026 claims \"I use AI.\" Almost no one shows it.",
      content: "Build a section that walks through how you actually work — your CLAUDE.md setup, the Figma MCP plumbing, the specific prompts you've refined, the agents or commands you've built, a before/after on a real task.",
      route: "/ai-workflow"
    },
    {
      id: "02",
      title: "Functional, code-shipped prototypes",
      description: "Not Figma frames flattened to PNG.",
      content: "A static mockup of a component reads as a junior signal now; a working React/HTML version reads as senior. Pick 2–3 moments from your case studies where the interaction is the design and ship them as live, embedded prototypes built with Claude Code.",
      route: "/prototypes"
    },
    {
      id: "03",
      title: "A written point of view",
      description: "2 or 3 opinionated essays, not blog filler.",
      content: "Designers who get known get known for ideas, not pixels. Pick a few hills you'll die on and write them up properly — \"Design systems are becoming runtime, not design-time,\" \"The PRD is dead, here's what replaces it.\"",
      route: "/essays"
    },
    {
      id: "04",
      title: "The messy middle",
      description: "Process artifacts shown raw.",
      content: "Polished case studies all look the same; rejected work doesn't. For one or two projects, show the actual sketches on paper, the three directions you killed, a screenshot of the stakeholder feedback that changed your mind.",
      route: "/process"
    },
    {
      id: "05",
      title: "A \"what I got wrong\" section",
      description: "The single most differentiating page you can build, because nobody else has one.",
      content: "Pick 2–3 real failures or things you'd redo — a feature that shipped and underperformed, a research insight you misread, a system decision that didn't scale — and write an honest post-mortem on each.",
      route: "/post-mortems"
    }
  ];

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        
        {/* Header Section */}
        <header className="scroll-reveal" style={{ marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--accent-color)' }} />
            <span style={{ fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--accent-color)', fontWeight: 600 }}>The Manifesto</span>
          </div>
          <h1 className="text-headline" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '40px', lineHeight: 1.1 }}>
            The Top 1%
          </h1>
          <p className="text-body-large" style={{ color: 'var(--text-secondary)', fontSize: '20px', lineHeight: 1.6 }}>
            Most portfolios fail in the same way: they're polished outcome reels that look interchangeable. The reviewer can't tell if you're 6 months or 6 years in, can't tell how you think, and can't tell what you'd be like to work with. The 5 things below fix exactly that — they're rare, hard to fake, and disproportionately memorable.
          </p>
        </header>

        {/* Principles List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {principles.map((principle, index) => (
            <Link 
              key={principle.id} 
              to={principle.route}
              className={`scroll-reveal delay-${(index % 3) * 100} hover-scale`}
              style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--glass-border)',
                borderRadius: '24px',
                padding: '48px',
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
                gap: '40px',
                position: 'relative',
                overflow: 'hidden',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'border-color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-color)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--glass-border)'}
            >
              {/* Subtle background glow for each card based on index */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '300px',
                height: '300px',
                background: `radial-gradient(circle, rgba(var(--accent-rgb), 0.05) 0%, transparent 70%)`,
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none'
              }} />

              {/* Huge Number */}
              <div style={{ 
                fontFamily: "'Dune Rise', var(--font-system)", 
                fontSize: '64px', 
                lineHeight: 1, 
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255,255,255,0.2)',
                position: 'relative',
                zIndex: 2
              }}>
                {principle.id}
              </div>

              {/* Content */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-primary)' }}>
                  {principle.title}
                </h2>
                <h3 style={{ fontSize: '18px', color: 'var(--accent-color)', marginBottom: '24px', fontWeight: 400 }}>
                  {principle.description}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.7, marginBottom: '24px' }}>
                  {principle.content}
                </p>
                <div style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase' }}>
                  Explore Case Study &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Conclusion / Caution Box */}
        <div 
          className="scroll-reveal delay-200"
          style={{ 
            marginTop: '80px',
            padding: '40px',
            backgroundColor: 'rgba(239, 68, 68, 0.05)', // Subtle red tint
            borderLeft: '4px solid var(--accent-color)',
            borderRadius: '0 16px 16px 0'
          }}
        >
          <p style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '24px', fontWeight: 500 }}>
            If you do all five, you'll be in roughly the top 1% of portfolios I see — not because the bar is high, but because the field is allergic to all five of these.
          </p>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
            <strong style={{ color: 'var(--text-primary)' }}>One honest caution:</strong> don't bolt them on as decoration. The risk is producing thin versions of each ("here's a 200-word essay, here's a 'failure' that's actually a humblebrag") which read worse than not having them. One excellent essay beats three mediocre ones, and one honest post-mortem beats a "failures" page full of disguised wins.
          </p>
        </div>

      </div>
    </div>
  );
};
