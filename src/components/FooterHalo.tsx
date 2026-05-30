import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export const FooterHalo = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      
      // Calculate mouse position as a percentage of the footer's dimensions
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      setMousePos({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', () => setIsHovering(true));
      container.addEventListener('mouseleave', () => setIsHovering(false));
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', () => setIsHovering(true));
        container.removeEventListener('mouseleave', () => setIsHovering(false));
      }
    };
  }, []);

  return (
    <footer 
      ref={containerRef}
      style={{ 
        position: 'relative', 
        height: '80vh',
        minHeight: '600px',
        backgroundColor: '#000000',
        color: 'var(--text-primary)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderTop: '1px solid rgba(255,255,255,0.05)'
      }}
    >
      {/* Dynamic Halo Background */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `radial-gradient(circle at ${isHovering ? mousePos.x : 50}% ${isHovering ? mousePos.y : 50}%, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.05) 20%, transparent 50%)`,
          transition: 'background 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          zIndex: 1,
          pointerEvents: 'none'
        }} 
      />

      {/* Grid overlay to give it a tech/architectural feel */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        zIndex: 2,
        pointerEvents: 'none',
        maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
      }} />

      {/* Top Corner Links */}
      <div style={{ position: 'relative', zIndex: 10, padding: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Based in</span>
          <span style={{ fontSize: '14px' }}>Global / Remote</span>
        </div>
        
        <div style={{ display: 'flex', gap: '40px', textAlign: 'right' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Social</span>
            <a href="#" className="btn-link" style={{ fontSize: '14px', color: 'var(--text-primary)' }}>X (Twitter)</a>
            <a href="#" className="btn-link" style={{ fontSize: '14px', color: 'var(--text-primary)' }}>LinkedIn</a>
            <a href="https://www.upwork.com/freelancers/~01b0aab6d05f52f81e" className="btn-link" style={{ fontSize: '14px', color: 'var(--text-primary)' }}>Upwork</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Site</span>
            <Link to="/#work" className="btn-link" style={{ fontSize: '14px', color: 'var(--text-primary)' }}>Projects</Link>
            <Link to="/brand-identity" className="btn-link" style={{ fontSize: '14px', color: 'var(--text-primary)' }}>Brand</Link>
            <Link to="/drafts" className="btn-link" style={{ fontSize: '14px', color: 'var(--text-primary)' }}>Drafts</Link>
          </div>
        </div>
      </div>

      {/* Center Massive CTA */}
      <div style={{ 
        position: 'relative', 
        zIndex: 10, 
        flex: 1, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '24px'
      }}>
        <a href="mailto:hello@sandstormify.com" style={{ 
          display: 'flex', 
          alignItems: 'center',
          gap: '16px',
          textDecoration: 'none',
          color: 'var(--text-primary)',
          cursor: 'pointer'
        }} className="hover-scale">
          <div style={{ 
            width: '80px', 
            height: '80px', 
            borderRadius: '50%', 
            border: '1px solid rgba(255,255,255,0.2)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(10px)'
          }}>
            <ArrowUpRight size={32} />
          </div>
          <h2 style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 500, letterSpacing: '-2px', margin: 0 }}>
            Start a project
          </h2>
        </a>
      </div>

      {/* Bottom Footer Bar */}
      <div style={{ 
        position: 'relative', 
        zIndex: 10, 
        padding: '40px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'flex-end' 
      }}>
        <div style={{ fontFamily: "'Dune Rise', var(--font-system)", fontSize: '18px', letterSpacing: '2px' }}>
          SANDST<span style={{ color: 'var(--accent-color)' }}>o</span>RMIFY
        </div>
        
        <div style={{ color: 'var(--text-secondary)', fontSize: '13px', display: 'flex', gap: '24px' }}>
          <span>&copy; {new Date().getFullYear()}</span>
          <a href="#" className="btn-link" style={{ color: 'inherit' }}>Privacy</a>
          <a href="#" className="btn-link" style={{ color: 'inherit' }}>Terms</a>
        </div>
      </div>
    </footer>
  );
}
