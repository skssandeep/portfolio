import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CaseStudyCardProps {
  title: string;
  role: string;
  problem: string;
  impact: string;
  imageUrl: string;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ title, role, problem, impact, imageUrl }) => {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: 0 }}>
      <div style={{ 
        height: '320px', 
        background: `url(${imageUrl}) center/cover no-repeat`,
        position: 'relative'
      }}>
      </div>
      
      <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '12px' }}>
          {role}
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '28px', fontWeight: 600, letterSpacing: '-0.02em', margin: 0, lineHeight: 1.1 }}>{title}</h3>
        </div>
        
        <div style={{ marginBottom: '0', flexGrow: 1 }}>
          <p style={{ fontSize: '17px', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.4 }}>
            <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Problem:</span> {problem}
          </p>
          <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
            <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Impact:</span> {impact}
          </p>
        </div>
        
        <div style={{ marginTop: '40px' }}>
          <a href="#" className="btn-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            Read Case Study <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};
