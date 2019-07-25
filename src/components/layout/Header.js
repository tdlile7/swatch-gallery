import React, { useContext } from "react";
import SearchBox from "../SearchBox";
import ColorContext from "../../contexts/Color/colorContext";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  // Contexts
  const colorContext = useContext(ColorContext);
  const { resetSettings } = colorContext;

  return (
    <div className="header">
      <Link to="/">
        <img
          onClick={resetSettings}
          className="header__logo"
          src={logo}
          alt="Logo"
        />
      </Link>
      <SearchBox />
    </div>
  );
};

export default Header;
