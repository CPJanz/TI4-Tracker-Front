import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.nav`
  position: static;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

export default function Nav(props) {
  return (
    <Wrapper>
      {props.gameId && <p>Game Code {props.gameId}</p>}
      <NavList>
        <ListItem>
          <StyledNavLink to="/edit" exact>
            Edit
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/" exact>
            Display
          </StyledNavLink>
        </ListItem>
      </NavList>
    </Wrapper>
  );
}
