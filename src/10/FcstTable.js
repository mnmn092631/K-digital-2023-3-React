import { useEffect, useState } from "react";

const FcstTable = ({ data, category, codeData }) => {
  const [tData, setTData] = useState();

  const skyCode = { 1: "맑음", 3: "구름많음", 4: "흐림" };
  const ptyCode = {
    0: "없음",
    1: "비",
    2: "비/눈",
    3: "눈",
    4: "소나기",
    5: "빗방울",
    6: "빗방울눈날림",
    7: "눈날림",
  };

  useEffect(() => {
    setTData(
      data.filter((item) => {
        return item.category === category;
      })
    );
  }, [category, data]);

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">항목명</th>
          <th scope="col">예측일자</th>
          <th scope="col">예측시간</th>
          <th scope="col">예보 값</th>
        </tr>
      </thead>
      <tbody>
        {tData &&
          tData.map((item, idx) => {
            return (
              <tr key={item.fcstValue + item.fcstTime + idx}>
                <td>
                  {
                    codeData.filter((code) => code.항목값 === item.category)[0][
                      "항목명"
                    ]
                  }
                </td>
                <td>
                  {item.fcstDate.slice(0, 4)}-{item.fcstDate.slice(4, 6)}-
                  {item.fcstDate.slice(6, 8)}
                </td>
                <td>
                  {item.fcstTime.slice(0, 2)} : {item.fcstTime.slice(2, 4)}
                </td>
                <td>
                  {category === "SKY"
                    ? skyCode[item.fcstValue]
                    : category === "PTY"
                    ? ptyCode[item.fcstValue]
                    : item.fcstValue}{" "}
                  {category !== "SKY" &&
                    category !== "PTY" &&
                    codeData.filter((code) => code.항목값 === item.category)[0][
                      "단위"
                    ]}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default FcstTable;
