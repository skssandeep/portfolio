import glob
import json
import os

for filepath in glob.glob("src/components/ui/*.tsx"):
    with open(filepath, "r") as f:
        content = f.read()
    
    # If the file starts with a quote, it's likely a JSON encoded string
    if content.startswith('"') and content.endswith('"\n'):
        # Just in case there is a trailing newline added by echo/print
        content = content.strip()
        
    if content.startswith('"') and content.endswith('"'):
        try:
            # Parse it as a JSON string
            decoded = json.loads(content)
            with open(filepath, "w") as f:
                f.write(decoded)
            print(f"Fixed {filepath}")
        except json.JSONDecodeError as e:
            print(f"Failed to decode {filepath}: {e}")
            pass

