import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: lightgrey;
  border: 1px black solid;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 45% 55%;
  grid-template-areas: "header header" "section1 section2";
  height: 100vh;

  @media (max-width: 1000px) {
    grid-template-columns: 100%;
    grid-template-rows: 20% 40% 40%;
    grid-template-areas: "header" "section1" "section2";
  }
`;
const Title = styled.h1`
  font-size: 5rem;
  margin: 0 auto;
  padding-bottom: 100px;
  grid-area: header;

  @media (max-width: 1000px) {
    font-size: 4rem;
  }
`;
const Instructions = styled.span`
  font-size: 2rem;
`;

const Error = styled.span`
  color: red;
`;
const GameInput = styled.input``;
const Button = styled.button``;

export default class Login extends React.Component {
  state = { input: "" };

  render() {
    const { loginFn, startGameFn, errorMessage } = this.props;
    const { input } = this.state;

    return (
      <Wrapper>
        <Title>TI4 Tracker</Title>
        <div>
          <Instructions>Start a new game</Instructions>
          <Button onClick={startGameFn}>Start</Button>
        </div>
        <div>
          <Instructions>Join a game</Instructions>
          <form>
            <GameInput
              type="text"
              onChange={event => this.setState({ input: event.target.value })}
            />
            <Button type="button" onClick={() => loginFn(input)}>
              Submit
            </Button>
          </form>
          {errorMessage && <Error>{errorMessage}</Error>}
        </div>
      </Wrapper>
    );
  }
}
