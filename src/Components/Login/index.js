import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Title = styled.p``;
const GameInput = styled.input``;
const Button = styled.button``;

export default function Login(props) {
  const { loginFn } = props;

  return (
    <Wrapper>
      <Title>Enter a Game Code</Title>
      <form onSubmit={loginFn}>
        <GameInput type="text" />
        <Button type="submit">Submit</Button>
      </form>
    </Wrapper>
  );
}
