import type { Metadata } from "next";
import { Days_One, Lilita_One, Lalezar, Lemon } from "next/font/google";
import "./globals.css";

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
        className={`${daysOne.variable} ${lilitaOne.variable} ${lalezar.variable} ${lemon.variable} antialiased`}
      >
        <nav className="fixed top-0 w-full z-10">
          <div className="flex justify-between items-center py-2 px-8 bg-blue">
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
              <button className="bg-white text-black px-6 font-lilita-one text-[1.125rem] py-2 rounded-md">
                Register now
              </button>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
