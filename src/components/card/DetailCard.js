import React from "react";
import { useParams } from "react-router-dom";

function DetailCard() {
  const params = useParams();
  console.log(params);
  return <div>{params.country}</div>;
}

export default DetailCard;
