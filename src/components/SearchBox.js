import React, { useContext } from "react";
import ColorContext from "../contexts/Color/colorContext";

const SearchBox = () => {
  // Contexts
  const colorContext = useContext(ColorContext);
  const { searchValue, setSearchValue } = colorContext;

  return (
    <input
      className="search-box"
      type="text"
      name="query"
      value={searchValue}
      onChange={e => setSearchValue(e.target.value)}
      placeholder="Search"
    />
  );
};

export default SearchBox;
