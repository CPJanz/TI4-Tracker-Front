import React from "react";
import styled from "styled-components";
import helpers from "../../Utils/helpers";
import UpdatedTechCard from "../UpdatedTechCard";
import CardListModal from "../CardListModal";
import Icon from "../Icon";

const Content = styled.div``;

const Wrapper = styled.div`
  font-weight: bold;
  background: darkgrey;
  padding: 5px;
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
      Tech:
      {helpers.getIconsByRequiresString(displayString).map((icon, index) => (
        <Icon key={index} iconname={icon} size={18} />
      ))}
      <CardListModal count={techObjectArray.length}>
        <Content>
          {techObjectArray.map((tech, index) => (
            <UpdatedTechCard key={index} {...tech} />
          ))}
        </Content>
      </CardListModal>
    </Wrapper>
  );
}
