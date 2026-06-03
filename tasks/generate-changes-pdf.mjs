import puppeteer from '/Users/sandeepkumarsingh/node_modules/puppeteer/lib/cjs/puppeteer/puppeteer.js';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const changes = [
  {
    section: '01 · Stats Grid',
    status: 'fixed',
    before: '"MY ROLE" and "I WORKED WITH" used first-person labels while other cells used category labels.',
    after: 'All 6 cells now use consistent category labels: ROLE, TEAM, PLATFORMS, TIMELINE, USER RESEARCH, DESIGN SYSTEM.',
    note: 'Also fixed "44 components" description — now reads "Built on OneAssist\'s existing library" to resolve contradiction with Problem section.'
  },
  {
    section: '02 · Problem — Project Scope Grid',
    status: 'cut',
    before: 'A 6-cell scope grid (Platforms, User Types, Backbone, Design System, Timeline, Out of Scope) sat inside the Problem section, repeating everything already in the Intro stats grid above.',
    after: 'Grid deleted entirely. Left column narrative is now full-width. The "Why now" tax-savings sentence is bolded to surface it from the body text.',
    note: null
  },
  {
    section: '03 · Research — Wrong Thumbnails',
    status: 'fixed',
    before: 'Cards 2 (Employee Anxiety) and 3 (HR Friction) both used the calculator screenshot as their "The Fix" thumbnail. A recruiter clicking the HR card expected the approval dashboard.',
    after: 'Thumbnails removed from cards 2 and 3. The "The Fix" label and description now take full width without a broken image reference.',
    note: null
  },
  {
    section: '03 · Research — Misleading "8/12" Stat',
    status: 'fixed',
    before: '"8/12 flagged salary EMIs as their top fear" — with no context, this reads as 8 out of the 12 total research participants, conflicting with the "26 interviews" headline above.',
    after: 'Added clarifying subline under the stat: "of 12 employees surveyed (subset of 26 total)" — makes the sampling transparent.',
    note: null
  },
  {
    section: '04 · Problem Reframe Section',
    status: 'cut',
    before: 'Full section ("Stop designing 4 products. Design 1 system.") with Before/After diagram, 4 fragmented boxes, 4 tabbed views, and a conclusion callout. Takes up 160px padding to say what one paragraph can say.',
    after: 'Section deleted entirely. The key insight ("designing the shared data model first cut design time by ~30%") was already surfaced in the Reflection section. Removing this reduces page from 12 → 11 sections.',
    note: null
  },
  {
    section: '05 · Design Exploration — Misleading A/B Framing',
    status: 'fixed',
    before: '"The Winning Formula: 2.4x Higher Conversion" compared the winner (68% conversion) against Guided Wizard (44% drop-off) — two completely different metric types side by side.',
    after: 'Guided Wizard metric relabeled to "44% Step-1 Abandonment" with a subline "(measures friction, not conversion)" to make clear it\'s not comparable to the conversion rates.',
    note: null
  },
  {
    section: '06 · Final Solution — Carousel/Grid Toggle',
    status: 'cut',
    before: 'A "Carousel / Grid View" toggle button required recruiters to choose a layout before seeing any screens. Unnecessary choice before the content.',
    after: 'Toggle removed. Employee App tab defaults to the carousel view directly, showing screens immediately on tab selection.',
    note: null
  },
  {
    section: '06 · System Foundations — Accessibility Card',
    status: 'cut',
    before: '"Inclusive by Design. High-contrast text and large touch targets ensure a frictionless experience." Generic claim with no WCAG metrics or specifics. Every product claims this.',
    after: 'Accessibility card deleted. Design System card and Edge Cases card remain.',
    note: null
  },
  {
    section: '06 · Validation — Metric Cards',
    status: 'restructured',
    before: '3 metric cards (11/14 savings recall, 11 sec approval, -60% anxiety) were previews of the same numbers in Outcomes. Validation section was doing two jobs: testing process + results.',
    after: 'Metric cards removed from Validation. Section now contains only: the user quote, Key Pivot (users ignored the standalone explainer), and "What we missed" — the testing process story. Numbers live exclusively in Outcomes.',
    note: null
  },
  {
    section: '07 · Outcomes — "5 mo" Metric Card',
    status: 'cut',
    before: '"5 mo / MVP to launch" appeared as an outcome metric, but it\'s a timeline fact already in the Intro stats grid. Not an outcome.',
    after: 'Removed from outcomes grid. Metrics grid now has 5 cards: 68%, <12s, 11/14, 4.4★, 0% enterprise churn.',
    note: null
  },
  {
    section: '07 · Outcomes — "0% Abandonment" Clarification',
    status: 'fixed',
    before: '"0% HR program abandonment" with sub "no enterprise client dropped the program post-launch" — ambiguous. Could mean individual employees or enterprise clients.',
    after: 'Renamed to "Enterprise client churn" with sub "no HR program dropped the platform in the 90 days post-launch" — unambiguous scope.',
    note: null
  },
  {
    section: '07 · Outcomes — Duplicate Text Cards',
    status: 'merged',
    before: '"Qualitative Wins" and "Success Criteria" were two side-by-side cards with duplicative stories. Qualitative wins mentioned "Support tickets dropped to near-zero" while Success Criteria showed "Employee cart conversion ≥ 50% → Hit (68%)". Felt like padding.',
    after: 'Merged into one card with two columns: "Signal from users" (left) and "Success criteria" (right). Same information, half the visual weight.',
    note: null
  },
  {
    section: '08 · Reflection — "Next Iteration" Card',
    status: 'rewritten',
    before: '"(1) Power-user tax calculator mode. (2) Full end-of-tenure flow. (3) Complete redesign of lessor/seller portals backed by actual user research." — reads as product backlog, not reflection.',
    after: 'Rewritten to explain WHY each item was blocked and what was learned: timeline constraints, the end-of-tenure return flow as "the single biggest unresolved anxiety", and the lessor/seller redesign driven by the missed validation lesson.',
    note: null
  },
  {
    section: '11 · Design System & Assets Section',
    status: 'cut',
    before: 'Full section showing 3 color swatches and 2 typography specimens, ending with two dead buttons: "View Pitch Deck (PDF)" and "View Figma File" — both with no href or onClick handler. Clicking either made the portfolio appear broken.',
    after: 'Section deleted entirely.',
    note: null
  },
  {
    section: '12 · Final Thoughts Section',
    status: 'replaced',
    before: 'Section with Target icon, self-congratulatory third-person quote ("Smart EPP was a masterclass..."), "Built with: Figma, Claude, & UX Pilot" pill (flagging AI tool use), and Back button.',
    after: 'Section replaced with a minimal centered navigation footer: just "Back to All Projects" button. The Reflection section (08) now serves as the natural closing point of the case study.',
    note: 'Removed "Built with Claude" disclosure — mentioning AI tools in a UX portfolio raises red flags with hiring managers without adding any value.'
  },
];

const statusColors = {
  cut: { bg: '#2a1010', border: '#7f1d1d', badge: '#ef4444', label: 'CUT' },
  fixed: { bg: '#0f1f12', border: '#14532d', badge: '#22c55e', label: 'FIXED' },
  restructured: { bg: '#0f1628', border: '#1e3a5f', badge: '#3b82f6', label: 'RESTRUCTURED' },
  merged: { bg: '#1a1428', border: '#4c1d95', badge: '#a855f7', label: 'MERGED' },
  rewritten: { bg: '#1a180a', border: '#713f12', badge: '#f59e0b', label: 'REWRITTEN' },
  replaced: { bg: '#1a0a14', border: '#7c1d4f', badge: '#ec4899', label: 'REPLACED' },
};

function renderChange(c, i) {
  const s = statusColors[c.status];
  return `
    <div class="change-card" style="background:${s.bg};border:1px solid ${s.border};">
      <div class="change-header">
        <span class="badge" style="background:${s.badge}22;color:${s.badge};border:1px solid ${s.badge}55;">${s.label}</span>
        <span class="section-title">${c.section}</span>
      </div>
      <div class="change-body">
        <div class="diff-block before">
          <div class="diff-label">Before</div>
          <div class="diff-text">${c.before}</div>
        </div>
        <div class="diff-block after">
          <div class="diff-label">After</div>
          <div class="diff-text">${c.after}</div>
        </div>
        ${c.note ? `<div class="note"><span class="note-icon">Note</span> ${c.note}</div>` : ''}
      </div>
    </div>`;
}

const statusCounts = {};
changes.forEach(c => { statusCounts[c.status] = (statusCounts[c.status] || 0) + 1; });

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Inter', -apple-system, sans-serif;
    font-size: 10pt;
    line-height: 1.6;
    color: #e0e0e0;
    background: #0a0a0a;
    padding: 48px 52px;
    max-width: 860px;
    margin: 0 auto;
  }

  .cover {
    border-left: 4px solid #E63946;
    padding: 24px 28px;
    margin-bottom: 40px;
    background: #111;
    border-radius: 0 8px 8px 0;
  }
  .cover h1 { font-size: 22pt; font-weight: 700; color: #fff; margin: 0 0 10px; }
  .cover .meta { font-size: 9pt; color: #666; margin: 3px 0; }
  .cover .meta strong { color: #aaa; }

  .summary-bar {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 36px;
    padding: 16px 20px;
    background: #111;
    border: 1px solid #1f1f1f;
    border-radius: 8px;
  }
  .summary-pill {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 5px 12px;
    border-radius: 100px;
    font-size: 9pt;
    font-weight: 600;
  }

  .section-heading {
    font-size: 9pt;
    font-weight: 700;
    color: #444;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 32px 0 16px;
    font-family: 'JetBrains Mono', monospace;
  }

  .change-card {
    border-radius: 10px;
    padding: 20px 24px;
    margin-bottom: 16px;
    page-break-inside: avoid;
  }

  .change-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
  }

  .badge {
    font-size: 8pt;
    font-weight: 700;
    letter-spacing: 1px;
    padding: 3px 10px;
    border-radius: 100px;
    font-family: 'JetBrains Mono', monospace;
    flex-shrink: 0;
  }

  .section-title {
    font-size: 11pt;
    font-weight: 600;
    color: #fff;
  }

  .change-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .diff-block {
    padding: 12px 14px;
    border-radius: 6px;
  }
  .diff-block.before {
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.06);
  }
  .diff-block.after {
    background: rgba(16,185,129,0.04);
    border: 1px solid rgba(16,185,129,0.15);
  }

  .diff-label {
    font-size: 8.5pt;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 6px;
    font-family: 'JetBrains Mono', monospace;
  }
  .before .diff-label { color: #666; }
  .after .diff-label { color: #10b981; }

  .diff-text {
    font-size: 9.5pt;
    color: #aaa;
    line-height: 1.55;
  }
  .after .diff-text { color: #c0c0c0; }

  .note {
    grid-column: 1 / -1;
    background: rgba(251,191,36,0.05);
    border: 1px solid rgba(251,191,36,0.2);
    border-radius: 6px;
    padding: 10px 14px;
    font-size: 9pt;
    color: #aaa;
    line-height: 1.5;
    margin-top: 4px;
  }
  .note-icon {
    display: inline-block;
    background: rgba(251,191,36,0.15);
    color: #fbbf24;
    font-size: 8pt;
    font-weight: 700;
    padding: 1px 8px;
    border-radius: 4px;
    margin-right: 8px;
    font-family: 'JetBrains Mono', monospace;
    letter-spacing: 0.5px;
  }

  hr {
    border: none;
    border-top: 1px solid #1a1a1a;
    margin: 28px 0;
  }

  @page {
    size: A4;
    margin: 18mm 16mm 20mm;
    background: #0a0a0a;
  }
</style>
</head>
<body>

<div class="cover">
  <h1>Smart EPP — Implementation Changes</h1>
  <div class="meta"><strong>Source:</strong> tasks/smart-epp-audit.md &nbsp;·&nbsp; <strong>File modified:</strong> src/pages/SmartEPPCaseStudy.tsx</div>
  <div class="meta"><strong>Date:</strong> June 2026 &nbsp;·&nbsp; <strong>Total changes:</strong> ${changes.length} across ${Object.keys(statusCounts).length} types</div>
</div>

<div class="summary-bar">
  ${Object.entries(statusCounts).map(([status, count]) => {
    const s = statusColors[status];
    return `<div class="summary-pill" style="background:${s.badge}18;color:${s.badge};border:1px solid ${s.badge}33;">
      <span>${s.label}</span> <span style="opacity:0.6">×${count}</span>
    </div>`;
  }).join('')}
  <div style="margin-left:auto;font-size:9pt;color:#555;display:flex;align-items:center;">
    Sections: 12 → 9 &nbsp;·&nbsp; Dead buttons removed &nbsp;·&nbsp; AI disclosure removed
  </div>
</div>

<div class="section-heading">All Changes — Ordered by Page Position</div>

${changes.map((c, i) => renderChange(c, i)).join('')}

</body>
</html>`;

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setContent(html, { waitUntil: 'networkidle0' });
await page.pdf({
  path: join(__dirname, 'smart-epp-changes.pdf'),
  format: 'A4',
  printBackground: true,
  margin: { top: '18mm', right: '16mm', bottom: '20mm', left: '16mm' },
  displayHeaderFooter: true,
  headerTemplate: '<div style="font-size:7.5pt;color:#444;font-family:Inter,sans-serif;width:100%;text-align:center;padding-top:4px;">Smart EPP Case Study — Implementation Changes</div>',
  footerTemplate: '<div style="font-size:7.5pt;color:#444;font-family:Inter,sans-serif;width:100%;text-align:center;padding-bottom:4px;">Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>',
});
await browser.close();
console.log('PDF written to tasks/smart-epp-changes.pdf');
