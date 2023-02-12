import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Item from "../../components/Item";
import styles from "../../styles/pageStyles/CategoryName.module.scss";
import CircularProgress from "@mui/material/CircularProgress";
import { fetchProduct } from "../../Redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { getProductsFailure, getProductsSuccess } from "../../Redux/store";

function CategoryItem({ data }) {
  const products = useSelector((state) => state.products.items);
  const router = useRouter();
  const dispatch = useDispatch();
  const categoryName = router.query.categoryName;

  const handleFetchProduct = async (categoryName) => {
    const result = await fetchProduct(categoryName);
    dispatch(getProductsSuccess(result.products));
    console.log(result.products);
  };

  useEffect(() => {
    handleFetchProduct(categoryName);
  }, [categoryName]);

  return (
    <>
      <div>
        <div className={styles.container}>
          <h1> {categoryName}</h1>
          {products.map((item) => {
            return (
              <Link key={item.id} href={`/product/${item.id}`}>
                <Item
                  key={item.id}
                  title={item.title}
                  imgSrc={item.thumbnail}
                  des={item.description}
                  price={item.price}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default CategoryItem;
