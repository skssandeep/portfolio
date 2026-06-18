import sys

def main():
    filepath = "src/pages/SmartEPPCaseStudy.tsx"
    with open(filepath, "r") as f:
        lines = f.readlines()

    # We want to remove lines 1419 to 1469 (0-indexed 1418 to 1469)
    # Let's verify by checking if line 1419 is "      {/* 06.5. Ecosystem Scale */}"
    if "06.5. Ecosystem Scale" in lines[1418]:
        del lines[1418:1469]
        with open(filepath, "w") as f:
            f.writelines(lines)
        print("Section removed successfully.")
    else:
        print(f"Error: Line 1419 is {lines[1418]}")

if __name__ == "__main__":
    main()
