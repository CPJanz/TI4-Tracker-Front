import React from "react";
import styled from "styled-components";
import UpdatedTechCard from "../UpdatedTechCard";
import helpers from "../../Utils/helpers";

const Wrapper = styled.div`
  padding: 100px;
`;

const TEMPTECHOBJECT = [];
for (let i = 0; i < 60; i++) {
  TEMPTECHOBJECT.push(helpers.getTechById(i));
}

export default function EditPage(props) {
  const { gameData } = props;
  return (
    <Wrapper>
      {TEMPTECHOBJECT.map((tech, index) => (
        <UpdatedTechCard key={index} tech={tech} />
      ))}
    </Wrapper>
  );
}
