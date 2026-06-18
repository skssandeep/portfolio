import re

with open('/Users/sandeepkumarsingh/.gemini/antigravity/scratch/portfolio/src/pages/SmartEPPCaseStudy.tsx', 'r') as f:
    lines = f.readlines()

def get_block(start_str, end_str, start_line_hint=0):
    start_idx = -1
    for i in range(start_line_hint, len(lines)):
        if start_str in lines[i]:
            start_idx = i
            break
    if start_idx == -1: return None, -1, -1
    
    end_idx = -1
    for i in range(start_idx, len(lines)):
        if end_str in lines[i]:
            end_idx = i
            break
    if end_idx == -1: return None, -1, -1
    
    return lines[start_idx:end_idx+1], start_idx, end_idx

# We know the approximate lines:
# B (Research): 566 to 725 -> start_str = "02: Research", but let's use the section tag before it.
# Actually, it's easier to find the section comments.
# Wait, let's find the section tags based on line numbers we already confirmed.
# But line numbers might shift. Let's use unique strings.

# A: 0 to start of B
# B: "<section style={{ padding: '80px 0' }}>" that contains "02: Research"
# C: "<section style={{ padding: '80px 0', background: 'radial-gradient" that contains "03: Design Exploration"
# D: "<section style={{ padding: '80px 0' }}>" that contains "04: Ideation & Iteration"
# E: "<section style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>" that contains "05: Validation"
# F: "<section id=\"final-designs\"" to the end

sections = []
current_section = []
for line in lines:
    sections.append(line)

content = "".join(lines)

# Find B
b_start = content.find("      {/* Research Section */}")
b_end = content.find("      </section>", b_start) + len("      </section>\n")
B_block = content[b_start:b_end]

# Find C
c_start = content.find("      <section style={{ padding: '80px 0', background: 'radial-gradient(100% 100% at 50% 0%, rgba(20,20,22,1) 0%, rgba(10,10,10,1) 100%)'")
c_end = content.find("      </section>", c_start) + len("      </section>\n")
C_block = content[c_start:c_end]

# Find D
d_start = content.find("      <section style={{ padding: '80px 0' }}>", c_end)
d_end = content.find("      </section>", d_start) + len("      </section>\n")
D_block = content[d_start:d_end]

# Find E
e_start = content.find("      <section style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>", d_end)
e_end = content.find("      </section>", e_start) + len("      </section>\n")
E_block = content[e_start:e_end]

# A is everything before B
A_block = content[:b_start]

# F is everything after E
F_block = content[e_end:]

# Verify we got everything
print(f"A len: {len(A_block)}")
print(f"B len: {len(B_block)}")
print(f"C len: {len(C_block)}")
print(f"D len: {len(D_block)}")
print(f"E len: {len(E_block)}")
print(f"F len: {len(F_block)}")
print(f"Total original len: {len(content)}")
print(f"Total parts len: {len(A_block) + len(B_block) + len(C_block) + len(D_block) + len(E_block) + len(F_block)}")

# Rename section headers
C_block = C_block.replace("03: Design Exploration", "02: Design Strategy")
D_block = D_block.replace("04: Ideation & Iteration", "03: Ideation & Wireframing")
B_block = B_block.replace("02: Research", "04: Evaluative Research")
B_block = B_block.replace("Validating the prototype.", "Testing the Prototypes & Final Fixes.")
E_block = E_block.replace("05: Validation", "04b: A/B Testing")
F_block = F_block.replace("06: The Final Experience", "05: The Final Experience")

# Assemble in new order: A, C, D, B, E, F
new_content = A_block + C_block + D_block + B_block + E_block + F_block

with open('/Users/sandeepkumarsingh/.gemini/antigravity/scratch/portfolio/src/pages/SmartEPPCaseStudy.tsx', 'w') as f:
    f.write(new_content)

print("File updated successfully.")
