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
    <section id="3" className={styles.wrapper}>
      {/* Our Team */}
      <motion.div className={styles.headlineWrap} ref={ref} animate={animation}>
        <h5>our team</h5>
        <h2>The most qualified and talented individuals</h2>
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
                    <a href={social.url}>{social.icon}</a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OurTeam;
