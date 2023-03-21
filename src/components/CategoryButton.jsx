import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { device } from "../style/devices";
import category2Symbol from "../utils/category2Symbol";
import { capitalize } from "../utils/functions";

const Button = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.light};
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.fonts.normal};
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 15px;
  padding: 10px;

  span {
    display: none;
  }

  @media ${device.tablet} {
    font-size: 2.3rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 15px;

    span {
      display: inline;
      font-size: 1.87rem;
      font-weight: 400;
    }
  }
`;

const CategoryButton = ({ selected }) => {
    const symbol = category2Symbol[selected] || selected[0].toUpperCase();
    
  return (
    <Button>
      {symbol}<span>{capitalize(selected)}</span>
    </Button>
  );
};

CategoryButton.prototype = {
  selected: PropTypes.oneOf(Object.keys(category2Symbol)).isRequired,
};

export default CategoryButton;
