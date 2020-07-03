import React, { useContext } from "react";
import { CountriesContext } from "../contexts/CountriesContext";
import CountryCard from "./CountryCard";
import { ThemeContext } from "../contexts/ThemeContext";

const Countries = () => {
  // const { isLightTheme, light, dark } = useContext(ThemeContext);
  // const theme = isLightTheme ? light : dark;
  const { theme } = useContext(ThemeContext);
  const { countries } = useContext(CountriesContext);

  return countries ? (
    <div className="App" style={{ background: theme.background }}>
      <div className="container">
        <div className="row">
          {countries.map((country, index) => {
            return <CountryCard country={country} key={index} />;
          })}
        </div>
      </div>
    </div>
  ) : null;
};
export default Countries;
