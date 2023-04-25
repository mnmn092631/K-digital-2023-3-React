import styled from "styled-components";

const InfoTxt = styled.span`
  color: ${({ txt }) =>
    txt === "낮음" ? "blue" : txt === "보통" ? "green" : "red"};
`;

const InfoText = ({ str }) => {
  let info = str.split(" : ");
  return (
    <div>
      <strong>{info[0]}</strong>
      <InfoTxt txt={info[1]}>{info[1]}</InfoTxt>
    </div>
  );
};

export default InfoText;
