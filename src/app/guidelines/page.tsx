"use client";

import React, { useEffect, useRef, useState } from "react";
import { guidelines } from "@/utils/guidelines";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useSidebar } from "@/components/context/SidebarContext";
import Scroller from "@/components/scroller/Scroller";

const Guidelines = () => {
  const { showSidebar, setShowSidebar } = useSidebar();
  const [selectedGuideline, setSelectedGuideline] = useState("Introduction");
  const [visibleGuideline, setVisibleGuideline] = useState(["Introduction"]);
  // const [showSidebar, setShowSidebar] = useState(false);
  const [selectedSubtopic, setSelectedSubtopic] = useState("What is MUN?");
  const subtopicRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (subtopicRefs.current[selectedSubtopic]) {
      const offset = 100;
      const element = subtopicRefs.current[selectedSubtopic];
      const top =
        element?.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, [selectedSubtopic]);
  return (
    <div
      className={` bg-[#eeeeee] mt-12 lg:pr-12 flex min-h-screen overflow-x-hidden`}
    >
      <div
        className={`z-[20] pb-12 overflow-y-scroll sm:overflow-auto fixed h-full xl:h-auto xl:static ${
          showSidebar ? "left-0" : "left-[-100dvw]"
        } px-4 lg:px-12 pt-12 min-w-[20%]  bg-white border-solid border-r-[1px] border-[#e0e0e0] transition-all duration-300 ease-in-out`}
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
          {Object.keys(guidelines).map((key) => (
            <div className="" key={key}>
              <li
                className={`text-[1.125rem] cursor-pointer hover:text-violet flex justify-between items-center ${
                  selectedGuideline === key ? "text-pink" : ""
                }`}
              >
                <span
                  onClick={() => {
                    setSelectedGuideline(key);
                    setVisibleGuideline([key]);
                    setShowSidebar(false);
                  }}
                >
                  {key}
                </span>
                <IoIosArrowDown
                  className={`font-[600] transition-transform duration-300 ${
                    visibleGuideline.includes(key) ? "rotate-180" : ""
                  }`}
                  onClick={() => {
                    if (visibleGuideline.includes(key)) {
                      setVisibleGuideline((prev) =>
                        prev.filter((item) => item !== key)
                      );
                    } else {
                      setVisibleGuideline((prev) => [...prev, key]);
                    }
                  }}
                />
              </li>
              <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                  visibleGuideline.includes(key) ? "max-h-screen" : "max-h-0"
                }`}
              >
                <ul className="list-none ml-3 mt-3 flex flex-col gap-3">
                  {guidelines[key].map((item, key2) => (
                    <li
                      key={key2}
                      className="text-[1rem] font-lalezar cursor-pointer hover:text-violet"
                      onClick={() => {
                        setSelectedSubtopic(item.title);
                        // setVisibleGuideline([key]);
                        setSelectedGuideline(key);
                        if (showSidebar) {
                          setShowSidebar(false);
                        }
                      }}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </ul>
      </div>

      <div
        className={`lg:ml-12 xl:ml-6 mt-12 pb-12 px-4 lg:px-0 ${
          showSidebar ? "overflow-hidden " : ""
        }`}
        onClick={() => {
          if (showSidebar) {
            setShowSidebar(false);
          }
        }}
      >
        <div className="border-solid  py-2 border-blue flex items-center xl:hidden mb-4">
          <div className="">
            <BiMenuAltLeft
              className="text-[2rem]"
              onClick={() => {
                setShowSidebar(!showSidebar);
              }}
            />
          </div>
          <div className="flex-1">
            <p className="text-center text-[1.5rem]">Guidelines</p>
          </div>
        </div>
        <h2 className="text-[2rem]">{selectedGuideline}</h2>
        {guidelines[selectedGuideline].map((item, key) => (
          <div
            key={key}
            className="mt-4"
            ref={(el) => {
              subtopicRefs.current[item.title] = el;
            }}
          >
            <h3 className="text-[1.5rem] font-lilita-one text-violet">
              {item.title}
            </h3>
            {item.images &&
              item.images.length > 0 &&
              item.images.map((image, key) => {
                return (
                  <Image
                    key={key}
                    src={image}
                    alt={item.title}
                    width={200}
                    height={200}
                  />
                );
              })}
            <p className=" font-days-one mt-2 text-justify">{item.content}</p>
          </div>
        ))}
      </div>

      <Scroller />
    </div>
  );
};

export default Guidelines;
