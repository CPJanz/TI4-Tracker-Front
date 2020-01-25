import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import Login from "../Login";
import PlayerList from "../PlayerList";
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
          <header className="App-header">
            <p>Game Code {gameId}</p>
            <PlayerList playerData={players} addFn={this.addPlayer} />
            <img src={logo} className="App-logo" alt="logo" />

            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        )}
      </Wrapper>
    );
  }
}
