import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function FotFound() {
  return (
    <>
      <Head>
        <title>404 - John Hartson Recovery</title>
        <meta
          name="description"
          content="Page not found - 404 - John Hartson's Gambling and Addiction Workshop. Make your next game recovery!"
        />
        <meta property="og:title" content="FAQ - John Hartson Recovery" />
        <meta
          property="og:description"
          content="Page not found - 404 - John Hartson's Gambling and Addiction Workshop. Make your next game recovery!"
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
        <h1>404</h1>
        <h2>Couldn&apos;t find the page you are looking for...</h2>
        <br />
        <Link href="/">
          <a style={{ zIndex: "2" }}>Go back</a>
        </Link>
      </div>
    </>
  );
}
