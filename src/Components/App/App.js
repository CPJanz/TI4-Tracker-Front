import React from "react";
import styled from "styled-components";
import CreateGame from "../CreateGame";
import Login from "../LoginPage";
import Nav from "../Nav";
import DisplayPage from "../DisplayPage";
import api from "../../Utils/api";
import mockData from "../../Utils/mockData";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faQuestionCircle);

const Wrapper = styled.div`
  text-align: center;
`;

export default class App extends React.Component {
  state = {
    loginError: null,
    gameError: null,
    // game: null,
    game: mockData.TEMP_GAME_DATA,
    preGamePlayers: [{ name: "", faction: 0 }]
  };

  addPlayer = player => {
    const updatedList = this.state.players;
    updatedList.push(player);
    this.setState({ players: updatedList });
  };

  createGame = async () => {
    const response = await api.createGame;
    response.gameCreated
      ? this.setState({ game: response.game, loginError: null })
      : this.setState({
          loginError: "There was an error creating the game"
        });
  };

  fetchGame = async id => {
    const response = await api.fetchGame(id);
    response.gameFound
      ? this.setState({ game: response.game, loginError: null })
      : this.setState({ loginError: "Game not found" });
  };

  startGame = async () => {
    const response = await api.startGame(
      this.state.game.id,
      this.state.preGamePlayers
    );
    response.gameStarted
      ? this.setState({ game: response.game, gameError: null })
      : this.setState({
          gameError: "There was an error starting the game"
        });
  };

  addPublicObjective = async objectiveId => {
    const { round, publicObjectives, id } = this.state.game;
    const response = await api.addPublicObjective(objectiveId, id);
    const currentObjectives = publicObjectives.slice(0);
    const newObjective = { id: parseInt(objectiveId), roundRevealed: round };
    currentObjectives.push(newObjective);
    response.objectiveAdded
      ? this.setState({
          game: {
            ...this.state.game,
            publicObjectives: currentObjectives
          }
        })
      : console.warn("Objective not added!");
  };

  render() {
    const { game, preGamePlayers, loginError } = this.state;
    return (
      <Wrapper>
        {game === null && (
          <Login
            createGameFn={this.createGame}
            loginFn={id => this.fetchGame(id)}
            errorMessage={loginError}
          />
        )}
        {game !== null && game.gameState === 0 && (
          <CreateGame
            players={preGamePlayers}
            playerChangeNameFn={(playerIndex, name) => {
              const preChangeArray = preGamePlayers;
              preChangeArray[playerIndex].name = name;
              this.setState({ preGamePlayers: preChangeArray });
            }}
            playerChangeFactionFn={(playerIndex, faction) => {
              const preChangeArray = preGamePlayers;
              preChangeArray[playerIndex].faction = faction;
              this.setState({ preGamePlayers: preChangeArray });
            }}
            addNewPlayerFn={() => {
              const preChangeArray = preGamePlayers;
              preChangeArray.push({
                name: "",
                faction: 0
              });
              this.setState({ preGamePlayers: preChangeArray });
            }}
            removePlayerFn={playerIndex => {
              const preChangeArray = preGamePlayers;
              preChangeArray.splice(playerIndex, 1);
              this.setState({ preGamePlayers: preChangeArray });
            }}
            startGameFn={() => this.startGame(game.id, preGamePlayers)}
          />
        )}
        {game !== null && game.gameState === 1 && (
          <React.Fragment>
            <Nav game={game} />
            <DisplayPage
              gameData={game}
              addPublicObjectiveFn={this.addPublicObjective}
            />
          </React.Fragment>
        )}
      </Wrapper>
    );
  }
}
