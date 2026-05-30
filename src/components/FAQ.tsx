import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Which tool will you use to deliver the design?",
    a: "All designs are created in Figma, doesn't matter if it's an icon, full page design or custom graphic."
  },
  {
    q: "What is the turnaround time for my designs?",
    a: "Most requests are fulfilled within 48 hours. For complex projects, I provide regular updates. Social media assets are delivered in 1 business day; full page designs take 2 days. Each design is uniquely crafted to meet your specific needs, ensuring top quality and originality."
  },
  {
    q: "What if I don't like the design?",
    a: "I offer unlimited revisions to ensure your complete satisfaction. I'll refine your project until you're 200% happy with the final result."
  },
  {
    q: "What is your refund policy?",
    a: "I don't provide refunds, but I offer the flexibility to pause and resume your service whenever needed. My commitment is focused on helping you achieve excellent results through our partnership."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding" style={{ position: 'relative', background: 'var(--bg-color)', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '900px', position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ color: 'var(--accent-color)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '14px', fontFamily: "'Syne', sans-serif" }}>
            FAQ
          </span>
          <h2 style={{ fontSize: 'clamp(40px, 5vw, 64px)', marginTop: '24px', marginBottom: '16px', fontWeight: 500, letterSpacing: '-0.03em', color: '#fff' }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            // A subtle line that fades out on the edges
            const dividerStyle = {
              content: '""',
              display: 'block',
              width: '100%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 15%, rgba(255,255,255,0.15) 85%, transparent 100%)',
              marginTop: '32px'
            };

            return (
              <div 
                key={index} 
                style={{ 
                  background: 'transparent', 
                  transition: 'all 0.3s var(--apple-easing)',
                  paddingTop: index === 0 ? '0' : '32px',
                }}
              >
                <button 
                  onClick={() => toggleAccordion(index)}
                  style={{ 
                    width: '100%', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    padding: '0', 
                    background: 'transparent', 
                    border: 'none', 
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span style={{ fontSize: '24px', fontWeight: 500, letterSpacing: '-0.5px' }}>{faq.q}</span>
                  <div style={{ 
                    transform: `rotate(${isOpen ? 180 : 0}deg)`, 
                    transition: 'transform 0.3s var(--apple-easing)',
                    color: 'var(--text-primary)', // Keeping it white to match the screenshot
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <ChevronDown size={28} strokeWidth={1.5} />
                  </div>
                </button>
                <div style={{ 
                  maxHeight: isOpen ? '500px' : '0px', 
                  opacity: isOpen ? 1 : 0,
                  transition: 'all 0.4s var(--apple-easing)',
                  paddingTop: isOpen ? '24px' : '0px',
                  overflow: 'hidden'
                }}>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0, fontSize: '18px', maxWidth: '800px' }}>{faq.a}</p>
                </div>
                
                {/* Custom Divider */}
                {index < faqs.length - 1 && <div style={dividerStyle} />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
