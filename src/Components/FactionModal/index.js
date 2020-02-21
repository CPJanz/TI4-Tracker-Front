import React from "react";
import styled from "styled-components";
import helpers from "../../Utils/helpers";
import Popup from "reactjs-popup";
import Icon from "../Icon";
import UpdatedTechCard from "../UpdatedTechCard";
import FlagshipCard from "../FlagshipCard";
import PromissoryCard from "../PromissoryCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
  height: 100%;
  overflow-y: auto;
`;

const StyledQuestionIcon = styled.span`
  cursor: pointer;
`;

const FactionAbilities = styled.ul``;
const Ability = styled.li``;
const StartingTech = styled.div``;
const FactionTech = styled.div``;

const questionIcon = (
  <StyledQuestionIcon>
    <FontAwesomeIcon icon="question-circle" />
  </StyledQuestionIcon>
);

export default function FactionModal(props) {
  const { triggerElement = questionIcon, factionId } = props;
  const factionObject =
    factionId === null
      ? helpers.getFactionById(0)
      : helpers.getFactionById(factionId);
  return (
    <Popup
      trigger={triggerElement}
      modal
      closeOnDocumentClick
      contentStyle={{ height: "80%", overflow: "hidden" }}
    >
      <Wrapper>
        <Icon size={75} {...factionObject} />
        {factionObject.name}
        <h2>Faction Abilities (needs component)</h2>
        <FactionAbilities>
          {helpers
            .splitString(factionObject.factionabilities)
            .map((ability, index) => (
              <Ability key={index}>{ability}</Ability>
            ))}
        </FactionAbilities>
        <StartingTech>
          {String(factionObject.startingtech)
            .split(",")
            .map((id, index) => {
              return (
                <UpdatedTechCard key={index} {...helpers.getTechById(id)} />
              );
            })}
        </StartingTech>
        <FlagshipCard
          faction={factionObject.id}
          flagshipObject={helpers.getFlagshipById(factionObject.flagship)}
        />
        <FactionTech>
          {String(factionObject.factiontech)
            .split(",")
            .map((id, index) => {
              return (
                <UpdatedTechCard key={index} {...helpers.getTechById(id)} />
              );
            })}
        </FactionTech>
        <PromissoryCard {...factionObject} />
      </Wrapper>
    </Popup>
  );
}
