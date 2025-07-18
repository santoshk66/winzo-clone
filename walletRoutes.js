import express from 'express';
const router = express.Router();

router.post('/add-money', (req, res) => {
  // Simulate adding money
  res.json({ status: 'success', balance: 500 });
});

export default router;