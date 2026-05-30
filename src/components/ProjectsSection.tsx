import React, { useEffect, useRef } from 'react';

// Simple placeholder images from Unsplash
const projects = [
  { id: 1, title: 'Project One', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80' },
  { id: 2, title: 'Project Two', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80' },
  { id: 3, title: 'Project Three', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80' },
  { id: 4, title: 'Project Four', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80' },
  { id: 5, title: 'Project Five', image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80' },
];

export const ProjectsSection = () => {
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
    // 5 cards total in the original array = 2410px width.
    const loopWidth = 5 * (450 + 32); 
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
    <section id="projects" className="section-padding" style={{ overflow: 'hidden', position: 'relative', zIndex: 1 }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '64px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span style={{ color: 'var(--accent-color)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '14px', fontFamily: "'Syne', sans-serif" }}>
          Portfolio
        </span>
        <h2 style={{ fontSize: 'clamp(40px, 5vw, 64px)', marginTop: '24px', marginBottom: '16px', fontWeight: 500, letterSpacing: '-0.03em', color: '#fff' }}>
          Project Gallery
        </h2>
        <p className="text-body" style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}>A collection of our recent work and case studies.</p>
      </div>

      <div 
        className="carousel-container" 
        style={{ 
          width: '100vw', 
          marginLeft: 'calc(-50vw + 50%)', // Break out of standard container to span full width
          overflow: 'hidden', 
          padding: '32px 0',
          position: 'relative',
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
            touchAction: 'none' // Prevent mobile browser scrolling while swiping
          }}
        >
          {/* Render the array twice for a seamless infinite loop */}
          {[...projects, ...projects].map((project, i) => (
            <div 
              key={i} 
              className="carousel-card glass"
              style={{
                width: '450px',
                height: '320px',
                borderRadius: '16px',
                overflow: 'hidden',
                flexShrink: 0,
                position: 'relative',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                border: '1px solid var(--glass-border)'
              }}
              onMouseEnter={(e) => {
                if (!isDragging.current) {
                  e.currentTarget.style.transform = 'scale(1.02) translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(239,68,68,0.15)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  pointerEvents: 'none' // Prevent native image drag ghosts
                }} 
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                padding: '24px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                textAlign: 'left',
                pointerEvents: 'none' // Ensure clicks fall through to the drag handler
              }}>
                <h3 style={{ margin: 0, color: '#fff', fontSize: '20px', fontWeight: 600, letterSpacing: '1px' }}>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Fade gradients on edges to mask the entry/exit */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '150px', height: '100%', background: 'linear-gradient(to right, var(--bg-color), transparent)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '100%', background: 'linear-gradient(to left, var(--bg-color), transparent)', pointerEvents: 'none' }} />
      </div>
    </section>
  );
};
