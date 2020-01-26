import React from "react";
import styled from "styled-components";
import PlayerList from "../PlayerList";
import api from "../../Utils/api";

const Wrapper = styled.div``;

export default function EditPage() {
  console.log(api.fetchGame().players);
  return (
    <Wrapper>
      <PlayerList playerData={api.fetchGame().players} />
    </Wrapper>
  );
}
