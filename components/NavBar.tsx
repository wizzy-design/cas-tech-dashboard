"use client";

import { useState } from "react";
import menu from "../public/icons/nav/menu.svg";
import profile from "../public/icons/nav/person.svg";
import setting from "../public/icons/nav/setting.svg";
import bell from "../public/icons/nav/bell.svg";
import search from "../public/icons/nav/search.svg";
import { IoMdClose } from "react-icons/io";
import NavOptions from "./NavOptions";
import Image from "next/image";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="">
      <div className="flex justify-between items-center">
        {/* Menu Button */}
        <button className="lg:hidden" onClick={toggleNav}>
          <Image src={menu} alt="Menu Button" className="w-[1.5rem]" />
        </button>

        {/* Dashboard Label */}
        <div className="hidden lg:flex lg:flex-col">
          <p className="text-[12px]">
            <span className="text-[#A0AEC0]">Pages</span> / Dashboard
          </p>
          <h2 className="text-[#2D3748] font-bold">Dashboard</h2>
        </div>

        <div className="lg:flex items-center">
          {/* Search Bar for Desktop */}
          <div className="hidden p-2 lg:flex items-center bg-white border-solid border-[#E2E8F0] border-[1px] rounded-[16px]">
            <Image src={search} alt="Search icon" className="w-[15px] mx-2" />
            <input
              type="text"
              placeholder="Type here..."
              className="placeholder:text-[#A0AEC0]"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center lg:gap-x-2">
            <button className="flex gap-1 items-center px-4">
              <Image
                src={profile}
                alt="Profile"
                className="w-[1.5rem] lg:w-[1rem]"
              />{" "}
              <span className="font-bold text-[#718096]">Sign In</span>
            </button>
            <button>
              <Image
                src={setting}
                alt="Setting"
                className="w-[1.5rem] lg:w-[1rem]"
              />
            </button>
            <button>
              <Image src={bell} alt="Bell" className="w-[1.5rem] lg:w-[1rem]" />
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar for Mobile */}
      <div className="p-2 my-5 flex items-center bg-white border-solid border-[#E2E8F0] border-[1px] rounded-[16px] lg:hidden">
        <Image src={search} alt="Search icon" className="w-[15px] mx-2" />
        <input
          type="text"
          placeholder="Type here..."
          className="placeholder:text-[#A0AEC0]"
        />
      </div>

      {/* Sliding NavOptions */}
      <div
        className={`fixed top-0 left-0 z-50 h-full transform bg-[#F8F9FA] w-[20rem] px-4 py-4 mt-2 ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        {/* Close Button at Top Right */}
        <div className="flex justify-end">
          <button onClick={toggleNav}>
            <IoMdClose className="text-2xl" />
          </button>
        </div>
        <NavOptions />
      </div>
    </nav>
  );
};

export default NavBar;
