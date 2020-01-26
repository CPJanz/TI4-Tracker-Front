import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import Login from "../LoginPage";
import PlayerList from "../PlayerList";
import Nav from "../Nav";
import EditPage from "../EditPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

const Wrapper = styled.div`
  text-align: center;
`;

export default class App extends React.Component {
  state = {
    gameId: null,
    players: ["Carl", "Sean"],
    objectives: [],
    gameStarted: false
  };

  addPlayer = player => {
    const updatedList = this.state.players;
    updatedList.push(player);
    this.setState({ players: updatedList });
  };

  startGame = () => {
    this.setState({ gameId: "1234" });
  };

  render() {
    const { gameId, players } = this.state;

    return (
      <Wrapper>
        {gameId === null ? (
          <Login
            startGameFn={this.startGame}
            loginFn={id => this.setState({ gameId: id })}
          />
        ) : (
          <Router>
            <header className="App-header">
              <Nav gameId={gameId} />
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route path="/edit" component={EditPage} />
                <Route render={() => <h1>404</h1>} />
              </Switch>
            </header>
          </Router>
        )}
      </Wrapper>
    );
  }
}
