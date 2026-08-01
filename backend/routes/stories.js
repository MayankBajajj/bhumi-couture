import express from 'express';
import multer from 'multer';
import { protectAdmin } from '../middleware/adminMiddleware.js';
import { 
  getStories, 
  createStory, 
  deleteStory, 
  addSubStory, 
  deleteSubStory 
} from '../controllers/storyController.js';

const router = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 100 * 1024 * 1024 } // 100MB limit for short videos
});

// Public endpoints
router.get('/', getStories);

// Admin protected endpoints
router.post('/admin', protectAdmin, upload.single('coverImage'), createStory);
router.delete('/admin/:id', protectAdmin, deleteStory);
router.post('/admin/:id/substories', protectAdmin, upload.single('mediaFile'), addSubStory);
router.delete('/admin/:id/substories/:subId', protectAdmin, deleteSubStory);

export default router;
