import os
import re

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # We need to parse tags to see if they are h1, h2, h3.
    # Since regexing HTML tags with their attributes can be messy,
    # let's try a simpler approach:
    # Find all style={{ ... }}
    # Check what tag it belongs to.
    # Actually, let's just do the same as before, but exclude lines that contain "<h1", "<h2", "<h3".
    
    lines = content.split('\n')
    new_lines = []
    for line in lines:
        if "style={{" in line and "letterSpacing:" in line:
            # Check if it's a heading tag
            if re.search(r'<(h1|h2|h3)\b', line) or "fontFamily: 'var(--font-heading)'" in line:
                new_lines.append(line)
                continue
                
            # Check if it's uppercase styling
            if "textTransform: 'uppercase'" in line:
                # Still replace negative tracking
                line = re.sub(r"letterSpacing:\s*'-[^']*',?\s*", "letterSpacing: '0', ", line)
                new_lines.append(line)
                continue
                
            # Otherwise, replace letterSpacing with 0
            line = re.sub(r"letterSpacing:\s*'[^']*',?\s*", "letterSpacing: '0', ", line)
            new_lines.append(line)
        else:
            new_lines.append(line)

    new_content = '\n'.join(new_lines)

    if content != new_content:
        with open(filepath, 'w') as f:
            f.write(new_content)

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.jsx'):
            process_file(os.path.join(root, file))

