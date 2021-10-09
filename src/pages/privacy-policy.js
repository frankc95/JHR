import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function privacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy & Policy - John Hartson Recovery</title>
        <meta
          name="description"
          content="Privacy & Policy - P&P - John Hartson's Gambling and Addiction Workshop. Make your next game recovery!"
        />
        <meta property="og:title" content="FAQ - John Hartson Recovery" />
        <meta
          property="og:description"
          content="Privacy & Policy - P&P - John Hartson's Gambling and Addiction Workshop. Make your next game recovery!"
        />
        <meta
          property="og:url"
          content="https://jhrocevory.co.uk/privacy-policy"
        />
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
        <h1>Privacy & Policy</h1>
        <h4>Sorry, this page doesn&apos;t exist yet...</h4> <br />
        <Link
          href={{
            pathname: "/",
            hash: "1",
          }}
        >
          <a style={{ zIndex: "2" }}>Go back</a>
        </Link>
      </div>
    </>
  );
}
