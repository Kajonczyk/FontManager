import React, { useEffect, useState } from "react";
import {
  StyledResultsWrapper,
  StyledResultItem,
  StyledFontPreview,
  StyledFontName,
} from "./ResultsStyles";
import { Pagination } from "../Pagination/Pagination";
import { QueryContext } from "../../Shared/QueryContext";
import { getFonts } from "../../Shared/getFonts";
import { ResultItem } from "./ResultItem";

export const Results = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(calculateItemsPerPage());
  const [itemData, setItemData] = useState({
    fontFamily: "",
    fontSource: "",
  });

  useEffect(() => {
    async function fetchData() {
      const response = await getFonts();
      setData(response);
    }
    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPosts = data.slice(indexOfFirstItem, indexOfLastItem);

  const changePage = (pageNumber) => setCurrentPage(pageNumber);

  function calculateItemsPerPage() {
    if (window.innerWidth < 768) {
      return 40;
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      return 70;
    } else if (window.innerWidth >= 1024) {
      return 100;
    }
  }

  return (
    <div>
      <StyledResultsWrapper>
        <QueryContext.Consumer>
          {(context) =>
            context.state.query === ""
              ? currentPosts.map((font) => (
                  <StyledResultItem
                    key={font.family}
                    onClick={() =>
                      setItemData({
                        fontFamily: font.family,
                        fontSource: font.files.regular,
                      })
                    }
                  >
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
      {itemData.fontFamily && (
        <ResultItem itemData={itemData} setItemData={setItemData} />
      )}
      <Pagination
        itemsPerPage={itemsPerPage}
        items={data}
        changePage={changePage}
        currentPage={currentPage}
      />
    </div>
  );
};
