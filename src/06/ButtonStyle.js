import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ act }) => act && "purple"};
  border: none;
`;

export default Button;
