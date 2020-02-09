import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 60.5px;
  grid-template-rows: 20px 30px;
  grid-template-areas: "title" "value";
  border: white 1px solid;
`;
const StatTitle = styled.div`
  grid-area: title;
  border-bottom: 1px solid white;
  line-height: 16px;
`;
const StatValue = styled.span`
  grid-area: value;
  font-size: 1.4em;
  line-height: 25px;
`;

export default function UnitStat(props) {
  return (
    <Wrapper>
      <StatTitle>{props.name}</StatTitle>
      <StatValue>{props.value}</StatValue>
    </Wrapper>
  );
}
