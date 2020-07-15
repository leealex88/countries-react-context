import React, { Fragment, useState, useContext, useEffect } from "react";
import { CountriesContext } from "../contexts/CountriesContext";
import { ThemeContext } from "../contexts/ThemeContext";

const getCountryInfo = (countryCode) => {
  return fetch(
    `https://restcountries.eu/rest/v2/alpha/${countryCode}`
  ).then((res) => res.json());
};

const CountryBigCard = (props) => {
  let { countries } = useContext(CountriesContext);
  const { theme } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true);
  const [borderCountries, setBorderCountries] = useState([]);
  const [countryCode, setCountryCode] = useState(props.match.params.alpha3Code);
  const [singleCountry, setSingleCountry] = useState();

  useEffect(() => {
    getCountryInfo(countryCode).then(async (data) => {
      setSingleCountry(data);

      const promises = [];
      data.borders.forEach((country) => {
        promises.push(getCountryInfo(country));
      });

      const results = await Promise.allSettled(promises);
      console.log("promises results : ", results);

      const remoteDataResults = [];

      results.forEach((item) => {
        remoteDataResults.push({
          name: item.value.name,
          countryCode: item.value.alpha3Code,
        });
      });

      setBorderCountries(remoteDataResults);
      setIsLoading(false);
    });
  }, [countryCode]);

  // console.log("countries", countries);

  console.log("singleCountry", singleCountry);
  return !isLoading ? (
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
                {borderCountries.map((country, index) => (
                  <button
                    onClick={() => setCountryCode(country.countryCode)}
                    key={index}
                  >
                    {country.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  ) : (
    <div>Loading...</div>
  );
};

export default CountryBigCard;
