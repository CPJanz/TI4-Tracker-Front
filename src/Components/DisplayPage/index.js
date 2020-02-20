import React from "react";
import styled from "styled-components";
import Player from "../Player";
import helpers from "../../Utils/helpers";
import Icon from "../Icon";
import ObjectiveBanner from "../ObjectiveBanner";

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
  const result = [];
  players.forEach(player => {
    player.points.forEach(point => {
      point.id === objective && result.push(player.faction);
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
          {PlayersWhoCompleted(players, objective.id).map((player, index) => (
            <Icon key={index} size={25} {...helpers.getFactionById(player)} />
          ))}
        </ObjectiveBanner>
      ))}
      <h3>Misc Points</h3>

      {players.map((player, index) => (
        <Player {...player} key={index} />
      ))}
    </Wrapper>
  );
}
