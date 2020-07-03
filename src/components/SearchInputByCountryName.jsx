import React from "react";

const searchInputByCountryName = () => {
  return (
    <input
      className="search-input"
      placeholder="Search for a country"
      onChange={(e) => console.log(e.target.value)}
    ></input>
  );
};

export default searchInputByCountryName;
