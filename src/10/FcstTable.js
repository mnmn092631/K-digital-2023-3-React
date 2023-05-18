import { useEffect, useState } from "react";

const FcstTable = ({ data, category }) => {
  const [tData, setTData] = useState();
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
          tData.map((item) => {
            return (
              <tr key={item.fcstValue + item.fcstTime}>
                <td>{item.category}</td>
                <td>{item.baseDate}</td>
                <td>{item.fcstTime}</td>
                <td>{item.fcstValue}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default FcstTable;
