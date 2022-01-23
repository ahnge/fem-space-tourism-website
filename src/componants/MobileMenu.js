import React from "react";
import { Link } from "react-router-dom";
import cross from "../assets/shared/icon-close.svg";
import { Menu } from "@headlessui/react";

const MobileMenu = ({ states }) => {
  let { home, destination, crew, technology } = states;

  return (
    <Menu.Items className=" absolute w-[254px] h-screen top-0 right-0 backdrop-blur-lg bg-pur/10 flex flex-col pt-[118px] pl-8 space-y-4 z-50">
      <Menu.Button>
        <img
          src={cross}
          alt="x"
          className=" absolute top-[34px] right-[26px]"
        />
      </Menu.Button>
      <Menu.Item>
        <Link
          to="/"
          className={`font-barlow font-normal text-base text-milk border-r-4 ${
            home ? "border-milk " : "border-transparent"
          }`}
        >
          <span className="font-bold mr-3">00</span>HOME
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          to="destination/moon"
          className={`font-barlow font-normal text-base text-milk border-r-4 ${
            destination ? "border-milk " : "border-transparent"
          }`}
        >
          <span className="font-bold mr-3">01</span>DESTINATION
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          to="crew/douglas"
          className={`font-barlow font-normal text-base text-milk border-r-4 ${
            crew ? "border-milk " : "border-transparent"
          }`}
        >
          <span className="font-bold mr-3">02</span>CREW
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          to="tech/launchvehicle"
          className={`font-barlow font-normal text-base text-milk border-r-4 ${
            technology ? "border-milk " : "border-transparent"
          }`}
        >
          <span className="font-bold mr-3">03</span>TECHNOLOGY
        </Link>
      </Menu.Item>
    </Menu.Items>
  );
};

export default MobileMenu;
