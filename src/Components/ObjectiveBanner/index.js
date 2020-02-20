import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "reactjs-popup";

const Wrapper = styled.div``;
const Trigger = styled.span`
  cursor: pointer;
  margin: auto 3px;
`;

export default function ObjectiveBanner(props) {
  const { name, text, type, pointvalue } = props;
  return (
    <Wrapper>
      {name}
      <Popup
        trigger={
          <Trigger>
            <FontAwesomeIcon icon="question-circle" />
          </Trigger>
        }
        modal
        closeOnDocumentClick
        contentStyle={{ height: "80%", overflow: "hidden" }}
      >
        <span>
          {name}
          <br />
          {type}
          <br />
          {text}
          <br />
          {pointvalue}
          <br />
        </span>
      </Popup>
      {props.children}
    </Wrapper>
  );
}
