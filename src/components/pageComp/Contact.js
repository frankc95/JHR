import React, { useEffect, useState } from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
  const [sent, setSent] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSent(true);
  //   }, 3000);
  //   setSent(false);
  // }, [handleSubmit]);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    console.log(formData);
    fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(formData),
    });
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
      <div className={styles.headlineWrap}>
        <h5>have any questions?</h5>
        <h2>Get in touch with us!</h2>
      </div>
      <div className={styles.grid}>
        <div className={styles.formWrap}>
          <form method="post" id="contactForm" onSubmit={handleSubmit}>
            <div className={styles.double}>
              <div className={styles.single}>
                <label htmlFor="name" className={styles.formLabel}>
                  Name <span>*</span>
                </label>
                <input
                  required
                  type="text"
                  name="name"
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
                  className={styles.formInput}
                />
              </div>

              <div className={styles.single}>
                <label htmlFor="phone" className={styles.formLabel}>
                  Contact number
                </label>
                <input type="text" name="phone" className={styles.formInput} />
              </div>
            </div>

            <label htmlFor="name" className={styles.formLabel}>
              Message <span>*</span>
            </label>
            <textarea required name="message" className={styles.formInput} />

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
      </div>
    </section>
  );
};

export default Contact;
