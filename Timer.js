import React, { useState, useEffect } from 'react';

const Timer = ({ onComplete }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (seconds === 0) return;
    const interval = setInterval(() => {
      setSeconds(prev => {
        if (prev === 1) {
          onComplete();
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds, onComplete]);

  return (
    <div className="timer">
      <button onClick={() => setSeconds(25 * 60)}>Start 25m Timer</button>
      <p>{Math.floor(seconds / 60)}:{seconds % 60}</p>
    </div>
  );
};

export default Timer;
