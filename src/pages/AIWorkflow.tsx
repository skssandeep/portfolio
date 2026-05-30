import React, { useEffect } from 'react';
import { Terminal, Clock, Zap, GitPullRequest } from 'lucide-react';

export const AIWorkflow = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: 'var(--bg-color)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        
        {/* Header */}
        <header style={{ marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--accent-color)' }} />
            <span style={{ fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--accent-color)', fontWeight: 600 }}>Workflow Engineering</span>
          </div>
          <h1 className="text-headline" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '32px', lineHeight: 1.1 }}>
            How I treat AI as a compiler for design.
          </h1>
          <p className="text-body-large" style={{ color: 'var(--text-secondary)', fontSize: '20px', lineHeight: 1.6 }}>
            Most designers use AI as a high-end autocomplete. I use it to entirely automate the mechanical tax of UX engineering. Here is the exact system architecture, prompting strategy, and toolchain I use to turn a 4-hour UX audit into a 25-minute automated pipeline.
          </p>
        </header>

        {/* Metrics Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '80px' }}>
          {[
            { icon: <Clock size={24} />, label: "Audit Time", value: "25 mins", old: "4 hrs" },
            { icon: <Zap size={24} />, label: "Component Gen", value: "Automated", old: "Manual" },
            { icon: <GitPullRequest size={24} />, label: "Code Handoff", value: "Zero-loss", old: "Friction" }
          ].map((stat, i) => (
            <div key={i} style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', padding: '32px', borderRadius: '24px' }}>
              <div style={{ color: 'var(--accent-color)', marginBottom: '16px' }}>{stat.icon}</div>
              <div style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '8px' }}>{stat.label}</div>
              <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>{stat.value}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)', textDecoration: 'line-through' }}>Was: {stat.old}</div>
            </div>
          ))}
        </div>

        {/* Section 1: The Context File */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '24px', color: 'var(--text-primary)' }}>1. The CLAUDE.md System Instruction</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: 1.6, marginBottom: '32px' }}>
            The biggest mistake is starting fresh every chat. I maintain a strict `CLAUDE.md` file in the root of my design repos that enforces design system tokens, Tailwind rules, and component hierarchies before I even type a prompt.
          </p>
          <div style={{ backgroundColor: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', overflow: 'hidden' }}>
            <div style={{ padding: '12px 24px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Terminal size={14} color="var(--text-secondary)" />
              <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>CLAUDE.md</span>
            </div>
            <pre style={{ padding: '24px', margin: 0, overflowX: 'auto', fontSize: '14px', lineHeight: 1.5, color: '#e5e7eb' }}>
<code style={{ fontFamily: '"Fira Code", monospace' }}>
{`# Design System Directives
- **Tokens Only:** Never use raw hex codes. Only use var(--accent-color), var(--bg-secondary), etc.
- **Spacing:** Enforce a strict 8px grid. Use gap-4, p-8, m-2.
- **Border Radius:** All cards must use rounded-2xl (16px).
- **Aesthetics:** Bias toward dark mode, low opacity borders (rgba(255,255,255,0.05)), and subtle radial glows for depth.

# Workflow Rules
1. When asked to generate a component, output the React TSX file first.
2. Ensure strict adherence to Radix UI primitive patterns for accessibility.
3. If user intent is ambiguous, immediately halt and ask for clarifying wireframes.`}
</code>
            </pre>
          </div>
        </section>

        {/* Section 2: Figma MCP Plumbing */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '24px', color: 'var(--text-primary)' }}>2. Figma MCP Plumbing</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: 1.6, marginBottom: '32px' }}>
            To bridge the gap between Figma and code, I configured an MCP (Model Context Protocol) server that allows Claude to read Figma REST API outputs directly. When I highlight a frame in Figma, Claude can instantly parse the node tree and suggest structural React components.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=1200" 
            alt="Figma API Integration" 
            style={{ width: '100%', borderRadius: '24px', marginBottom: '24px', border: '1px solid var(--glass-border)' }}
          />
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', fontStyle: 'italic', textAlign: 'center' }}>
            Fig. 1: The terminal output mapping Figma nodes to React ASTs.
          </p>
        </section>

        {/* Section 3: The Before & After Prompt */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '24px', color: 'var(--text-primary)' }}>3. The "Self-Healing" Audit Prompt</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: 1.6, marginBottom: '32px' }}>
            Previously, auditing an application for WCAG accessibility and responsive design scaling took me hours of manual clicking. Now, I feed the DOM structure into this refined prompt to generate a hit-list of exact fixes.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '24px', borderRadius: '16px' }}>
              <h4 style={{ color: 'var(--accent-color)', marginBottom: '16px', fontSize: '14px', letterSpacing: '2px' }}>THE BAD PROMPT</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                "Check this code for accessibility issues and make it responsive."
              </p>
            </div>
            <div style={{ backgroundColor: 'rgba(34, 197, 94, 0.05)', border: '1px solid rgba(34, 197, 94, 0.2)', padding: '24px', borderRadius: '16px' }}>
              <h4 style={{ color: '#22c55e', marginBottom: '16px', fontSize: '14px', letterSpacing: '2px' }}>THE ENGINEERED PROMPT</h4>
              <p style={{ fontSize: '14px', color: '#e5e7eb', fontStyle: 'italic', lineHeight: 1.5 }}>
                "Act as a strict WCAG 2.1 AA auditor. Analyze the attached React tree. Identify any missing aria-labels, incorrect focus trapping, or insufficient color contrasts against the #050505 background. Output the exact line numbers to fix, and provide the drop-in TSX replacement code. Do not explain the 'why', only the 'how'."
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
