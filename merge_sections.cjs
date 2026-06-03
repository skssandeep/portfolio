const fs = require('fs');

let content = fs.readFileSync('src/pages/SmartEPPCaseStudy.tsx', 'utf8');

// 1. Update the state to include 'employee' and default to it
content = content.replace(
  /useState\<'hr' \| 'financier' \| 'seller'\>\('hr'\)/,
  "useState<'employee' | 'hr' | 'financier' | 'seller'>('employee')"
);

// 2. Define the new unified Tabs HTML
const newTabsHtml = `
            {/* Unified Super-Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', marginBottom: '60px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '100px', padding: '6px' }}>
                {[
                  { id: 'employee', label: 'Employee App', icon: <Smartphone size={16} /> },
                  { id: 'hr', label: 'HR Portal', icon: <Users size={16} /> },
                  { id: 'financier', label: 'Financier Portal', icon: <Landmark size={16} /> },
                  { id: 'seller', label: 'Seller Hub', icon: <Package size={16} /> }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActivePortalTab(tab.id as any)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      padding: '10px 24px', borderRadius: '100px',
                      background: activePortalTab === tab.id ? 'rgba(255,255,255,0.1)' : 'transparent',
                      color: activePortalTab === tab.id ? '#fff' : '#888',
                      border: 'none',
                      cursor: 'pointer', transition: 'all 0.3s ease',
                      fontWeight: 500, fontSize: '14px'
                    }}
                  >
                    {tab.icon} {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <motion.div 
              key={activePortalTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{ width: '100%' }}
            >
              {activePortalTab === 'employee' && (
                <div>
                  {/* Grid/Carousel Toggle */}
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
                    <div style={{ display: 'inline-flex', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', padding: '6px' }}>
                      <button 
                        onClick={() => setIsGridView(false)}
                        style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 20px', borderRadius: '100px', background: !isGridView ? 'rgba(255,255,255,0.1)' : 'transparent', color: !isGridView ? '#fff' : 'rgba(255,255,255,0.5)', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', fontSize: '14px', fontWeight: 500 }}
                      >
                        <Columns size={16} /> Carousel
                      </button>
                      <button 
                        onClick={() => setIsGridView(true)}
                        style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 20px', borderRadius: '100px', background: isGridView ? 'rgba(255,255,255,0.1)' : 'transparent', color: isGridView ? '#fff' : 'rgba(255,255,255,0.5)', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', fontSize: '14px', fontWeight: 500 }}
                      >
                        <LayoutGrid size={16} /> Grid View
                      </button>
                    </div>
                  </div>
`;

// Replace the old Grid/Carousel Toggle with the New Tabs + New Grid Toggle
content = content.replace(
  /<div style=\{\{ display: 'flex', justifyContent: 'center', marginTop: '40px' \}\}>\s*<div style=\{\{ display: 'inline-flex', background: 'rgba\(255,255,255,0\.03\)', border: '1px solid rgba\(255,255,255,0\.1\)', borderRadius: '100px', padding: '6px' \}\}>\s*<button[\s\S]*?<LayoutGrid size=\{16\} \/> Grid View\s*<\/button>\s*<\/div>\s*<\/div>/,
  newTabsHtml
);


// 3. Remove the Admin Portals Header and the old Tabs
const oldAdminHeader = `            {/* Admin Portals Section */}
            <div style={{ marginBottom: '80px' }}>
              <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h3 style={{ fontSize: '32px', fontWeight: 600, color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em' }}>Powering the B2B Ecosystem</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
                  Beyond the employee app, we designed three specialized web portals to handle approvals, financing, and logistics perfectly.
                </p>
              </div>

              {/* Tabs */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '48px' }}>
                {[
                  { id: 'hr', label: 'HR Dashboard', icon: <Users size={16} /> },
                  { id: 'financier', label: 'Financier Portal', icon: <Landmark size={16} /> },
                  { id: 'seller', label: 'Seller Hub', icon: <Package size={16} /> }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActivePortalTab(tab.id as any)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      padding: '10px 24px', borderRadius: '100px',
                      background: activePortalTab === tab.id ? 'rgba(255,255,255,0.1)' : 'transparent',
                      border: \`1px solid \${activePortalTab === tab.id ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.05)'}\`,
                      color: activePortalTab === tab.id ? '#fff' : '#777',
                      cursor: 'pointer', transition: 'all 0.3s ease',
                      fontWeight: 500, fontSize: '14px'
                    }}
                  >
                    {tab.icon} {tab.label}
                  </button>
                ))}
              </div>

              {/* Portal Content */}
              <motion.div 
                key={activePortalTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >`;

// We need to close the 'employee' conditional right before the HR content starts.
// Replace the old admin header + motion div with closing the employee tab.
content = content.replace(
  oldAdminHeader,
  `                </div>\n              )}\n` // closes the employee tab content
);

// 4. We need to close the `motion.div` we opened around the Tabs!
// Wait, the newTabsHtml opens `<motion.div>` for the tab content!
// And the old admin portals had a `</motion.div>` right before `</div> {/* Divider */}`.
// Let's verify the end of the admin portals section.
const adminPortalsEndStr = `              </motion.div>\n            </div>\n            {/* Divider */}`;
content = content.replace(adminPortalsEndStr, `              </motion.div>\n            </div>\n\n            {/* Bottom 3 cards Divider */}`);

fs.writeFileSync('src/pages/SmartEPPCaseStudy.tsx', content, 'utf8');
console.log('Successfully unified layout!');
