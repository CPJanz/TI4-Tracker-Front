import React from "react";
import styled from "styled-components";
import TechBar from "../TechBar";
import helpers from "../../Utils/helpers";
import Icon from "../Icon";

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

export default class TechCard extends React.Component {
  state = { expanded: "hidden" };

  toggleCardBody = () => {
    this.setState({
      expanded: this.state.expanded === "shown" ? "hidden" : "shown"
    });
  };
  render() {
    const { tech } = this.props;
    const { expanded } = this.state;

    return (
      <Wrapper onClick={this.toggleCardBody}>
        <TechBar tech={tech} />
        <CardBody className={expanded}>
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
      </Wrapper>
    );
  }
}
