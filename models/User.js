import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: String,
  walletBalance: Number,
  referredBy: String,
  kycVerified: Boolean
});

export default mongoose.model('User', userSchema);