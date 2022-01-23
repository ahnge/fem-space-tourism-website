import React from "react";
import Planets from "./Planets";
import data from "../../data.json";
import titan from "../../assets/destination/image-titan.png";

const Titan = () => {
  return <Planets data={data.destinations[3]} img={titan} />;
};

export default Titan;
