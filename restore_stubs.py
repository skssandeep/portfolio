import os
import glob

ui_dir = "src/components/ui"
os.makedirs(ui_dir, exist_ok=True)

stubs = {
    "liquid-glass-button.tsx": """import React from 'react';
import { motion } from 'framer-motion';

export const LiquidButton = ({ children, size, className, style, ...props }: any) => {
  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full ${size === 'lg' ? 'px-8 py-4 text-lg' : 'px-6 py-3'} ${className || ''}`}
      style={{ ...style, position: 'relative' }}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};
""",
    "tube-cursor.tsx": """import React from 'react';
export default function TubeCursor() { return null; }
""",
    "hover-footer.tsx": """import React from 'react';
export const HoverFooter = () => <footer className="py-10 text-center text-white/50">Footer</footer>;
""",
    "cpu-architecture.tsx": """import React from 'react';
export const CpuArchitecture = () => <div>CPU Architecture</div>;
""",
    "AvatarDiamondSquare.tsx": """import React from 'react';
export const AvatarDiamondSquare = () => <div>Avatar</div>;
""",
    "GlitchOrbBackground.tsx": """import React from 'react';
export const GlitchOrbBackground = ({children}: any) => <div className="relative w-full h-full">{children}</div>;
""",
    "vector-pad.tsx": """import React from 'react';
export const VectorPad = () => <div>Vector Pad</div>;
""",
    "LogoReveal.tsx": """import React from 'react';
export const LogoReveal = () => <div>Logo Reveal</div>;
""",
    "LogoRevealGlitch.tsx": """import React from 'react';
export const LogoRevealGlitch = () => <div>Logo Reveal</div>;
""",
    "LogoRevealWind.tsx": """import React from 'react';
export const LogoRevealWind = () => <div>Logo Reveal</div>;
""",
    "LogoReveal3D.tsx": """import React from 'react';
export const LogoReveal3D = () => <div>Logo Reveal</div>;
""",
    "LogoRevealDune.tsx": """import React from 'react';
export const LogoRevealDune = () => <div>Logo Reveal</div>;
""",
    "LogoRevealMagnetic.tsx": """import React from 'react';
export const LogoRevealMagnetic = () => <div>Logo Reveal</div>;
""",
    "InfiniteCarousel.tsx": """import React from 'react';
export const InfiniteCarousel = () => <div>Carousel</div>;
""",
    "LogoRevealOrbit.tsx": """import React from 'react';
export const LogoRevealOrbit = () => <div>Logo Reveal</div>;
""",
    "LogoRevealStormEye.tsx": """import React from 'react';
export const LogoRevealStormEye = () => <div>Logo Reveal</div>;
""",
    "LogoRevealStormOrbit.tsx": """import React from 'react';
export const LogoRevealStormOrbit = () => <div>Logo Reveal</div>;
""",
    "LogoRevealStormSmooth.tsx": """import React from 'react';
export const LogoRevealStormSmooth = () => <div>Logo Reveal</div>;
""",
    "click-tooltip.tsx": """import React from 'react';
export const ClickTooltip = ({children}: any) => <div>{children}</div>;
""",
    "brand-cursor.tsx": """import React from 'react';
export const BrandCursor = () => null;
""",
    "Preloader.tsx": """import React from 'react';
export const Preloader = () => null;
""",
    "shader-background.tsx": """import React from 'react';
export const ShaderBackground = ({children}: any) => <div className="relative">{children}</div>;
""",
    "glass-button.tsx": """import React from 'react';
export const GlassButton = ({children, ...props}: any) => <button {...props}>{children}</button>;
""",
}

for name, content in stubs.items():
    filepath = os.path.join(ui_dir, name)
    with open(filepath, "w") as f:
        f.write(content)
    print(f"Stubbed {name}")

