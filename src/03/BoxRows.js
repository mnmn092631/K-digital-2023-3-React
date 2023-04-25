import { useState } from "react";

const BoxRows = ({ mv }) => {
  const [footTag, setFootTag] = useState();

  const showMv = (row) => {
    setFootTag(row.movieCd);
  };

  let trTags = [];
  for (let row of mv) {
    let increIcon = "-";
    if (row.rankInten > 0) {
      increIcon = "🔼";
    } else if (row.rankInten < 0) {
      increIcon = "🔽";
    }

    trTags.push(
      <tr key={row.movieCd} onClick={() => showMv(row)}>
        <td>{row.rank}</td>
        <td>{row.movieNm}</td>
        <td>{Number(row.salesAmt).toLocaleString()}</td>
        <td>{increIcon}</td>
      </tr>
    );
  }

  return (
    <>
      <tbody>{trTags}</tbody>
      <tfoot>
        <tr>
          <td colSpan={4}>{footTag}</td>
        </tr>
      </tfoot>
    </>
  );
};

export default BoxRows;
