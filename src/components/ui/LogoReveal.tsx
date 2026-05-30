import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const LogoReveal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const charRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;
    const chars = charRefs.current;
    const eye = chars[6]; // The 'o'
    if (!eye) return;

    const ctx = gsap.context(() => {
      // Get the relative center of the eye
      const eyeX = eye.offsetLeft + eye.offsetWidth / 2;
      const eyeY = eye.offsetTop + eye.offsetHeight / 2;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=150%', // Pin for 1.5x viewport height to scrub the animation
          scrub: 1, // Smooth scrubbing
          pin: true,
          anticipatePin: 1
        }
      });

      // Animate the eye (pulse in)
      tl.from(eye, {
        scale: 0.1,
        opacity: 0,
        rotation: 360,
        duration: 0.1
      }, 0);

      // Animate all other characters
      chars.forEach((char, i) => {
        if (i === 6 || !char) return; // Skip eye and nulls
        
        const charX = char.offsetLeft + char.offsetWidth / 2;
        const charY = char.offsetTop + char.offsetHeight / 2;
        
        // Vector from char's natural position to the eye
        const dx = eyeX - charX;
        const dy = eyeY - charY;
        
        // Animation state object for GSAP to tween
        const data = {
          progress: 0,
          startAngle: Math.random() * Math.PI * 2,
          startRadius: window.innerWidth * 0.3 + Math.random() * window.innerWidth * 0.2 // Start wide
        };

        tl.to(data, {
          progress: 1,
          duration: 1,
          ease: 'power2.inOut',
          onUpdate: () => {
            // Angle spins rapidly then slows down
            const currentAngle = data.startAngle + data.progress * Math.PI * 4;
            // Radius shrinks as progress goes to 1
            const currentRadius = data.startRadius * (1 - Math.pow(data.progress, 1.5));
            
            // Center of the swirl moves from the eye (dx, dy) to natural position (0, 0)
            const centerX = dx * (1 - data.progress);
            const centerY = dy * (1 - data.progress);
            
            gsap.set(char, {
              x: centerX + Math.cos(currentAngle) * currentRadius,
              y: centerY + Math.sin(currentAngle) * currentRadius,
              rotation: (1 - data.progress) * 360,
              opacity: data.progress
            });
          }
        }, 0);
      });
    });

    return () => { setTimeout(() => ctx.revert(), 100); };
  }, []);

  const text = "SANDSTORMIFY";

  return (
    <section 
      ref={containerRef} 
      className="relative flex items-center justify-center w-full min-h-screen bg-[#050505] overflow-hidden"
    >
      {/* Background ambient glow centered on the eye */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20" style={{ background: 'radial-gradient(circle at center, var(--accent-color) 0%, transparent 50%)' }} />
      
      <div className="flex font-bold text-white text-[10vw] sm:text-[8vw] tracking-tighter mix-blend-difference z-10 select-none">
        {text.split('').map((char, i) => (
          <span 
            key={i} 
            ref={el => charRefs.current[i] = el}
            className="inline-block origin-center"
            style={{ 
              color: i === 6 ? 'var(--accent-color)' : '#ffffff',
              textShadow: i === 6 ? '0 0 60px var(--accent-color), 0 0 20px var(--accent-color)' : 'none',
              filter: i === 6 ? 'brightness(1.2)' : 'none',
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </section>
  );
};
