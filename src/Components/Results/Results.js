import React, { useEffect, useState } from "react";
import {
  StyledResultsWrapper,
  StyledResultItem,
  StyledFontPreview,
  StyledFontName,
} from "./ResultsStyles";
import { QueryContext } from "../../Shared/QueryContext";
import { getFonts } from "../../Shared/getFonts";
import { ResultItem } from "./ResultItem";

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
        <QueryContext.Consumer>
          {(context) =>
            context.state.query === ""
              ? data.slice(0, 150).map((font) => (
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
                ))
              : data
                  .filter((i) => i.family.includes(context.state.query))
                  .map((font) => (
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
                  ))
          }
        </QueryContext.Consumer>
      </StyledResultsWrapper>
      {/* <ResultItem /> */}
    </div>
  );
};
