import React from "react";
import styled from "styled-components";
import PlayerList from "../PlayerList";
import api from "../../Utils/api";

const Wrapper = styled.div``;

export default function EditPage(props) {
  const { gameData } = props;
  return (
    <Wrapper>
      <PlayerList playerData={gameData.players} />
    </Wrapper>
  );
}
