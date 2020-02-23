import React from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";
import helpers from "../../Utils/helpers";

const Wrapper = styled.div``;
const Button = styled.div`
  border: black 1px solid;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 10px auto;
  width: 175px;
  cursor: pointer;
`;

export default class AddObjectiveModal extends React.Component {
  state = {
    open: false
  };

  openModal = () => this.setState({ open: true });
  closeModal = () => this.setState({ open: false });

  render() {
    const { publicObjectives, players } = this.props;
    const availablePublicObjectives = publicObjectives.map(objective =>
      helpers.getObjectiveById(objective.id)
    );
    const availableSecretObjectives = helpers.getUnclaimedSecretObjectives(
      players
    );

    return (
      <Wrapper>
        <Button onClick={this.openModal}>Claim</Button>
        <Popup
          open={this.state.open}
          onClose={this.closeModal}
          closeOnDocumentClick
        >
          <React.Fragment>
            <select id="public-objective-dropdown">
              {availablePublicObjectives.map((objective, index) => (
                <option key={index} value={objective.id}>
                  {objective.name}
                </option>
              ))}
            </select>
            <select id="secret-objective-dropdown">
              {availableSecretObjectives.map((objective, index) => (
                <option key={index} value={objective.id}>
                  {objective.name}
                </option>
              ))}
            </select>
            <Button
              onClick={() => {
                this.closeModal();
              }}
            >
              SUBMIT
            </Button>
          </React.Fragment>
        </Popup>
      </Wrapper>
    );
  }
}
