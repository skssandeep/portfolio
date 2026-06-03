const fs = require('fs');
let content = fs.readFileSync('src/pages/SmartEPPCaseStudy.tsx', 'utf8');

// 1. Update ecosystemImages
content = content.replace(
  /const ecosystemImages = \[[\s\S]*?\];/,
  `const ecosystemImages = [
    "/images/EPP - 01.jpg",
    "/images/EPP - 02.jpg",
    "/images/EPP - 03.jpg",
    "/images/EPP - 04.jpg"
  ];`
);

// 2. Extract the Visual Ecosystem JSX block (Lines ~1805 to ~1923)
const ecosystemStart = content.indexOf('<div style={{ textAlign: \'center\', marginBottom: \'80px\' }}>');
const ecosystemEnd = content.indexOf('<div style={{ textAlign: \'center\', marginBottom: \'48px\' }}>');
const ecosystemBlock = content.substring(ecosystemStart, ecosystemEnd);

// Remove it from its original location
content = content.replace(ecosystemBlock, '');

// 3. Replace the "05. Final Solution" block (Lines ~1062 to ~1150)
const section5Start = content.indexOf('{/* 05. Final Solution: The product, screen by screen */}');
const section5End = content.indexOf('{/* Divider */}');
const section5Block = content.substring(section5Start, section5End);

const newSection5 = `{/* 05. Final Solution: The Visual Ecosystem */}
      <section style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          ${ecosystemBlock}
        </div>
      </section>

      `;

content = content.replace(section5Block, newSection5);

fs.writeFileSync('src/pages/SmartEPPCaseStudy.tsx', content);
console.log("Successfully swapped!");
