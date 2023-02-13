import Link from "next/link";
import React, { useEffect } from "react";
import styles from "../styles/componentStyles/CategoryDropDown.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "@/Redux/actions";

function CategoryDropDown() {
  const categories = useSelector((state) => state.categories.items);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          {categories.map((item, index) => (
            <Link key={index} href={`/categories/${item}`}>
              <li>{item}</li>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default CategoryDropDown;
