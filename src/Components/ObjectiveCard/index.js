import React from "react";
import styled from "styled-components";
import helpers from "../../Utils/helpers";

const Wrapper = styled.div`
  margin: 10px auto;
  border: black 1px solid;
  color: black;
`;

export default function ObjectiveCard(props) {
  const { name, text, pointvalue, type } = props;
  const typeString = helpers.getObjectiveTypeById(type).name;

  return (
    <Wrapper>
      <h2>objective card</h2>
      {name} <br />
      {text} <br />
      {pointvalue} <br />
      {typeString} <br />
    </Wrapper>
  );
}
