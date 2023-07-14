import React from "react";
import Styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={Styles.container}>
      <nav className={Styles.logo}>
        <li>copyright logo @ navnit </li>
      </nav>
      <nav className={Styles.navigation}>
        <li>facebook</li>
        <li>instagram</li>
        <li>twitter</li>
        <li>github</li>
        <li>career</li>
        <li>contact</li>
      </nav>
    </div>
  );
}
