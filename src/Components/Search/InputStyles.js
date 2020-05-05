import styled from "styled-components";

export const StyledInput = styled.input`
  width: 70%;
  border: 0px;
  border-radius: 25px;
  padding: 0px 20px;
  margin: 50px auto;
  height: 45px;
  width: 80%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.07);
  ${({ theme }) => theme.mq.tablet} {
    max-width: 768px;
  }
`;
