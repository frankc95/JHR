import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../OurMission.module.scss";
import Image from "next/image";
import ReactPlayer from "react-player/youtube";
import { TiTimes } from "react-icons/ti";
import { WorkshopList } from "../DB/WorkshopList";

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

const WorkshopComp = () => {
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
        className={styles.workshopComp}
        ref={ref}
        animate={animation}
        initial="hidden"
        variants={paraVariants}
      >
        <div className={styles.quote}>
          <img
            className={styles.left}
            src="/images/quote.svg"
            alt="quote icon"
          />
          <h3>
            5 Million British people have experienced harm linked to gambling. –
            The Guardian, 2020
          </h3>
          <img
            className={styles.right}
            src="/images/quote.svg"
            alt="quote icon"
          />
        </div>
        <div className={styles.contentWrap}>
          <div className={styles.titleWrap}>
            <img
              className={styles.left}
              src="/images/heart.svg"
              alt="heart icon"
            />
            <h3>WHO IS OUR WORKSHOP FOR?</h3>
            <img
              className={styles.right}
              src="/images/heart.svg"
              alt="heart icon"
            />
          </div>
          <p>
            You can put measures in place to try and stop gambling in your
            organisation, but this is Britain’s secret addiction, and symptoms
            are harder to spot than with other addictions. But we can help. We
            can show you how to spot the signs, support your employees, and
            refer someone to an expert for professional help.
          </p>
          <p>
            Our workshop is delivered differently. An incredibly moving session
            that speaks directly to those experiencing gambling harm.
          </p>
          <p>
            And when that personal connection is coupled with practical
            information, expert advice and guidance about gambling, it helps
            your people open up to help, without fear of being judged.
          </p>
          <p>
            Here are just some of the sectors we have worked with to tackle
            addiction problems and promote better health and wellbeing in the
            workplace:
          </p>
        </div>
      </motion.div>

      <motion.div
        className={styles.bulletGrid}
        ref={ref2}
        animate={animation2}
        initial="hidden"
        variants={rowVariants}
      >
        {WorkshopList.map((item) => (
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
      </motion.div>

      <motion.div
        className={styles.statsWrap}
        ref={ref3}
        animate={animation3}
        initial="hidden"
        variants={thirdVariants}
      >
        <div className={styles.explWrap}>
          <object data="/images/explmark.svg" width="30" height="100"></object>
          <div className={styles.pWrap}>
            <p>
              <span>More than 85% </span> of UK businesses have alcohol and
              substance misuse policies – but less
              than 5% have a policy for gambling.
            </p>
            <p className={styles.sign}>
              – The Harmful Gambling Workplace Charter
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default WorkshopComp;
