import React, { useState } from 'react';
import './App.css';
import Clock from './components/Clock';
import Timer from './components/Timer';
import TodoList from './components/TodoList';

const App = () => {
  const [coins, setCoins] = useState(0);

  const earnCoin = () => setCoins(coins + 1);

  return (
    <div className="app">
      <div className="sidebar">
        <h1>Focus Mode</h1>
        <Clock />
        <TodoList onCoinEarned={earnCoin} />
        <p>Coins: {coins}</p>
      </div>
      <Timer onComplete={() => alert('Time is up! Take a break!')} />
    </div>
  );
};

export default App;
