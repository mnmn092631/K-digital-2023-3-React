import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="container">
      <article>
        <header>
          <h1>K-digital 3기 React 학습목록</h1>
        </header>
        <ul>
          <li>
            <Link to="dust">[23.04.25] : Dust</Link>
          </li>
          <li>
            <Link to="mydiv">
              [23.04.25] : MyDiv - 조건부 렌더링, 컴포넌트 이벤트 추가, useState
            </Link>
          </li>
          <li>
            <Link to="box">
              [23.04.21] : Box - Component, Fragments, JSX, props
            </Link>
          </li>
          <li>
            <Link to="myclock">
              [23.04.21] : MyClock - Component, Fragments, JSX, props
            </Link>
          </li>
          <li>
            <Link to="hello">[23.04.20] : create-react-app</Link>
          </li>
        </ul>
      </article>
    </main>
  );
};

export default Home;
