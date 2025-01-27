"use client";

import React, { useEffect, useState } from "react";
import { guidelines } from "@/utils/guidelines";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowLeftLong } from "react-icons/fa6";

const Guidelines = () => {
  const [selectedGuideline, setSelectedGuideline] = useState("Introduction");
  const [visibleGuideline, setVisibleGuideline] = useState(["Introduction"]);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="bg-[#eeeeee] mt-12 md:pr-12 flex min-h-screen">
      <div
        className={`fixed h-full md:h-auto md:static ${
          showSidebar ? "left-0" : "left-[-100dvw]"
        } px-4 md:px-12 pt-12 min-w-[20%]  bg-white border-solid border-r-[1px] border-[#e0e0e0] transition-all duration-300 ease-in-out`}
      >
        <div className="md:hidden flex gap-4 items-center mb-4">
          <FaArrowLeftLong
            className="text-[1.5rem] flex"
            onClick={() => {
              setShowSidebar(false);
            }}
          />

          <h2 className="text-[2rem]">Contents</h2>
        </div>
        <h2 className="text-[2rem] hidden md:block">Contents</h2>

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
                  className="font-[600]"
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
                  {guidelines[key].map((item, key) => (
                    <li key={key} className="text-[1rem] font-lalezar">
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
        className={`md:ml-6 mt-12 pb-12 px-4 md:px-0 ${
          showSidebar ? "overflow-hidden  " : ""
        }`}
        onClick={() => {
          if (showSidebar) {
            setShowSidebar(false);
          }
        }}
      >
        <div className="border-solid  py-2 border-blue flex items-center md:hidden mb-4">
          <div className="">
            <GiHamburgerMenu
              className="text-[1.5rem]"
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
          <div key={key} className="mt-4">
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

      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-purple text-white p-3 rounded-full shadow-lg hover:bg-pink transition-colors duration-300"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default Guidelines;
