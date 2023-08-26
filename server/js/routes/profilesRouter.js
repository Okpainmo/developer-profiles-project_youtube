import express from 'express';
import {
  createProfile,
  getAllProfiles,
  getProfile,
  updateProfile,
  deleteProfile,
} from '../controllers/profiles.js';

const router = express.Router();

// method 1: api link becomes "/api/v1/profiles/<end-point>" - my preferred method because of simplicity and clarity.

router.post('/create-profile', createProfile);
router.get('/get-all-profiles', getAllProfiles);
router.get('/get-profile/:id', getProfile);
router.patch('/update-profile/:id', updateProfile);
router.delete('/delete-profile/:id', deleteProfile);

export default router;

// method 2: api link stays as "/api/v1/profiles" - only the request type (GET, POST, PATCH, or DELETE) changes.

// router.route('/').post(createProfile).get(getAllProfiles);
// router.route('/:id').get(getProfile).patch(updateProfile).delete(deleteProfile);

// export default router;
