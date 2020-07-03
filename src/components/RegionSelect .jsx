import React, { useState, useEffect } from "react";

const RegionSelect = () => {
  const [region, setRegion] = useState();
  console.log("region", region);

  //   useEffect(() => {
  //     if (region) {
  //       fetch(`https://restcountries.eu/rest/v2/region/${region}`)
  //         .then((res) => res.json())
  //         .then((data) => setRegion(data));
  //     }
  //   }, []);

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
