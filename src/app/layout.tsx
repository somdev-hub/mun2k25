import type { Metadata } from "next";
import {
  Days_One,
  Lilita_One,
  Lalezar,
  Lemon,
  Montserrat
} from "next/font/google";
import "./globals.css";
import Image from "next/image";

const daysOne = Days_One({
  variable: "--font-days-one",
  subsets: ["latin"],
  weight: "400"
});

const lilitaOne = Lilita_One({
  variable: "--font-lilita-one",
  subsets: ["latin"],
  weight: "400"
});

const lalezar = Lalezar({
  variable: "--font-lalezar",
  subsets: ["latin"],
  weight: "400"
});

const lemon = Lemon({
  variable: "--font-lemon",
  subsets: ["latin"],
  weight: "400"
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"] // Add more weights if needed
});

export const metadata: Metadata = {
  title: "MUN 2K25",
  description:
    " Model United Nations 2K25 is a conference that aims to provide a platform for students to discuss global issues and develop their public speaking and negotiation skills. The conference will be held in 2025, and will feature a variety of committees and topics for students to choose from. Whether you are new to Model UN or an experienced delegate, MUN 2K25 is the perfect opportunity to learn, grow, and connect with other students from around the world."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${daysOne.variable} ${lilitaOne.variable} ${lalezar.variable} ${lemon.variable}
        ${montserrat.variable} 
          antialiased`}
      >
        <nav className="fixed top-0 w-full z-[100]">
          <div className="flex justify-between items-center py-2 px-12 bg-blue">
            <div className="">
              <h3>
                <span
                  className={`font-lalezar text-white  sm-text-shadow text-[2.5rem]`}
                >
                  MUN
                </span>{" "}
                <span className="font-lemon text-white sm-text-shadow-violet text-[2rem] ">
                  2K25
                </span>
              </h3>
            </div>
            <div className="">
              <button className="bg-white text-black px-6 font-lilita-one text-[1.125rem] py-2 rounded-md hover:bg-pink hover:text-white transition-all duration-300">
                Register now
              </button>
            </div>
          </div>
        </nav>
        {children}
        <footer>
          <div className="bg-blue px-8 xl:px-[5.5rem] py-12 mt-[4rem] flex flex-col sm:flex-row items-center justify-between text-white gap-16">
            <div className=" flex flex-col sm:flex-row items-center justify-center">
              <div className="flex gap-12 items-center md:flex-col lg:flex-row justify-around">
                <div className="h-[6rem] w-[6rem] lg:h-[12rem] lg:w-[11rem] flex items-center justify-center relative">
                  <Image
                    loading="lazy"
                    src={"/assets/literary-logo-white.svg"}
                    style={{ objectFit: "cover" }}
                    fill
                    alt="literary-logo-white"
                  />
                </div>

                <div className="lg:w-[13rem] lg:h-[6rem] w-[11rem] h-[4rem] flex items-center justify-center md:mt-4 lg:mt-0 relative">
                  <Image
                    src="/assets/silicon-logo.png"
                    className="w-full h-full"
                    alt="silicon-logo"
                    // layout="fill"
                    fill
                    // objectFit="cover"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
            <div className=" flex xl:gap-12 flex-col lg:flex-row  mt-8 sm:mt-0">
              <div className="">
                <p className="font-[600] text-[1.5rem] underline">VENUE</p>
                <p className=" mt-2 text-[1.25rem]">
                  Gallery 1, <br />
                  Silicon Institute of Technology <br />
                  Silicon West, Sason, Sambalpur, Odisha, Pin: 768200
                </p>
              </div>
              <div className="mt-4 sm:mt-0">
                <p className="font-[600] text-[1.5rem] underline md:mt-2 xl:mt-0">
                  CONTACT
                </p>
                <p className="mt-2 text-[1.25rem]">
                  Somdev Behera (Secretary, Literary Club) : +917978699617{" "}
                  <br />
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
      </body>
    </html>
  );
}
