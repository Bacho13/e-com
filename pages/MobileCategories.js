import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/pageStyles/MobileCategories.module.scss";

function MobileCategories() {
  const categories = useSelector((state) => state.categories.items);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          {categories.map((item, index) => (
            <Link
              key={index}
              href={`/categories/${item}`}
              className={styles.link}
            >
              <li>{item}</li>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default MobileCategories;
