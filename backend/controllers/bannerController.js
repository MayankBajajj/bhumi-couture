import { v2 as cloudinary } from 'cloudinary';
import Banner from '../models/Banner.js';

// @desc    Get all active banners
// @route   GET /api/banners
// @access  Public
export const getBanners = async (req, res, next) => {
  try {
    const banners = await Banner.find({}).sort({ order: 1, createdAt: -1 });
    res.json(banners);
  } catch (error) {
    res.status(500);
    next(error);
  }
};

// @desc    Create a new banner (Admin Only)
// @route   POST /api/banners
// @access  Private/Admin
export const createBanner = async (req, res, next) => {
  try {
    if (!req.file) {
      res.status(400);
      throw new Error('Please upload an image file');
    }

    const { linkUrl, order } = req.body;

    // Use memory buffer stream upload to Cloudinary (consistent with story controller)
    const uploadStream = () => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: 'bhawna_closet_banners', resource_type: 'image' },
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        );
        stream.end(req.file.buffer);
      });
    };

    const cloudinaryResult = await uploadStream();

    const banner = await Banner.create({
      imageUrl: cloudinaryResult.secure_url,
      cloudinaryId: cloudinaryResult.public_id,
      linkUrl: linkUrl || '',
      order: order ? parseInt(order, 10) : 0
    });

    res.status(201).json(banner);
  } catch (error) {
    res.status(500);
    next(error);
  }
};

// @desc    Delete a banner (Admin Only)
// @route   DELETE /api/banners/:id
// @access  Private/Admin
export const deleteBanner = async (req, res, next) => {
  try {
    const banner = await Banner.findById(req.params.id);
    if (!banner) {
      res.status(444);
      throw new Error('Banner not found');
    }

    // Destroy asset on Cloudinary
    if (banner.cloudinaryId) {
      await cloudinary.uploader.destroy(banner.cloudinaryId);
    }

    await banner.deleteOne();
    res.json({ message: 'Banner removed successfully' });
  } catch (error) {
    res.status(500);
    next(error);
  }
};
