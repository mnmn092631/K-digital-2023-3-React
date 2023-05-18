import { Route, Routes } from "react-router-dom";
import FcstMain from "./FcstMain";
import UltraSrtFcst from "./UltraSrtFcst";
import VilageFcst from "./VilageFcst";
import FcstNav from "./FcstNav";

const Fcst = () => {
  return (
    <main className="container">
      <FcstNav />
      <Routes>
        <Route path="/" element={<FcstMain />} />
        <Route path="/ultra/:dt/:area/:x/:y" element={<UltraSrtFcst />} />
        <Route path="/vilage/:dt/:area/:x/:y" element={<VilageFcst />} />
      </Routes>
    </main>
  );
};

export default Fcst;
