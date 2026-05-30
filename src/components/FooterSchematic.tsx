import React from "react";
import { Link } from "react-router-dom";
import { Terminal, Crosshair, Cpu, MapPin } from "lucide-react";

export const FooterSchematic = () => {
  return (
    <footer style={{ 
      position: 'relative', 
      backgroundColor: '#000000',
      color: '#a3a3a3',
      fontFamily: '"SF Mono", "Fira Code", monospace', // Monospace technical font
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      overflow: 'hidden'
    }}>
      {/* Blueprint Grid Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '30px 30px',
        backgroundPosition: 'center center',
        zIndex: 1,
        pointerEvents: 'none'
      }} />

      {/* Crosshairs at corners */}
      <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 2, color: 'rgba(255,255,255,0.2)' }}><Crosshair size={20} /></div>
      <div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 2, color: 'rgba(255,255,255,0.2)' }}><Crosshair size={20} /></div>
      <div style={{ position: 'absolute', bottom: '20px', left: '20px', zIndex: 2, color: 'rgba(255,255,255,0.2)' }}><Crosshair size={20} /></div>
      <div style={{ position: 'absolute', bottom: '20px', right: '20px', zIndex: 2, color: 'rgba(255,255,255,0.2)' }}><Crosshair size={20} /></div>

      <div style={{ position: 'relative', zIndex: 10, padding: '80px 40px 40px 40px', display: 'flex', flexDirection: 'column', gap: '80px' }}>
        
        {/* Top Info Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '24px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>
          <div style={{ display: 'flex', gap: '40px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Terminal size={14} /> SYSTEM.STATUS: ONLINE</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Cpu size={14} /> CAPACITY: 94.2%</span>
          </div>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-color)' }}><MapPin size={14} /> LOC: 37.7749° N, 122.4194° W</span>
        </div>

        {/* Main Content Area */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '64px' }}>
          
          {/* Identity Block */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ borderLeft: '2px solid var(--accent-color)', paddingLeft: '16px' }}>
              <h3 style={{ color: 'white', fontSize: '24px', letterSpacing: '4px', margin: '0 0 8px 0', fontWeight: 'normal' }}>SANDSTORMIFY</h3>
              <p style={{ margin: 0, fontSize: '12px', lineHeight: 1.6 }}>[ID: 0x8F9B2A] :: UI/UX Engineering Node. Precision-focused interface design and conversion optimization architecture.</p>
            </div>
            
            <div style={{ padding: '16px', backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', fontSize: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}><span>INIT_SEQ</span><span style={{ color: 'var(--accent-color)' }}>[PASS]</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}><span>USER_EXP</span><span style={{ color: 'var(--accent-color)' }}>[OPTIMIZED]</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>CONV_RT</span><span style={{ color: 'var(--accent-color)' }}>[MAX]</span></div>
            </div>
          </div>

          {/* Data Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <h4 style={{ color: 'white', fontSize: '14px', letterSpacing: '2px', borderBottom: '1px dashed rgba(255,255,255,0.2)', paddingBottom: '8px', marginBottom: '16px', fontWeight: 'normal' }}>// DIRECTORIES</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
                <li><Link to="/#work" style={{ color: 'inherit', textDecoration: 'none' }} className="hover:text-white transition-colors">./projects_compiled</Link></li>
                <li><Link to="/brand-identity" style={{ color: 'inherit', textDecoration: 'none' }} className="hover:text-white transition-colors">./brand_system.sys</Link></li>
                <li><Link to="/drafts" style={{ color: 'inherit', textDecoration: 'none' }} className="hover:text-white transition-colors">./draft_archives.zip</Link></li>
              </ul>
            </div>
          </div>

          {/* Comm Link */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <h4 style={{ color: 'white', fontSize: '14px', letterSpacing: '2px', borderBottom: '1px dashed rgba(255,255,255,0.2)', paddingBottom: '8px', marginBottom: '16px', fontWeight: 'normal' }}>// COMM_LINKS</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
                <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }} className="hover:text-white transition-colors">&gt; PING TWITTER</a></li>
                <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }} className="hover:text-white transition-colors">&gt; PING LINKEDIN</a></li>
                <li><a href="mailto:hello@sandstormify.com" style={{ color: 'var(--accent-color)', textDecoration: 'none', marginTop: '16px', display: 'inline-block' }} className="hover:text-white transition-colors">EXECUTE: mailto:hello@sandstormify.com_</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px', fontSize: '11px', letterSpacing: '1px' }}>
          <div>V 2.0.4 || BUILD: {new Date().getFullYear()}</div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <span>ENCRYPTION: ENABLED</span>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>LEGAL_TERMS</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
