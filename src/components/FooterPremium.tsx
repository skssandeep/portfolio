import React, { useRef } from "react";
import { Mail } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export const FooterPremium = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create a deep parallax reveal effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 30, stiffness: 100 });
  
  // Parallax the massive text up slightly as the footer is revealed
  const y = useTransform(smoothProgress, [0, 1], [-150, 0]);
  const opacity = useTransform(smoothProgress, [0.5, 1], [0.3, 1]);
  const scale = useTransform(smoothProgress, [0, 1], [0.9, 1]);

  const socialLinks = [
    { label: "X", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Upwork", href: "https://www.upwork.com/freelancers/~01b0aab6d05f52f81e" },
    { label: "Instagram", href: "#" }
  ];

  return (
    <div ref={containerRef} style={{ position: 'relative', height: '100vh', clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}>
      <footer style={{ 
        position: 'fixed', 
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100vh', 
        backgroundColor: '#050505',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        zIndex: -1 // Kept behind the page content
      }}>
        
        {/* Top minimal bar of the footer */}
        <div className="container" style={{ paddingTop: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '40px' }}>
          
          <div style={{ maxWidth: '400px' }}>
            <h3 style={{ color: 'var(--text-primary)', fontSize: '24px', fontFamily: "'Syne', sans-serif", fontWeight: 600, marginBottom: '16px' }}>
              Let's build something extraordinary.
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.6 }}>
              Sandstormify is a premium UI/UX design studio focused on process over polish, delivering physics-driven digital experiences.
            </p>
            <a href="mailto:hello@sandstormify.com" style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '12px', 
              marginTop: '32px',
              padding: '16px 32px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '100px',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: 500,
              transition: 'background 0.3s ease'
            }}
            className="hover:bg-white/10"
            >
              <Mail size={18} />
              hello@sandstormify.com
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>
              Connect
            </span>
            {socialLinks.map(link => (
              <a 
                key={link.label}
                href={link.href}
                style={{
                  color: 'var(--text-primary)',
                  fontSize: '16px',
                  textDecoration: 'none',
                  padding: '4px 0',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'inline-block',
                  width: 'fit-content'
                }}
                className="group"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--accent-color)] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

        </div>

        {/* Massive Typography */}
        <motion.div 
          style={{ 
            width: '100%', 
            textAlign: 'center', 
            y, 
            opacity,
            scale,
            paddingBottom: '20px',
            paddingTop: '60px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <h1 style={{ 
            fontSize: '14vw', 
            fontFamily: "'Syne', sans-serif", 
            fontWeight: 800, 
            margin: 0, 
            lineHeight: 0.8,
            letterSpacing: '-0.02em',
            background: 'linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            opacity: 0.8
          }}>
            SANDSTORMIFY
          </h1>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '0 40px', marginTop: '40px' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>
              &copy; {new Date().getFullYear()} Sandstormify.
            </span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>
              All rights reserved.
            </span>
          </div>
        </motion.div>

      </footer>
    </div>
  );
};
