import React from "react";
import styled from "styled-components";
import helpers from "../../Utils/helpers";
import TechBar from "../TechBar";

const Wrapper = styled.div`
  border: 1px black solid;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 4fr 1fr 1fr;
  grid-template-rows: 1fr 1fr auto;
  grid-template-areas: "name name points" "faction faction ." "tech tech tech";
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

const TechContainer = styled.div`
  grid-area: tech;
`;

export default function Player(props) {
  const { name, faction, points, tech } = props.data;
  return (
    <Wrapper>
      <Name>{name}</Name>
      <Faction>{helpers.getFactionById(faction).name}</Faction>
      <Points>{helpers.calculatePoints(points)}</Points>
      <TechContainer>
        {tech.map((id, index) => (
          <TechBar tech={helpers.getTechById(id)} key={index} />
        ))}
      </TechContainer>
    </Wrapper>
  );
}
