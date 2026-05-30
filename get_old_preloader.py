import json

transcript_path = "/Users/sandeepkumarsingh/.gemini/antigravity/brain/8a2a9232-56d1-4806-a895-4f6b636a3bff/.system_generated/logs/transcript.jsonl"
preloader_code = ""

with open(transcript_path, 'r') as f:
    for line in f:
        try:
            step = json.loads(line)
            if 'tool_calls' in step:
                for tc in step['tool_calls']:
                    if tc['name'] == 'write_to_file' and 'Preloader.tsx' in tc['args'].get('TargetFile', ''):
                        preloader_code = tc['args'].get('CodeContent', '')
                    if tc['name'] == 'replace_file_content' and 'Preloader.tsx' in tc['args'].get('TargetFile', ''):
                        # print the replacement chunk so we can see what was done
                        print("REPLACEMENT:", tc['args'].get('ReplacementContent', '')[:200])
        except Exception as e:
            pass

print("FOUND PRELOADER CODE LENGTH:", len(preloader_code))
with open('old_preloader.txt', 'w') as out:
    out.write(preloader_code)
