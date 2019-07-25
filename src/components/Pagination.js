import React, { useContext } from "react";
import ColorContext from "../contexts/Color/colorContext";
import _ from "lodash";

const Pagination = () => {
  // Contexts
  const colorContext = useContext(ColorContext);
  const { pagesCount, currentPage, onPageChange } = colorContext;

  //Generates the number of pages to be displayed in the pagination based on the pagesCount
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <ul className="pagination">
      {pages.map(page => (
        <li
          key={page}
          className={page === currentPage ? "page-item--active" : "page-item"}
          onClick={() => onPageChange(page)}
        >
          {page}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
