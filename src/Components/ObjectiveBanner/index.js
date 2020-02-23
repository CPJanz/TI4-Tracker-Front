import React from "react";
import styled from "styled-components";
import ObjectiveCard from "../ObjectiveCard";
import CardListModal from "../CardListModal";
import helpers from "../../Utils/helpers";
import Icon from "../Icon";

const Wrapper = styled.div`
  display: inline-block;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 40px 235px;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "icon title" "icon content";
  width: 275px;
  border: black solid 1px;
  // display: inline-block;
  margin: 5px;
  border-radius: 5px;
`;

const TitleContainer = styled.div`
  background: black;
  color: white;
  padding-bottom: 5px;
  grid-area: title;
`;

const IconContainer = styled.div`
  grid-area: icon;
`;

const Title = styled.span`
  font-size: 1.2rem;
`;
const ContentContainer = styled.div`
  padding-top: 3px;
  grid-area: content;
  min-height: 29px;
  & > * {
    margin: 0 2px;
  }
`;

export default function ObjectiveBanner(props) {
  const { name, type, pointvalue } = props;
  return (
    <Wrapper>
      <GridContainer>
        <IconContainer>
          <Icon size="40" {...helpers.getObjectiveTypeById(type)} />
        </IconContainer>
        <TitleContainer>
          <Title>{name}</Title>
          <CardListModal count={1} vertical>
            <ObjectiveCard {...props} />
          </CardListModal>
        </TitleContainer>
        <ContentContainer>{props.children}</ContentContainer>
      </GridContainer>
    </Wrapper>
  );
}
