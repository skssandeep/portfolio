import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const LogoRevealSpin = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const charRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const topTextRef = useRef<HTMLDivElement>(null);
  const bottomContentRef = useRef<HTMLDivElement>(null);

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
          end: '+=200%', // Increased scroll duration to fit the extra spin
          scrub: 1, // Reduced scrub from 2 back to 1 so it doesn't lag too far behind fast scrolling
          pin: true,
          anticipatePin: 1
        }
      });

      // Animate the eye (pulse in)
      tl.from(eye, {
        scale: 0.1,
        opacity: 0,
        rotation: -360,
        duration: 0.2
      }, 0);

      // Animate all other characters (Different orbital math)
      chars.forEach((char, i) => {
        if (i === 6 || !char) return; // Skip eye and nulls
        
        const charX = char.offsetLeft + char.offsetWidth / 2;
        const charY = char.offsetTop + char.offsetHeight / 2;
        
        const dx = eyeX - charX;
        const dy = eyeY - charY;
        
        const data = {
          progress: 0,
          startAngle: Math.random() * Math.PI * 2,
          startRadius: window.innerWidth * 0.4 // Slightly wider start
        };

        // FORCE INITIAL RENDER STATE BEFORE SCROLLING
        const initialAngle = data.startAngle;
        const initialRadius = data.startRadius;
        gsap.set(char, {
          x: dx + Math.cos(initialAngle) * initialRadius,
          y: dy + Math.sin(initialAngle) * initialRadius,
          rotation: -720, // Start negative to spin clockwise into 0
          opacity: 0 // completely hidden before they start flying in
        });

        tl.to(data, {
          progress: 1,
          duration: 1,
          ease: 'none', // Removed power2 ease to prevent velocity spikes in the middle of the scroll
          onUpdate: () => {
            // Clockwise smooth orbital revolutions. Reduced from PI*6 (3 circles) to PI*3 (1.5 circles) to prevent jerky velocity leaps on small scrolls
            const currentAngle = data.startAngle + data.progress * Math.PI * 3;
            
            // Smoother radius curve
            const currentRadius = data.startRadius * (1 - Math.pow(data.progress, 1.4));
            
            const centerX = dx * (1 - data.progress);
            const centerY = dy * (1 - data.progress);
            
            gsap.set(char, {
              x: centerX + Math.cos(currentAngle) * currentRadius,
              y: centerY + Math.sin(currentAngle) * currentRadius,
              // Spin clockwise on their own axis before settling to 0. Reduced to 360 to avoid wild spinning
              rotation: -(1 - data.progress) * 360,
              opacity: Math.min(1, data.progress * 1.5)
            });
          }
        }, 0);
      });

      // Fade in the top and bottom content at the very end
      if (topTextRef.current && bottomContentRef.current) {
        tl.from([topTextRef.current, bottomContentRef.current], {
          opacity: 0,
          y: 20,
          duration: 0.2,
          ease: 'power2.out'
        }, "-=0.2");
      }

      // Add a 0.3s "dead zone" buffer at the end of the timeline.
      // This forces the section to remain pinned on the screen for a bit more scrolling AFTER the animation completes,
      // giving the scrub time to catch up and letting the user read the text before it scrolls away.
      tl.to({}, { duration: 0.3 });
    });

    return () => ctx.revert();
  }, []);

  const text = "SANDSTORMIFY";

  return (
    <div className="w-full">
      <section 
        ref={containerRef} 
        className="relative flex flex-col items-center justify-center w-full min-h-screen bg-[#050505] overflow-hidden gap-12"
      >
        {/* Top subtitle */}
        <div 
          ref={topTextRef}
          className="z-10 text-[11px] sm:text-[13px] tracking-[0.5em] text-[#888] uppercase font-mono mt-[-2vh]"
        >
          Ready to start?
        </div>

        <div 
          className="flex text-white text-[8.5vw] sm:text-[6.5vw] tracking-tighter mix-blend-difference z-10 select-none font-normal"
          style={{ fontFamily: "'Dune Rise', var(--font-system)" }}
        >
          {text.split('').map((char, i) => (
            <span 
              key={i} 
              ref={el => { charRefs.current[i] = el; }}
              className="inline-block origin-center"
              style={{ 
                color: i === 6 ? 'var(--accent-color)' : '#ffffff',
                textTransform: i === 6 ? 'lowercase' : 'uppercase',
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

        {/* Bottom text & CTA */}
        <div 
          ref={bottomContentRef}
          className="z-10 flex flex-col items-center gap-8 mt-[2vh]"
        >
          <p className="text-[#a0a0a0] font-mono text-center leading-relaxed text-[13px] sm:text-[15px] max-w-[420px] mx-auto px-4">
            Ready to level up with Sandstormify?
          </p>

          <button 
            className="rounded-full text-[11px] sm:text-[13px] text-[#ddd] font-mono hover:text-white relative overflow-hidden group cursor-pointer whitespace-nowrap inline-flex items-center justify-center min-w-[320px] min-h-[64px]"
            style={{ 
              padding: '24px 80px',
              background: 'linear-gradient(180deg, rgba(20,20,20,1) 0%, rgba(0,0,0,1) 100%)', 
              boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.05), inset 0px 1px 1px rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s var(--apple-easing)'
            }}
            onClick={() => window.open('https://cal.com/sandeepks/15min', '_blank')}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.05), transparent)' }} />
            <span className="relative z-10">Click to supercharge your brand!</span>
          </button>
        </div>
      </section>
    </div>
  );
};
