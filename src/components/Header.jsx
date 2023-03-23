import React from "react";
import styled from "styled-components";
import CategoryButton from "./CategoryButton";
import Logo from "./Logo";
import { device } from "../style/devices";
import PropTypes from "prop-types";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 25px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};

  @media ${device.tablet} {
    padding: 30px 40px;
  }
`;

const Header = ({category}) => {
  return (
    <HeaderContainer>
      <Logo />
      <CategoryButton selected={category}/>
    </HeaderContainer>
  );
};

Header.prototype = {
  category: PropTypes.string.isRequired,
};

export default Header;
