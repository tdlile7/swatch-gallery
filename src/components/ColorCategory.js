import React, { useContext } from "react";
import ColorContext from "../contexts/Color/colorContext";

const ColorCategory = props => {
  // Contexts
  const colorContext = useContext(ColorContext);
  const { onCategorySelect, selectedCategories } = colorContext;

  //Capitalizes first letter of the color categories for when they are displayed on the SideBar
  const { name } = props;
  const capitalizeName = `${name.charAt(0).toUpperCase()}${name.substring(1)}`;

  //Dynamically changes classes of color category list items based on whether they have been selected
  const listItemClass = selectedCategories.includes(name)
    ? "color-category--active"
    : "color-category";

  return (
    <li className={listItemClass} onClick={() => onCategorySelect(name)}>
      {capitalizeName}
    </li>
  );
};

export default ColorCategory;
