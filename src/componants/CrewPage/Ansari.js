import React from "react";
import data from "../../data.json";
import CrewMen from "./CrewMen";
import img from "../../assets/crew/image-anousheh-ansari.png";

const Ansari = () => {
  return <CrewMen data={data.crew[3]} img={img} />;
};

export default Ansari;
