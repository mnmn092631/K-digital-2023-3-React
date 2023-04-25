import { useState } from "react";
import "./MyClockTime.css";

const MyClockTime = () => {
  const [timer, setTimer] = useState(
    new Date().toLocaleTimeString().replaceAll(":", " : ")
  );

  const currentTimer = () => {
    const date = new Date();
    let ma = "오전";
    let h = date.getHours();
    if (h === 24) {
      h = 0;
    } else if (h >= 12) {
      ma = "오후";
      if (h > 12) h -= 12;
    }
    const m = date.getMinutes();
    const s = date.getSeconds();
    setTimer(
      `${ma} ${h.toString().padStart(2, 0)} : 
      ${m.toString().padStart(2, 0)} : 
      ${s.toString().padStart(2, 0)}`
    );
  };

  const startTimer = () => {
    setInterval(currentTimer, 1000);
  };

  startTimer();

  return (
    <footer>
      <h1>{timer}</h1>
    </footer>
  );
};

export default MyClockTime;
