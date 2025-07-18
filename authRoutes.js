import express from 'express';
const router = express.Router();

router.post('/signup', (req, res) => {
  res.json({ message: 'User signed up!' });
});

router.post('/login', (req, res) => {
  res.json({ token: 'fake-jwt-token' });
});

export default router;