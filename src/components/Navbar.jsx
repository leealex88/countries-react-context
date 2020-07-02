import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = (props) => {
  const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className="navbar-container"
      style={{ background: theme.elements, color: theme.text }}
    >
      <div className="navbar-wraper">
        <div>
          <div className="a-tag-titel">Where in the World...</div>
        </div>
        <div>
          <div className="a-tag-mood" onClick={toggleTheme}>
            Dark Mode
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
