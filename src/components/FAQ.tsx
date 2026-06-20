import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: "Are you open to relocation or hybrid work models?",
    a: "Yes, I am highly adaptable. While I have extensive experience collaborating with distributed global teams remotely, I am open to hybrid or on-site roles in major tech hubs depending on the scope and impact of the opportunity."
  },
  {
    q: "What is your availability to start a new role?",
    a: "I am currently open to exploring new high-impact positions. My availability is flexible, but I can generally wrap up current commitments and begin contributing to a new team within a standard 2 to 4 week notice period."
  },
  {
    q: "How do you collaborate with Engineering and Product Management?",
    a: "I treat design as a strategic partnership. I align with PMs early on business metrics and user needs, and I embed with Engineering to ensure technical feasibility. I rely on robust design systems, detailed handoffs, and continuous communication to eliminate silos."
  },
  {
    q: "Can I get access to your locked case studies?",
    a: "Out of respect for my previous employers and active NDAs, certain enterprise case studies are password-protected. I am happy to walk through these projects in detail during a live interview, or provide secure access upon request for recruiters and hiring managers."
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
          <span style={{ color: 'var(--accent-color)', fontWeight: 600, letterSpacing: '0', textTransform: 'uppercase', fontSize: '14px', fontFamily: "'Syne', sans-serif", display: 'block', marginBottom: '16px' }}>
            FAQ
          </span>
          <h2 style={{ fontSize: 'clamp(40px, 5vw, 64px)', marginTop: '0', marginBottom: '0', fontWeight: 500, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1.15 }}>
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
                  <span style={{ fontSize: '24px', fontWeight: 500, letterSpacing: '0', }}>{faq.q}</span>
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
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} // Apple-like custom spring/easing
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ paddingTop: '24px', paddingBottom: '8px' }}>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0, fontSize: '18px', maxWidth: '800px' }}>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
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
