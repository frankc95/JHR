import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./TestimonialsNew.module.scss";
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

const TestimonialsNew = () => {
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
      <motion.div
        className={styles.testimonialWrapper}
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
          <h3>WHAT BUSINESSES LIKE YOURS HAVE SAID</h3>
          <Image
            className={styles.right}
            src="/images/heart.svg"
            alt="heart icon"
            height={30}
            width={30}
          />
        </div>

        <div className={styles.carouselWrap}>
          <div className={styles.inner}>
            <div className={styles.imgWrap}>
              <Image
                src="/images/testimonial-hero.jpeg"
                alt="John Hartson Recovery Session Photograph"
                width={1920}
                height={1080}
              />
            </div>
            <div className={styles.contentWrap}>
              <p>
                “It was refreshingly different from these kind of sessions we’ve
                held for employees before. Very open, very honest. Quite
                emotional. You could see the impact on a lot of the guys in the
                room. It’s a massive problem everywhere so it’s good to see how
                we can do our bit.”
              </p>
              <p>
                <span>- Claire, CEO</span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default TestimonialsNew;
