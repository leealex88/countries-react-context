import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

function HomePage() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="home-page">
      <div className="button-container">
        <div className="go-to-country-button">
          <Link className="link" to={{ pathname: "/countries" }}>
            <button
              className="button"
              style={{ background: theme.background, color: theme.text }}
            >
              ...would you like to go?
              <p className="small-p">click and check!</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
