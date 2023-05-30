import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { CntAtoms } from "./CntAtoms";

const CntInput = () => {
  const [cnt, setCnt] = useRecoilState(CntAtoms);

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
      <Link to="/cnt/disp">출력 화면 이동</Link>
    </article>
  );
};

export default CntInput;
