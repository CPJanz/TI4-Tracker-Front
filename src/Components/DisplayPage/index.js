import React from "react";
import styled from "styled-components";
import Player from "../Player";

const Wrapper = styled.div``;
const PublicObjective = styled.div``;

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
      {publicObjectives.map((objective, index) => (
        <PublicObjective key={index}>
          {objective.id}
          {PlayersWhoCompleted(players, objective.id).map(player => (
            <span>- {player.name} -</span>
          ))}
        </PublicObjective>
      ))}
      {players.map(player => (
        <Player data={player} />
      ))}
    </Wrapper>
  );
}
