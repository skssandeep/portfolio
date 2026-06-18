import sys

def main():
    filepath = "src/pages/SmartEPPCaseStudy.tsx"
    with open(filepath, "r") as f:
        lines = f.readlines()

    start_idx = -1
    end_idx = -1

    for i, line in enumerate(lines):
        if "{/* Tier 1: Platform Scale */}" in line:
            start_idx = i
        if "{/* 07. Outcomes & Learnings */}" in line and start_idx == -1: # Wait, "Tier 1: Platform scale" is what we want to replace
            pass
        if "Edge cases are the product</h3>" in line:
            # We want to delete up to the closing `</motion.div>` of the Hero Card.
            # That's 3 lines after the h3.
            end_idx = i + 3
            break

    if start_idx != -1 and end_idx != -1:
        new_content = """          {/* THE BENTO BOX DASHBOARD */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ 
              background: '#0a0a0a', 
              border: '1px solid rgba(255,255,255,0.08)', 
              borderRadius: '32px', 
              overflow: 'hidden',
              boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Top Bar: Minimal Platform Scale */}
            <div style={{ padding: '20px 32px', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px', alignItems: 'center' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'var(--font-heading)' }}>Platform Scale</div>
              <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.1)' }} />
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <span style={{ color: '#fff', fontSize: '15px' }}><strong style={{ color: '#3b82f6' }}>14</strong> Enterprise Partners</span>
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span>
                <span style={{ color: '#fff', fontSize: '15px' }}><strong style={{ color: '#10b981' }}>6</strong> Financiers</span>
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span>
                <span style={{ color: '#fff', fontSize: '15px' }}><strong style={{ color: '#f59e0b' }}>45+</strong> Seller Networks</span>
              </div>
            </div>

            {/* Main Content Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12" style={{ gap: 0 }}>
              
              {/* Left Side: System Performance */}
              <div className="lg:col-span-5" style={{ padding: '48px', borderRight: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '10%', left: '-20%', width: '140%', height: '80%', background: 'radial-gradient(ellipse, rgba(16,185,129,0.08) 0%, transparent 60%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
                
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--semantic-success)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '40px', fontFamily: 'var(--font-heading)' }}>System Performance</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
                  {[
                    { value: '9.4%', label: 'Total Conversion', sub: 'Target was ≥ 5%' },
                    { value: '<12S', label: 'HR Approval Time', sub: 'Reduced from 24 hrs' },
                    { value: '0%', label: 'Client Churn', sub: 'Zero onboarding drop-offs' }
                  ].map((m, i) => (
                    <div key={i}>
                      <div style={{ fontSize: '4.5rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1, fontFamily: 'var(--font-heading)', marginBottom: '8px' }}>
                        {m.value}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '20px', color: '#fff', fontWeight: 600, fontFamily: "'Jost', sans-serif" }}>{m.label}</span>
                        <span style={{ fontSize: '15px', color: 'var(--semantic-success)' }}>{m.sub}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Qualitative Learnings */}
              <div className="lg:col-span-7" style={{ padding: '48px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '40px', fontFamily: 'var(--font-heading)' }}>Executive Learnings</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                  {[
                    { title: 'Strategic Friction Builds Trust', desc: 'In FinTech, "zero friction" isn\\'t always the goal. Making a multi-lakh loan approval "1-click" actually caused panic. We learned that strategic friction builds psychological safety.' },
                    { title: 'The "Silent Stakeholders"', desc: 'We initially obsessed over the end-employee. But the true bottlenecks were back-office compliance teams. B2B UX means designing the entire operational chain.' },
                    { title: 'The Speed Trade-off', desc: 'We skipped early validation on Financier and Seller portals to optimize for speed. This resulted in excessive change requests and rework post-launch.' }
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '24px' }}>
                      <div style={{ fontSize: '18px', fontWeight: 600, color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-heading)', lineHeight: 1.4 }}>
                        0{i+1}
                      </div>
                      <div>
                        <h4 style={{ fontSize: '22px', fontWeight: 600, color: '#fff', marginBottom: '8px', fontFamily: "'Jost', sans-serif" }}>{item.title}</h4>
                        <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Span: Hero Takeaway */}
            <div style={{ background: 'rgba(249,87,56,0.08)', borderTop: '1px solid rgba(249,87,56,0.2)', padding: '32px 48px', display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(249,87,56,0.2)', color: 'var(--semantic-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <div>
                <h4 style={{ fontSize: '24px', fontWeight: 600, color: '#fff', marginBottom: '4px', fontFamily: "'Jost', sans-serif" }}>Edge cases are the product.</h4>
                <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', margin: 0 }}>In B2B operations, failure states (like a stuck order) are core UX problems. Audit edge cases during initial problem definition, not as a post-launch polish pass.</p>
              </div>
            </div>
          </motion.div>
"""
        
        # We need to add the new content and a newline at the end
        lines[start_idx:end_idx+1] = [new_content + "\n"]
        
        with open(filepath, "w") as f:
            f.writelines(lines)
        print("Bento Box implemented successfully.")
    else:
        print(f"Error: Could not find markers. start_idx={start_idx}, end_idx={end_idx}")

if __name__ == "__main__":
    main()
