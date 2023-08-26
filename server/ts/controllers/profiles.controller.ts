import profileSchema from '../models/profile.model';
import { Request, Response } from 'express';
import { ProfileSpecs } from '../schemas/profile.schema';
import { ResponseSpecs } from '../globals';

// description: Create a new profile
// request | route: POST | "/api/v1/profiles/create-profile"
// access: Public

type createProfileResponseSpec = {
  newProfile?: ProfileSpecs;
} & ResponseSpecs;

export const createProfile = async (
  req: Request<{}, createProfileResponseSpec, ProfileSpecs>,
  res: Response<createProfileResponseSpec>
) => {
  const { fullName, email, website, about } = req.body;

  try {
    if (!fullName || !email || !website || !about) {
      return res.status(400).json({
        responseMessage:
          'profile creation failed: please provide all requested details',
      });
    }

    const newProfile = await profileSchema.create({
      fullName,
      email,
      website,
      about,
    });

    res
      .status(201)
      .json({ responseMessage: 'profile created successfully', newProfile });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        responseMessage: 'profile creation failed: please try again',
        error: error.message,
      });
    } else {
      res.status(500).json({
        responseMessage: 'an error occurred',
        error: error,
      });
    }
  }
};

// description: Get all profiles: Request
// request | route: GET | "/api/v1/profiles/get-all-profiles"
// access: Public

type getAllProfilesResponseSpec = {
  allProfiles?: ProfileSpecs[];
  profilesCount?: number;
} & ResponseSpecs;

export const getAllProfiles = async (
  req: Request<{}, getAllProfilesResponseSpec>,
  res: Response<getAllProfilesResponseSpec>
) => {
  try {
    const allProfiles = await profileSchema.find({});

    if (!allProfiles) {
      res.status(404).json({
        responseMessage: 'no profiles found: fetch failed',
      });
    }

    res.status(200).json({
      responseMessage: 'all profiles fetched successfully',
      profilesCount: allProfiles.length,
      allProfiles,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        responseMessage: 'profile creation failed: please try again',
        error: error.message,
      });
    } else {
      res.status(500).json({
        responseMessage: 'an error occurred',
        error: error,
      });
    }
  }
};

// description: Get single profile
// request | route: GET | "/api/v1/profiles/get-profile/:id"
// access: Public

type getSingleProfileResponseSpec = {
  profile?: ProfileSpecs;
} & ResponseSpecs;

export const getProfile = async (
  req: Request<{ id: string }, getSingleProfileResponseSpec>,
  res: Response<getSingleProfileResponseSpec>
) => {
  const { id } = req.params;

  try {
    const profile = await profileSchema.findOne({ _id: id });

    if (!profile) {
      return res.status(404).json({
        responseMessage: `profile with id: ${id} not found`,
      });
    }

    res.status(200).json({
      responseMessage: 'profile fetched successfully',
      profile,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        responseMessage: 'profile creation failed: please try again',
        error: error.message,
      });
    } else {
      res.status(500).json({
        responseMessage: 'an error occurred',
        error: error,
      });
    }
  }
};

// description: Update profile
// request | route: PATCH | "/api/v1/profiles/update-profile/:id"
// access: Public

type updateProfileResponseSpecs = {
  updatedProfile?: ProfileSpecs | null;
} & ResponseSpecs;

export const updateProfile = async (
  req: Request<{ id: string }, updateProfileResponseSpecs, ProfileSpecs>,
  res: Response<updateProfileResponseSpecs>
) => {
  const { fullName, email, website, about } = req.body;
  const { id } = req.params;

  try {
    if (!fullName || !email || !website || !about) {
      return res.status(400).json({
        responseMessage:
          'profile creation failed: please provide all requested details',
      });
    }

    const profileToUpdate = await profileSchema.findById(id);

    if (!profileToUpdate) {
      return res
        .status(404)
        .json({ responseMessage: `profile with id: ${id} not found` });
    }

    const updatedProfile = await profileSchema.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      responseMessage: 'profile updated successfully',
      updatedProfile,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        responseMessage: 'profile creation failed: please try again',
        error: error.message,
      });
    } else {
      res.status(500).json({
        responseMessage: 'an error occurred',
        error: error,
      });
    }
  }
};

// description: Delete profile
// request | route: DELETE | "/api/v1/profiles/delete-profile/:id"
// access: Public

type deletedProfileResponse = {
  deletedProfile?: ProfileSpecs | null;
} & ResponseSpecs;

export const deleteProfile = async (
  req: Request<{ id: string }, deletedProfileResponse, deletedProfileResponse>,
  res: Response
) => {
  const { id } = req.params;
  //   console.log(id);

  try {
    const profileToDelete = await profileSchema.findById(id);

    if (!profileToDelete) {
      return res
        .status(404)
        .json({ responseMessage: `profile with id: ${id} not found` });
    }

    const deletedProfile = await profileSchema.findByIdAndRemove({ _id: id });

    res.status(200).json({
      responseMessage: 'profile deleted successfully',
      deletedProfile,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        responseMessage: 'profile creation failed: please try again',
        error: error.message,
      });
    } else {
      res.status(500).json({
        responseMessage: 'an error occurred',
        error: error,
      });
    }
  }
};
