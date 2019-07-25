import React from "react";

const Swatch = props => {
  const { color } = props;

  let hexCode;
  //Upon reload, no selected color is stored in state, therefore hexCode is manually set to empty string
  //to avoid error of value being null to allow page to redirect once mounted
  if (!color) hexCode = "";
  else hexCode = color.hexCode;

  return (
    <div className="swatch">
      <div className="swatch__color" style={{ backgroundColor: hexCode }} />
      <div className="swatch__hex-code">{hexCode}</div>
    </div>
  );
};

export default Swatch;
