import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export const FooterTechnical = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 30, stiffness: 100 });
  const y = useTransform(smoothProgress, [0, 1], [-100, 0]);

  const socialLinks = [
    { label: "X", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Upwork", href: "https://www.upwork.com/freelancers/~01b0aab6d05f52f81e" },
    { label: "Instagram", href: "#" }
  ];

  // Live time for the clock quadrant
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  const formattedTime = time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true });

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    width: '100%',
    height: '100%',
    borderTop: '1px solid rgba(255,255,255,0.1)',
  };

  const cellStyle: React.CSSProperties = {
    borderRight: '1px solid rgba(255,255,255,0.1)',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    padding: '48px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    overflow: 'hidden'
  };

  return (
    <div ref={containerRef} style={{ position: 'relative', height: '100vh', clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}>
      <motion.footer 
        style={{ 
          position: 'fixed', 
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100vh', 
          backgroundColor: '#000',
          display: 'flex',
          flexDirection: 'column',
          zIndex: -1,
          y
        }}
      >
        <div style={{ flex: '0 0 auto', padding: '48px', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: 'var(--text-secondary)', fontSize: '11px', letterSpacing: '2px', fontFamily: 'monospace', textTransform: 'uppercase' }}>
            SYS.FOOTER_MOD // v3.0
          </span>
          <span style={{ color: 'var(--text-secondary)', fontSize: '11px', letterSpacing: '2px', fontFamily: 'monospace', textTransform: 'uppercase' }}>
            STATUS: ACTIVE
          </span>
        </div>

        <div style={{ flex: '1 1 auto', width: '100%' }}>
          <div style={gridStyle}>
            
            {/* Top Left: Brand */}
            <motion.div 
              style={cellStyle}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
              transition={{ duration: 0.3 }}
            >
              <span style={{ color: 'var(--accent-color)', fontSize: '10px', letterSpacing: '2px', fontFamily: 'monospace' }}>[01] ID</span>
              <h2 style={{ color: 'var(--text-primary)', fontSize: '4vw', fontFamily: "'Dune Rise', var(--font-system)", margin: 0, fontWeight: 'normal' }}>
                SANDST<span style={{ color: 'var(--accent-color)' }}>o</span>RMIFY
              </h2>
            </motion.div>

            {/* Top Right: Clock */}
            <motion.div 
              style={{ ...cellStyle, borderRight: 'none' }}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
              transition={{ duration: 0.3 }}
            >
              <span style={{ color: 'var(--accent-color)', fontSize: '10px', letterSpacing: '2px', fontFamily: 'monospace' }}>[02] LOC</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ color: 'var(--text-secondary)', fontSize: '2vw', fontFamily: "'Syne', sans-serif" }}>NEW YORK, NY</span>
                <span style={{ color: 'var(--text-primary)', fontSize: '3vw', fontFamily: "'Syne', sans-serif", fontWeight: 600 }}>{formattedTime}</span>
              </div>
            </motion.div>

            {/* Bottom Left: Socials */}
            <motion.div 
              style={cellStyle}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
              transition={{ duration: 0.3 }}
            >
              <span style={{ color: 'var(--accent-color)', fontSize: '10px', letterSpacing: '2px', fontFamily: 'monospace' }}>[03] NET</span>
              <div style={{ display: 'flex', gap: '32px' }}>
                {socialLinks.map(link => (
                  <a 
                    key={link.label}
                    href={link.href}
                    style={{ color: 'var(--text-secondary)', fontSize: '16px', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '1px', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Bottom Right: Contact */}
            <motion.div 
              style={{ ...cellStyle, borderRight: 'none' }}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
              transition={{ duration: 0.3 }}
            >
              <span style={{ color: 'var(--accent-color)', fontSize: '10px', letterSpacing: '2px', fontFamily: 'monospace' }}>[04] COM</span>
              <a 
                href="mailto:hello@sandstormify.com" 
                style={{ color: 'var(--text-primary)', fontSize: '3vw', fontFamily: "'Syne', sans-serif", textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-color)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              >
                hello@sandstormify.com
              </a>
            </motion.div>

          </div>
        </div>

      </motion.footer>
    </div>
  );
};
