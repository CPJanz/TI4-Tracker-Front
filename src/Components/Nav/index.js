import React from "react";
import styled from "styled-components";
import ScoreTrack from "../ScoreTrack";
import { NavLink } from "react-router-dom";

const Wrapper = styled.nav`
  position: static;
  top: 0;
  left: 0;
  // display: flex;
  // flex-direction: row;
  // justify-content: space-between;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`;

const ListItem = styled.li``;

const StyledNavLink = styled(NavLink)`
  margin-right: 10px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: inherit;

  &:hover {
    color: red;
  }
`;
const GameDetails = styled.div`
  width: 100%;
  background: darkgrey;
`;

export default function Nav(props) {
  const { id, round, players } = props.game;

  return (
    <Wrapper>
      {id && (
        <GameDetails>
          Game Code {id} | Round {round}
        </GameDetails>
      )}
      <ScoreTrack players={players} />
    </Wrapper>
  );
}
