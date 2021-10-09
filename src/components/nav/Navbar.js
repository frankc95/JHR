import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { MenuItems } from "./MenuItems";
import styles from "./Navbar.module.scss";

const Navbar = ({ mobileMenu, setMobileMenu }) => {
  const [navbar, setNavbar] = useState(false);
  const [activeLink, setActiveLink] = useState({ activeIndex: 0 });

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
          <div className={styles.navItems}>
            {MenuItems.map((item, i) => (
              <Link
                key={i}
                href={{
                  pathname: item.pathname,
                  hash: item.hash,
                }}
                spy={true}
                offset={item.offSet}
                duration={750}
              >
                <a
                  onClick={() => setActiveLink({ activeIndex: i })}
                  className={`${i == activeLink.activeIndex && styles.active}`}
                >
                  {item.title}
                </a>
              </Link>
            ))}
          </div>
          <div className={styles.navAction}>
            <Link
              href={{
                pathname: "/",
                hash: "5",
              }}
              duration={1000}
            >
              Get In Touch
            </Link>
          </div>
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
                <Link
                  key={i}
                  activeClass={styles.active}
                  href={{
                    pathname: item.pathname,
                    hash: item.hash,
                  }}
                  spy={true}
                  offset={item.offSet}
                  duration={750}
                >
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
