import express from 'express';
import multer from 'multer';
import { protectAdmin } from '../middleware/adminMiddleware.js';
import { 
  getBanners, 
  createBanner, 
  deleteBanner 
} from '../controllers/bannerController.js';

const router = express.Router();

// Setup in-memory multer storage configuration
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB limits
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'), false);
    }
  }
});

router.route('/')
  .get(getBanners)
  .post(protectAdmin, upload.single('image'), createBanner);

router.route('/:id')
  .delete(protectAdmin, deleteBanner);

export default router;
