import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const LogoRevealOrbital = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const charRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const hudRef = useRef<HTMLDivElement>(null);
  const bottomContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const chars = charRefs.current;
    const eye = chars[6]; // The 'o'
    if (!eye) return;

    const ctx = gsap.context(() => {
      const eyeX = eye.offsetLeft + eye.offsetWidth / 2;
      const eyeY = eye.offsetTop + eye.offsetHeight / 2;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%',
          scrub: 1.5,
          pin: true,
          anticipatePin: 1
        }
      });

      // Central core pulse
      tl.from(eye, {
        scale: 0.1,
        opacity: 0,
        rotation: -360,
        duration: 0.2
      }, 0);

      chars.forEach((char, i) => {
        if (i === 6 || !char) return;
        
        const charX = char.offsetLeft + char.offsetWidth / 2;
        const charY = char.offsetTop + char.offsetHeight / 2;
        
        const dx = eyeX - charX;
        const dy = eyeY - charY;
        
        const data = {
          progress: 0,
          startAngle: Math.random() * Math.PI * 2,
          startRadius: window.innerWidth * 0.5 
        };

        const initialAngle = data.startAngle;
        const initialRadius = data.startRadius;
        gsap.set(char, {
          x: dx + Math.cos(initialAngle) * initialRadius,
          y: dy + Math.sin(initialAngle) * initialRadius,
          rotation: -720,
          opacity: 0
        });

        tl.to(data, {
          progress: 1,
          duration: 1,
          ease: 'power1.inOut',
          onUpdate: () => {
            const currentAngle = data.startAngle + data.progress * Math.PI * 4;
            const currentRadius = data.startRadius * (1 - Math.pow(data.progress, 1.2));
            
            const centerX = dx * (1 - data.progress);
            const centerY = dy * (1 - data.progress);
            
            gsap.set(char, {
              x: centerX + Math.cos(currentAngle) * currentRadius,
              y: centerY + Math.sin(currentAngle) * currentRadius,
              rotation: -(1 - data.progress) * 360,
              opacity: Math.min(1, data.progress * 2)
            });
          }
        }, 0);
      });

      if (hudRef.current && bottomContentRef.current) {
        tl.from([hudRef.current, bottomContentRef.current], {
          opacity: 0,
          scale: 0.9,
          duration: 0.2,
          ease: 'power2.out'
        }, "-=0.2");
      }

      tl.to({}, { duration: 0.3 });
    });

    return () => ctx.revert();
  }, []);

  const text = "SANDSTORMIFY";

  return (
    <div className="w-full relative">
      <section 
        ref={containerRef} 
        className="relative flex flex-col items-center justify-center w-full min-h-screen bg-[#020205] overflow-hidden"
      >
        {/* Deep Space Background Glow */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,100,255,0.05)_0%,rgba(0,0,0,1)_70%)] pointer-events-none" />
        
        {/* Orbital Rings Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30 z-0" style={{ transform: 'rotateX(65deg) scale(1.5)' }}>
          <div className="absolute w-[80vw] h-[80vw] rounded-full border border-blue-500/20 animate-[spin_60s_linear_infinite]" />
          <div className="absolute w-[60vw] h-[60vw] rounded-full border border-blue-400/30 border-dashed animate-[spin_40s_linear_infinite_reverse]" />
          <div className="absolute w-[40vw] h-[40vw] rounded-full border border-cyan-300/40 animate-[spin_20s_linear_infinite]" />
        </div>

        {/* HUD Elements */}
        <div ref={hudRef} className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-8">
          <div className="flex justify-between items-start w-full">
            <div className="text-cyan-500/50 font-mono text-[10px] sm:text-xs">
              SYS.SEC: ONLINE<br/>
              ORBITAL: LOCKED<br/>
              INIT: SEQUENCING...
            </div>
            <div className="text-cyan-500/50 font-mono text-[10px] sm:text-xs text-right">
              LAT: 45.9281<br/>
              LNG: -12.9814<br/>
              TARGET: ACQUIRED
            </div>
          </div>
          <div className="flex justify-between items-end w-full">
            <div className="w-32 h-[1px] bg-cyan-500/30 relative">
              <div className="absolute left-0 top-0 h-[3px] w-2 bg-cyan-400 -translate-y-[1px]" />
            </div>
            <div className="w-32 h-[1px] bg-cyan-500/30 relative">
              <div className="absolute right-0 top-0 h-[3px] w-2 bg-cyan-400 -translate-y-[1px]" />
            </div>
          </div>
        </div>

        {/* 3D Tilted Text Container */}
        <div 
          className="relative z-20 w-full flex items-center justify-center"
          style={{ perspective: '1000px' }}
        >
          <div 
            className="flex text-cyan-100 text-[10vw] sm:text-[8vw] tracking-tighter select-none font-normal drop-shadow-[0_0_15px_rgba(0,255,255,0.3)]"
            style={{ 
              fontFamily: "'Dune Rise', var(--font-system)",
              transform: 'rotateX(60deg) scaleY(1.5)', // Tilting into 3D space
              transformStyle: 'preserve-3d'
            }}
          >
            {text.split('').map((char, i) => (
              <span 
                key={i} 
                ref={el => { charRefs.current[i] = el; }}
                className="inline-block origin-center"
                style={{ 
                  color: i === 6 ? '#00ffff' : undefined,
                  textShadow: i === 6 ? '0 0 40px rgba(0, 255, 255, 1), 0 0 80px rgba(0, 255, 255, 0.8)' : undefined,
                  textTransform: i === 6 ? 'lowercase' : 'uppercase',
                  transformStyle: 'preserve-3d'
                }}
              >
                {i === 6 ? (
                  <span style={{ display: 'inline-block', transform: 'scale(1)', margin: '0 0.5vw' }}>
                    {char}
                  </span>
                ) : char}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div 
          ref={bottomContentRef}
          className="z-30 absolute bottom-[10vh] flex flex-col items-center gap-8"
        >
          <div className="flex items-center gap-4 text-cyan-400/80 font-mono text-[11px] sm:text-[13px] tracking-[0.2em] uppercase">
            <span className="w-8 h-[1px] bg-cyan-400/50" />
            Launch Protocol Initiated
            <span className="w-8 h-[1px] bg-cyan-400/50" />
          </div>

          <button 
            className="group relative overflow-hidden cursor-pointer bg-transparent border border-cyan-500/50 text-cyan-300 font-mono font-bold tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,255,255,0.1)] hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] hover:bg-cyan-950/50 whitespace-nowrap flex items-center justify-center mx-auto"
            style={{ padding: '20px 48px', minWidth: '320px', fontSize: '13px' }}
            onClick={() => window.open('https://cal.com/sandeepks/15min', '_blank')}
          >
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(0,255,255,0.2),transparent)] -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
            <span className="relative z-10 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              INITIATE SEQUENCE
            </span>
            {/* Corner brackets for HUD feel */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-400" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-400" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400" />
          </button>
        </div>
      </section>
    </div>
  );
};
