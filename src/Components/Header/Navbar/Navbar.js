import React from "react";
import { StyledNavbar, StyledLogoText, StyledDiv } from "./NavbarStyles";
import { ReactComponent as Logo } from "./Logo.svg";
import { MobileMenu } from "../MobileMenu/MobileMenu";
export const Navbar = () => {
  return (
    <div>
      <StyledNavbar>
        <StyledDiv>
          <Logo />
          <StyledLogoText>FontManager</StyledLogoText>
        </StyledDiv>
        <MobileMenu />
      </StyledNavbar>
    </div>
  );
};
