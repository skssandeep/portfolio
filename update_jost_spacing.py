import re

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Find all style={{ ... }} blocks
    def replacer(match):
        style_content = match.group(1)
        # Check if it's a heading font
        if "fontFamily: 'var(--font-heading)'" in style_content:
            return match.group(0)
        
        # Check if it's uppercase styling with positive letter spacing
        if "textTransform: 'uppercase'" in style_content and re.search(r"letterSpacing:\s*'[^0-9-][^']*'", style_content):
           # it's usually '1px' or '2px'
           pass

        # We will replace all letterSpacing: '...' with letterSpacing: '0' for non-headings
        # Unless it's uppercase, then we probably want to keep the positive tracking.
        if "textTransform: 'uppercase'" not in style_content:
             style_content = re.sub(r"letterSpacing:\s*'[^']*',?\s*", "letterSpacing: '0', ", style_content)
        else:
             # If it's uppercase, we only touch negative tracking
             style_content = re.sub(r"letterSpacing:\s*'-[^']*',?\s*", "letterSpacing: '0', ", style_content)

        return "style={{" + style_content + "}}"

    new_content = re.sub(r"style={{(.*?)}}", replacer, content, flags=re.DOTALL)

    with open(filepath, 'w') as f:
        f.write(new_content)

process_file('src/pages/SmartEPPCaseStudy.tsx')
process_file('src/App.tsx')
