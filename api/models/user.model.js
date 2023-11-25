import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default:
        'https://wallpapers-clan.com/wp-content/uploads/2022/08/default-pfp-1.jpg',
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
