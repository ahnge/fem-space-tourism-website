import React from "react";
import { Outlet } from "react-router-dom";

const Crew = () => {
  return (
    <div className=" bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop bg-cover w-full min-h-screen overflow-hidden">
      <div className=" w-full h-full pt-[88px] md:pt-[136px] lg:pt-[180px] xll:pt-[212px] extral:pt-[280px] px-6 md:px-[38.5px] lg:px-[100px] xl:px-[130px] xll:px-[166.5px] extral:px-[250px]">
        <h5 className=" font-barlow font-normal font-base md:text-xl xll:text-[1.75rem] extral:text-[2rem] leading-[19px] md:leading-6 xll:leading-[34px] text-milk tracking-[2.7px] md:tracking-[3.38px] xll:tracking-[4.72px] text-center md:text-left">
          <span className="font-bold text-milk/25 mr-3">02</span>MEET YOUR CREW
        </h5>
        <Outlet />
      </div>
    </div>
  );
};

export default Crew;
