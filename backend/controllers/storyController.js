import { v2 as cloudinary } from 'cloudinary';
import Story from '../models/Story.js';

// Helper to upload memory buffer to Cloudinary
const uploadToCloudinary = (fileBuffer, folder, resourceType = 'auto') => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: resourceType
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    stream.end(fileBuffer);
  });
};

// 1. Get all stories
export const getStories = async (req, res, next) => {
  try {
    const stories = await Story.find({}).sort({ createdAt: -1 });
    res.json(stories);
  } catch (error) {
    res.status(500);
    next(error);
  }
};

// 2. Create a new story (Max 4)
export const createStory = async (req, res, next) => {
  try {
    const { name } = req.body;

    // Limit check
    const storyCount = await Story.countDocuments();
    if (storyCount >= 4) {
      return res.status(400).json({ 
        message: 'Maximum limit of 4 stories reached. Please delete an existing story before adding a new one.' 
      });
    }

    if (!name || !name.trim()) {
      return res.status(400).json({ message: 'Story name is required.' });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'Cover image file is required.' });
    }

    // Upload cover image to Cloudinary
    console.log('Uploading cover image to Cloudinary...');
    const result = await uploadToCloudinary(req.file.buffer, 'bhawna_closet_stories_covers', 'image');

    const story = await Story.create({
      name: name.trim(),
      coverImage: result.secure_url,
      coverCloudinaryId: result.public_id,
      subStories: []
    });

    res.status(201).json(story);
  } catch (error) {
    res.status(500);
    next(error);
  }
};

// 3. Delete a story
export const deleteStory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const story = await Story.findById(id);

    if (!story) {
      return res.status(404).json({ message: 'Story not found.' });
    }

    // Delete cover image from Cloudinary
    if (story.coverCloudinaryId) {
      console.log(`Deleting cover image ${story.coverCloudinaryId} from Cloudinary...`);
      await cloudinary.uploader.destroy(story.coverCloudinaryId).catch(err => {
        console.error('Failed to delete cover image from Cloudinary:', err.message);
      });
    }

    // Delete all substory media from Cloudinary
    for (const sub of story.subStories) {
      if (sub.cloudinaryId) {
        console.log(`Deleting sub-story ${sub.cloudinaryId} (${sub.mediaType}) from Cloudinary...`);
        await cloudinary.uploader.destroy(sub.cloudinaryId, { resource_type: sub.mediaType }).catch(err => {
          console.error(`Failed to delete sub-story media ${sub.cloudinaryId} from Cloudinary:`, err.message);
        });
      }
    }

    await Story.findByIdAndDelete(id);
    res.json({ message: 'Story and all associated media successfully deleted.' });
  } catch (error) {
    res.status(500);
    next(error);
  }
};

// 4. Add a sub-story (photo/video)
export const addSubStory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const story = await Story.findById(id);

    if (!story) {
      return res.status(404).json({ message: 'Story not found.' });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'Media file (photo or video) is required.' });
    }

    const mime = req.file.mimetype;
    const mediaType = mime.startsWith('video/') ? 'video' : 'image';
    const resourceType = mediaType === 'video' ? 'video' : 'image';

    console.log(`Uploading sub-story media of type ${mediaType} to Cloudinary...`);
    const result = await uploadToCloudinary(req.file.buffer, 'bhawna_closet_substories', resourceType);

    // Default duration: 5 seconds for images, or 15 seconds for videos if not calculated,
    // though video players will use actual media length.
    const duration = mediaType === 'video' ? 15 : 5;

    const newSubStory = {
      mediaType,
      url: result.secure_url,
      cloudinaryId: result.public_id,
      duration
    };

    story.subStories.push(newSubStory);
    await story.save();

    res.status(201).json(story);
  } catch (error) {
    res.status(500);
    next(error);
  }
};

// 5. Delete a sub-story
export const deleteSubStory = async (req, res, next) => {
  try {
    const { id, subId } = req.params;
    const story = await Story.findById(id);

    if (!story) {
      return res.status(404).json({ message: 'Story not found.' });
    }

    const subStory = story.subStories.id(subId);
    if (!subStory) {
      return res.status(404).json({ message: 'Sub-story not found.' });
    }

    // Delete media from Cloudinary
    if (subStory.cloudinaryId) {
      console.log(`Deleting sub-story media ${subStory.cloudinaryId} (${subStory.mediaType}) from Cloudinary...`);
      await cloudinary.uploader.destroy(subStory.cloudinaryId, { resource_type: subStory.mediaType }).catch(err => {
        console.error('Failed to delete sub-story media from Cloudinary:', err.message);
      });
    }

    // Remove from array
    story.subStories.pull(subId);
    await story.save();

    res.json({ message: 'Sub-story successfully deleted.', story });
  } catch (error) {
    res.status(500);
    next(error);
  }
};
