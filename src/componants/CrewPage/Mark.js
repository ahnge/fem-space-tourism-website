import React from "react";
import data from "../../data.json";
import CrewMen from "./CrewMen";
import img from "../../assets/crew/image-mark-shuttleworth.png";

const Mark = () => {
  return <CrewMen data={data.crew[1]} img={img} />;
};

export default Mark;
