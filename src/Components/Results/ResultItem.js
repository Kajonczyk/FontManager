import React from "react";
import {
  StyledWrapper,
  StyledInput,
  StyledCrossWrapper,
  StyledLine,
} from "./ResultItemStyle";
import { StyledFontPreview, StyledFontName } from "./ResultsStyles";
export const ResultItem = ({ itemData, setItemData }) => {
  return (
    <StyledWrapper>
      <StyledFontPreview fontFamily={itemData.fontFamily}>Aa</StyledFontPreview>
      <StyledFontName fontFamily={itemData.fontFamily}>Name</StyledFontName>
      <StyledInput
        placeholder="Type your text here.."
        fontFamily={itemData.fontFamily}
        fontSource={itemData.fontSource}
      />
      <StyledCrossWrapper
        onClick={() =>
          setItemData({
            fontFamily: "",
            fontSource: "",
          })
        }
      >
        <StyledLine /> <StyledLine />
      </StyledCrossWrapper>
    </StyledWrapper>
  );
};
