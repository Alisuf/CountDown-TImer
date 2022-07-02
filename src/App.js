import React, { useEffect, useRef, useState } from "react";
import './App.css';
import clock from './asset/icons8-clock.svg'
//import background from './asset/background.jpg'

const App = () =>
{
  const [timerDays, setTimerDays]= useState('00');
  const [timerHours, setTimerHours]= useState('00');
  const [timerMinutes, setTimerMinutes]= useState('00');
  const [timerSeconds, setTimerSeconds]= useState('00');
  console.log(timerDays, setTimerDays);

  let interval = useRef ();
  const startTimer = () => {
     const countdownDate = new Date('December 16 00:00:00').getTime();

     interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      
      const Days = Math.floor(distance /(1000 * 60 * 60 * 24));
      const Hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const Minutes = Math.floor((distance % (1000 * 60 * 60 ))/ (1000 * 60));
      const Seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if(distance < 0) {
        // stop our timer
        clearInterval(interval.current);
      } else {
        //update timer
        setTimerDays(Days);
        setTimerHours(Hours);
        setTimerMinutes(Minutes);
        setTimerSeconds(Seconds);
      }

     }, 1000);
  };

  useEffect (() => {
    startTimer ();
    return() => {
      clearInterval(interval.current);
    };
  }  );

  return (

  <section className="timer-container">
    <section className="timer">
      <div>
        <span className="mdi mdi-calender-clock timer-icon"></span>
        <img src={clock} alt="React Log" />
        <h2>Countdown Timer</h2>
        <p>Estimated Time Left</p>
      </div>
      <div>
        <section>
          <p>{timerDays}</p>
          <p><small>Days</small></p>
        </section>
        <span>:</span>
        <section>
          <p>{timerHours}</p>
          <p><small>Hours</small></p>
        </section>
        <span>:</span>
        <section>
          <p>{timerMinutes}</p>
          <p><small>Minutes</small></p>
        </section>
        <span>:</span>
        <section>
          <p>{timerSeconds}</p>
          <p><small>Seconds</small></p>
        </section>
      </div>
    </section>
  </section>

  );
}
export default App;
