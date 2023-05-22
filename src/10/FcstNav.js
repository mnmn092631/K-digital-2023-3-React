import { Link } from "react-router-dom";
import styled from "styled-components";

const NavUl = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const NavTitle = styled.li`
  font-weight: 600;
  font-size: x-large;
`;

const FcstNav = () => {
  return (
    <nav>
      <NavUl>
        <NavTitle>기상청 단기예보</NavTitle>
        <li>
          <Link to="/fcst" role="button">
            단기예보 메인
          </Link>
        </li>
      </NavUl>
    </nav>
  );
};

export default FcstNav;
