const Detail = ({ selData }) => {
  return (
    <div className="grid">
      {["사고건수", "사망자수", "중상자수", "경상자수", "부상신고자수"].map(
        (item) => (
          <div key={item} className="grid">
            <small>{item}</small>
            <strong>{Number(selData[item]).toLocaleString()}</strong>
          </div>
        )
      )}
    </div>
  );
};

export default Detail;
