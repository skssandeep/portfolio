import React from "react";
import { Link } from "react-router-dom";

export const FooterModern = () => {
  return (
    <footer style={{ 
      position: 'relative', 
      backgroundColor: '#000000',
      color: 'var(--text-primary)',
      paddingTop: '80px',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.05)'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 10, paddingBottom: '40px' }}>
        
        {/* Top Section - Minimalist Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '64px',
          marginBottom: '80px'
        }}>
          
          {/* Column 1: Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Status</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-color)', boxShadow: '0 0 10px var(--accent-color)' }} />
              <span style={{ fontSize: '15px' }}>Available for new projects</span>
            </div>
            <a href="mailto:hello@sandstormify.com" className="btn-link" style={{ fontSize: '20px', fontWeight: 500, letterSpacing: '-0.5px' }}>
              hello@sandstormify.com
            </a>
          </div>

          {/* Column 2: Navigation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Sitemap</span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li><Link to="/#how-it-works" className="btn-link" style={{ fontSize: '15px' }}>How it works</Link></li>
              <li><Link to="/#work" className="btn-link" style={{ fontSize: '15px' }}>Projects</Link></li>
              <li><Link to="/#services" className="btn-link" style={{ fontSize: '15px' }}>Services</Link></li>
              <li><Link to="/#faq" className="btn-link" style={{ fontSize: '15px' }}>FAQs</Link></li>
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Connect</span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li><a href="#" className="btn-link" style={{ fontSize: '15px' }}>X (Twitter)</a></li>
              <li><a href="#" className="btn-link" style={{ fontSize: '15px' }}>LinkedIn</a></li>
              <li><a href="https://www.upwork.com/freelancers/~01b0aab6d05f52f81e" className="btn-link" style={{ fontSize: '15px' }}>Upwork</a></li>
            </ul>
          </div>
          
          {/* Column 4: Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Exploration</span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li><Link to="/drafts" className="btn-link" style={{ fontSize: '15px' }}>Drafts</Link></li>
              <li><Link to="/brand-identity" className="btn-link" style={{ fontSize: '15px' }}>Brand Identity</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright & Meta */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '13px', margin: 0 }}>
            &copy; {new Date().getFullYear()} Sandstormify. All rights reserved.
          </p>
          <div style={{ color: 'var(--text-secondary)', fontSize: '13px', display: 'flex', gap: '24px' }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }} className="btn-link">Privacy Policy</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }} className="btn-link">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Massive Brand Name at the very bottom */}
      <div style={{ 
        width: '100%', 
        overflow: 'hidden', 
        display: 'flex', 
        justifyContent: 'center', 
        paddingTop: '40px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        marginTop: '20px'
      }}>
        <h1 style={{ 
          fontFamily: "'Dune Rise', var(--font-system)", 
          fontSize: '18vw', // massive fluid typography
          lineHeight: 0.8,
          margin: 0,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(255,255,255,0.1)',
          whiteSpace: 'nowrap',
          letterSpacing: '-2vw'
        }}>
          SANDSTORMIFY
        </h1>
      </div>
    </footer>
  );
}
