import React from "react";
import data from "../../data.json";
import CrewMen from "./CrewMen";
import img from "../../assets/crew/image-victor-glover.png";

const Victor = () => {
  return <CrewMen data={data.crew[2]} img={img} />;
};

export default Victor;
