import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: lightgrey;
  border: 1px black solid;
`;
const Title = styled.h1`
  font-size: 5rem;
`;
const Instructions = styled.span`
  font-size: 2rem;
`;
const GameInput = styled.input``;
const Button = styled.button``;

export default class Login extends React.Component {
  state = { input: "" };

  render() {
    const { loginFn } = this.props;
    const { input } = this.state;

    return (
      <Wrapper>
        <Title>TI4 Tracker</Title>
        <Instructions>Enter a Game Code</Instructions>
        <form onSubmit={() => loginFn(input)}>
          <GameInput
            type="text"
            onChange={event => this.setState({ input: event.target.value })}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Wrapper>
    );
  }
}
