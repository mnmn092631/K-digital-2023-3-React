import { useEffect, useState } from "react";
import aData from "./dataTaccident.json";
import TaccidentNav from "./TaccidenetNav";
import TaccidentNav2 from "./TaccidentNav2";
import Detail from "./Detail";

const Taccident = () => {
  let data = aData.data;

  const [sel1, setSel1] = useState();
  const [sel2, setSel2] = useState();
  const [selData, setSelData] = useState();

  let c1 = [];
  data.forEach((item) => {
    let name = item["사고유형_대분류"];
    if (!c1.includes(name)) {
      c1.push(name);
    }
  });

  let c2 = [];
  data.forEach((item) => {
    let name = item["사고유형_대분류"];
    let sub = item["사고유형_중분류"];
    c2.push([name, sub]);
  });

  useEffect(() => {
    let temp = data.filter((item) => {
      return (
        item["사고유형_대분류"] === sel1 && item["사고유형_중분류"] === sel2
      );
    });
    setSelData(temp[0]);
  }, [data, sel1, sel2]);

  return (
    <main className="container">
      <article>
        <header>
          <h1>사고유형별 교통사고 통계</h1>
        </header>

        <TaccidentNav
          key={c1}
          c1={c1}
          sel1={sel1}
          setSel1={setSel1}
          setSel2={setSel2}
        />
        <TaccidentNav2
          key={c2}
          c2={c2}
          sel1={sel1}
          sel2={sel2}
          setSel2={setSel2}
        />

        <footer>
          <Detail selData={selData} />
        </footer>
      </article>
    </main>
  );
};

export default Taccident;
