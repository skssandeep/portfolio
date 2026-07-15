import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const LogoRevealOrbital2 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const charRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const hudRef = useRef<HTMLDivElement>(null);
  const bottomContentRef = useRef<HTMLDivElement>(null);
  const topContentRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

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
          end: '+=250%', // Increased scroll duration slightly to give more room for the tilt
          scrub: 1.5,
          pin: true,
          anticipatePin: 1
        }
      });

      // Initialize the 3D tilt
      if (textContainerRef.current) {
        gsap.set(textContainerRef.current, {
          rotateX: 60,
          scaleY: 1.5
        });
      }

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

      // Tilt the text container up to face the camera smoothly
      if (textContainerRef.current) {
        tl.to(textContainerRef.current, {
          rotateX: 0,
          scaleY: 1,
          duration: 0.6,
          ease: 'power2.inOut'
        }, 0.6); // Start tilting slightly past the halfway point of the orbit
      }

      if (hudRef.current && bottomContentRef.current && topContentRef.current) {
        tl.from([hudRef.current, bottomContentRef.current, topContentRef.current], {
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

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const text = "SANDSTORMIFY";

  return (
    <div className="w-full relative">
      <section 
        ref={containerRef} 
        className="relative flex flex-col items-center justify-center w-full min-h-screen bg-transparent overflow-hidden"
      >
        {/* Deep Space Background Glow */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,0,0.08)_0%,transparent_60%)] pointer-events-none" />
        
        {/* HUD Elements - Design Engineering Theme */}
        <div ref={hudRef} className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-6 sm:p-10" style={{ display: isMobile ? 'none' : undefined }}>
          <div className="flex justify-between w-full">
            {/* Top Left: Layout & Structural Metrics */}
            <div 
              className="text-white/40 font-mono text-[9px] sm:text-[11px] tracking-[0.2em] leading-loose flex flex-col gap-1.5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <div className="flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                APPROACH: USER_FIRST
              </div>
              <div className="flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M3 12h18"></path><path d="M12 3v18"></path></svg>
                DESIGN: INCLUSIVE
              </div>
              <div className="flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>
                LAYOUT: RESPONSIVE
              </div>
            </div>
            {/* Top Right: Typographic & Render Specs */}
            <div 
              className="text-white/40 font-mono text-[9px] sm:text-[11px] tracking-[0.2em] text-right leading-loose flex flex-col items-end gap-1.5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <div className="flex items-center gap-2">
                TYPOGRAPHY: SYNE
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>
              </div>
              <div className="flex items-center gap-2">
                COLORS: ACCESSIBLE
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2v20"></path></svg>
              </div>
              <div className="flex items-center gap-2">
                STATE: INTERACTIVE
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end w-full">
            <div />
            <div className="text-white/40 font-mono text-xs">
              <svg className="w-8 h-8 animate-[spin_8s_linear_infinite]" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="60 140" opacity="0.5" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="20 40" opacity="0.3" />
                <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.8" />
              </svg>
            </div>
          </div>
        </div>

        {/* Main Content Stack (Automatically balances Logo and CTA) */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full mt-[-5vh]">
          
          {/* Top Text */}
          <div 
            ref={topContentRef}
            className="relative mb-2 sm:mb-4 flex flex-col items-center w-full px-4 z-30"
          >
            <h2 
              className="font-medium leading-tight text-center text-white opacity-90 tracking-tight drop-shadow-xl" 
              style={{ 
                fontFamily: "'Syne', sans-serif",
                fontSize: isMobile ? '24px' : 'clamp(32px, 4vw, 48px)',
                lineHeight: isMobile ? 1.4 : undefined,
                marginBottom: isMobile ? '32px' : undefined
              }}
            >
              Ready to build world-class products with
            </h2>
          </div>

          {/* Logo & Rings Wrapper */}
          <div 
            className="relative w-full flex items-center justify-center"
            style={{ perspective: '1000px' }}
          >
            {/* Orbital Rings Background (Anchored to the logo center) */}
            <div 
              className="absolute top-1/2 left-1/2 flex items-center justify-center pointer-events-none opacity-30 z-0" 
              style={{ transform: 'translate(-50%, -50%) rotateX(65deg) scale(1.2)' }}
            >
              <div className="absolute rounded-full border border-red-500/20 animate-[spin_60s_linear_infinite]" style={{ width: isMobile ? '80vw' : '65vw', height: isMobile ? '80vw' : '65vw' }} />
              <div className="absolute rounded-full border border-red-500/30 border-dashed animate-[spin_40s_linear_infinite_reverse]" style={{ width: isMobile ? '60vw' : '45vw', height: isMobile ? '60vw' : '45vw' }} />
              <div className="absolute rounded-full border border-red-400/40 animate-[spin_20s_linear_infinite]" style={{ width: isMobile ? '40vw' : '25vw', height: isMobile ? '40vw' : '25vw' }} />
            </div>

            {/* 3D Tilted Text Container */}
            <div 
              ref={textContainerRef}
              className="relative z-20 flex text-white tracking-tighter select-none font-normal drop-shadow-[0_0_15px_rgba(255,0,0,0.3)]"
              style={{ 
                fontSize: isMobile ? '7.5vw' : 'clamp(48px, 6vw, 96px)',
                fontFamily: "'Dune Rise', var(--font-system)",
                transformStyle: 'preserve-3d'
              }}
            >
              {text.split('').map((char, i) => (
                <span 
                  key={i} 
                  ref={el => { charRefs.current[i] = el; }}
                  className="inline-block origin-center"
                  style={{ 
                    color: i === 6 ? 'var(--accent-color)' : undefined,
                    textShadow: i === 6 ? '0 0 40px rgba(255, 0, 0, 1), 0 0 80px rgba(255, 0, 0, 0.8)' : undefined,
                    textTransform: i === 6 ? 'lowercase' : 'uppercase',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {i === 6 ? (
                    <span style={{ display: 'inline-block', transform: 'scale(1.15)', margin: '0 0.5vw' }}>
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
            className="relative flex flex-col items-center w-full px-4 z-30"
            style={{ 
              marginTop: 'clamp(2rem, 4vw, 3.5rem)',
              padding: isMobile ? '0 16px' : undefined 
            }}
          >
            <button 
              className="rounded-full bg-white text-black font-bold tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] cursor-pointer whitespace-nowrap inline-flex items-center justify-center"
              style={{ 
                padding: isMobile ? '16px 32px' : '24px 80px', 
                width: isMobile ? '100%' : undefined,
                minWidth: isMobile ? 'auto' : '320px', 
                minHeight: isMobile ? '56px' : '64px', 
                fontSize: isMobile ? '14px' : '20px', 
                fontFamily: "'Syne', sans-serif", 
                letterSpacing: '2px' 
              }}
              data-cal-link="sandeepks/15min" data-cal-config='{"layout":"month_view"}'
            >
              BOOK AN INTRO CALL
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
