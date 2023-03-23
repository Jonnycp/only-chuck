import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const IconButton = styled.button`
  position: absolute;
  top: 45%;
  ${({ left }) => (left ? "left: 0;" : "right: 0;")}
  z-index: 10;
  background-color: transparent;
  outline: none;
  border: none;
`;

const NavigationButton = ({ left, action }) => {
  return (
    <IconButton left={left} onClick={action}>
      <Icon
        icon="material-symbols:arrow-back-ios-new-rounded"
        width={50}
        hFlip={!left}
        color="white"
      />
    </IconButton>
  );
};

NavigationButton.prototype = {
    left: PropTypes.bool,
    action: PropTypes.func.isRequired,
};

export default NavigationButton;
