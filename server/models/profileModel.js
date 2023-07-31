import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'please provide developer full name'],
    },
    email: {
      type: String,
      required: [true, 'please provide developer email address'],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        ,
        'Please provide a valid email address',
      ],
      unique: true,
    },
    website: {
      type: String,
      required: [true, 'please provide developer website'],
    },
    about: {
      type: String,
      required: [true, 'please provide developer bio'],
    },
  },
  { timestamps: true }
);

export default mongoose.model('profile', profileSchema);
