import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useMotionValue, useSpring } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export const LogoRevealCinematic = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const charRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const topTextRef = useRef<HTMLDivElement>(null);
  const bottomContentRef = useRef<HTMLDivElement>(null);

  // Spotlight mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Calculate mouse position relative to container
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
          scrub: 1, 
          pin: true,
          anticipatePin: 1
        }
      });

      // Eye pulse in
      tl.from(eye, {
        scale: 0.1,
        opacity: 0,
        rotation: -360,
        duration: 0.2
      }, 0);

      // Orbital animations
      chars.forEach((char, i) => {
        if (i === 6 || !char) return; 
        
        const charX = char.offsetLeft + char.offsetWidth / 2;
        const charY = char.offsetTop + char.offsetHeight / 2;
        
        const dx = eyeX - charX;
        const dy = eyeY - charY;
        
        const data = {
          progress: 0,
          startAngle: Math.random() * Math.PI * 2,
          startRadius: window.innerWidth * 0.4 
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
          ease: 'none',
          onUpdate: () => {
            const currentAngle = data.startAngle + data.progress * Math.PI * 3;
            const currentRadius = data.startRadius * (1 - Math.pow(data.progress, 1.4));
            
            const centerX = dx * (1 - data.progress);
            const centerY = dy * (1 - data.progress);
            
            gsap.set(char, {
              x: centerX + Math.cos(currentAngle) * currentRadius,
              y: centerY + Math.sin(currentAngle) * currentRadius,
              rotation: -(1 - data.progress) * 360,
              opacity: Math.min(1, data.progress * 1.5)
            });
          }
        }, 0);
      });

      // Fade in bottom content earlier in the scroll
      if (bottomContentRef.current) {
        tl.from(bottomContentRef.current, {
          opacity: 0,
          y: 40,
          scale: 0.95,
          duration: 0.3,
          ease: 'power3.out'
        }, "-=0.4");
      }

      // Add a 0.3s "dead zone" buffer at the end of the timeline.
      tl.to({}, { duration: 0.3 });
    });

    return () => ctx.revert();
  }, []);

  const text = "SANDSTORMIFY";

  return (
    <div className="w-full relative">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          20% { transform: translate(-15%, 5%); }
          30% { transform: translate(7%, -25%); }
          40% { transform: translate(-5%, 25%); }
          50% { transform: translate(-15%, 10%); }
          60% { transform: translate(15%, 0%); }
          70% { transform: translate(0%, 15%); }
          80% { transform: translate(3%, 35%); }
          90% { transform: translate(-10%, 10%); }
        }
        .grain-overlay {
          position: absolute;
          inset: -200%;
          width: 400%;
          height: 400%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.05;
          animation: grain 8s steps(10) infinite;
          pointer-events: none;
          z-index: 1;
        }
        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
          width: 100vw;
          position: absolute;
          top: 4vh;
          left: 0;
          z-index: 10;
        }
        .marquee-content {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />

      <section 
        ref={containerRef} 
        className="relative flex flex-col items-center justify-center w-full min-h-screen bg-[#000000] overflow-hidden gap-12"
      >
        {/* Grain Texture */}
        <div className="grain-overlay" />

        {/* Ambient Spotlight */}
        <motion.div 
          className="absolute z-0 rounded-full blur-[100px] pointer-events-none opacity-40 mix-blend-screen"
          style={{
            width: 600,
            height: 600,
            x: smoothX,
            y: smoothY,
            translateX: '-50%',
            translateY: '-50%',
            background: 'radial-gradient(circle, rgba(255,20,20,0.4) 0%, rgba(20,20,20,0) 70%)'
          }}
        />

        {/* Ticker Tape Top */}
        <div className="marquee-container">
          <div className="marquee-content text-[11px] sm:text-[13px] tracking-[0.5em] text-[#555] uppercase font-mono">
            {Array(10).fill("✦ LET'S BUILD SOMETHING EXTRAORDINARY ✦ YOUR BRAND, ELEVATED ").map((str, i) => (
              <span key={i} className="mx-4">{str}</span>
            ))}
          </div>
        </div>

        {/* Core Orbital Logo */}
        <div 
          className="flex text-white text-[8.5vw] sm:text-[6.5vw] tracking-tighter mix-blend-difference z-20 select-none font-normal mt-12"
          style={{ fontFamily: "'Dune Rise', var(--font-system)" }}
        >
          {text.split('').map((char, i) => (
            <span 
              key={i} 
              ref={el => { charRefs.current[i] = el; }}
              className="inline-block origin-center"
              style={{ 
                color: i === 6 ? '#ff2a2a' : '#ffffff', // Brighter red for cinematic pop
                textTransform: i === 6 ? 'lowercase' : 'uppercase',
                textShadow: i === 6 ? '0 0 20px rgba(255,0,0,0.5)' : 'none'
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

        {/* Bottom content: Mega Typography & Button */}
        <div 
          ref={bottomContentRef}
          className="z-20 flex flex-col items-center gap-12 mt-[4vh] w-full px-6"
        >
          <div className="flex flex-col items-center text-center">
            <h2 className="text-[32px] sm:text-[48px] md:text-[64px] font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-[#666] max-w-[800px]">
              Ready to level up <br className="hidden sm:block" /> with Sandstormify?
            </h2>
          </div>

          <button 
            className="group relative rounded-full overflow-hidden cursor-pointer bg-white text-black font-bold tracking-wide transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)] whitespace-nowrap flex items-center justify-center mx-auto"
            style={{ padding: '20px 48px', minWidth: '320px', fontSize: '15px' }}
            onClick={() => window.open('https://cal.com/sandeepks/15min', '_blank')}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff0000] to-[#ff5555] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-500" style={{ letterSpacing: '0.05em' }}>
              CLICK TO SUPERCHARGE YOUR BRAND!
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};
