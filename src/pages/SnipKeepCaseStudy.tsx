import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ExternalLink, FileText, Clock, Inbox, Download, Archive, XCircle, ArrowRight } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import thePileImg from '../assets/the-pile.jpg';
import personaTimelineImg from '../assets/persona-timeline.jpg';
import toolbarMidSelectionImg from '../assets/snipkeep/toolbar-mid-selection.png';
import docsDeadlinePillsImg from '../assets/snipkeep/docs-deadline-pills.png';
import historyHoverActionsImg from '../assets/snipkeep/history-hover-actions.png';
import googleDocFullImg from '../assets/snipkeep/google-doc-full.png';
import worksCitedBlockImg from '../assets/snipkeep/works-cited-block.png';
import voiceNoteRecordingImg from '../assets/snipkeep/voice-note-recording.png';
import aiConnectScreenImg from '../assets/snipkeep/ai-connect-screen.png';
import trustCardImg from '../assets/snipkeep/trust-card.png';
import privacyLedgerImg from '../assets/snipkeep/privacy-ledger.png';
import pacerBoardImg from '../assets/snipkeep/pacer-board.png';
import knowledgeHeatImg from '../assets/snipkeep/knowledge-heat.png';
import reorderAnimationGif from '../assets/snipkeep/reorder-animation.gif';
import docBulletTimestampImg from '../assets/snipkeep/doc-bullet-timestamp.png';

// Renders a real captured screenshot/GIF inside a consistent dark frame.
// Caps by height rather than stretching to width: the source captures range from
// tall narrow drawer panels to wide landscape crops, and forcing width:100% on a
// tall narrow image inside a wide grid column blows its UI up far past its real size.
const ScreenshotMockup = ({ src, alt, maxHeight = '440px' }: { src: string, alt: string, maxHeight?: string }) => (
  <div style={{
    width: '100%',
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid rgba(255,255,255,0.1)',
    background: '#0a0a0a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px'
  }}>
    <img src={src} alt={alt} style={{ maxWidth: '100%', maxHeight, width: 'auto', height: 'auto', objectFit: 'contain', display: 'block', borderRadius: '6px' }} />
  </div>
);

// Real, verified contrast data from the design system pass - computed, not eyeballed.
const TOKEN_SHEET_DATA = [
  { label: '--bg', hex: '#100D08', note: 'Base page background' },
  { label: '--card', hex: '#24201A', note: 'Card surface' },
  { label: '--accent', hex: '#F4E151', note: 'Everyday tint (0.18α): 7.45:1 · AA pass' },
  { label: '--accent (active pill)', hex: '#F4E151', note: 'Capped at 0.34α: 4.63:1 · AA pass (4.5:1 floor)' },
  { label: '--text', hex: '#EAE8E3', note: 'Primary text' },
  { label: '--text-tertiary', hex: '#979189', note: '5.2:1 on card · 6.2:1 on page bg - hard floor' },
  { label: '--warn', hex: '#E78A45', note: 'Deadline warn state' },
  { label: '--danger', hex: '#FF6B6B', note: 'Deadline danger state' },
  { label: 'Doc ink', hex: '#71631D', note: '6.0:1 on the Doc\'s white page' },
];

const TokenSheet = () => (
  <div style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: '#0a0a0a', padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
    {TOKEN_SHEET_DATA.map((t, i) => (
      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '8px', borderRadius: '8px', background: i % 2 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: t.hex, border: '1px solid rgba(255,255,255,0.2)', flexShrink: 0 }} />
        <div style={{ display: 'flex', flexDirection: 'column', minWidth: '140px', flexShrink: 0 }}>
          <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '12px', color: '#fff', fontWeight: 600 }}>{t.label}</span>
          <span style={{ fontSize: '10px', color: '#888', fontFamily: "'Jost', sans-serif" }}>{t.hex}</span>
        </div>
        <span style={{ fontSize: '12px', color: '#D4D4D4', fontFamily: "'Jost', sans-serif" }}>{t.note}</span>
      </div>
    ))}
  </div>
);

// Reconstructed from the actual before/after diff of the icon migration commit -
// real production copy (📄 Doc, 🕒 Still relevant?) replaced by real Material icons.
const BeforeAfterIcons = () => {
  const rowStyle: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px', borderRadius: '100px', background: 'rgba(255,255,255,0.05)', fontSize: '13px', color: '#D4D4D4', fontFamily: "'Jost', sans-serif" };
  return (
    <div style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: '#0a0a0a', padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <div style={{ fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '12px', fontFamily: "'Syne', sans-serif" }}>Before - mixed emoji</div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <div style={rowStyle}>↗ Source</div>
          <div style={rowStyle}>📄 Doc</div>
          <div style={rowStyle}>🕒 Still relevant?</div>
          <div style={rowStyle}>📋 No clips saved yet</div>
        </div>
      </div>
      <div>
        <div style={{ fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--semantic-success)', marginBottom: '12px', fontFamily: "'Syne', sans-serif" }}>After - Material icon set</div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <div style={rowStyle}><ExternalLink size={13} /> Source</div>
          <div style={rowStyle}><FileText size={13} /> Doc</div>
          <div style={rowStyle}><Clock size={13} /> Still relevant?</div>
          <div style={rowStyle}><Inbox size={13} /> No clips saved yet</div>
        </div>
      </div>
    </div>
  );
};

// Small honest diagrams for the three diagnostic stories - the bugs are already
// fixed in shipped code, so there's no "before" state left to screenshot.
// These illustrate the mechanism, not a UI that still exists to capture.
const BugDiagram = ({ variant }: { variant: 'timing' | 'padding' | 'dedup' }) => {
  const stroke = 'rgba(20,184,166,0.9)';
  const fill = 'rgba(20,184,166,0.08)';
  const wrap: React.CSSProperties = { width: '80px', height: '80px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 };

  if (variant === 'timing') {
    return (
      <div style={wrap}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="4" y="10" width="18" height="14" rx="3" stroke={stroke} strokeWidth="1.5" fill={fill} />
          <rect x="26" y="24" width="18" height="14" rx="3" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="2 2" />
          <path d="M 13 24 Q 20 30 26 31" stroke={stroke} strokeWidth="1.5" strokeDasharray="2 2" markerEnd="url(#arrow)" />
          <text x="6" y="20" fontSize="7" fill={stroke}>✓</text>
          <defs>
            <marker id="arrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
              <path d="M0,0 L4,3 L0,6" fill="none" stroke={stroke} strokeWidth="1" />
            </marker>
          </defs>
        </svg>
      </div>
    );
  }
  if (variant === 'padding') {
    return (
      <div style={wrap}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="6" y="6" width="36" height="24" rx="3" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
          <rect x="6" y="24" width="36" height="10" fill={fill} stroke={stroke} strokeWidth="1" strokeDasharray="2 2" />
          <line x1="6" y1="30" x2="42" y2="30" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        </svg>
      </div>
    );
  }
  return (
    <div style={wrap}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="8" width="30" height="10" rx="2" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        <rect x="4" y="22" width="30" height="10" rx="2" stroke={stroke} strokeWidth="1.5" fill={fill} />
        <path d="M 19 18 L 19 22" stroke={stroke} strokeWidth="1.5" strokeDasharray="2 2" />
        <path d="M 34 27 L 42 27" stroke={stroke} strokeWidth="1.5" markerEnd="url(#arrow2)" />
        <defs>
          <marker id="arrow2" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
            <path d="M0,0 L4,3 L0,6" fill="none" stroke={stroke} strokeWidth="1" />
          </marker>
        </defs>
      </svg>
    </div>
  );
};

// The two curves plotted schematically on the same axes, annotated with the
// exact real checkpoint numbers from the numeric comparison (~24% vs ~7% progress
// at 25% duration) - the curve shapes are illustrative, the annotated numbers are real.
const EasingCurveChart = () => (
  <div style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: '#0a0a0a', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <svg width="100%" height="200" viewBox="0 0 280 200">
      <line x1="20" y1="10" x2="20" y2="170" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <line x1="20" y1="170" x2="260" y2="170" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <text x="0" y="8" fontSize="9" fill="rgba(255,255,255,0.4)">progress</text>
      <text x="220" y="188" fontSize="9" fill="rgba(255,255,255,0.4)">duration</text>

      {/* Material "standard" - near-linear in practice */}
      <path d="M 20,170 C 100,150 180,50 260,10" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
      <circle cx="80" cy="132" r="3" fill="rgba(255,255,255,0.6)" />
      <text x="88" y="130" fontSize="10" fill="rgba(255,255,255,0.6)">~24% by 25% duration</text>

      {/* Chosen curve - slow at both ends */}
      <path d="M 20,170 C 140,170 140,10 260,10" fill="none" stroke="#F4E151" strokeWidth="2" />
      <circle cx="80" cy="160" r="3" fill="#F4E151" />
      <text x="88" y="162" fontSize="10" fill="#F4E151">~7% by 25% duration</text>
    </svg>
    <div style={{ display: 'flex', gap: '20px', marginTop: '8px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'rgba(255,255,255,0.6)', fontFamily: "'Jost', sans-serif" }}>
        <div style={{ width: '14px', height: '2px', background: 'rgba(255,255,255,0.35)' }} /> Material standard
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#F4E151', fontFamily: "'Jost', sans-serif" }}>
        <div style={{ width: '14px', height: '2px', background: '#F4E151' }} /> Chosen curve
      </div>
    </div>
  </div>
);

// A designed-but-unbuilt concept - deliberately sketch-styled (dashed, rotated,
// hand-drawn) rather than polished, since a clean render would misrepresent it as real.
const ConceptSketch = () => (
  <div style={{ width: '100%', borderRadius: '12px', border: '1px dashed rgba(255,255,255,0.25)', background: '#0a0a0a', padding: '48px 32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ maxWidth: '480px', width: '100%', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '16px', background: 'rgba(255,255,255,0.02)' }}>
      <div style={{ display: 'flex', gap: '6px', marginBottom: '16px' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)' }} />
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)' }} />
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)' }} />
      </div>
      <div style={{ height: '8px', width: '70%', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '10px' }} />
      <div style={{ height: '8px', width: '90%', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '10px' }} />
      <div style={{ height: '8px', width: '55%', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '20px' }} />
      <div style={{
        transform: 'rotate(-1deg)',
        border: '1.5px dashed rgba(244,225,81,0.6)',
        borderRadius: '100px',
        padding: '10px 16px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        fontFamily: "'Jost', sans-serif",
        fontSize: '13px',
        color: 'rgba(244,225,81,0.9)'
      }}>
        Quick recall - what mattered here?
        <span style={{ opacity: 0.6, fontSize: '14px' }}>✕</span>
      </div>
    </div>
  </div>
);


const SectionHeader = ({ number, title, isMobile, themeColorRGB = "16,185,129", iconType = "diamond" }: { number: string, title: string, isMobile: boolean, themeColorRGB?: string, iconType?: string }) => {
  const renderIcon = () => {
    switch (iconType) {
      case "lightning":
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <motion.path d="M 26 8 L 14 26 L 24 26 L 22 40 L 34 22 L 24 22 Z" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill={`rgba(${themeColorRGB}, 0.1)`} 
              variants={{ rest: { scale: 1, rotate: 0 }, hover: { scale: 1.1, rotate: -10 }, tap: { scale: 0.9, rotate: 10 } }} transition={{ type: "spring" }} />
          </svg>
        );
      case "warning":
        return (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <defs>
              <linearGradient id="snipGrad1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#7928CA" />
                <stop offset="50%" stopColor="#FF007A" />
                <stop offset="100%" stopColor="var(--accent-color)" />
              </linearGradient>
               <filter id="glowSnip1" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <motion.path 
              d="M 20 6 L 18 12 L 23 20 L 16 28 L 20 34 L 6 20 Z" 
              fill="rgba(255,0,122,0.1)" stroke="url(#snipGrad1)" strokeWidth="1.5" filter="url(#glowSnip1)"
              style={{ transformOrigin: '13px 20px' }}
              variants={{ rest: { x: -1, y: 0, rotate: -2 }, hover: { x: -3, y: 1, rotate: -8 }, tap: { x: 0, y: 0, rotate: 0, scale: 0.95 } }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            />
            <motion.path 
              d="M 28 14 L 34 20 L 20 34 L 16 28 L 23 20 L 18 12 Z" 
              fill="rgba(255,0,122,0.1)" stroke="url(#snipGrad1)" strokeWidth="1.5" filter="url(#glowSnip1)"
              style={{ transformOrigin: '25px 24px' }}
              variants={{ rest: { x: 1, y: 1, rotate: 2 }, hover: { x: 3, y: 3, rotate: 8 }, tap: { x: 0, y: 0, rotate: 0, scale: 0.95 } }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            />
            <motion.path 
              d="M 20 6 L 28 14 L 18 12 Z" 
              fill="rgba(255,0,122,0.1)" stroke="url(#snipGrad1)" strokeWidth="1.5" filter="url(#glowSnip1)"
              style={{ transformOrigin: '23px 10px' }}
              variants={{ rest: { x: 2, y: -2, rotate: 10 }, hover: { x: 6, y: -6, rotate: 25 }, tap: { x: 0, y: 0, rotate: 0, scale: 0.95 } }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            />
          </svg>
        );
      case "nodes":
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <motion.path d="M 24 14 L 14 30 L 34 30 Z" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill={`rgba(${themeColorRGB}, 0.1)`}
              variants={{ rest: { scale: 1 }, hover: { scale: 1.1, rotate: 180 }, tap: { scale: 0.9 } }} transition={{ type: "spring" }} />
            <circle cx="24" cy="14" r="3" fill={`rgba(${themeColorRGB}, 1)`} />
            <circle cx="14" cy="30" r="3" fill={`rgba(${themeColorRGB}, 1)`} />
            <circle cx="34" cy="30" r="3" fill={`rgba(${themeColorRGB}, 1)`} />
          </svg>
        );
      case "target":
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <motion.circle cx="24" cy="24" r="14" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill={`rgba(${themeColorRGB}, 0.1)`}
              variants={{ rest: { scale: 1 }, hover: { scale: 1.2 }, tap: { scale: 0.9 } }} transition={{ type: "spring" }} />
            <motion.circle cx="24" cy="24" r="6" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill={`rgba(${themeColorRGB}, 0.2)`}
              variants={{ rest: { scale: 1 }, hover: { scale: 0.5 }, tap: { scale: 1.5 } }} transition={{ type: "spring" }} />
          </svg>
        );
      case "path":
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <motion.path d="M 12 36 Q 24 12 36 36" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill="none"
              variants={{ rest: { pathLength: 1 }, hover: { pathLength: 0.5 }, tap: { pathLength: 1 } }} transition={{ type: "spring" }} />
            <circle cx="12" cy="36" r="3" fill={`rgba(${themeColorRGB}, 1)`} />
            <circle cx="36" cy="36" r="3" fill={`rgba(${themeColorRGB}, 1)`} />
          </svg>
        );
      case "layers":
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <motion.path d="M 12 24 L 24 18 L 36 24 L 24 30 Z" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill={`rgba(${themeColorRGB}, 0.1)`}
              variants={{ rest: { y: 0 }, hover: { y: -4 }, tap: { y: 2 } }} transition={{ type: "spring" }} />
            <motion.path d="M 12 30 L 24 36 L 36 30" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill="none"
              variants={{ rest: { y: 0 }, hover: { y: 4 }, tap: { y: -2 } }} transition={{ type: "spring" }} />
          </svg>
        );
      case "flow":
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <motion.path d="M 12 20 Q 24 10 36 20" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill="none"
              variants={{ rest: { y: 0 }, hover: { y: -4 }, tap: { y: 4 } }} transition={{ type: "spring" }} />
            <motion.path d="M 12 28 Q 24 38 36 28" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill="none"
              variants={{ rest: { y: 0 }, hover: { y: 4 }, tap: { y: -4 } }} transition={{ type: "spring" }} />
          </svg>
        );
      case "magnify":
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <motion.circle cx="20" cy="20" r="10" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill={`rgba(${themeColorRGB}, 0.1)`}
              variants={{ rest: { scale: 1 }, hover: { scale: 1.2 }, tap: { scale: 0.9 } }} transition={{ type: "spring" }} />
            <motion.line x1="28" y1="28" x2="36" y2="36" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case "cycle":
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <motion.path d="M 24 12 C 17.373 12 12 17.373 12 24 C 12 30.627 17.373 36 24 36" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill="none"
              variants={{ rest: { rotate: 0 }, hover: { rotate: -90 }, tap: { rotate: 90 } }} transition={{ type: "spring" }} />
            <motion.path d="M 24 36 C 30.627 36 36 30.627 36 24" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill="none" strokeDasharray="4 4" />
            <polygon points="24,8 24,16 18,12" fill={`rgba(${themeColorRGB}, 1)`} />
          </svg>
        );
      case "wave":
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <motion.path d="M 8 24 Q 16 8 24 24 T 40 24" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill="none"
              variants={{ rest: { y: 0 }, hover: { y: [0, -4, 4, 0] }, tap: { y: 0 } }} transition={{ repeat: Infinity, duration: 1 }} />
            <circle cx="24" cy="24" r="3" fill={`rgba(${themeColorRGB}, 1)`} />
          </svg>
        );
      case "subtract":
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <motion.rect x="12" y="22" width="24" height="4" fill={`rgba(${themeColorRGB}, 1)`}
              variants={{ rest: { scaleX: 1 }, hover: { scaleX: 0.5 }, tap: { scaleX: 1.2 } }} transition={{ type: "spring" }} />
          </svg>
        );
      case "pulse":
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <motion.path d="M 10 24 L 18 24 L 22 14 L 28 34 L 32 24 L 40 24" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill="none" strokeLinejoin="round"
              variants={{ rest: { scaleY: 1 }, hover: { scaleY: 1.5 }, tap: { scaleY: 0.5 } }} transition={{ type: "spring" }} />
          </svg>
        );
      case "shield":
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <motion.path d="M 24 10 L 36 14 V 24 C 36 30 24 38 24 38 C 24 38 12 30 12 24 V 14 L 24 10 Z" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill={`rgba(${themeColorRGB}, 0.1)`}
              variants={{ rest: { scale: 1 }, hover: { y: -4 }, tap: { scale: 0.9 } }} transition={{ type: "spring" }} />
            <path d="M 20 24 L 23 27 L 28 20" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        );
      case "star":
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <motion.path d="M 24 10 L 28 20 L 38 20 L 30 26 L 33 36 L 24 30 L 15 36 L 18 26 L 10 20 L 20 20 Z" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill={`rgba(${themeColorRGB}, 0.1)`} strokeLinejoin="round"
              variants={{ rest: { rotate: 0 }, hover: { rotate: 144 }, tap: { scale: 1.2 } }} transition={{ type: "spring", damping: 10 }} />
          </svg>
        );
      default: // diamond
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <motion.path d="M 24 8 L 40 24 L 24 40 L 8 24 Z" stroke={`rgba(${themeColorRGB}, 1)`} strokeWidth="2" fill={`rgba(${themeColorRGB}, 0.1)`}
              variants={{ rest: { scale: 1, rotate: 0 }, hover: { scale: 1.1, rotate: 90 }, tap: { scale: 0.9, rotate: -45 } }} transition={{ type: "spring" }} />
            <motion.circle cx="24" cy="24" r="4" fill={`rgba(${themeColorRGB}, 1)`} variants={{ rest: { scale: 1 }, hover: { scale: 1.5 }, tap: { scale: 0.5 } }} />
          </svg>
        );
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', justifyContent: isMobile ? 'center' : 'flex-start', gap: '16px', marginBottom: '32px' }}>
      <motion.div
        style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
        whileHover="hover"
        whileTap="tap"
        initial="rest"
        animate="rest"
      >
        {renderIcon()}
      </motion.div>
      <span style={{ color: 'rgba(255, 255, 255, 0.55)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: isMobile ? '11px' : '13px', fontFamily: "'Syne', sans-serif" }}>
        {number}: {title}
      </span>
    </div>
  );
};



const CollectorsFallacyDiagram = () => {
  return (
    <div style={{ width: '100%', height: '400px', borderRadius: '24px', background: 'linear-gradient(180deg, #050505 0%, #0a0a0a 100%)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 20px 40px rgba(0,0,0,0.4)' }}>
      {/* Background Grid */}
      <div style={{ position: 'absolute', inset: -100, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', transform: 'perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)', opacity: 0.5 }} />

      {/* SVG Connecting Lines - vectorEffect prevents stroke-width distortion on squish/stretch */}
      <svg width="100%" height="100%" viewBox="0 0 600 400" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        <defs>
          <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* 1. Capture to Void Stream */}
        <line x1="100" y1="200" x2="300" y2="200" stroke="rgba(255,255,255,0.1)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        <motion.line 
          x1="100" y1="200" x2="300" y2="200" 
          stroke="url(#streamGrad)" strokeWidth="4" filter="url(#glow)"
          strokeDasharray="10 10"
          vectorEffect="non-scaling-stroke"
          animate={{ strokeDashoffset: [-20, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
        />

        {/* 2. Void to Action (Blocked) */}
        <line x1="300" y1="200" x2="500" y2="200" stroke="rgba(255,255,255,0.05)" strokeWidth="2" strokeDasharray="6 6" vectorEffect="non-scaling-stroke" />
      </svg>

      {/* Nodes Container */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 2 }}>
        
        {/* CAPTURE NODE (Centered horizontally at 16.6%, Icon vertically centered at 50%) */}
        <div style={{ position: 'absolute', left: '16.6%', top: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <motion.div 
            style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)', position: 'relative', zIndex: 2 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Download size={28} color="#fff" />
          </motion.div>
          <div style={{ position: 'absolute', top: '100%', marginTop: '16px', whiteSpace: 'nowrap', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ color: '#fff', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 600 }}>1. Capture</span>
          </div>
        </div>

        {/* THE PILE (VORTEX) (Centered horizontally at 50%, Icon vertically centered at 50%) */}
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          
          <div style={{ position: 'relative', width: '160px', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Swirling Rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div 
                key={`ring-${i}`}
                style={{ position: 'absolute', inset: 10 + (i * 15), borderRadius: '50%', border: '1px dashed rgba(244,63,94,0.4)', opacity: 0.5 - (i * 0.15) }}
                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                transition={{ rotate: { duration: 10 - (i * 2), repeat: Infinity, ease: "linear" }, scale: { duration: 3 + i, repeat: Infinity, ease: "easeInOut" } }}
              />
            ))}

            {/* Black Hole Center */}
            <div style={{ position: 'absolute', width: '80px', height: '80px', borderRadius: '50%', background: '#000', boxShadow: '0 0 30px rgba(244,63,94,0.6), inset 0 0 20px rgba(244,63,94,0.4)', border: '2px solid rgba(244,63,94,0.8)', overflow: 'hidden' }}>
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={`doc-${i}`}
                  style={{ position: 'absolute', width: '12px', height: '16px', background: 'rgba(255,255,255,0.7)', borderRadius: '2px', left: '34px', top: '32px', boxShadow: '0 0 8px rgba(255,255,255,0.5)' }}
                  animate={{
                    x: [Math.random() * 80 - 40, 0],
                    y: [Math.random() * 80 - 40, 0],
                    rotate: [Math.random() * 360, Math.random() * 720],
                    scale: [1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ duration: 1.5 + Math.random() * 2, repeat: Infinity, ease: "circIn", delay: Math.random() * 2 }}
                />
              ))}
            </div>
          </div>
          
          <div style={{ position: 'absolute', top: '100%', marginTop: '16px', whiteSpace: 'nowrap', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ color: '#f43f5e', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 800, textShadow: '0 0 16px rgba(244,63,94,0.6)' }}>2. The Graveyard</span>
            <span style={{ color: 'rgba(244,63,94,0.6)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>Data goes in, nothing comes out</span>
          </div>

        </div>

        {/* THE BLOCKADE (RED X) (Centered perfectly at 69% horizontal, 50% vertical) */}
        <div style={{ position: 'absolute', left: '69%', top: '50%', transform: 'translate(-50%, -50%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="40" height="40" viewBox="0 0 40 40" style={{ filter: 'drop-shadow(0 0 8px rgba(244,63,94,0.6))' }}>
            <line x1="10" y1="10" x2="30" y2="30" stroke="#f43f5e" strokeWidth="6" strokeLinecap="round" />
            <line x1="30" y1="10" x2="10" y2="30" stroke="#f43f5e" strokeWidth="6" strokeLinecap="round" />
          </svg>
        </div>

        {/* ACTION NODE (Centered horizontally at 83.3%, Icon vertically centered at 50%) */}
        <div style={{ position: 'absolute', left: '83.3%', top: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', opacity: 0.3, filter: 'grayscale(1)' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)', position: 'relative', zIndex: 2 }}>
            <XCircle size={28} color="#fff" />
          </div>
          <div style={{ position: 'absolute', top: '100%', marginTop: '16px', whiteSpace: 'nowrap', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ color: '#fff', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 600 }}>3. Zero Action</span>
          </div>
        </div>

        {/* floating labels */}
        <div style={{ position: 'absolute', top: 'calc(50% - 60px)', left: '31%', transform: 'translate(-50%, -50%)', display: 'flex', justifyContent: 'center', zIndex: 10 }}>
          <motion.div 
            style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 14px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', backdropFilter: 'blur(4px)' }}
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
            Dopamine Hit
          </motion.div>
        </div>

        <div style={{ position: 'absolute', top: 'calc(50% - 60px)', left: '69%', transform: 'translate(-50%, -50%)', display: 'flex', justifyContent: 'center', zIndex: 10 }}>
          <motion.div 
            style={{ background: 'rgba(244,63,94,0.1)', padding: '6px 14px', borderRadius: '20px', border: '1px solid rgba(244,63,94,0.5)', color: '#fff', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', backdropFilter: 'blur(4px)', boxShadow: '0 8px 16px rgba(244,63,94,0.1)' }}
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f43f5e', boxShadow: '0 0 8px #f43f5e' }} />
            High Friction
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export const SnipKeepCaseStudy = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '120px', overflowX: 'hidden', color: '#EAE8E3' }}>
      {/* Animated Gradient Reading Progress Bar */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(to right, #7928CA 0%, #FF007A 50%, var(--semantic-success) 100%)',
          transformOrigin: '0%',
          scaleX,
          zIndex: 99999
        }}
      />

      {/* Floating Back Button */}
      <div style={{ position: 'fixed', top: '29px', left: '4vw', zIndex: 100, display: isMobile ? 'none' : 'block' }}>
        <Link to="/#case-studies" className="btn-link" style={{fontFamily: 'var(--font-heading)', display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#fff', textDecoration: 'none', fontSize: '16px', fontWeight: 500, letterSpacing: '0', textTransform: 'uppercase', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', padding: '12px 24px', borderRadius: '100px'}}>
          <ArrowLeft size={16} /> Back
        </Link>
      </div>

      {/* 01 HERO / SNAPSHOT */}
      <section style={{ paddingTop: isMobile ? '100px' : '150px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
          
          {/* Left Text Block */}
          <div style={{ flex: '1 1 700px', zIndex: 10, maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'center' : 'flex-start', textAlign: isMobile ? 'center' : 'left' }}>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '20px', letterSpacing: '0', textAlign: isMobile ? 'center' : 'left', fontFamily: 'var(--font-heading)' }}
            >
              Highlight anything. Get research that's already cited. <span style={{ color: 'var(--semantic-success)' }}>Zero lock-in.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: "'Jost', sans-serif", fontSize: isMobile ? '18px' : '24px', color: '#D4D4D4', lineHeight: 1.6, marginBottom: '32px', maxWidth: '100%', textAlign: isMobile ? 'center' : 'left' }}
            >
              Highlight any text - it's saved straight into your Google Doc, fully formatted and sourced. No manual bibliography work. No proprietary database that can vanish overnight. Your research stays in a Doc you already own, forever.
            </motion.p>

            {/* Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: isMobile ? '8px' : '12px', marginBottom: '20px', justifyContent: isMobile ? 'center' : 'flex-start' }}
            >
              {['Chrome Extension', 'Productivity', 'Built with Claude Code'].map((tag, idx) => (
                <div key={idx} style={{ fontFamily: "'Syne', sans-serif", background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: isMobile ? '6px 16px' : '8px 20px', borderRadius: '100px', fontSize: isMobile ? '11px' : '13px', color: '#D4D4D4', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase' }}>
                  {tag}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Mockup Block */}
          <div style={{ flex: '1 1 400px', position: 'relative', zIndex: 5, minHeight: isMobile ? '350px' : '500px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            {/* Soft Glow Behind Image */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120%', height: '120%', background: 'radial-gradient(circle, rgba(244,225,81,0.15) 0%, transparent 60%)', zIndex: 0 }} />
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'relative', zIndex: 2, width: isMobile ? '100%' : '100%', marginTop: isMobile ? '20px' : '0', display: 'flex', justifyContent: 'center' }}
            >
              <img 
                src="/images/LAP01.png" 
                alt="SnipKeep Laptop Mockup" 
                style={{ width: '100%', maxWidth: '650px', height: 'auto', display: 'block', objectFit: 'contain', filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.6))' }}
              />
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <div className="container" style={{ position: 'relative', zIndex: 20, marginTop: isMobile ? '32px' : '64px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: isMobile ? '32px 16px' : '24px',
              marginTop: '0px'
            }}
          >
            {[
              { label: 'ROLE', value: 'Product Designer', subtext: '& Developer, solo' },
              { label: 'TEAM', value: 'Solo', subtext: 'AI-paired (Claude Code)' },
              { label: 'PLATFORM', value: 'Chrome Extension', subtext: 'Manifest V3' },
              { label: 'STACK', value: 'React · TypeScript', subtext: 'Shadow DOM, Docs API' },
              { label: 'TIMELINE', value: 'Ongoing', subtext: 'active personal project' },
              { label: 'METHODS', value: 'Live iterative testing', subtext: 'behavioral-psych research' },
            ].map((stat, i) => (
              <div 
                key={i} 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  paddingTop: '20px', 
                  borderTop: '2px solid rgba(255,255,255,0.15)', 
                  fontFamily: "'Jost', sans-serif",
                  marginTop: isMobile && (stat.label === 'TEAM' || stat.label === 'ROLE') ? '18px' : '0'
                }}
              >
                <div style={{fontFamily: 'var(--font-heading)', color: '#D4D4D4', fontSize: isMobile ? '12px' : '14px', fontWeight: 500, letterSpacing: '0', textTransform: 'uppercase', marginBottom: '8px'}}>{stat.label}</div>
                <div style={{ color: '#fff', fontSize: isMobile ? '16px' : '20px', fontWeight: 500, marginBottom: '4px', letterSpacing: '0' }}>{stat.value}</div>
                <div style={{ color: '#D4D4D4', fontSize: isMobile ? '14px' : '16px', lineHeight: 1.5 }}>{stat.subtext}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* 02 THE PROBLEM */}
      <section style={{ padding: isMobile ? '64px 0' : '120px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(145deg, rgba(244,63,94,0.06) 0%, rgba(10,10,10,0) 45%, rgba(10,10,10,0) 100%)', border: '1px solid rgba(244,63,94,0.12)', borderRadius: '32px', padding: isMobile ? '16px' : '64px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(244,63,94,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <SectionHeader number="02" title="THE PROBLEM" isMobile={isMobile} themeColorRGB="244,63,94" iconType="warning" />
            <h2 style={{ fontSize: isMobile ? '28px' : 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#fff', lineHeight: 1.1, letterSpacing: '0', maxWidth: '1100px', margin: 0, marginBottom: isMobile ? '32px' : '64px' }}>
              The collector's fallacy
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '32px' : '48px' }}>
              
              <div style={{ maxWidth: '800px' }}>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: isMobile ? '20px' : '32px', color: '#fff', lineHeight: 1.3, letterSpacing: '-0.5px', margin: 0, marginBottom: '16px', fontWeight: 500 }}>
                  Saving feels like learning. It isn't.
                </p>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: isMobile ? '16px' : '20px', color: '#a3a3a3', lineHeight: 1.6, margin: 0 }}>
                  Legacy tools trap your research in proprietary silos you'll never open again. They optimize for capture volume, creating a disorganized graveyard of lost knowledge. The real enemy isn't friction—it's <span style={{ color: '#fff', fontWeight: 500 }}>false productivity</span>.
                </p>
              </div>

              {/* Diagram */}
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <CollectorsFallacyDiagram />
              </div>

            </div>
          </motion.div>
        </div>
      </section>



      {/* 04 WHO IT'S FOR */}
      <section style={{ padding: isMobile ? '64px 0' : '120px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(145deg, rgba(139,92,246,0.06) 0%, rgba(10,10,10,0) 45%, rgba(10,10,10,0) 100%)', border: '1px solid rgba(139,92,246,0.12)', borderRadius: '32px', padding: isMobile ? '16px' : '64px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <SectionHeader number="04" title="WHO IT'S FOR" isMobile={isMobile} themeColorRGB="139,92,246" iconType="nodes" />
            <h2 style={{ fontSize: isMobile ? '28px' : 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#fff', lineHeight: 1.1, letterSpacing: '0', maxWidth: '1100px', margin: 0, marginBottom: isMobile ? '32px' : '64px' }}>
              One persona, done deeply
            </h2>
            
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(139,92,246,0.15)', borderRadius: '24px', padding: isMobile ? '24px' : '48px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
              
              <div style={{ textAlign: 'center', marginBottom: '48px', position: 'relative', zIndex: 10 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)', color: '#a855f7', marginBottom: '20px' }}>
                  <FileText size={28} strokeWidth={1.5} />
                </div>
                <h3 style={{ fontSize: isMobile ? '28px' : '32px', color: '#fff', fontWeight: 600, margin: '0 0 12px 0', fontFamily: "'Jost', sans-serif" }}>The Student Researcher</h3>
                <p style={{ color: '#A3A3A3', fontSize: '18px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.5 }}>
                  Writing essays, synthesizing articles, and grinding through lectures.
                </p>
              </div>

              {/* WORKFLOW TRACK */}
              <div style={{ position: 'relative', marginBottom: '64px', zIndex: 10 }}>
                <div style={{ position: 'absolute', top: '24px', left: '12%', right: '12%', height: '1px', background: 'linear-gradient(90deg, rgba(168,85,247,0.1) 0%, rgba(239,68,68,0.3) 50%, rgba(239,68,68,0.1) 100%)', zIndex: 0 }} />
                
                <div className="grid grid-cols-4 gap-4 relative z-10">
                  {[
                    { icon: Inbox, title: 'Gather', color: '#a855f7' },
                    { icon: FileText, title: 'Quote', color: '#f59e0b' },
                    { icon: ExternalLink, title: 'Cite', color: '#ec4899' },
                    { icon: Clock, title: 'Cram', color: '#ef4444' }
                  ].map((step, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#0a0a0a', border: `2px solid ${step.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: step.color, marginBottom: '16px', boxShadow: `0 0 20px ${step.color}33`, position: 'relative', zIndex: 2 }}>
                        <step.icon size={20} strokeWidth={2} />
                      </div>
                      <div style={{ color: '#fff', fontSize: '15px', fontWeight: 600, fontFamily: "'Jost', sans-serif" }}>{step.title}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* SPLIT BOTTOM: JOB vs FEARS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <div style={{ background: 'rgba(139,92,246,0.05)', border: '1px solid rgba(139,92,246,0.1)', borderRadius: '16px', padding: '24px' }}>
                  <div style={{ color: '#a855f7', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, marginBottom: '12px', fontFamily: "'Syne', sans-serif" }}>Primary Goal</div>
                  <p style={{ color: '#fff', fontSize: '18px', lineHeight: 1.5, margin: 0, fontWeight: 500, fontFamily: "'Jost', sans-serif" }}>
                    Capture information and its exact provenance instantly, so citing it later becomes completely frictionless.
                  </p>
                </div>
                <div style={{ background: 'rgba(244,63,94,0.05)', border: '1px solid rgba(244,63,94,0.1)', borderRadius: '16px', padding: '24px' }}>
                  <div style={{ color: '#f43f5e', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, marginBottom: '16px', fontFamily: "'Syne', sans-serif" }}>Core Fears</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#e5e5e5', fontSize: '16px', fontFamily: "'Jost', sans-serif" }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f43f5e', boxShadow: '0 0 8px rgba(244,63,94,0.6)' }} />
                      Losing the source URL
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#e5e5e5', fontSize: '16px', fontFamily: "'Jost', sans-serif" }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f43f5e', boxShadow: '0 0 8px rgba(244,63,94,0.6)' }} />
                      Accidental plagiarism
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* 05 PRODUCT THESIS */}
      <section style={{ padding: isMobile ? '64px 0' : '120px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(145deg, rgba(59,130,246,0.06) 0%, rgba(10,10,10,0) 45%, rgba(10,10,10,0) 100%)', border: '1px solid rgba(59,130,246,0.12)', borderRadius: '32px', padding: isMobile ? '16px' : '64px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <SectionHeader number="05" title="PRODUCT THESIS & DESIGN PRINCIPLES" isMobile={isMobile} themeColorRGB="59,130,246" iconType="target" />
            <h2 style={{ fontSize: isMobile ? '28px' : 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#fff', lineHeight: 1.1, letterSpacing: '0', maxWidth: '1100px', margin: 0, marginBottom: '24px' }}>
              Four tiebreakers, not four posters
            </h2>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: isMobile ? '16px' : '20px', color: '#e5e5e5', lineHeight: 1.5, letterSpacing: '0', margin: 0, marginBottom: isMobile ? '40px' : '64px', maxWidth: '800px' }}>
              Good UX for learners is mostly restraint - the product's job is to disappear into the user's own work, never to trap them in ours.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '24px', marginBottom: '48px' }}>
              {[
                { num: '01', title: 'The Google Doc is the real product', desc: 'SnipKeep is just how content got there. If it vanished tomorrow, nothing is lost. A one-time Trust Card says this to the user directly, with a live link to their own Doc.' },
                { num: '02', title: 'No server, ever', desc: 'Privacy isn\'t a policy, it\'s an architecture. The Privacy Ledger gives a literal account of what leaves the device: three green checks, one honest red ✕ - "A SnipKeep server - there isn\'t one."' },
                { num: '03', title: 'No shame mechanics', desc: 'No streaks, no guilt, no delete-if-unread countdowns - a deliberate rejection of punitive competitor patterns. Every nudge is zero-consequence to ignore.' },
                { num: '04', title: 'Invisible by default', desc: 'Optional features render nothing until opted in. The entire AI layer is absent from every menu until a key is connected - never shown disabled.' }
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(59,130,246,0.04)', borderLeft: '3px solid rgba(59,130,246,0.3)', padding: '24px', borderRadius: '4px 16px 16px 4px' }}>
                  <div style={{ color: 'var(--semantic-success)', fontSize: '14px', fontWeight: 600, fontFamily: "'Syne', sans-serif", marginBottom: '8px' }}>{item.num}</div>
                  <h4 style={{ fontSize: '20px', color: '#fff', fontWeight: 600, marginBottom: '12px', fontFamily: "'Jost', sans-serif" }}>{item.title}</h4>
                  <p style={{ fontSize: isMobile ? '14px' : '16px', color: '#D4D4D4', lineHeight: 1.5, fontFamily: "'Jost', sans-serif", margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div style={{ background: 'rgba(59,130,246,0.03)', border: '1px solid rgba(59,130,246,0.1)', borderRadius: '24px', padding: isMobile ? '24px' : '40px', marginTop: '24px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '600px', height: '400px', background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '32px', alignItems: 'center' }}>
                <div>
                  <ScreenshotMockup src={trustCardImg} alt="SnipKeep's one-time Trust Card screen" />
                </div>
                <div>
                  <ScreenshotMockup src={privacyLedgerImg} alt="SnipKeep's Privacy Ledger showing three checks and one honest red X" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* 06 RESEARCH -> ROADMAP */}
      <section style={{ padding: isMobile ? '64px 0' : '120px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(145deg, rgba(16,185,129,0.06) 0%, rgba(10,10,10,0) 45%, rgba(10,10,10,0) 100%)', border: '1px solid rgba(16,185,129,0.12)', borderRadius: '32px', padding: isMobile ? '16px' : '64px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <SectionHeader number="06" title="RESEARCH → ROADMAP" isMobile={isMobile} themeColorRGB="16,185,129" iconType="path" />
            <h2 style={{ fontSize: isMobile ? '28px' : 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#fff', lineHeight: 1.1, letterSpacing: '0', maxWidth: '1100px', margin: 0, marginBottom: '24px' }}>
              Competitive Research & Ground Rules
            </h2>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: isMobile ? '16px' : '20px', color: '#e5e5e5', lineHeight: 1.5, letterSpacing: '0', margin: 0, marginBottom: '40px', maxWidth: '900px' }}>
              Competitors like Pocket and Omnivore locked users into proprietary databases—and when they shut down, users lost everything. SnipKeep's roadmap was built on a strict counter-thesis: <strong style={{ color: '#fff' }}>Structural trust and local ownership.</strong>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ marginBottom: '48px' }}>
              {[
                { title: 'No Data Lock-in', desc: 'Everything saves directly to the user\'s Google Doc or local storage.' },
                { title: 'No Guilt Mechanics', desc: 'A deliberate rejection of "delete-if-unread" anxiety patterns.' },
                { title: 'Invisible by Default', desc: 'Zero-friction experience. Features hide until explicitly opted-in.' }
              ].map((rule, i) => (
                <div key={i} style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.15)', borderRadius: '16px', padding: '24px' }}>
                  <div style={{ color: '#10b981', fontWeight: 600, fontSize: '18px', marginBottom: '8px', fontFamily: "'Jost', sans-serif" }}>{rule.title}</div>
                  <div style={{ color: '#A3A3A3', fontSize: '15px', lineHeight: 1.5, fontFamily: "'Jost', sans-serif" }}>{rule.desc}</div>
                </div>
              ))}
            </div>

            <h4 style={{ fontSize: '20px', color: '#fff', fontWeight: 600, marginBottom: '24px', fontFamily: "'Jost', sans-serif" }}>Shipped - 8 of 11 report features</h4>
            
            <div style={{ overflowX: 'auto', marginBottom: '32px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}>
              <table style={{ width: '100%', minWidth: '600px', borderCollapse: 'collapse', textAlign: 'left', fontFamily: "'Jost', sans-serif", fontSize: '16px' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <th style={{ padding: '16px', color: 'var(--semantic-success)' }}>#</th>
                    <th style={{ padding: '16px', color: 'var(--semantic-success)' }}>FEATURE</th>
                    <th style={{ padding: '16px', color: 'var(--semantic-success)' }}>ONE-LINE</th>
                    <th style={{ padding: '16px', color: 'var(--semantic-success)' }}>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: '1', feature: 'Privacy Ledger', desc: 'Honest, literal account of what leaves the device', status: 'SHIPPED', statusColor: '#7928CA' },
                    { id: '2', feature: 'Trust Card', desc: '"Your Doc is the real thing" - shown once, with a real link to it', status: 'SHIPPED', statusColor: '#7928CA' },
                    { id: '3', feature: 'Link-Rot Insurance', desc: 'Best-effort Wayback Machine snapshot, written back into the Doc', status: 'SHIPPED', statusColor: '#7928CA' },
                    { id: '4', feature: <s style={{opacity: 0.5}}>Soft Triage ("Someday")</s>, desc: <s style={{opacity: 0.5}}>Optional tag + "still relevant?" check-in</s>, status: 'REMOVED', statusColor: 'var(--semantic-error)' },
                    { id: '5', feature: 'Gentle Reflection Nudge', desc: "Soft one-liner after several note-less clips - targets the collector's fallacy", status: 'SHIPPED', statusColor: '#7928CA' },
                    { id: '6', feature: 'Deadline-Aware Citations', desc: 'Calm→warn→danger countdown + uncited-clip count', status: 'SHIPPED', statusColor: '#7928CA' },
                    { id: '7', feature: 'Assignment / Project Mode', desc: 'Mark a Doc "done" → moves to its own Completed tab', status: 'SHIPPED', statusColor: '#7928CA' },
                    { id: '8', feature: 'Living Resurface', desc: 'Writes a freshly dated note back into the Doc at any bookmarked clip', status: 'SHIPPED', statusColor: '#7928CA' },
                    { id: '10', feature: <s style={{opacity: 0.5}}>Topic Auto-Clustering</s>, desc: <s style={{opacity: 0.5}}>Tag/domain chips above search</s>, status: 'KILLED', statusColor: 'var(--semantic-error)' },
                    { id: '✨', feature: 'Resurfaced', desc: 'Daily spotlight of one old clip', status: 'PAUSED', statusColor: '#eab308' },
                    { id: '9', feature: 'Weekly Synthesis Digest', desc: "Opt-in weekly clustering of that week's clips", status: 'DEFERRED', statusColor: '#6b7280' },
                    { id: '11', feature: 'Anonymous Highlight Signal', desc: '"14 people also highlighted this" - needs real backend + privacy review', status: 'DEFERRED', statusColor: '#6b7280' },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '16px', color: '#D4D4D4' }}>{row.id}</td>
                      <td style={{ padding: '16px', color: '#fff', fontWeight: 500 }}>{row.feature}</td>
                      <td style={{ padding: '16px', color: '#D4D4D4' }}>{row.desc}</td>
                      <td style={{ padding: '16px' }}>
                        <span style={{ fontSize: '12px', fontWeight: 600, fontFamily: "'Syne', sans-serif", background: 'rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '4px', color: row.statusColor }}>{row.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0, fontFamily: "'Jost', sans-serif" }}>
              <strong style={{color:'#fff'}}>Why the strikethroughs matter more than the checkmarks:</strong> a roadmap with visible kills is more credible than a clean one. Topic Auto-Clustering shipped, then got deleted outright - not paused - once real archive sizes showed the chips carried no signal (a domain chip covering ~100% of clips filters to "everything"). One capability was salvaged: search now also matches source URLs.
            </p>
          </motion.div>
        </div>
      </section>



      {/* 07 DESIGN SYSTEM */}
      <section style={{ padding: isMobile ? '64px 0' : '120px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(145deg, rgba(236,72,153,0.06) 0%, rgba(10,10,10,0) 45%, rgba(10,10,10,0) 100%)', border: '1px solid rgba(236,72,153,0.12)', borderRadius: '32px', padding: isMobile ? '16px' : '64px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <SectionHeader number="07" title="DESIGN SYSTEM - SMALL, STRICT, VERIFIED" isMobile={isMobile} themeColorRGB="236,72,153" iconType="layers" />
            <h2 style={{ fontSize: isMobile ? '28px' : 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#fff', lineHeight: 1.1, letterSpacing: '0', maxWidth: '1100px', margin: 0, marginBottom: '24px' }}>
              "Ink & Highlighter" - engineered, not curated
            </h2>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: isMobile ? '16px' : '20px', color: '#e5e5e5', lineHeight: 1.5, letterSpacing: '0', margin: 0, marginBottom: '40px', maxWidth: '900px' }}>
              The color palette was strictly engineered for accessibility, anchored by warm ink-black surfaces and a marker-yellow accent. Every hue is mathematically verified against WCAG standards.
            </p>
            
            {/* Palette Swatches */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
              {[
                { label: '--bg', hex: '#100D08' },
                { label: '--card', hex: '#24201A' },
                { label: '--accent', hex: '#F4E151' },
                { label: '--text', hex: '#EAE8E3' },
                { label: '--warn', hex: '#E78A45' },
                { label: '--danger', hex: '#FF6B6B' },
              ].map((color, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '8px', background: color.hex, border: '1px solid rgba(255,255,255,0.2)', marginBottom: '8px' }}></div>
                  <div style={{ fontSize: '12px', fontFamily: "'Syne', sans-serif", color: '#fff' }}>{color.label}</div>
                  <div style={{ fontSize: '10px', color: '#888' }}>{color.hex}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ marginBottom: '48px' }}>
              <div style={{ background: 'rgba(236,72,153,0.05)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(236,72,153,0.15)' }}>
                <h4 style={{ fontSize: '18px', color: '#ec4899', fontWeight: 600, marginBottom: '12px', fontFamily: "'Jost', sans-serif" }}>Strict Contrast Ceilings</h4>
                <p style={{ color: '#A3A3A3', fontSize: '15px', lineHeight: 1.5, margin: 0, fontFamily: "'Jost', sans-serif" }}>
                  The active accent tint is mathematically capped at <strong>0.34 alpha</strong> to guarantee a minimum <strong>4.63:1</strong> WCAG AA contrast ratio. Nothing is left to subjective taste.
                </p>
              </div>
              <div style={{ background: 'rgba(236,72,153,0.05)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(236,72,153,0.15)' }}>
                <h4 style={{ fontSize: '18px', color: '#ec4899', fontWeight: 600, marginBottom: '12px', fontFamily: "'Jost', sans-serif" }}>Spacing & Iconography</h4>
                <p style={{ color: '#A3A3A3', fontSize: '15px', lineHeight: 1.5, margin: 0, fontFamily: "'Jost', sans-serif" }}>
                  Built entirely on a rigid 4px grid system. A bespoke Material icon subset was bundled (~8.7KB total) to eliminate OS-level emoji rendering inconsistencies.
                </p>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '32px' }}>
              <div><TokenSheet /></div>
              <div><BeforeAfterIcons /></div>
            </div>
            <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.5)', fontSize: '14px', fontFamily: "'Jost', sans-serif" }}>
              The full token sheet with contrast ratios computed next to each swatch (left). The icon migration, reconstructed from the actual before/after commit - real shipped copy on both sides (right).
            </p>
          </motion.div>
        </div>
      </section>



      {/* 08 CORE FLOWS */}
      <section style={{ padding: isMobile ? '64px 0' : '120px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(145deg, rgba(14,165,233,0.06) 0%, rgba(10,10,10,0) 45%, rgba(10,10,10,0) 100%)', border: '1px solid rgba(14,165,233,0.12)', borderRadius: '32px', padding: isMobile ? '16px' : '64px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <SectionHeader number="08" title="CORE FLOWS" isMobile={isMobile} themeColorRGB="14,165,233" iconType="flow" />
            <h2 style={{ fontSize: isMobile ? '28px' : 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#fff', lineHeight: 1.1, letterSpacing: '0', maxWidth: '1100px', margin: 0, marginBottom: '40px' }}>
              Three end-to-end walkthroughs
            </h2>
            
            <div style={{ marginBottom: '64px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: "'Jost', sans-serif" }}>1 - Capture</h3>
              <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, marginBottom: '24px', fontFamily: "'Jost', sans-serif" }}>
                Select text → floating toolbar appears → save. Layers of depth: a bare clip, a margin note ("your take"), a <em>voice</em> note (speak it instead of typing - silence auto-stops <em>listening</em> but never auto-saves, preserving one review beat always), a fully keyboard-first path (Enter saves, an ↵ badge teaches the shortcut), preserved hyperlinks, and right-click image capture.
              </p>
              <ScreenshotMockup src={toolbarMidSelectionImg} alt="SnipKeep's floating toolbar appearing over a text selection on Wikipedia" />
              <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.5)', fontSize: '14px', fontFamily: "'Jost', sans-serif" }}>
                The floating toolbar appearing over a live text selection, save/note/menu options visible.
              </p>
            </div>

            <div style={{ marginBottom: '64px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: "'Jost', sans-serif" }}>2 - The Doc as artifact</h3>
              <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, marginBottom: '24px', fontFamily: "'Jost', sans-serif" }}>
                This is the money shot of the whole study: <strong>the deliverable is theirs, not ours.</strong> A heading per article, a grey provenance caption, bulleted quotes, italic dark-gold margin notes, an auto-maintained Works Cited section, archive links, and lecture timestamps - all written straight into a Doc the student already owns.
              </p>
              <ScreenshotMockup src={googleDocFullImg} alt="A real, populated SnipKeep research Doc with headings, provenance captions, and bulleted quotes" maxHeight="700px" />
              <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.5)', fontSize: '14px', fontFamily: "'Jost', sans-serif" }}>
                A real, populated research Doc - a heading per article, a grey provenance caption, and bulleted quotes, all written straight in by the extension.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: "'Jost', sans-serif" }}>3 - Revisit & cite</h3>
              <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, marginBottom: '24px', fontFamily: "'Jost', sans-serif" }}>
                History with full-text search (also matches source URLs), #tag filter chips, per-clip Cite with the style picked at the moment of citing (an earlier persistent "Cite as" strip was removed - most users never cite, so the jargon shouldn't own prime space), deadlines with calm→warn→danger escalation, and a Completed tab for finished projects.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '32px' }}>
                <div><ScreenshotMockup src={docsDeadlinePillsImg} alt="SnipKeep Docs list with deadline pills in their overdue/warn state" /></div>
                <div><ScreenshotMockup src={historyHoverActionsImg} alt="SnipKeep History list with one card's hover actions expanded: Source, Doc, Cite" /></div>
              </div>
              <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.5)', fontSize: '14px', fontFamily: "'Jost', sans-serif" }}>
                Deadline pills in their overdue state (left) and a History card's hover actions expanded - Source / Doc / Cite (right).
              </p>
            </div>
          </motion.div>
        </div>
      </section>



      {/* 09 FEATURE DEEP-DIVES */}
      <section style={{ padding: isMobile ? '64px 0' : '120px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(145deg, rgba(99,102,241,0.06) 0%, rgba(10,10,10,0) 45%, rgba(10,10,10,0) 100%)', border: '1px solid rgba(99,102,241,0.12)', borderRadius: '32px', padding: isMobile ? '16px' : '64px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <SectionHeader number="09" title="FEATURE DEEP-DIVES" isMobile={isMobile} themeColorRGB="99,102,241" iconType="magnify" />
            <h2 style={{ fontSize: isMobile ? '28px' : 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#fff', lineHeight: 1.1, letterSpacing: '0', maxWidth: '1100px', margin: 0, marginBottom: '40px' }}>
              Four stories: problem → options → principle → shipped → learned
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              <div style={{ borderLeft: '4px solid var(--semantic-success)', paddingLeft: '24px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#fff', marginBottom: '8px', fontFamily: "'Jost', sans-serif" }}>Works Cited, auto-maintained</h3>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px', fontFamily: "'Syne', sans-serif" }}>REBUILD, DON'T APPEND</div>
                <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, marginBottom: '24px', fontFamily: "'Jost', sans-serif" }}>
                  Per-clip citations existed but assembling a real bibliography was still manual. Now every Cite click rebuilds a "Works Cited" block at the true end of the Doc - deduplicated by source page, alphabetized, and re-rendered entirely in whichever style was just picked. Live testing found a real bug: re-citing an already-cited clip in a new style updated the clipboard but not the Doc. The fix - rebuilding on <em>every</em> successful cite, not patching one entry - made the whole list style-consistent as a side effect. One user report ("my citation got replaced") turned out to be correct dedup behavior; the fix there was an explanation, not code.
                </p>
                <ScreenshotMockup src={worksCitedBlockImg} alt="An auto-generated Works Cited block, alphabetized with real citation URLs" />
              </div>

              <div style={{ borderLeft: '4px solid var(--semantic-success)', paddingLeft: '24px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#fff', marginBottom: '8px', fontFamily: "'Jost', sans-serif" }}>Lecture-timestamp clipping</h3>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px', fontFamily: "'Syne', sans-serif" }}>THE INVISIBLE DESIGN WORK</div>
                <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, marginBottom: '24px', fontFamily: "'Jost', sans-serif" }}>
                  A clip from a 90-minute YouTube lecture used to point at the video, not the moment. Now it carries the exact video timestamp - the transcript line's own timestamp when available, else playback time - as a " · 43:21" link that reopens the lecture right there. The trap avoided: the timestamp is never baked into the clip's URL, because that URL doubles as page identity across five other subsystems (grouping, dedup, archiving). A naive &t=43s would have made every clip from one lecture look like a different source.
                </p>
                <ScreenshotMockup src={docBulletTimestampImg} alt="A real Doc bullet clipped from a YouTube video, carrying a · 0:27 timestamp link" />
              </div>

              <div style={{ borderLeft: '4px solid var(--semantic-success)', paddingLeft: '24px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#fff', marginBottom: '8px', fontFamily: "'Jost', sans-serif" }}>Voice notes</h3>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px', fontFamily: "'Syne', sans-serif" }}>TWO FAILED ARCHITECTURES FIRST</div>
                <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, marginBottom: '24px', fontFamily: "'Jost', sans-serif" }}>
                  Chrome's offscreen documents can never obtain microphone permission - confirmed twice by live testing, including a pre-grant attempt. The shipped design runs speech recognition in a real, backgrounded tab instead. The interaction design: silence auto-stops <em>listening</em> (a 1.8s pause once speaking begins) but never <em>auto-saves</em>, since transcription is imperfect and a review beat matters. A real bug - manually correcting a mis-heard word mid-recording got silently overwritten by the next transcript update - was fixed by switching to append-mode the instant a manual edit is detected.
                </p>
                <ScreenshotMockup src={voiceNoteRecordingImg} alt="A voice note mid-recording, live transcript visible, mic active" />
              </div>

              <div style={{ borderLeft: '4px solid var(--semantic-success)', paddingLeft: '24px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#fff', marginBottom: '8px', fontFamily: "'Jost', sans-serif" }}>Bring-your-own-AI layer</h3>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px', fontFamily: "'Syne', sans-serif" }}>THE PHILOSOPHY CAME BEFORE ANY CODE</div>
                <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, marginBottom: '24px', fontFamily: "'Jost', sans-serif" }}>
                  <strong>AI may classify and ask questions; it may never do the student's thinking.</strong> A user connects their own OpenAI, Anthropic, or Gemini key - validated against a free endpoint, stored device-local (never synced, never seen by any SnipKeep server), invisible in every menu until connected. Live debugging surfaced three real findings: a generic "key rejected" error was hiding the actual cause (Anthropic blocking direct browser requests without an explicit opt-in header); and a genuine UX finding - users assume a Claude Pro subscription includes API access. It doesn't. The surfaced error text became the diagnostic.
                </p>
                <ScreenshotMockup src={aiConnectScreenImg} alt="The bring-your-own-AI-key connection screen, showing a connected, redacted key" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* 09B A SECOND RESEARCH PASS */}
      <section style={{ padding: isMobile ? '64px 0' : '120px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(145deg, rgba(132,204,22,0.06) 0%, rgba(10,10,10,0) 45%, rgba(10,10,10,0) 100%)', border: '1px solid rgba(132,204,22,0.12)', borderRadius: '32px', padding: isMobile ? '16px' : '64px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(132,204,22,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <SectionHeader number="09B" title="A SECOND RESEARCH PASS - THE STUDY TAB" isMobile={isMobile} themeColorRGB="132,204,22" iconType="cycle" />
            <h2 style={{ fontSize: isMobile ? '28px' : 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#fff', lineHeight: 1.1, letterSpacing: '0', maxWidth: '1100px', margin: 0, marginBottom: '24px' }}>
              Retrieval-first learning, built on top of the clipping product
            </h2>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: isMobile ? '16px' : '20px', color: '#e5e5e5', lineHeight: 1.5, letterSpacing: '0', margin: 0, marginBottom: '40px', maxWidth: '900px' }}>
              A later, separate research pass (learning-science literature: the testing effect, spaced exposure, the generation effect) produced a full study surface - the newest and largest part of the product today. The same ground rule from the AI layer above was independently rediscovered here and applied again: <strong>AI asks and classifies; it never digests the material for the student.</strong>
            </p>
            
            <div style={{ overflowX: 'auto', marginBottom: '40px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}>
              <table style={{ width: '100%', minWidth: '600px', borderCollapse: 'collapse', textAlign: 'left', fontFamily: "'Jost', sans-serif", fontSize: '16px' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <th style={{ padding: '16px', color: 'var(--semantic-success)' }}>FEATURE</th>
                    <th style={{ padding: '16px', color: 'var(--semantic-success)' }}>WHAT IT DOES</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { f: 'Retrieval Flip', d: 'Every saved clip quietly gets one AI-drafted question attached to it' },
                    { f: 'Five-Minute Review', d: 'A spaced-repetition ladder (1 → 3 → 7 → 14 → 30 → 60 days) resurfaces due questions' },
                    { f: 'Teach-It-Back', d: 'Explain a doc out loud; AI classifies covered / missing / conflicting - never grades' },
                    { f: 'Predict-First', d: 'Pauses chaptered YouTube lectures, alternating recall and predict prompts' },
                    { f: 'PACER Board', d: 'AI sorts clips into Procedural / Analogical / Conceptual / Evidence / Reference; drag to correct' },
                    { f: 'Exam Forge', d: "A practice exam forged fresh from a doc's own clips - written or multiple choice" },
                    { f: 'Knowledge Heat', d: 'Collected-vs-recalled shown as two bars on one scale - no percentages, no red, no streaks' },
                    { f: 'Study Pact', d: "A weekly review schedule synced to the student's own Google Calendar" },
                    { f: <s style={{opacity: 0.5}}>Confusion Flag</s>, d: <s style={{opacity: 0.5}}>BUILT + REVERTED SAME DAY</s> }
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '16px', color: '#fff', fontWeight: 500 }}>{row.f}</td>
                      <td style={{ padding: '16px', color: '#D4D4D4' }}>{row.d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, marginBottom: '40px', fontFamily: "'Jost', sans-serif" }}>
              Exam Forge in particular went through several rapid rounds of live iteration: an exit-confirm shared identically between its own button and every Sidebar navigation link (not two separate prompts for one decision); mandatory completion before submission, with a question-jump palette instead of a hidden progress counter; and always-visible correct answers for both formats after a written/MCQ asymmetry was caught live.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '32px' }}>
              <div><ScreenshotMockup src={pacerBoardImg} alt="The PACER board sorting real clips into Procedural, Analogical, Conceptual, Evidence, and Reference columns" /></div>
              <div><ScreenshotMockup src={knowledgeHeatImg} alt="The Overview page's Knowledge Heat section, collected vs recalled bars for two real docs" /></div>
            </div>
            <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.5)', fontSize: '14px', fontFamily: "'Jost', sans-serif" }}>
              The PACER board sorting real clips (left), and the Overview page's Knowledge Heat section - collected/recalled bars for real docs (right).
            </p>
          </motion.div>
        </div>
      </section>



      {/* 10 MOTION */}
      <section style={{ padding: isMobile ? '64px 0' : '120px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(145deg, rgba(245,158,11,0.06) 0%, rgba(10,10,10,0) 45%, rgba(10,10,10,0) 100%)', border: '1px solid rgba(245,158,11,0.12)', borderRadius: '32px', padding: isMobile ? '16px' : '64px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <SectionHeader number="10" title="MOTION & MICROINTERACTION CRAFT" isMobile={isMobile} themeColorRGB="245,158,11" iconType="wave" />
            <h2 style={{ fontSize: isMobile ? '28px' : 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#fff', lineHeight: 1.1, letterSpacing: '0', maxWidth: '1100px', margin: 0, marginBottom: '24px' }}>
              The toggle-reorder saga - wrong fixes first
            </h2>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: isMobile ? '16px' : '20px', color: '#e5e5e5', lineHeight: 1.5, letterSpacing: '0', margin: 0, marginBottom: '40px', maxWidth: '900px' }}>
              Toggling a doc card active/inactive reorders the whole list, animated with FLIP (measure each card's position before and after, play the delta as a slide) using the Web Animations API - chosen over CSS transitions because setting an inline CSS transition <em>replaces</em> a card's own hover transition outright.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, fontFamily: "'Syne', sans-serif", background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', padding: '4px 8px', borderRadius: '4px', whiteSpace: 'nowrap' }}>VERIFIED</span>
                <p style={{ margin: 0, fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, fontFamily: "'Jost', sans-serif" }}>Easing checked numerically, not by eye: Material's "standard" curve has a zero tangent at t=0 yet reaches ~24% progress by 25% of duration - near-linear in practice. The chosen curve reaches only ~7% by the same point: genuinely slow at both ends.</p>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, fontFamily: "'Syne', sans-serif", background: 'rgba(244, 63, 94, 0.1)', color: '#f43f5e', padding: '4px 8px', borderRadius: '4px', whiteSpace: 'nowrap' }}>WRONG FIX #1</span>
                <p style={{ margin: 0, fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, fontFamily: "'Jost', sans-serif" }}>User reported a "sudden jerk" on toggle. GPU layer promotion (<code style={{background:'rgba(255,255,255,0.1)', padding:'2px 4px', borderRadius:'4px', fontSize:'14px'}}>will-change</code>) - a real improvement, but not the actual cause.</p>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, fontFamily: "'Syne', sans-serif", background: 'rgba(244, 63, 94, 0.1)', color: '#f43f5e', padding: '4px 8px', borderRadius: '4px', whiteSpace: 'nowrap' }}>WRONG FIX #2</span>
                <p style={{ margin: 0, fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, fontFamily: "'Jost', sans-serif" }}>A 140ms hold before the slide ("click, pause, move") - made it worse.</p>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, fontFamily: "'Syne', sans-serif", background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', padding: '4px 8px', borderRadius: '4px', whiteSpace: 'nowrap' }}>ROOT CAUSE</span>
                <p style={{ margin: 0, fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, fontFamily: "'Jost', sans-serif" }}>With <code style={{background:'rgba(255,255,255,0.1)', padding:'2px 4px', borderRadius:'4px', fontSize:'14px'}}>fill: 'none'</code>, a delayed animation applies no keyframes during its delay - so the card jumped to its final spot, sat there, jumped back, then slid. <code style={{background:'rgba(255,255,255,0.1)', padding:'2px 4px', borderRadius:'4px', fontSize:'14px'}}>fill: 'backwards'</code> was the one-word fix.</p>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, fontFamily: "'Syne', sans-serif", background: 'rgba(99, 102, 241, 0.1)', color: '#6366f1', padding: '4px 8px', borderRadius: '4px', whiteSpace: 'nowrap' }}>PRINCIPLE</span>
                <p style={{ margin: 0, fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, fontFamily: "'Jost', sans-serif" }}>"Data arriving is not movement" - an async docs list load meant the first render was always empty and the second populated; anything existing in both renders ghost-slid on open until a guard distinguished data-arrival from an actual reorder.</p>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, fontFamily: "'Syne', sans-serif", background: 'rgba(168, 85, 247, 0.1)', color: '#a855f7', padding: '4px 8px', borderRadius: '4px', whiteSpace: 'nowrap' }}>FINAL LESSON</span>
                <p style={{ margin: 0, fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, fontFamily: "'Jost', sans-serif" }}>From direct user feedback ("keep it simple and minimal") on an over-choreographed animation: two motion registers. Slow symmetric curves for system-initiated rearrangement; a fast ease-out for direct user commands. A user-invoked control on the system's clock reads as laggy, not gentle.</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '32px' }}>
              <div><EasingCurveChart /></div>
              <div><ScreenshotMockup src={reorderAnimationGif} alt="A real doc card toggling active state and reordering the list" /></div>
            </div>
            <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.5)', fontSize: '14px', fontFamily: "'Jost', sans-serif" }}>
              The two curves, plotted on the same axes and annotated with the real measured checkpoints (left). A real screen capture of the card reorder in the shipped extension (right).
            </p>
          </motion.div>
        </div>
      </section>



      {/* 11 DESIGNING BY SUBTRACTION */}
      <section style={{ padding: isMobile ? '64px 0' : '120px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(145deg, rgba(239,68,68,0.06) 0%, rgba(10,10,10,0) 45%, rgba(10,10,10,0) 100%)', border: '1px solid rgba(239,68,68,0.12)', borderRadius: '32px', padding: isMobile ? '16px' : '64px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(239,68,68,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <SectionHeader number="11" title="DESIGNING BY SUBTRACTION" isMobile={isMobile} themeColorRGB="239,68,68" iconType="subtract" />
            <h2 style={{ fontSize: isMobile ? '28px' : 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#fff', lineHeight: 1.1, letterSpacing: '0', maxWidth: '1100px', margin: 0, marginBottom: '40px' }}>
              The roadmap's strikethroughs are the proof of a real evaluation loop
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr', gap: '24px' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'inline-block', background: 'rgba(244, 63, 94, 0.1)', color: '#f43f5e', fontSize: '12px', fontWeight: 600, fontFamily: "'Syne', sans-serif", padding: '4px 10px', borderRadius: '4px', marginBottom: '16px' }}>BUILT, THEN DELETED</div>
                <h4 style={{ fontSize: '20px', color: '#fff', fontWeight: 600, marginBottom: '12px', fontFamily: "'Jost', sans-serif" }}>Topic Auto-Clustering</h4>
                <p style={{ fontSize: isMobile ? '14px' : '16px', color: '#D4D4D4', lineHeight: 1.6, fontFamily: "'Jost', sans-serif", margin: 0 }}>Tag/domain chips above search that dropped a query in on click. At realistic archive sizes the chips carried no signal - a domain chip covering ~100% of clips filters to "everything." One capability was salvaged: search now also matches source URLs.</p>
              </div>
              
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'inline-block', background: 'rgba(244, 63, 94, 0.1)', color: '#f43f5e', fontSize: '12px', fontWeight: 600, fontFamily: "'Syne', sans-serif", padding: '4px 10px', borderRadius: '4px', marginBottom: '16px' }}>SHIPPED, THEN FULLY REMOVED</div>
                <h4 style={{ fontSize: '20px', color: '#fff', fontWeight: 600, marginBottom: '12px', fontFamily: "'Jost', sans-serif" }}>Soft Triage / "Someday"</h4>
                <p style={{ fontSize: isMobile ? '14px' : '16px', color: '#D4D4D4', lineHeight: 1.6, fontFamily: "'Jost', sans-serif", margin: 0 }}>Removed on direct user feedback: "I don't like it." The lesson: features that add standing UI and bookkeeping lose; features that live inside existing actions win.</p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'inline-block', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', fontSize: '12px', fontWeight: 600, fontFamily: "'Syne', sans-serif", padding: '4px 10px', borderRadius: '4px', marginBottom: '16px' }}>PAUSED, NOT DELETED</div>
                <h4 style={{ fontSize: '20px', color: '#fff', fontWeight: 600, marginBottom: '12px', fontFamily: "'Jost', sans-serif" }}>✨ Resurfaced</h4>
                <p style={{ fontSize: isMobile ? '14px' : '16px', color: '#D4D4D4', lineHeight: 1.6, fontFamily: "'Jost', sans-serif", margin: 0 }}>A daily spotlight of one old clip. The picker function stays fully intact - one line disables it. A deliberately different verdict from the two above.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* 12 ITERATING ON LIVE FEEDBACK */}
      <section style={{ padding: isMobile ? '64px 0' : '120px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(145deg, rgba(20,184,166,0.06) 0%, rgba(10,10,10,0) 45%, rgba(10,10,10,0) 100%)', border: '1px solid rgba(20,184,166,0.12)', borderRadius: '32px', padding: isMobile ? '16px' : '64px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(20,184,166,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <SectionHeader number="12" title="ITERATING ON LIVE FEEDBACK" isMobile={isMobile} themeColorRGB="20,184,166" iconType="pulse" />
            <h2 style={{ fontSize: isMobile ? '28px' : 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#fff', lineHeight: 1.1, letterSpacing: '0', maxWidth: '1100px', margin: 0, marginBottom: '40px' }}>
              Three diagnostic stories
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                <div style={{ flex: '0 0 auto' }}>
                  <BugDiagram variant="timing" />
                </div>
                <div>
                  <h4 style={{ fontSize: '20px', color: '#fff', fontWeight: 600, marginBottom: '12px', fontFamily: "'Jost', sans-serif" }}>The invisible "Copied ✓"</h4>
                  <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0, fontFamily: "'Jost', sans-serif" }}>Choosing a citation style closed the dropdown, which physically moved the cursor onto the <em>next</em> card - collapsing the action row before the feedback could ever render. Fixed by pinning the row open by state for exactly as long as feedback is showing, regardless of where the cursor lands.</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                <div style={{ flex: '0 0 auto' }}>
                  <BugDiagram variant="padding" />
                </div>
                <div>
                  <h4 style={{ fontSize: '20px', color: '#fff', fontWeight: 600, marginBottom: '12px', fontFamily: "'Jost', sans-serif" }}>The phantom padding</h4>
                  <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0, fontFamily: "'Jost', sans-serif" }}>"Top padding looks smaller than bottom" was actually an invisible collapsed row: with border-box sizing, an element's height can never shrink below its own padding. The hidden hover-row's padding was leaving a phantom band under every card.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                <div style={{ flex: '0 0 auto' }}>
                  <BugDiagram variant="dedup" />
                </div>
                <div>
                  <h4 style={{ fontSize: '20px', color: '#fff', fontWeight: 600, marginBottom: '12px', fontFamily: "'Jost', sans-serif" }}>The "replaced" citation that wasn't a bug</h4>
                  <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0, fontFamily: "'Jost', sans-serif" }}>A report that citing a second quote from the same article "replaced" the first entry - actually correct dedup-by-source behavior, working as designed. The fix here was an explanation, not a code change: knowing when the design is right and the mental model just needs a bridge is its own UX skill.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* 13 ACCESSIBILITY & TRUST */}
      <section style={{ padding: isMobile ? '64px 0' : '120px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(145deg, rgba(59,130,246,0.06) 0%, rgba(10,10,10,0) 45%, rgba(10,10,10,0) 100%)', border: '1px solid rgba(59,130,246,0.12)', borderRadius: '32px', padding: isMobile ? '16px' : '64px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <SectionHeader number="13" title="ACCESSIBILITY & TRUST" isMobile={isMobile} themeColorRGB="59,130,246" iconType="shield" />
            <h2 style={{ fontSize: isMobile ? '28px' : 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#fff', lineHeight: 1.1, letterSpacing: '0', maxWidth: '1100px', margin: 0, marginBottom: '40px' }}>
              Verified, not assumed
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
              {[
                "Every contrast ratio in the token sheet computed and recorded - not eyeballed.",
                "Full keyboard operability, focus-visible rings on every interactive element.",
                "A long-lived invalid-HTML bug - the account dropdown was nested inside its own trigger <button>, which browsers silently re-parent. Found by diffing the parsed DOM against the JSX source, not by inspection alone.",
                "prefers-reduced-motion honored across every animation, including mount-gated ones.",
                "Undo-over-confirm as a standing philosophy: reversible deletes get a 6-second undo bar; blocking confirms are reserved for genuinely destructive bulk actions."
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: 'rgba(255,255,255,0.02)', padding: '24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <CheckCircle2 size={24} color="var(--semantic-success)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0, fontFamily: "'Jost', sans-serif" }}>
                    {item.includes('<button>') ? (
                      <>A long-lived invalid-HTML bug - the account dropdown was nested inside its own trigger <code style={{background:'rgba(255,255,255,0.1)', padding:'2px 4px', borderRadius:'4px', fontSize:'14px'}}>&lt;button&gt;</code>, which browsers silently re-parent. Found by diffing the parsed DOM against the JSX source, not by inspection alone.</>
                    ) : item.includes('prefers-reduced-motion') ? (
                      <><code style={{background:'rgba(255,255,255,0.1)', padding:'2px 4px', borderRadius:'4px', fontSize:'14px'}}>prefers-reduced-motion</code> honored across every animation, including mount-gated ones.</>
                    ) : item}
                  </p>
                </div>
              ))}
            </div>

            <ScreenshotMockup src={privacyLedgerImg} alt="A close crop of the Privacy Ledger's three-checks-and-one-X layout" />
            <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.5)', fontSize: '14px', fontFamily: "'Jost', sans-serif" }}>
              The Privacy Ledger's three-checks-and-one-✕ layout, legible enough to read the actual copy.
            </p>
          </motion.div>
        </div>
      </section>



      {/* 14 RESULTS */}
      <section style={{ padding: isMobile ? '64px 0' : '120px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(145deg, rgba(168,85,247,0.06) 0%, rgba(10,10,10,0) 45%, rgba(10,10,10,0) 100%)', border: '1px solid rgba(168,85,247,0.12)', borderRadius: '32px', padding: isMobile ? '16px' : '64px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <SectionHeader number="14" title="RESULTS, REFLECTION & WHAT'S NEXT" isMobile={isMobile} themeColorRGB="168,85,247" iconType="star" />
            <h2 style={{ fontSize: isMobile ? '28px' : 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#fff', lineHeight: 1.1, letterSpacing: '0', maxWidth: '1100px', margin: 0, marginBottom: '24px' }}>
              Honest framing for a solo, personal project
            </h2>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: isMobile ? '16px' : '20px', color: '#e5e5e5', lineHeight: 1.5, letterSpacing: '0', margin: 0, marginBottom: '48px', maxWidth: '900px' }}>
              Validated through continuous live testing with one primary user whose screenshot-driven bug reports shaped multiple iterations. Every feature listed here shipped and builds clean. No usage metrics exist yet - none are fabricated here as a stand-in.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '32px', marginBottom: '48px' }}>
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '32px', borderRadius: '16px' }}>
                <h4 style={{ fontSize: '20px', color: '#fff', fontWeight: 600, marginBottom: '16px', fontFamily: "'Jost', sans-serif" }}>What I'd do differently</h4>
                <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0, fontFamily: "'Jost', sans-serif" }}>
                  Establish the motion invariants before the animation work, instead of excavating them bug by bug. Concept-test ideas like Soft Triage with a user before building the whole thing.
                </p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '32px', borderRadius: '16px' }}>
                <h4 style={{ fontSize: '20px', color: '#fff', fontWeight: 600, marginBottom: '16px', fontFamily: "'Jost', sans-serif" }}>What's next - Closed-Book Revisit</h4>
                <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#D4D4D4', lineHeight: 1.6, margin: 0, fontFamily: "'Jost', sans-serif" }}>
                  A designed-but-unbuilt concept: when a student organically returns to a page they clipped weeks ago, a small dismissible pill asks them to recall what mattered <em>before</em> revealing their old clips - the testing effect, ambushing the exact moment students default to re-reading. Its own honest critique: it must be one-click dismissible and per-site muteable (interruption risk), and the reveal must never auto-grade - "you remembered 1 of 3" would be exactly the shame mechanic this whole product refuses to build.
                </p>
              </div>
            </div>

            <ConceptSketch />
            <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.5)', fontSize: '14px', fontFamily: "'Jost', sans-serif" }}>
              A low-fidelity concept sketch of the dismissible recall pill appearing on an already-clipped page - deliberately unpolished, since this is unbuilt and a sketch is the honest way to show that.
            </p>
          </motion.div>
        </div>
      </section>



      {/* 03 TL;DR */}
      <section style={{ padding: isMobile ? '64px 0' : '120px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(145deg, rgba(245,158,11,0.06) 0%, rgba(10,10,10,0) 45%, rgba(10,10,10,0) 100%)', border: '1px solid rgba(245,158,11,0.12)', borderRadius: '32px', padding: isMobile ? '16px' : '64px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <SectionHeader number="03" title="TL;DR - OUTCOMES FIRST" isMobile={isMobile} themeColorRGB="245,158,11" iconType="lightning" />
            
            <h2 style={{ fontSize: isMobile ? '28px' : 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#fff', lineHeight: 1.1, letterSpacing: '0', maxWidth: '1100px', margin: 0, marginBottom: isMobile ? '32px' : '64px' }}>
              Results, before the process
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(12, 1fr)', gap: '24px' }}>
              {/* Card 01 - Spans 7 cols */}
              <motion.div 
                whileHover={{ y: -4, backgroundColor: 'rgba(245,158,11,0.08)', borderColor: 'rgba(245,158,11,0.2)' }}
                transition={{ duration: 0.3 }}
                style={{ gridColumn: isMobile ? 'span 1' : 'span 7', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '32px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ position: 'absolute', right: '-20px', bottom: '-40px', fontSize: '180px', fontWeight: 800, color: 'rgba(245,158,11,0.05)', lineHeight: 1, pointerEvents: 'none', fontFamily: "'Syne', sans-serif" }}>01</div>
                <div style={{ color: 'rgb(245,158,11)', fontSize: '14px', fontWeight: 700, letterSpacing: '1px', marginBottom: '16px', fontFamily: "'Syne', sans-serif" }}>FEATURE VELOCITY</div>
                <p style={{ fontSize: isMobile ? '16px' : '22px', color: '#e5e5e5', lineHeight: 1.5, margin: 0, fontFamily: "'Jost', sans-serif", position: 'relative', zIndex: 1 }}>
                  Across two separate research passes, <strong style={{color:'#fff', fontWeight: 600}}>12 research-backed features shipped</strong>; <strong style={{color:'#fff', fontWeight: 600}}>3 were deliberately built, evaluated against real use, and killed</strong> - that ratio is the differentiator, not a footnote.
                </p>
              </motion.div>

              {/* Card 02 - Spans 5 cols */}
              <motion.div 
                whileHover={{ y: -4, backgroundColor: 'rgba(245,158,11,0.08)', borderColor: 'rgba(245,158,11,0.2)' }}
                transition={{ duration: 0.3 }}
                style={{ gridColumn: isMobile ? 'span 1' : 'span 5', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '32px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ position: 'absolute', right: '-20px', bottom: '-40px', fontSize: '180px', fontWeight: 800, color: 'rgba(245,158,11,0.05)', lineHeight: 1, pointerEvents: 'none', fontFamily: "'Syne', sans-serif" }}>02</div>
                <div style={{ color: 'rgb(245,158,11)', fontSize: '14px', fontWeight: 700, letterSpacing: '1px', marginBottom: '16px', fontFamily: "'Syne', sans-serif" }}>DESIGN SYSTEM</div>
                <p style={{ fontSize: isMobile ? '16px' : '20px', color: '#e5e5e5', lineHeight: 1.5, margin: 0, fontFamily: "'Jost', sans-serif", position: 'relative', zIndex: 1 }}>
                  A full palette replacement mid-project (violet → "Ink & Highlighter"), re-verified numerically against WCAG on every token - nothing shipped on a guess.
                </p>
              </motion.div>

              {/* Card 03 - Spans 4 cols */}
              <motion.div 
                whileHover={{ y: -4, backgroundColor: 'rgba(245,158,11,0.08)', borderColor: 'rgba(245,158,11,0.2)' }}
                transition={{ duration: 0.3 }}
                style={{ gridColumn: isMobile ? 'span 1' : 'span 4', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '32px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ position: 'absolute', right: '-20px', bottom: '-40px', fontSize: '180px', fontWeight: 800, color: 'rgba(245,158,11,0.05)', lineHeight: 1, pointerEvents: 'none', fontFamily: "'Syne', sans-serif" }}>03</div>
                <div style={{ color: 'rgb(245,158,11)', fontSize: '14px', fontWeight: 700, letterSpacing: '1px', marginBottom: '16px', fontFamily: "'Syne', sans-serif" }}>ARCHITECTURE</div>
                <p style={{ fontSize: isMobile ? '16px' : '20px', color: '#e5e5e5', lineHeight: 1.5, margin: 0, fontFamily: "'Jost', sans-serif", position: 'relative', zIndex: 1 }}>
                  Zero-backend architecture treated as a UX decision, not an engineering constraint: <strong style={{color:'#fff', fontWeight: 500}}>privacy = trust = adoption.</strong>
                </p>
              </motion.div>

              {/* Card 04 - Spans 8 cols */}
              <motion.div 
                whileHover={{ y: -4, backgroundColor: 'rgba(245,158,11,0.08)', borderColor: 'rgba(245,158,11,0.2)' }}
                transition={{ duration: 0.3 }}
                style={{ gridColumn: isMobile ? 'span 1' : 'span 8', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '32px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ position: 'absolute', right: '-20px', bottom: '-40px', fontSize: '180px', fontWeight: 800, color: 'rgba(245,158,11,0.05)', lineHeight: 1, pointerEvents: 'none', fontFamily: "'Syne', sans-serif" }}>04</div>
                <div style={{ color: 'rgb(245,158,11)', fontSize: '14px', fontWeight: 700, letterSpacing: '1px', marginBottom: '16px', fontFamily: "'Syne', sans-serif" }}>AI INTEGRATION</div>
                <p style={{ fontSize: isMobile ? '16px' : '22px', color: '#e5e5e5', lineHeight: 1.5, margin: 0, fontFamily: "'Jost', sans-serif", position: 'relative', zIndex: 1 }}>
                  AI integrated under one hard rule, reapplied independently in two unrelated features: <strong style={{color:'#fff', fontWeight: 600}}>it may classify and ask - it may never do the student's thinking for them.</strong>
                </p>
              </motion.div>

              {/* Card 05 - Spans 12 cols */}
              <motion.div 
                whileHover={{ y: -4, backgroundColor: 'rgba(245,158,11,0.08)', borderColor: 'rgba(245,158,11,0.2)' }}
                transition={{ duration: 0.3 }}
                style={{ gridColumn: isMobile ? 'span 1' : 'span 12', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '32px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '32px' }}
              >
                <div style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', fontSize: '240px', fontWeight: 800, color: 'rgba(245,158,11,0.03)', lineHeight: 1, pointerEvents: 'none', fontFamily: "'Syne', sans-serif" }}>05</div>
                <div style={{ position: 'relative', zIndex: 1, flex: 1 }}>
                  <div style={{ color: 'rgb(245,158,11)', fontSize: '14px', fontWeight: 700, letterSpacing: '1px', marginBottom: '16px', fontFamily: "'Syne', sans-serif" }}>SECOND RESEARCH PASS</div>
                  <p style={{ fontSize: isMobile ? '16px' : '24px', color: '#e5e5e5', lineHeight: 1.5, margin: 0, fontFamily: "'Jost', sans-serif", maxWidth: '900px' }}>
                    A second, later research pass added an entire retrieval-practice study system (spaced repetition, Feynman-technique explain-back, practice exams) on top of the original clipping product - <strong style={{color:'#fff', fontWeight: 500}}>same principles, new surface.</strong>
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};
