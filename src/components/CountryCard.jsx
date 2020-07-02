import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const CountryCard = ({ country }) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className="xl-col-3 lg-col-3 md-col-3 sm-col-12 col-12"
      onClick={console.log("ola")}
    >
      <div
        className="each-card"
        style={{ background: theme.elements, color: theme.text }}
      >
        <div className="card-flag-container">
          <img src={country.flag} alt="" />
        </div>
        <div className="card-info-container">
          <p className="country-name">
            <b>{country.name}</b>
          </p>
          <p>
            <b>Population:</b> {country.population.toLocaleString()}
          </p>
          <p>
            <b>Region:</b> {country.region}
          </p>
          <p>
            <b>Capital:</b> {country.capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
