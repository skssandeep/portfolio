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

if (ecosystemStart === -1 || ecosystemEnd === -1) {
    console.error("Could not find ecosystem boundaries");
    process.exit(1);
}

const ecosystemBlock = content.substring(ecosystemStart, ecosystemEnd);

// Remove it from its original location using split/join to avoid regex replace issues
content = content.split(ecosystemBlock).join('');

// 3. Replace the "05. Final Solution" block (Lines ~1062 to ~1150)
const section5Start = content.indexOf('{/* 05. Final Solution: The product, screen by screen */}');
const section5End = content.indexOf('{/* Divider */}');

if (section5Start === -1 || section5End === -1) {
    console.error("Could not find section 5 boundaries");
    process.exit(1);
}

const section5Block = content.substring(section5Start, section5End);

const newSection5 = `{/* 05. Final Solution: The Visual Ecosystem */}
      <section style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          ${ecosystemBlock}
        </div>
      </section>

      `;

content = content.split(section5Block).join(newSection5);

fs.writeFileSync('src/pages/SmartEPPCaseStudy.tsx', content);
console.log("Successfully swapped!");
