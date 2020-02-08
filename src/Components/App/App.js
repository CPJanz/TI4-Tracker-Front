import React from "react";
import styled from "styled-components";
import CreateGame from "../CreateGame";
import Login from "../LoginPage";
import Nav from "../Nav";
import DisplayPage from "../DisplayPage";
import EditPage from "../EditPage";
import api from "../../Utils/api";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import mockData from "../../Utils/mockData";
import helpers from "../../Utils/helpers";

const Wrapper = styled.div`
  text-align: center;
`;

export default class App extends React.Component {
  state = {
    loginError: null,
    gameError: null,
    game: null,
    // game: mockData.TEMP_GAME_DATA,
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
            <DisplayPage gameData={game} />
          </React.Fragment>
        )}
        {/* <Router>
          <header className="App-header">
            <Nav game={game} />
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route path="/edit" render={() => <EditPage gameData={game} />} />
              <Route path="/" render={() => <DisplayPage gameData={game} />} />
              <Route render={() => <h1>404</h1>} />
            </Switch>
          </header>
        </Router>
        )})} */}
      </Wrapper>
    );
  }
}
