import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Item from "../../components/Item";
import styles from "../../styles/pageStyles/CategoryName.module.scss";
import CircularProgress from "@mui/material/CircularProgress";

function CategoryItem({ data }) {
  const router = useRouter();
  const categoryName = router.query.categoryName;
  const [fetchedData, setfetchedData] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((json) => setfetchedData(json));
  }, [categoryName]);

  console.log(fetchedData);
  return (
    <>
      <div>
        <div className={styles.container}>
          <h1> {categoryName}</h1>
          {fetchedData.map((item) => {
            return (
              <Link key={item.id} href={`/product/${item.id}`}>
                <Item
                  key={item.id}
                  title={item.title}
                  imgSrc={item.image}
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
