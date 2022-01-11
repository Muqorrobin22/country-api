import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Moon } from "../../assets/arrow-black.svg";

function DetailCard() {
  const params = useParams();
  const [country, setCountry] = useState([]);

  const navigate = useNavigate();

  console.log(params);

  const fetchData = useCallback(async () => {
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
  }, [params]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const dataCountry = country.find((data) => data.title === params.country);

  if (!dataCountry) {
    return <p className="no_data">No data found!</p>;
  }

  return (
    <CardWrap className="detail-card">
      <div className="back" onClick={() => navigate(-1)}>
        <Moon />
        <p>Back</p>
      </div>
      {country.map((data) => (
        <div key={data.id} className="card">
          <div className="img">
            <img src={data.images} alt={data.images} />
          </div>
          <div className="info">
            <h1>{data.title}</h1>
            <div className="text_wrap">
              <div className="text">
                <p>
                  Native Name : <span>{data.nativeName}</span>{" "}
                </p>
                <p>
                  Population :{" "}
                  <span>{data.population.toLocaleString("en-US")}</span>{" "}
                </p>
                <p>
                  Region : <span>{data.region}</span>{" "}
                </p>
                <p>
                  Sub Region : <span>{data.subRegion}</span>{" "}
                </p>
                <p>
                  Capital : <span>{data.capital}</span>{" "}
                </p>
              </div>
              <div className="text">
                <p>
                  Top Level Domain : <span>{data.tld}</span>{" "}
                </p>
                <p>
                  Currencies : <span>{data.currencies}</span>{" "}
                </p>
                <p>
                  languages : <span>{data.languages}</span>{" "}
                </p>
              </div>
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
  .back {
    margin-top: 4rem;
    margin-bottom: 6rem;
    width: 10.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.293139);
    border-radius: 2px;
    p {
      margin-left: 0.8rem;
      font-family: Nunito Sans;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
    }
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
      span {
        font-weight: 300;
      }
    }
  }
  @media (min-width: 1020px) {
    .card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .img {
        width: 56rem;
      }
      .info {
        width: 50%;
        h1 {
          margin-left: 3rem;
          font-family: Nunito Sans;
          font-style: normal;
          font-weight: 800;
          font-size: 32px;
        }
        p {
          font-family: Nunito Sans;
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
        }
        .text_wrap {
          display: flex;

          .text {
            margin-left: 3rem;
          }
        }
      }
    }
    .back {
      margin-top: 8rem;
      margin-bottom: 8rem;
    }
  }
`;

export default DetailCard;
