import styled from "styled-components";

export const StyledHamburgerWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;
  height: 18px;
`;

export const StyledLine = styled.div`
  background-color: ${({ theme }) => theme.secondaryColor};
  width: 30px;
  height: 2px;
  transition: opacity 0.2s, transform 0.1s;
  ${({ isActive }) =>
    isActive &&
    `
    &:nth-child(2) {
        opacity: 0;
    }
    &:nth-child(1) {
        transform: rotate(45deg) translate(6px, 5px);
    }
    &:nth-child(3) {
        transform: rotate(-45deg) translate(6px, -5px);
    }
  
  `};
`;
