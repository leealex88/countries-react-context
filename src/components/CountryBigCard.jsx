import React, { Fragment, useState, useContext, useEffect } from "react";
import { CountriesContext } from "../contexts/CountriesContext";
import { ThemeContext } from "../contexts/ThemeContext";

const CountryBigCard = (props) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const { countries } = useContext(CountriesContext);

  const countryCode = props.match.params.alpha3Code;
  const [singleCountry, setSingleCountry] = useState();
  console.log(singleCountry);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
      .then((res) => res.json())
      .then((data) => setSingleCountry(data));
  }, []);

  return singleCountry ? (
    <Fragment>
      <div
        className="main-big-card-div"
        style={{ background: theme.background, color: theme.text }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 lg-col-6">
              <img
                src={singleCountry.flag}
                alt=""
                className="big-card-flag-image"
              />
            </div>

            <div className="col-12 lg-col-6 row">
              <div className="card-info-container col-12 lg-col-6">
                <p className="country-name">
                  <b>{singleCountry.name}</b>
                </p>
                <p>
                  <b>Native Name:</b> {singleCountry.nativeName}
                </p>
                <p>
                  <b>Population:</b> {singleCountry.population.toLocaleString()}
                </p>
                <p>
                  <b>Region:</b> {singleCountry.region}
                </p>
                <p>
                  <b>Seb Region:</b> {singleCountry.subregion}
                </p>
                <p>
                  <b>Capital:</b> {singleCountry.capital}
                </p>
              </div>
              <div className="card-info-container col-12 lg-col-6">
                <p>
                  <b>Top Level Domain:</b> {singleCountry.topLevelDomain}
                </p>
                <p>
                  <b>Currencies:</b> {singleCountry.currencies[0].name}
                </p>
                <div className="languages-names">
                  <p>Languages: </p>{" "}
                  {singleCountry.languages.map((country, index) => (
                    <p key={index}>{" " + country.name} </p>
                  ))}
                </div>
              </div>
              <div className="col-12 lg-col-12">
                <b>Border Countries:</b>{" "}
                {singleCountry.borders.map((country, index) => (
                  <button onClick={() => console.log(country)} key={index}>
                    {country}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  ) : null;
};

export default CountryBigCard;
