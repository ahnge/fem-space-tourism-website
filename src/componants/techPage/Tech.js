import React from "react";
import { Outlet } from "react-router-dom";

const Tech = () => {
  return (
    <div className=" bg-tech-mobile md:bg-tech-tablet lg:bg-tech-desktop bg-cover w-full min-h-screen overflow-hidden">
      <div className=" w-full h-full pt-[88px] md:pt-[136px] lg:pt-[180px] xll:pt-[212px] extral:pt-[280px]">
        <h5 className=" font-barlow font-normal font-base md:text-xl xll:text-[1.75rem] extral:text-[2rem] leading-[19px] md:leading-6 xll:leading-[34px] text-milk tracking-[2.7px] md:tracking-[3.38px] xll:tracking-[4.72px] text-center md:text-left px-[38.5px] lg:px-[100px] xl:px-[130px] xll:px-[166.5px] extral:px-[250px]">
          <span className="font-bold text-milk/25 mr-3">03</span>SPACE LAUNCH
          101
        </h5>
        <Outlet />
      </div>
    </div>
  );
};

export default Tech;
