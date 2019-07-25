import React, { useContext } from "react";
import Swatch from "../Swatch";
import ColorContext from "../../contexts/Color/colorContext";
import _ from "lodash";
import { Link } from "react-router-dom";

const DetailView = props => {
  // Contexts
  const colorContext = useContext(ColorContext);
  const { selectedColor, resetSettings } = colorContext;

  //If page reloads and no selected color is stored in the state, browser will be redirected to home page
  if (!selectedColor) {
    resetSettings();
    props.history.replace("/");
  }

  //Dummy array to map over to generate the correct number of swatches to represent different shades of the input color
  const shades = _.range(1, 5);

  return (
    <div className="detail-view">
      <Swatch color={selectedColor} />
      <div className="color-shades">
        {shades.map(i => {
          return <Swatch key={i} color={selectedColor} />;
        })}
      </div>
      <Link to="/" onClick={resetSettings} className="clear-button">
        Clear
      </Link>
    </div>
  );
};

export default DetailView;
