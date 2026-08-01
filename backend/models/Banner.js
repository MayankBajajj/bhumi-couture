import mongoose from 'mongoose';

const bannerSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  cloudinaryId: { type: String, required: true },
  linkUrl: { type: String, default: '' },
  order: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

const Banner = mongoose.model('Banner', bannerSchema);
export default Banner;
