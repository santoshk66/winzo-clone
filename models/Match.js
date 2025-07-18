import mongoose from 'mongoose';

const matchSchema = new mongoose.Schema({
  matchId: String,
  gameId: String,
  players: [String],
  scores: Object,
  winner: String,
  status: String
});

export default mongoose.model('Match', matchSchema);