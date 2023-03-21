import React from "react";
import styled from "styled-components";
import { device } from "../style/devices";

const LogoText = styled.h1`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.logo};
  font-size: 2.18rem;
  font-weight: 400;
  letter-spacing: -0.08em;
  text-transform: uppercase;
  flex-grow: 1;
  user-select: none;

  @media ${device.tablet} {
    font-size: 2.5rem;
  }
`;

const Logo = () => {
  return (
    <LogoText>
      ONLY <strong>CHUCK</strong>
    </LogoText>
  );
};

export default Logo;
