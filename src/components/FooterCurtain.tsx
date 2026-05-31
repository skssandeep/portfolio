import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

export const FooterCurtain = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  
  // Create a deep parallax reveal effect (the curtain effect)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 30, stiffness: 100 });
  
  // The footer sits still in the back, but we can give it a slight scale-up as it's revealed
  const scale = useTransform(smoothProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(smoothProgress, [0.5, 1], [0.5, 1]);

  const socialLinks = [
    { label: "X", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Upwork", href: "https://www.upwork.com/freelancers/~01b0aab6d05f52f81e" },
    { label: "Instagram", href: "#" }
  ];

  // Flashlight / Mouse tracking effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        // Calculate mouse position relative to the footer element itself
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} style={{ position: 'relative', height: '100vh', clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}>
      <motion.footer 
        ref={footerRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{ 
          position: 'fixed', 
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100vh', 
          backgroundColor: '#0a0a0a',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: -1, // Kept behind the page content
          scale,
          opacity,
          overflow: 'hidden'
        }}
      >
        
        {/* Flashlight Spotlight Effect */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            background: useTransform(
              [mouseX, mouseY],
              ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 40%)`
            ),
            opacity: isHovering ? 1 : 0,
            transition: 'opacity 0.5s ease'
          }}
        />

        {/* Center Content: Massive Magnetic Button */}
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '40px' }}>
            Got an idea?
          </p>
          
          {/* We simulate a magnetic button visually here by making it huge and interactive */}
          <a href="mailto:hello@sandstormify.com" style={{ textDecoration: 'none' }}>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              style={{
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: 'var(--accent-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '32px',
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                boxShadow: '0 20px 50px rgba(255, 60, 0, 0.3)',
                cursor: 'pointer'
              }}
            >
              Let's Talk
            </motion.div>
          </a>
        </div>

        {/* Absolute Edges Content */}
        <div style={{ position: 'absolute', bottom: '40px', left: '40px', right: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ color: 'var(--text-primary)', fontSize: '16px', fontFamily: "'Dune Rise', var(--font-system)", fontWeight: 'normal', letterSpacing: '1px' }}>
              SANDST<span style={{ color: 'var(--accent-color)' }}>o</span>RMIFY
            </span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '12px' }}>
              &copy; {new Date().getFullYear()} All rights reserved.
            </span>
          </div>

          <div style={{ display: 'flex', gap: '32px' }}>
            {socialLinks.map(link => (
              <a 
                key={link.label}
                href={link.href}
                style={{
                  color: 'var(--text-primary)',
                  fontSize: '14px',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  opacity: 0.7,
                  transition: 'opacity 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}
              >
                {link.label}
              </a>
            ))}
          </div>
          
        </div>

      </motion.footer>
    </div>
  );
};
