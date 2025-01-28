"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { BiMenuAltLeft } from "react-icons/bi";
import { glimpses } from "@/utils/glimpses-data";
import { IoIosArrowDown } from "react-icons/io";

const Glimpses = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedGlimpse, setSelectedGlimpse] = useState("MUN 2024");
  const [visibleGlimpses, setVisibleGlimpses] = useState(["MUN 2024"]);
  return (
    <div className="bg-[#eeeeee] mt-12 lg:pr-12 flex min-h-screen">
      <div
        className={`fixed h-full xl:h-auto xl:static ${
          showSidebar ? "left-0" : "left-[-100dvw]"
        } px-4 lg:px-12 pt-12 min-w-[20%] max-w-[80%]  bg-white border-solid border-r-[1px] border-[#e0e0e0] transition-all duration-300 ease-in-out z-[15]`}
      >
        <div className="xl:hidden flex gap-4 items-center mb-4">
          <FaArrowLeftLong
            className="text-[1.5rem] flex"
            onClick={() => {
              setShowSidebar(false);
            }}
          />

          <h2 className="text-[2rem]">Contents</h2>
        </div>
        <h2 className="text-[2rem] hidden lg:block">Contents</h2>

        <ul className="list-none font-lilita-one list-inside mt-4 flex flex-col gap-4">
          {glimpses.map((glimpse, key) => (
            <div className="" key={key}>
              <li
                className={`text-[1.125rem] cursor-pointer hover:text-violet flex justify-between items-center ${
                  selectedGlimpse === glimpse.edition ? "text-pink" : ""
                }`}
              >
                <span
                  onClick={() => {
                    setSelectedGlimpse(glimpse.edition);
                    setVisibleGlimpses([glimpse.edition]);
                    setShowSidebar(false);
                  }}
                >
                  {glimpse.edition}
                </span>
                <IoIosArrowDown
                  className="font-[600]"
                  onClick={() => {
                    if (visibleGlimpses.includes(glimpse.edition)) {
                      setVisibleGlimpses((prev) =>
                        prev.filter((item) => item !== glimpse.edition)
                      );
                    } else {
                      setVisibleGlimpses((prev) => [...prev, glimpse.edition]);
                    }
                  }}
                />
              </li>
              <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                  visibleGlimpses.includes(glimpse.edition)
                    ? "max-h-screen"
                    : "max-h-0"
                }`}
              >
                <ul className="list-none ml-3 mt-3 flex flex-col gap-3">
                  {glimpse.content.map((item, key) => (
                    <li key={key} className="text-[1rem] font-lalezar">
                      {item.heading}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </ul>
      </div>

      <div
        className={`ml-0 lg:ml-12 xl:ml-6 mt-12 pb-12 px-4 lg:px-0 w-full ${
          showSidebar ? "overflow-hidden  " : ""
        }`}
        onClick={() => {
          if (showSidebar) {
            setShowSidebar(false);
          }
        }}
      >
        <div className="border-solid  py-2 border-blue flex items-center xl:hidden mb-4 w-full">
          <div className="">
            <BiMenuAltLeft
              className="text-[2rem]"
              onClick={() => {
                setShowSidebar(!showSidebar);
              }}
            />
          </div>
          <div className="flex-1">
            <p className="text-center text-[1.5rem]">Glimpses</p>
          </div>
        </div>
        <h2 className="text-[2rem]">Model United Nations 2024 glimpses</h2>

        {glimpses.map((glimpse) => {
          if (glimpse.edition === selectedGlimpse) {
            return glimpse.content.map((item, key) => (
              <div className="mt-8" key={key}>
                <h3
                  className={`text-[1.5rem] font-lilita-one text-violet ${
                    key % 2 == 0 ? "text-right" : "text-left"
                  } border-solid border-purple border-b-2 pb-4`}
                >
                  {item.heading}
                </h3>
                <div
                  className={`flex flex-col ${
                    key % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-6 mt-4`}
                >
                  <div className="w-full md:w-[50%] xl:w-[30%] h-[16rem] relative">
                    <Image
                      src={item.images[0]}
                      alt="Best Delegate"
                      fill
                      style={{ objectFit: "cover" }}
                      // alt="Best Delegate"
                    />
                  </div>
                  <div className=" md:w-[70%]">
                    <p className="font-days-one text-justify">
                      {item.description[0]}
                    </p>
                  </div>
                </div>

                {item.description.length > 1 &&
                  item.description.map((desc, key) => (
                    <p className="mt-4 font-days-one text-justify" key={key}>
                      {desc}
                    </p>
                  ))}
                <div className="mt-4 flex flex-wrap gap-4 items-center">
                  {item.images.length > 1 &&
                    item.images.map((image, key) => (
                      <div
                        className="w-[10rem] h-[6rem] md:w-[14rem] md:h-[10rem] relative"
                        key={key}
                      >
                        <Image
                          src={image}
                          alt="Best Delegate"
                          fill
                          style={{ objectFit: "cover" }}
                          // alt="Best Delegate"
                        />
                      </div>
                    ))}
                </div>
              </div>
            ));
          }
        })}
      </div>
    </div>
  );
};

export default Glimpses;
