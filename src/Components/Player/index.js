import React from "react";
import styled from "styled-components";
import helpers from "../../Utils/helpers";
import FactionModal from "../FactionModal";
import Icon from "../Icon";
import TechBanner from "../TechBanner";
import Popup from "reactjs-popup";
import ObjectiveCard from "../ObjectiveCard";

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
  cursor: help;
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
  const { name, faction, points } = props;
  const factionObject = helpers.getFactionById(faction);
  return (
    <Wrapper>
      <Name>{name}</Name>
      <IconContainer>
        <Icon {...factionObject} size={43} />
      </IconContainer>
      <Faction>
        {factionObject.name}
        <FactionModal factionId={factionObject.id} />
      </Faction>
      <Popup
        trigger={<Points>{helpers.calculatePoints(points)}</Points>}
        modal
        closeOnDocumentClick
        contentStyle={{ height: "80%", overflow: "hidden" }}
      >
        <div>
          {points.map((point, index) => (
            <ObjectiveCard
              key={index}
              {...helpers.getObjectiveById(point.id)}
            />
          ))}
        </div>
      </Popup>
      <TechContainer>
        <TechTitle>
          <TechBanner {...props} />
        </TechTitle>
      </TechContainer>
    </Wrapper>
  );
}
