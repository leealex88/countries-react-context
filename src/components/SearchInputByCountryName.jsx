import React, { useContext } from "react";
import { CountriesContext } from "../contexts/CountriesContext";
import { ThemeContext } from "../contexts/ThemeContext";
import RegionSelect from "./RegionSelect";
const SearchInputByCountryName = () => {
  const { setCountries, totalCountries } = useContext(CountriesContext);
  const { theme } = useContext(ThemeContext);

  const updateCountryDisplay = (input) => {
    const searchName = totalCountries.filter((country) =>
      country.name.toLowerCase().includes(input.toLowerCase())
    );
    setCountries(searchName);
  };

  return (
    <div style={{ background: theme.background, color: theme.text }}>
      <div className="container">
        <div className="search-select-container">
          <input
            style={{
              background: theme.elements,
              color: theme.text,
            }}
            className="search-input"
            placeholder="Search for a country"
            onChange={(e) => {
              updateCountryDisplay(e.target.value);
            }}
          ></input>
          <RegionSelect />
        </div>
      </div>
    </div>
  );
};

export default SearchInputByCountryName;
