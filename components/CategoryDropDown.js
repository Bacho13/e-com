import Link from "next/link";
import React, { useEffect } from "react";
import styles from "../styles/componentStyles/CategoryDropDown.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "@/Redux/actions";

function CategoryDropDown() {
  const fetchedCategories = useSelector((state) => state.categories.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <ul>
            {fetchedCategories.map((item, index) => (
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
