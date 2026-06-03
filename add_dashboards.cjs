const fs = require('fs');
let content = fs.readFileSync('src/pages/SmartEPPCaseStudy.tsx', 'utf8');

// 1. Add lucide icons
content = content.replace(
  /import \{([^}]+)\} from 'lucide-react';/,
  (match, p1) => {
    if (!p1.includes('Package')) p1 += ', Package';
    if (!p1.includes('Landmark')) p1 += ', Landmark';
    if (!p1.includes('Briefcase')) p1 += ', Briefcase';
    return `import {${p1}} from 'lucide-react';`;
  }
);

// 2. Add useState
if (!content.includes('activePortalTab')) {
  content = content.replace(
    /const \[isGridView, setIsGridView\] = useState\(false\);/,
    `const [isGridView, setIsGridView] = useState(false);\n  const [activePortalTab, setActivePortalTab] = useState<'hr' | 'financier' | 'seller'>('hr');`
  );
}

// 3. Replace HR Section with Tabbed Section
const targetStart = `{/* Screen 03: HR Approval Dashboard */}`;
const targetEnd = `{/* Bottom 3 cards: Design System / Accessibility / Edge Cases */}`;

const startIndex = content.indexOf(targetStart);
const endIndex = content.indexOf(targetEnd);

if (startIndex !== -1 && endIndex !== -1) {
  const newSection = `
            {/* Admin Portals Section */}
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
              >
                {activePortalTab === 'hr' && (
                  <div>
                    {/* CSS Mockup for HR */}
                    <div style={{ background: '#111', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden', marginBottom: '40px', boxShadow: '0 24px 60px rgba(0,0,0,0.6)' }}>
                      <div style={{ background: '#1a1a1a', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                          <div style={{ display: 'flex', gap: '6px' }}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
                          </div>
                          <span style={{ color: '#fff', fontWeight: 600, fontSize: '15px', letterSpacing: '-0.01em' }}>HR Portal</span>
                        </div>
                        <div style={{ display: 'flex', gap: '16px' }}>
                          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', color: '#aaa' }}>Total Savings: <strong style={{color: '#fff'}}>₹18.4L</strong></div>
                          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', color: '#aaa' }}>Pending: <strong style={{color: '#fff'}}>12</strong></div>
                        </div>
                      </div>
                      <div style={{ padding: '24px' }}>
                        {/* Table Header */}
                        <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr 1fr', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.06)', color: '#666', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                          <div>Employee</div>
                          <div>Request</div>
                          <div>Eligibility</div>
                          <div style={{ textAlign: 'right' }}>Action</div>
                        </div>
                        {/* Rows */}
                        {[
                          { name: 'Arjun Mehta', role: 'Sr. Engineer (Band 4)', device: 'iPhone 17 Pro Max', cost: '₹11,500/mo', status: 'In Policy', statusColor: '#22c55e' },
                          { name: 'Priya Sharma', role: 'Design Lead (Band 3)', device: 'MacBook Pro 16"', cost: '₹14,200/mo', status: 'Requires Review', statusColor: '#f59e0b' },
                          { name: 'Rahul Desai', role: 'Marketing (Band 2)', device: 'iPad Air', cost: '₹3,400/mo', status: 'In Policy', statusColor: '#22c55e' }
                        ].map((row, i) => (
                          <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr 1fr', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                            <div>
                              <div style={{ color: '#fff', fontWeight: 500, fontSize: '14px', marginBottom: '4px' }}>{row.name}</div>
                              <div style={{ color: '#666', fontSize: '12px' }}>{row.role}</div>
                            </div>
                            <div>
                              <div style={{ color: '#e5e5e5', fontSize: '14px', marginBottom: '4px' }}>{row.device}</div>
                              <div style={{ color: '#888', fontSize: '12px' }}>{row.cost}</div>
                            </div>
                            <div>
                              <span style={{ display: 'inline-block', padding: '4px 8px', borderRadius: '4px', background: \`\${row.statusColor}22\`, color: row.statusColor, fontSize: '11px', fontWeight: 600 }}>{row.status}</span>
                            </div>
                            <div style={{ textAlign: 'right', display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                              <button style={{ background: 'rgba(255,255,255,0.05)', border: 'none', color: '#fff', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', cursor: 'pointer' }}>Reject</button>
                              <button style={{ background: 'var(--semantic-success)', border: 'none', color: '#fff', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 500, cursor: 'pointer' }}>Approve</button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                      <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px' }}>
                        <strong style={{ color: '#e5e5e5', fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '14px' }}>Everything at a glance.</strong>
                        <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.7, margin: 0 }}>Employee name, role, band, and requested device cost are visible in a single row. No tab-switching or profile opening required.</p>
                      </div>
                      <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px' }}>
                        <strong style={{ color: '#e5e5e5', fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '14px' }}>Band-based eligibility.</strong>
                        <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.7, margin: 0 }}>HR immediately knows if the device is within policy. Requests outside band limits are automatically flagged for review.</p>
                      </div>
                      <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px' }}>
                        <strong style={{ color: '#e5e5e5', fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '14px' }}>Emotional reframing.</strong>
                        <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.7, margin: 0 }}>Showing "Total Savings" reframes HR from an admin approving requests to a champion delivering real employee value.</p>
                      </div>
                    </div>
                  </div>
                )}

                {activePortalTab === 'financier' && (
                  <div>
                    {/* CSS Mockup for Financier */}
                    <div style={{ background: '#111', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden', marginBottom: '40px', boxShadow: '0 24px 60px rgba(0,0,0,0.6)' }}>
                      <div style={{ background: '#1a1a1a', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                          <div style={{ display: 'flex', gap: '6px' }}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
                          </div>
                          <span style={{ color: '#fff', fontWeight: 600, fontSize: '15px', letterSpacing: '-0.01em' }}>Financier Portal</span>
                        </div>
                        <div style={{ display: 'flex', gap: '16px' }}>
                          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', color: '#aaa' }}>Disbursed (Mtd): <strong style={{color: '#fff'}}>₹1.2Cr</strong></div>
                          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', color: '#aaa' }}>Avg EMI: <strong style={{color: '#fff'}}>12 Mo</strong></div>
                        </div>
                      </div>
                      <div style={{ padding: '24px' }}>
                        {/* Top Widgets */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
                           <div style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.1) 0%, rgba(168,85,247,0.02) 100%)', border: '1px solid rgba(168,85,247,0.2)', padding: '20px', borderRadius: '8px' }}>
                              <div style={{ color: '#a855f7', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Active Loans</div>
                              <div style={{ color: '#fff', fontSize: '28px', fontWeight: 700 }}>1,432</div>
                           </div>
                           <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '20px', borderRadius: '8px' }}>
                              <div style={{ color: '#777', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Risk Assessment</div>
                              <div style={{ color: '#22c55e', fontSize: '24px', fontWeight: 600 }}>Low (Corporate)</div>
                           </div>
                           <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '20px', borderRadius: '8px' }}>
                              <div style={{ color: '#777', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Upcoming EMI Collection</div>
                              <div style={{ color: '#fff', fontSize: '24px', fontWeight: 600 }}>Oct 1st</div>
                           </div>
                        </div>
                        {/* Table Header */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.06)', color: '#666', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                          <div>Corporate Partner</div>
                          <div>Approved Amount</div>
                          <div>Tenure</div>
                          <div style={{ textAlign: 'right' }}>Status</div>
                        </div>
                        {/* Rows */}
                        {[
                          { corp: 'Infosys Ltd', amount: '₹4,50,000', tenure: '12 Months', status: 'Disbursed', statusColor: '#22c55e' },
                          { corp: 'Wipro', amount: '₹1,20,000', tenure: '24 Months', status: 'Pending KYC', statusColor: '#f59e0b' }
                        ].map((row, i) => (
                          <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                            <div style={{ color: '#fff', fontWeight: 500, fontSize: '14px' }}>{row.corp}</div>
                            <div style={{ color: '#e5e5e5', fontSize: '14px' }}>{row.amount}</div>
                            <div style={{ color: '#888', fontSize: '13px' }}>{row.tenure}</div>
                            <div style={{ textAlign: 'right' }}>
                              <span style={{ display: 'inline-block', padding: '4px 8px', borderRadius: '4px', background: \`\${row.statusColor}22\`, color: row.statusColor, fontSize: '11px', fontWeight: 600 }}>{row.status}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                      <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px' }}>
                        <strong style={{ color: '#e5e5e5', fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '14px' }}>Corporate Risk Profiling.</strong>
                        <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.7, margin: 0 }}>Financiers can evaluate loan books based on corporate partner risk rather than individual retail risk, enabling better rates.</p>
                      </div>
                      <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px' }}>
                        <strong style={{ color: '#e5e5e5', fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '14px' }}>Automated Disbursals.</strong>
                        <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.7, margin: 0 }}>Once HR approves and KYC is complete, capital is automatically routed to sellers without manual intervention.</p>
                      </div>
                      <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px' }}>
                        <strong style={{ color: '#e5e5e5', fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '14px' }}>EMI Collection Sync.</strong>
                        <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.7, margin: 0 }}>Direct integration with corporate payroll systems ensures EMI collections are perfectly synced with salary cycles.</p>
                      </div>
                    </div>
                  </div>
                )}

                {activePortalTab === 'seller' && (
                  <div>
                    {/* CSS Mockup for Seller */}
                    <div style={{ background: '#111', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden', marginBottom: '40px', boxShadow: '0 24px 60px rgba(0,0,0,0.6)' }}>
                      <div style={{ background: '#1a1a1a', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                          <div style={{ display: 'flex', gap: '6px' }}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
                          </div>
                          <span style={{ color: '#fff', fontWeight: 600, fontSize: '15px', letterSpacing: '-0.01em' }}>Seller Hub</span>
                        </div>
                        <div style={{ display: 'flex', gap: '16px' }}>
                          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', color: '#aaa' }}>To Dispatch: <strong style={{color: '#fff'}}>45</strong></div>
                        </div>
                      </div>
                      <div style={{ display: 'flex' }}>
                        {/* Sidebar */}
                        <div style={{ width: '200px', borderRight: '1px solid rgba(255,255,255,0.06)', padding: '24px' }}>
                          <div style={{ color: '#eab308', fontWeight: 600, fontSize: '13px', marginBottom: '16px', padding: '8px', background: 'rgba(234,179,8,0.1)', borderRadius: '6px' }}>Active Orders</div>
                          <div style={{ color: '#777', fontWeight: 500, fontSize: '13px', marginBottom: '16px', padding: '8px' }}>Inventory Sync</div>
                          <div style={{ color: '#777', fontWeight: 500, fontSize: '13px', marginBottom: '16px', padding: '8px' }}>Logistics</div>
                        </div>
                        {/* Main Content */}
                        <div style={{ flex: 1, padding: '24px' }}>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr 1fr', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.06)', color: '#666', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                            <div>Order ID</div>
                            <div>Product</div>
                            <div>Shipping</div>
                            <div style={{ textAlign: 'right' }}>Action</div>
                          </div>
                          {[
                            { id: '#ORD-8821', product: 'iPhone 17 Pro Max (256GB)', shipping: 'Express (1 Day)', status: 'Generate AWB' },
                            { id: '#ORD-8822', product: 'MacBook Pro 16" (M4)', shipping: 'Standard (3 Days)', status: 'Pack Order' }
                          ].map((row, i) => (
                            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr 1fr', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                              <div style={{ color: '#a3a3a3', fontSize: '13px', fontFamily: 'var(--font-mono)' }}>{row.id}</div>
                              <div style={{ color: '#fff', fontSize: '14px', fontWeight: 500 }}>{row.product}</div>
                              <div style={{ color: '#888', fontSize: '13px' }}>{row.shipping}</div>
                              <div style={{ textAlign: 'right' }}>
                                <button style={{ background: 'var(--semantic-info)', border: 'none', color: '#fff', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 500, cursor: 'pointer' }}>{row.status}</button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                      <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px' }}>
                        <strong style={{ color: '#e5e5e5', fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '14px' }}>Inventory Protection.</strong>
                        <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.7, margin: 0 }}>Devices are temporarily reserved during the HR approval window to prevent out-of-stock scenarios for approved requests.</p>
                      </div>
                      <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px' }}>
                        <strong style={{ color: '#e5e5e5', fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '14px' }}>Streamlined Fulfillment.</strong>
                        <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.7, margin: 0 }}>Sellers only see fully funded, approved orders. Financing and corporate approvals are abstracted away completely.</p>
                      </div>
                      <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px' }}>
                        <strong style={{ color: '#e5e5e5', fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '14px' }}>B2B Tax Invoicing.</strong>
                        <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.7, margin: 0 }}>GST invoices are automatically generated in the correct B2B format to ensure corporate tax benefits can be claimed.</p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
            {/* Divider */}
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '80px' }} />
`;
  
  content = content.slice(0, startIndex) + newSection + content.slice(endIndex);
  fs.writeFileSync('src/pages/SmartEPPCaseStudy.tsx', content, 'utf8');
  console.log('Successfully replaced HR section with Admin Portals');
} else {
  console.error('Could not find target strings for replacement', startIndex, endIndex);
}
