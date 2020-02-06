import React from "react";
import styled from "styled-components";
import helpers from "../../Utils/helpers";
import Icon from "../Icon";
import CollapsingCard from "../CollapsingCard";

const Wrapper = styled.div`
  cursor: pointer;
  border: 1px black solid;
`;
const CardBody = styled.div`
  &.hidden {
    display: none;
  }
`;
const CardText = styled.div`
  margin-top: 5px;
`;

const CardHeader = styled.div`
  &.Green {
    background: green;
  }
  &.Blue {
    background: lightblue;
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
  &.Red {
    background: red;
  }

  & img {
    width: 17px;
    height: 17px;
  }
`;

export default class TechCard extends React.Component {
  render() {
    const { tech } = this.props;
    const techType = helpers.getTechTypeById(tech.type).name;
    const cardBody = (
      <CardBody>
        {helpers.splitString(tech.text).map((line, index) => (
          <CardText key={index}>{line}</CardText>
        ))}
        Requires:
        {helpers
          .getIconsByRequiresString(tech.requires)
          .map((requirement, index) => (
            <Icon key={index} iconFile={requirement} />
          ))}
      </CardBody>
    );

    return (
      <Wrapper>
        <CollapsingCard
          header={
            <CardHeader className={techType}>
              {tech.name} <Icon iconFile={tech.iconname} />
            </CardHeader>
          }
          body={cardBody}
        />
      </Wrapper>
    );
  }
}
