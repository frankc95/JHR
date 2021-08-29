import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { MenuItems } from "./MenuItems";
import styles from "./Navbar.module.scss";
import { VscThreeBars } from "react-icons/vsc";
import { TiTimes } from "react-icons/ti";

const Navbar = ({ mobileMenu, setMobileMenu }) => {
  const [navbar, setNavbar] = useState(false);

  useEffect(function mount() {
    function onScroll() {
      if (window.scrollY >= 100) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  });

  useEffect(() => {
    const body = document.querySelector("body");

    if (mobileMenu === true) {
      body.classList.add("freeze");
    } else {
      body.classList.remove("freeze");
    }
  });

  return (
    <>
      <header className={styles.header}>
        <nav className={navbar ? `${styles.nav} ${styles.active}` : styles.nav}>
          <Link href="/">
            <div className={styles.logo}>
              <Image
                src="/logo.svg"
                alt="John Hartson Recovery Logo"
                width={72}
                height={16}
              />
            </div>
          </Link>
          <div className={styles.navItems}>
            {MenuItems.map((item, i) => (
              <Link key={i} href={item.url}>
                {item.title}
              </Link>
            ))}
          </div>
          <div className={styles.navAction}>
            <Link href="#5">Get In Touch</Link>
          </div>
          {!mobileMenu ? (
            <VscThreeBars
              className={styles.navMobile}
              onClick={() => setMobileMenu(true)}
            />
          ) : (
            <TiTimes
              className={styles.navMobile}
              onClick={() => setMobileMenu(false)}
            />
          )}
          <div
            className={
              mobileMenu
                ? `${styles.modalMobile} ${styles.active} active`
                : styles.modalMobile
            }
          >
            <div className={styles.mobileItems}>
              {MenuItems.map((item, i) => (
                <Link key={i} href={item.url}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
