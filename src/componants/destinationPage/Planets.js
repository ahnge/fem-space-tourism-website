import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Planets = ({ data, img }) => {
  const [moon, setMoon] = useState(false);
  const [mars, setMars] = useState(false);
  const [europa, setEuropa] = useState(false);
  const [titan, setTitan] = useState(false);
  const [visible, setVisible] = useState(false);

  const { name, description, distance, travel } = data;
  const location = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 200);

    setMoon(false);
    setMars(false);
    setEuropa(false);
    setTitan(false);
    if (location.pathname === "/destination/moon") {
      setMoon(true);
    } else if (location.pathname === "/destination/mars") {
      setMars(true);
    } else if (location.pathname === "/destination/europa") {
      setEuropa(true);
    } else {
      setTitan(true);
    }

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`flex flex-col items-center mt-8 md:mt-[60px] xll:mt-16 extral:mt-20 pb-14 lg:flex-row lg:justify-between transition-all ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className=" pb-[26px] md:pb-[53px] xll:pb-0">
        <img
          src={img}
          alt="moon"
          className="w-[170px] h-[170px] md:w-[300px] md:h-[300px] xl:w-[380px] xl:h-[380px] xll:w-[445px] xll:h-[445px] extral:w-[540px] extral:h-[540px]"
        />
      </div>

      <div>
        <ul className="flex justify-center space-x-5 lg:justify-start">
          <li>
            <Link
              to="/destination/moon"
              className={`font-barlow font-normal text-sm md:text-base extral:text-2xl text-milk tracking-[2.36px] pb-2 border-b-[3px] hover:border-b-milk/50 transition-all leading-[17px] md:leading-[19px] md:tracking-[2.7px] ${
                moon ? "border-b-milk" : "border-b-transparent"
              }`}
            >
              MOON
            </Link>
          </li>
          <li>
            <Link
              to="/destination/mars"
              className={`font-barlow font-normal text-sm md:text-base extral:text-2xl text-milk tracking-[2.36px] pb-2 border-b-[3px] hover:border-b-milk/50 transition-all leading-[17px] md:leading-[19px] md:tracking-[2.7px] ${
                mars ? "border-b-milk" : "border-b-transparent"
              }`}
            >
              MARS
            </Link>
          </li>
          <li>
            <Link
              to="/destination/europa"
              className={`font-barlow font-normal text-sm md:text-base extral:text-2xl text-milk tracking-[2.36px] pb-2 border-b-[3px] hover:border-b-milk/50 transition-all leading-[17px] md:leading-[19px] md:tracking-[2.7px] ${
                europa ? "border-b-milk" : "border-b-transparent"
              }`}
            >
              EUROPA
            </Link>
          </li>
          <li>
            <Link
              to="/destination/titan"
              className={`font-barlow font-normal text-sm md:text-base extral:text-2xl text-milk tracking-[2.36px] pb-2 border-b-[3px] hover:border-b-milk/50 transition-all leading-[17px] md:leading-[19px] md:tracking-[2.7px] ${
                titan ? "border-b-milk" : "border-b-transparent"
              }`}
            >
              TITAN
            </Link>
          </li>
        </ul>

        <h1 className=" uppercase font-belle font-normal text-[3.5rem] md:text-[5rem] xll:text-[6.25rem] md:leading-[5.75rem] extral:text-[8rem] xll:leading-[7.18rem] lg:text-left tracking-normal text-milk text-center leading-[64px] mt-5 md:mt-8 xll:mt-9 extral:mt-12">
          {name}
        </h1>

        <p className=" font-barlow font-normal text-[0.9375rem] md:text-base xll:text-lg tracking-normal text-pur extral:text-2xl extral:leading-9 leading-[25px] md:leading-7 xll:leading-8 text-center md:mt-2 xll:mt-[14px] lg:text-left md:max-w-[573px] lg:max-w-sm xl:max-w-[410px] xll:max-w-[444px] extral:max-w-xl">
          {description}
        </p>

        <div className=" h-[1px] w-full md:max-w-[573px] bg-[#383B4B] my-8 md:mt-[49px] xll:mt-[54px] md:mb-[29px]"></div>

        <div className=" flex flex-col items-center md:flex-row md:justify-center lg:justify-start">
          <div className=" mb-8 md:mb-0 md:mr-20">
            <h6 className="text-center lg:text-left font-barlow font-normal text-sm extral:text-lg leading-[17px]  text-pur tracking-[2.36px]">
              AVG. DISTANCE
            </h6>
            <p className="text-center lg:text-left font-belle font-normal uppercase text-[1.75rem] extral:text-[2.5rem] tracking-normal leading-[32px] text-milk  mt-3">
              {distance}
            </p>
          </div>
          <div>
            <h6 className="text-center lg:text-left font-barlow font-normal uppercase text-sm extral:text-lg leading-[17px] r text-pur tracking-[2.36px]">
              Est. travel time
            </h6>
            <p className="text-center lg:text-left font-belle font-normal text-[1.75rem] extral:text-[2.5rem] leading-[32px] tracking-normal text-milk mt-3 uppercase">
              {travel}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planets;
