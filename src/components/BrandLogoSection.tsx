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
          width: '160px',
          height: '160px',
          borderRadius: '32px',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          border: '1px solid rgba(255,255,255,0.05)',
          background: 'var(--bg-secondary)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <img 
          src="/logo.png" 
          alt="Brand Logo" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </motion.div>
    </section>
  );
};
