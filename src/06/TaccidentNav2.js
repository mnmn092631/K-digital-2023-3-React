import Button from "./ButtonStyle";

const TaccidentNav2 = ({ c2, sel1, sel2, setSel2 }) => {
  return (
    <nav>
      <ul>
        <li>
          <strong>교통사고 중분류</strong>
        </li>
      </ul>
      <ul>
        {c2.map((c2) => {
          return (
            sel1 === c2[0] && (
              <li key={c2[1]}>
                <Button act={c2[1] === sel2} onClick={() => setSel2(c2[1])}>
                  {c2[1]}
                </Button>
              </li>
            )
          );
        })}
      </ul>
    </nav>
  );
};

export default TaccidentNav2;
