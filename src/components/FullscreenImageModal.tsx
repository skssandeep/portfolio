import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle, ChevronLeft, ChevronRight, ZoomOut, ZoomIn } from 'lucide-react';

interface FullscreenImageModalProps {
  isOpen: boolean;
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

export const FullscreenImageModal: React.FC<FullscreenImageModalProps> = ({ isOpen, images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [imageWidth, setImageWidth] = useState(500);
  const [direction, setDirection] = useState(0);
  
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const pinchDistance = useRef<number>(0);
  const tempZoomWidth = useRef<number>(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setDirection(0);
    }
  }, [isOpen, initialIndex]);

  useEffect(() => {
    if (isOpen) {
      setImageWidth(isMobile ? window.innerWidth : 500);
    }
  }, [currentIndex, isMobile, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        const zoomDelta = e.deltaY * -3;
        setImageWidth(w => Math.max(300, Math.min(3000, w + zoomDelta)));
      }
    };
    const el = modalContainerRef.current;
    if (el) {
      el.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (el) el.removeEventListener('wheel', handleWheel);
    };
  }, [currentIndex, isOpen]);

  const handleNextImage = (e?: React.SyntheticEvent) => {
    e?.stopPropagation();
    if (currentIndex < images.length - 1) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevImage = (e?: React.SyntheticEvent) => {
    e?.stopPropagation();
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentIndex < images.length - 1) {
        handleNextImage();
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        handlePrevImage();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, images.length, isOpen, onClose]);

  useEffect(() => {
    if (isOpen && isMobile) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isMobile, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          onClick={onClose}
          style={{ 
            position: 'fixed', 
            inset: 0, 
            zIndex: 99999, 
            background: 'rgba(0,0,0,0.9)', 
            backdropFilter: 'blur(10px)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: isMobile ? 0 : '40px',
            cursor: 'default'
          }}
        >
          <button 
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            style={{ position: 'absolute', top: isMobile ? '20px' : '40px', right: isMobile ? '20px' : '40px', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', padding: isMobile ? '8px' : '12px', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', zIndex: 10000, backdropFilter: 'blur(10px)' }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.8)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}
          >
            <XCircle size={isMobile ? 24 : 32} />
          </button>

          {/* Prev Button */}
          {currentIndex > 0 && !isMobile && (
            <button 
              onClick={handlePrevImage}
              style={{ position: 'absolute', left: '40px', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', padding: '16px', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', zIndex: 10000, backdropFilter: 'blur(10px)' }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.8)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}
            >
              <ChevronLeft size={32} />
            </button>
          )}

          {isMobile ? (
            <div 
              className="no-scrollbar"
              style={{
                display: 'flex',
                width: '100vw',
                height: '100vh',
                overflowX: (typeof window !== 'undefined' && imageWidth > window.innerWidth + 5) ? 'hidden' : 'auto',
                overflowY: 'hidden',
                scrollSnapType: (typeof window !== 'undefined' && imageWidth > window.innerWidth + 5) ? 'none' : 'x mandatory',
                WebkitOverflowScrolling: 'touch'
              }}
              onScroll={(e) => {
                const isZoomedLocal = typeof window !== 'undefined' && imageWidth > window.innerWidth + 5;
                if (isZoomedLocal) return;
                const index = Math.round(e.currentTarget.scrollLeft / window.innerWidth);
                if (index !== currentIndex) {
                  setCurrentIndex(index);
                }
              }}
              ref={(el) => {
                if (el && !el.dataset.initialized) {
                  el.scrollLeft = currentIndex * window.innerWidth;
                  el.dataset.initialized = 'true';
                }
              }}
            >
              {images.map((src, idx) => (
                <div 
                  key={idx}
                  style={{
                    minWidth: '100vw',
                    width: '100vw',
                    height: '100vh',
                    scrollSnapAlign: 'start',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative'
                  }}
                >
                  {idx === currentIndex ? (
                    <div 
                      ref={modalContainerRef}
                      className="no-scrollbar"
                      style={{ width: '100vw', height: '100vh', overflowX: (typeof window !== 'undefined' && imageWidth > window.innerWidth + 5) ? 'auto' : 'hidden', overflowY: 'auto', touchAction: 'pan-x pan-y', WebkitOverflowScrolling: 'touch', textAlign: 'center' }}
                      onClick={onClose}
                      onTouchStart={(e) => {
                        if (e.touches.length === 2) {
                          const dx = e.touches[0].clientX - e.touches[1].clientX;
                          const dy = e.touches[0].clientY - e.touches[1].clientY;
                          pinchDistance.current = Math.sqrt(dx * dx + dy * dy);
                          tempZoomWidth.current = imageWidth;
                        }
                      }}
                      onTouchMove={(e) => {
                        if (e.touches.length === 2 && pinchDistance.current) {
                          const dx = e.touches[0].clientX - e.touches[1].clientX;
                          const dy = e.touches[0].clientY - e.touches[1].clientY;
                          const distance = Math.sqrt(dx * dx + dy * dy);
                          const diff = distance - pinchDistance.current;
                          const newWidth = Math.min(3000, Math.max(window.innerWidth, tempZoomWidth.current + diff * 1.5));
                          tempZoomWidth.current = newWidth;
                          pinchDistance.current = distance;
                          if (modalContainerRef.current) {
                            const img = modalContainerRef.current.querySelector('img');
                            if (img) img.style.width = `${newWidth}px`;
                          }
                        }
                      }}
                      onTouchEnd={(e) => {
                        if (e.touches.length < 2) {
                          pinchDistance.current = 0;
                          if (tempZoomWidth.current && tempZoomWidth.current !== imageWidth) {
                            setImageWidth(tempZoomWidth.current);
                          }
                        }
                      }}
                    >
                      <div style={{ display: 'table', width: '100%', height: '100%' }}>
                        <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                          <img 
                             draggable={false}
                             onClick={(e) => e.stopPropagation()}
                             src={src} 
                             style={{ width: `${imageWidth}px`, maxWidth: 'none', height: 'auto', display: 'block', borderRadius: '0px', margin: '0 auto', userSelect: 'none', WebkitUserSelect: 'none', WebkitTouchCallout: 'none' }} 
                             onLoad={(e) => {
                               const img = e.target as HTMLImageElement;
                               const aspectRatio = img.naturalWidth / img.naturalHeight;
                               const maxInitialHeight = window.innerHeight * 0.85;
                               let fitWidth = maxInitialHeight * aspectRatio;
                               if (fitWidth > window.innerWidth) {
                                 fitWidth = window.innerWidth;
                               }
                               setImageWidth(fitWidth);
                             }}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                     <img 
                       src={src} 
                       style={{ maxWidth: '100vw', maxHeight: '100vh', objectFit: 'contain' }} 
                     />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div 
              ref={modalContainerRef}
              style={{ maxHeight: '90vh', width: '90vw', overflow: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '20px 0' }} 
              onClick={onClose}
            >
              <motion.img 
                 onClick={(e) => e.stopPropagation()}
                 key={currentIndex} 
                 initial={{ opacity: 0, x: direction * 300, y: direction === 0 ? 20 : 0, scale: direction === 0 ? 0.95 : 1 }} 
                 animate={{ opacity: 1, x: 0, y: 0, scale: 1 }} 
                 exit={{ opacity: 0, x: direction * -300, y: direction === 0 ? -20 : 0, scale: direction === 0 ? 0.95 : 1 }}
                 transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
                 src={images[currentIndex]} 
                 onLoad={(e) => {
                   const img = e.target as HTMLImageElement;
                   const aspectRatio = img.naturalWidth / img.naturalHeight;
                   const maxInitialHeight = window.innerHeight * 0.85;
                   const fitWidth = maxInitialHeight * aspectRatio;
                   setImageWidth(img.naturalWidth > img.naturalHeight ? Math.min(1200, fitWidth) : fitWidth);
                 }}
                 style={{ width: `${imageWidth}px`, maxWidth: 'none', height: 'auto', display: 'block', borderRadius: '4px', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))', margin: '0 auto' }} 
              />
            </div>
          )}

          {/* Zoom Controls */}
          {!isMobile && (
            <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: '16px', zIndex: 10000, background: 'rgba(0,0,0,0.7)', padding: '12px 24px', borderRadius: '100px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }} onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setImageWidth(w => Math.max(300, w - 200))} style={{ color: '#fff', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', opacity: imageWidth <= 300 ? 0.5 : 1 }} disabled={imageWidth <= 300} title="Zoom Out">
                <ZoomOut size={24} />
              </button>
              <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.2)' }} />
              <button onClick={() => setImageWidth(w => Math.min(3000, w + 200))} style={{ color: '#fff', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', opacity: imageWidth >= 3000 ? 0.5 : 1 }} disabled={imageWidth >= 3000} title="Zoom In">
                <ZoomIn size={24} />
              </button>
            </div>
          )}

          {/* Next Button */}
          {currentIndex < images.length - 1 && !isMobile && (
            <button 
              onClick={handleNextImage}
              style={{ position: 'absolute', right: '40px', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', padding: '16px', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', zIndex: 10000, backdropFilter: 'blur(10px)' }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.8)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}
            >
              <ChevronRight size={32} />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
