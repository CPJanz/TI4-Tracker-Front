import React from "react";
import styled from "styled-components";
import helpers from "../../Utils/helpers";
import Icon from "../Icon";

const Wrapper = styled.div``;
const ScoreRuler = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background: darkgray;
`;
const BucketContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const Bucket = styled.div`
  width: 10%;
  display: "inline-block";
  border-right: black solid 1px;
`;
const ScoreText = styled.p``;

export default function ScoreTrack(props) {
  const { players } = props;
  const scoreNumbers = [];
  const playerBuckets = [];
  const playerScores = {};
  players.forEach(player => {
    const playerScore = helpers.getScoreFromPlayerObj(player);
    if (playerScores.hasOwnProperty(playerScore)) {
      playerScores[playerScore].push(player);
    } else {
      playerScores[playerScore] = [player];
    }
  });
  for (let i = 0; i <= 10; i++) {
    scoreNumbers.push(
      <Bucket key={i}>
        <ScoreText>{i}</ScoreText>
      </Bucket>
    );
    playerBuckets.push(
      <Bucket key={i}>
        {playerScores.hasOwnProperty(i) &&
          playerScores[i].map((playerObject, index) => (
            <Icon
              key={index}
              iconFile={helpers.getFactionById(playerObject.faction).iconname}
              size={25}
            />
          ))}
      </Bucket>
    );
  }
  return (
    <Wrapper>
      <ScoreRuler>{scoreNumbers.map(value => value)}</ScoreRuler>
      <BucketContainer>{playerBuckets.map(value => value)}</BucketContainer>
    </Wrapper>
  );
}
