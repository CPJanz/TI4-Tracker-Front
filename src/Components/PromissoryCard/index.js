import React from "react";
import styled from "styled-components";
import helpers from "../../Utils/helpers";

const Wrapper = styled.div`
  width: 206px;
  height: 306px;
  background-image: radial-gradient(
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 1)
    ),
    url(${props => `${props.background}`});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border: 3px solid ${props => `${props.color}`};
  border-radius: 10px;
  overflowy: scroll;
  margin: 10px;
  display: grid;
  grid-template-columns: 206px;
  grid-template-rows: 50px 256px;
  grid-template-areas:
    "name"
    "text";
`;

const NameArea = styled.div`
  grid-area: name;
  border-bottom: yellow 1px solid;
  color: white;
  text-align: left;
  padding-left: 10px;
  font-size: 22px;
`;

const TextArea = styled.div`
  grid-area: text;
  color: white;

  & p {
    margin: 0;
    padding: 5px;
    font-size: 12px;
    text-align: left;
  }
`;

export default function PromissoryCard(props) {
  const { promissorynote, id: faction } = props;
  const styleProps = {
    background:
      faction === -1 ? "" : "/Icons/" + helpers.getFactionById(faction).iconname
  };
  const promissoryArray = helpers.splitString(promissorynote);
  const name = promissoryArray.slice(0, 1);
  const abilities = promissoryArray.slice(1);

  return (
    <Wrapper {...styleProps}>
      <NameArea color={styleProps.color}>{name}</NameArea>
      <TextArea>
        {abilities.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </TextArea>
    </Wrapper>
  );
}
