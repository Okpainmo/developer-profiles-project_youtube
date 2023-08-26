import express from 'express';
import {
  createProfile,
  getAllProfiles,
  getProfile,
  updateProfile,
  deleteProfile,
} from '../controllers/profiles.controller';
import { validateData } from '../middlewares/validateData';
import { profileSchema } from '../schemas/profile.schema';
import { paramsSchema } from '../schemas/params.schema';

const router = express.Router();

// method 1: api link becomes "/api/v1/profiles/<end-point>" - my preferred method because of simplicity and clarity.

router.post(
  '/create-profile',
  validateData({ body: profileSchema }),
  createProfile
);
router.get('/get-all-profiles', getAllProfiles);
router.get(
  '/get-profile/:id',
  validateData({ params: paramsSchema }),
  getProfile
);
router.patch(
  '/update-profile/:id',
  validateData({ params: paramsSchema, body: profileSchema }),
  updateProfile
);
router.delete(
  '/delete-profile/:id',
  validateData({ params: paramsSchema }),
  deleteProfile
);

export default router;

// method 2: api link stays as "/api/v1/profiles" - only the request type (GET, POST, PATCH, or DELETE) changes.

// router.route('/').post(createProfile).get(getAllProfiles);
// router.route('/:id').get(getProfile).patch(updateProfile).delete(deleteProfile);

// export default router;
