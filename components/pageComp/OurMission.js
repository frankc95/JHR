import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import styles from "./OurMission.module.scss";
import { AskingWhy } from "./DB/AskingWhy";
import { RecoverySteps } from "./DB/RecoverySteps";
import { useInView } from "react-intersection-observer";
import OurMissionComp from "./innerComp/OurMissionComp";
import GamblingAddictionComp from "./innerComp/GamblingAddictionComp";
import More from "./innerComp/More";
import VideoComp from "./innerComp/VideoComp";
import WorkshopComp from "./innerComp/WorkshopComp";

const paraVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0.8 },
};

const rowVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.4 },
    rotate: 0,
  },
  hidden: { opacity: 0, scale: 0.9, y: 100 },
};

const OurMission = () => {
  const animation = useAnimation();
  const animation2 = useAnimation();
  const { ref, inView } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();

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
  }, [inView, inView2, animation, animation2]);

  return (
    <>
      <section id="2" className={styles.wrapper}>
        {/* Asking Why */}
        <motion.div
          ref={ref}
          animate={animation}
          initial="hidden"
          variants={paraVariants}
        >
          <div className={styles.headlineWrap}>
            <h3>
              <span>Unite</span> your team, <span>Tackle</span> their problems,{" "}
              <span>Protect</span> your business.
            </h3>

            <div className={styles.quote}>
              <Image
                className={styles.left}
                src="/images/quote.svg"
                alt="quote icon"
                width={55}
                height={45}
              />
              <h3>
                I didn’t realise I had a problem. You never do. – John Hartson
              </h3>
              <Image
                className={styles.right}
                src="/images/quote.svg"
                alt="quote icon"
                width={55}
                height={45}
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          className={styles.grid}
          ref={ref2}
          animate={animation2}
          initial="hidden"
          variants={rowVariants}
        >
          <div className={styles.backgroundWrap}>
            <div className={styles.imgWrap}>
              <Image
                src={"/images/backgroundInfo.png"}
                alt="John Hartson and Tony Marini photograph"
                width="994"
                height="864"
              ></Image>
            </div>
            <div className={styles.contentWrap}>
              <p className={styles.backgroundPara}>
                Welcome to a unique workshop from one of Britain’s best known
                sportsmen, designed to help your employees with gambling,
                addiction and related mental health issues.
              </p>
              <p>
                John Hartson went from the very top of the football world to
                rock bottom. Now he shares his powerful and moving story of
                gambling addiction to recovery, in an engaging workshop designed
                to help your employees with their gambling, addiction and
                related mental health issues.
              </p>
              <p>
                Joined by specialist addiction therapist Tony Marini, our
                workshop is the first step for you, as a business, to making
                yourself open and available to help your people and end the
                stigma of addiction.{" "}
              </p>
              <p>
                And the first step for your employees to recognise their problem
                and get the help they need.
              </p>
            </div>
          </div>
          {/* {AskingWhy.map((item) => (
            <div className={styles.innerGrid} key={item.id}>
              <div className={`${styles.graphic} ${item.cover}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                />
              </div>
              <div className={styles.textWrap}>
                <h2>{item.title}</h2>
                {item.body.map((p, i) => (
                  <div key={i} className={item.bullet}>
                    <Image
                      src="/images/imageMeme.png"
                      alt="John Hartson Recovery Hero Image"
                      width={200}
                      height={200}
                    />
                    <p key={i}>{p}</p>
                  </div>
                ))}
              </div>
            </div>
          ))} */}
        </motion.div>

        {/* Video */}
        <VideoComp />

        {/* Workshops */}
        <WorkshopComp />

        {/* Our Mission */}
        {/* <More /> */}

        {/* Our Mission */}
        {/* <OurMissionComp /> */}

        {/* Gambling Addiction */}
        {/* <GamblingAddictionComp /> */}
      </section>

      {/* Gambling Steps */}
      {/* <section className={styles.maxWidth}>
        <div className={`${styles.grid} ${styles.background}`}>
          <div className={styles.headlineWrap}>
            <h5>Recovery Steps</h5>
            <h3>How do I stop my problem gambling?</h3>
          </div>
          <div className={styles.recoveryGrid}>
            {RecoverySteps.map((item) => (
              <div className={styles.recoveryFlex} key={item.id}>
                <div className={styles.recoveryNumber}>{item.no}</div>
                <div className={styles.recoveryText}>
                  <h5>{item.title}</h5>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
};

export default OurMission;
