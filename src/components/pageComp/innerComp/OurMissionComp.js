import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../OurMission.module.scss";
import Image from "next/image";

const OurMissionComp = () => {
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
        transition: {
          delay: 0.4,
        },
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
      <div className={styles.innerGrid}>
        <div className={styles.videoModal}>
          <Image
            src="/images/MindMap.webp"
            alt="word clouds graphic"
            width={628}
            height={628}
          />
        </div>
        <div className={styles.textWrap}>
          <div className={styles.headline2Wrap}>
            <h5>OUR MISSION</h5>
            <h2>Freedom from active addiction takes time.</h2>
          </div>
          <p>
            There are various methods that can be used to help with the
            abstinence of problem gambling such as self-help therapy groups and
            12 Step programs like Gamblers Anonymous, Counsellors/Therapists,
            Cognitive Behaviour Therapy (CBT) based professional treatment and
            self-help CBT models such as SMART recovery. These can all be
            helpful in gaining recovery from problem gambling however, in order
            for any of these to work, it is necessary to recognise that there is
            a problem and that help is needed.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default OurMissionComp;
