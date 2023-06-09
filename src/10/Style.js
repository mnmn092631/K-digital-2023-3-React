import styled, { css } from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  & > h1 {
    margin: 0 15px 0 0;
    font-size: larger;
    flex-shrink: 0;
  }

  & > select {
    margin: 0;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & > button {
    width: 24%;
  }
`;

export const SelBtn = styled.button`
  ${({ active }) =>
    active &&
    css`
      background-color: lightskyblue;
      border: none;
    `}
`;
