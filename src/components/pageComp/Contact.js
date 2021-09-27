import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./Contact.module.scss";

const Contact = () => {
  const [sent, setSent] = useState(false);
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

  async function handleSubmit(e) {
    e.preventDefault();
    var form = document.getElementById("contactForm");
    form.reset();
    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 3000);
  }

  return (
    <section id="5" className={styles.wrapper}>
      {/* Contact */}
      <motion.div className={styles.headlineWrap} ref={ref} animate={animation}>
        <h5>have any questions?</h5>
        <h2>Get in touch with us!</h2>
      </motion.div>
      <motion.div className={styles.grid} ref={ref} animate={animation}>
        <div className={styles.formWrap}>
          <form
            name="contact v1"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
            id="contactForm"
            onSubmit="submit"
          >
            <input type="hidden" name="form-name" value="contact v1" />
            <label type="hidden">
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
            <div className={styles.double}>
              <div className={styles.single}>
                <label htmlFor="name" className={styles.formLabel}>
                  Name <span>*</span>
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  className={styles.formInput}
                />
              </div>

              <div className={styles.single}>
                <label htmlFor="email" className={styles.formLabel}>
                  Email <span>*</span>
                </label>
                <input
                  required
                  type="text"
                  name="email"
                  id="email"
                  className={styles.formInput}
                />
              </div>
            </div>

            <div className={styles.double}>
              <div className={styles.single}>
                <label htmlFor="company" className={styles.formLabel}>
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  className={styles.formInput}
                />
              </div>

              <div className={styles.single}>
                <label htmlFor="phone" className={styles.formLabel}>
                  Contact number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className={styles.formInput}
                />
              </div>
            </div>

            <label htmlFor="name" className={styles.formLabel}>
              Message <span>*</span>
            </label>
            <textarea
              required
              name="message"
              id="message"
              className={styles.formInput}
            />

            {sent ? (
              <>
                <div className={styles.actionMessage}>
                  <p>Your message has been sent!</p>
                </div>
                <br />
              </>
            ) : null}
            <button>Submit</button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
