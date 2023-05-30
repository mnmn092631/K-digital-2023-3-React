const CntInput = ({ cnt, setCnt }) => {
  const plus = () => {
    setCnt(cnt + 1);
  };

  const minus = () => {
    if (cnt <= 0) return;
    setCnt(cnt - 1);
  };

  return (
    <article>
      <form>
        <div className="grid">
          <button type="button" onClick={() => minus()}>
            ▼
          </button>
          <input type="text" name="txt" value={cnt} readOnly />
          <button type="button" onClick={() => plus()}>
            ▲
          </button>
        </div>
      </form>
    </article>
  );
};

export default CntInput;
