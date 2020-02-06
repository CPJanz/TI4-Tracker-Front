import React from "react";
import styled from "styled-components";
import helpers from "../../Utils/helpers";
import CollapsingCard from "../CollapsingCard";

const Wrapper = styled.div`
  cursor: pointer;
`;
const CardHeader = styled.div``;
const CardBody = styled.div``;

export default class FactionCard extends React.Component {
  render() {
    const { faction } = this.props;
    const cardBody = (
      <CardBody>
        {helpers.splitString(faction.factionabilities).map((ability, index) => (
          <div key={index} style={{ border: "1px black solid" }}>
            {ability}
          </div>
        ))}
        {helpers.splitString(faction.promissorynote).map((ability, index) => (
          <div key={index} style={{ border: "1px black solid" }}>
            {ability}
          </div>
        ))}
      </CardBody>
    );
    return (
      <Wrapper onClick={this.toggleCardBody}>
        <CollapsingCard
          header={<CardHeader>{faction.name}</CardHeader>}
          body={cardBody}
        />
      </Wrapper>
    );
  }
}
