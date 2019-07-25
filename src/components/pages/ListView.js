import React, { Fragment, useContext } from "react";
import Swatch from "../Swatch";
import Pagination from "../Pagination";
import ColorContext from "../../contexts/Color/colorContext";
import { Link } from "react-router-dom";

const ListView = () => {
  // Contexts
  const colorContext = useContext(ColorContext);
  const {
    filteredColors,
    colors,
    currentPage,
    pagesCount,
    pageSize,
    onSelectColor
  } = colorContext;

  //Generates the list of colors that will be paginated in the display
  const colorList = filteredColors ? [...filteredColors] : [...colors];

  //Generates group of which colors will be displayed based on which page the user is currently on
  const colorsDisplayed =
    currentPage === pagesCount
      ? colorList.splice((currentPage - 1) * pageSize)
      : colorList.splice((currentPage - 1) * pageSize, pageSize);

  return (
    <div className="list-view">
      {filteredColors && filteredColors.length === 0 ? (
        <h2 className="no-search-results">No Search Results Found</h2>
      ) : (
        <Fragment>
          <div className="swatches">
            {colorsDisplayed.map(color => {
              const { _id } = color;
              return (
                <Link
                  to="/details"
                  onClick={() => onSelectColor(color)}
                  key={_id}
                >
                  <Swatch color={color} />
                </Link>
              );
            })}
          </div>
          <Pagination />
        </Fragment>
      )}
    </div>
  );
};

export default ListView;
