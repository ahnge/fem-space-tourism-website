import React, { useEffect, useState } from "react";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { Menu } from "@headlessui/react";

const Nav = () => {
  const [home, setHome] = useState(false);
  const [destination, setDestination] = useState(false);
  const [crew, setCrew] = useState(false);
  const [technology, setTechnology] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setHome(false);
    setDestination(false);
    setCrew(false);
    setTechnology(false);

    if (location.pathname.includes("destination")) {
      setDestination(true);
    } else if (location.pathname.includes("crew")) {
      setCrew(true);
    } else if (location.pathname.includes("tech")) {
      setTechnology(true);
    } else {
      setHome(true);
    }
  }, [location.pathname]);

  return (
    <Menu
      as={"div"}
      className=" w-full flex justify-between items-center fixed top-0 left-0 lg:pt-8 extral:pt-12"
    >
      <div className="p-6 lg:ml-[55px] lg:p-0 lg:pr-[30px] xll:pr-[72px] extral:pr-[115px]">
        <img
          src={logo}
          alt="loggo"
          className="w-10 h-10 extral:w-20 extral:h-20"
        />
      </div>

      <div className=" flex-auto h-[1px] bg-milk/25 hidden relative lg:block z-20 after:content-[''] after:w-10 after:h-[1px] after:bg-milk/25 after:absolute after:top-0 after:left-full "></div>

      <Menu.Button className="p-6 md:hidden cursor-pointer">
        <img src={hamburger} alt="menu" className="w-6 h-[21px]" />
      </Menu.Button>

      <nav className="hidden md:flex px-12 lg:pl-[93px] xll:pl-[123px] lg:pr-[100px] xll:pr-[165px] bg-milk/5 backdrop-filter backdrop-blur">
        <Link
          to="/"
          className={`font-barlow text-sm lg:text-base extral:text-2xl font-normal tracking-[2.36px] xll:tracking-[2.7px] text-milk py-[39px] mr-9 border-b-[3px] hover:border-milk/50 transition ${
            home ? "border-milk " : "border-transparent"
          }`}
        >
          <span className="hidden lg:inline-block mr-[11px] font-bold">00</span>
          HOME
        </Link>
        <Link
          to="destination/moon"
          className={`font-barlow text-sm lg:text-base extral:text-2xl font-normal tracking-[2.36px] xll:tracking-[2.7px] text-milk py-[39px] mr-10 border-b-[3px] hover:border-milk/50 transition ${
            destination ? "border-milk" : "border-transparent"
          }`}
        >
          <span className="hidden lg:inline-block mr-[11px] font-bold">01</span>
          DESTINATION
        </Link>
        <Link
          to="crew/douglas"
          className={`font-barlow text-sm lg:text-base extral:text-2xl font-normal tracking-[2.36px] xll:tracking-[2.7px] text-milk py-[39px] mr-9 border-b-[3px] hover:border-milk/50 transition ${
            crew ? "border-milk " : "border-transparent"
          }`}
        >
          <span className="hidden lg:inline-block mr-[11px] font-bold">02</span>
          CREW
        </Link>
        <Link
          to="tech/launchvehicle"
          className={`font-barlow text-sm lg:text-base extral:text-2xl font-normal tracking-[2.36px] xll:tracking-[2.7px] text-milk py-[39px] border-b-[3px] hover:border-milk/50 transition ${
            technology ? "border-milk" : "border-transparent"
          }`}
        >
          <span className="hidden lg:inline-block mr-[11px] font-bold">03</span>
          TECHNOLOGY
        </Link>
      </nav>
      <MobileMenu states={{ home, destination, crew, technology }} />
    </Menu>
  );
};

export default Nav;
