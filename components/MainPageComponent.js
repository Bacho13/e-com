import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/componentStyles/MainPageComponent.module.scss";
import Carousel from "./Carousel";
import Item from "./Item";
import CategoryOnMain from "@/components/CategoryOnMain";

function MainPageComponent() {
  const products = useSelector((state) => state.products.items);

  return (
    <>
      <div className={styles.main}>
        {/* <div className={styles.container}>
           {products.map((item) => {
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
        </div> */}
        <Carousel />
        <CategoryOnMain categoryName="smartphones" />
        <CategoryOnMain categoryName="laptops" />
      </div>
    </>
  );
}

export default MainPageComponent;
