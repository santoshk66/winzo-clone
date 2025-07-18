import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json([{ gameId: 'fruit_slash', name: 'Fruit Slash', entryFee: 10 }]);
});

export default router;