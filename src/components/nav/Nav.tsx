"use client";

import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-[50] shadow">
      <div className="flex justify-between items-center py-2 px-4 lg:px-12 bg-blue">
        <div className="">
          <Link href={"/"}>
            <div>
              <span
                className={`font-lalezar text-white  sm-text-shadow text-[2.5rem]`}
              >
                MUN{" "}
              </span>
              <span className="font-days-one text-white sm-text-shadow-violet text-[2rem] ">
                2025
              </span>
            </div>
          </Link>
        </div>
        <div className="hidden md:flex gap-12 items-center">
          <ul className="flex gap-4 text-white font-lilita-one text-[1.125rem] items-center">
            <li className="hover:text-pink transition-all duration-300">
              <Link href="/glimpses">Glimpses</Link>
            </li>
          </ul>
          <Link href="/form">
            <button className="bg-white text-black px-6 font-lilita-one text-[1.125rem] py-2 rounded-md hover:bg-pink hover:text-white transition-all duration-300">
              Register now
            </button>
          </Link>
        </div>
        <div className="block sm:hidden">
          <GiHamburgerMenu
            className={`text-white sm:hidden text-[1.75rem] transition-transform duration-300 ${
              showDropdown ? "rotate-90" : "rotate-0"
            }`}
            onClick={() => {
              setShowDropdown(!showDropdown);
            }}
          />
        </div>
      </div>
      <div
        className={`
            ${showDropdown ? "max-h-screen" : "max-h-0"}
            overflow-hidden transition-max-height duration-500 ease-in-out
            `}
      >
        <div className="bg-white py-4 flex flex-col justify-center items-center gap-4">
          <ul className="flex gap-4 text-black font-lilita-one text-[1.125rem] items-center">
            <li
              className="hover:text-pink transition-all duration-300"
              onClick={() => {
                setShowDropdown(false);
              }}
            >
              <Link href="/glimpses">Glimpses</Link>
            </li>
          </ul>
          <Link href="/form">
            <button
              className="bg-blue text-white px-6 font-lilita-one text-[1.125rem] py-2 rounded-md hover:bg-pink hover:text-white transition-all duration-300"
              onClick={() => {
                setShowDropdown(false);
              }}
            >
              Register now
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
