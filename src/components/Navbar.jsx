import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  // const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
  // const theme = isLightTheme ? light : dark;
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className="navbar-container"
      style={{ background: theme.elements, color: theme.text }}
    >
      <div className="navbar-wraper">
        <div>
          <div className="a-tag-titel">
            <Link
              className="link"
              to={{ pathname: "/" }}
              style={{ color: theme.text }}
            >
              Where in the World...
            </Link>
          </div>
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
