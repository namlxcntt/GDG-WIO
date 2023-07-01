import React, { useState, useEffect } from "react";
import zero from "../images/numbers/0.png";
import one from "../images/numbers/1.png";
import two from "../images/numbers/2.png";
import three from "../images/numbers/3.png";
import four from "../images/numbers/4.png";
import five from "../images/numbers/5.png";
import six from "../images/numbers/6.png";
import seven from "../images/numbers/7.png";
import eight from "../images/numbers/8.png";
import nine from "../images/numbers/9.png";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState([0, 0, 0, 0, 0, 0]);
  const [days, setDays] = useState();
  const [dayTens, setDayTens] = useState();
  const [hours, setHours] = useState();
  const [hourTens, setHourTens] = useState();
  const [minutes, setMinutes] = useState();
  const [minuteTens, setMinuteTens] = useState();
  const [seconds, setSeconds] = useState();
  const [secondTens, setSecondTens] = useState();

  const LIST_TIME_IMAGE = [
    zero,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
  ];
  const END_TIME = new Date("2023-07-22 13:00:00").getTime();

  useEffect(() => {
    const now = Date.now();
    const secondsRemain = Math.floor((END_TIME - now) / 1000);
    if (secondsRemain <= 0) {
      setTimeLeft([0, 0, 0, 0, 0, 0, 0]);
      updateCountDown();
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft(formatTimeLeft(secondsRemain));
      updateCountDown();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTimeLeft = (secondsRemain) => {
    const days = Math.floor(secondsRemain / (60 * 60 * 24));
    const hours = Math.floor((secondsRemain % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((secondsRemain % (60 * 60)) / 60);
    const seconds = secondsRemain % 60;

    return [
      Math.floor(days / 10),
      Math.floor(days % 10),
      Math.floor(hours / 10),
      Math.floor(hours % 10),
      Math.floor(minutes / 10),
      Math.floor(minutes % 10),
      Math.floor(seconds / 10),
      Math.floor(seconds % 10),
    ];
  };

  const updateCountDown = () => {
    timeLeft.forEach((timeUnit, index) => setTimeUnit(timeUnit, index));
  };

  const setTimeUnit = (timeUnit, index) => {
    switch (index) {
      case 0:
        setDayTens(LIST_TIME_IMAGE[timeUnit]);
      case 1:
        setDays(LIST_TIME_IMAGE[timeUnit]);
      case 2:
        setHourTens(LIST_TIME_IMAGE[timeUnit]);
      case 3:
        setHours(LIST_TIME_IMAGE[timeUnit]);
      case 4:
        setMinuteTens(LIST_TIME_IMAGE[timeUnit]);
      case 5:
        setMinutes(LIST_TIME_IMAGE[timeUnit]);
      case 6:
        setSecondTens(LIST_TIME_IMAGE[timeUnit]);
      default:
        setSeconds(LIST_TIME_IMAGE[timeUnit]);
    }
  };

  return (
    <div className="flex items-center justify-items-center w-full lg:w-1/2 mx-auto my-20">
      <div className="grid grid-cols-countdown items-center justify-items-center w-full">
        <img className="h-10 lg:h-16" src={dayTens} alt="day" />
        <img className="h-10 lg:h-16" src={days} alt="day" />
        <span className="mx-2 text-xl font-medium"> Days</span>
        <img className="h-10 lg:h-16" src={hourTens} alt="hour" />
        <img className="h-10 lg:h-16" src={hours} alt="hour" />
        <span className="mx-2 text-xl font-medium"> Hours</span>
        <img className="h-10 lg:h-16" src={minuteTens} alt="minute" />
        <img className="h-10 lg:h-16" src={minutes} alt="minute" />
        <span className="mx-2 text-xl font-medium"> Minutes</span>
        <img
          className="hidden h-10 lg:h-16 lg:block"
          src={secondTens}
          alt="second"
          title=""
        />
        <img
          className="hidden h-10 lg:h-16 lg:block"
          src={seconds}
          alt="second"
          title=""
        />
        <span className="hidden mx-2 text-xl font-medium lg:block"> Seconds</span>
      </div>
    </div>
  );
}

export default Countdown;
