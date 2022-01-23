import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Rockets = ({ data, landscape, portrait }) => {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);

  const location = useLocation();

  const { name, description } = data;

  useEffect(() => {
    setOne(false);
    setThree(false);
    setTwo(false);

    if (location.pathname.includes("launchvehicle")) {
      setOne(true);
    } else if (location.pathname.includes("spaceport")) {
      setTwo(true);
    } else {
      setThree(true);
    }
  }, [location.pathname]);

  return (
    <main className=" mt-8 lg:flex lg:flex-row-reverse lg:pl-[100px] lg:items-center lg:gap-10 lg:justify-between xl:pl-[130px] xll:pl-[166.5px] extral:pl-[250px]">
      <div>
        <img
          src={landscape}
          alt="launch vehicle"
          className=" w-full h-auto lg:hidden"
        />
        <img
          src={portrait}
          alt="launch vehicle"
          className="hidden lg:block xll:w-[515px] extral:w-[700px]"
        />
      </div>

      <div className=" lg:flex md:mb-24 lg:mb-0">
        <ul className="flex justify-center space-x-4 mt-[34px] md:mt-[56px] lg:mt-0 lg:flex-col lg:space-x-0 lg:space-y-4 lg:mr-10 xll:mr-20 extral:mr-24">
          <Link
            to="/tech/launchvehicle"
            className={`font-belle text-base leading-[18px] tracking-normal font-normal rounded-full flex justify-center items-center w-[40px] h-[40px] md:w-[60px] md:h-[60px] xll:w-[80px] xll:h-[80px] extral:w-[100px] extral:h-[100px] md:text-[28px] border-2 hover:border-milk ${
              one
                ? "bg-milk text-space border-milk"
                : "text-milk border-milk/25"
            }`}
          >
            1
          </Link>
          <Link
            to="/tech/spaceport"
            className={`font-belle text-base leading-[18px] tracking-normal font-normal rounded-full flex justify-center items-center w-[40px] h-[40px] md:w-[60px] md:h-[60px] xll:w-[80px] xll:h-[80px] extral:w-[100px] extral:h-[100px] md:text-[28px] border-2 hover:border-milk ${
              two
                ? "bg-milk text-space border-milk"
                : "text-milk border-milk/25"
            }`}
          >
            2
          </Link>
          <Link
            to="/tech/spacecapsule"
            className={`font-belle text-base leading-[18px] tracking-normal font-normal rounded-full flex justify-center items-center w-[40px] h-[40px] md:w-[60px] md:h-[60px] xll:w-[80px] xll:h-[80px] extral:w-[100px] extral:h-[100px] md:text-[28px] border-2 hover:border-milk ${
              three
                ? "bg-milk text-space border-milk"
                : "text-milk border-milk/25"
            }`}
          >
            3
          </Link>
        </ul>

        <div className=" mt-[26px] md:mt-[44px] lg:mt-0 flex flex-col items-center lg:justify-center lg:items-start">
          <h6 className=" uppercase font-barlow text-sm md:text-base md:leading-[19px] leading-4 tracking-[2.37px] text-pur lg:text-left extral:text-2xl">
            the terminology..
          </h6>
          <h3 className=" font-belle text-2xl leading-7 font-normal tracking-normal text-milk mt-[9px] uppercase md:text-[2.5rem] md:leading-[46px] xll:text-[3.5rem] xll:leading-[64px] lg:text-left xll:mt-[11px] extral:text-7xl">
            {name}
          </h3>
          <p className=" font-barlow font-normal text-[0.937rem] leading-6 text-pur mt-4 xll:mt-[17px] text-center px-6 md:text-base md:leading-[28px] md:px-0 md:max-w-[458px] lg:text-left xll:text-lg xll:leading-8 extral:text-2xl extral:max-w-2xl">
            {description}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Rockets;
