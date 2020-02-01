import React from "react";
import styled from "styled-components";
import helpers from "../../Utils/helpers";

const Wrapper = styled.div`
  cursor: pointer;
`;
const CardHeader = styled.div``;
const CardBody = styled.div`
  &.hidden {
    display: none;
  }
`;

export default class FactionCard extends React.Component {
  state = { expanded: "hidden" };

  toggleCardBody = () => {
    this.setState({
      expanded: this.state.expanded === "shown" ? "hidden" : "shown"
    });
  };

  render() {
    const { faction } = this.props;
    const { expanded } = this.state;
    return (
      <Wrapper onClick={this.toggleCardBody}>
        <CardHeader>{faction.name}</CardHeader>
        <CardBody className={expanded}>
          {helpers
            .splitString(faction.factionabilities)
            .map((ability, index) => (
              <div style={{ border: "1px black solid" }}>{ability}</div>
            ))}
          {helpers.splitString(faction.promissorynote).map((ability, index) => (
            <div style={{ border: "1px black solid" }}>{ability}</div>
          ))}
        </CardBody>
      </Wrapper>
    );
  }
}
