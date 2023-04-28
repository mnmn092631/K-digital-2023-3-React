import styled, { css } from "styled-components";

const Btn = styled.button`
  ${({ active }) =>
    active &&
    css`
      background-color: #87addb;
      border: none;
    `}
`;

const DateBtns = ({ date, selected, setSelected }) => {
  return (
    <Btn
      type="button"
      active={date === selected}
      onClick={() => setSelected(date)}
    >
      {date}
    </Btn>
  );
};

export default DateBtns;
