import { useParams } from "react-router-dom";

const RoutePage1 = () => {
  const item1 = useParams().item1;
  const item2 = useParams().item2;

  return (
    <article>
      <header>
        <h1>RoutePage1</h1>
      </header>
      <span>{item1}</span>
      <span>{item2}</span>
    </article>
  );
};

export default RoutePage1;
