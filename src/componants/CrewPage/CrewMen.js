import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const CrewMen = ({ data, img }) => {
  const { name, role, bio } = data;

  const [douglas, setDouglas] = useState(false);
  const [mark, setMark] = useState(false);
  const [victor, setVictor] = useState(false);
  const [ansari, setAnsari] = useState(false);
  const [visible, setVisible] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 200);

    setDouglas(false);
    setMark(false);
    setVictor(false);
    setAnsari(false);
    if (location.pathname === "/crew/douglas") {
      setDouglas(true);
    } else if (location.pathname === "/crew/mark") {
      setMark(true);
    } else if (location.pathname === "/crew/victor") {
      setVictor(true);
    } else {
      setAnsari(true);
    }

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`mt-8 md:mt-[60px] flex flex-col md:flex-col-reverse lg:flex-row-reverse lg:mt-0 transition-all ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className=" w-full border-b border-[#383B48] md:mt-10 xll:mt-0 lg:border-none md:flex-1 lg:relative">
        <img
          src={img}
          alt="douglas"
          className="w-auto h-[222px] md:h-[532px] lg:h-[550px] mx-auto lg:absolute xll:h-[712px] extral:h-[812px] lg:-top-13 xll:-top-16"
        />
      </div>

      <div className="flex flex-col items-center mt-8 md:mt-0 lg:flex-[1.5] lg:items-start">
        <ul className="flex flex-row space-x-4 md:hidden">
          <Link
            to="/crew/douglas"
            className={`w-[10px] h-[10px] bg-milk hover:opacity-50 rounded-full ${
              douglas ? "opacity-100 " : "opacity-20"
            }`}
          ></Link>
          <Link
            to="/crew/mark"
            className={`w-[10px] h-[10px] bg-milk hover:opacity-50 rounded-full ${
              mark ? "opacity-100 " : "opacity-20"
            }`}
          ></Link>
          <Link
            to="/crew/victor"
            className={`w-[10px] h-[10px] bg-milk hover:opacity-50 rounded-full ${
              victor ? "opacity-100 " : "opacity-20"
            }`}
          ></Link>
          <Link
            to="/crew/ansari"
            className={`w-[10px] h-[10px] bg-milk hover:opacity-50 rounded-full ${
              ansari ? "opacity-100 " : "opacity-20"
            }`}
          ></Link>
        </ul>

        <h5 className=" uppercase text-base leading-[18px] font-belle tracking-normal text-milk/50 mt-8 md:mt-0 md:text-2xl md:leading-[26px] extral:text-5xl extral:mt-[200px] lg:mt-[154px] xll:text-[2rem] xll:leading-9">
          {role}
        </h5>

        <h3 className=" uppercase text-milk font-belle text-2xl leading-7 tracking-normal mt-2 md:text-[2.5rem] md:leading-[48px] xll:text-[3.5rem] extral:text-7xl xll:leading-[64px] lg:mt-3 xll:mt-[15px]">
          {name}
        </h3>

        <p className=" font-barlow text-pur text-[0.94rem] font-normal tracking-normal leading-[25px] mt-4 text-center max-w-[458px] md:text-base md:leading-7 extral:text-2xl extral:max-w-xl lg:text-base xll:text-lg xll:leading-8 xll:mt-7 lg:text-left">
          {bio}
        </p>

        <ul className="hidden md:flex flex-row space-x-4 mt-10 lg:mt-[120px] lg:mb-[90px]">
          <Link
            to="/crew/douglas"
            className={`w-[10px] h-[10px] xll:w-[15px] xll:h-[15px] bg-milk hover:opacity-50 rounded-full ${
              douglas ? "opacity-100 " : "opacity-20"
            }`}
          ></Link>
          <Link
            to="/crew/mark"
            className={`w-[10px] h-[10px] xll:w-[15px] xll:h-[15px] bg-milk hover:opacity-50 rounded-full ${
              mark ? "opacity-100 " : "opacity-20"
            }`}
          ></Link>
          <Link
            to="/crew/victor"
            className={`w-[10px] h-[10px] xll:w-[15px] xll:h-[15px] bg-milk hover:opacity-50 rounded-full ${
              victor ? "opacity-100 " : "opacity-20"
            }`}
          ></Link>
          <Link
            to="/crew/ansari"
            className={`w-[10px] h-[10px] xll:w-[15px] xll:h-[15px] bg-milk hover:opacity-50 rounded-full ${
              ansari ? "opacity-100 " : "opacity-20"
            }`}
          ></Link>
        </ul>
      </div>
    </div>
  );
};

export default CrewMen;
