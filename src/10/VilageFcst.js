import { useParams } from "react-router-dom";
import FcstTable from "./FcstTable";
import { useEffect, useState } from "react";
import codeData from "./getcode.json";

const VilageFcst = () => {
  const [data, setData] = useState();
  const [category, setCategory] = useState("POP");

  const dt = useParams().dt;
  const area = useParams().area;
  const x = useParams().x;
  const y = useParams().y;

  let year = dt.slice(0, 4);
  let month = dt.slice(4, 6);
  let date = dt.slice(6, 8);

  const getData = () => {
    let url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=9yPsHEIju5rRDqHYs0gdupRMIn7xv%2BZEb1r2005NJpFnf1Nco8oqnZaSm5KcJwWlk3mtSZabtiK2OJAr2UcQlQ%3D%3D&numOfRows=60&pageNo=1&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}&dataType=json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.response.body.items.item))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <article>
        <header>
          <h1>
            {area} 단기예보 ({year}/{month}/{date})
          </h1>
          <select onChange={(e) => setCategory(e.target.value)}>
            {codeData
              .filter((data) => data["예보구분"] === "단기예보")
              .map((code) => (
                <option value={code["항목값"]} key={code["항목값"]}>
                  {code["항목명"]}({code["항목값"]})
                </option>
              ))}
          </select>
        </header>
        {data && <FcstTable data={data} category={category} />}
      </article>
    </>
  );
};

export default VilageFcst;
