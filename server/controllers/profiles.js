import profileSchema from '../models/profileModel.js';

// description: Create a new profile
// request | route: POST | "/api/v1/profiles/create-profile"
// access: Public

export const createProfile = async (req, res) => {
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
    res.status(500).json({
      responseMessage: 'profile creation failed: please try again',
      error: error.message,
    });
  }
};

// description: Get all profiles
// request | route: GET | "/api/v1/profiles/get-all-profiles"
// access: Public

export const getAllProfiles = async (req, res) => {
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
    res.status(500).json({
      responseMessage: 'request unsuccessful',
      error: error.message,
    });
  }
};

// description: Get single profile
// request | route: GET | "/api/v1/profiles/get-profile/:id"
// access: Public

export const getProfile = async (req, res) => {
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
    res.status(500).json({
      responseMessage: 'request unsuccessful',
      error: error.message,
    });
  }
};

// description: Update profile
// request | route: PATCH | "/api/v1/profiles/update-profile/:id"
// access: Public

export const updateProfile = async (req, res) => {
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
    res.status(500).json({
      responseMessage: 'profile creation failed: please try again',
      error: error.message,
    });
  }
};

// description: Delete profile
// request | route: DELETE | "/api/v1/profiles/delete-profile/:id"
// access: Public

export const deleteProfile = async (req, res) => {
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
    res.status(500).json({
      responseMessage: 'profile creation failed: please try again',
      error: error.message,
    });
  }
};
