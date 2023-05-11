import styled from "styled-components";

const Title = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  cursor: pointer;

  & > h1 {
    margin: 0 10px 0 0;
    font-size: larger;
    text-align: left;
  }

  & > span {
    font-size: medium;
  }
`;

export default Title;
