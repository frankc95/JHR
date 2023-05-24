import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function FotFound() {
  return (
    <>
      <Head>
        <title>
          Your contact form has been submitted - John Hartson Recovery
        </title>
        <meta
          name="description"
          content="Your contact form has been submitted - John Hartson's Gambling and Addiction Workshop. Make your next game recovery!"
        />
        <meta property="og:title" content="FAQ - John Hartson Recovery" />
        <meta
          property="og:description"
          content="Your contact form has been submitted - John Hartson's Gambling and Addiction Workshop. Make your next game recovery!"
        />
        <meta property="og:url" content="https://jhrocevory.co.uk/" />
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
        <h1>Thank you for reaching out to us!</h1>
        <p>
          Your contact form has been submitted, we will get back to you as soon
          as possible
        </p>
        <br />
        <Link
          href={{
            pathname: "/",
            hash: "1",
          }}
        >
          <a style={{ zIndex: "2" }}>Back to our site</a>
        </Link>
      </div>
    </>
  );
}
