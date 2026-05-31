import React, { useEffect } from 'react';
import { AlertTriangle, TrendingDown, Users } from 'lucide-react';

export const PostMortems = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: 'var(--bg-color)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        {/* Header */}
        <header style={{ marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '40px', height: '1px', backgroundColor: '#ef4444' }} />
            <span style={{ fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', color: '#ef4444', fontWeight: 600 }}>Post-Mortems</span>
          </div>
          <h1 className="text-headline" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '32px', lineHeight: 1.1 }}>
            What I got wrong.
          </h1>
          <p className="text-body-large" style={{ color: 'var(--text-secondary)', fontSize: '20px', lineHeight: 1.6 }}>
            A portfolio full of disguised wins is boring. Here are three real failures where I shipped the wrong thing, misread the data, or made bad system decisions—and exactly what I learned from them.
          </p>
        </header>

        {/* Post Mortem 1 */}
        <article style={{ marginBottom: '80px', paddingBottom: '80px', borderBottom: '1px solid var(--glass-border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', color: '#ef4444' }}>
            <TrendingDown size={24} />
            <h2 style={{ fontSize: '24px', margin: 0, color: 'var(--text-primary)' }}>The "Frictionless" Onboarding Disaster</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '24px', marginBottom: '24px' }}>
            <div style={{ color: 'var(--text-secondary)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Assumption</div>
            <div style={{ color: 'var(--text-primary)', fontSize: '16px', lineHeight: 1.6 }}>
              I assumed that by removing all optional fields and reducing the B2B signup flow to just 2 screens, we would massively increase our conversion rate. I designed a highly minimal, "consumer-grade" flow.
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '24px', marginBottom: '32px' }}>
            <div style={{ color: 'var(--text-secondary)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Reality</div>
            <div style={{ color: 'var(--text-primary)', fontSize: '16px', lineHeight: 1.6 }}>
              Signups increased by 15%, but Day-7 retention plummeted by 40%. Because we removed the friction of asking for role and company size, the app couldn't personalize the empty state. Users arrived in a blank dashboard, felt overwhelmed, and churned.
            </div>
          </div>

          <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '32px', borderRadius: '16px' }}>
            <h4 style={{ color: '#ef4444', marginBottom: '12px', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase' }}>What I do differently now</h4>
            <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              I no longer optimize for the "signup" metric in isolation. I now design for "Time to First Value" (TTFV). Sometimes, adding positive friction (like a 4-step personalization wizard) actually improves the core business metrics down the funnel.
            </p>
          </div>
        </article>

        {/* Post Mortem 2 */}
        <article>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', color: '#eab308' }}>
            <AlertTriangle size={24} />
            <h2 style={{ fontSize: '24px', margin: 0, color: 'var(--text-primary)' }}>The Over-Engineered Design System</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '24px', marginBottom: '24px' }}>
            <div style={{ color: 'var(--text-secondary)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Assumption</div>
            <div style={{ color: 'var(--text-primary)', fontSize: '16px', lineHeight: 1.6 }}>
              I spent 3 months building a hyper-complex Figma design system with nested variants, boolean properties, and strict constraints. I assumed this would speed up the junior designers on the team.
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '24px', marginBottom: '32px' }}>
            <div style={{ color: 'var(--text-secondary)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Reality</div>
            <div style={{ color: 'var(--text-primary)', fontSize: '16px', lineHeight: 1.6 }}>
              It completely paralyzed them. The components were so rigid that whenever a designer needed a slight variation, they would detach the instance and build it custom anyway. The system became fragmented within weeks because the learning curve was too steep.
            </div>
          </div>

          <div style={{ backgroundColor: 'rgba(234, 179, 8, 0.05)', border: '1px solid rgba(234, 179, 8, 0.2)', padding: '32px', borderRadius: '16px' }}>
            <h4 style={{ color: '#eab308', marginBottom: '12px', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase' }}>What I do differently now</h4>
            <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              I build "loose" design systems. Instead of making one Button component with 84 variants, I provide a kit of raw atoms and slot-based layout containers. Systems need to provide paved paths, not electric fences.
            </p>
          </div>
        </article>

      </div>
    </div>
  );
};
