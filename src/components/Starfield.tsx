import React, { useEffect, useState } from 'react';

export const Starfield = () => {
  const [stars, setStars] = useState<{ id: number; left: string; top: string; animationDuration: string; delay: string; size: string; opacity: number }[]>([]);

  useEffect(() => {
    // Generate 150 random stars
    const newStars = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 3 + 2}s`, // 2s to 5s
      delay: `${Math.random() * 3}s`,
      size: `${Math.random() * 2 + 1}px`, // 1px to 3px
      opacity: Math.random() * 0.5 + 0.3, // 0.3 to 0.8
    }));
    setStars(newStars);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: 0, // Behind everything
      overflow: 'hidden',
    }}>
      {/* Gargantua / Black Hole Glow Effect */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.05) 0%, rgba(255,180,100,0.03) 40%, rgba(0,0,0,0) 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        animation: 'pulseGargantua 8s infinite alternate ease-in-out',
      }} />

      {/* Stars */}
      {stars.map(star => (
        <div
          key={star.id}
          style={{
            position: 'absolute',
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            backgroundColor: '#ffffff',
            borderRadius: '50%',
            opacity: star.opacity,
            animation: `twinkle ${star.animationDuration} infinite alternate ease-in-out ${star.delay}`,
          }}
        />
      ))}
      
      <style>
        {`
          @keyframes twinkle {
            0% { transform: scale(0.8); opacity: 0.2; }
            100% { transform: scale(1.2); opacity: 0.8; box-shadow: 0 0 10px rgba(255,255,255,0.8); }
          }
          @keyframes pulseGargantua {
            0% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.5; }
            100% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};
