import re
import sys

def main():
    filepath = "src/pages/SmartEPPCaseStudy.tsx"
    with open(filepath, "r") as f:
        content = f.read()

    # We added:
    # 1. style={{ maxWidth: '1200px', margin: '0 auto' }} to plain containers
    # 2. maxWidth: '1200px', margin: '0 auto', to containers with existing styles

    # Revert 1
    content = content.replace('className="container" style={{ maxWidth: \'1200px\', margin: \'0 auto\' }}', 'className="container"')

    # Revert 2
    # Find all <div className="container" ... style={{ ... maxWidth: '1200px', margin: '0 auto', ...
    # Wait, my previous script literally did:
    # style={{ maxWidth: '1200px', margin: '0 auto', ...
    content = content.replace("style={{ maxWidth: '1200px', margin: '0 auto', ", "style={{ ")

    # There's also the chance it was added and it caused double spaces or something, let's just make sure.
    
    with open(filepath, "w") as f:
        f.write(content)
        
    print("Reverted container widths successfully.")

if __name__ == "__main__":
    main()
