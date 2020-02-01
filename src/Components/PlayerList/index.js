import React from "react";
import styled from "styled-components";
import Player from "../Player";

const Wrapper = styled.div``;
const List = styled.table``;
const PlayerHeader = styled.th``;
const Button = styled.span`
  border: white 2px solid;
  border-radius: 10px;
  padding: 4px 12px;
`;

export default class PlayerList extends React.Component {
  render() {
    const { playerData, addFn } = this.props;
    console.log(playerData);
    return (
      <Wrapper>
        {playerData && (
          <div>
            <Button onClick={() => addFn("Nick")}>Add Player</Button>
            <List>
              <thead>
                <PlayerHeader>Player</PlayerHeader>
                <PlayerHeader>Faction</PlayerHeader>
                <PlayerHeader>Points</PlayerHeader>
              </thead>
              <tbody>
                {playerData.map((player, id) => (
                  <Player data={player} key={id} />
                ))}
              </tbody>
            </List>
          </div>
        )}
      </Wrapper>
    );
  }
}
