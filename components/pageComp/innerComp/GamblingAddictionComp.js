import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GamblingAddiction } from "../DB/GamblingAddiction";
import styles from "../OurMission.module.scss";
import Image from "next/image";

const GamblingAddictionComp = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {},
      });
    }
    if (!inView) {
      animation.start({
        scale: 0.8,
        opacity: 0,
        y: -50,
      });
    }
  }, [inView, animation]);
  return (
    <motion.div className={styles.grid} ref={ref} animate={animation}>
      <div className={styles.headlineWrap}>
        <h5>GAMBLING ADDICTION</h5>
        <h2>Is gambling a problem for me?</h2>
      </div>
      <div className={styles.innerGrid}>
        {GamblingAddiction.map((item) => (
          <div className={styles.singleItem} key={item.id}>
            <div className={styles.question}>
              <Image src={item.src} alt={item.alt} width={1920} height={1080} />
            </div>
            <div className={styles.textWrap}>
              <h6>{item.title}</h6>
              <p>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default GamblingAddictionComp;
