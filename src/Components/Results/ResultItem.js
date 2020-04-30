import React from "react";
import {
  StyledWrapper,
  StyledInput,
  StyledCrossWrapper,
  StyledLine,
} from "./ResultItemStyle";
import { StyledFontPreview, StyledFontName } from "./ResultsStyles";
export const ResultItem = () => {
  return (
    <StyledWrapper>
      <StyledFontPreview>Aa</StyledFontPreview>
      <StyledFontName>Name</StyledFontName>
      <StyledInput placeholder="Type your text here.." />
      <StyledCrossWrapper>
        <StyledLine /> <StyledLine />
      </StyledCrossWrapper>
    </StyledWrapper>
  );
};
