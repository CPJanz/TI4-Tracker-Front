import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import Login from "../Login";
import "./App.css";

export default class App extends React.Component {
  state = {
    gameId: null
  };

  render() {
    const { gameId } = this.state;

    return (
      <div className="App">
        {gameId === null ? (
          <Login loginFn={id => this.setState({ gameId: id })} />
        ) : (
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
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
      </div>
    );
  }
}
