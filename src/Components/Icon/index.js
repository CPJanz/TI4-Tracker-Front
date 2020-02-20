import React from "react";
import styled from "styled-components";

const Wrapper = styled.span`
  & img {
    height: ${props => `${props.size}px`};
    width: ${props => `${props.size}px`};
  }
`;

export default function Icon(props) {
  const { iconname, size } = props;
  return (
    <Wrapper size={size || 20}>
      {iconname && <img src={`/Icons/${iconname}`} alt={`icon`} />}
    </Wrapper>
  );
}
