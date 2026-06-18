import sys

def main():
    filepath = "src/pages/SmartEPPCaseStudy.tsx"
    with open(filepath, "r") as f:
        lines = f.readlines()

    start_idx = -1
    end_idx = -1

    for i, line in enumerate(lines):
        if "{/* THE BENTO BOX DASHBOARD */}" in line:
            start_idx = i
        if "Edge cases are the product.</h4>" in line:
            # We want to delete up to the closing `</motion.div>`
            # That's 3 lines after the h4.
            end_idx = i + 3
            break

    if start_idx != -1 and end_idx != -1:
        new_content = """          {/* THE LINEAR STORY LAYOUT */}
          <div style={{ padding: '60px 0', display: 'flex', flexDirection: 'column', gap: '80px', alignItems: 'center' }}>
            
            {/* 1. The Big Numbers */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '64px', width: '100%', maxWidth: '1000px' }}
            >
              {[
                { value: '9.4%', label: 'Total Conversion', sub: 'Target was ≥ 5%' },
                { value: '<12S', label: 'HR Approval Time', sub: 'Reduced from 24 hrs' },
                { value: '0%', label: 'Client Churn', sub: 'Zero drop-offs' }
              ].map((m, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flex: '1', minWidth: '240px' }}>
                  <div style={{ fontSize: '5rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1, fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>
                    {m.value}
                  </div>
                  <div style={{ fontSize: '20px', color: '#fff', fontWeight: 600, fontFamily: "'Jost', sans-serif", marginBottom: '8px' }}>{m.label}</div>
                  <div style={{ fontSize: '16px', color: 'var(--semantic-success)' }}>{m.sub}</div>
                </div>
              ))}
            </motion.div>

            {/* 2. The Scale Context */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              style={{ textAlign: 'center', maxWidth: '800px' }}
            >
              <p style={{ fontSize: '22px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, fontFamily: "'Jost', sans-serif", margin: 0 }}>
                These results were achieved at scale across <span style={{ color: '#fff', fontWeight: 600 }}>14 Enterprise Partners</span>, <span style={{ color: '#fff', fontWeight: 600 }}>6 Financiers</span>, and <span style={{ color: '#fff', fontWeight: 600 }}>45+ Seller Networks</span>.
              </p>
            </motion.div>

            {/* 3. The Learnings */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '64px', width: '100%', maxWidth: '800px', marginTop: '40px' }}
            >
              {[
                { title: 'Strategic Friction Builds Trust', desc: 'In FinTech, "zero friction" isn\\'t always the goal. Making a multi-lakh loan approval "1-click" actually caused panic. We learned that strategic friction builds psychological safety.' },
                { title: 'The "Silent Stakeholders"', desc: 'We initially obsessed over the end-employee. But the true bottlenecks were back-office compliance teams. B2B UX means designing the entire operational chain.' },
                { title: 'The Speed Trade-off', desc: 'We skipped early validation on Financier and Seller portals to optimize for speed. This resulted in excessive change requests and rework post-launch.' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--semantic-success)', fontFamily: 'var(--font-heading)', lineHeight: 1.2, opacity: 0.8 }}>
                    0{i+1}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '28px', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: "'Jost', sans-serif" }}>{item.title}</h4>
                    <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* 4. The Conclusion (Hero Quote) */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              style={{ marginTop: '80px', textAlign: 'center', maxWidth: '800px', position: 'relative' }}
            >
              <div style={{ fontSize: '80px', color: 'rgba(255,255,255,0.05)', position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', fontFamily: 'serif', lineHeight: 1 }}>"</div>
              <h4 style={{ fontSize: '36px', fontWeight: 600, color: '#fff', marginBottom: '24px', fontFamily: "'Jost', sans-serif", position: 'relative', zIndex: 1 }}>
                Edge cases are the product.
              </h4>
              <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0, position: 'relative', zIndex: 1 }}>
                In B2B operations, failure states (like a stuck order) are core UX problems. Audit edge cases during initial problem definition, not as a post-launch polish pass.
              </p>
            </motion.div>

          </div>
"""
        
        lines[start_idx:end_idx+1] = [new_content + "\n"]
        
        with open(filepath, "w") as f:
            f.writelines(lines)
        print("Linear Layout implemented successfully.")
    else:
        print(f"Error: Could not find markers. start_idx={start_idx}, end_idx={end_idx}")

if __name__ == "__main__":
    main()
