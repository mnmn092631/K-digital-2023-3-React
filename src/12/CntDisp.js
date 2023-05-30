import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { CntAtomTwice, CntAtoms } from "./CntAtoms";

const CntDisp = () => {
  const cnt = useRecoilValue(CntAtoms);
  const cntTwice = useRecoilValue(CntAtomTwice);

  return (
    <article>
      <h2>
        입력값 : {cnt}, 입력값 2배 : {cntTwice}
      </h2>
      <footer>
        <Link to="/cnt">입력 화면 이동</Link>
      </footer>
    </article>
  );
};

export default CntDisp;
