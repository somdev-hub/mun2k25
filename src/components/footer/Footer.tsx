import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-blue px-8 xl:px-[5.5rem] py-12  flex flex-col sm:flex-row items-center justify-between text-white gap-8 md:gap-16">
        <div className=" flex flex-col sm:flex-row items-center justify-center">
          <div className="flex gap-4 md:gap-8 items-center md:flex-col lg:flex-row justify-around">
            <div className="h-[7rem] w-[7rem] lg:h-[10rem] lg:w-[11rem] flex items-center justify-center relative">
              <Image
                loading="lazy"
                src={"/assets/literary-logo-white.svg"}
                style={{ objectFit: "contain" }}
                fill
                alt="literary-logo-white"
              />
            </div>

            <div className="lg:w-[12rem] lg:h-[5rem] w-[12rem] h-[5rem] flex items-center justify-center md:mt-4 lg:mt-0 relative">
              <Image
                src="/assets/silicon-logo.png"
                className="w-full h-full"
                alt="silicon-logo"
                // layout="fill"
                fill
                // objectFit="cover"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
        <div className=" flex xl:gap-12 flex-col lg:flex-row  mt-8 sm:mt-0">
          <div className="">
            <p className="font-[600] text-[1.5rem] underline">VENUE</p>
            <p className=" mt-2 text-[1.125rem]">
              Gallery 1, <br />
              Silicon Institute of Technology <br />
              Silicon West, Sason, Sambalpur, Odisha, Pin: 768200
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <p className="font-[600] text-[1.5rem] underline md:mt-2 xl:mt-0">
              CONTACT
            </p>
            <p className="mt-2 text-[1.125rem]">
              Somdev Behera (Secretary, Literary Club) : +917978699617 <br />
              {/* Satyabrat Panigrahi (Secretary General) : +917853998437 <br /> */}
              Saswat Ranjan Pattnaik (Coordinator, Literary Club) :
              +918249097228 <br />
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black py-2">
        <p className="text-white text-center text-[0.75rem] font-montserrat font-[500]">
          &copy; 2025 Silicon Literary Club. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
