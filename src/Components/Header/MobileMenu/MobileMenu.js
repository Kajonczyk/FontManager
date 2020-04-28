import React, { useState } from "react";
import { StyledHamburgerWrapper, StyledLine } from "./MobileMenuStyles";

export const MobileMenu = () => {
  const [isActive, setActive] = useState(false);
  return (
    <StyledHamburgerWrapper onClick={() => setActive(!isActive)}>
      <StyledLine isActive={isActive} />
      <StyledLine isActive={isActive} />
      <StyledLine isActive={isActive} />
    </StyledHamburgerWrapper>
  );
};
