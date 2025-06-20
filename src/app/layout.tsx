import { ApolloWrapper } from "../lib/apollo-wrapper";

import type { Metadata } from "next";

import { Raleway, Rubik, Yeseva_One, Imbue } from "next/font/google";

import "./globals.css";

const ralewaySans = Raleway({
  variable: "--font-raleway-sans",
  subsets: ["latin"],
});

const rubikSans = Rubik({
  variable: "--font-rubik-sans",
  subsets: ["latin"],
});

const yesevaSans = Yeseva_One({
  variable: "--font-yeseva-sans",
  subsets: ["latin"],
  weight: "400",
});

const ImbueSans = Imbue({
  variable: "--font-imbue-sans",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio by Wevison R.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ralewaySans.variable} ${rubikSans.variable} ${yesevaSans.variable} ${ImbueSans.variable} antialiased`}
      >
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
