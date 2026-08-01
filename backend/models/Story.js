import mongoose from 'mongoose';

const subStorySchema = new mongoose.Schema({
  mediaType: {
    type: String,
    enum: ['image', 'video'],
    required: true
  },
  url: {
    type: String,
    required: true
  },
  cloudinaryId: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    default: 5 // duration in seconds
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const storySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  coverImage: {
    type: String,
    required: true
  },
  coverCloudinaryId: {
    type: String,
    required: true
  },
  subStories: [subStorySchema],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Story = mongoose.model('Story', storySchema);
export default Story;
