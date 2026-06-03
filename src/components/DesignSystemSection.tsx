import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, AlertTriangle, AlertCircle, Info, Zap } from 'lucide-react';

export const DesignSystemSection = () => {
  const colors = [
    {
      name: 'Brand Red',
      role: 'Identity & Action',
      hex: '#f95738',
      var: '--semantic-brand',
      icon: <Zap size={18} color="#f95738" />,
      desc: 'The hero. Used for primary CTAs, active states, and key brand moments. Warm and energetic.',
      bg: 'rgba(249, 87, 56, 0.05)',
      border: 'rgba(249, 87, 56, 0.2)'
    },
    {
      name: 'Success Emerald',
      role: 'Resolution & Validation',
      hex: '#10b981',
      var: '--semantic-success',
      icon: <CheckCircle2 size={18} color="#10b981" />,
      desc: 'The "After". Used for successful metrics, solved problems, and positive user quotes.',
      bg: 'rgba(16, 185, 129, 0.05)',
      border: 'rgba(16, 185, 129, 0.2)'
    },
    {
      name: 'Warning Amber',
      role: 'Friction & Constraints',
      hex: '#f5a623',
      var: '--semantic-warning',
      icon: <AlertTriangle size={18} color="#f5a623" />,
      desc: 'Sophisticated caution. Used for technical limitations, complex requirements, and constraints.',
      bg: 'rgba(245, 166, 35, 0.05)',
      border: 'rgba(245, 166, 35, 0.2)'
    },
    {
      name: 'Error Crimson',
      role: 'The Problem',
      hex: '#e11d48',
      var: '--semantic-error',
      icon: <AlertCircle size={18} color="#e11d48" />,
      desc: 'The villain. A cooler, deeper red to separate "system failure" from the warm brand energy.',
      bg: 'rgba(225, 29, 72, 0.05)',
      border: 'rgba(225, 29, 72, 0.2)'
    },
    {
      name: 'Info Blue',
      role: 'Neutral Guide',
      hex: '#3b82f6',
      var: '--semantic-info',
      icon: <Info size={18} color="#3b82f6" />,
      desc: 'Cool and receding. Used for neutral data points, secondary links, and contextual help.',
      bg: 'rgba(59, 130, 246, 0.05)',
      border: 'rgba(59, 130, 246, 0.2)'
    }
  ];

  return (
    <section id="design-system" style={{ padding: '128px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              color: '#a3a3a3', 
              background: 'rgba(255,255,255,0.03)', 
              padding: '8px 16px', 
              borderRadius: '100px', 
              fontSize: '13px', 
              fontWeight: 600, 
              letterSpacing: '2px', 
              textTransform: 'uppercase', 
              marginBottom: '24px',
              border: '1px solid rgba(255,255,255,0.05)'
            }}
          >
            Design System Foundation
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ 
              fontSize: 'clamp(2rem, 4vw, 3.5rem)', 
              fontWeight: 700, 
              color: '#fff', 
              lineHeight: 1.1, 
              letterSpacing: '-0.03em',
              marginBottom: '24px'
            }}
          >
            The Logic of Color
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ 
              fontSize: '18px', 
              color: '#888', 
              maxWidth: '680px', 
              margin: '0 auto',
              lineHeight: 1.6 
            }}
          >
            In a premium dark-mode aesthetic, colors pop intensely. 90% of the UI remains black, white, and grey. We use semantic color exclusively to guide the user's emotional state.
          </motion.p>
        </div>

        {/* Color Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {colors.map((color, i) => (
            <motion.div
              key={color.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: '#0a0a0a',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '24px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
              }}
            >
              {/* Subtle top glow */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: '20%',
                right: '20%',
                height: '1px',
                background: `linear-gradient(90deg, transparent, ${color.hex}, transparent)`,
                opacity: 0.5
              }} />

              {/* Large Color Swatch */}
              <div style={{
                width: '100%',
                aspectRatio: '1',
                borderRadius: '16px',
                background: color.bg,
                border: `1px solid ${color.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                position: 'relative'
              }}>
                {/* Core color dot */}
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: color.hex,
                  boxShadow: `0 0 20px ${color.hex}40`
                }} />
                
                {/* Icon positioned top right */}
                <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
                  {color.icon}
                </div>
              </div>

              {/* Typography */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#fff', margin: '0 0 4px 0', letterSpacing: '-0.02em' }}>
                  {color.name}
                </h3>
                <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: color.hex, marginBottom: '16px', letterSpacing: '0.5px' }}>
                  {color.hex.toUpperCase()}
                </div>
                
                <p style={{ fontSize: '14px', color: '#777', lineHeight: 1.6, margin: '0 0 24px 0', flex: 1 }}>
                  {color.desc}
                </p>

                <div style={{
                  display: 'inline-flex',
                  alignSelf: 'flex-start',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#a3a3a3',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  background: 'rgba(255,255,255,0.03)',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}>
                  {color.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
