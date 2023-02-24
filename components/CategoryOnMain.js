import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../styles/componentStyles/CategoryOnMain.module.scss";
import MainCategoryCard from "./MainCategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";

function CategoryOnMain({ categoryName }) {
  const [products, setProducts] = useState([]);
  SwiperCore.use([Autoplay]);

  const getData = async (x) => {
    const response = await axios.get(
      `https://dummyjson.com/products/category/${x}`
    );

    setProducts(response.data.products);
  };

  useEffect(() => {
    getData(categoryName);
  }, []);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.header}>{categoryName}</h1>
          <div className={styles.swiperCont}>
            <Swiper
              modules={[Navigation]}
              spaceBetween={48}
              navigation
              slidesPerView={4}
              //   onSlideChange={() => console.log("slide change")}
              //   onSwiper={(swiper) => console.log(swiper)}
              //   style={{ width: "100%", margin: "0 auto" }}
            >
              <div className={styles.leftShade}></div>
              <div className={styles.rightShade}></div>
              {products.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <MainCategoryCard
                      id={item.id}
                      title={item.title}
                      desc={item.description}
                      img={item.thumbnail}
                      price={item.price}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryOnMain;
