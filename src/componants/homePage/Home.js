import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-black bg-cover bg-center bg-no-repeat bg-home-mobile md:bg-home-teblet lg:bg-home-desktop">
      <div className=" pt-[112px] px-6 md:pt-[202px] md:px-[162px] md:pb-[90px] xl:flex xl:pt-[350px] xll:pt-[387px] xll:px-[165px] xl:justify-between extral:px-[250px] extral:pt-[450px]">
        <div className=" flex flex-col items-center xl:items-start xll:flex-1">
          <h5 className="font-barlow text-base leading-[1.19rem] text-pur tracking-[0.17rem] text-center font-normal md:text-xl md:leading-6 md:tracking-[0.21rem] xl:text-left xll:text-[1.75rem] xll:leading-[2.13rem] extral:text-[2.75rem]">
            SO, YOU WANT TO TRAVEL TO
          </h5>
          <h1 className=" font-belle text-[5rem] leading-[6.25rem] text-milk mt-4 tracking-normal text-center font-normal md:text-[9.38rem] md:leading-[9.38rem] md:mt-6 xll:leading-[10.75rem] xl:text-left extral:text-[12.28rem] extral:leading-[13rem]">
            SPACE
          </h1>
          <p className=" font-barlow text-[0.94rem] leading-[1.56rem] text-pur mt-4 text-center tracking-normal font-normal md:text-base md:leading-7 md:mt-6 xl:text-left xll:text-[1.13rem] xll:leading-[2rem] lg:max-w-[444px] extral:text-[1.5rem] extral:max-w-[600px]">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className=" flex justify-center mt-[81px] xll:mt-0 xll:flex-1 xl:items-end xl:justify-end">
          <Link
            className=" w-[150px] h-[150px] rounded-full bg-milk font-belle text-xl leading-[1.44rem] tracking-[0.08rem] text-space font-normal flex justify-center items-center md:w-[242px] md:h-[242px] md:text-[2rem] md:leading-[2.31rem] xll:w-[274px] xll:h-[274px] extral:w-[300px] extral:h-[300px] extral:text-[2.5rem] relative after:content-[''] after:absolute after:w-0 after:h-0 after:rounded-full after:bg-milk/10 hover:after:w-[200px] hover:after:h-[200px] after:transition-all md:hover:after:w-[320px] md:hover:after:h-[320px] xll:hover:after:w-[400px] xll:hover:after:h-[400px]"
            to="destination/moon"
          >
            EXPLORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
