import React from "react";
import styled from "styled-components";
import helpers from "../../Utils/helpers";
import UnitStat from "../UnitStat";

const Wrapper = styled.div`
  height: 206px;
  width: 306px;
  background-image: radial-gradient(
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 1)
    ),
    url(${props => `${props.background}`});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border: 3px solid ${props => `${props.color}`};
  border-radius: 10px;
  overflowy: scroll;
  margin: 10px;
  display: grid;
  grid-template-columns: 306px;
  grid-template-rows: 50px 106px 50px;
  grid-template-areas:
    "name"
    "text"
    "unit";
`;

const NameArea = styled.div`
  grid-area: name;
  border-bottom: yellow 1px solid;
  color: white;
  text-align: left;
  padding-left: 10px;
  font-size: 35px;
`;

const TextArea = styled.div`
  grid-area: text;
  color: white;

  & p {
    margin: 0;
    padding: 5px;
    font-size: 12px;
    text-align: left;
  }
`;

const UnitArea = styled.div`
  grid-area: unit;
  color: white;
  display: flex;
`;

export default function FlagshipCard(props) {
  const { faction, flagshipObject } = props;
  const styleProps = {
    background:
      faction === -1 ? "" : "/Icons/" + helpers.getFactionById(faction).iconname
  };
  const unitStats = helpers.getUnitStatsByObject(flagshipObject);

  return (
    <Wrapper {...styleProps}>
      <NameArea color={styleProps.color}>{flagshipObject.name}</NameArea>
      <TextArea>
        {helpers.splitString(flagshipObject.ability).map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </TextArea>
      {unitStats && (
        <UnitArea>
          {unitStats.map((stat, index) => (
            <UnitStat {...stat} key={index} />
          ))}
        </UnitArea>
      )}
    </Wrapper>
  );
}
