import React from "react";
import { Link } from "react-router-dom";
import { LiquidButton } from "./ui/liquid-glass-button";
import { ArrowUpRight, Mail } from "lucide-react";

export const FooterUnique = () => {
  return (
    <div style={{ padding: '32px' }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'auto auto',
        gap: '24px',
      }}>
        
        {/* Main CTA Tile (Spans 3 columns) */}
        <div style={{
          gridColumn: 'span 3',
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          borderRadius: '32px',
          padding: '64px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle glow effect inside the tile */}
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.15) 0%, transparent 70%)',
            transform: 'translate(30%, -30%)'
          }} />

          <div>
            <span style={{ fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent-color)', fontWeight: 600 }}>Let's work together</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', fontWeight: 600, lineHeight: 1.1, marginTop: '16px', marginBottom: '40px', maxWidth: '600px' }}>
              Have an idea? <br />
              <span style={{ color: 'var(--text-secondary)' }}>Let's build it.</span>
            </h2>
          </div>
          
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <LiquidButton size="lg" style={{ padding: '0 40px', fontSize: '16px' }} onClick={() => window.open('https://cal.com/sandeepks/15min', '_blank')}>
              Book a Call <ArrowUpRight size={20} style={{ marginLeft: '8px' }} />
            </LiquidButton>
            <a href="mailto:hello@sandstormify.com" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '50%', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', color: 'var(--text-primary)', transition: 'all 0.3s ease' }} className="hover-scale">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Socials / Links Tile (Spans 1 column) */}
        <div style={{
          gridColumn: 'span 1',
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          borderRadius: '32px',
          padding: '40px 32px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 600 }}>Explore</span>
            <Link to="/#how-it-works" className="btn-link" style={{ fontSize: '18px' }}>How it works</Link>
            <Link to="/#work" className="btn-link" style={{ fontSize: '18px' }}>Projects</Link>
            <Link to="/#services" className="btn-link" style={{ fontSize: '18px' }}>Services</Link>
            <Link to="/brand-identity" className="btn-link" style={{ fontSize: '18px' }}>Brand Identity</Link>
          </div>

          <div style={{ display: 'flex', gap: '16px', marginTop: '40px' }}>
            <a href="#" className="btn-link" style={{ color: 'var(--text-secondary)' }}>Twitter</a>
            <a href="#" className="btn-link" style={{ color: 'var(--text-secondary)' }}>LinkedIn</a>
          </div>
        </div>

        {/* Bottom Bar Tile (Spans 4 columns) */}
        <div style={{
          gridColumn: 'span 4',
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          borderRadius: '100px', // Pill shape
          padding: '24px 48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontFamily: "'Dune Rise', var(--font-system)", fontSize: '18px', letterSpacing: '1px', paddingTop: '4px' }}>
              SANDST<span style={{ color: 'var(--accent-color)' }}>o</span>RMIFY
            </span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '14px', borderLeft: '1px solid var(--glass-border)', paddingLeft: '12px' }}>
              &copy; {new Date().getFullYear()} All rights reserved.
            </span>
          </div>

          <div style={{ display: 'flex', gap: '24px', fontSize: '14px', color: 'var(--text-secondary)' }}>
            <a href="#" className="btn-link">Privacy Policy</a>
            <a href="#" className="btn-link">Terms of Service</a>
          </div>
        </div>

      </div>
    </div>
  );
}
