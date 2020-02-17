import React from "react";
import styled from "styled-components";
import helpers from "../../Utils/helpers";
import Popup from "reactjs-popup";
import Icon from "../Icon";
import PromissoryNote from "../PromissoryNote";
import UpdatedTechCard from "../UpdatedTechCard";

const Wrapper = styled.div`
  height: 100%;
  overflow-y: auto;
`;
const FactionAbilities = styled.ul``;
const Ability = styled.li``;
const StartingTech = styled.div``;

export default function FactionModal(props) {
  const { icon, factionId } = props;
  const factionObject =
    factionId === null
      ? helpers.getFactionById(0)
      : helpers.getFactionById(factionId);
  return (
    <Popup
      trigger={icon}
      modal
      closeOnDocumentClick
      contentStyle={{ height: "80%", overflow: "hidden" }}
    >
      <Wrapper>
        <Icon size={75} iconFile={factionObject.iconname} />
        {factionObject.name}
        <FactionAbilities>
          {helpers
            .splitString(factionObject.factionabilities)
            .map((ability, index) => (
              <Ability key={index}>{ability}</Ability>
            ))}
        </FactionAbilities>
        <PromissoryNote text={factionObject.promissorynote} />
        <StartingTech>
          {String(factionObject.startingtech)
            .split(",")
            .map((id, index) => {
              return (
                <UpdatedTechCard key={index} tech={helpers.getTechById(id)} />
              );
            })}
        </StartingTech>
        {/* TODO: Display faction tech and flagship */}
      </Wrapper>
    </Popup>
  );
}
