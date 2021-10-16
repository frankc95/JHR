import React from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Privacy.module.scss";

export default function privacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy & Policy - John Hartson Recovery</title>
        <meta
          name="description"
          content="Privacy & Policy - P&P - John Hartson's Gambling and Addiction Workshop. Make your next game recovery!"
        />
        <meta property="og:title" content="P&P - John Hartson Recovery" />
        <meta
          property="og:description"
          content="Privacy & Policy - P&P - John Hartson's Gambling and Addiction Workshop. Make your next game recovery!"
        />
        <meta
          property="og:url"
          content="https://jhrocevory.co.uk/privacy-policy"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id="1" className={styles.wrapper}>
        <div className={styles.inner}>
          <h3>Privacy Policy</h3>
          <p>
            This privacy policy sets out how we use and protect any information
            that you give us when you use this website. The terms
            &quot;our&quot;, &quot;us&quot; or &quot;we&quot; refers to the
            owner of the website. The term &quot;you&quot; refers to the user or
            viewer of our website.
          </p>
          <p>
            We are committed to ensuring that your privacy is protected. Should
            we ask you to provide certain information by which you can be
            identified when using this website, then you can be assured that it
            will only be used in accordance with this privacy statement.
          </p>
          <p>
            We may change this policy from time to time by updating this page.
            You should check this page from time to time to ensure that you are
            happy with any changes.
          </p>
          <h4>What we collect</h4>
          <p>We may collect the following information:</p>
          <ul>
            <li>name and job title</li>
            <li>contact information including email address</li>
            <li>
              demographic information such as postcode, preferences and
              interests
            </li>
            <li>
              other information relevant to customer surveys and/or offers
            </li>
          </ul>
          <h4>What we do with the information we gather</h4>
          <p>
            We require this information to understand your needs and provide you
            with a better service, and in particular for the following reasons:
          </p>
          <ul>
            <li>Internal record keeping.</li>
            <li>
              We may use the information to improve our products and services.
            </li>
            <li>
              We may periodically send promotional emails about new products,
              special offers or other information which we think you may find
              interesting using the email address which you have provided.
            </li>
            <li>
              From time to time, we may also use your information to contact you
              for market research purposes. We may contact you by email, phone,
              fax or mail. We may use the information to customise the website
              according to your interests.
            </li>
          </ul>
          <h4>Security</h4>
          <p>
            We are committed to ensuring that your information is secure. In
            order to prevent unauthorised access or disclosure, we have put in
            place suitable physical, electronic and managerial procedures to
            safeguard and secure the information we collect online.
          </p>
          <h4>How we use cookies</h4>
          <p>
            A cookie is a small file which asks permission to be placed on your
            computer&apos;s hard drive. Once you agree, the file is added and
            the cookie helps analyse web traffic or lets you know when you visit
            a particular site. Cookies allow web applications to respond to you
            as an individual. The web application can tailor its operations to
            your needs, likes and dislikes by gathering and remembering
            information about your preferences.
          </p>
          <p>
            We use traffic log cookies to identify which pages are being used.
            This helps us analyse data about webpage traffic and improve our
            website in order to tailor it to customer needs. We only use this
            information for statistical analysis purposes and then the data is
            removed from the system.
          </p>
          <p>
            Overall, cookies help us provide you with a better website by
            enabling us to monitor which pages you find useful and which you do
            not. A cookie in no way gives us access to your computer or any
            information about you, other than the data you choose to share with
            us.
          </p>
          <p>
            You can choose to accept or decline cookies. Most web browsers
            automatically accept cookies, but you can usually modify your
            browser setting to decline cookies if you prefer. This may prevent
            you from taking full advantage of the website.
          </p>
          <h4>Links to other websites</h4>
          <p>
            Our website may contain links to other websites of interest.
            However, once you have used these links to leave our site, you
            should note that we do not have any control over that other website.
            Therefore, we cannot be responsible for the protection and privacy
            of any information which you provide whilst visiting such sites and
            such sites are not governed by this privacy statement. You should
            exercise caution and look at the privacy statement applicable to the
            website in question.
          </p>
          <h4>Controlling your personal information</h4>
          <p>
            We will not sell, distribute or lease your personal information to
            third parties unless we have your permission or are required by law
            to do so. We may use your personal information to send you
            promotional information about third parties which we think you may
            find interesting if you tell us that you wish this to happen.
          </p>
          <p>
            You may request details of personal information which we hold about
            you under the Data Protection Act 1998. A small fee will be payable.
            If you would like a copy of the information held on you please write
            to us.
          </p>
          <p>
            If you believe that any information we are holding on you is
            incorrect or incomplete, please write to or email us as soon as
            possible. We will promptly correct any information found to be
            incorrect.
          </p>
        </div>
      </section>
    </>
  );
}
