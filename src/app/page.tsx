"use client";

import LoginPage from "./(pages)/(auth)/page";
import Head from "next/head";
import { INTER_GOOGLE_FONT_LINK } from "./utils/constants";

export default function Home() {
  return (
    <>
      <Head>
        <link
        //add inter google font for styling
          href= {INTER_GOOGLE_FONT_LINK}
          rel="stylesheet"
        />
      </Head>
        {/* Render LoginPage component initially */}
      <LoginPage />
    </>
  );
}
