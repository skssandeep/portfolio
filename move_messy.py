with open("src/pages/SmartEPPCaseStudy.tsx", "r") as f:
    lines = f.readlines()

messy_middle = lines[2040:2119]

del lines[2040:2119]
lines = lines[:1115] + messy_middle + lines[1115:]

with open("src/pages/SmartEPPCaseStudy.tsx", "w") as f:
    f.writelines(lines)

print("Moved Messy Middle successfully.")
