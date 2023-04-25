import styled, { css } from "styled-components";

const Btn = styled.button`
  ${({ active }) =>
    active &&
    css`
      background-color: #1c6f9e;
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
