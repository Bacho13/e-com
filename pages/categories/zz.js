import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../../styles/card.module.scss";

function Category() {
  const [quant, setQuant] = useState(0);

  const increase = () => {
    setQuant((prev) => prev + 1);
  };
  const decrease = () => {
    if (quant > 0) {
      setQuant((prev) => prev - 1);
    }
  };
  function fetchIt() {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }

  useEffect(() => {
    fetchIt();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.imgsCont}>
            <Image
              src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
              alt="item pic"
              priority
              height={250}
              width={250}
              className={styles.image}
            />
          </div>
          <div className={styles.rightSide}>
            <h1>
              John Hardy Womens Legends Naga Gold & Silver Dragon Station Chain
              Bracelet
            </h1>
            <h5>
              From our Legends Collection, the Naga was inspired by the mythical
              water dragon that protects the oceans pearl. Wear facing inward to
              be bestowed with love and abundance, or outward for protection.
            </h5>
            <p>price: 50 $</p>
            <div className={styles.quantCont}>
              <div className={styles.plusMinus} onClick={increate}>
                +
              </div>
              <div className={styles.quant}>{quant}</div>
              <div className={styles.plusMinus} onClick={decrease}>
                -
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <button>Add to Card</button>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
