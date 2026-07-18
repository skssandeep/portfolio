import React, { useState } from "react";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { FooterBackgroundGradient, TextHoverEffect } from "./ui/hover-footer";
import { motion } from 'framer-motion';

export const Footer = () => {

  // Contact info data
  const contactInfo = [
    {
      icon: <Mail size={18} style={{ color: 'var(--accent-color)' }} />,
      text: "sandeeps66400@gmail.com",
      href: "mailto:sandeeps66400@gmail.com",
    }
  ];

  // Social media icons
  const socialLinks = [
    { label: "X", href: "#" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sandeep-kumar-singh-7ba716194/" },

    { label: "Instagram", href: "#" },
  ];

  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div className="container" style={{ paddingBottom: '32px' }}>
      <footer style={{ 
      position: 'relative', 
      overflow: 'hidden', 
      borderRadius: '32px', 
      backgroundColor: 'transparent',
      border: '1px solid rgba(255,255,255,0.05)'
    }}>


      {/* Background Glow */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '400px',
        background: 'radial-gradient(ellipse at bottom, rgba(239, 68, 68, 0.08) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      {/* Architectural Grid */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        zIndex: 0,
        pointerEvents: 'none',
        maskImage: 'radial-gradient(ellipse at bottom, black 0%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at bottom, black 0%, transparent 80%)'
      }} />
      <div style={{ margin: '0 auto', padding: isMobile ? '48px 16px' : '64px', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: isMobile ? '48px' : '64px' }}>
          
          {/* Brand section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px', alignItems: isMobile ? 'center' : 'flex-start', textAlign: isMobile ? 'center' : 'left', margin: isMobile ? '0 auto' : undefined }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <a href="https://sandstormify.com" style={{ color: 'var(--text-primary)', fontSize: '20px', fontFamily: "'Dune Rise', var(--font-system)", fontWeight: 'normal', letterSpacing: '0', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                SANDST<span style={{ color: 'var(--accent-color)', display: 'inline-block', transform: 'scale(1.15)', margin: '0 2px' }}>o</span>RMIFY
              </a>
              <span style={{ color: 'var(--text-secondary)', fontSize: '11px', letterSpacing: '0', textTransform: 'uppercase', opacity: 0.7 }}>
                By Sandeep KS
              </span>
            </div>
            <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
              A Product Designer focused on solving complex user problems and driving measurable business impact.
            </p>
          </div>

          {/* Contact section */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'center' : 'flex-start', textAlign: isMobile ? 'center' : 'left' }}>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '18px', fontWeight: 600, marginBottom: '24px' }}>
              Get in Touch
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: isMobile ? 0 : '0 0 0 -16px', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: isMobile ? 'center' : 'flex-start' }}>
              {contactInfo.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0px', color: 'var(--text-secondary)' }}>
                  
                  {item.href ? (
                    <a href={item.href} className="btn-link" style={{ color: 'var(--text-secondary)', display: 'flex', gap: '12px', alignItems: 'center' }}>
                      {item.icon}
                      {item.text}
                    </a>
                  ) : (
                    <span style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '8px 16px' }}>
                      {item.icon}
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div style={{ paddingTop: '32px', marginTop: '32px', borderTop: '1px solid var(--glass-border)', display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: isMobile ? 'center' : 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: isMobile ? '24px' : '16px' }}>
          {/* Social icons */}
          <div 
            style={{ display: 'flex', gap: '8px', color: 'var(--text-secondary)', justifyContent: 'center', flexWrap: 'wrap' }}
            onMouseLeave={() => setHoveredSocial(null)}
          >
            {socialLinks.map(({ label, href }) => (
              <a 
                key={label} 
                href={href} 
                aria-label={label} 
                style={{ 
                  color: hoveredSocial === label ? 'var(--text-primary)' : 'inherit', 
                  fontSize: '15px',
                  position: 'relative',
                  padding: '8px 16px',
                  borderRadius: '100px',
                  transition: 'color 0.2s ease',
                  textDecoration: 'none',
                  zIndex: 1
                }}
                onMouseEnter={() => setHoveredSocial(label)}
              >
                {hoveredSocial === label && (
                  <motion.div
                    layoutId="social-hover"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(255, 255, 255, 0.08)',
                      borderRadius: '100px',
                      zIndex: -1
                    }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {label}
              </a>
            ))}
          </div>

          {/* Links & Copyright */}
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column-reverse' : 'row', alignItems: 'center', gap: isMobile ? '16px' : '24px', flexWrap: 'wrap' }}>
            {!isMobile && (
              <Link to="/drafts" style={{ color: 'var(--text-secondary)', fontSize: '14px', textDecoration: 'none', borderBottom: '1px solid transparent' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                Drafts
              </Link>
            )}
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', margin: 0, textAlign: 'center' }}>
              &copy; {new Date().getFullYear()} Sandstormify. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}
