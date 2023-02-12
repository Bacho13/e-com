import Link from "next/link";
import React, { useEffect } from "react";
import styles from "../styles/componentStyles/CategoryDropDown.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "@/Redux/actions";

function CategoryDropDown() {
  const categories = useSelector((state) => state.categories.items);
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <ul>
            {categories.map((item, index) => (
              <li key={index}>
                <Link href={`/categories/${item}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default CategoryDropDown;
