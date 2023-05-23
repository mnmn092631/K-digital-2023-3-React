import { useNavigate, useParams } from "react-router-dom";
import FcstTable from "./FcstTable";
import { useEffect, useState } from "react";
import codeData from "./getcode.json";
import { Header } from "./Style";
import styled, { css } from "styled-components";

const SelBtn = styled.button`
  ${({ active }) =>
    active &&
    css`
      background-color: blue;
    `}
`;

const VilageFcst = () => {
  const navigator = useNavigate();

  const [data, setData] = useState([]);
  const [category, setCategory] = useState("POP");
  const [dates, setDates] = useState([]);
  const [selDate, setSelDate] = useState("");

  const vilageCode = codeData.filter((data) => data["예보구분"] === "단기예보");

  const dt = useParams().dt;
  const area = useParams().area;
  const x = useParams().x;
  const y = useParams().y;

  let year = dt.slice(0, 4);
  let month = dt.slice(4, 6);
  let date = dt.slice(6, 8);

  const getData = () => {
    let url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=9yPsHEIju5rRDqHYs0gdupRMIn7xv%2BZEb1r2005NJpFnf1Nco8oqnZaSm5KcJwWlk3mtSZabtiK2OJAr2UcQlQ%3D%3D&numOfRows=809&pageNo=1&base_date=${dt}&base_time=0500&nx=${x}&ny=${y}&dataType=json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.response.header.resultMsg === "NO_DATA") {
          alert("데이터가 없습니다.");
          navigator("/fcst");
        }
        setData(data.response.body.items.item);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let dateSet = new Set();
    data.forEach((item) => dateSet.add(item.fcstDate));
    setDates([...dateSet]);
    setSelDate([...dateSet][0]);
  }, [data]);

  return (
    <>
      <article>
        <Header>
          <h1>
            {area} 단기예보 ({year}/{month}/{date})
          </h1>
          <select onChange={(e) => setCategory(e.target.value)}>
            {vilageCode.map((code) => (
              <option value={code["항목값"]} key={code["항목값"]}>
                {code["항목명"]}({code["항목값"]})
              </option>
            ))}
          </select>
        </Header>
        <div className="grid">
          {dates &&
            dates.map((item) => (
              <SelBtn
                type="button"
                onClick={() => setSelDate(item)}
                active={item === selDate}
                key={item}
              >
                {item.slice(0, 4)}-{item.slice(4, 6)}-{item.slice(6, 8)}
              </SelBtn>
            ))}
        </div>
        {data && (
          <FcstTable
            data={data}
            category={category}
            codeData={vilageCode}
            selDate={selDate}
          />
        )}
      </article>
    </>
  );
};

export default VilageFcst;
