const BoxRows = ({ mv }) => {
  let increIcon = "-";
  if (mv.rankInten > 0) {
    increIcon = "🔼";
  } else if (mv.rankInten < 0) {
    increIcon = "🔽";
  }

  return (
    <tr>
      <td>{mv.rank}</td>
      <td>{mv.movieNm}</td>
      <td>{Number(mv.salesAmt).toLocaleString()}</td>
      <td>{increIcon}</td>
    </tr>
  );
};

export default BoxRows;
