import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Wevison</title>
        <meta name="description" content="Porfolio - Wevison R." />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <Header
        links={[
          {
            id: "link-01",
            text: "About Me",
            href: "#section-01",
            actived: true,
          },
          { id: "link-02", text: "Work", href: "#section-02", actived: false },
          {
            id: "link-03",
            text: "Formation",
            href: "#section-03",
            actived: false,
          },
          {
            id: "link-04",
            text: "Contact",
            href: "#section-04",
            actived: false,
          },
        ]}
      />
    </>
  );
};

export default Home;
