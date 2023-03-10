import Link from "next/link";
import React from "react";
import styles from "../styles/componentStyles/MenuSlider.module.scss";

function MenuSlider() {
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <Link href="/MobileCategories">
            <li>Categories</li>
          </Link>
          <Link href="/Cart">
            <li>Cart </li>
          </Link>
          <Link href="#">
            <li>Log in</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default MenuSlider;
