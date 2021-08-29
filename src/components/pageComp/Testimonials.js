import React from "react";

import styles from "./Testimonials.module.scss";
import { Testimonial } from "./DB/Testimonial";

const Testimonials = () => {
  return (
    <section id="4" className={styles.wrapper}>
      {/* Testimonials */}
      <div className={styles.headlineWrap}>
        <h5>testimonial</h5>
        <h2>Meet Client Satisfaction</h2>
      </div>
      <div className={styles.grid}>
        <div className={styles.testimonialGrid}>
          {Testimonial.map((item) => (
            <div className={styles.card} key={item.id}>
              <h6>{item.title}</h6>
              <p>{item.body}</p>
              <div className={styles.innerCard}>
                <img src={item.person.src} alt={item.person.alt} />
                <h6>{item.person.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
