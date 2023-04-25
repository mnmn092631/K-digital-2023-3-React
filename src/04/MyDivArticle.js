import MyDivAUser from "./MyDivAUser";

const MyDivArticle = ({ aname }) => {
  return (
    <article>
      <header>
        <h1>{aname || "MyDiv0"}</h1>
      </header>
      <>
        {!aname ? (
          "MyDiv0"
        ) : aname.slice(-1) === "1" ? (
          <MyDivAUser user={aname} />
        ) : (
          <MyDivAUser user={aname} />
        )}
      </>
    </article>
  );
};

export default MyDivArticle;
