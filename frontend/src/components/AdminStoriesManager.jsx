import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Video, Image, Film, Loader2 } from 'lucide-react';
import { storyService } from '../services/storyService';

export default function AdminStoriesManager() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  // Create Story Form
  const [storyName, setStoryName] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [creating, setCreating] = useState(false);

  // Selected Story to manage sub-stories
  const [selectedStory, setSelectedStory] = useState(null);
  const [subStoryFile, setSubStoryFile] = useState(null);
  const [addingSubStory, setAddingSubStory] = useState(false);

  // Fetch all stories on load
  const loadStories = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await storyService.getStories();
      setStories(data || []);
      // Sync selected story details if currently managed
      if (selectedStory) {
        const updated = data.find(s => s._id === selectedStory._id);
        setSelectedStory(updated || null);
      }
    } catch (err) {
      setError(err.message || 'Failed to load stories.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStories();
  }, []);

  // Handle Cover File selection
  const handleCoverChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setCoverImage(e.target.files[0]);
    }
  };

  // Create Story
  const handleCreateStory = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (stories.length >= 4) {
      setError('Maximum limit of 4 stories reached. Delete an existing story first.');
      return;
    }

    if (!storyName.trim()) {
      setError('Please enter a story name.');
      return;
    }

    if (!coverImage) {
      setError('Please select a cover image.');
      return;
    }

    setCreating(true);
    try {
      const formData = new FormData();
      formData.append('name', storyName.trim());
      formData.append('coverImage', coverImage);

      await storyService.createStory(formData);
      setSuccess('Story created successfully!');
      setStoryName('');
      setCoverImage(null);
      // Clear file input
      const fileInput = document.getElementById('cover-image-input');
      if (fileInput) fileInput.value = '';
      
      await loadStories();
    } catch (err) {
      setError(err.message || 'Failed to create story.');
    } finally {
      setCreating(false);
    }
  };

  // Delete Story
  const handleDeleteStory = async (storyId) => {
    if (!window.confirm('Are you sure you want to delete this story? This will permanently delete the cover image and all uploaded sub-stories from Cloudinary.')) {
      return;
    }

    setError('');
    setSuccess('');
    try {
      await storyService.deleteStory(storyId);
      setSuccess('Story deleted successfully!');
      if (selectedStory?._id === storyId) {
        setSelectedStory(null);
      }
      await loadStories();
    } catch (err) {
      setError(err.message || 'Failed to delete story.');
    }
  };

  // Add Sub-story (Photo or Video)
  const handleAddSubStory = async (e) => {
    e.preventDefault();
    if (!selectedStory) return;
    setError('');
    setSuccess('');

    if (!subStoryFile) {
      setError('Please select a photo or video file.');
      return;
    }

    setAddingSubStory(true);
    try {
      const formData = new FormData();
      formData.append('mediaFile', subStoryFile);

      const updatedStory = await storyService.addSubStory(selectedStory._id, formData);
      setSuccess('Sub-story added successfully!');
      setSubStoryFile(null);
      
      // Clear file input
      const fileInput = document.getElementById('substory-file-input');
      if (fileInput) fileInput.value = '';

      // Update state
      setSelectedStory(updatedStory);
      await loadStories();
    } catch (err) {
      setError(err.message || 'Failed to upload sub-story. Make sure video size is less than 100MB.');
    } finally {
      setAddingSubStory(false);
    }
  };

  // Delete Sub-story
  const handleDeleteSubStory = async (subId) => {
    if (!selectedStory) return;
    if (!window.confirm('Are you sure you want to delete this slide from the story?')) {
      return;
    }

    setError('');
    setSuccess('');
    try {
      const result = await storyService.deleteSubStory(selectedStory._id, subId);
      setSuccess('Slide deleted successfully!');
      setSelectedStory(result.story);
      await loadStories();
    } catch (err) {
      setError(err.message || 'Failed to delete slide.');
    }
  };

  return (
    <div className="admin-stories-manager">
      <div className="section-header">
        <h2>Manage Instagram Stories</h2>
        <p className="subtitle">Configure up to 4 homepage stories with image and video slide decks.</p>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <div className="stories-grid-layout">
        
        {/* Left Column: Create & View Story list */}
        <div className="stories-column-left">
          
          {/* Create Form */}
          <div className="admin-card story-create-card">
            <h3>Create New Story ({stories.length}/4)</h3>
            
            {stories.length >= 4 ? (
              <div className="limit-warning">
                ⚠️ Maximum limit of 4 stories reached. You must delete an existing story before creating a new one.
              </div>
            ) : (
              <form onSubmit={handleCreateStory} className="story-form">
                <div className="form-group">
                  <label htmlFor="storyName">Story Title</label>
                  <input
                    type="text"
                    id="storyName"
                    value={storyName}
                    onChange={(e) => setStoryName(e.target.value)}
                    placeholder="e.g. Cordsets, New Arrivals"
                    className="form-control"
                    disabled={creating}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="cover-image-input">Cover Thumbnail Image</label>
                  <input
                    type="file"
                    id="cover-image-input"
                    accept="image/*"
                    onChange={handleCoverChange}
                    className="form-control file-input"
                    disabled={creating}
                  />
                  <small className="help-text">This will be the circular bubble image on the homepage.</small>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-submit"
                  disabled={creating}
                >
                  {creating ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Creating Story...
                    </>
                  ) : (
                    <>
                      <Plus size={16} /> Create Story
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Stories List */}
          <div className="admin-card story-list-card">
            <h3>Active Stories</h3>
            {loading && stories.length === 0 ? (
              <div className="loading-state">
                <Loader2 size={24} className="animate-spin" /> Loading stories...
              </div>
            ) : stories.length === 0 ? (
              <div className="empty-state">No stories created. Add your first story above!</div>
            ) : (
              <div className="stories-list">
                {stories.map((story) => (
                  <div 
                    key={story._id} 
                    className={`story-list-item ${selectedStory?._id === story._id ? 'selected' : ''}`}
                    onClick={() => setSelectedStory(story)}
                  >
                    <div className="story-item-avatar">
                      <img src={story.coverImage} alt={story.name} />
                    </div>
                    <div className="story-item-details">
                      <h4>{story.name}</h4>
                      <p>{story.subStories?.length || 0} slides (photos/videos)</p>
                    </div>
                    <div className="story-item-actions" onClick={(e) => e.stopPropagation()}>
                      <button 
                        className="btn-icon-danger" 
                        onClick={() => handleDeleteStory(story._id)}
                        title="Delete Story"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Right Column: Manage slides/sub-stories in selected story */}
        <div className="stories-column-right">
          {selectedStory ? (
            <div className="admin-card story-details-card">
              <div className="story-details-header">
                <div className="story-details-title-row">
                  <img src={selectedStory.coverImage} alt={selectedStory.name} className="selected-story-avatar" />
                  <div>
                    <h3>Managing Slides: {selectedStory.name}</h3>
                    <p>Add and delete photos or short video clips inside this story.</p>
                  </div>
                </div>
              </div>

              {/* Add slide form */}
              <form onSubmit={handleAddSubStory} className="add-substory-form">
                <h4>Add New Slide (Photo / Video)</h4>
                <div className="form-row-align">
                  <input
                    type="file"
                    id="substory-file-input"
                    accept="image/*,video/*"
                    onChange={(e) => setSubStoryFile(e.target.files ? e.target.files[0] : null)}
                    className="form-control file-input-inline"
                    disabled={addingSubStory}
                  />
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={addingSubStory}
                  >
                    {addingSubStory ? (
                      <>
                        <Loader2 size={16} className="animate-spin" /> Uploading...
                      </>
                    ) : (
                      <>
                        <Plus size={16} /> Add Slide
                      </>
                    )}
                  </button>
                </div>
                <small className="help-text">Supports images (JPG, PNG, WebP) and short video clips (MP4, MOV up to 100MB).</small>
              </form>

              {/* Slides Grid list */}
              <div className="substories-section">
                <h4>Story Slides ({selectedStory.subStories?.length || 0})</h4>
                {selectedStory.subStories?.length === 0 ? (
                  <div className="empty-substories">No slides added yet. Select a photo/video and add one above!</div>
                ) : (
                  <div className="substories-grid">
                    {selectedStory.subStories.map((sub, index) => (
                      <div key={sub._id} className="substory-card">
                        <span className="slide-index-badge">Slide {index + 1}</span>
                        <div className="substory-preview">
                          {sub.mediaType === 'video' ? (
                            <div className="video-preview-wrapper">
                              <video src={sub.url} muted className="substory-video-tag" />
                              <div className="video-type-badge"><Film size={12} /> Video</div>
                            </div>
                          ) : (
                            <img src={sub.url} alt="Slide preview" className="substory-img-tag" />
                          )}
                        </div>
                        <div className="substory-meta">
                          <span className="media-type-lbl capitalize">
                            {sub.mediaType}
                          </span>
                          <button 
                            className="btn-icon-danger"
                            onClick={() => handleDeleteSubStory(sub._id)}
                            title="Delete Slide"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          ) : (
            <div className="admin-card select-story-placeholder">
              <Film size={48} className="placeholder-icon" />
              <h3>No Story Selected</h3>
              <p>Select an active story from the list on the left to add slides (photos and videos) or manage existing ones.</p>
            </div>
          )}
        </div>

      </div>

      {/* Internal styling for Stories Manager Dashboard */}
      <style>{`
        .admin-stories-manager {
          color: var(--dark-charcoal);
        }
        .section-header {
          margin-bottom: 2rem;
        }
        .subtitle {
          color: var(--text-muted);
          font-size: 0.95rem;
        }
        .stories-grid-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 2rem;
          align-items: start;
        }
        @media (max-width: 992px) {
          .stories-grid-layout {
            grid-template-columns: 1fr;
          }
        }
        .admin-card {
          background: var(--pure-white);
          border-radius: 12px;
          padding: 1.5rem;
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-sm);
          margin-bottom: 1.5rem;
        }
        .admin-card h3 {
          font-size: 1.15rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
          color: var(--dark-charcoal);
        }
        .limit-warning {
          background: #fff9e6;
          color: #b27a00;
          border: 1px solid #ffe89e;
          padding: 0.75rem 1rem;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 500;
        }
        .form-group {
          margin-bottom: 1.25rem;
        }
        .form-group label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--text-muted);
        }
        .form-control {
          width: 100%;
          padding: 0.65rem 0.85rem;
          border: 1px solid var(--border-light);
          border-radius: 6px;
          font-size: 0.9rem;
          transition: border-color var(--transition-fast);
        }
        .form-control:focus {
          border-color: var(--primary-pink);
          outline: none;
        }
        .file-input {
          padding: 0.4rem;
        }
        .help-text {
          display: block;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 0.35rem;
        }
        .btn-submit {
          width: 100%;
          justify-content: center;
          padding: 0.75rem !important;
        }
        
        /* Stories list item styles */
        .stories-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .story-list-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 1rem;
          border: 1px solid var(--border-light);
          border-radius: 8px;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .story-list-item:hover {
          border-color: var(--primary-pink);
          background: var(--light-pink);
        }
        .story-list-item.selected {
          border-color: var(--primary-pink);
          background: var(--light-pink);
          box-shadow: 0 0 0 1px var(--primary-pink);
        }
        .story-item-avatar img {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--pure-white);
          box-shadow: var(--shadow-sm);
        }
        .story-item-details {
          flex: 1;
        }
        .story-item-details h4 {
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 0.15rem;
        }
        .story-item-details p {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .btn-icon-danger {
          background: none;
          border: none;
          color: #e02424;
          cursor: pointer;
          padding: 0.4rem;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background var(--transition-fast);
        }
        .btn-icon-danger:hover {
          background: #fee2e2;
        }

        /* Right Column (Substories) styling */
        .story-details-header {
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 1.25rem;
          margin-bottom: 1.5rem;
        }
        .story-details-title-row {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .selected-story-avatar {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--primary-pink);
        }
        .story-details-card h3 {
          margin-bottom: 0.15rem;
        }
        .story-details-card p {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        
        .add-substory-form {
          background: var(--light-pink);
          padding: 1rem;
          border-radius: 8px;
          border: 1px solid var(--border-light);
          margin-bottom: 1.5rem;
        }
        .add-substory-form h4 {
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }
        .form-row-align {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        .file-input-inline {
          flex: 1;
          background: var(--pure-white);
          padding: 0.45rem;
        }
        
        .substories-section h4 {
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 1rem;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 0.5rem;
        }
        .empty-substories {
          text-align: center;
          color: var(--text-muted);
          font-size: 0.85rem;
          padding: 2rem;
          font-style: italic;
        }
        .substories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap: 1rem;
        }
        .substory-card {
          border: 1px solid var(--border-light);
          border-radius: 8px;
          overflow: hidden;
          background: var(--pure-white);
          position: relative;
          display: flex;
          flex-direction: column;
        }
        .slide-index-badge {
          position: absolute;
          top: 6px;
          left: 6px;
          background: rgba(0, 0, 0, 0.65);
          color: var(--pure-white);
          font-size: 0.65rem;
          padding: 0.15rem 0.35rem;
          border-radius: 4px;
          font-weight: 500;
          z-index: 5;
        }
        .substory-preview {
          height: 140px;
          background: #111;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .substory-img-tag, .substory-video-tag {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .video-preview-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .video-type-badge {
          position: absolute;
          bottom: 6px;
          right: 6px;
          background: var(--primary-pink);
          color: var(--pure-white);
          font-size: 0.6rem;
          font-weight: 700;
          padding: 0.15rem 0.35rem;
          border-radius: 4px;
          display: flex;
          align-items: center;
          gap: 3px;
        }
        .substory-meta {
          padding: 0.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--pure-white);
          border-top: 1px solid var(--border-light);
        }
        .media-type-lbl {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
        }
        
        .select-story-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 5rem 2rem;
          text-align: center;
          color: var(--text-muted);
          border: 2px dashed var(--border-light);
          background: none;
        }
        .placeholder-icon {
          color: var(--border-light);
          margin-bottom: 1.5rem;
        }
        .select-story-placeholder h3 {
          color: var(--dark-charcoal);
          margin-bottom: 0.5rem;
        }
        .select-story-placeholder p {
          font-size: 0.9rem;
          max-width: 320px;
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .capitalize {
          text-transform: capitalize;
        }
      `}</style>
    </div>
  );
}
