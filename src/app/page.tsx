import Image from "next/image";
import { FaCalendar, FaClock } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

export default function Home() {
  return (
    <div className="">
      <div className="mt-[8rem] px-12 flex justify-between items-center">
        <div className="flex-1">
          <h2 className="font-lilita-one text-[2.5rem] sub-shadow-head mb-2">
            Silicon Literary Club presents
          </h2>
          <h1>
            <span className="text-[7.5rem] shadow-head font-lalezar">
              Model United Nations
            </span>{" "}
            <span className="text-[6rem] shadow-head-sec font-lemon">2K25</span>
          </h1>
          <h3 className="font-lilita-one text-[2.5rem]">
            Shaping Tomorrow Through Diplomacy Today.
          </h3>
          <button className="font-lilita-one text-white bg-violet rounded-md px-8 mt-4 py-3 text-[1.25rem]">
            Register Now
          </button>
          <div className="flex gap-8 font-lilita-one text-blue mt-6">
            <div className="flex gap-4 items-center text-[1.75rem]">
              <FaCalendar />
              <p>22nd Feb 2025</p>
            </div>
            <div className="flex gap-4 items-center text-[1.75rem]">
              <FaClock />
              <p>1 pm onwards</p>
            </div>
            <div className="flex gap-4 items-center text-[1.75rem]">
              <MdLocationPin />
              <p>Gallery 1</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={"/assets/hero.svg"}
            height="600"
            width="600"
            alt="Hero Image"
          />
        </div>
      </div>
    </div>
  );
}
