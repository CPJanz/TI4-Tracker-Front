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
    const { publicObjectives, addPublicObjectiveFn } = this.props;
    return (
      <Wrapper>
        <Button onClick={this.openModal}>New Public Objective</Button>
        <Popup
          open={this.state.open}
          onClose={this.closeModal}
          closeOnDocumentClick
        >
          <React.Fragment>
            <select id="objective-dropdown">
              {helpers
                .getAvailablePublicObjectives(publicObjectives)
                .map((objective, index) => (
                  <option value={objective.id} key={index}>
                    {objective.name}
                  </option>
                ))}
            </select>
            <Button
              onClick={() => {
                addPublicObjectiveFn(
                  document.getElementById("objective-dropdown").value
                );
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
