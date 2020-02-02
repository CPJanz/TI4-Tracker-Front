import React from "react";
import styled from "styled-components";
import helpers from "../../Utils/helpers";
import Icon from "../Icon";

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

  display: grid;
  grid-template-columns: 40px 10px 195px 55px;
  grid-template-rows: 10px 20px 5px 20px 95px 50px;
  grid-template-areas:
    "requires requires name  icon"
    "requires-icons requires-icons name icon"
    "requires-icons requires-icons .  icon"
    "requires-icons requires-icons text icon"
    "requires-icons requires-icons text ."
    "unit unit unit unit";
`;

const NameArea = styled.div`
  grid-area: name;
  border: yellow 1px solid;
  color: white;
  text-align: left;
  padding-left: 3px;
  font-size: 18px;
`;

const IconArea = styled.div`
  grid-area: icon;
  border: white 1px solid;
  text-align: right;
  padding: 3px;
`;

const RequiresTitle = styled.div`
  grid-area: requires;
  text-align: center;
  color: white;
  font-size: 11px;
  line-height: 2.5;
`;

const RequiresList = styled.ul`
  grid-area: requires-icons;
  list-style: none;
  padding: 0;
  border: red 1px solid;
`;

const TextArea = styled.div`
  grid-area: text;
  color: white;
`;

const UnitArea = styled.div`
  grid-area: unit;
  color: white;
`;

export default function UpdatedTechCard(props) {
  const { faction, unitid, iconname, requires, type, name, text } = props.tech;
  const styleProps = {
    color: helpers.getTechTypeById(type).name,
    background:
      faction === -1 ? "" : "/Icons/" + helpers.getFactionById(faction).iconname
  };

  console.log(iconname, helpers.getIconsByRequiresString(requires));
  return (
    <Wrapper {...styleProps}>
      <RequiresTitle>Requires:</RequiresTitle>
      <NameArea>{name}</NameArea>
      <IconArea>
        <Icon iconFile={iconname} size={40} />
      </IconArea>
      <RequiresList>
        {helpers.getIconsByRequiresString(requires).map((icon, index) => (
          <li key={index}>
            <Icon iconFile={icon} size={30} />
          </li>
        ))}
      </RequiresList>
      <TextArea>
        <p>{text}</p>
      </TextArea>
      {unitid && <UnitArea>Hello</UnitArea>}
    </Wrapper>
  );
}
