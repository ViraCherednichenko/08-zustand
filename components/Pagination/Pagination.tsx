"use client";

import ReactPaginate from "react-paginate";

export interface PaginationProps {
  pageCount: number;              
  forcePage: number;              
  onPageChange: (page: number) => void; 
}

export default function Pagination({
  pageCount,
  forcePage,
  onPageChange,
}: PaginationProps) {
  if (pageCount <= 1) return null;

  return (
    <ReactPaginate
      pageCount={pageCount}
      forcePage={forcePage}
      onPageChange={(e) => onPageChange(e.selected)}
      previousLabel="<"
      nextLabel=">"
      breakLabel="..."
      marginPagesDisplayed={1}
      pageRangeDisplayed={3}
      renderOnZeroPageCount={null}
    />
  );
}