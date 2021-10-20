import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../OurMission.module.scss";
import Image from "next/image";
import { MoreInfo } from "../DB/MoreInfo";

const More = () => {
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
      {MoreInfo.map((item) => (
        <div key={item.id} className={styles.bulletWrap}>
          <div className={styles.title}>
            <h2>{item.title}</h2>
            <span className={styles.shape} />
            <div className={styles.img}>
            <Image
                  src="/images/imageMeme.png"
                  alt="John Hartson Recovery Hero Image"
                  width={200}
                  height={200}
                />
            </div>
          </div>
          <div className={styles.bullets}>
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
      ))}
    </motion.div>
  );
};

export default More;
