const express = require('express');
const fs = require('fs').promises;
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const filePath = path.join(__dirname, 'users.json');

// ✅ Homepage route
app.get('/', (req, res) => {
  res.send('✅ WinZO Backend is Live! Use /users or /users/add');
});

// 🧾 API: Get all users
app.get('/users', async (req, res) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    res.json(JSON.parse(data));
  } catch (err) {
    res.status(500).json({ error: 'Failed to read users' });
  }
});

// ➕ API: Add a new user
app.post('/users/add', async (req, res) => {
  try {
    const users = JSON.parse(await fs.readFile(filePath, 'utf-8'));
    const newUser = { id: `u${users.length + 1}`, ...req.body };
    users.push(newUser);
    await fs.writeFile(filePath, JSON.stringify(users, null, 2));
    res.json({ message: 'User added', user: newUser });
  } catch (err) {
    res.status(500).json({ error: 'Failed to write users' });
  }
});

app.listen(8080, () => console.log('Server started on port 8080'));
