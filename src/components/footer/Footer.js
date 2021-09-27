import React from "react";
import Image from "next/image";
import { Link as RLink } from "react-scroll";
import Link from "next/link";
import styles from "./Footer.module.scss";
import { FaHeart } from "react-icons/fa";

const footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.inner}>
          <RLink to="1" smooth={true} duration={1000}>
            <div className={styles.logo}>
              <Image
                src="/logo.svg"
                alt="John Hartson Recovery Logo"
                width={72}
                height={16}
              />
            </div>
          </RLink>
          <div className={styles.otherLinks}>
            <Link href="/" smooth={true} duration={1000}>
              Home
            </Link>
            <Link href="/faq" smooth={true} duration={1000}>
              FAQs
            </Link>
            <Link href="/privacy-policy" smooth={true} duration={1000}>
              Privacy & Policy
            </Link>
            <RLink to="5" smooth={true} duration={1000}>
              Contact
            </RLink>
          </div>
          <a href="https://github.com/frankc95">
            Made with
            <span>
              <FaHeart />
            </span>
          </a>
        </div>
      </footer>
    </>
  );
};

export default footer;
