import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./OurTeam.module.scss";
import { OurTeams } from "./DB/OurTeams";

const OurTeam = () => {
  return (
    <section id="3" className={styles.wrapper}>
      {/* Our Team */}
      <div className={styles.headlineWrap}>
        <h5>our team</h5>
        <h2>The most qualified and talented individuals</h2>
      </div>
      <div className={styles.grid}>
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
      </div>
    </section>
  );
};

export default OurTeam;
