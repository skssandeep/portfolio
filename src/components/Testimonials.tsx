import React, { useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { LiquidButton } from './ui/liquid-glass-button';

const testimonials = [
  "https://cdn.prod.website-files.com/6617be83d6895de5ebd91c07/66dd837e30ed9bceae54cfd3_Testimonial_1.png",
  "https://cdn.prod.website-files.com/6617be83d6895de5ebd91c07/66dd8428faf9998c2d136957_Testimonial_2.png",
  "https://cdn.prod.website-files.com/6617be83d6895de5ebd91c07/6666bd700c95bb52a4489dfd_test5png-min.png",
  "https://cdn.prod.website-files.com/6617be83d6895de5ebd91c07/6666bd6fa57b2613a99db0af_test4png-min.png",
  "https://cdn.prod.website-files.com/6617be83d6895de5ebd91c07/66dd8565ea27ebea1f65bf7d_testimonial_5.png",
  "https://cdn.prod.website-files.com/6617be83d6895de5ebd91c07/66dd851aa528a79d9bc5fa87_Testimonial_6.png"
];

export const Testimonials = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  // Drag and animation state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);
  const animationRef = useRef<number>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Card Width dynamically based on screen size + Gap (32px)
    const cardWidth = window.innerWidth < 768 ? 280 : 450;
    const loopWidth = 6 * (cardWidth + 32); 
    const speed = -0.5; // Auto scroll speed
    
    const animate = () => {
      // Only auto-scroll if the user isn't holding the mouse down
      if (!isDragging.current) {
        currentTranslate.current += speed;
      }
      
      // Seamless wrap-around logic
      if (currentTranslate.current <= -loopWidth) {
        currentTranslate.current += loopWidth;
      } else if (currentTranslate.current > 0) {
        currentTranslate.current -= loopWidth;
      }
      
      track.style.transform = `translateX(${currentTranslate.current}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    startX.current = e.pageX;
    prevTranslate.current = currentTranslate.current;
    
    if (trackRef.current) {
      trackRef.current.style.cursor = 'grabbing';
      // Temporarily remove smooth transition while dragging for instant 1:1 response
      trackRef.current.style.transition = 'none'; 
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    
    const delta = e.pageX - startX.current;
    currentTranslate.current = prevTranslate.current + delta;
  };

  const handlePointerUpOrLeave = () => {
    isDragging.current = false;
    
    if (trackRef.current) {
      trackRef.current.style.cursor = 'grab';
    }
  };

  return (
    <section className="section-padding" style={{ position: 'relative', zIndex: 10, background: 'transparent' }}>
      {/* Outer wrapper to handle the Addverb-style card padding */}
      <div style={{ 
        padding: isMobile ? '0 16px' : '0 32px', // Dark space on left and right
        maxWidth: '1600px',
        margin: '0 auto',
        position: 'relative'
      }}>
        
        {/* The Massive Light Card (Now Dark/Transparent) */}
        <div style={{
          padding: isMobile ? '0' : '80px 0',
          position: 'relative',
          overflow: 'hidden'
        }}>
          
          <div className="container" style={{ padding: 0 }}>
            <div style={{ textAlign: 'center', marginBottom: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <motion.div 
                style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '8px', marginBottom: '32px', cursor: 'pointer' }}
                whileHover="hover"
                whileTap="tap"
                initial="rest"
                animate="rest"
              >
                {/* Interactive Star/Spark Icon */}
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                  <defs>
                     <filter id="starGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  
                  <motion.path 
                    d="M20 4C20 12.8366 12.8366 20 4 20C12.8366 20 20 27.1634 20 36C20 27.1634 27.1634 20 36 20C27.1634 20 20 12.8366 20 4Z" 
                    fill="rgba(229, 9, 20, 0.15)" stroke="var(--accent-color)" strokeWidth="1.5" filter="url(#starGlow)"
                    variants={{ rest: { scale: 1, rotate: 0 }, hover: { scale: 1.1, rotate: 90 }, tap: { scale: 0.8, rotate: -45 } }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  />
                  <motion.circle cx="20" cy="20" r="3" fill="#fff" 
                    variants={{ rest: { scale: 1 }, hover: { scale: 0 }, tap: { scale: 1.5 } }}
                  />
                </svg>
              </motion.div>
              <span style={{ color: 'rgba(255, 255, 255, 0.55)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px', fontFamily: "'Syne', sans-serif" }}>
                Proven Collaboration
              </span>
              <h2 style={{ fontSize: 'clamp(40px, 5vw, 64px)', marginTop: '16px', marginBottom: '16px', fontWeight: 500, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1.15 }}>
                Trusted by Teams.
              </h2>
              <p className="text-body-large" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: 0, lineHeight: 1.6 }}>
                Here’s what engineering and product leads say about building with me.
              </p>
            </div>

            {isMobile ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '40px 0', width: '100%' }}>
                {testimonials.slice(0, 4).map((imgUrl, index) => (
                  <div key={index} className="glass" style={{ width: '100%', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)', padding: '16px' }}>
                    <img src={imgUrl} alt={`Testimonial ${index + 1}`} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }} />
                  </div>
                ))}
              </div>
            ) : (
              <div 
                className="carousel-container" 
                style={{ 
                  width: '100%', 
                  overflow: 'hidden', 
                  padding: '40px 0 100px 0', 
                  position: 'relative',
                  marginBottom: '0px'
                }}
              >
                <div 
                  ref={trackRef}
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUpOrLeave}
                  onPointerLeave={handlePointerUpOrLeave}
                  style={{
                    display: 'flex',
                    gap: '32px',
                    width: 'max-content',
                    cursor: 'grab',
                    userSelect: 'none',
                    touchAction: 'none'
                  }}
                >
                  {/* Render the array twice for a seamless infinite loop */}
                  {[...testimonials, ...testimonials].map((imgUrl, index) => (
                    <div 
                      key={index} 
                      className="carousel-card glass"
                      style={{ 
                        width: '450px',
                        borderRadius: '24px', 
                        overflow: 'hidden', 
                        border: '1px solid rgba(255,255,255,0.05)', 
                        background: 'rgba(255,255,255,0.02)', 
                        boxShadow: '0 20px 40px rgba(0,0,0,0.5)', 
                        padding: '24px',
                        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                        flexShrink: 0,
                        position: 'relative'
                      }}
                      onMouseEnter={(e) => {
                        if (!isDragging.current) {
                          e.currentTarget.style.transform = 'scale(1.02) translateY(-10px)';
                          e.currentTarget.style.boxShadow = '0 30px 60px rgba(239,68,68,0.15)'; 
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1) translateY(0)';
                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.5)';
                      }}
                    >
                      <img loading="lazy" decoding="async" 
                        src={imgUrl} 
                        alt={`Testimonial ${index + 1}`} 
                        style={{ 
                          width: '100%', 
                          height: 'auto', 
                          display: 'block', 
                          borderRadius: '12px',
                          pointerEvents: 'none'
                        }} 
                      />
                    </div>
                  ))}
                </div>

                {/* Fade gradients on edges updated for dark background */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100px', height: '100%', background: 'linear-gradient(to right, var(--bg-color), transparent)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '100%', background: 'linear-gradient(to left, var(--bg-color), transparent)', pointerEvents: 'none' }} />
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};
