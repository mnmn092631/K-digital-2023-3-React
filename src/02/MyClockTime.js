import { useState } from "react";
import "./MyClockTime.css";

const MyClockTime = () => {
  const [timer, setTimer] = useState(
    new Date().toLocaleTimeString().replaceAll(":", " : ")
  );
  setInterval(
    () => setTimer(new Date().toLocaleTimeString().replaceAll(":", " : ")),
    1000
  );

  return (
    <footer>
      <h1>{timer}</h1>
    </footer>
  );
};

export default MyClockTime;
