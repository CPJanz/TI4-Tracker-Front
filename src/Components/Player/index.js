import React from "react";
import styled from "styled-components";
import helpers from "../../Utils/helpers";
import FactionModal from "../FactionModal";
import Icon from "../Icon";
import TechBanner from "../TechBanner";
import ObjectiveCard from "../ObjectiveCard";
import CardListModal from "../CardListModal";
import ClaimObjectiveModal from "../ClaimObjectiveModal";

const Wrapper = styled.div`
  display: inline-block;
`;

const GridWrapper = styled.div`
  border: 1px black solid;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr;
  grid-template-rows: 1fr auto auto;
  grid-template-areas: "icon name name points" "icon faction faction ." "tech tech tech tech";
  width: 300px;
  margin: 10px;
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
  const { name, id, faction, points, game, claimObjectiveFn } = props;
  const factionObject = helpers.getFactionById(faction);
  return (
    <Wrapper>
      <GridWrapper>
        <Name>
          {name}{" "}
          <ClaimObjectiveModal
            claimObjectiveFn={claimObjectiveFn}
            id={id}
            round={game.round}
            players={game.players}
            publicObjectives={game.publicObjectives}
            points={points}
          />
        </Name>
        <IconContainer>
          <Icon {...factionObject} size={43} />
        </IconContainer>
        <Faction>
          {factionObject.name}
          <FactionModal factionId={factionObject.id} />
        </Faction>
        <CardListModal
          trigger={<Points>{helpers.calculatePoints(points)}</Points>}
          vertical
        >
          <div>
            {points.map((point, index) => (
              <ObjectiveCard
                key={index}
                {...helpers.getObjectiveById(point.id)}
              />
            ))}
          </div>
        </CardListModal>
        <TechContainer>
          <TechTitle>
            <TechBanner {...props} />
          </TechTitle>
        </TechContainer>
      </GridWrapper>
    </Wrapper>
  );
}
