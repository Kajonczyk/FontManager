import React from "react";
import { PaginationWrapper, PaginationItem } from "./PaginationStyles";
export const Pagination = ({
  items,
  itemsPerPage,
  changePage,
  currentPage,
}) => {
  const pageNumbers = [];
  const itemsLength = Math.ceil(items.length / itemsPerPage);
  const THRESHOLD = 5;
  for (let i = 1; i < itemsLength; i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationWrapper>
      {(() => {
        if (currentPage < THRESHOLD) {
          return [
            pageNumbers.splice(0, 5).map((number) => (
              <PaginationItem
                key={number}
                onClick={() => changePage(number)}
                numActive={number}
              >
                {number}
              </PaginationItem>
            )),
            <PaginationItem>...</PaginationItem>,
            <PaginationItem
              onClick={() => changePage(pageNumbers[pageNumbers.length - 1])}
            >
              {Number(pageNumbers[pageNumbers.length - 1])}
            </PaginationItem>,
          ];
        } else if (currentPage >= THRESHOLD && currentPage < itemsLength - 3) {
          return [
            <PaginationItem onClick={() => changePage(1)}>1</PaginationItem>,

            <PaginationItem>...</PaginationItem>,

            pageNumbers.splice(currentPage - 3, 5).map((number) => (
              <PaginationItem
                key={number}
                onClick={() => changePage(number)}
                numActive={number}
              >
                {number}
              </PaginationItem>
            )),
            <PaginationItem>...</PaginationItem>,
            <PaginationItem onClick={() => changePage(itemsLength - 1)}>
              {Number(itemsLength - 1)}
            </PaginationItem>,
          ];
        } else {
          return [
            <PaginationItem onClick={() => changePage(1)}>1</PaginationItem>,

            <PaginationItem>...</PaginationItem>,

            pageNumbers.splice(currentPage - 4, 6).map((number) => (
              <PaginationItem
                key={number}
                onClick={() => changePage(number)}
                numActive={number}
              >
                {number}
              </PaginationItem>
            )),
          ];
        }
      })()}
    </PaginationWrapper>
  );
};
