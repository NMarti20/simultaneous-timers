import "./_timer.scss";
import TimerPosted from "../TimerPosted/TimerPosted";
import React, { useState } from "react";

function Timer() {
  const [TimerData, setTimerData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, hours, minutes, seconds } = event.target;

    setTimerData([
      ...TimerData,
      {
        name: name.value,
        hours: hours.value,
        minutes: minutes.value,
        seconds: seconds.value,
      },
    ]);
  };

  const timersMap = () =>
    TimerData.map((timer) => <TimerPosted timerData={timer}></TimerPosted>);

  return (
    <div className="timer">
      <div className="timer__info">
        <form className="timer__form" onSubmit={handleSubmit}>
          <label className="timer__label">Name</label>
          <input
            type="text"
            className="timer__insert"
            id="name"
            name="name"
          ></input>
          <label className="timer__label">Hours</label>
          <input
            type="text"
            className="timer__insert"
            id="hours"
            name="hours"
          ></input>
          <label className="timer__label">Minutes</label>
          <input
            type="text"
            className="timer__insert"
            id="minutes"
            name="minutes"
          ></input>
          <label className="timer__label">Seconds</label>
          <input
            type="text"
            className="timer__insert"
            id="seconds"
            name="seconds"
          ></input>

          <button type="submit" className="timer__btn">
            Enter
          </button>
        </form>
      </div>
      {timersMap()}
    </div>
  );
}

export default Timer;
