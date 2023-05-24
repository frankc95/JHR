import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./Contact.module.scss";
import Image from "next/image";

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

const Contact = () => {
  const [sent, setSent] = useState(false);
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
      <motion.div
        className={styles.headlineWrap}
        ref={ref}
        animate={animation}
        initial="hidden"
        variants={paraVariants}
      >
        <div className={styles.contentWrap}>
          <div className={styles.titleWrap}>
            <Image
              className={styles.left}
              src="/images/heart.svg"
              alt="heart icon"
              width={30}
              height={30}
            />
            <h3>GET IN TOUCH</h3>
            <Image
              className={styles.right}
              src="/images/heart.svg"
              alt="heart icon"
              width={30}
              height={30}
            />
          </div>
          <p>
            We’d love to talk to you about how our workshops can help you
            support your people, protect your business and help end the stigma
            of gambling addiction.
          </p>
          <p>
            Our workshops are tailored to your specific organisation and costs
            depend on your individual requirements. Our team is happy to chat
            these through with you.
          </p>
          <p>
            Fill in the form below, indicating if you’d like us to call you back
            or send more information.
          </p>
        </div>
      </motion.div>
      <motion.div
        className={styles.grid}
        ref={ref2}
        animate={animation2}
        initial="hidden"
        variants={rowVariants}
      >
        <div className={styles.formWrap}>
          <form
            name="contact v1"
            method="POST"
            // netlify-honeypot="bot-field"
            data-netlify="true"
            id="contactForm"
            action="/success"
          >
            <label className={styles.hidden} type="hidden">
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
            <input type="hidden" name="form-name" value="contact v1" />
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
              label="text-field"
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
