import re

filepath = 'src/pages/SmartEPPCaseStudy.tsx'
with open(filepath, 'r') as f:
    content = f.read()

# Replace trailing quote right before }}
content = content.replace('\'"}}', '\'}}')

with open(filepath, 'w') as f:
    f.write(content)

