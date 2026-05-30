import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide scrollbar while preloader is active
    document.body.style.overflow = 'hidden';
    
    // The Nolan Hold: Tense, dead silence for exactly 3.5 seconds.
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = '';
    }, 3500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1, ease: 'linear' }} // 0.1s smash cut
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#050505', // Supreme confidence pure black
            zIndex: 99999, // Ensure it covers absolutely everything
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
          }}
        >
          <motion.div
            initial={{ scale: 0.95, letterSpacing: '2px', opacity: 0, filter: 'blur(10px)' }}
            animate={{ scale: 1.25, letterSpacing: '12px', opacity: 1, filter: 'blur(0px)' }}
            transition={{
              scale: { duration: 3.4, ease: 'easeOut' }, // Butter smooth curve
              letterSpacing: { duration: 3.4, ease: 'easeOut' }, // Fixes jerkiness on layout animations
              opacity: { duration: 1.2, ease: 'easeOut' },
              filter: { duration: 1.2, ease: 'easeOut' }
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              fontFamily: "'Dune Rise', var(--font-system)",
              fontSize: 'clamp(32px, 6vw, 64px)',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              willChange: 'transform, filter, letter-spacing' // Hint browser for GPU acceleration
            }}
          >
            <span>S</span>
            <span>A</span>
            <span>N</span>
            <span>D</span>
            <span>S</span>
            <span>T</span>
            <span style={{ 
              color: 'var(--accent-color)', 
              display: 'inline-block', 
              transform: 'scale(1.15)', 
              margin: '0 2px',
              textTransform: 'lowercase',
              textShadow: '0 0 20px var(--accent-color)'
            }}>
              o
            </span>
            <span>R</span>
            <span>M</span>
            <span>I</span>
            <span>F</span>
            <span>Y</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
