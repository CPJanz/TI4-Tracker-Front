import React from "react";
import styled from "styled-components";
import helpers from "../../Utils/helpers";
import FactionCard from "../FactionCard";
import TechCard from "../TechCard";
import Icon from "../Icon";

const Wrapper = styled.div`
  border: 1px black solid;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr;
  grid-template-rows: 1fr auto auto;
  grid-template-areas: "icon name name points" "icon faction faction ." "tech tech tech tech";
  width: 300px;
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

const IconContainer = styled.div`
  grid-area: icon;
  padding: 3px;
`;

const TechContainer = styled.div`
  grid-area: tech;
`;

const TechTitle = styled.div``;

export default function Player(props) {
  const { name, faction, points, tech } = props.data;
  const factionObject = helpers.getFactionById(faction);
  return (
    <Wrapper>
      <Name>{name}</Name>
      <IconContainer>
        <Icon iconFile={factionObject.iconname} size={43} />
      </IconContainer>
      <Faction>
        <FactionCard faction={factionObject} />
      </Faction>
      <Points>{helpers.calculatePoints(points)}</Points>
      <TechContainer>
        <TechTitle>Tech:</TechTitle>
        {tech.map((id, index) => (
          <TechCard tech={helpers.getTechById(id)} key={index} />
        ))}
      </TechContainer>
    </Wrapper>
  );
}
