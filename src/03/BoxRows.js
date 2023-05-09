import { useState } from "react";
import "./BoxRows.module.css";
import styled, { css } from "styled-components";

const NameTd = styled.td`
  ${({ oan }) =>
    oan === "NEW" &&
    css`
      &::before {
        content: "NEW! ";
        color: red;
        font-weight: 600;
      }
    `}
`;

const Td = styled.td`
  color: ${({ inten }) =>
    inten > 0 ? "red" : inten === "0" ? "black" : "blue"};
`;

const BoxRows = ({ mv }) => {
  const [footTag, setFootTag] = useState("영화를 선택하세요.");

  const showMv = (row) => {
    setFootTag(`[${row.movieCd}] ${row.movieNm} 개봉일 : ${row.openDt}`);
  };

  let trTags = [];
  for (let row of mv) {
    let increIcon = "-";
    if (row.rankInten < 0) {
      increIcon = `▼ ${row.rankInten.replace("-", "")}`;
    } else if (row.rankInten > 0) {
      increIcon = `▲ ${row.rankInten}`;
    }

    trTags.push(
      <tr key={row.movieCd} onClick={() => showMv(row)}>
        <td>{row.rank}</td>
        <NameTd oan={row.rankOldAndNew}>{row.movieNm}</NameTd>
        <td>{Number(row.salesAmt).toLocaleString()}원</td>
        <Td inten={row.rankInten}>{increIcon}</Td>
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
