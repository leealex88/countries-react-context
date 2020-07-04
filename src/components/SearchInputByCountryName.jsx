import React, { useContext, useState, useEffect } from "react";
import { CountriesContext } from "../contexts/CountriesContext";
import { ThemeContext } from "../contexts/ThemeContext";

const SearchInputByCountryName = () => {
  const { countries, setCountries, totalCountries } = useContext(
    CountriesContext
  );
  const { theme } = useContext(ThemeContext);

  const updateCountryDisplay = (input) => {
    const searchName = totalCountries.filter((country) =>
      country.name.toLowerCase().includes(input.toLowerCase())
    );
    setCountries(searchName);
  };

  const [region, setRegion] = useState("");

  useEffect(() => {
    if (region) {
      fetch(`https://restcountries.eu/rest/v2/region/${region}`)
        .then((res) => res.json())
        .then((data) => setCountries(data));
    }
  }, [region, setCountries]);

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
          <select
            style={{
              background: theme.elements,
              color: theme.text,
            }}
            className="select-region"
            value=""
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value="">Filter by Region</option>
            <option>Africa</option>
            <option>Americas</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchInputByCountryName;
