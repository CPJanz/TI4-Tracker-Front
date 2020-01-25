import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: lightgrey;
  border: 1px black solid;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 45% 55%;
  height: 100vh;
`;
const Title = styled.h1`
  font-size: 5rem;
  margin: 0 auto;
  padding-bottom: 100px;
  grid-row: 1;
  grid-column: 1/3;
`;
const Instructions = styled.span`
  font-size: 2rem;
`;
const GameInput = styled.input``;
const Button = styled.button``;

export default class Login extends React.Component {
  state = { input: "" };

  render() {
    const { loginFn, startGameFn } = this.props;
    const { input } = this.state;

    return (
      <Wrapper>
        <Title>TI4 Tracker</Title>
        <div>
          <Instructions>Start a new game</Instructions>
          <Button onClick={startGameFn}>Start</Button>
        </div>
        <div>
          <Instructions>Enter a Game Code to join a game</Instructions>
          <form onSubmit={() => loginFn(input)}>
            <GameInput
              type="text"
              onChange={event => this.setState({ input: event.target.value })}
            />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </Wrapper>
    );
  }
}
