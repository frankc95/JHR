import React, { useState } from "react";
import styles from "./Layout.module.scss";

import Navbar from "../nav/Navbar";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className={styles.container}>
      <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
