import React from 'react';
import { Heart, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from './ProductCard';

export default function WishlistPage({ onContinueShopping, onSelectProduct }) {
  const { wishlistItems, toggleWishlist } = useWishlist();

  if (wishlistItems.length === 0) {
    return (
      <main className="wishlist-view section animate-fade-in">
        <div className="container">
          <div className="empty-wishlist-card glass-card">
            <Heart size={52} className="empty-heart-icon" />
            <h2>Your Wishlist is Empty</h2>
            <p>Save outfits you love to your wishlist, so you can easily find them later.</p>
            <button className="btn btn-primary" onClick={onContinueShopping}>
              Browse Shop <ArrowRight size={18} />
            </button>
          </div>
        </div>
        <style>{`
          .empty-wishlist-card {
            text-align: center;
            padding: 5rem 2rem;
            max-width: 600px;
            margin: 4rem auto;
            background: var(--pure-white);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
          }
          .empty-heart-icon {
            color: var(--primary-pink);
          }
          .empty-wishlist-card h2 {
            font-size: 2rem;
            color: var(--dark-charcoal);
          }
          .empty-wishlist-card p {
            color: var(--text-muted);
            line-height: 1.6;
          }
        `}</style>
      </main>
    );
  }

  return (
    <main className="wishlist-view section animate-fade-in">
      <div className="container">
        <div className="wishlist-banner glass-card">
          <h1>Your Wishlist</h1>
          <p>Saved styles that caught your eye. Tap to view or add them to bag!</p>
        </div>

        <div className="wishlist-grid-wrapper">
          <p className="wishlist-count">Saved Items ({wishlistItems.length})</p>
          
          <div className="wishlist-cards-grid">
            {wishlistItems.map((product) => (
              <div key={product._id} className="wishlist-item-wrapper">
                <ProductCard product={product} onSelectProduct={onSelectProduct} />
                <button
                  className="btn btn-outline wishlist-remove-btn"
                  onClick={() => toggleWishlist(product)}
                >
                  <Trash2 size={14} /> Remove Item
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .wishlist-banner {
          background: linear-gradient(135deg, var(--primary-pink) 0%, var(--primary-pink-dark) 100%);
          padding: 3rem;
          border-radius: 16px;
          text-align: center;
          color: var(--pure-white);
          margin-bottom: 2rem;
        }
        .wishlist-banner h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: var(--pure-white);
        }
        .wishlist-banner p {
          font-size: 1.05rem;
          color: var(--light-pink);
        }
        
        .wishlist-count {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          font-weight: 500;
        }
        
        .wishlist-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1.5rem;
          width: 100%;
        }
        .wishlist-cards-grid > * {
          min-width: 0;
        }
        
        .wishlist-item-wrapper {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          width: 100%;
          min-width: 0;
          overflow: hidden;
        }
        
        .wishlist-remove-btn {
          width: 100%;
          padding: 0.6rem;
          font-size: 0.8rem;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
        }
        .wishlist-remove-btn:hover {
          background: #ffebe9;
          border-color: #dc3545;
          color: #c82333;
        }

        @media (max-width: 992px) {
          .wishlist-cards-grid {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 1.25rem;
          }
        }
        @media (max-width: 576px) {
          .wishlist-view {
            padding-top: 1rem !important;
            padding-bottom: 2rem !important;
          }
          .wishlist-banner {
            padding: 1.25rem 1rem !important;
            margin-bottom: 1rem !important;
          }
          .wishlist-banner h1 {
            font-size: 1.5rem !important;
            margin-bottom: 0.25rem !important;
          }
          .wishlist-banner p {
            font-size: 0.85rem !important;
          }
          .wishlist-grid-wrapper {
            width: 100%;
            overflow: hidden;
          }
          .wishlist-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem !important;
            width: 100% !important;
          }
          .wishlist-count {
            font-size: 0.8rem !important;
            margin-bottom: 0.85rem !important;
          }
          .wishlist-remove-btn {
            padding: 0.45rem 0.2rem !important;
            font-size: 0.72rem !important;
            gap: 0.2rem !important;
            white-space: nowrap;
          }
        }
      `}</style>
    </main>
  );
}
