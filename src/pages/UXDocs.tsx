import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

export const UXDocs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '120px' }}>
      
      {/* Header */}
      <section style={{ paddingTop: '160px', paddingBottom: '80px', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-color)', background: 'rgba(239, 68, 68, 0.1)', padding: '8px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px' }}>
            <BookOpen size={16} /> Digital Garden
          </div>
          <h1 className="text-hero" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', lineHeight: 1.05, marginBottom: '24px', letterSpacing: '-0.02em' }}>
            UX Docs
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
            A living repository of my UX learnings, rationale behind design decisions, and best practices.
          </p>
        </div>
      </section>

      {/* Docs Content */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          
          {/* Doc Entry 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ 
              background: 'var(--bg-secondary)', 
              padding: '40px', 
              borderRadius: '24px', 
              border: '1px solid var(--glass-border)',
              marginBottom: '32px'
            }}
          >
            <div style={{ color: 'var(--text-secondary)', fontSize: '12px', fontFamily: "'JetBrains Mono', monospace", marginBottom: '16px' }}>
              ENTRY 001 // NAVIGATION & DISCOVERABILITY
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '24px', letterSpacing: '-0.02em' }}>
              Why custom "Back to Portfolio" buttons on Case Studies?
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.6 }}>
              <p>
                A common question when designing portfolio case studies is: <em>"Do we really need a custom back button if the browser navigation already works?"</em>
              </p>
              <p>
                While it's true that a user navigating linearly from the Home Page &gt; Case Study can easily hit the browser's back button, this ignores a critical edge case: <strong>Direct Linking.</strong>
              </p>
              
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '12px', borderLeft: '4px solid var(--accent-color)', margin: '12px 0' }}>
                <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '8px' }}>The Direct Link Scenario</strong>
                If a link to a specific case study is shared (e.g., via LinkedIn, email, or a recruiter's ATS), the visitor lands on the case study page with <strong>no browser history</strong>. Their browser's back button is disabled.
              </div>

              <p>
                If they finish reading the case study and want to see the rest of your work, a manual "Back to Portfolio" button guarantees they have a clear, immediate path to your homepage (specifically anchoring them to the projects section), rather than forcing them to scroll all the way back up to find the main navigation bar. 
              </p>
              <p>
                <strong>Takeaway:</strong> Redundant navigation is good UX when it handles alternative entry points into the user journey.
              </p>
            </div>
          </motion.div>

        </div>
      </section>
      
    </div>
  );
};
