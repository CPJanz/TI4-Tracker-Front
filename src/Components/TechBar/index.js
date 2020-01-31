import React from "react";
import styled from "styled-components";
import helpers from "../../Utils/helpers";
import Icon from "../Icon";

const Wrapper = styled.div`
  &.Green {
    background: green;
  }
  &.Blue {
    background: light-blue;
  }
  &.Yellow {
    background: yellow;
  }
  &.Special {
    background: magenta;
  }
  &.Unit {
    background: tan;
  }

  & img {
    width: 17px;
    height: 17px;
  }
`;

export default function TechBar(props) {
  const { name, type } = props.tech;
  const techType = helpers.getTechTypeById(type).name;
  return (
    <Wrapper className={techType}>
      {name} <Icon type={techType} />
    </Wrapper>
  );
}
