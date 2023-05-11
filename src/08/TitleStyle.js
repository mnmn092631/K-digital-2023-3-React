import styled from "styled-components";

const Title = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  & > h1 {
    font-size: larger;
    text-align: left;
  }

  & > span {
    font-size: medium;
  }
`;

export default Title;
