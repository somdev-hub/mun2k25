"use client";

import { Timeline } from "@/components/ui/timeline";
import { JSX } from "react";
import Image from "next/image";
import { FaCalendar, FaClock } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { FaArrowRightLong } from "react-icons/fa6";
import { timeline } from "@/utils/timeline";
import Link from "next/link";
import { agenda } from "@/utils/agenda";
import Scroller from "@/components/scroller/Scroller";
import { judges, officials, organizers } from "@/utils/organizers";
import { countries } from "@/utils/countries";

export default function Home() {
  const timeline_data: {
    title: string;
    content: JSX.Element;
  }[] = timeline.map((item) => {
    return {
      title: item.time,
      content: (
        <div>
          <h2 className="text-[1.75rem] md:text-[2rem] text-violet mb-2">
            {item.heading}
          </h2>
          <p>{item.subheading}</p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            {item.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            ))}
          </div>
        </div>
      )
    };
  });

  return (
    <div className="">
      <div className="mt-[6rem] md:mt-[8rem] px-4 md:px-12 flex flex-col xl:flex-row justify-between items-center">
        <div className="md:flex-1">
          <h2 className="font-lilita-one text-[2rem] md:text-[2.5rem] sub-shadow-head mb-2">
            Silicon Literary Club presents
          </h2>
          <h1>
            <span className="text-[5.5rem] md:text-[7.5rem] shadow-head font-lalezar">
              Model United Nations{" "}
            </span>{" "}
            <span className="text-[4.5rem] md:text-[6rem] shadow-head-sec font-lemon">
              2K25
            </span>
          </h1>
          <h3 className="font-lilita-one text-[1.75rem] md:text-[2.5rem] mt-4 md:mt-0">
            Shaping Tomorrow Through Diplomacy Today.
          </h3>
          <Link href="/form">
            <button className="font-lilita-one text-white bg-violet rounded-md px-8 mt-4 py-3 text-[1.25rem] hover:bg-white hover:text-black hover:shadow-xl transition-colors duration-300 flex items-center gap-2 group">
              Register Now
              <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-2" />
            </button>
          </Link>
          <div className="flex flex-wrap gap-4 md:gap-8 font-lilita-one text-blue mt-6">
            <div className="flex gap-4 items-center text-[1.5rem] md:text-[1.75rem]">
              <FaCalendar />
              <p>22nd Feb 2025</p>
            </div>
            <div className="flex gap-4 items-center text-[1.5rem] md:text-[1.75rem]">
              <FaClock />
              <p>1 pm onwards</p>
            </div>
            <div className="flex gap-4 items-center text-[1.5rem] md:text-[1.75rem]">
              <MdLocationPin />
              <p>Gallery 1</p>
            </div>
          </div>
        </div>
        <div className="md:flex-1 flex items-center justify-center mt-4 md:mt-0">
          <Image
            src={"/assets/hero.svg"}
            height="600"
            width="600"
            alt="Hero Image"
          />
        </div>
      </div>

      <div className="mt-8 md:mt-12 px-4 md:px-12 py-8 bg-[#eeeeee] flex flex-col lg:flex-row items-center justify-between">
        <div className="flex-1 flex items-center justify-center mb-8 md:mb-0">
          <Image
            src={"/assets/literary-logo.svg"}
            height="250"
            width="250"
            alt="Literary Logo"
          />
        </div>
        <div className="flex-1">
          <p className="text-[1.8rem]">ORGANIZED BY</p>
          <h1 className="text-[2.5rem] text-blue">Silicon Literary Club</h1>
          <p className="mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            rerum dicta unde quas consequatur accusamus ad! Minima molestiae,
            harum provident tempore libero commodi maxime, a ratione enim,
            tenetur quos inventore vero perferendis! Temporibus incidunt dicta
            tempore ut accusantium expedita est repellat exercitationem beatae
            pariatur neque, a atque quas debitis dolorum! Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Beatae quasi blanditiis, expedita
            consequuntur voluptatibus quos eaque repudiandae perferendis
            voluptas. Magni doloribus debitis nostrum id at?
          </p>
        </div>
      </div>

      <div className="mt-[6rem] px-4">
        <h1 className="text-center text-[2.25rem] md:text-[2.5rem]">
          TIMELINE
        </h1>
        <div className="mt-4">
          <Timeline data={timeline_data} />
        </div>
      </div>

      <div className="mt-[6rem] px-8 lg:px-[8rem] py-[4rem] bg-[#eeeeee]">
        <h1 className="text-center text-[2.25rem] md:text-[2.5rem]">
          COMMITTEES
        </h1>
        <div className="hidden md:flex mt-12 flex-wrap gap-[8rem] justify-center items-end">
          <Image
            src={"/assets/disec.svg"}
            height="150"
            width="150"
            alt="disec"
          />
          <Image
            src={"/assets/unhrc.svg"}
            height="150"
            width="150"
            alt="unhrc"
          />
          <Image src={"/assets/unep.svg"} height="150" width="150" alt="unep" />
        </div>
        <div className="mt-12 flex md:hidden flex-wrap gap-[4rem] justify-center items-end">
          <Image
            src={"/assets/disec.svg"}
            height="100"
            width="100"
            alt="disec"
          />
          <Image
            src={"/assets/unhrc.svg"}
            height="100"
            width="100"
            alt="unhrc"
          />
          <Image src={"/assets/unep.svg"} height="100" width="100" alt="unep" />
        </div>
        <h1 className="text-center text-[2.25rem] md:text-[2.5rem] mt-[4rem]">
          COUNTRIES
        </h1>
        <div className="mt-12 flex flex-wrap gap-6 md:gap-12 items-center justify-between">
          {countries.map((country, index) => (
            <div
              key={index}
              className="flex items-center justify-center md:h-[5rem] md:w-[8rem] h-[3rem] w-[5rem] relative"
            >
              <Image
                src={`https://flagcdn.com/${country.toLowerCase()}.svg`}
                alt={country}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 md:mt-[6rem] px-4 lg:px-[4rem] xl:px-[8rem] py-6">
        <h1 className="text-center text-[2.25rem] md:text-[2.5rem]">
          AGENDA FOR DISCUSSION AND DELIBERATION
        </h1>
        <div className="mt-8 md:mt-[4rem]">
          <Accordion type="single" collapsible>
            {agenda.map((item, index) => (
              <AccordionItem key={index} value={index.toString()}>
                <AccordionTrigger>
                  <h2 className="text-[1.25rem] md:text-[1.5rem] font-days-one">
                    {item.title}
                  </h2>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-[1.125rem] md:text-[1.25rem] font-lalezar">
                    {item.description}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <div className="mt-8 bg-[#eeeeee] px-4 lg:px-[4rem] xl:px-[8rem] py-[4rem]">
        <div className="">
          <h1 className="text-center text-[2.5rem]">JUDGES</h1>
          <div className="mt-4">
            <div className="grid md:grid-rows-3 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 gap-8">
              {judges.map((person, index) => (
                <div
                  key={index}
                  className="flex bg-white shadow-md rounded-2xl items-center"
                >
                  <div className="w-[20%] h-full rounded-l-2xl relative">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-l-2xl h-full w-[20%]"
                    />
                  </div>
                  <div className="w-[80%] py-2 px-4 overflow-hidden">
                    <h2 className="text-[1.5rem] font-lilita-one">
                      {person.name}
                    </h2>
                    <div className="marquee">
                      <div className="marquee-content">
                        <span className=" font-montserrat font-[600]">
                          {person.position}
                        </span>
                        <span className=" font-montserrat font-[600]">
                          {person.position}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-[4rem]">
          <h1 className="text-center text-[2.5rem]">HOUSE OFFICIALS</h1>
          <div className="mt-4">
            <div className="flex flex-col md:flex-row w-full gap-8 justify-center">
              {officials.map((person, index) => (
                <div
                  key={index}
                  className="flex bg-white shadow-md rounded-2xl items-center w-full md:w-[25rem]"
                >
                  <div className="w-[20%] h-full rounded-l-2xl relative">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-l-2xl h-full w-[20%]"
                    />
                  </div>
                  <div className="py-2 ml-4">
                    <h2 className="text-[1.5rem] font-lilita-one">
                      {person.name}
                    </h2>
                    <p className="] font-montserrat font-[600]">
                      {person.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-[4rem]">
          <h1 className="text-center text-[2.5rem]">ORGANIZERS</h1>
          <div className="mt-4">
            <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 md:gap-8">
              {organizers.map((person, index) => (
                <div
                  key={index}
                  className="flex bg-white shadow-md rounded-2xl items-center"
                >
                  <div className="w-[20%] h-full rounded-l-2xl relative">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-l-2xl h-full w-[20%]"
                    />
                  </div>
                  <div className="py-2 ml-4">
                    <h2 className="text-[1.5rem] font-lilita-one">
                      {person.name}
                    </h2>
                    <p className=" font-montserrat font-[600]">
                      {person.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="my-16 px-4 lg:px-[4rem] xl:px-[8rem]">
        <div className="rounded-2xl bg-pink px-[2rem] py-[2rem] flex flex-col md:flex-row justify-between ">
          <div className="flex-1 flex items-center justify-center border-solid border-b-2 md:border-b-0 md:border-r-2 md:mr-12 mb-12 md:mb-0 pb-6 md:pb-0 border-white">
            <Image
              src={"/assets/mun-logo.svg"}
              height="350"
              width="350"
              alt="MUN Logo"
              className="mun-shadow block md:hidden lg:block"
            />
            <Image
              src={"/assets/mun-logo.svg"}
              height="300"
              width="300"
              alt="MUN Logo"
              className="mun-shadow hidden md:block lg:hidden"
            />
          </div>
          <div className="flex-1 flex flex-col gap-8 md:gap-0 justify-evenly">
            <div className="text-white ">
              <h2 className="text-[2.25rem] lg:text-[2.5rem]">
                Rules and guidelines of MUN
              </h2>
              <Link href="/guidelines" className="w-fit block">
                <div className="flex gap-4 items-center text-[1.5rem] group w-fit">
                  <p>Read here</p>
                  <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </Link>
            </div>
            <div className="text-white ">
              <h2 className="text-[2.25rem] lg:text-[2.5rem]">
                Download position paper template
              </h2>
              <div className="flex gap-4 items-center text-[1.5rem] w-fit">
                <p>Download here</p>
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Scroller />
    </div>
  );
}
