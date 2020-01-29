import React from "react";
import styled from "styled-components";
import Player from "../Player";

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
    console.log(player.name);
    console.log("objective", objective);
    console.log("objectiveNames", objectiveNames);
    return objectiveNames.includes(objective);
  });
};

export default function DisplayPage(props) {
  const { id, players, round, publicObjectives } = props.gameData;

  return (
    <Wrapper>
      <h3>Public Objectives</h3>
      {publicObjectives.map((objective, index) => (
        <PublicObjective key={index}>
          {objective.id}
          {PlayersWhoCompleted(players, objective.id).map(player => (
            <Bubble>{player.name}</Bubble>
          ))}
        </PublicObjective>
      ))}
      {players.map(player => (
        <Player data={player} />
      ))}
    </Wrapper>
  );
}
