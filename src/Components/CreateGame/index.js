import React from "react";
import styled from "styled-components";
import ti from "../../Utils/tiObject";

const Wrapper = styled.div``;
const Title = styled.h2``;
const PlayerForm = styled.div``;
const PlayerContainer = styled.div``;
const AnotherPlayerButton = styled.div``;
const StartGameButton = styled.div``;
const NameInput = styled.input``;
const FactionDropdown = styled.select``;
const RemovePlayer = styled.span``;

export default function CreateGame(props) {
  const {
    players,
    playerChangeNameFn,
    playerChangeFactionFn,
    addNewPlayerFn,
    removePlayerFn,
    startGameFn
  } = props;
  return (
    <Wrapper>
      <Title>Players</Title>
      <PlayerForm>
        {players.map((player, playerIndex) => (
          <PlayerContainer key={playerIndex}>
            <NameInput
              value={player.name}
              onChange={event =>
                playerChangeNameFn(playerIndex, event.target.value)
              }
            />
            <FactionDropdown
              key={playerIndex}
              value={player.faction}
              onChange={event =>
                playerChangeFactionFn(playerIndex, event.target.value)
              }
            >
              {ti.factions.map((faction, index) => (
                <option key={index} value={faction.id}>
                  {faction.name}
                </option>
              ))}
            </FactionDropdown>
            <RemovePlayer onClick={() => removePlayerFn(playerIndex)}>
              -
            </RemovePlayer>
          </PlayerContainer>
        ))}
      </PlayerForm>
      {players.length < 6 && (
        <AnotherPlayerButton onClick={addNewPlayerFn}>+</AnotherPlayerButton>
      )}
      <StartGameButton onClick={startGameFn}>Start Game</StartGameButton>
    </Wrapper>
  );
}
