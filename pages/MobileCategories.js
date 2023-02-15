import Link from "next/link";
import React, { useEffect } from "react";
import { createDispatchHook, useDispatch, useSelector } from "react-redux";
import styles from "../styles/pageStyles/MobileCategories.module.scss";
import { fetchCategories, fetchProducts } from "../Redux/actions";
import CircularProgress from "@mui/material/CircularProgress";

function MobileCategories() {
  const categories = useSelector((state) => state.categories.items);
  const loading = useSelector((state) => state.categories.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  });

  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          {loading ? (
            <div className={styles.loadingCoont}>
              <CircularProgress />
            </div>
          ) : (
            categories.map((item, index) => (
              <Link
                key={index}
                href={`/categories/${item}`}
                className={styles.link}
              >
                <li>{item}</li>
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default MobileCategories;
