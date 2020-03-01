import React from "react";
import styled from "styled-components";
import Player from "../Player";
import helpers from "../../Utils/helpers";
import Icon from "../Icon";
import ObjectiveBanner from "../ObjectiveBanner";
import AddObjectiveModal from "../AddObjectiveModal";

const Wrapper = styled.div``;

const PlayerContainer = styled.div`
  max-width: 1000px;
  margin: auto;
`;

const ObjectivesContainer = styled.div``;

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

const objectivesToDisplay = (publicObjectives, players) => {
  const results = publicObjectives.slice(0);
  players.forEach(player => {
    player.points.forEach(objective => {
      const objectiveObject = helpers.getObjectiveById(objective.id);
      switch (objectiveObject.type) {
        case 0:
        case 1:
        case 2:
        case 3:
          if (
            results.filter(result => result.id === objective.id).length === 0
          ) {
            results.push(objective);
          }
          break;
        case 4:
        case 5:
          console.log("Secret Objective", objectiveObject.name);
          break;
        case 6:
          if (
            results.filter(result => result.id === objective.id).length === 0
          ) {
            results.push(objective);
          }
          break;
        case 7:
          console.log("Support the Throne", objectiveObject.name);
          break;
        default:
      }
    });
  });
  console.log(results);
  return results;
};

export default function DisplayPage(props) {
  const { addPublicObjectiveFn, claimObjectiveFn, claimTechFn } = props;
  const { players, publicObjectives } = props.gameData;
  const objectives = objectivesToDisplay(publicObjectives, players);
  return (
    <Wrapper>
      <h3>Objectives</h3>
      <ObjectivesContainer>
        {objectives.map((objective, index) => (
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
        <AddObjectiveModal
          {...props.gameData}
          addPublicObjectiveFn={addPublicObjectiveFn}
        />
      </ObjectivesContainer>
      <h3>Players</h3>
      <PlayerContainer>
        {players.map((player, index) => (
          <Player
            {...player}
            game={props.gameData}
            claimObjectiveFn={claimObjectiveFn}
            claimTechFn={claimTechFn}
            key={index}
          />
        ))}
      </PlayerContainer>
    </Wrapper>
  );
}
