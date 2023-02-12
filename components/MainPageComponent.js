import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/componentStyles/MainPageComponent.module.scss";
import Item from "./Item";

function MainPageComponent() {
  const products = useSelector((state) => state.products.items);

  return (
    <>
      <div className={styles.main}>
        <h1>All Products </h1>
        <div className={styles.container}>
          {/* {products.map((item) => {
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
          })} */}
        </div>
      </div>
    </>
  );
}

export default MainPageComponent;
