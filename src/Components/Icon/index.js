import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`};
  background-image: url(${props => props.background});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: inline-block;

  & {
    font-size: 19px;
    font-weight: bolder;
    line-height: 37px;
    color: white;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
  }
`;

export default function Icon(props) {
  const { iconname, size, text } = props;
  return (
    <Wrapper size={size || 20} background={`/Icons/${iconname}`}>
      {text}
    </Wrapper>
  );
}
