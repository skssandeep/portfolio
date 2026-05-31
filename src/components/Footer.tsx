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
    { label: "LinkedIn", href: "#" },
    { label: "Upwork", href: "https://www.upwork.com/freelancers/~01b0aab6d05f52f81e" },
    { label: "Instagram", href: "#" },
  ];

  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  return (
    <div className="container" style={{ paddingBottom: '32px' }}>
      <footer style={{ 
      position: 'relative', 
      overflow: 'hidden', 
      borderRadius: '32px', 
      backgroundColor: 'var(--bg-secondary)',
      boxShadow: 'var(--glass-shadow)',
      border: '1px solid var(--glass-border)'
    }}>
      <div style={{ margin: '0 auto', padding: '64px', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '64px' }}>
          
          {/* Brand section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <a href="https://sandstormify.com" style={{ color: 'var(--text-primary)', fontSize: '16px', fontFamily: "'Dune Rise', var(--font-system)", fontWeight: 'normal', letterSpacing: '1px', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                SANDST<span style={{ color: 'var(--accent-color)', display: 'inline-block', transform: 'scale(1.15)', margin: '0 2px' }}>o</span>RMIFY
              </a>
              <span style={{ color: 'var(--text-secondary)', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', opacity: 0.7 }}>
                By Sandeep KS
              </span>
            </div>
            <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
              Sandstormify is a premium UI/UX design studio focused on process over polish.
            </p>
          </div>

          {/* Contact section */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '18px', fontWeight: 600, marginBottom: '24px' }}>
              Get in Touch
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 0 -16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
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
        <div style={{ paddingTop: '32px', marginTop: '32px', borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          {/* Social icons */}
          <div 
            style={{ display: 'flex', gap: '8px', color: 'var(--text-secondary)' }}
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

          {/* Copyright */}
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
            &copy; {new Date().getFullYear()} Sandstormify. All rights reserved.
          </p>
        </div>
      </div>
      <FooterBackgroundGradient />
      </footer>
    </div>
  );
}
