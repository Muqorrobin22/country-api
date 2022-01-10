import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Card({ images, population, region, capital, title }) {
  return (
    <CardWrap>
      <Link to={title}>
        <img src={images} alt={images} />
      </Link>

      <div className="info">
        <h1>{title}</h1>
        <div className="text">
          <p>Population : {population.toLocaleString("en-US")} </p>
          <p>Region : {region} </p>
          <p>Capital : {capital} </p>
        </div>
      </div>
    </CardWrap>
  );
}

const CardWrap = styled.div`
  width: 26.4rem;
  background-color: #eff1f7;
  border-radius: 5px;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 16rem;
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

  @media (min-width: 1440px) {
    margin-left: 8rem;
  }
`;

export default Card;
