import React from 'react';
import { motion } from 'framer-motion';

export const BrandLogoSection = () => {
  return (
    <section style={{ 
      padding: '80px 0 0 0', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      width: '100%',
      position: 'relative',
      zIndex: 10
    }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '48px',
        }}
      >
        <div style={{ 
          fontFamily: "'Dune Rise', var(--font-system)", 
          fontWeight: 'normal', 
          fontSize: 'clamp(48px, 8vw, 72px)', 
          letterSpacing: '8px', 
          color: 'var(--text-primary)', 
          display: 'flex', 
          alignItems: 'center',
          userSelect: 'none'
        }}>
          SANDST<span style={{ 
            background: 'linear-gradient(135deg, #7928CA 0%, #FF007A 100%)', 
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block', 
            transform: 'scale(1.15)', 
            margin: '0 4px',
            filter: 'drop-shadow(0px 4px 12px rgba(255, 0, 122, 0.4))'
          }}>o</span>RMIFY
        </div>
      </motion.div>
    </section>
  );
};
