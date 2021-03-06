import { useRef, useState } from "react";
import styled from "styled-components";
import { useHttp, useRegion } from "../../hooks/use-http";
import Card from "../card/Card";
import ClipLoader from "react-spinners/ClipLoader";

const optionValue = ["Africa", "America", "Asia", "Europe", "Oceania"];

function Main() {
  const [country, setCountry] = useState([]);
  const inputRef = useRef();

  const manageData = (data) => {
    const result = data.map((countryData) => {
      return {
        id: countryData.name.common,
        title: countryData.name.common,
        region: countryData.region,
        capital: countryData.capital,
        population: countryData.population,
        images: countryData.flags.png,
      };
    });

    setCountry(result);
  };

  const { isLoading, isError, fecthData } = useHttp(
    { url: "https://restcountries.com/v3.1/name", input: inputRef },
    manageData
  );

  const { isLoading2, isError2, fetchRegion } = useRegion(
    "https://restcountries.com/v3.1/region",
    manageData
  );

  let content = <p className="error">UPS... No Countries Yet</p>;

  if (country.length > 0) {
    content = country.map((data) => (
      <div key={data.id} className="card">
        <Card
          images={data.images}
          population={data.population}
          title={data.title}
          region={data.region}
          capital={data.capital}
        />
      </div>
    ));
  }

  if (isError || isError2) {
    content = <p className="error">{isError}</p>;
  }

  if (isLoading || isLoading2) {
    content = <ClipLoader color="green" size={60} />;
  }

  return (
    <MainWrap>
      <div className="inputs">
        <div className="type-text">
          <form onSubmit={fecthData}>
            <input
              type="text"
              placeholder="Search for a country…"
              ref={inputRef}
            />
          </form>
          <button onClick={fecthData}>Search</button>
        </div>
        <div className="type-select">
          <input
            list="countrys"
            name="country"
            id="country"
            placeholder="Filter by Region"
            onChange={fetchRegion}
          />
          <datalist id="countrys">
            {optionValue.map((data, i) => (
              <option key={data} value={data} />
            ))}
          </datalist>
        </div>
      </div>
      <div className="countries">{content}</div>
    </MainWrap>
  );
}

const MainWrap = styled.main`
  padding: 1.6rem 2.4rem;
  display: flex;
  flex-direction: column;
  .inputs {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    .type-text {
      display: flex;
      align-items: center;
      margin-bottom: 3rem;
      button {
        margin-left: 2rem;
        padding: 0.4rem 1rem;
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 20px;
        border-radius: 20px;
        border: none;
        background-color: #1d1c1e;
        color: white;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover {
          background-color: #777081;
        }
      }
    }
  }
  input {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    padding: 1.4rem 2rem 1.4rem 2.8rem;
    box-sizing: border-box;
    outline: none;
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
    border-radius: 5px;
    width: 100%;
  }
  input[type="text"] {
    width: 100%;
    border: none;
  }
  input::placeholder {
    color: #848484;
  }

  .countries {
    margin-top: 4rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    .card {
      margin-top: 4rem;
    }
    .error {
      font-size: 20px;
    }
  }
  @media (min-width: 700px) {
    .inputs {
      flex-direction: row;
    }
    input[type="text"] {
      width: auto;
    }
  }
  @media (min-width: 1440px) {
    padding: 6.6rem 8.1rem;
    .countries {
      justify-content: center;
      .card {
        margin-top: 8rem;
        margin-left: 8rem;
      }
      .error {
        font-size: 32px;
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .inputs {
      flex-direction: row;
      .type-text {
        margin-bottom: 0;
        button {
          margin-left: 2rem;
          padding: 1rem 2rem;
          font-family: Nunito Sans;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 20px;
          border-radius: 20px;
          border: none;
          background-color: #1d1c1e;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          &:hover {
            background-color: #777081;
          }
        }
      }
    }
    input[type="text"] {
      width: 48rem;
      border: none;
    }
    input {
      font-family: Nunito Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      padding: 1.9rem 2rem 1.9rem 3.1rem;
      box-sizing: border-box;
      outline: none;
      box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
      border-radius: 5px;
    }
  }
`;

export default Main;
