import React from "react";
import styled from "styled-components";
import Login from "../LoginPage";
import Nav from "../Nav";
import EditPage from "../EditPage";
import api from "../../Utils/api";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Wrapper = styled.div`
  text-align: center;
`;

export default class App extends React.Component {
  state = {
    loginError: null,
    game: null
  };

  addPlayer = player => {
    const updatedList = this.state.players;
    updatedList.push(player);
    this.setState({ players: updatedList });
  };

  startGame = () => {
    api.createGame.then(response =>
      response.gameCreated
        ? this.setState({ game: response.game, loginError: null })
        : this.setState({
            loginError: "There was an error creating the game"
          })
    );
  };

  fetchGame = id => {
    api.fetchGame(id).then(response => {
      response.gameFound
        ? this.setState({ game: response.game, loginError: null })
        : this.setState({ loginError: "Game not found" });
    });
  };

  render() {
    const { game, loginError } = this.state;
    console.log(game);
    return (
      <Wrapper>
        {game === null ? (
          <Login
            startGameFn={this.startGame}
            loginFn={id => this.fetchGame(id)}
            errorMessage={loginError}
          />
        ) : (
          <Router>
            <header className="App-header">
              <Nav gameId={game.id} />
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route
                  path="/edit"
                  render={() => <EditPage gameData={game} />}
                />
                <Route render={() => <h1>404</h1>} />
              </Switch>
            </header>
          </Router>
        )}
      </Wrapper>
    );
  }
}
