import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import styles from "./OurMission.module.scss";
import { AskingWhy } from "./DB/AskingWhy";
import { RecoverySteps } from "./DB/RecoverySteps";
import { useInView } from "react-intersection-observer";
import OurMissionComp from "./innerComp/OurMissionComp";
import GamblingAddictionComp from "./innerComp/GamblingAddictionComp";

const OurMission = () => {
  const { ref, ref1, ref2, inView } = useInView({
    threshold: 0,
  });
  const animation = useAnimation();
  const animation1 = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.4,
        },
      });
      animation1.start({
        y: "0vw",
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
      animation2.start({
        x: "0vw",
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        scale: 0.8,
        opacity: 0,
        x: 50,
      });
      animation1.start({
        x: "-100vw",
      });
      animation2.start({
        x: "100vw",
      });
    }
  }, [inView, animation]);

  return (
    <>
      <section id="2" className={styles.wrapper}>
        {/* Asking Why */}
        <motion.div ref={ref} animate={animation}>
          <div className={styles.headlineWrap}>
            <h5>why?</h5>
            <h2>Simply, what benefits them, benefits you.</h2>
          </div>
        </motion.div>
        <motion.div className={styles.grid} ref={ref} animate={animation}>
          {AskingWhy.map((item) => (
            <div className={styles.innerGrid} key={item.id}>
              <div className={styles.graphic}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                />
              </div>
              <div className={styles.textWrap}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Our Mission */}
        <OurMissionComp />

        {/* Gambling Addiction */}
        <GamblingAddictionComp />
      </section>

      <section className={styles.maxWidth}>
        {/* Gambling Steps */}
        <div className={`${styles.grid} ${styles.background}`}>
          <div className={styles.headlineWrap}>
            <h5>REcovery Steps</h5>
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
      </section>
    </>
  );
};

export default OurMission;
