import { useState } from "react";
import DateBtns from "./DateBtns";
import data from "./dataFrcst.json";
import InfoText from "./InfoText";

const Dust = () => {
  const [selected, setSelected] = useState("");

  return (
    <main className="container">
      <article>
        <header>
          <h1>초미세먼지 주간예보</h1>
        </header>
        <div className="grid">
          {Object.keys(data).map((date) => {
            return (
              <DateBtns
                key={date}
                date={date}
                selected={selected}
                setSelected={setSelected}
              />
            );
          })}
        </div>
        <footer className="grid">
          {selected !== "" &&
            data[selected].split(", ").map((item, i) => {
              return <InfoText str={item} key={i} />;
            })}
        </footer>
      </article>
    </main>
  );
};

export default Dust;
