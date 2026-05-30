import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const FooterCreative = () => {
  return (
    <footer style={{ 
      position: 'relative', 
      backgroundColor: '#050505',
      color: 'var(--text-primary)',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      paddingBottom: '40px'
    }}>
      {/* Infinite Marquee Top Border */}
      <div style={{ 
        width: '100%', 
        overflow: 'hidden', 
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        padding: '24px 0',
        display: 'flex',
        whiteSpace: 'nowrap',
        backgroundColor: 'var(--accent-color)',
        color: '#000'
      }}>
        <div style={{ 
          display: 'inline-block', 
          fontFamily: "'Dune Rise', var(--font-system)", 
          fontSize: '24px', 
          letterSpacing: '2px',
          animation: 'scroll-left 20s linear infinite'
        }}>
          LET'S BUILD SOMETHING EXTRAORDINARY • LET'S BUILD SOMETHING EXTRAORDINARY • LET'S BUILD SOMETHING EXTRAORDINARY • LET'S BUILD SOMETHING EXTRAORDINARY • 
        </div>
      </div>

      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .creative-link {
            transition: all 0.3s ease;
            position: relative;
            display: inline-block;
          }
          .creative-link::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 1px;
            bottom: 0;
            left: 0;
            background-color: currentColor;
            transform: scaleX(0);
            transform-origin: bottom right;
            transition: transform 0.3s ease-out;
          }
          .creative-link:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }
          .creative-link:hover {
            color: var(--accent-color) !important;
          }
        `}
      </style>

      <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: '100px', paddingBottom: '60px' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          
          {/* Top Half: Huge Contact Callout */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <span style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '14px' }}>
              Have a project in mind?
            </span>
            <a href="mailto:hello@sandstormify.com" className="creative-link" style={{ 
              fontSize: 'clamp(3rem, 6vw, 7rem)', 
              fontWeight: 700, 
              color: 'var(--text-primary)', 
              textDecoration: 'none',
              lineHeight: 1,
              letterSpacing: '-2px',
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              width: 'fit-content'
            }}>
              Let's Talk <ArrowRight size={48} />
            </a>
          </div>

          {/* Bottom Half: Split Grid for Nav and Details */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '64px' }}>
            
            {/* Left: Navigation */}
            <div style={{ display: 'flex', gap: '80px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <span style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px', marginBottom: '8px' }}>Menu</span>
                <Link to="/#how-it-works" className="creative-link" style={{ fontSize: '18px', color: 'var(--text-primary)', textDecoration: 'none' }}>How it works</Link>
                <Link to="/#work" className="creative-link" style={{ fontSize: '18px', color: 'var(--text-primary)', textDecoration: 'none' }}>Projects</Link>
                <Link to="/#services" className="creative-link" style={{ fontSize: '18px', color: 'var(--text-primary)', textDecoration: 'none' }}>Services</Link>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <span style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px', marginBottom: '8px' }}>Socials</span>
                <a href="#" className="creative-link" style={{ fontSize: '18px', color: 'var(--text-primary)', textDecoration: 'none' }}>X (Twitter)</a>
                <a href="#" className="creative-link" style={{ fontSize: '18px', color: 'var(--text-primary)', textDecoration: 'none' }}>LinkedIn</a>
                <a href="https://www.upwork.com/freelancers/~01b0aab6d05f52f81e" className="creative-link" style={{ fontSize: '18px', color: 'var(--text-primary)', textDecoration: 'none' }}>Upwork</a>
              </div>
            </div>

            {/* Right: Brand and Copyright */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-end', gap: '24px', textAlign: 'right' }}>
              <div style={{ fontFamily: "'Dune Rise', var(--font-system)", fontSize: '24px', letterSpacing: '4px' }}>
                SANDST<span style={{ color: 'var(--accent-color)' }}>o</span>RMIFY
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px', maxWidth: '300px', lineHeight: 1.6 }}>
                A premium UI/UX design studio focused on process over polish. Building interfaces that convert.
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '12px', marginTop: '16px' }}>
                &copy; {new Date().getFullYear()} Sandstormify. All rights reserved.
              </div>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}
