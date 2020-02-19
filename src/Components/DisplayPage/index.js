import React from "react";
import styled from "styled-components";
import Player from "../Player";
import helpers from "../../Utils/helpers";
import TechBanner from "../TechBanner";

const Wrapper = styled.div``;
const PublicObjective = styled.div``;
const Bubble = styled.span`
  background-color: black;
  color: white;
  border-radius: 25%;
  padding: auto 5px;
  margin: auto 5px;
`;

const PlayersWhoCompleted = (players, objective) => {
  return players.filter(player => {
    const objectiveNames = player.points.map(objective => objective.id);
    return objectiveNames.includes(objective);
  });
};

export default function DisplayPage(props) {
  const { players, publicObjectives } = props.gameData;
  return (
    <Wrapper>
      <h3>Public Objectives</h3>
      {publicObjectives.map((objective, index) => (
        <PublicObjective key={index}>
          {helpers.getObjectiveById(objective.id).name}
          {PlayersWhoCompleted(players, objective.id).map((player, index) => (
            <Bubble key={index}>{player.name}</Bubble>
          ))}
        </PublicObjective>
      ))}
      {players.map((player, index) => (
        <Player {...player} key={index} />
      ))}
      <TechBanner {...players[0]} />
    </Wrapper>
  );
}
