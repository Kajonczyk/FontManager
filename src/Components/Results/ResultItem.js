import React, { useEffect, useRef } from "react";
import {
  StyledWrapper,
  StyledInput,
  StyledCrossWrapper,
  StyledLine,
} from "./ResultItemStyle";
import { StyledFontPreview, StyledFontName } from "./ResultsStyles";
export const ResultItem = ({ itemData, setItemData }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <StyledWrapper>
      <StyledFontPreview fontFamily={itemData.fontFamily}>Aa</StyledFontPreview>
      <StyledFontName fontFamily={itemData.fontFamily}>
        {itemData.fontFamily}
      </StyledFontName>
      <StyledInput
        ref={inputRef}
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
