import React from "react";
import styled from "styled-components";
import Player from "../Player";

const Wrapper = styled.div``;
const List = styled.ul``;
const PlayerHeader = styled.li``;
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
              <PlayerHeader>Players</PlayerHeader>
              {playerData.map((player, id) => (
                <Player data={player} key={id} />
              ))}
            </List>
          </div>
        )}
      </Wrapper>
    );
  }
}
