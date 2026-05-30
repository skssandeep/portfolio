import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Globe } from "lucide-react";

export const FooterCurtain = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      // Get current time in a cool format (e.g., "14:05:22 GMT")
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
      });
      setTime(timeString);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    // The wrapper acts as a mask for the fixed child.
    // It takes up physical space in the document (800px tall), 
    // but the clipPath ensures anything outside it is hidden.
    <footer style={{ 
      position: 'relative', 
      height: '100vh',
      minHeight: '600px',
      clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' 
    }}>
      
      {/* The actual footer content is FIXED to the bottom of the screen. */}
      {/* It will be revealed as the parent wrapper scrolls into view. */}
      <div style={{ 
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        minHeight: '600px',
        backgroundColor: '#0a0a0a', // Slightly off-black
        color: 'var(--text-primary)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '64px',
        borderTop: '1px solid rgba(255,255,255,0.05)'
      }}>
        
        {/* Top Header Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
              Local Time
            </span>
            <span style={{ fontFamily: 'monospace', fontSize: '16px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Globe size={16} /> {time}
            </span>
          </div>

          <div style={{ display: 'flex', gap: '64px', textAlign: 'right' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Socials</span>
              <a href="#" className="btn-link" style={{ fontSize: '15px' }}>Twitter</a>
              <a href="#" className="btn-link" style={{ fontSize: '15px' }}>LinkedIn</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Navigation</span>
              <Link to="/#work" className="btn-link" style={{ fontSize: '15px' }}>Projects</Link>
              <Link to="/brand-identity" className="btn-link" style={{ fontSize: '15px' }}>Brand System</Link>
            </div>
          </div>
        </div>

        {/* Massive Center Typography */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, gap: '32px' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '12px', 
            padding: '12px 24px', 
            borderRadius: '100px', 
            backgroundColor: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#22c55e', boxShadow: '0 0 10px #22c55e', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase' }}>Taking on new projects</span>
          </div>

          <a href="mailto:hello@sandstormify.com" style={{
            textDecoration: 'none',
            color: 'var(--text-primary)',
            fontSize: 'clamp(4rem, 8vw, 10rem)',
            fontWeight: 700,
            letterSpacing: '-3px',
            lineHeight: 1,
            transition: 'color 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '24px'
          }} className="hover:text-[var(--accent-color)]">
            Say Hello <ArrowRight size={80} strokeWidth={3} />
          </a>
        </div>

        {/* Bottom Info Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '32px' }}>
          <div style={{ fontFamily: "'Dune Rise', var(--font-system)", fontSize: '24px', letterSpacing: '2px' }}>
            SANDST<span style={{ color: 'var(--accent-color)' }}>o</span>RMIFY
          </div>
          
          <div style={{ color: 'var(--text-secondary)', fontSize: '14px', display: 'flex', gap: '32px' }}>
            <span>&copy; {new Date().getFullYear()} Sandstormify.</span>
            <a href="#" className="btn-link" style={{ color: 'inherit' }}>Privacy Policy</a>
          </div>
        </div>

      </div>

      <style>
        {`
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
          }
          /* Hack for inline hover style */
          a:hover.hover\\:text-\\[var\\(--accent-color\\)\\] {
            color: var(--accent-color) !important;
          }
        `}
      </style>
    </footer>
  );
}


