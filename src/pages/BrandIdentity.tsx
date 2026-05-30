import React, { useEffect } from 'react';
import { LogoRevealGlitch } from '../components/ui/LogoRevealGlitch';
import { LogoRevealWind } from '../components/ui/LogoRevealWind';
import { LogoReveal3D } from '../components/ui/LogoReveal3D';
import { LogoRevealDune } from '../components/ui/LogoRevealDune';
import { LogoRevealMagnetic } from '../components/ui/LogoRevealMagnetic';
import { LogoRevealOrbit } from '../components/ui/LogoRevealOrbit';
import { LogoRevealStormEye } from '../components/ui/LogoRevealStormEye';
import { LogoRevealStormOrbit } from '../components/ui/LogoRevealStormOrbit';
import { LogoRevealStormSmooth } from '../components/ui/LogoRevealStormSmooth';

export const BrandIdentity = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '80px', paddingBottom: '100px' }}>
      <div className="container" style={{ textAlign: 'center', paddingTop: '64px', paddingBottom: '32px' }}>
        <h1 className="text-headline" style={{ marginBottom: '16px' }}>Brand Identity Sandbox</h1>
        <p className="text-body-large" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Explore experimental, interactive scroll-scrubbed physics animations designed for high-impact brand reveals.
        </p>
      </div>

      {/* The 9 alternative logo reveals */}
      <LogoRevealGlitch />
      <LogoRevealWind />
      <LogoReveal3D />
      <LogoRevealDune />
      <LogoRevealMagnetic />
      <LogoRevealOrbit />
      <LogoRevealStormEye />
      <LogoRevealStormOrbit />
      <LogoRevealStormSmooth />
    </div>
  );
};
