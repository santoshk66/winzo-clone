import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/users')
      .then(res => res.json())
      .then(setUsers)
      .catch(console.error);
  }, []);

  return (
    <div className="app">
      <h1>🎮 WinZO Gaming Lobby</h1>
      <p>Welcome! These are the current players:</p>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.email} - ₹{user.wallet}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;