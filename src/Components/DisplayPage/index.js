import React from "react";
import styled from "styled-components";
import Player from "../Player";
import helpers from "../../Utils/helpers";
import Icon from "../Icon";
import ObjectiveBanner from "../ObjectiveBanner";

const Wrapper = styled.div``;

const PlayerContainer = styled.div`
  max-width: 1000px;
  margin: auto;
`;

const PlayersWhoCompleted = (players, objective) => {
  const result = [];
  players.forEach((player, index) => {
    result.push(0);
    player.points.forEach(point => {
      point.id === objective && result[index]++;
    });
  });
  return result;
};

export default function DisplayPage(props) {
  const { players, publicObjectives } = props.gameData;
  return (
    <Wrapper>
      <h3>Public Objectives</h3>
      {publicObjectives.map((objective, index) => (
        <ObjectiveBanner
          key={index}
          {...helpers.getObjectiveById(objective.id)}
        >
          {PlayersWhoCompleted(players, objective.id).map(
            (player, index) =>
              player > 0 && (
                <Icon
                  key={index}
                  size={25}
                  {...helpers.getFactionById(index)}
                  text={player > 1 ? player : ""}
                />
              )
          )}
        </ObjectiveBanner>
      ))}
      <h3>Misc Points</h3>
      <PlayerContainer>
        {players.map((player, index) => (
          <Player {...player} key={index} />
        ))}
      </PlayerContainer>
    </Wrapper>
  );
}
