import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Home.module.scss";
import ReactPlayer from "react-player/youtube";
import { TiTimes } from "react-icons/ti";

const Home = () => {
  const [player, setPlayer] = useState(false);
  useEffect(() => {
    const body = document.querySelector("body");

    if (player === true) {
      body.classList.add("freeze");
    } else {
      body.classList.remove("freeze");
    }
  });
  return (
    <section id="1" className={styles.wrapper}>
      <div className={styles.videoModal}>
        <Image
          src="/images/hero.webp"
          alt="John Hartson Recovery Hero Image"
          width={1920}
          height={1080}
        />
        <button aria-label="Play Button" onClick={() => setPlayer(true)}>
          <span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M128 104.3v303.4c0 6.4 6.5 10.4 11.7 7.2l240.5-151.7c5.1-3.2 5.1-11.1 0-14.3L139.7 97.2c-5.2-3.3-11.7.7-11.7 7.1z"></path>
            </svg>
          </span>
        </button>
      </div>
      {/* <p>
        Providing Expertise and Support to Businesses in All Areas of Gambling
        Addiction.
      </p> */}
      {player ? (
        <div onClick={() => setPlayer(false)} className={styles.playerControl}>
          <TiTimes
            className={styles.closePlayer}
            onClick={() => setPlayer(false)}
          />
          <ReactPlayer controls url="https://youtu.be/2b3UVwR9gw0" />
        </div>
      ) : null}
    </section>
  );
};

export default Home;
