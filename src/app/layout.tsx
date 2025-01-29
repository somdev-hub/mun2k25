import type { Metadata } from "next";
import {
  Days_One,
  Lilita_One,
  Lalezar,
  Lemon,
  Montserrat
} from "next/font/google";
import "./globals.css";

import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
import { SidebarProvider } from "@/components/context/SidebarContext";

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
        <SidebarProvider>
          <Nav />
          {children}
          <Footer />
        </SidebarProvider>
      </body>
    </html>
  );
}
