import React from "react";

export const FooterSleek = () => {
  const socialLinks = [
    { label: "X", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Upwork", href: "https://www.upwork.com/freelancers/~01b0aab6d05f52f81e" },
    { label: "Instagram", href: "#" }
  ];

  return (
    <footer style={{ 
      backgroundColor: '#0a0a0a',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      padding: '40px 60px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '24px'
    }}>
      
      {/* Brand */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <a href="https://sandstormify.com" style={{ color: 'var(--text-primary)', fontSize: '14px', fontFamily: "'Dune Rise', var(--font-system)", fontWeight: 'normal', letterSpacing: '1px', textDecoration: 'none' }}>
          SANDST<span style={{ color: 'var(--accent-color)', transform: 'scale(1.15)', display: 'inline-block' }}>o</span>RMIFY
        </a>
        <span style={{ color: 'var(--text-secondary)', fontSize: '12px' }}>
          &copy; {new Date().getFullYear()} All rights reserved.
        </span>
      </div>

      {/* Social Links */}
      <div style={{ display: 'flex', gap: '32px' }}>
        {socialLinks.map(link => (
          <a 
            key={link.label}
            href={link.href}
            style={{
              color: 'var(--text-secondary)',
              fontSize: '13px',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            {link.label}
          </a>
        ))}
      </div>

    </footer>
  );
};
