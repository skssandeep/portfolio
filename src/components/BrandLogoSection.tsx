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
          fontSize: '48px', 
          letterSpacing: '8px', 
          color: 'var(--text-primary)', 
          display: 'flex', 
          alignItems: 'center',
          userSelect: 'none'
        }}>
          SANDST<span style={{ color: 'var(--accent-color)', display: 'inline-block', transform: 'scale(1.15)', margin: '0 4px' }}>o</span>RMIFY
        </div>
      </motion.div>
    </section>
  );
};
