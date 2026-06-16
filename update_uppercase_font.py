import re

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    def replacer(match):
        style_content = match.group(1)
        
        # If it has uppercase, we ensure it uses var(--font-heading)
        if "textTransform: 'uppercase'" in style_content:
            # Remove any existing font family
            style_content = re.sub(r"fontFamily:\s*['\"][^'\"]*['\"],?\s*", "", style_content)
            
            # Add var(--font-heading)
            # Find the end of the style block or just prepend it
            style_content = "fontFamily: 'var(--font-heading)', " + style_content.strip()
            
        return "style={{" + style_content + "}}"

    new_content = re.sub(r"style={{(.*?)}}", replacer, content, flags=re.DOTALL)

    with open(filepath, 'w') as f:
        f.write(new_content)

process_file('src/pages/SmartEPPCaseStudy.tsx')
