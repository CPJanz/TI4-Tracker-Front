import React from "react";
import styled from "styled-components";
import ScoreTrack from "../ScoreTrack";

const Wrapper = styled.nav`
  position: static;
  top: 0;
  left: 0;
  // display: flex;
  // flex-direction: row;
  // justify-content: space-between;
`;

const GameDetails = styled.div`
  width: 100%;
  background: darkgrey;
`;

const RoundAdvancer = styled.span``;

export default function Nav(props) {
  const { id, round, players } = props.game;

  return (
    <Wrapper>
      {id && (
        <GameDetails>
          Game Code {id} | Round {round}{" "}
          <RoundAdvancer onClick={props.advanceRoundFn}>></RoundAdvancer>
        </GameDetails>
      )}
      <ScoreTrack players={players} />
    </Wrapper>
  );
}
