import React from 'react';
import { motion } from 'framer-motion';

export const LiquidButton = ({ children, size, className, style, ...props }: any) => {
  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full ${size === 'lg' ? 'px-8 py-4 text-lg' : 'px-6 py-3'} ${className || ''}`}
      style={{ ...style, position: 'relative' }}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};
