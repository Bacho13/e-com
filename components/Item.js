import Image from "next/image";
import React from "react";
import styles from "../styles/componentStyles/Item.module.scss";

function Item({ imgSrc, title, des, price }) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.leftSide}>
          <div className={styles.imgCont}>
            {/* <img src={imgSrc} alt="product img" /> */}
            <Image
              src={imgSrc}
              alt="product img"
              objectFit
              width="100"
              height="100"
              className={styles.img}
              object-fit="contain"
            />
          </div>
        </div>
        <div className={styles.rightSide}>
          <h1>{title}</h1>
          <p className={styles.des}>{des}</p>
          <p className={styles.price}>$ {price}</p>
        </div>
      </div>
    </>
  );
}

export default Item;
