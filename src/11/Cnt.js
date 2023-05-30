import { useState } from "react";
import CntDisp from "./CntDisp";
import CntInput from "./CntInput";

const Cnt = () => {
  const [cnt, setCnt] = useState(0);

  return (
    <main className="container">
      <CntInput cnt={cnt} setCnt={setCnt} />
      <CntDisp cnt={cnt} />
    </main>
  );
};
export default Cnt;
