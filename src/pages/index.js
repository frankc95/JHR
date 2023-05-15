import Head from "next/head";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer/Footer";

import HomeComp from "../components/pageComp/Home";
import OurMission from "../components/pageComp/OurMission";
import OurTeam from "../components/pageComp/OurTeam";
import Testimonials from "../components/pageComp/Testimonials";
import Contact from "../components/pageComp/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>John Hartson Recovery</title>
        <meta
          name="keywords"
          content="gambling addiction, compulsive gambler, gambling help, gambling addiction help, gambling problem, gamblers in recovery, gambling addiction treatment, stop gambling, pathological gambling, betting addiction, casino addiction, stop gambling addiction, help to stop gambling, gambling addiction recovery, gambling problem help, gambling help number, "
        />
        <meta
          name="description"
          content="John Hartson's Gambling and Addiction Workshop. Make your next game recovery!"
        />
        <meta property="og:title" content="John Hartson Recovery" />
        <meta
          property="og:description"
          content="John Hartson's Gambling and Addiction Workshop. Make your next game recovery!"
        />
        <meta property="og:url" content="https://jhrocevory.co.uk/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="b2ndndZkZz7_TY_Vwjqn5_D7UiCvR8aSwav9v1HLKWY"
        />
        <html lang="en-GB"></html>
      </Head>

      <main className="container">
        <HomeComp />
        <OurMission />
        <OurTeam />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
