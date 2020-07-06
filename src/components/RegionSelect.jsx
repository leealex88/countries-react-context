import React, { useState, useEffect, useContext } from "react";
import { CountriesContext } from "../contexts/CountriesContext";
import { ThemeContext } from "../contexts/ThemeContext";
const RegionSelect = () => {
  const { setCountries } = useContext(CountriesContext);
  const { theme } = useContext(ThemeContext);
  const [region, setRegion] = useState("");

  useEffect(() => {
    if (region) {
      fetch(`https://restcountries.eu/rest/v2/region/${region}`)
        .then((res) => res.json())
        .then((data) => setCountries(data));
    }
  }, [region, setCountries]);

  return (
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
  );
};

export default RegionSelect;
