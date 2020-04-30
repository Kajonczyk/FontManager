import styled from "styled-components";

const flexProperties = () => `
    display:flex;
    align-items:center;
    flex-direction: column;
`;
export const StyledWrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 80%;
  transform: translate(-50%, -50%);
  z-index: 2;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.secondaryColor};
  text-align: center;
  ${flexProperties};
  justify-content: center;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
`;

export const StyledInput = styled.textarea`
  border: 0px;
  width: 80%;
  height: 50%;
  padding: 5px;
  resize: none;
  margin-top: 50px;
  background: none;
  outline: none;
  line-height: 200%;
`;

export const StyledCrossWrapper = styled.div`
  position: absolute;
  left: 90%;
  top: 3%;
  transform: translate(-50%, -50%);
  z-index: 3;
  width: 30px;
  height: 30px;
  ${flexProperties};
  justify-content: space-evenly;
`;

export const StyledLine = styled.div`
  background-color: ${({ theme }) => theme.primaryColor};
  width: 30px;
  height: 2px;
  transition: transform 0.1s;

  &:nth-child(1) {
    transform: rotate(45deg) translate(7px, 5px);
  }
  &:nth-child(2) {
    transform: rotate(-45deg) translate(2px, -1px);
  }
`;
