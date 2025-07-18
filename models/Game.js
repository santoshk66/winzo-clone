import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
  gameId: String,
  name: String,
  entryFee: Number,
  maxPlayers: Number,
  isActive: Boolean
});

export default mongoose.model('Game', gameSchema);