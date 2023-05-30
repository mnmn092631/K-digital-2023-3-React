import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import CntDisp from "./CntDisp";
import CntInput from "./CntInput";

const Cnt = () => {
  return (
    <main className="container">
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<CntInput />} />
          <Route path="/disp" element={<CntDisp />} />
        </Routes>
      </RecoilRoot>
    </main>
  );
};
export default Cnt;
