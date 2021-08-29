import React from "react";
import Image from "next/image";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <section id="1" className={styles.wrapper}>
      <div className={styles.hero}>
        <div className={styles.headlineWrap}>
          <h1>John Hartson Gambling Workshop</h1>
          <p>
            Providing Expertise and Support to Businesses in All Areas of
            Gambling Addiction.
          </p>
        </div>
        <Image
          src="/images/hero.png"
          alt="John Hartson Recovery Hero Image"
          width={1920}
          height={1080}
        />
      </div>
    </section>
  );
};

export default Home;
