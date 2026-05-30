import os
import glob

ui_dir = "src/components/ui"

stubs = {
    "hover-footer.tsx": """import React from 'react';
export const HoverFooter = () => <footer className="py-10 text-center text-white/50">Footer</footer>;
export const FooterBackgroundGradient = ({children}: any) => <div>{children}</div>;
export const TextHoverEffect = ({text}: any) => <span>{text}</span>;
""",
    "tube-cursor.tsx": """import React from 'react';
export const TubesCursor = () => null;
export default TubesCursor;
""",
    "vector-pad.tsx": """import React from 'react';
export const VectorPad = () => <div>Vector Pad</div>;
export default VectorPad;
""",
    "cpu-architecture.tsx": """import React from 'react';
export const CpuArchitecture = (props: any) => <div>CPU Architecture</div>;
""",
    "AvatarDiamondSquare.tsx": """import React from 'react';
export const AvatarDiamondSquare = (props: any) => <div>Avatar</div>;
""",
}

for name, content in stubs.items():
    filepath = os.path.join(ui_dir, name)
    with open(filepath, "w") as f:
        f.write(content)

