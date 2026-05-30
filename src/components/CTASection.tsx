import React from 'react';
import { LiquidButton } from './ui/liquid-glass-button';
import { Sparkles } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="container" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
        <h2 className="text-headline" style={{ fontSize: '48px', maxWidth: '800px', lineHeight: 1.2 }}>
          Ready to turn your website into your<br/>
          <span style={{ color: 'var(--accent-color)' }}>best salesperson?</span>
        </h2>
        
        <LiquidButton 
          size="lg" 
          style={{ fontWeight: 600, letterSpacing: '1px', padding: '0 48px', fontSize: '0.9rem' }}
          onClick={() => window.open('https://cal.com/sandeepks/15min', '_blank')}
        >
          Book Your Free Strategy Call
        </LiquidButton>
      </div>
    </section>
  );
};
