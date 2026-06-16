import os
import re

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # We want to remove letterSpacing: '...' from inline styles if it's not a heading.
    # Actually, a simpler way is to just find all `letterSpacing: '[^']*',?` and remove them,
    # except when they are right next to `fontFamily: 'var(--font-heading)'`.
    # Let's just remove ALL `letterSpacing: '[^']*'` that are negative or generic.
    # Wait, the user said "Make the Jost typeface letter spacing to 0% on the whole site".
    # I will replace `letterSpacing: '-0.02em'` etc with nothing.
    
    # Let's replace letter-spacing in index.css
    if filepath.endswith('.css'):
        content = re.sub(r'letter-spacing:\s*-?[\d\.]+e?m;?', 'letter-spacing: 0;', content)
    elif filepath.endswith('.tsx') or filepath.endswith('.jsx'):
        # For inline styles, replace letterSpacing: '...' with nothing, unless it's a Syne heading.
        # It might be easier to just regex out letterSpacing: '...' everywhere and then manually check.
        # Let's just remove it everywhere that looks like Jost.
        pass

    with open(filepath, 'w') as f:
        f.write(content)

process_file('src/index.css')
