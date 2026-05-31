import React from 'react';
import { SiFigma, SiOpenai, SiClaude, SiGooglegemini, SiFramer } from 'react-icons/si';
import { Rocket, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import geminiLogo from '../assets/gemini.svg';
import antigravityLogo from '../assets/antigravity.png';
import antigravityIdeLogo from '../assets/antigravity-ide.png';
import uxPilotLogo from '../assets/uxpilot.png';

const tools = [
  { name: "Figma", customImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", category: "UI/UX Design", useIcon: false },
  { name: "Framer", icon: SiFramer, category: "Web Engineering", color: "#ffffff", useIcon: true },
  { name: "Claude", icon: SiClaude, category: "AI Architecture", color: "#D97757", useIcon: true },
  { name: "ChatGPT", icon: SiOpenai, category: "Logic & Code", color: "#ffffff", useIcon: true },
  { name: "Gemini", customImage: geminiLogo, category: "Data Analysis", useIcon: false },
  { name: "UX Pilot", customImage: uxPilotLogo, category: "UX Research", useIcon: false },
  { name: "Antigravity", customImage: antigravityLogo, category: "Agentic Automation", useIcon: false, scale: 1.45 },
  { name: "Antigravity IDE", customImage: antigravityIdeLogo, category: "Development Environment", useIcon: false, scale: 1.45 }
];

export const ToolsSection = () => {
  return (
    <section className="scroll-reveal" style={{ padding: '120px 0', position: 'relative' }}>
      <div className="container">
        <div style={{ marginBottom: '64px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span style={{ color: 'var(--accent-color)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '14px', fontFamily: "'Syne', sans-serif" }}>
          The Arsenal
        </span>
        <h2 style={{ fontSize: 'clamp(40px, 5vw, 64px)', marginTop: '24px', marginBottom: '16px', fontWeight: 500, letterSpacing: '-0.03em', color: '#fff' }}>
          My Armour
        </h2>
        <p className="text-body" style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}>
          I only use the most cutting-edge, high-performance tools to architect and engineer digital experiences.
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
