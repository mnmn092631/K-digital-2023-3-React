import { Link } from "react-router-dom";

const RouteNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/route" role="button">
            RouteMain
          </Link>
        </li>
        <li>
          <Link to="/route/page1/🍎/🥕" role="button">
            RoutePage1
          </Link>
        </li>
        <li>
          <Link to="/route/page2?item1=🍎&item2=🥕" role="button">
            RoutePage2
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default RouteNav;
