import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function faq() {
  return (
    <>
      <Head>
        <title>FAQ - John Hartson Recovery</title>
        <meta
          name="description"
          content="Frequently asked questions - FAQ - John Hartson's Gambling and Addiction Workshop. Make your next game recovery!"
        />
        <meta property="og:title" content="FAQ - John Hartson Recovery" />
        <meta
          property="og:description"
          content="Frequently asked questions - FAQ - John Hartson's Gambling and Addiction Workshop. Make your next game recovery!"
        />
        <meta property="og:url" content="https://jhrocevory.co.uk/faq" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          minHeight: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>FAQs</h1>
        <h4>Sorry, this page doesn&apos;t exist yet...</h4> <br />
        <Link href="/">
          <a style={{ zIndex: "2" }}>Go back</a>
        </Link>
      </div>
    </>
  );
}
