import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Item from "../../components/Item";
import styles from "../../styles/pageStyles/CategoryName.module.scss";
import CircularProgress from "@mui/material/CircularProgress";
import { fetchProducts } from "../../Redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { getProductsFailure, getProductsSuccess } from "../../Redux/store";

function CategoryItem({ data }) {
  const products = useSelector((state) => state.products.items.products);
  const router = useRouter();
  const dispatch = useDispatch();
  const categoryName = router.query.categoryName;

  useEffect(() => {
    try {
      const res = axios
        .get(`https://dummyjson.com/products/category/${categoryName}`)
        .then(function (response) {
          dispatch(getProductsSuccess(response.data));
        });
    } catch (error) {
      dispatch(getProductsFailure(error.message));
    }
  }, []);

  useEffect(() => {
    console.log(products);
  }, []);

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

// export async function getServerSideProps(context) {
//   const { params } = context;
//   const { categoryName } = params;
//   const response = await fetch(
//     `https://fakestoreapi.com/products/category/${categoryName}`
//   );
//   const data = await response.json();
//   return {
//     props: {
//       data: data,
//     },
//   };
// }
