import React from "react";
import Planets from "./Planets";
import data from "../../data.json";
import europa from "../../assets/destination/image-europa.png";

const Europa = () => {
  return <Planets data={data.destinations[2]} img={europa} />;
};

export default Europa;
