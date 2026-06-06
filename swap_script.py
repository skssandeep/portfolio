import re

file_path = "src/pages/SmartEPPCaseStudy.tsx"
with open(file_path, "r") as f:
    lines = f.readlines()

top = lines[:1096]
final_solution = lines[1096:1544]
validation = lines[1544:1651]
bottom = lines[1651:]

# Update labels in Validation (06 -> 05)
for i in range(len(validation)):
    if "06. Validation" in validation[i]:
        validation[i] = validation[i].replace("06. Validation", "05. Validation")
    if "06: Validation" in validation[i]:
        validation[i] = validation[i].replace("06: Validation", "05: Validation")

# Update labels in Final Solution (05 -> 06)
for i in range(len(final_solution)):
    if "05. Final Solution" in final_solution[i]:
        final_solution[i] = final_solution[i].replace("05. Final Solution", "06. Final Solution")
    if "05: Final Solution" in final_solution[i]:
        final_solution[i] = final_solution[i].replace("05: Final Solution", "06: Final Solution")

new_lines = top + validation + final_solution + bottom

with open(file_path, "w") as f:
    f.writelines(new_lines)

print("Swapped sections successfully.")
