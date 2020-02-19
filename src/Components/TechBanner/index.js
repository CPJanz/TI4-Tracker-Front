import React from "react";
import styled from "styled-components";
import helpers from "../../Utils/helpers";
import Popup from "reactjs-popup";
import UpdatedTechCard from "../UpdatedTechCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Content = styled.div`
  height: 100%;
  overflow-y: auto;
`;

const Wrapper = styled.div`
  font-weight: bold;
  background: darkgrey;
`;

const Header = styled.span`
  cursor: pointer;
  margin: auto 5px;
`;

export default function TechBanner(props) {
  const { tech } = props;
  const techTypeCount = {};
  let factionTechCount = 0;
  const techObjectArray = tech.map(techId => {
    const techObject = helpers.getTechById(techId);
    techTypeCount[techObject.type]
      ? techTypeCount[techObject.type]++
      : (techTypeCount[techObject.type] = 1);
    techObject.faction > -1 && factionTechCount++;
    return techObject;
  });
  const displayString =
    "G".repeat(techTypeCount[0]) +
    "B".repeat(techTypeCount[1]) +
    "Y".repeat(techTypeCount[2]) +
    "R".repeat(techTypeCount[3]) +
    "U".repeat(techTypeCount[4]) +
    "F".repeat(factionTechCount);
  return (
    <Wrapper>
      Tech: {displayString}
      <Popup
        trigger={
          <Header>
            <FontAwesomeIcon icon="question-circle" />
          </Header>
        }
        modal
        closeOnDocumentClick
        contentStyle={{
          height: `${techObjectArray.length * 230}px`,
          maxHeight: "80%",
          width: "340px",
          overflow: "hidden"
        }}
      >
        <Content>
          {techObjectArray.map((tech, index) => (
            <UpdatedTechCard key={index} {...tech} />
          ))}
        </Content>
      </Popup>
    </Wrapper>
  );
}
