import styled from "styled-components";

const flexProperties = () => `
    display:flex;
    align-items:center;
`;
export const StyledNavbar = styled.nav`
  height: 50px;
  background-color: ${({ theme }) => theme.primaryColor};
  ${flexProperties};
  justify-content: space-between;
  padding: 0px 10px;
`;

export const StyledLogoText = styled.p`
  font-size: ${({ theme }) => theme.font.size.s};
  color: ${({ theme }) => theme.secondaryColor};
  padding-left: 3px;
`;
export const StyledDiv = styled.div`
  ${flexProperties}
  font-family: ${({ theme }) => theme.font.family.Raleway};
`;
