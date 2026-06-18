import os

filepath = '/Users/sandeepkumarsingh/.gemini/antigravity/scratch/portfolio/src/pages/SmartEPPCaseStudy.tsx'

with open(filepath, 'r') as f:
    lines = f.readlines()

ranges_to_delete = [
    (6, 132),      # SmartEPPPrototype component
    (363, 470),    # Out-of-the-box Hero Section Draft
    (478, 490),    # Pre-header Pill Draft
    (1814, 2029)   # Breakdown of Solution, Discovery & Insights, Final Design Prototype Drafts
]

# Convert to 0-indexed set of line numbers to delete
lines_to_delete = set()
for start, end in ranges_to_delete:
    for i in range(start - 1, end):
        lines_to_delete.add(i)

new_lines = []
for i, line in enumerate(lines):
    if i not in lines_to_delete:
        new_lines.append(line)

with open(filepath, 'w') as f:
    f.writelines(new_lines)

print(f"Deleted {len(lines_to_delete)} lines from {filepath}")
