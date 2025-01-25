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

export default function Home() {
  const data: {
    title: string;
    content: JSX.Element;
  }[] = [
    {
      title: "17th Feb, Monday",
      content: (
        <div>
          <h2 className="text-[2rem] text-violet mb-2">
            GROUP DISCUSSION PRELIMS
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            aspernatur distinctio at obcaecati fugiat error, nulla explicabo
            nesciunt a. Veniam, facilis! Reprehenderit at perspiciatis optio,
            rem impedit labore eius. Aliquid.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <Image
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      )
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      )
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      )
    }
  ];

  const timeline_data: {
    title: string;
    content: JSX.Element;
  }[] = timeline.map((item) => {
    return {
      title: item.time,
      content: (
        <div>
          <h2 className="text-[2rem] text-violet mb-2">{item.heading}</h2>
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

  const agenda = [
    "World Peace: steps taken to ensure peace",
    "Economic policies for healthy international trade",
    "Climate change and its impact on global economy",
    "Global health crisis: COVID-19 and its aftermath",
    "Scientific advancements and their impact on global economy",
    "Human rights violations in conflict zones",
    "Food security and sustainable agriculture",
    "International cooperation in space exploration",
    "Nuclear disarmament and non-proliferation"
  ];

  const judges: {
    name: string;
    image: string;
    position: string;
  }[] = [
    {
      name: "John Doe",
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      position: "Chief Guest"
    },
    {
      name: "John Doe",
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      position: "Chief Guest"
    },
    {
      name: "John Doe",
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      position: "Chief Guest"
    },
    {
      name: "John Doe",
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      position: "Chief Guest"
    },
    {
      name: "John Doe",
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      position: "Chief Guest"
    },
    {
      name: "John Doe",
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      position: "Chief Guest"
    }
  ];

  const houseOfficials: {
    name: string;
    image: string;
    position: string;
  }[] = [
    {
      name: "John Doe",
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      position: "Chief Guest"
    },
    {
      name: "John Doe",
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      position: "Chief Guest"
    }
  ];

  const organizers: {
    name: string;
    image: string;
    position: string;
  }[] = [
    {
      name: "John Doe",
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      position: "Chief Guest"
    },
    {
      name: "John Doe",
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      position: "Chief Guest"
    },
    {
      name: "John Doe",
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      position: "Chief Guest"
    },
    {
      name: "John Doe",
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      position: "Chief Guest"
    },
    {
      name: "John Doe",
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      position: "Chief Guest"
    },
    {
      name: "John Doe",
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      position: "Chief Guest"
    },
    {
      name: "John Doe",
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      position: "Chief Guest"
    },
    {
      name: "John Doe",
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      position: "Chief Guest"
    },
    {
      name: "John Doe",
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      position: "Chief Guest"
    },
    {
      name: "John Doe",
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      position: "Chief Guest"
    },
    {
      name: "John Doe",
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      position: "Chief Guest"
    }
  ];

  const countries = [
    "AF",
    "PK",
    "IN",
    "CN",
    "BD",
    "MV",
    "RU",
    "JP",
    "KR",
    "US",
    "GB",
    "FR",
    "DE",
    "CA",
    "AU",
    "BR",
    "IL",
    "EG",
    "UA",
    "SA"
  ];

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
          <button className="font-lilita-one text-white bg-violet rounded-md px-8 mt-4 py-3 text-[1.25rem] hover:bg-white hover:text-black hover:shadow-xl transition-colors duration-300 flex items-center gap-2 group">
            Register Now
            <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-2" />
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

      <div className="mt-12 px-12 py-8 bg-[#eeeeee] flex items-center justify-between">
        <div className="flex-1 flex items-center justify-center">
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

      <div className="mt-[6rem] px-8">
        <h1 className="text-center text-[2.5rem]">TIMELINE</h1>
        <div className="mt-4">
          <Timeline data={timeline_data} />
        </div>
      </div>

      <div className="mt-[6rem] px-[8rem] py-[4rem] bg-[#eeeeee]">
        <h1 className="text-center text-[2.5rem]">COMMITTEES</h1>
        <div className="mt-12 flex gap-[8rem] justify-center items-end">
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
        <h1 className="text-center text-[2.5rem] mt-[4rem]">COUNTRIES</h1>
        <div className="mt-12 flex flex-wrap gap-12 items-center justify-between">
          {countries.map((country, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-[5rem] w-[8rem] relative"
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
      <div className="mt-[6rem] px-[8rem] py-6">
        <h1 className="text-center text-[2.5rem]">
          AGENDA FOR DISCUSSION AND DELIBERATION
        </h1>
        <div className="mt-[4rem]">
          <Accordion type="single" collapsible>
            {agenda.map((item, index) => (
              <AccordionItem key={index} value={index.toString()}>
                <AccordionTrigger>
                  <h2 className="text-[1.5rem] font-days-one">{item}</h2>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-[1.25rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <div className="mt-8 bg-[#eeeeee] px-[8rem] py-[4rem]">
        <div className="">
          <h1 className="text-center text-[2.5rem]">JUDGES</h1>
          <div className="mt-4">
            <div className="grid grid-rows-2 grid-cols-3 gap-8">
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
                  <div className="py-2 ml-4">
                    <h2 className="text-[1.5rem] font-lilita-one">
                      {person.name}
                    </h2>
                    <p className="text-[1.25rem] font-montserrat font-[600]">
                      {person.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-[4rem]">
          <h1 className="text-center text-[2.5rem]">HOUSE OFFICIALS</h1>
          <div className="mt-4">
            <div className="flex w-full gap-8 justify-center">
              {houseOfficials.map((person, index) => (
                <div
                  key={index}
                  className="flex bg-white shadow-md rounded-2xl items-center w-[25rem]"
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
                    <p className="text-[1.25rem] font-montserrat font-[600]">
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
            <div className="grid grid-rows-2 grid-cols-3 gap-8">
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
                    <p className="text-[1.25rem] font-montserrat font-[600]">
                      {person.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 px-[8rem]">
        <div className="rounded-2xl bg-pink px-[2rem] py-[2rem] flex justify-between ">
          <div className="flex-1 flex items-center justify-center border-solid border-r-2 mr-12 border-white">
            <Image
              src={"/assets/mun-logo.svg"}
              height="350"
              width="350"
              alt="MUN Logo"
              className="mun-shadow"
            />
          </div>
          {/* <div className="border-solid border-l-2 h-full w-1 border-white"></div> */}
          <div className="flex-1 flex flex-col justify-evenly">
            <div className="text-white ">
              <h2 className="text-[2.5rem]">Rules and guidelines of MUN</h2>
              <div className="flex gap-4 items-center text-[1.5rem]">
                <p>Read here</p>
                <FaArrowRightLong />
              </div>
            </div>
            <div className="text-white ">
              <h2 className="text-[2.5rem]">
                Download position paper template
              </h2>
              <div className="flex gap-4 items-center text-[1.5rem]">
                <p>Download here</p>
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
