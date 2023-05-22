import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../OurMission.module.scss";
import Image from "next/image";
import ReactPlayer from "react-player/youtube";
import { TiTimes } from "react-icons/ti";

const paraVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0.8 },
};

const rowVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5 },
    rotate: 0,
  },
  hidden: { opacity: 0, scale: 0.9, y: 100 },
};

const VideoComp = () => {
  const animation = useAnimation();
  const animation2 = useAnimation();
  const { ref, inView } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();
  const [player, setPlayer] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");

    if (player) {
      body.classList.add("freeze");
    } else {
      body.classList.remove("freeze");
    }
  }, [player]);

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
    if (!inView) {
      animation.start("hidden");
    }

    if (inView2) {
      animation2.start("visible");
    }
    if (!inView2) {
      animation2.start("hidden");
    }
  }, [inView, inView2, animation]);

  return (
    <>
      <motion.div
        className={styles.videoWrapper}
        ref={ref}
        animate={animation}
        initial="hidden"
        variants={paraVariants}
      >
        <div className={styles.contentWrap}>
          <div className={styles.titleWrap}>
            <Image
              className={styles.left}
              src="/images/heart.svg"
              alt="heart icon"
              height={30}
              width={30}
            />
            <h3>REAL, RELATABLE, RAW</h3>
            <Image
              className={styles.right}
              src="/images/heart.svg"
              alt="heart icon"
              height={30}
              width={30}
            />
          </div>

          <p>
            Watch out film to hear John and Tony’s stories and see how they can
            relate to and connect with your people.
          </p>
        </div>
        <div className={styles.imgWrap}>
          <Image
            src="/images/jhVidPreview.jpg"
            alt="John Hartson Recovery Video Preview Image"
            width={1920}
            height={1080}
          />
          <button
            aria-label="Play Button"
            onClick={() => {
              setPlayer(true);
            }}
          >
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
        {player ? (
          <div
            onClick={() => setPlayer(false)}
            className={styles.playerControl}
          >
            <TiTimes
              className={styles.closePlayer}
              onClick={() => setPlayer(false)}
            />
            <ReactPlayer controls url="https://youtu.be/bqLjrCR1Emc" />
          </div>
        ) : null}
      </motion.div>

      <motion.div
        className={styles.workshopWrap}
        ref={ref2}
        animate={animation2}
        initial="hidden"
        variants={rowVariants}
      >
        <div className={styles.titleWrap}>
          <Image
            className={styles.left}
            src="/images/heart.svg"
            alt="heart icon"
            height={30}
            width={30}
          />
          <h3>HOW OUR WORKSHOPS CAN HELP YOU</h3>
          <Image
            className={styles.right}
            src="/images/heart.svg"
            alt="heart icon"
            height={30}
            width={30}
          />
        </div>
        <div className={styles.left}>
          <div className={styles.contentWrap}>
            <div className={styles.explWrap}>
              <object
                data="/images/explmark.svg"
                width="30"
                height="100"
              ></object>
              <div className={styles.pWrap}>
                <p>
                  <span>13%</span> of the population are experiencing some sort
                  of gambling harm.
                </p>
                <p className={styles.sign}> - YouGov</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.contentWrap}>
            <p>
              <span>
                Reduced productivity, increased absence, theft and fraud, stress
                and mental health issues.
              </span>{" "}
              There’s no organisation, industry or business where gambling
              hasn’t got a grip.
            </p>
            <p>
              And in every room we’ve held our workshops, there are people who
              suffer from gambling harms – either themselves, their friends,
              their partner, their family, or their colleagues.
            </p>
            <p>
              Through the emotional stories from footballing legend John
              Hartson, and the expertise of therapist Tony Marini, our workshop
              can help you support your staff by:
            </p>
            <div className={styles.bullets}>
              <p>
                <span>Identifying</span> their problems,
              </p>
              <p>
                <span>Inviting</span> them to take action,
              </p>
              <p>
                <span>Inspiring</span> them to turn their lives around.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default VideoComp;
