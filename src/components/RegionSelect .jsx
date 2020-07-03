import React, { useState, useEffect, useContext } from "react";
import { CountriesContext } from "../contexts/CountriesContext";

const RegionSelect = () => {
  const { setCountries } = useContext(CountriesContext);
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
