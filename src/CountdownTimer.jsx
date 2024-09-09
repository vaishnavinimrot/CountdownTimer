import React, { useState, useEffect } from 'react';
import './index.css';

function CountdownTimer({ initialMinutes }) {
  const [time, setTime] = useState(initialMinutes * 60);
  const [isActive, setIsActive] = useState(false); // New state for controlling timer

  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(intervalId);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false); // Stop the timer
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(initialMinutes * 60); // Reset the timer
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div>
       <b><h1 class="timer-heading">Countdown Timer</h1></b><br/> <br/> 
    <div class="timer-container">   
      <div class="timer-display">{formatTime(time)}</div>
      <div class="button-container">
        <button class="timer-button start-button" onClick={handleStart}>
          Start
        </button>
        <button class="timer-button stop-button" onClick={handleStop}>
          Stop
        </button>
        <button class="timer-button reset-button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
    </div>
  );
}

export default CountdownTimer;
