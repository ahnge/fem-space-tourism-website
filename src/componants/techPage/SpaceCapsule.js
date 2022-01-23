import React from "react";
import data from "../../data.json";
import Rockets from "./Rockets";
import landscape from "../../assets/technology/image-space-capsule-landscape.jpg";
import portrait from "../../assets/technology/image-space-capsule-portrait.jpg";

const SpaceCapsule = () => {
  return (
    <Rockets
      data={data.technology[2]}
      landscape={landscape}
      portrait={portrait}
    />
  );
};

export default SpaceCapsule;
