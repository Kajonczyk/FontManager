import styled from "styled-components";

const flexProperties = () => `
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledResultsWrapper = styled.div`
  ${flexProperties}
  margin: 0px auto;
  flex-wrap: wrap;
`;
export const StyledResultItem = styled.div`
  ${flexProperties}
  height: 140px;
  flex: 0 140px;
  margin: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.07);
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
`;

export const StyledFontPreview = styled.p`
  @font-face {
    font-family: ${({ fontFamily }) => fontFamily};
    src: ${({ fontSource }) => `url('${fontSource}') format('truetype')`};
  }
  font-size: ${({ theme }) => theme.font.size.l};
  font-family: ${({ fontFamily }) => fontFamily};
`;
export const StyledFontName = styled.p`
  font-size: ${({ theme }) => theme.font.size.s};
  font-family: ${({ fontFamily }) => fontFamily};
  text-align: center;
`;
