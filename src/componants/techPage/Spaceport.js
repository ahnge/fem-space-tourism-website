import React from "react";
import data from "../../data.json";
import Rockets from "./Rockets";
import landscape from "../../assets/technology/image-spaceport-landscape.jpg";
import portrait from "../../assets/technology/image-spaceport-portrait.jpg";

const Spaceport = () => {
  return (
    <Rockets
      data={data.technology[1]}
      landscape={landscape}
      portrait={portrait}
    />
  );
};

export default Spaceport;
