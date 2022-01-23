import React from "react";
import data from "../../data.json";
import Planets from "./Planets";
import moon from "../../assets/destination/image-moon.png";

const Moon = () => {
  return <Planets data={data.destinations[0]} img={moon} />;
};

export default Moon;
