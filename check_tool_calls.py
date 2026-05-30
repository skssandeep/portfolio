import json

transcript_path = "/Users/sandeepkumarsingh/.gemini/antigravity/brain/8a2a9232-56d1-4806-a895-4f6b636a3bff/.system_generated/logs/transcript.jsonl"

with open(transcript_path, 'r') as f:
    for line in f:
        data = json.loads(line)
        if data.get('type') == 'PLANNER_RESPONSE':
            for tc in data.get('tool_calls', []):
                if tc.get('name') == 'write_to_file':
                    args = tc.get('args', {})
                    target = args.get('TargetFile', '')
                    if 'LogoReveal' in target:
                        content = args.get('CodeContent', '')
                        print(f"Found {target}, length: {len(content)}")
