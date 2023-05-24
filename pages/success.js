import React from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Success.module.scss";
import { BiLeftArrowAlt } from "react-icons/bi";

export default function Success() {
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
        <meta
          property="og:title"
          content="Contact form success - John Hartson Recovery"
        />
        <meta
          property="og:description"
          content="Your contact form has been submitted - John Hartson's Gambling and Addiction Workshop. Make your next game recovery!"
        />
        <meta property="og:url" content="https://jhrocevory.co.uk/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.contactSuccessWrap}>
        <h3>Thank you for reaching out to us!</h3>
        <p>
          Your contact form has been submitted, we will get back to you as soon
          as possible
        </p>
        <br />
        <div className={styles.link}>
          <BiLeftArrowAlt />
          <Link
            href={{
              pathname: "/",
              hash: "1",
            }}
            style={{ zIndex: "2" }}
          >
            Back to our site
          </Link>
        </div>
      </div>
    </>
  );
}
