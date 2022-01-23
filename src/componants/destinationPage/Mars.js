import React from "react";
import Planets from "./Planets";
import data from "../../data.json";
import mars from "../../assets/destination/image-mars.png";

const Mars = () => {
  return <Planets data={data.destinations[1]} img={mars} />;
};

export default Mars;
