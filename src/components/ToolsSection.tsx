import React from 'react';
import { SiFigma, SiOpenai, SiClaude, SiGooglegemini, SiFramer } from 'react-icons/si';
import { Rocket, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import geminiLogo from '../assets/gemini.svg';
import antigravityLogo from '../assets/antigravity.png';
import antigravityIdeLogo from '../assets/antigravity-ide.png';
import uxPilotLogo from '../assets/uxpilot.png';

const tools = [
  { name: "Figma", customImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", category: "Product & UI Design", useIcon: false },
  { name: "Framer", icon: SiFramer, category: "Frontend Development", color: "#ffffff", useIcon: true },
  { name: "Claude", icon: SiClaude, category: "Design & Architecture", color: "#D97757", useIcon: true },
  { name: "ChatGPT", icon: SiOpenai, category: "Research & UX Copy", color: "#ffffff", useIcon: true },
  { name: "Gemini", customImage: geminiLogo, category: "Research & Development", useIcon: false },
  { name: "Antigravity", customImage: antigravityLogo, category: "Autonomous Engineering", useIcon: false, scale: 1.45 },
  { name: "Antigravity IDE", customImage: antigravityIdeLogo, category: "Development Environment", useIcon: false, scale: 1.45 }
];

export const ToolsSection = () => {
  return (
    <section className="scroll-reveal" style={{ padding: '120px 0', position: 'relative' }}>
      <div className="container">
        <div style={{ marginBottom: '48px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div 
          style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '8px', marginBottom: '32px', cursor: 'pointer' }}
          whileHover="hover"
          whileTap="tap"
          initial="rest"
        >
          {/* Interactive Boolean Operation Icon */}
          <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <defs>
               <filter id="boolGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            
            {/* Left Circle (Purple) */}
            <motion.circle cx="16" cy="12" r="8" stroke="#7928CA" strokeWidth="1.5" fill="rgba(121, 40, 202, 0.15)" filter="url(#boolGlow)"
               variants={{ rest: { x: 0 }, hover: { x: -6 }, tap: { x: 4 } }} transition={{ type: "spring", stiffness: 300, damping: 15 }} />
               
            {/* Right Circle (Red) */}
            <motion.circle cx="24" cy="12" r="8" stroke="var(--accent-color)" strokeWidth="1.5" fill="rgba(229, 9, 20, 0.15)"
               variants={{ rest: { x: 0 }, hover: { x: 6 }, tap: { x: -4 } }} transition={{ type: "spring", stiffness: 300, damping: 15 }} />
          </svg>
          <span style={{ color: 'rgba(255, 255, 255, 0.55)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px', fontFamily: "'Syne', sans-serif" }}>
            Tech Stack
          </span>
        </motion.div>
        <h2 style={{ fontSize: 'clamp(40px, 5vw, 64px)', marginTop: '0', marginBottom: '16px', fontWeight: 500, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1.15 }}>
          The Arsenal
        </h2>
        <p className="text-body-large" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: 0, lineHeight: 1.6 }}>
          The exact tools and AI agents I use to design, build, and scale digital products.
        </p>
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '16px',
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px 24px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '16px',
              }}
            >
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.05)',
                overflow: 'hidden'
              }}>
                {tool.useIcon && Icon ? (
                  <Icon 
                    size={20} 
                    style={{ 
                      color: tool.color?.startsWith('url') ? undefined : tool.color,
                      transition: 'all 0.3s ease' 
                    }} 
                    fill={tool.color?.startsWith('url') ? tool.color : "currentColor"}
                  />
                ) : (
                  <img 
                    src={tool.customImage} 
                    alt={`${tool.name} logo`} 
                    style={{ 
                      width: '20px', 
                      height: '20px', 
                      objectFit: 'contain',
                      transform: tool.scale ? `scale(${tool.scale})` : 'none'
                    }} 
                  />
                )}
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ 
                  fontFamily: "'Syne', sans-serif", 
                  fontSize: '10px', 
                  color: 'var(--text-secondary)', 
                  letterSpacing: '1px', 
                  textTransform: 'uppercase',
                }}>
                  {tool.category}
                </div>
                <div style={{ 
                  fontFamily: "'Dune Rise', var(--font-system)", 
                  fontSize: '14px', 
                  color: 'var(--text-primary)', 
                  letterSpacing: '1px',
                  textTransform: 'uppercase' 
                }}>
                  {tool.name}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      </div>
    </section>
  );
};
