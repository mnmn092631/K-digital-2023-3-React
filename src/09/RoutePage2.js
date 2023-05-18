import { useLocation } from "react-router-dom";
import qs from "query-string";

const RoutePage2 = () => {
  const loc = useLocation().search;
  const item1 = qs.parse(loc).item1;
  const item2 = qs.parse(loc).item2;

  return (
    <article>
      <header>
        <h1>RoutePage2</h1>
      </header>
      <span>{item1}</span>
      <span>{item2}</span>
    </article>
  );
};

export default RoutePage2;
