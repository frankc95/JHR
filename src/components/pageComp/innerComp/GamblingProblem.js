import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../OurMission.module.scss";
import Image from "next/image";
import ReactPlayer from "react-player/youtube";
import { TiTimes } from "react-icons/ti";
import { GamblingList } from "../DB/GamblingList";

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

const thirdVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5 },
    rotate: 0,
  },
  hidden: { opacity: 0, scale: 0.9, y: 100 },
};

const GamblingProblem = () => {
  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const { ref, inView } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();
  const { ref: ref3, inView: inView3 } = useInView();
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

    if (inView3) {
      animation3.start("visible");
    }
    if (!inView3) {
      animation3.start("hidden");
    }
  }, [inView, inView2, inView3, animation]);

  return (
    <>
      <motion.div
        className={styles.gamblingProblemHero}
        ref={ref}
        animate={animation}
        initial="hidden"
        variants={paraVariants}
      >
        <div className={styles.imgWrap}>
          <Image
            src="/images/jh-gambling-problem.jpg"
            alt="John Hartson Recovery Gambling Problem Statistics"
            width={1130}
            height={750}
          />
        </div>
        <div className={styles.contentWrap}>
          <p>
            “It is a serious, serious issue in society today. It’s causing havoc
            in households. People are splitting up, People are taking their
            lives, people are in dire straits. <br /> All because of gambling.”
          </p>
          <p>
            <span>- John Hartson</span>
          </p>
        </div>
      </motion.div>

      <motion.div
        className={styles.scaleWrap}
        ref={ref3}
        animate={animation3}
        initial="hidden"
        variants={thirdVariants}
      >
        <div className={styles.titleWrap}>
          <Image
            className={styles.left}
            src="/images/heart.svg"
            alt="heart icon"
            height={30}
            width={30}
          />
          <h3>THE SCALE OF THE UK’S GAMBLING PROBLEM</h3>
          <Image
            className={styles.right}
            src="/images/heart.svg"
            alt="heart icon"
            height={30}
            width={30}
          />
        </div>
        <div className={styles.paraWrap}>
          <p>
            The rise of smartphones, the cost of living crisis, a tempting
            solution to try and afford bills, Covid lockdown. All have
            contributed to a massive surge in gambling problems at work and the
            statistics are terrifying.
          </p>
        </div>
      </motion.div>

      <motion.div
        className={styles.gamblingProblemWrap}
        ref={ref2}
        animate={animation2}
        initial="hidden"
        variants={rowVariants}
      >
        <div className={styles.gamblingGrid}>
          {GamblingList.map((item) => (
            <div key={item.id} className={styles.bullets}>
              <div className={styles.bullet}>
                <Image
                  src="/images/imageMeme.png"
                  alt="John Hartson Recovery Hero Image"
                  width={200}
                  height={200}
                />
                <p>{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.paraWrap}>
          <p>
            We can help your people get the support they need, from our initial
            workshop to getting them on their journey of recovery with ongoing
            confidential advice, support, and information on overcoming problem
            gambling.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default GamblingProblem;
