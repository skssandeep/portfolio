import re
import sys

def main():
    filepath = "src/pages/SmartEPPCaseStudy.tsx"
    with open(filepath, "r") as f:
        content = f.read()

    def replace_section_padding(match):
        full_match = match.group(0)
        style_start = match.start(1) - match.start(0)
        style_end = match.end(1) - match.start(0)
        style_content = match.group(1)
        
        new_style = style_content
        new_style = re.sub(r'paddingTop:\s*\'[^\']+\',?\s*', '', new_style)
        new_style = re.sub(r'paddingBottom:\s*\'[^\']+\',?\s*', '', new_style)
        new_style = re.sub(r'padding:\s*\'[^\']+\',?\s*', '', new_style)
        
        if "150px" in style_content and "var(--bg-color)" in style_content:
            # Hero section
            new_style = "paddingTop: '150px', paddingBottom: '120px', " + new_style
        else:
            new_style = "padding: '120px 0', " + new_style
            
        new_style = re.sub(r',\s*,', ',', new_style).strip(', ')
        
        return full_match[:style_start] + new_style + full_match[style_end:]

    content = re.sub(r'<section\s+(?:[^>]*?)style=\{\{\s*(.*?)\s*\}\}(?:[^>]*?)>', replace_section_padding, content)

    def replace_container(match):
        full_match = match.group(0)
        if "maxWidth" in full_match or "flexWrap" in full_match:
            # If it already has a maxWidth, or it's the hero container (flexWrap), leave it.
            return full_match
        
        # If it has a style tag, add maxWidth
        if "style={{" in full_match:
            return re.sub(r'style=\{\{\s*', "style={{ maxWidth: '1200px', margin: '0 auto', ", full_match)
        else:
            # Doesn't have style
            return full_match.replace('className="container"', 'className="container" style={{ maxWidth: \'1200px\', margin: \'0 auto\' }}')

    content = re.sub(r'<div\s+className="container"[^>]*>', replace_container, content)

    with open(filepath, "w") as f:
        f.write(content)
        
    print("Updated layout styles successfully.")

if __name__ == "__main__":
    main()
