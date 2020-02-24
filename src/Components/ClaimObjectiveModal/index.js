import React from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";
import helpers from "../../Utils/helpers";
import ObjectiveCard from "../ObjectiveCard";

const Wrapper = styled.div`
  color: black;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-rows: auto 50px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "objectives preview" "button button";
`;

const PreviewContainer = styled.div`
  gridarea: preview;
`;

const Button = styled.div`
  border: black 1px solid;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 10px auto;
  width: 175px;
  cursor: pointer;

  &.claim-button {
    color: white;
    border: white 1px solid;
  }

  &.submit-button {
    grid-area: button;
  }
`;

export default class AddObjectiveModal extends React.Component {
  state = {
    open: false,
    selected: null
  };

  openModal = () => this.setState({ open: true });
  closeModal = () => this.setState({ open: false });
  setSelected = id => {
    this.setState({ selected: id });
  };

  render() {
    const {
      id,
      publicObjectives,
      players,
      claimObjectiveFn,
      points
    } = this.props;
    const { selected } = this.state;
    const availablePublicObjectives = publicObjectives
      .filter(objective => {
        return !points.map(point => point.id).includes(objective.id);
      })
      .map(objective => helpers.getObjectiveById(objective.id));
    const availableSecretObjectives = helpers.getUnclaimedSecretObjectives(
      players
    );
    const secretObjectivesClaimed = points
      .map(point => helpers.getObjectiveById(point.id))
      .filter(pointObject => pointObject.type === 4 || pointObject === 5)
      .length;

    return (
      <Wrapper>
        <Button className="claim-button" onClick={this.openModal}>
          Claim
        </Button>
        <Popup
          open={this.state.open}
          onClose={this.closeModal}
          closeOnDocumentClick
        >
          <ContentContainer>
            <div className="menu">
              <Popup
                trigger={<div className="menu-item">Public Objective</div>}
                position="right top"
                on="click"
                closeOnDocumentClick
                modal
              >
                <React.Fragment>
                  {availablePublicObjectives.length > 0 ? (
                    availablePublicObjectives.map((objective, index) => (
                      <div
                        className="menu-item"
                        key={index}
                        onClick={() => this.setSelected(objective.id)}
                      >
                        {objective.name}
                      </div>
                    ))
                  ) : (
                    <div className="menu-item">All objectives claimed...</div>
                  )}
                </React.Fragment>
              </Popup>
              <Popup
                trigger={<div className="menu-item">Secret Objective</div>}
                position="right top"
                on="click"
                closeOnDocumentClick
                modal
              >
                <React.Fragment>
                  {secretObjectivesClaimed < 3 &&
                    availableSecretObjectives.map((objective, index) => (
                      <div
                        className="menu-item"
                        key={index}
                        onClick={() => this.setSelected(objective.id)}
                      >
                        {objective.name}
                      </div>
                    ))}
                </React.Fragment>
              </Popup>
              {helpers.hasCustodianTokenBeenClaimed(players) ? (
                <div className="menu-item" onClick={() => this.setSelected(1)}>
                  Imperial
                </div>
              ) : (
                <div className="menu-item" onClick={() => this.setSelected(0)}>
                  Custodian Token
                </div>
              )}
              <div className="menu-item" onClick={() => this.setSelected(49)}>
                Support for the Throne
              </div>
            </div>
            <PreviewContainer>
              {selected !== null && (
                <ObjectiveCard {...helpers.getObjectiveById(selected)} />
              )}
            </PreviewContainer>
            <Button
              className="submit-button"
              onClick={() => {
                this.closeModal();
                claimObjectiveFn(selected, id);
                this.setState({ selected: null });
              }}
            >
              SUBMIT
            </Button>
          </ContentContainer>
        </Popup>
      </Wrapper>
    );
  }
}
