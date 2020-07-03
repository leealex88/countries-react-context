import React, { useState, useContext } from "react";
import { CountriesContext } from "../contexts/CountriesContext";

const SearchInputByCountryName = () => {
  const [searchInput, setSearchInput] = useState("");
  const { countries, setCountries } = useContext(CountriesContext);
  console.log(searchInput);

  const searchTheName =
    searchInput &&
    countries.filter((country) =>
      country.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  console.log("searchTheName", searchTheName);
  return (
    <input
      className="search-input"
      placeholder="Search for a country"
      onChange={(e) => {
        setSearchInput(e.target.value);
        // setCountries(searchTheName);
      }}
    ></input>
  );
};

export default SearchInputByCountryName;
