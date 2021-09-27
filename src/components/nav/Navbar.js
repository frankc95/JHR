import React, { useState, useEffect } from "react";
// import Link from "next/link";
import Image from "next/image";
import { Link as RLink } from "react-scroll";

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
          <div className={styles.navItems}>
            {MenuItems.map((item, i) => (
              <RLink
                key={i}
                activeClass={styles.active}
                to={item.url}
                spy={true}
                smooth={true}
                offset={item.offSet}
                duration={750}
              >
                {item.title}
              </RLink>
            ))}
          </div>
          <div className={styles.navAction}>
            <RLink to="5" smooth={true} duration={1000}>
              Get In Touch
            </RLink>
          </div>
          {/* <VscThreeBars
              className={styles.navMobile}
              onClick={() => setMobileMenu(true)}
            /> 
            <TiTimes
              className={styles.navMobile}
              onClick={() => setMobileMenu(false)}
              style={{ fill: "#fff" }}
            />
            */}
          {!mobileMenu ? (
            <div
              className={styles.menuToggler}
              onClick={() => setMobileMenu(true)}
            >
              <span></span>
            </div>
          ) : (
            <div
              className={
                mobileMenu
                  ? `${styles.menuToggler} ${styles.active}`
                  : styles.menuToggler
              }
              onClick={() => setMobileMenu(false)}
            >
              <span></span>
            </div>
          )}
          <div
            className={
              mobileMenu
                ? `${styles.modalMobile} ${styles.active}`
                : styles.modalMobile
            }
          >
            <div className={styles.mobileItems}>
              {MenuItems.map((item, i) => (
                <RLink
                  key={i}
                  activeClass={styles.active}
                  to={item.url}
                  spy={true}
                  smooth={true}
                  offset={item.offSet}
                  duration={750}
                >
                  {item.title}
                </RLink>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
