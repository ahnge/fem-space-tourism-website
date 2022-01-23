import React from "react";
import data from "../../data.json";
import CrewMen from "./CrewMen";
import img from "../../assets/crew/image-douglas-hurley.png";

const Douglas = () => {
  return <CrewMen data={data.crew[0]} img={img} />;
};

export default Douglas;
