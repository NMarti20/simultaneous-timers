import "./_timerPosted.scss";
import React, { useState, useEffect, useRef } from "react";

function TimerPosted({ timerData }) {
  const [timerOn, setTimerOn] = useState(false);
  const [timerStart, setTimerStart] = useState(
    timerData.hours * 3600000 +
      timerData.minutes * 60000 +
      timerData.seconds * 1000
  );
  const [timerTime, setTimerTime] = useState(
    timerData.hours * 3600000 +
      timerData.minutes * 60000 +
      timerData.seconds * 1000
  );

  const timerRef = useRef();

  //axios.post(url of where to post)
  // name: name.value
  //hours: 
  //minutes:
  //seconds

  const startTimer = () => {
    setTimerOn(true);
  };

  useEffect(() => {
    if (timerOn) {
      timerRef.current = setInterval(() => {
        const newTime = timerTime - 1000;

        if (newTime >= 0) {
          setTimerTime(newTime);
        } else {
          clearInterval(timerRef.current);
          setTimerOn(false);
        }
      }, 1000);
    }

    return () => {
      clearInterval(timerRef.current);
    };
  });

  const stopTimer = () => {
    clearInterval(timerRef.current);
    setTimerOn(false);
    console.log()
  };

  const resetTimer = () => {
    if (timerOn === true) {
      setTimerOn(false);
    }
    setTimerTime(timerStart);
  };

  const displayTime = () => {
    const hours = timerTime / 3600000;
    const minutes = (hours % 1) * 60;
    const seconds = (minutes % 1) * 60;
    return (
      `${Math.floor(hours)}`.padStart(2, "0") +
      ":" +
      `${Math.floor(minutes)}`.padStart(2, "0") +
      ":" +
      `${Math.round(seconds)}`.padStart(2, "0")
    );
  };
  return (
    <div className="timerPosted">
      <div className="timerPosted__container">
        <div className="timerPosted__container">
          <p className="timerPosted__name">{timerData.name}</p>
        </div>
        <div className="timerPosted__time">{displayTime()}</div>
      </div>

      <button className="timerPosted__btn" onClick={startTimer}>
        Start
      </button>

      <button className="timerPosted__btn" onClick={stopTimer}>
        Stop
      </button>

      <button className="timerPosted__btn" onClick={startTimer}>
        Resume
      </button>

      <button className="timerPosted__btn" onClick={resetTimer}>
        Reset
      </button>
    </div>
  );
}

export default TimerPosted;
