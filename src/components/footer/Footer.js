import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";
import { FaHeart } from "react-icons/fa";

const footer = () => {
  let n = new Date();
  let y = n.getFullYear();
  return (
    <>
      <footer className={styles.footer}>
        <hr className={styles.hr} />
        <div className={styles.inner}>
          <Link
            href={{
              pathname: "/",
              hash: "1",
            }}
            duration={1000}
          >
            <div className={styles.logo}>
              <Image
                src="/logo.svg"
                alt="John Hartson Recovery Logo"
                width={72}
                height={16}
              />
            </div>
          </Link>
          <div className={styles.otherLinks}>
            <Link href="/terms-conditions" duration={1000}>
              Terms & Conditions
            </Link>
            <Link href="/privacy-policy" duration={1000}>
              Privacy & Policy
            </Link>
            <Link
              href={{
                pathname: "/",
                hash: "1",
              }}
              duration={1000}
            >
              Home
            </Link>
            {/* <Link href="/faq" duration={1000}>
              FAQs
            </Link> */}
          </div>
          <div className={styles.copy}>
            <p>Copyright &copy; {y} John Hartson Recovery Workshop</p>
            <p>All rights reserved.</p>
            <a href="https://www.linkedin.com/in/jakub-blazewicz">
              Made with
              <span>
                <FaHeart />
              </span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
