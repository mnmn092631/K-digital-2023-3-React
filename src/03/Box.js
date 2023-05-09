import BoxRows from "./BoxRows";
import "./Box.module.css";
import { useRef, useEffect, useState } from "react";

const Box = () => {
  const [mvlist, setMvlist] = useState();

  const dtRef = useRef();

  useEffect(() => {
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    let defaultDt = yesterday.getFullYear();
    defaultDt += (yesterday.getMonth() + 1).toString().padStart(2, 0);
    defaultDt += yesterday.getDate().toString().padStart(2, 0);
    getData(defaultDt);
  }, []);

  const getDt = () => {
    let dt = dtRef.current.value.replaceAll("-", "");
    getData(dt);
  };

  const getData = (dt) => {
    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${dt}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setMvlist(data.boxOfficeResult.dailyBoxOfficeList))
      .catch((err) => console.error(err));
  };

  return (
    <main className="container">
      <article>
        <header>
          <nav>
            <ul>
              <li>
                <h1>일일박스오피스</h1>
              </li>
            </ul>
            <ul>
              <li>
                <input
                  type="date"
                  id="dt1"
                  name="dt1"
                  ref={dtRef}
                  onChange={() => getDt()}
                />
              </li>
            </ul>
          </nav>
        </header>
        <table>
          <thead>
            <tr>
              <th scope="col">순위</th>
              <th scope="col">영화명</th>
              <th scope="col">매출액</th>
              <th scope="col">증감</th>
            </tr>
          </thead>
          {mvlist && <BoxRows mv={mvlist} />}
        </table>
      </article>
    </main>
  );
};

export default Box;
