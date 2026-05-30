import json
import os

transcript_path = "/Users/sandeepkumarsingh/.gemini/antigravity/brain/8a2a9232-56d1-4806-a895-4f6b636a3bff/.system_generated/logs/transcript.jsonl"
ui_files = {}

with open(transcript_path, 'r') as f:
    for line in f:
        try:
            data = json.loads(line)
            if 'tool_calls' in data:
                for call in data['tool_calls']:
                    if call['name'] == 'write_to_file':
                        args = call.get('args', {})
                        file_path = args.get('TargetFile', '')
                        if isinstance(file_path, str):
                            file_path = file_path.strip('"')
                        code_content = args.get('CodeContent', '')
                        
                        if isinstance(code_content, str):
                            if code_content.startswith('"') and code_content.endswith('"'):
                                try:
                                    # Handle double JSON encoding if present
                                    code_content = json.loads('{"c": ' + json.dumps(code_content) + '}')["c"]
                                    if code_content.startswith('"') and code_content.endswith('"'):
                                        code_content = json.loads(code_content)
                                except Exception as e:
                                    pass
                        
                        if 'src/components/ui' in file_path:
                            ui_files[file_path] = code_content
        except Exception as e:
            pass

for path, content in ui_files.items():
    if content:
        os.makedirs(os.path.dirname(path), exist_ok=True)
        with open(path, 'w') as f:
            f.write(content)
        print(f"Restored {path}")
