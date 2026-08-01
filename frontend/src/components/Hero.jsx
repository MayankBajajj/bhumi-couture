import React, { useRef, useState } from 'react';
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import StoriesViewer from './StoriesViewer';

export default function Hero({ onExploreClick, newArrivals = [], onSelectProduct, stories = [] }) {
  const [activeStory, setActiveStory] = useState(null);
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -250 : 250;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="container hero-container">
        
        {/* 1. Header Block (Desktop: Column 1, Mobile: Order 1) */}
        <div className="hero-header-block animate-fade-in">
          <h1>
            Redefining <span className="highlight-text">Elegance</span> &amp; Modern Style
          </h1>
        </div>

        {/* 2. Stories Block - Mobile Only (Desktop: hidden, Mobile: Order 2) */}
        {stories && stories.length > 0 && (
          <div className="hero-stories-container mobile-only-stories">
            {stories.slice(0, 4).map((story) => (
              <div 
                key={story._id} 
                className="hero-story-bubble-wrapper"
                onClick={() => setActiveStory(story)}
              >
                <div className="hero-story-bubble">
                  <div className="hero-story-ring"></div>
                  <img src={story.coverImage} alt={story.name} className="hero-story-img" />
                </div>
                <span className="hero-story-name">{story.name}</span>
              </div>
            ))}
          </div>
        )}

        {/* 3. Image Presentation Block (Desktop: Column 2, Mobile: Order 3) */}
        <div className="hero-image-wrapper">
          {/* Instagram Stories Row - Desktop Only */}
          {stories && stories.length > 0 && (
            <div className="hero-stories-container desktop-only-stories">
              {stories.slice(0, 4).map((story) => (
                <div 
                  key={story._id} 
                  className="hero-story-bubble-wrapper"
                  onClick={() => setActiveStory(story)}
                >
                  <div className="hero-story-bubble">
                    <div className="hero-story-ring"></div>
                    <img src={story.coverImage} alt={story.name} className="hero-story-img" />
                  </div>
                  <span className="hero-story-name">{story.name}</span>
                </div>
              ))}
            </div>
          )}

          <div className="hero-image-backdrop"></div>
          <img
            src="https://res.cloudinary.com/jbhylwfb/image/upload/v1782921971/bhawna_closet_products/f6c6ykyn8wgxvfa4xtsn.jpg"
            alt="Bhawna Closet Premium Fashion"
            className="hero-main-image"
          />
          {/* Floating Glassmorphic Badge */}
          <div className="floating-glass-card glass-card">
            <span className="floating-emoji">🌸</span>
            <div>
              <h4>Trending Cordsets</h4>
              <p>Now in store</p>
            </div>
          </div>
          <div className="floating-glass-card-2 glass-card">
            <span className="floating-emoji">👗</span>
            <div>
              <h4>Dresses &amp; Tops</h4>
              <p>Soft pastel hues</p>
            </div>
          </div>
        </div>

        {/* 4. Products & Actions Block (Desktop: Column 1, Mobile: Order 4) */}
        <div className="hero-products-block animate-fade-in">
          <div className="hero-badge" style={{ marginBottom: '0.75rem' }}>
            <Sparkles size={14} />
            <span>New Arrivals 2026</span>
          </div>
          {/* New Arrivals Swiper Wrapper with Arrows */}
          <div className="hero-new-arrivals-wrapper">
            <button className="swiper-arrow swiper-arrow-left" onClick={() => handleScroll('left')} title="Scroll Left">
              <ChevronLeft size={20} />
            </button>
            <div className="hero-new-arrivals">
              {newArrivals.length === 0 ? (
                <div className="hero-new-arrivals-loading">Loading New Arrivals...</div>
              ) : (
                <div ref={scrollRef} className="hero-new-arrivals-scroll">
                  {newArrivals.map((product) => (
                    <div 
                      key={product._id} 
                      className="hero-product-card animate-fade-in" 
                      onClick={() => onSelectProduct(product)}
                    >
                      <div className="hero-product-img-wrapper">
                        <img src={product.image} alt={product.name} />
                        <span className="hero-product-badge">{product.category}</span>
                      </div>
                      <div className="hero-product-info">
                        <h4>{product.name}</h4>
                        <div className="hero-product-price-row">
                          <span className="hero-product-price">
                            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(product.discountPrice || product.price)}
                          </span>
                          {product.discountPrice && (
                            <span className="hero-product-old-price">
                              {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(product.price)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button className="swiper-arrow swiper-arrow-right" onClick={() => handleScroll('right')} title="Scroll Right">
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={onExploreClick}>
              Explore Collection <ArrowRight size={18} />
            </button>
            <a href="#about-brand" className="btn btn-secondary">
              Our Story
            </a>
          </div>

          <div className="hero-metrics">
            <div className="metric-item">
              <h3>100%</h3>
              <p>Premium Fabrics</p>
            </div>
            <div className="metric-line"></div>
            <div className="metric-item">
              <h3>Custom</h3>
              <p>Tailored Fitting</p>
            </div>
            <div className="metric-line"></div>
            <div className="metric-item">
              <h3>Gurgaon</h3>
              <p>In-Store Boutique</p>
            </div>
          </div>
        </div>

      </div>

      {activeStory && (
        <StoriesViewer 
          story={activeStory} 
          onClose={() => setActiveStory(null)} 
        />
      )}

      {/* Hero Specific Styles */}
      <style>{`
        .hero-section {
          position: relative;
          background: linear-gradient(135deg, var(--pure-white) 0%, var(--light-pink) 100%);
          padding: 2.25rem 0 1.75rem 0;
          overflow: hidden;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          grid-template-rows: auto auto;
          align-items: center;
          gap: 2rem 3rem;
        }
        .hero-header-block {
          grid-column: 1;
          grid-row: 1;
          z-index: 10;
        }
        .hero-products-block {
          grid-column: 1;
          grid-row: 2;
          z-index: 10;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--soft-pink);
          color: var(--primary-pink-dark);
          padding: 0.4rem 0.85rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.03em;
        }
        .hero-header-block h1 {
          font-size: 3.5rem;
          line-height: 1.15;
          color: var(--dark-charcoal);
          margin-bottom: 0.5rem;
        }
        .highlight-text {
          color: var(--primary-pink);
          position: relative;
          font-style: italic;
        }
        .hero-new-arrivals-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
          max-width: 760px;
          margin: 0.75rem 0 1.25rem 0;
        }
        .hero-new-arrivals {
          width: 100%;
          margin: 0 !important;
        }
        .swiper-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid var(--border-light);
          color: var(--dark-charcoal);
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-fast);
        }
        .swiper-arrow:hover {
          background: var(--primary-pink);
          color: var(--pure-white);
          border-color: var(--primary-pink);
          transform: translateY(-50%) scale(1.1);
        }
        .swiper-arrow-left {
          left: -17px;
        }
        .swiper-arrow-right {
          right: -17px;
        }
        @media (max-width: 768px) {
          .swiper-arrow {
            display: none !important;
          }
        }
        .hero-new-arrivals-loading {
          color: var(--text-muted);
          font-size: 0.9rem;
          font-style: italic;
        }
        .hero-new-arrivals-scroll {
          display: flex;
          overflow-x: auto;
          gap: 1rem;
          padding: 0.5rem 0.25rem;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none; /* Firefox */
        }
        .hero-new-arrivals-scroll::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Edge */
        }
        .hero-product-card {
          flex: 0 0 170px;
          width: 170px;
          background: var(--pure-white);
          border-radius: 10px;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border-light);
          cursor: pointer;
          transition: all var(--transition-normal);
        }
        .hero-product-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--primary-pink);
        }
        .hero-product-img-wrapper {
          position: relative;
          height: 195px;
          background-color: var(--light-pink);
          overflow: hidden;
        }
        .hero-product-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }
        .hero-product-card:hover .hero-product-img-wrapper img {
          transform: scale(1.08);
        }
        .hero-product-badge {
          position: absolute;
          top: 6px;
          left: 6px;
          background: var(--primary-pink);
          color: var(--pure-white);
          font-size: 0.6rem;
          font-weight: 700;
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
          text-transform: uppercase;
        }
        .hero-product-info {
          padding: 0.75rem;
          text-align: left;
        }
        .hero-product-info h4 {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark-charcoal);
          margin-bottom: 0.25rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .hero-product-price-row {
          display: flex;
          align-items: baseline;
          gap: 0.3rem;
        }
        .hero-product-price {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--primary-pink-dark);
        }
        .hero-product-old-price {
          font-size: 0.75rem;
          text-decoration: line-through;
          color: var(--text-muted);
        }
        .hero-actions {
          display: flex;
          gap: 1.25rem;
          margin-bottom: 3.5rem;
        }
        .hero-metrics {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .metric-item h3 {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          color: var(--primary-pink-dark);
          margin-bottom: 0.25rem;
        }
        .metric-item p {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .metric-line {
          width: 1px;
          height: 40px;
          background: var(--border-light);
        }
        
        /* Right Side Image styles */
        .hero-image-wrapper {
          grid-column: 2;
          grid-row: 1 / span 2;
          align-self: center;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-stories-container {
          position: absolute;
          top: -105px;
          left: -180px;
          display: flex;
          gap: 1.25rem;
          justify-content: flex-start;
          align-items: center;
          z-index: 12;
          width: max-content;
        }
        .hero-story-bubble-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
          cursor: pointer;
          transition: transform var(--transition-fast);
        }
        .hero-story-bubble-wrapper:hover {
          transform: scale(1.05);
        }
        .hero-story-bubble {
          position: relative;
          width: 88px;
          height: 88px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--pure-white);
          box-shadow: var(--shadow-sm);
        }
        .hero-story-ring {
          position: absolute;
          top: -3px;
          left: -3px;
          right: -3px;
          bottom: -3px;
          border-radius: 50%;
          padding: 2.5px;
          background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          z-index: 1;
        }
        .hero-story-img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--pure-white);
          z-index: 2;
        }
        .hero-story-name {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--dark-charcoal);
          text-transform: capitalize;
          text-align: center;
          max-width: 88px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .mobile-only-stories {
          display: none !important;
        }
        .desktop-only-stories {
          display: flex !important;
        }
        .hero-image-backdrop {
          position: absolute;
          width: 78%;
          height: 88%;
          background: var(--soft-pink);
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          filter: blur(10px);
          z-index: 1;
          transform: rotate(-5deg);
        }
        .hero-main-image {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 370px;
          height: 470px;
          object-fit: cover;
          border-radius: 185px 185px 20px 20px;
          box-shadow: var(--shadow-md);
          border: 5px solid var(--pure-white);
        }
        .floating-glass-card {
          position: absolute;
          left: -20px;
          bottom: 60px;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1.25rem;
        }
        .floating-glass-card-2 {
          position: absolute;
          right: -10px;
          top: 40px;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1.25rem;
        }
        .floating-emoji {
          font-size: 1.5rem;
        }
        .floating-glass-card h4, .floating-glass-card-2 h4 {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark-charcoal);
        }
        .floating-glass-card p, .floating-glass-card-2 p {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        /* Responsive Hero */
        @media (max-width: 1024px) {
          .hero-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
            text-align: center;
          }
          .hero-header-block {
            order: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
          .hero-header-block h1 {
            font-size: 2.75rem;
          }
          .mobile-only-stories {
            display: flex !important;
            order: 2;
            position: static;
            transform: none !important;
            margin: 1.5rem auto;
            justify-content: center;
          }
          .desktop-only-stories {
            display: none !important;
          }
          .hero-image-wrapper {
            order: 3;
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .hero-products-block {
            order: 4;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-badge, .hero-actions, .hero-metrics {
            justify-content: center;
          }
          .hero-new-arrivals {
            margin: 1.5rem auto;
          }
          .hero-new-arrivals-scroll {
            justify-content: flex-start;
          }
          .hero-main-image {
            max-width: 280px;
            height: 380px;
          }
          .floating-glass-card {
            left: 10px;
          }
          .floating-glass-card-2 {
            right: 10px;
          }
        }
        @media (max-width: 576px) {
          .hero-section {
            padding: 1.5rem 0 !important;
          }
          .hero-container {
            gap: 1.25rem !important;
          }
          .hero-header-block h1 {
            font-size: 2.1rem !important;
            line-height: 1.25 !important;
            margin-bottom: 0.85rem !important;
          }
          .hero-badge {
            margin-bottom: 0.5rem !important;
            margin-top: 0.25rem !important;
            padding: 0.35rem 0.75rem !important;
            font-size: 0.75rem !important;
          }
          .mobile-only-stories {
            margin: 0.25rem auto !important;
            top: auto !important;
            left: auto !important;
            transform: none !important;
            position: static !important;
            gap: 0.75rem !important;
          }
          .mobile-only-stories .hero-story-bubble {
            width: 62px !important;
            height: 62px !important;
          }
          .mobile-only-stories .hero-story-img {
            width: 56px !important;
            height: 56px !important;
          }
          .mobile-only-stories .hero-story-name {
            font-size: 0.7rem !important;
            max-width: 70px !important;
          }
          .hero-image-wrapper {
            margin-top: -0.75rem !important;
            margin-bottom: -0.5rem !important;
          }
          .hero-new-arrivals-wrapper {
            margin: 0.25rem 0 0.75rem 0 !important;
          }
          .hero-new-arrivals {
            margin: 0.75rem 0 !important;
          }
          .hero-new-arrivals-scroll {
            justify-content: flex-start !important;
            padding: 0.25rem;
          }
          .hero-product-card {
            flex: 0 0 130px;
            width: 130px;
          }
          .hero-product-img-wrapper {
            height: 140px;
          }
          .hero-actions {
            flex-direction: row !important;
            justify-content: center !important;
            gap: 0.75rem !important;
            margin-bottom: 1rem !important;
          }
          .hero-actions .btn {
            padding: 0.7rem 1.15rem !important;
            font-size: 0.8rem !important;
            width: auto !important;
          }
          .hero-metrics {
            display: none !important;
          }
          .hero-main-image {
            max-width: 220px !important;
            height: 300px !important;
          }
          .floating-glass-card {
            left: -15px !important;
            bottom: 20px !important;
            padding: 0.4rem 0.65rem !important;
          }
          .floating-glass-card-2 {
            right: -15px !important;
            top: 20px !important;
            padding: 0.4rem 0.65rem !important;
          }
          .floating-emoji {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
