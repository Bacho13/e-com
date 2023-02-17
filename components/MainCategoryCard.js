import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/componentStyles/MainCategoryCard.module.scss";

function MainCategoryCard({ title, price, img, desc, id }) {
  return (
    <>
      <Link href={`/product/${id}`}>
        <div className={styles.main}>
          <div className={styles.top}>
            <Image
              width={250}
              height={150}
              src={img}
              alt={""}
              className={styles.img}
            />
          </div>
          <div className={styles.bottom}>
            <h1>{title}</h1>
            <p className={styles.desc}>{desc}</p>
            <p className={styles.price}>{price}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default MainCategoryCard;
