import Link from "next/link";
import React, { useEffect } from "react";
import styles from "../styles/componentStyles/CategoryDropDown.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "@/Redux/actions";

function CategoryDropDown({ onMouseEnter }) {
  const categories = useSelector((state) => state.categories.items);

  return (
    <>
      <div className={styles.main} onMouseEnter={onMouseEnter}>
        <div className={styles.container}>
          {categories.map((item, index) => (
            <Link key={index} href={`/categories/${item}`}>
              <div className={styles.li}>{item}</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default CategoryDropDown;
