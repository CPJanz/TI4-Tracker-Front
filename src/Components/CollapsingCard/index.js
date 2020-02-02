import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  cursor: pointer;
`;
const CardHeader = styled.div``;
const CardBody = styled.div`
  overflow: hidden;
  height: auto;
  max-height: 500px;
  transition: max-height 0.5s ease-in-out;

  &.hidden {
    max-height: 0;
  }
`;

export default class CollapsingCard extends React.Component {
  state = { expanded: "hidden" };

  toggleCardBody = () => {
    this.setState({
      expanded: this.state.expanded === "shown" ? "hidden" : "shown"
    });
  };

  render() {
    const { header, body } = this.props;
    const { expanded } = this.state;
    return (
      <Wrapper onClick={this.toggleCardBody}>
        <CardHeader>{header}</CardHeader>
        <CardBody className={expanded}>{body}</CardBody>
      </Wrapper>
    );
  }
}
