import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import helpers from "../../Utils/helpers";

const Wrapper = styled.div``;
//TODO: Make this a card
export default function PromissoryNote(props) {
  const text = props.text || helpers.getPromissoryByFactionId(props.factionId);

  return (
    <Wrapper>
      <ul>
        {helpers.splitString(text).map((promissory, index) => (
          <li key={index}>{promissory}</li>
        ))}
      </ul>
    </Wrapper>
  );
}

PromissoryNote.propTypes = {
  factionId: PropTypes.number
};
