import React from 'react';

interface AISkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const AISkillCard: React.FC<AISkillCardProps> = ({ icon, title, description }) => {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', textAlign: 'center' }}>
      <div style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>
        {icon}
      </div>
      <h3 style={{ fontSize: '24px', fontWeight: 600, letterSpacing: '-0.02em', margin: 0 }}>{title}</h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: '17px', lineHeight: 1.4, margin: 0 }}>
        {description}
      </p>
    </div>
  );
};
