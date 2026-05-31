import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AvatarDiamondSquare } from '../ui/AvatarDiamondSquare';

export const Avatars = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const avatars = [
    {
      id: 'cyberpunk',
      title: 'The Cyberpunk Synthetix',
      description: 'A stylized 3D character illuminated by Netflix Red neon lighting. Perfect for a futuristic, tech-heavy identity.',
      image: '/avatars/cyberpunk.png'
    },
    {
      id: 'glass',
      title: 'Abstract 3D Hypercube',
      description: 'A beautiful floating geometric hypercube made of frosted glass and glowing red energy. Ultra-premium UI agency vibe.',
      image: '/avatars/glass.png'
    },
    {
      id: 'mascot',
      title: 'The Brutalist Mascot',
      description: 'A clean, flat-vector aggressive wolf head with sharp geometric lines. Strong, memorable, and modern.',
      image: '/avatars/mascot.png'
    },
    {
      id: 'wireframe',
      title: 'Anonymous Neon Wireframe',
      description: 'A glowing red wireframe of a futuristic head. High-end hacker/developer aesthetic.',
      image: '/avatars/wireframe.png'
    },
    {
      id: 'red_dot',
      title: 'The Signature Red Dot',
      description: 'A hyper-minimalist crisp white circle with a bright Netflix Red glowing dot inside. Direct nod to the Sandstormify logo.',
      image: '/avatars/red_dot.png'
    },
    {
      id: 'sand_wave',
      title: 'Minimal Sand Wave',
      description: 'A sleek, abstract geometric sand dune wave drawn in thin, glowing red neon. A subtle visual pun on the Sandstormify name.',
      image: '/avatars/sand_wave.png'
    },
    {
      id: 'brutalist_s',
      title: 'Brutalist Monogram',
      description: 'A massive, heavy brutalist letter S with a single diagonal Netflix Red cut. High-fashion streetwear inspired agency mark.',
      image: '/avatars/brutalist_s.png'
    },
    {
      id: 'ui_grid',
      title: 'The Origin Grid',
      description: 'An architectural dark UI grid with a single red glowing pixel/square. Represents absolute precision in UI/UX layout.',
      image: '/avatars/ui_grid.png'
    },
    {
      id: 'grid_dot',
      title: 'Grid Node',
      description: 'A perfect combination of the minimalist grid and the signature Sandstormify red dot inside a crisp white circle.',
      image: '/avatars/grid_dot.png'
    },
    {
      id: 'grid_square',
      title: 'The Perfect Pixel',
      description: 'A crisp white square housing a single glowing red pixel over an architectural grid. The ultimate symbol of UI/UX precision.',
      image: '/avatars/grid_square.png'
    },
    {
      id: 'grid_diamond',
      title: 'The Diamond Grid',
      description: 'A diamond-oriented frame (rotated square) housing the signature red pixel. A more dynamic, energetic take on UI structuralism.',
      image: '/avatars/grid_diamond.png'
    },
    {
      id: 'grid_double_diamond',
      title: 'The Double Diamond',
      description: 'A perfect aesthetic balance where both the outer frame and the inner red core are aligned as parallel diamonds.',
      image: '/avatars/grid_double_diamond.png'
    },
    {
      id: 'diamond_square',
      title: 'Diamond / Square Contrast',
      description: 'A sharp white diamond outline housing a perfectly horizontal, equal-edged solid red square. The contrasting angles create intense visual gravity.',
      component: <AvatarDiamondSquare innerSize={56} />
    }
  ];

  return (
    <div style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '120px', position: 'relative', zIndex: 1 }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <Link to="/" className="btn-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
            <span style={{ fontSize: '18px' }}>←</span> Back to Home
          </Link>
          <h1 className="text-hero" style={{ textTransform: 'uppercase', marginBottom: '16px' }}>Brand <span style={{ color: 'var(--accent-color)' }}>Avatars</span></h1>
          <p className="text-body-large" style={{ maxWidth: '600px', margin: '0 auto' }}>
            A collection of custom-generated brand avatars designed for Sandstormify, exploring different visual identities from cyberpunk to minimalist brutalism.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '32px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {avatars.map((avatar) => (
            <div key={avatar.id} className="glass" style={{ 
              borderRadius: '24px', 
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: 'rgba(20, 20, 20, 0.5)'
            }}>
              <div style={{ width: '100%', aspectRatio: '1/1', position: 'relative' }}>
                {avatar.component ? (
                  avatar.component
                ) : (
                  <img 
                    src={avatar.image} 
                    alt={avatar.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                )}
              </div>
              <div style={{ padding: '24px' }}>
                <h3 className="text-h3" style={{ fontSize: '20px', marginBottom: '8px' }}>{avatar.title}</h3>
                <p className="text-body" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{avatar.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
