import React from "react";
import styled from "styled-components";
import greenIcon from "../../Icons/Biotic.png";
import yellowIcon from "../../Icons/Cybernetic.png";
import redIcon from "../../Icons/Warfare.png";
import blueIcon from "../../Icons/Propulsion.png";

const getIconFile = type => {
  switch (type) {
    case "Green":
      return greenIcon;

    case "Red":
      return redIcon;

    case "Blue":
      return blueIcon;

    case "Yellow":
      return yellowIcon;
    default:
      return null;
  }
};

const Wrapper = styled.span`
  height: 17px;
  width: 17px;
`;

export default function Icon(prop) {
  const { type } = prop;
  const iconFile = getIconFile(type);
  return (
    <Wrapper>{iconFile && <img src={iconFile} alt={`${type}-icon`} />}</Wrapper>
  );
}
