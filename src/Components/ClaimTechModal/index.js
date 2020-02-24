import React from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";
import helpers from "../../Utils/helpers";
import UpdatedTechCard from "../UpdatedTechCard";

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
    console.log(id);
    this.setState({ selected: id });
  };

  render() {
    const { tech, faction, id, claimTechFn } = this.props;
    const { selected } = this.state;
    const availableTech = helpers.getAvailableTech(tech, faction);
    return (
      <Wrapper>
        <Button className="claim-button" onClick={this.openModal}>
          Get Tech
        </Button>
        <Popup
          open={this.state.open}
          onClose={this.closeModal}
          closeOnDocumentClick
        >
          <ContentContainer>
            <div className="menu">
              <Popup
                trigger={<div className="menu-item">Green Tech</div>}
                position="right top"
                on="click"
                closeOnDocumentClick
                modal
              >
                <React.Fragment>
                  {availableTech.filter(tech => tech.type === 0).length > 0 ? (
                    availableTech
                      .filter(tech => tech.type === 0)
                      .map((tech, index) => (
                        <div
                          className="menu-item"
                          onClick={() => this.setSelected(tech)}
                          key={index}
                        >
                          {tech.name}
                        </div>
                      ))
                  ) : (
                    <div className="menu-item">No more of this type</div>
                  )}
                </React.Fragment>
              </Popup>
              <Popup
                trigger={<div className="menu-item">Blue Tech</div>}
                position="right top"
                on="click"
                closeOnDocumentClick
                modal
              >
                <React.Fragment>
                  {availableTech.filter(tech => tech.type === 1).length > 0 ? (
                    availableTech
                      .filter(tech => tech.type === 1)
                      .map((tech, index) => (
                        <div
                          className="menu-item"
                          onClick={() => this.setSelected(tech)}
                          key={index}
                        >
                          {tech.name}
                        </div>
                      ))
                  ) : (
                    <div className="menu-item">No more of this type</div>
                  )}
                </React.Fragment>
              </Popup>
              <Popup
                trigger={<div className="menu-item">Yellow Tech</div>}
                position="right top"
                on="click"
                closeOnDocumentClick
                modal
              >
                <React.Fragment>
                  {availableTech.filter(tech => tech.type === 2).length > 0 ? (
                    availableTech
                      .filter(tech => tech.type === 2)
                      .map((tech, index) => (
                        <div
                          className="menu-item"
                          onClick={() => this.setSelected(tech)}
                          key={index}
                        >
                          {tech.name}
                        </div>
                      ))
                  ) : (
                    <div className="menu-item">No more of this type</div>
                  )}
                </React.Fragment>
              </Popup>
              <Popup
                trigger={<div className="menu-item">Red Tech</div>}
                position="right top"
                on="click"
                closeOnDocumentClick
                modal
              >
                <React.Fragment>
                  {availableTech.filter(tech => tech.type === 3).length > 0 ? (
                    availableTech
                      .filter(tech => tech.type === 3)
                      .map((tech, index) => (
                        <div
                          className="menu-item"
                          onClick={() => this.setSelected(tech)}
                          key={index}
                        >
                          {tech.name}
                        </div>
                      ))
                  ) : (
                    <div className="menu-item">No more of this type</div>
                  )}
                </React.Fragment>
              </Popup>
              <Popup
                trigger={<div className="menu-item">Unit Tech</div>}
                position="right top"
                on="click"
                closeOnDocumentClick
                modal
              >
                <React.Fragment>
                  {availableTech
                    .filter(tech => tech.type === 4)
                    .map((tech, index) => (
                      <div
                        className="menu-item"
                        onClick={() => this.setSelected(tech)}
                        key={index}
                      >
                        {tech.name}
                      </div>
                    ))}
                </React.Fragment>
              </Popup>
              <Popup
                trigger={<div className="menu-item">Faction Tech</div>}
                position="right top"
                on="click"
                closeOnDocumentClick
                modal
              >
                <React.Fragment>
                  {availableTech.filter(tech => tech.faction === faction)
                    .length > 0 ? (
                    availableTech
                      .filter(tech => tech.faction === faction)
                      .map((tech, index) => (
                        <div
                          className="menu-item"
                          onClick={() => this.setSelected(tech)}
                          key={index}
                        >
                          {tech.name}
                        </div>
                      ))
                  ) : (
                    <div className="menu-item">No more of this type</div>
                  )}
                </React.Fragment>
              </Popup>
            </div>
            <PreviewContainer>
              {selected !== null && <UpdatedTechCard {...selected} />}
            </PreviewContainer>
            <Button
              className="submit-button"
              onClick={() => {
                this.closeModal();
                claimTechFn(id, selected.id);
                this.setState({ selected: null });
              }}
            >
              RESEARCH
            </Button>
          </ContentContainer>
        </Popup>
      </Wrapper>
    );
  }
}
