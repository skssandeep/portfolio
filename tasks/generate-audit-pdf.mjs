import puppeteer from '/Users/sandeepkumarsingh/node_modules/puppeteer/lib/cjs/puppeteer/puppeteer.js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const md = readFileSync(join(__dirname, 'smart-epp-audit.md'), 'utf8');

// Minimal markdown → HTML (handles what's in this doc)
function mdToHtml(text) {
  return text
    // Headings
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Code blocks
    .replace(/```[\w]*\n([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
    // Tables — collect full table blocks first
    .replace(/(\|.+\|\n)+/g, (table) => {
      const rows = table.trim().split('\n');
      let html = '<table>';
      rows.forEach((row, i) => {
        if (/^\|[\s-]+\|/.test(row)) return; // separator row
        const cells = row.replace(/^\||\|$/g, '').split('|').map(c => c.trim());
        const tag = i === 0 ? 'th' : 'td';
        html += `<tr>${cells.map(c => `<${tag}>${c}</${tag}>`).join('')}</tr>`;
      });
      html += '</table>';
      return html;
    })
    // Horizontal rule
    .replace(/^---$/gm, '<hr>')
    // Unordered lists
    .replace(/((?:^- .+\n?)+)/gm, (block) => {
      const items = block.trim().split('\n').map(l => `<li>${l.replace(/^- /, '')}</li>`).join('');
      return `<ul>${items}</ul>`;
    })
    // Ordered lists
    .replace(/((?:^\d+\. .+\n?)+)/gm, (block) => {
      const items = block.trim().split('\n').map(l => `<li>${l.replace(/^\d+\. /, '')}</li>`).join('');
      return `<ol>${items}</ol>`;
    })
    // Blockquote (metadata lines at top)
    .replace(/^\*\*(.+?)\*\* (.+)$/gm, '<p class="meta"><strong>$1</strong> $2</p>')
    // Paragraphs — wrap bare lines
    .split('\n\n')
    .map(block => {
      const trimmed = block.trim();
      if (!trimmed) return '';
      if (/^<(h[1-6]|ul|ol|table|pre|hr|p class)/.test(trimmed)) return trimmed;
      return `<p>${trimmed.replace(/\n/g, ' ')}</p>`;
    })
    .join('\n');
}

const body = mdToHtml(md);

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Inter', -apple-system, sans-serif;
    font-size: 10.5pt;
    line-height: 1.65;
    color: #1a1a1a;
    background: #fff;
    padding: 48px 56px;
    max-width: 860px;
    margin: 0 auto;
  }

  /* Cover block */
  .cover {
    border-left: 4px solid #E63946;
    padding: 20px 24px;
    margin-bottom: 40px;
    background: #fafafa;
  }
  .cover h1 {
    font-size: 20pt;
    font-weight: 700;
    color: #0d0d0d;
    border: none;
    margin: 0 0 8px;
    padding: 0;
  }
  .cover .meta {
    font-size: 9pt;
    color: #666;
    margin: 3px 0;
    background: none;
    padding: 0;
    border: none;
  }
  .cover .meta strong { color: #333; }

  h1 {
    font-size: 18pt;
    font-weight: 700;
    color: #0d0d0d;
    margin: 32px 0 12px;
    padding-bottom: 6px;
    border-bottom: 2px solid #E63946;
  }

  h2 {
    font-size: 13pt;
    font-weight: 600;
    color: #0d0d0d;
    margin: 28px 0 8px;
    padding: 6px 12px;
    background: #f4f4f4;
    border-left: 3px solid #E63946;
  }

  h3 {
    font-size: 10.5pt;
    font-weight: 600;
    color: #333;
    margin: 18px 0 6px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  p { margin: 0 0 10px; }

  p.meta {
    font-size: 9pt;
    color: #555;
    background: #f9f9f9;
    border-left: 2px solid #ddd;
    padding: 4px 10px;
    margin: 6px 0;
  }

  strong { color: #111; }

  em { color: #444; font-style: italic; }

  code {
    font-family: 'JetBrains Mono', monospace;
    font-size: 8.5pt;
    background: #f0f0f0;
    padding: 1px 5px;
    border-radius: 3px;
    color: #c0392b;
  }

  pre {
    background: #1a1a2e;
    color: #e0e0e0;
    font-family: 'JetBrains Mono', monospace;
    font-size: 8.5pt;
    padding: 14px 16px;
    border-radius: 6px;
    margin: 12px 0;
    white-space: pre-wrap;
    line-height: 1.5;
  }
  pre code { background: none; color: inherit; padding: 0; }

  ul, ol {
    margin: 8px 0 12px 22px;
    padding: 0;
  }
  li { margin-bottom: 4px; }

  hr {
    border: none;
    border-top: 1px solid #e0e0e0;
    margin: 28px 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 9pt;
    margin: 14px 0;
  }
  th {
    background: #1a1a1a;
    color: #fff;
    font-weight: 600;
    padding: 8px 10px;
    text-align: left;
  }
  td {
    padding: 7px 10px;
    border-bottom: 1px solid #e8e8e8;
    vertical-align: top;
  }
  tr:nth-child(even) td { background: #f9f9f9; }

  /* Section status badges */
  h2 strong { font-weight: 700; }

  /* Page breaks */
  h1 { page-break-before: auto; }
  h2 { page-break-after: avoid; }
  h3 { page-break-after: avoid; }
  table { page-break-inside: avoid; }

  @page {
    size: A4;
    margin: 20mm 18mm 22mm;
  }

  /* Footer via CSS counter */
  @page {
    @bottom-center {
      content: "Smart EPP Audit Report · Page " counter(page) " of " counter(pages);
      font-size: 8pt;
      color: #999;
      font-family: 'Inter', sans-serif;
    }
  }
</style>
</head>
<body>
${body}
</body>
</html>`;

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setContent(html, { waitUntil: 'networkidle0' });
await page.pdf({
  path: join(__dirname, 'smart-epp-audit.pdf'),
  format: 'A4',
  printBackground: true,
  margin: { top: '20mm', right: '18mm', bottom: '22mm', left: '18mm' },
  displayHeaderFooter: true,
  headerTemplate: '<div style="font-size:8pt;color:#999;font-family:Inter,sans-serif;width:100%;text-align:center;padding-top:4px;">Smart EPP Case Study — Full Audit Report</div>',
  footerTemplate: '<div style="font-size:8pt;color:#999;font-family:Inter,sans-serif;width:100%;text-align:center;padding-bottom:4px;">Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>',
});
await browser.close();
console.log('PDF written to tasks/smart-epp-audit.pdf');
