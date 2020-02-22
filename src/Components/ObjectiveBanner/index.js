import React from "react";
import styled from "styled-components";
import ObjectiveCard from "../ObjectiveCard";
import CardListModal from "../CardListModal";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: 250px;
  border: black solid 1px;
  display: inline-block;
  margin: 5px;
  border-radius: 5px;
`;

const TitleContainer = styled.div`
  background: black;
  color: white;
  padding-bottom: 5px;
`;
const Title = styled.span`
  font-size: 1.5rem;
`;
const Content = styled.div`
  padding-top: 3px;
  & > * {
    margin: 0 2px;
  }
`;

export default function ObjectiveBanner(props) {
  const { name, type, pointvalue } = props;
  console.dirxml(props);
  return (
    <Wrapper>
      <TitleContainer>
        <Title>{name}</Title>
        <CardListModal count={1} vertical>
          <ObjectiveCard {...props} />
        </CardListModal>
      </TitleContainer>
      <Content>{props.children}</Content>
    </Wrapper>
  );
}
