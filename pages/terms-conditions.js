import React from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Privacy.module.scss";

export default function termsConditions() {
  return (
    <>
      <Head>
        <title>Terms & Conditions - John Hartson Recovery</title>
        <meta
          name="description"
          content="Terms & Conditions - T&C - John Hartson's Gambling and Addiction Workshop. Make your next game recovery!"
        />
        <meta property="og:title" content="T&C - John Hartson Recovery" />
        <meta
          property="og:description"
          content="Terms & Conditions - T&C - John Hartson's Gambling and Addiction Workshop. Make your next game recovery!"
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
          <h3>Terms and Conditions of use</h3>
          <p>
            Welcome to our website. If you continue to browse and use this
            website, you are agreeing to comply with and be bound by the
            following terms and conditions of use, which together with our
            privacy policy govern our relationship with you in relation to this
            website. If you disagree with any part of these terms and
            conditions, please do not use our website.
          </p>
          <p>
            The terms &quot;our&quot;, &quot;us&quot; or &quot;we&quot; refers
            to the owner of the website. The term &quot;you&quot; refers to the
            user or viewer of our website.
          </p>
          <p>
            The use of this website is subject to the following terms of use:
          </p>
          <ul>
            <li>
              The content of the pages of this website is for your general
              information and use only. It is subject to change without notice.
            </li>
            <li>This website uses cookies to monitor browsing preferences.</li>
            <li>
              Neither we nor any third parties provide any warranty or guarantee
              as to the accuracy, timeliness, performance, completeness or
              suitability of the information and materials found or offered on
              this website for any particular purpose. You acknowledge that such
              information and materials may contain inaccuracies or errors and
              we expressly exclude liability for any such inaccuracies or errors
              to the fullest extent permitted by law.
            </li>
            <li>
              Your use of any information or materials on this website is
              entirely at your own risk, for which we shall not be liable. It
              shall be your own responsibility to ensure that any products,
              services or information available through this website meet your
              specific requirements.
            </li>
            <li>
              This website contains material which is owned by or licensed to
              us. This material includes, but is not limited to, the design,
              layout, look, appearance and graphics. Reproduction is prohibited
              other than in accordance with the copyright notice, which forms
              part of these terms and conditions.
            </li>
            <li>
              All trade marks reproduced in this website which are not the
              property of, or licensed to, the operator are acknowledged on the
              website.
            </li>
            <li>
              Unauthorised use of this website may give rise to a claim for
              damages and/or be a criminal offence.
            </li>
            <li>
              From time to time this website may also include links to other
              websites. These links are provided for your convenience to provide
              further information. They do not signify that we endorse the
              website(s). We have no responsibility for the content of the
              linked website(s).
            </li>
            <li>
              Your use of this website and any dispute arising out of such use
              of the website is subject to the laws of England, Northern
              Ireland, Scotland and Wales.
            </li>
          </ul>
          <h4>Disclaimer</h4>
          <p>
            The information contained in this website is for general information
            purposes only. The information is provided by us and while we
            endeavour to keep the information up to date and correct, we make no
            representations or warranties of any kind, express or implied, about
            the completeness, accuracy, reliability, suitability or availability
            with respect to the website or the information, products, services,
            or related graphics contained on the website for any purpose. Any
            reliance you place on such information is therefore strictly at your
            own risk.
          </p>
          <p>
            In no event will we be liable for any loss or damage including
            without limitation, indirect or consequential loss or damage, or any
            loss or damage whatsoever arising from loss of data or profits
            arising out of, or in connection with, the use of this website.
          </p>
          <p>
            Through this website you are able to link to other websites which
            are not under our control. We have no control over the nature,
            content and availability of those sites. The inclusion of any links
            does not necessarily imply a recommendation or endorse the views
            expressed within them.
          </p>
          <p>
            Every effort is made to keep the website up and running smoothly.
            However, we take no responsibility for, and will not be liable for,
            the website being temporarily unavailable due to technical issues
            beyond our control.
          </p>
        </div>
      </section>
    </>
  );
}
