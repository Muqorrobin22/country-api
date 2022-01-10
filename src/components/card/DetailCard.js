import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

function DetailCard() {
  const params = useParams();
  const [country, setCountry] = useState([]);
  const navigate = useNavigate();

  console.log(params);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${params.country}`
    );

    const data = await response.json();

    const result = data.map((countryData) => {
      const currencyData = countryData.currencies;
      let currency = Object.keys(currencyData);
      const nativeData = countryData.name.nativeName;
      let native = Object.keys(nativeData);
      const languageData = countryData.languages;
      let language = Object.keys(languageData);

      return {
        id: countryData.name.common,
        title: countryData.name.common,
        nativeName: native[0],
        region: countryData.region,
        subRegion: countryData.subregion,
        capital: countryData.capital[0],
        population: countryData.population,
        images: countryData.flags.png,
        tld: countryData.tld[0],
        currencies: currency[0],
        languages: language[0],
      };
    });
    console.log(result);
    setCountry(result);
  };

  return (
    <CardWrap>
      <div>
        <p onClick={() => navigate(-1)}>back</p>
      </div>
      {country.map((data) => (
        <div key={data.id}>
          <div className="img">
            <img src={data.images} alt={data.images} />
          </div>
          <div className="info">
            <h1>{data.title}</h1>
            <div className="text">
              <p>Native Name : {data.nativeName} </p>
              <p>Population : {data.population.toLocaleString("en-US")} </p>
              <p>Region : {data.region} </p>
              <p>Sub Region : {data.subRegion} </p>
              <p>Capital : {data.capital} </p>
              <p>Top Level Domain : {data.tld} </p>
              <p>Currencies : {data.currencies} </p>
              <p>languages : {data.languages} </p>
            </div>
          </div>
        </div>
      ))}
    </CardWrap>
  );
}

const CardWrap = styled.div`
  width: 90%;
  border-radius: 5px;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
  overflow: hidden;
  cursor: pointer;
  margin: 0 auto;
  div {
    margin-top: 8rem;
  }
  img {
    width: 100%;
  }
  .info {
    padding: 2.4rem;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    h1 {
      margin-bottom: 1.6rem;
      font-family: Nunito Sans;
      font-style: normal;
      font-weight: 800;
      font-size: 18px;
      line-height: 26px;
      /* identical to box height, or 144% */
      text-decoration: none;
      color: black;
    }
    p {
      font-family: Nunito Sans;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
      /* identical to box height, or 114% */
      text-decoration: none;
      color: black;
      margin-top: 1rem;
    }
  }
`;

export default DetailCard;
