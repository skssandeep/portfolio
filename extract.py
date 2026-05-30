import json

transcript_path = "/Users/sandeepkumarsingh/.gemini/antigravity/brain/8a2a9232-56d1-4806-a895-4f6b636a3bff/.system_generated/logs/transcript.jsonl"
ui_files = {}

with open(transcript_path, 'r') as f:
    for line in f:
        try:
            data = json.loads(line)
            if 'tool_calls' in data:
                for call in data['tool_calls']:
                    if call['name'] in ['write_to_file', 'multi_replace_file_content', 'replace_file_content']:
                        args = call.get('args', {})
                        file_path = args.get('TargetFile', '')
                        if 'src/components/ui' in file_path:
                            # For write_to_file, we get the whole CodeContent
                            if call['name'] == 'write_to_file':
                                ui_files[file_path] = args.get('CodeContent', '')
                            # For replace, we might just print that it was modified
                            else:
                                pass # We might need to handle this if they were modified
        except Exception as e:
            pass

for path, content in ui_files.items():
    print(f"FOUND: {path}")

import os
for path, content in ui_files.items():
    if content:
        os.makedirs(os.path.dirname(path), exist_ok=True)
        with open(path, 'w') as f:
            f.write(content)
        print(f"Restored {path}")
