import React, { useContext } from "react";
import ColorCategory from "../ColorCategory";
import ColorContext from "../../contexts/Color/colorContext";
import { Link } from "react-router-dom";

const SideBar = () => {
  // Contexts
  const colorContext = useContext(ColorContext);
  const { onSelectColor, colors } = colorContext;

  //Chooses random color that will be showcased if corresponding button is selected
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomColorIndex];

  const colorCategories = [];

  //Generates list of unique color categories
  colors.map(color => {
    if (!colorCategories.includes(color.category))
      colorCategories.push(color.category);
    return null;
  });

  return (
    <div className="side-bar">
      <Link
        to="/details"
        onClick={() => onSelectColor(randomColor)}
        className="side-bar__random-button"
      >
        Random Color
      </Link>
      <ul className="side-bar__categories">
        {colorCategories.map(name => {
          return <ColorCategory key={name} name={name} />;
        })}
      </ul>
    </div>
  );
};

export default SideBar;
