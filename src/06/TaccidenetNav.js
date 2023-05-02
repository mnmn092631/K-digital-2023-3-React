import Button from "./ButtonStyle";

const TaccidentNav = ({ c1, sel1, setSel1, setSel2 }) => {
  return (
    <nav>
      <ul>
        <li>
          <strong>교통사고 대분류</strong>
        </li>
      </ul>
      <ul>
        {c1.map((c1) => {
          return (
            <li key={c1}>
              <Button
                act={c1 === sel1}
                onClick={() => {
                  setSel1(c1);
                  setSel2();
                }}
              >
                {c1}
              </Button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TaccidentNav;
