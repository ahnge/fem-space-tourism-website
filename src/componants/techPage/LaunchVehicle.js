import React from "react";
import data from "../../data.json";
import Rockets from "./Rockets";
import landscape from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import portrait from "../../assets/technology/image-launch-vehicle-portrait.jpg";

const LaunchVehicle = () => {
  return (
    <Rockets
      data={data.technology[0]}
      landscape={landscape}
      portrait={portrait}
    />
  );
};

export default LaunchVehicle;
