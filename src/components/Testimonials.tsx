import React, { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
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
  
  // Drag and animation state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);
  const animationRef = useRef<number>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Card Width (450px) + Gap (32px) = 482px.
    // 6 cards total in the original array = 2892px width.
    const loopWidth = 6 * (450 + 32); 
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
        padding: '0 32px', // Dark space on left and right
        maxWidth: '1312px',
        margin: '0 auto',
        position: 'relative'
      }}>
        
        {/* The Massive Light Card (Now Dark/Transparent) */}
        <div style={{
          padding: '80px 0',
          position: 'relative',
          overflow: 'hidden'
        }}>
          
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '64px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ color: 'var(--accent-color)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '14px', fontFamily: "'Syne', sans-serif" }}>
                Testimonials
              </span>
              <h2 style={{ fontSize: 'clamp(40px, 5vw, 64px)', marginTop: '24px', marginBottom: '16px', fontWeight: 500, letterSpacing: '-0.03em', color: '#fff' }}>
                Client Love
              </h2>
              <p className="text-body" style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}>
                Don't just take my word for it. Here's what founders and agencies have to say about working with me.
              </p>
            </div>

            <div 
              className="carousel-container" 
              style={{ 
                width: '100%', 
                overflow: 'hidden', 
                padding: '20px 0',
                position: 'relative',
                marginBottom: '64px'
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
                      width: '450px', // Slightly smaller to fit better inside the bounded card
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
                    <img 
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

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <LiquidButton 
                size="lg" 
                style={{ 
                  fontWeight: 700, 
                  letterSpacing: '2px', 
                  padding: '0 56px', 
                  fontSize: '1rem',
                  minHeight: '60px',
                  position: 'relative',
                  zIndex: 1
                }}
                onClick={() => window.open('https://www.upwork.com/freelancers/~01b0aab6d05f52f81e', '_blank')}
              >
                VISIT MY UPWORK PROFILE
              </LiquidButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
