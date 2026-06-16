import React from 'react';
import { motion } from 'framer-motion';

const GRADIENTS = [
  { 
    name: '1. The Core Blend (80/20)', 
    gradient: 'linear-gradient(135deg, #FF0033 80%, #4A00E0 100%)', 
    desc: 'Dominant Red to Purple Edge',
    reasoning: 'Keeps the red massive (80%). The purple acts merely as a drop-shadow or edge highlight, providing just enough coolness to remove the "error" association while keeping the brand fiercely red.'
  },
  { 
    name: '2. The 50/50 Split', 
    gradient: 'linear-gradient(135deg, #FF0033 50%, #4A00E0 100%)', 
    desc: 'Balanced Red and Deep Purple',
    reasoning: 'A perfectly balanced transition. It feels highly technological and modern. The prominent purple adds a strong sense of premium intelligence and creative software.'
  },
  { 
    name: '3. The Deep Fade (90/10)', 
    gradient: 'linear-gradient(135deg, #FF0033 90%, #2b00ff 100%)', 
    desc: 'Maximum Red to Electric Violet',
    reasoning: 'The most conservative approach. 90% solid red, terminating in a sharp electric violet. It retains almost the entirety of the original brand color but gives the logo a glowing, digital finish.'
  },
  { 
    name: '4. The Soft Transition', 
    gradient: 'linear-gradient(135deg, #FF0033 60%, #8A2BE2 100%)', 
    desc: 'Red to Vibrant Blue-Violet',
    reasoning: 'Instead of fading to a dark indigo, this fades into a brighter, softer blue-violet. It feels more approachable, energetic, and consumer-friendly while maintaining a premium SaaS look.'
  },
  { 
    name: '5. The Crimson Core', 
    gradient: 'linear-gradient(135deg, #D40000 70%, #30009C 100%)', 
    desc: 'Rich Dark Red to Dark Indigo',
    reasoning: 'By darkening both the red and the purple, the gradient becomes incredibly rich and luxurious. It feels like an executive, enterprise-level product. Sophisticated and grounded.'
  },
  { 
    name: '6. The Velvet Edge', 
    gradient: 'linear-gradient(135deg, #FF1A40 75%, #5900B3 100%)', 
    desc: 'Pinkish-Red to Royal Purple',
    reasoning: 'Introducing a slight pink/magenta undertone to the red before fading to royal purple creates a "velvet" texture. It is highly aesthetic, appealing to design-centric brands and creative agencies.'
  },
  { 
    name: '7. The Neon Underglow', 
    gradient: 'linear-gradient(135deg, #FF0022 85%, #7B00FF 100%)', 
    desc: 'High Saturation Red to Neon Purple',
    reasoning: 'Using the most highly saturated hex codes available creates a glowing, backlit "neon" effect. It demands attention and screams cutting-edge technology and rapid innovation.'
  },
  { 
    name: '8. The Executive Blend', 
    gradient: 'linear-gradient(135deg, #E60000 65%, #1A0066 100%)', 
    desc: 'Muted Crimson to Near-Black Purple',
    reasoning: 'A highly serious, corporate gradient. The purple is so dark it almost reads as a sleek shadow. It completely neutralizes any "alert" panic from the red, making it feel highly secure and robust.'
  },
  { 
    name: '9. The Complex Wash', 
    gradient: 'linear-gradient(135deg, #FF0033 40%, #7000CC 80%, #4A00E0 100%)', 
    desc: '3-Stop Red to Violet to Indigo',
    reasoning: 'Introducing a middle color stop creates a significantly smoother wash of color. It feels less like a simple CSS gradient and more like a carefully rendered 3D lighting environment.'
  },
  { 
    name: '10. The Horizontal Strike', 
    gradient: 'linear-gradient(90deg, #FF0033 75%, #4A00E0 100%)', 
    desc: 'Left-to-Right Red to Purple',
    reasoning: 'Changing the angle from diagonal to purely horizontal aligns the color transition perfectly with the natural left-to-right reading pattern. The red catches the eye first, and the purple provides a calm landing spot.'
  }
];

export const BrandLogos = () => {
  return (
    <div style={{ paddingTop: '140px', paddingBottom: '100px', minHeight: '100vh', backgroundColor: '#020205' }} className="container">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 600, color: 'white', marginBottom: '24px', lineHeight: 1.1 }}>
          Sandstormify Brand Gradients
        </h1>
        <p style={{ fontSize: '18px', color: '#a3a3a3', lineHeight: 1.6, marginBottom: '64px' }}>
          Pure red is a powerful brand color, but in UI/UX psychology, it is universally associated with <strong>errors, destructive actions, and alerts</strong>. To retain Sandstormify's aggressive, bold red identity without triggering user anxiety, we introduce subtle secondary colors into the gradient. By keeping the red proportion massive (75-85%), we preserve the brand's core identity while entirely shifting the psychological perception.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
          {GRADIENTS.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '24px',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                gap: '32px'
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ flex: 1, minWidth: '300px' }}>
                  <h2 style={{ fontSize: '24px', color: 'white', fontWeight: 600, marginBottom: '8px' }}>{item.name}</h2>
                  <div style={{ fontSize: '14px', color: '#888', letterSpacing: '0', textTransform: 'uppercase', marginBottom: '20px' }}>{item.desc}</div>
                  <p style={{ fontSize: '16px', color: '#d4d4d4', lineHeight: 1.6, margin: 0 }}>
                    {item.reasoning}
                  </p>
                </div>
                
                <div style={{ 
                  fontFamily: "'Dune Rise', var(--font-system)", 
                  fontSize: 'clamp(28px, 4vw, 40px)', 
                  letterSpacing: '4px', 
                  color: 'var(--text-primary)', 
                  display: 'flex', 
                  alignItems: 'center',
                  background: '#0a0a0c',
                  padding: '32px 48px',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  userSelect: 'none'
                }}>
                  SANDST<span style={{ 
                    background: item.gradient, 
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                    display: 'inline-block', 
                    transform: 'scale(1.15)', 
                    margin: '0 4px',
                    filter: 'drop-shadow(0px 4px 12px rgba(255, 0, 122, 0.2))'
                  }}>o</span>RMIFY
                </div>
              </div>
              
              <div style={{ width: '100%', height: '12px', borderRadius: '100px', background: item.gradient, opacity: 0.8 }} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
