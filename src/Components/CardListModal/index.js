import React from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.span``;
const ListContent = styled.div`
  height: 100%;
  overflow-y: auto;
`;

const Header = styled.span`
  cursor: pointer;
  // margin: auto 5px;
`;

const defaultTrigger = <FontAwesomeIcon icon="question-circle" />;

export default function CardListModal(props) {
  const { trigger = defaultTrigger, count = 3, vertical = false } = props;

  return (
    <Wrapper>
      <Popup
        trigger={<Header>{trigger}</Header>}
        modal
        closeOnDocumentClick
        contentStyle={{
          height: `${count * (vertical ? 340 : 230)}px`,
          maxHeight: "80%",
          width: `${vertical ? 240 : 340}px`,
          overflow: "hidden"
        }}
      >
        <ListContent>{props.children}</ListContent>
      </Popup>
    </Wrapper>
  );
}
