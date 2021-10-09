import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";
import { FaHeart } from "react-icons/fa";

const footer = () => {
  return (
    <>
      <footer className={styles.footer}>
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
            <Link
              href={{
                pathname: "/",
                hash: "1",
              }}
              duration={1000}
            >
              Home
            </Link>
            <Link href="/faq" duration={1000}>
              FAQs
            </Link>
            <Link href="/privacy-policy" duration={1000}>
              Privacy & Policy
            </Link>
            <Link
              href={{
                pathname: "/",
                hash: "5",
              }}
              duration={1000}
            >
              Contact
            </Link>
          </div>
          <a href="https://www.linkedin.com/in/jakub-blazewicz">
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
