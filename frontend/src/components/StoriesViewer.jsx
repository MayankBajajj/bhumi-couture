import React, { useState, useEffect, useRef } from 'react';
import { X, Volume2, VolumeX, ChevronLeft, ChevronRight } from 'lucide-react';

export default function StoriesViewer({ story, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const timerRef = useRef(null);

  const subStories = story.subStories || [];
  const currentSub = subStories[currentIndex];

  // Duration in ms for current slide
  const slideDuration = currentSub?.mediaType === 'video' ? 15000 : 5000;

  // Handle slide advance
  const nextSlide = () => {
    if (currentIndex < subStories.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setProgress(0);
    } else {
      onClose(); // Close viewer at end of story
    }
  };

  // Handle slide reverse
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setProgress(0);
    } else {
      setCurrentIndex(0);
      setProgress(0);
    }
  };

  // Progress bar animation loop
  useEffect(() => {
    if (!currentSub) return;

    setProgress(0);
    let start = Date.now();
    let duration = slideDuration;

    // Reset video when index changes
    if (currentSub.mediaType === 'video' && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(err => console.log('Video autoplay blocked:', err));
    }

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        nextSlide();
      }
    }, 50);

    timerRef.current = interval;

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, story]);

  // Handle video metadata (adjust duration dynamically to match video length)
  const handleVideoLoadedMetadata = () => {
    if (videoRef.current) {
      const videoDurationMs = videoRef.current.duration * 1000;
      // We can reset the timer with the actual video duration if valid
      if (videoDurationMs > 0) {
        clearInterval(timerRef.current);
        let start = Date.now();
        const interval = setInterval(() => {
          const elapsed = Date.now() - start;
          const pct = Math.min((elapsed / videoDurationMs) * 100, 100);
          setProgress(pct);

          if (pct >= 100) {
            clearInterval(interval);
            nextSlide();
          }
        }, 50);
        timerRef.current = interval;
      }
    }
  };

  return (
    <div className="stories-viewer-overlay" onClick={onClose}>
      {!currentSub ? (
        <div className="stories-viewer-container glass-card" onClick={e => e.stopPropagation()}>
          <div className="no-substories">
            <p>No stories added yet.</p>
            <button className="btn btn-primary" onClick={onClose}>Close</button>
          </div>
        </div>
      ) : (
        <div className="stories-viewer-container" onClick={e => e.stopPropagation()}>
          
          {/* Progress Bars Indicator */}
          <div className="stories-progress-container">
            {subStories.map((_, idx) => {
              let widthPct = 0;
              if (idx < currentIndex) widthPct = 100;
              else if (idx === currentIndex) widthPct = progress;
              return (
                <div key={idx} className="story-progress-bg">
                  <div className="story-progress-bar" style={{ width: `${widthPct}%` }}></div>
                </div>
              );
            })}
          </div>

          {/* Stories Header */}
          <div className="stories-viewer-header">
            <div className="stories-viewer-profile">
              <img src={story.coverImage} alt={story.name} className="story-header-avatar" />
              <span className="story-header-name">{story.name}</span>
            </div>
            <div className="stories-viewer-controls">
              {currentSub.mediaType === 'video' && (
                <button className="story-control-btn" onClick={() => setIsMuted(!isMuted)}>
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
              )}
              <button className="story-control-btn close-btn" onClick={onClose}>
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Media Container */}
          <div className="stories-media-content">
            {currentSub.mediaType === 'video' ? (
              <video
                ref={videoRef}
                src={currentSub.url}
                autoPlay
                playsInline
                muted={isMuted}
                onLoadedMetadata={handleVideoLoadedMetadata}
                className="story-media-element"
              />
            ) : (
              <img
                src={currentSub.url}
                alt="Story Content"
                className="story-media-element"
              />
            )}
          </div>

          {/* Desktop Navigation Chevrons */}
          <button className="story-nav-chevron nav-chevron-left" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>
          <button className="story-nav-chevron nav-chevron-right" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>

          {/* Clickable screen halves for tap navigation (mobile-friendly) */}
          <div className="story-tap-zone left-tap" onClick={prevSlide}></div>
          <div className="story-tap-zone right-tap" onClick={nextSlide}></div>

        </div>
      )}

      {/* Embedded CSS for Stories Viewer */}
      <style>{`
        .stories-viewer-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.92);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(15px);
        }
        .stories-viewer-container {
          position: relative;
          width: 100%;
          max-width: 440px;
          height: 90vh;
          max-height: 800px;
          background: #000;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 576px) {
          .stories-viewer-container {
            width: 100%;
            height: 100%;
            max-height: 100%;
            border-radius: 0;
          }
        }
        
        /* Progress Indicators */
        .stories-progress-container {
          position: absolute;
          top: 12px;
          left: 10px;
          right: 10px;
          display: flex;
          gap: 4px;
          z-index: 100;
        }
        .story-progress-bg {
          flex: 1;
          height: 3px;
          background: rgba(255, 255, 255, 0.35);
          border-radius: 2px;
          overflow: hidden;
        }
        .story-progress-bar {
          height: 100%;
          background: var(--pure-white);
          border-radius: 2px;
          width: 0;
        }

        /* Header */
        .stories-viewer-header {
          position: absolute;
          top: 24px;
          left: 12px;
          right: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 100;
          text-shadow: 0 1px 3px rgba(0,0,0,0.6);
        }
        .stories-viewer-profile {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .story-header-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
          border: 1px solid rgba(255,255,255,0.8);
        }
        .story-header-name {
          color: var(--pure-white);
          font-weight: 600;
          font-size: 0.9rem;
        }
        .stories-viewer-controls {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .story-control-btn {
          background: none;
          border: none;
          color: var(--pure-white);
          opacity: 0.85;
          cursor: pointer;
        }
        .story-control-btn:hover {
          opacity: 1;
          transform: scale(1.05);
        }
        .story-control-btn.close-btn {
          background: rgba(0,0,0,0.3);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Media */
        .stories-media-content {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #111;
        }
        .story-media-element {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Navigation chevrons (desktop-only hover) */
        .story-nav-chevron {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.25);
          border: none;
          color: var(--pure-white);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 105;
          opacity: 0;
          transition: opacity 0.2s, background 0.2s;
        }
        .stories-viewer-container:hover .story-nav-chevron {
          opacity: 1;
        }
        .story-nav-chevron:hover {
          background: rgba(255, 255, 255, 0.4);
        }
        .nav-chevron-left {
          left: 12px;
        }
        .nav-chevron-right {
          right: 12px;
        }

        /* Tap Zones */
        .story-tap-zone {
          position: absolute;
          top: 80px;
          bottom: 0;
          width: 45%;
          z-index: 90;
          cursor: pointer;
        }
        .left-tap {
          left: 0;
        }
        .right-tap {
          right: 0;
        }

        /* Fallback */
        .no-substories {
          padding: 2rem;
          text-align: center;
          color: var(--pure-white);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          margin: auto;
        }
        .no-substories p {
          font-size: 1.1rem;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}
