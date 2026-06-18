import re

with open('/Users/sandeepkumarsingh/.gemini/antigravity/scratch/portfolio/src/pages/SmartEPPCaseStudy.tsx', 'r') as f:
    content = f.read()

start_marker = "          {/* 07. Outcomes & Learnings */}"
end_marker = "      </section>"

start_idx = content.find(start_marker)
if start_idx == -1:
    print("Start marker not found.")
    exit(1)

# Find the end of the section starting from start_idx
# The first </section> after start_idx is the end of the outcomes section.
end_idx = content.find(end_marker, start_idx) + len(end_marker)

new_section = """          {/* 06: Outcomes & Learnings */}
      <section style={{ padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle reflection background elements */}
        <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '50%', height: '80%', background: 'radial-gradient(ellipse, rgba(255,255,255,0.03) 0%, transparent 60%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '60%', height: '80%', background: 'radial-gradient(ellipse, rgba(59,130,246,0.04) 0%, transparent 60%)', filter: 'blur(100px)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px' }}>
          
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{fontFamily: 'var(--font-heading)', display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--semantic-info)', fontSize: '16px', fontWeight: 600, letterSpacing: '0', textTransform: 'uppercase', marginBottom: '16px'}}>
              <Target size={14} strokeWidth={2.5} />
              06: Outcomes & Learnings
            </div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em', margin: '0 0 16px 0', fontFamily: 'var(--font-heading)' }}>
              The Impact Ledger.
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
              Measured 90 days post-launch. A streamlined system delivered powerful business metrics alongside counter-intuitive UX lessons.
            </p>
          </div>

          {/* PART 1: The Hard Numbers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12" style={{ marginBottom: '100px', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '60px 0' }}>
            
            {/* Metric 1 */}
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 700, color: '#a3a3a3', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px'}}>Business Goal</div>
              <div style={{ fontSize: 'clamp(3.5rem, 4.5vw, 4.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
                9.4<span style={{ color: 'var(--semantic-success)', fontSize: '0.5em', letterSpacing: 0, fontWeight: 700 }}>%</span>
              </div>
              <p style={{ fontSize: '18px', color: '#fff', fontWeight: 600, margin: '0 0 8px 0', fontFamily: 'var(--font-heading)' }}>Total Conversion Rate</p>
              <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.6, margin: 0 }}>Nearly double the initial target of 5%, driven by the real-time tax simulator.</p>
            </motion.div>

            {/* Metric 2 */}
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 700, color: '#a3a3a3', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px'}}>HR Efficiency</div>
              <div style={{ fontSize: 'clamp(3.5rem, 4.5vw, 4.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
                11<span style={{ color: 'var(--text-secondary)', fontSize: '0.5em', letterSpacing: 0, fontWeight: 600 }}>s</span>
              </div>
              <p style={{ fontSize: '18px', color: '#fff', fontWeight: 600, margin: '0 0 8px 0', fontFamily: 'var(--font-heading)' }}>Average Approval Time</p>
              <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.6, margin: 0 }}>Drastically reduced from 48 hours thanks to the 1-click bulk PO dashboard.</p>
            </motion.div>

            {/* Metric 3 */}
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 700, color: '#a3a3a3', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px'}}>Seller Network</div>
              <div style={{ fontSize: 'clamp(3.5rem, 4.5vw, 4.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
                -40<span style={{ color: 'var(--semantic-success)', fontSize: '0.5em', letterSpacing: 0, fontWeight: 700 }}>%</span>
              </div>
              <p style={{ fontSize: '18px', color: '#fff', fontWeight: 600, margin: '0 0 8px 0', fontFamily: 'var(--font-heading)' }}>Fulfillment Errors</p>
              <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.6, margin: 0 }}>Stockouts plummeted after giving sellers a "pre-approval" visibility pipeline.</p>
            </motion.div>

          </div>

          {/* PART 2: The Honest Learnings */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', margin: '0 0 16px 0', fontFamily: 'var(--font-heading)' }}>The "So What?"</h3>
              <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.6, margin: 0 }}>
                Beyond the metrics, B2B2C FinTech taught us that standard UX "best practices" don't always apply when risk and compliance are involved.
              </p>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-12">
              
              {/* Learning 1 */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <div style={{ display: 'flex', gap: '24px' }}>
                  <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--semantic-info)', fontFamily: 'var(--font-heading)', lineHeight: 1.2 }}>01</div>
                  <div>
                    <h4 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>Strategic Friction Builds Trust</h4>
                    <p style={{ fontSize: '18px', color: '#a3a3a3', lineHeight: 1.6, margin: 0 }}>
                      In FinTech, "zero friction" isn't always the goal. When we made a multi-lakh loan approval "1-click" for financiers, it actually caused panic and rejection. We learned that adding <strong style={{ color: '#fff', fontWeight: 600 }}>strategic friction</strong> (review screens, double confirmations) builds necessary psychological safety.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Learning 2 */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <div style={{ display: 'flex', gap: '24px' }}>
                  <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--semantic-warning)', fontFamily: 'var(--font-heading)', lineHeight: 1.2 }}>02</div>
                  <div>
                    <h4 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>Edge Cases Are The Product</h4>
                    <p style={{ fontSize: '18px', color: '#a3a3a3', lineHeight: 1.6, margin: 0 }}>
                      We initially obsessed over the "happy path" for the end-employee. But in B2B operations, failure states—like a stuck order or a rejected KYC—are the actual core UX problems. <strong style={{ color: '#fff', fontWeight: 600 }}>You must design the failure states first</strong>, not as a post-launch polish pass.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </section>"""

new_content = content[:start_idx] + new_section + content[end_idx:]

with open('/Users/sandeepkumarsingh/.gemini/antigravity/scratch/portfolio/src/pages/SmartEPPCaseStudy.tsx', 'w') as f:
    f.write(new_content)

print("Replacement successful.")
