import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";

import styles from "./OurTeam.module.scss";
import { OurTeams } from "./DB/OurTeams";

const OurTeam = () => {
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
    <section id="3" className={styles.wrapper}>
      {/* Our Team */}
      <motion.div className={styles.headlineWrap} ref={ref} animate={animation}>
        <div className={styles.titleWrap}>
          <img
            className={styles.left}
            src="/images/heart.svg"
            alt="heart icon"
          />
          <h3>OUR TEAM</h3>
          <img
            className={styles.right}
            src="/images/heart.svg"
            alt="heart icon"
          />
        </div>
      </motion.div>
      <motion.div className={styles.grid} ref={ref} animate={animation}>
        <div className={styles.innerGrid}>
          {OurTeams.map((item) => (
            <div className={styles.card} key={item.id}>
              <div className={styles.profilePic}>
                <Image src={item.src} alt={item.alt} width={200} height={200} />
              </div>

              <div className={styles.textWrap}>
                <h6>{item.name}</h6>
                <p>{item.title}</p>
              </div>

              <div className={styles.socialWrap}>
                {item.social.map((social) => (
                  <div className={styles.social} key={social.id}>
                    <a aria-label="social-media-links" href={social.url}>
                      {social.icon}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* <div className={styles.more}>
          <div className={styles.text}>
            <h4>freedom fromfrom.</h4>
            <p>
              If you are interested in hosting a workshop, you can contact us
              via our contact form below.
            </p>
            <p>Help in many areas of addiction and related mental health.</p>
            <p>Offer specific and personalised group work sessions.</p>
            <p>Lectures on specific help.</p>
          </div>
          <div className={styles.img}></div>
        </div> */}
      </motion.div>
    </section>
  );
};

export default OurTeam;
