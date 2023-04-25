import { useState } from "react";
import styled from "styled-components";

const FlexUl = styled.ul`
  display: flex;
  justify-content: space-between;
  color: ${({ num }) => (num === "1" ? "green" : "blue")};
`;

const Heart = styled.h1`
  text-align: end;
  cursor: pointer;
`;

const MyDivAUser = ({ user }) => {
  const num = user.slice(-1);

  const [cnt, setCnt] = useState(0);
  const likeBtn = () => {
    setCnt(cnt + 1);
  };

  return (
    <>
      <FlexUl num={num}>
        <li>{user + "1"}</li>
        <li>{user + "2"}</li>
      </FlexUl>
      {num === "1" && (
        <footer>
          <Heart>
            <span onClick={() => likeBtn()}>❤</span>
            {cnt}
          </Heart>
        </footer>
      )}
    </>
  );
};

export default MyDivAUser;
