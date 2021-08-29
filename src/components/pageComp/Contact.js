import React from "react";

import styles from "./Contact.module.scss";

const Contact = () => {
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
          <form method="post" onSubmit={handleSubmit}>
            <label htmlFor="name" className={styles.formLabel}>
              Name
            </label>
            <input type="text" name="name" className={styles.formInput} />

            <label htmlFor="email" className={styles.formLabel}>
              Email
            </label>
            <input type="text" name="email" className={styles.formInput} />

            <label htmlFor="name" className={styles.formLabel}>
              Message
            </label>
            <textarea name="message" className={styles.formInput} />

            <button>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
