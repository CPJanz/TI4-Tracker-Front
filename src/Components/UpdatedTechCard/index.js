import React from "react";
import styled from "styled-components";
import helpers from "../../Utils/helpers";
import Icon from "../Icon";
import UnitStat from "../UnitStat";

const Wrapper = styled.div`
  height: 200px;
  width: 300px;
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
  grid-template-columns: 250px 50px;
  grid-template-rows: 50px 100px 50px;
  grid-template-areas:
    "name  icon"
    "text requires-icons"
    "unit requires-icons";
`;

const NameArea = styled.div`
  grid-area: name;
  border-bottom: yellow 1px solid;
  color: white;
  text-align: left;
  padding-left: 3px;
  font-size: 22px;
`;

const IconArea = styled.div`
  grid-area: icon;
  border-bottom: yellow 1px solid;
  border-left: yellow 1px solid;
  text-align: right;
  padding: 3px;
`;

const RequiresTitle = styled.div`
  grid-area: requires-icons;
  text-align: center;
  color: white;
  font-size: 11px;
  border-left: yellow 1px solid;
`;

const RequiresList = styled.ul`
  grid-area: requires-icons;
  list-style: none;
  padding: 0;

  border-left: yellow 1px solid;
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

export default function UpdatedTechCard(props) {
  const { faction, unitid, iconname, requires, type, name, text } = props.tech;
  const styleProps = {
    color: helpers.getTechTypeById(type).name,
    background:
      faction === -1 ? "" : "/Icons/" + helpers.getFactionById(faction).iconname
  };
  const unitObject = unitid === undefined ? null : helpers.getUnitbyId(unitid);
  const unitStats = unitObject && helpers.getUnitStatsByObject(unitObject);

  return (
    <Wrapper {...styleProps}>
      <RequiresTitle>Requires:</RequiresTitle>
      <NameArea color={styleProps.color}>{name}</NameArea>
      <IconArea>
        <Icon iconFile={iconname} size={40} />
      </IconArea>
      <RequiresList>
        {helpers.getIconsByRequiresString(requires).map((icon, index) => (
          <li key={index}>
            <Icon iconFile={icon} size={28} />
          </li>
        ))}
      </RequiresList>
      <TextArea>
        {unitObject
          ? helpers
              .splitString(unitObject.ability)
              .map((line, index) => <p key={index}>{line}</p>)
          : helpers
              .splitString(text)
              .map((line, index) => <p key={index}>{line}</p>)}
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
