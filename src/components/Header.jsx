import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <nav className={styles.logo}>
        <li>Logo</li>
      </nav>
      <nav className={styles.navigation}>
        <li>Syllabus</li>
        <li>Notes</li>
        <li>Tutorial</li>
        <li>Contact us</li>
      </nav>
    </div>
  );
}

export default Header;
