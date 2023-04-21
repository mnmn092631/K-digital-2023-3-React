import logo from "../logo.svg";
import "./Hello.css";

const Hello = () => {
  let name = "강주희";
  let git = "https://github.com/mnmn092631";

  return (
    <main className="container">
      <article data-theme="dark">
        <img src={logo} alt="react-logo" className="App-logo" />
        <footer>
          <hgroup>
            <h1>{name}</h1>
            <h2>
              <a href={git} target="_blank" rel="noreferrer">
                github
              </a>
            </h2>
          </hgroup>
        </footer>
      </article>
    </main>
  );
};

export default Hello;
