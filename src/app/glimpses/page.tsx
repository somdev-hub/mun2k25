"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { BiMenuAltLeft } from "react-icons/bi";
import { glimpses } from "@/utils/glimpses-data";
import { IoIosArrowDown } from "react-icons/io";
import { useSidebar } from "@/components/context/SidebarContext";
import Scroller from "@/components/scroller/Scroller";

const Glimpses = () => {
  const { showSidebar, setShowSidebar } = useSidebar();

  // const [showSidebar, setShowSidebar] = useState(false);
  const [selectedGlimpse, setSelectedGlimpse] = useState("MUN 2024");
  const [visibleGlimpses, setVisibleGlimpses] = useState(["MUN 2024"]);

  const subtopicRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [selectedSubtopic, setSelectedSubtopic] = useState(
    "John Doe (France) awarded Best Delegate"
  );

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
    <div className="bg-[#eeeeee] mt-12 lg:pr-12 flex min-h-screen">
      <div
        className={`fixed h-full overflow-y-scroll sm:overflow-auto xl:h-auto xl:static ${
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
                  className={`font-[600] transition-transform duration-300 ${
                    visibleGlimpses.includes(glimpse.edition)
                      ? "rotate-180"
                      : ""
                  }`}
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
                    <li
                      key={key}
                      className="text-[1rem] font-lalezar cursor-pointer hover:text-violet"
                      onClick={() => {
                        setSelectedSubtopic(item.heading);
                        // setVisibleGuideline([key]);
                        setSelectedGlimpse(glimpse.edition);
                        if (showSidebar) {
                          setShowSidebar(false);
                        }
                      }}
                    >
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
        <h2 className="text-[2rem]">
          {
            glimpses.find((glimpse) => glimpse.edition === selectedGlimpse)
              ?.title
          }
        </h2>

        {glimpses.map((glimpse) => {
          if (glimpse.edition === selectedGlimpse) {
            return glimpse.content.map((item, key) => (
              <div
                className="mt-8"
                key={key}
                ref={(el) => {
                  subtopicRefs.current[item.heading] = el;
                }}
              >
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
                    <div className="w-full md:w-[50%] xl:w-[30%] aspect-[4/3] relative">
                    <Image
                      src={item.images[0]}
                      alt="Best Delegate"
                      fill
                      style={{ objectFit: "cover", borderRadius: "1rem" }}
                      // alt="Best Delegate"
                    />
                    </div>
                  <div className=" md:w-[50%] xl:w-[70%]">
                    <p className="font-days-one text-justify">
                      {item.description[0]}
                    </p>
                  </div>
                </div>

                {item.description.length > 1 &&
                  item.description.map(
                    (desc, key) =>
                      key != 0 && (
                        <p
                          className="mt-4 font-days-one text-justify"
                          key={key}
                        >
                          {desc}
                        </p>
                      )
                  )}
                <div className="mt-4 flex flex-wrap gap-4 items-center">
                  {item.images.length > 1 &&
                    item.images.map(
                      (image, key) =>
                        key != 0 && (
                          <div
                            className="w-[10rem] h-[6rem] md:w-[14rem] md:h-[10rem] relative"
                            key={key}
                          >
                            <Image
                              src={image}
                              alt="Best Delegate"
                              fill
                              style={{
                                objectFit: "cover",
                                borderRadius: "1rem"
                              }}
                              // alt="Best Delegate"
                            />
                          </div>
                        )
                    )}
                </div>
              </div>
            ));
          }
        })}
      </div>

      <Scroller />
    </div>
  );
};

export default Glimpses;
