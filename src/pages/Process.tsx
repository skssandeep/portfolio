import React, { useEffect } from 'react';
import { PenTool, GitCommit, MessageSquareWarning } from 'lucide-react';

export const Process = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: 'var(--bg-color)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        {/* Header */}
        <header style={{ marginBottom: '80px', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <span style={{ fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--accent-color)', fontWeight: 600 }}>The Messy Middle</span>
          </div>
          <h1 className="text-headline" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '32px', lineHeight: 1.1 }}>
            Process artifacts, shown raw.
          </h1>
          <p className="text-body-large" style={{ color: 'var(--text-secondary)', fontSize: '20px', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto' }}>
            Polished case studies all look the same; rejected work doesn't. Here is the actual, chaotic thinking process behind the pixels.
          </p>
        </header>

        {/* Artifact 1: Paper Sketches */}
        <section style={{ marginBottom: '120px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)' }}>
              <PenTool size={20} />
            </div>
            <h2 style={{ fontSize: '24px', margin: 0 }}>Ugly Initial Sketches</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
              <img 
                src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=1000" 
                alt="Messy whiteboard wireframes" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px' }}>
                Before opening Figma, I spend hours mapping state transitions on paper. This specific whiteboard session (pictured left) was for the B2B dashboard. We threw out 4 entire navigation paradigms before settling on the command-K approach. The raw sketches reveal a focus on information architecture over aesthetics.
              </p>
            </div>
          </div>
        </section>

        {/* Artifact 2: The Pivot (Stakeholder Feedback) */}
        <section style={{ marginBottom: '120px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)' }}>
              <MessageSquareWarning size={20} />
            </div>
            <h2 style={{ fontSize: '24px', margin: 0 }}>The Painful Pivot</h2>
          </div>
          <div style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: '24px', padding: '48px', border: '1px solid var(--glass-border)' }}>
            <div style={{ backgroundColor: '#fff', color: '#000', borderRadius: '16px', padding: '24px', marginBottom: '32px', fontFamily: 'sans-serif' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#ccc' }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: '14px' }}>Head of Engineering (Anonymized)</div>
                  <div style={{ color: '#666', fontSize: '12px' }}>11:42 AM via Slack</div>
                </div>
              </div>
              <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.5 }}>
                "Sandeep, the new sidebar interaction looks gorgeous, but it requires us to refactor the entire global state context. We can't ship this this quarter. We need to fall back to the modal approach."
              </p>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.6 }}>
              <strong>The Reality:</strong> I spent 2 weeks polishing a sidebar interaction that was technically unfeasible within our constraints. I had to kill my darlings, swallow my pride, and redesign the flow using a standard modal. It wasn't as "sexy," but it shipped on time and solved the user problem immediately.
            </p>
          </div>
        </section>

        {/* Artifact 3: Figma Version History Graveyard */}
        <section>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)' }}>
              <GitCommit size={20} />
            </div>
            <h2 style={{ fontSize: '24px', margin: 0 }}>The Version History Graveyard</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { time: "v42 - Final Handoff", desc: "Simplified to core requirements. Stripped out complex animations." },
              { time: "v35 - User Testing Results", desc: "Users were confused by the nested tabs. Completely rebuilding navigation." },
              { time: "v28 - The 'Genius' Idea", desc: "Added floating action buttons everywhere. (This was a terrible idea)." },
              { time: "v12 - Initial Concepts", desc: "Exploration phase. 5 different visual directions." }
            ].map((commit, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '24px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '16px' }}>
                <div style={{ fontFamily: 'monospace', color: 'var(--accent-color)', fontSize: '14px', whiteSpace: 'nowrap' }}>{commit.time}</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>{commit.desc}</div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
