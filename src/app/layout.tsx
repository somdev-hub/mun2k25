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
import Script from "next/script";

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
  title: "MUN 2025",
  description:
    " Model United Nations 2K25 is a conference that aims to provide a platform for students to discuss global issues and develop their public speaking and negotiation skills. The conference will be held in 2025, and will feature a variety of committees and topics for students to choose from. Whether you are new to Model UN or an experienced delegate, MUN 2K25 is the perfect opportunity to learn, grow, and connect with other students from around the world.",
  openGraph: {
    title: "MUN 2025",
    description:
      "Model United Nations 2K25 is a conference that aims to provide a platform for students to discuss global issues and develop their public speaking and negotiation skills. The conference will be held in 2025, and will feature a variety of committees and topics for students to choose from. Whether you are new to Model UN or an experienced delegate, MUN 2K25 is the perfect opportunity to learn, grow, and connect with other students from around the world.",
    url: "https://mun2025.sitwestevents.live",
    type: "website",
    siteName: "mun2025",
    images: [
      {
        url: "https://beautiful-gold-bison.myfilebase.com/ipfs/QmRd3bCyUqCE8K6ZVpLJGt2vv2GAY6aSxUmVdudvcYhA92",
        width: 500,
        height: 300,
        alt: "MUN 2025"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="rI88CQSNAatColzqzYuGBb9I7HtQao-14OAtfNLZ-k8"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MZ0NCTLE6P"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
   window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-MZ0NCTLE6P');
`
          }}
        />
      </head>
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
