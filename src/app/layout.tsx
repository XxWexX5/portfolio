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
  title: "Wevison R. - Desenvolvedor Front-end | Portfolio",
  description: "Portfolio profissional de Wevison R., desenvolvedor Front-end especializado em React, Next.js, TypeScript e tecnologias modernas. Confira meus projetos e experiências.",
  keywords: ["desenvolvedor", "front-end", "React", "Next.js", "TypeScript", "portfolio", "programador", "frontend", "backend"],
  authors: [{ name: "Wevison R." }],
  creator: "Wevison R.",
  publisher: "Wevison R.",
  robots: "index, follow",
  openGraph: {
    title: "Wevison R. - Desenvolvedor Front-end | Portfolio",
    description: "Portfolio profissional de Wevison R., desenvolvedor Front-end especializado em React, Next.js, TypeScript e tecnologias modernas.",
    type: "website",
    locale: "pt_BR",
    siteName: "Portfolio Wevison R.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wevison R. - Desenvolvedor Front-end | Portfolio",
    description: "Portfolio profissional de Wevison R., desenvolvedor Front-end especializado em React, Next.js, TypeScript e tecnologias modernas.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
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
