import React, { useEffect, useState } from "react";
import {
  StyledResultsWrapper,
  StyledResultItem,
  StyledFontPreview,
  StyledFontName,
} from "./ResultsStyles";

import { getFonts } from "../../Shared/getFonts";

export const Results = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await getFonts();
      setData(response);
    }
    fetchData();
  }, []);
  return (
    <div>
      <StyledResultsWrapper>
        {data.splice(0, 100).map((font) => (
          <StyledResultItem key={font.family}>
            <StyledFontPreview
              fontFamily={font.family}
              fontSource={font.files.regular}
            >
              Aa
            </StyledFontPreview>
            <StyledFontName fontFamily={font.family}>
              {font.family}
            </StyledFontName>
          </StyledResultItem>
        ))}
      </StyledResultsWrapper>
    </div>
  );
};
