import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px black solid;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 4fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "name name points" "faction . .";
  width: 200px;
  margin: 10px auto;
`;
const Name = styled.div`
  font-size: 20px;
  grid-area: name;
  color: white;
  background-color: black;
`;
const Faction = styled.div`
  font-size: 15px;
  grid-area: faction;
`;
const Points = styled.div`
  font-size: 20px;
  grid-area: points;
  border: 1px white solid;
  border-radius: 50%;
  background-color: white;
`;

export default function Player(props) {
  const { name, faction, points } = props.data;

  return (
    <Wrapper>
      <Name>{name}</Name>
      <Faction>{faction}</Faction>
      <Points>
        {points.length > 0
          ? points
              .map(value => value.score)
              .reduce((accumulator, currentValue) => accumulator + currentValue)
          : 0}
      </Points>
    </Wrapper>
  );
}
