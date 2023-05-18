import { Link } from "react-router-dom";

const FcstNav = () => {
  return (
    <nav>
      <ul>
        <li>기상청 단기예보</li>
        <li>
          <Link to="/fcst" role="button">
            단기예보 메인
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default FcstNav;
