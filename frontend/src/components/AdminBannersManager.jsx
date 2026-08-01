import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Link, SortAsc, Image, Loader2, AlertCircle } from 'lucide-react';
import { bannerService as bannersAPI } from '../services/bannerService';

export default function AdminBannersManager() {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Form State
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [linkUrl, setLinkUrl] = useState('');
  const [order, setOrder] = useState('0');

  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await bannersAPI.getBanners();
      setBanners(data || []);
    } catch (err) {
      setError(err.message || 'Failed to load banners');
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreateBanner = async (e) => {
    e.preventDefault();
    if (!imageFile) {
      setError('Please select an image file first');
      return;
    }

    setSubmitLoading(true);
    setError('');
    setSuccess('');

    try {
      const formData = new FormData();
      formData.append('image', imageFile);
      formData.append('linkUrl', linkUrl);
      formData.append('order', order);

      const newBanner = await bannersAPI.createBanner(formData);
      setBanners((prev) => [...prev, newBanner].sort((a, b) => a.order - b.order));
      setSuccess('Banner uploaded successfully!');
      
      // Reset Form
      setImageFile(null);
      setImagePreview('');
      setLinkUrl('');
      setOrder('0');
    } catch (err) {
      setError(err.message || 'Failed to upload banner');
    } finally {
      setSubmitLoading(false);
    }
  };

  const handleDeleteBanner = async (id) => {
    if (!window.confirm('Are you sure you want to delete this banner?')) return;
    setError('');
    setSuccess('');

    try {
      await bannersAPI.deleteBanner(id);
      setBanners((prev) => prev.filter((b) => b._id !== id));
      setSuccess('Banner deleted successfully!');
    } catch (err) {
      setError(err.message || 'Failed to delete banner');
    }
  };

  return (
    <div className="admin-banners-manager">
      <div className="admin-header-row">
        <h2>Manage Homepage Banners</h2>
        <p className="admin-subtitle">Upload and arrange banner slideshow images for your homepage</p>
      </div>

      {error && (
        <div className="admin-alert error-alert">
          <AlertCircle size={18} />
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div className="admin-alert success-alert">
          <AlertCircle size={18} />
          <span>{success}</span>
        </div>
      )}

      <div className="banners-grid-container">
        
        {/* Banner Upload Form Card */}
        <div className="admin-card upload-banner-card">
          <h3>Add New Banner Slide</h3>
          <form onSubmit={handleCreateBanner} className="banner-form">
            <div className="form-group">
              <label>Banner Image</label>
              <div className="banner-file-uploader">
                {imagePreview ? (
                  <div className="preview-container">
                    <img src={imagePreview} alt="Banner Preview" className="banner-img-preview" />
                    <button 
                      type="button" 
                      className="remove-preview-btn"
                      onClick={() => {
                        setImageFile(null);
                        setImagePreview('');
                      }}
                    >
                      Change Image
                    </button>
                  </div>
                ) : (
                  <label className="file-select-label">
                    <Image size={24} />
                    <span>Choose Banner Image</span>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageChange}
                      required 
                      style={{ display: 'none' }}
                    />
                  </label>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col">
                <label>
                  <Link size={14} style={{ marginRight: '4px' }} /> Redirect Link (Optional)
                </label>
                <input 
                  type="text" 
                  value={linkUrl} 
                  onChange={(e) => setLinkUrl(e.target.value)} 
                  placeholder="e.g., #shop-collection" 
                />
              </div>

              <div className="form-group col-short">
                <label>
                  <SortAsc size={14} style={{ marginRight: '4px' }} /> Sort Order
                </label>
                <input 
                  type="number" 
                  value={order} 
                  onChange={(e) => setOrder(e.target.value)} 
                  min="0"
                  required 
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full" disabled={submitLoading}>
              {submitLoading ? (
                <>
                  <Loader2 className="spinner" size={18} /> Uploading banner...
                </>
              ) : (
                <>
                  <Plus size={18} /> Add Banner Slide
                </>
              )}
            </button>
          </form>
        </div>

        {/* Existing Banners Grid */}
        <div className="admin-card existing-banners-card">
          <h3>Active Banners</h3>
          
          {loading ? (
            <div className="banners-loading">
              <Loader2 className="spinner" size={24} />
              <span>Loading banners...</span>
            </div>
          ) : banners.length === 0 ? (
            <div className="no-banners-state">
              <Image size={36} />
              <p>No custom banners uploaded. Serving default seed slides.</p>
            </div>
          ) : (
            <div className="banners-list-grid">
              {banners.map((banner) => (
                <div key={banner._id} className="banner-item-card">
                  <div className="banner-image-preview-wrapper">
                    <img src={banner.imageUrl} alt="Banner Slide" />
                    <button 
                      className="delete-banner-badge" 
                      onClick={() => handleDeleteBanner(banner._id)}
                      title="Delete Banner"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="banner-meta">
                    <span className="banner-order-tag">Order: {banner.order}</span>
                    {banner.linkUrl && (
                      <span className="banner-link-tag" title={banner.linkUrl}>
                        <Link size={12} /> Link Set
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      <style>{`
        .banners-grid-container {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 2rem;
          margin-top: 1.5rem;
        }
        .banner-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-top: 1rem;
        }
        .banner-file-uploader {
          border: 2px dashed var(--border-light);
          border-radius: 12px;
          min-height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.4);
          overflow: hidden;
          transition: border-color 0.2s ease;
        }
        .banner-file-uploader:hover {
          border-color: var(--primary-pink);
        }
        .file-select-label {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          color: var(--text-muted);
          width: 100%;
          padding: 2rem;
          text-align: center;
        }
        .file-select-label:hover {
          color: var(--primary-pink);
        }
        .preview-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .banner-img-preview {
          width: 100%;
          height: 140px;
          object-fit: cover;
        }
        .remove-preview-btn {
          background: var(--dark-charcoal);
          color: var(--pure-white);
          border: none;
          padding: 0.35rem 0.85rem;
          font-size: 0.75rem;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 0.5rem;
          font-weight: 600;
          transition: background 0.2s ease;
        }
        .remove-preview-btn:hover {
          background: var(--primary-pink);
        }
        .form-row {
          display: flex;
          gap: 1rem;
        }
        .col {
          flex: 1;
        }
        .col-short {
          width: 90px;
        }
        .banners-loading, .no-banners-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 240px;
          gap: 0.75rem;
          color: var(--text-muted);
        }
        .banners-list-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 1.25rem;
          margin-top: 1rem;
        }
        .banner-item-card {
          background: var(--pure-white);
          border-radius: 10px;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border-light);
        }
        .banner-image-preview-wrapper {
          position: relative;
          width: 100%;
          height: 110px;
          background: var(--border-light);
        }
        .banner-image-preview-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .delete-banner-badge {
          position: absolute;
          top: 8px;
          right: 8px;
          background: rgba(220, 53, 69, 0.9);
          color: var(--pure-white);
          border: none;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .delete-banner-badge:hover {
          transform: scale(1.1);
          background: rgba(220, 53, 69, 1);
        }
        .banner-meta {
          padding: 0.65rem;
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--dark-charcoal);
        }
        .banner-order-tag {
          background: var(--soft-pink);
          color: var(--primary-pink-dark);
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
        }
        .banner-link-tag {
          color: var(--primary-pink);
          display: flex;
          align-items: center;
          gap: 3px;
        }
        @media (max-width: 992px) {
          .banners-grid-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
