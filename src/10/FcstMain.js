import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import xyData from "./getxy.json";

const FcstMain = () => {
  const navigator = useNavigate();
  const [area, setArea] = useState("서울특별시");
  const [x, setX] = useState(60);
  const [y, setY] = useState(127);
  const dateRef = useRef();

  let dateObj = new Date();
  let todayD = dateObj.getDate().toString().padStart(2, 0);
  let todayM = (dateObj.getMonth() + 1).toString().padStart(2, 0);
  let todayY = dateObj.getFullYear();

  useEffect(() => {
    dateRef.current.value = `${todayY}-${todayM}-${todayD}`;
    let areaXY = xyData.filter((data) => data["1단계"] === area)[0];
    setX(areaXY["격자 X"]);
    setY(areaXY["격자 Y"]);
  }, [todayD, todayM, todayY, area]);

  return (
    <article>
      <header>
        <h1>단기예보 선택</h1>
      </header>
      <div className="grid">
        <input ref={dateRef} type="date" name="date" />
        <select onChange={(e) => setArea(e.target.value)}>
          {xyData
            .filter((data) => data["1단계"] !== "이어도")
            .map((area) => (
              <option value={area["1단계"]} key={area["행정구역코드"]}>
                {area["1단계"]}
              </option>
            ))}
        </select>
      </div>
      <footer>
        <div className="grid">
          <button
            onClick={() =>
              navigator(
                `/fcst/ultra/${dateRef.current.value.replaceAll(
                  "-",
                  ""
                )}/${area}/${x}/${y}`
              )
            }
          >
            초단기예보
          </button>
          <button
            onClick={() =>
              navigator(
                `/fcst/vilage/${dateRef.current.value.replaceAll(
                  "-",
                  ""
                )}/${area}/${x}/${y}`
              )
            }
          >
            단기예보
          </button>
        </div>
      </footer>
    </article>
  );
};

export default FcstMain;
