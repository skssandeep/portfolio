import React, { useEffect } from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';

export const Essays = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const essays = [
    {
      title: "Design systems are becoming runtime, not design-time.",
      date: "Oct 2025",
      readTime: "8 min read",
      excerpt: "We've spent the last decade building massive Figma component libraries that instantly become outdated the moment code is written. With the rise of AI generation, the source of truth is moving from Figma directly to the React codebase. Here's why you should stop updating your Figma variants.",
      link: "#"
    },
    {
      title: "Why most AI features in SaaS are actually IA problems.",
      date: "Aug 2025",
      readTime: "12 min read",
      excerpt: "Slapping a chat input on top of a messy database doesn't make it \"smart.\" Users don't want to chat with their B2B software; they want the software to do the work. The problem isn't the LLM wrapper, it's the underlying Information Architecture failing to expose the right structured data.",
      link: "#"
    },
    {
      title: "The PRD is dead, here's what replaces it.",
      date: "May 2025",
      readTime: "6 min read",
      excerpt: "Product Requirements Documents are where good ideas go to die in a 40-page Google Doc. I propose the 'Executable Spec'—a hybrid between a low-fidelity interactive prototype and an AI-readable markdown file that acts as the only source of truth for engineering.",
      link: "#"
    }
  ];

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: 'var(--bg-color)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        {/* Header */}
        <header style={{ marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--accent-color)' }} />
            <span style={{ fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--accent-color)', fontWeight: 600 }}>Written Point of View</span>
          </div>
          <h1 className="text-headline" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '32px', lineHeight: 1.1 }}>
            Hills I'll die on.
          </h1>
          <p className="text-body-large" style={{ color: 'var(--text-secondary)', fontSize: '20px', lineHeight: 1.6 }}>
            Designers who get known get known for ideas, not pixels. Here are my deeply opinionated, well-argued perspectives on where UI/UX engineering is heading in the next 5 years.
          </p>
        </header>

        {/* Essay List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {essays.map((essay, i) => (
            <article key={i} style={{ borderBottom: i !== essays.length - 1 ? '1px solid var(--glass-border)' : 'none', paddingBottom: i !== essays.length - 1 ? '48px' : '0' }}>
              <div style={{ display: 'flex', gap: '16px', color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><BookOpen size={14} /> {essay.date}</span>
                <span>•</span>
                <span>{essay.readTime}</span>
              </div>
              <h2 style={{ fontSize: '28px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px', lineHeight: 1.3 }}>
                {essay.title}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px' }}>
                {essay.excerpt}
              </p>
              <a href={essay.link} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-color)', textDecoration: 'none', fontWeight: 500, fontSize: '15px' }} className="hover-scale">
                Read full essay <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};
