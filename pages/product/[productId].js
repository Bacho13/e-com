import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import styles from "../../styles/card.module.scss";
import { addToCart } from "../../Redux/cartSlice";
import { useDispatch } from "react-redux";

function CategoryItem({ data }) {
  const router = useRouter();
  const productId = router.query.productId;
  const [fetchedData, setfetchedData] = useState([]);
  const dispatch = useDispatch();
  const [quant, setQuant] = useState(1);
  let [choosen, setChoosen] = useState({
    productId: 0,
    quant: 1,
  });

  const increase = () => {
    setQuant((prev) => prev + 1);
  };
  const decrease = () => {
    if (quant > 0) {
      setQuant((prev) => prev - 1);
    }
  };

  useEffect(() => {
    setfetchedData(data);
  }, [productId]);

  useEffect(() => {
    choosen.productId = productId;
  }, [productId]);

  useEffect(() => {
    choosen.quant = quant;
  }, [quant]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.imgsCont}>
            <Image
              src={data.image}
              alt="item pic"
              priority
              height={250}
              width={250}
              className={styles.image}
            />
          </div>
          <div className={styles.rightSide}>
            <h1>{data.title}</h1>
            <h5>{data.description}</h5>
            <p>price: {data.price} $</p>
            <div className={styles.quantCont}>
              <div className={styles.plusMinus} onClick={decrease}>
                -
              </div>
              <div className={styles.quant}>{quant}</div>
              <div className={styles.plusMinus} onClick={increase}>
                +
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <button
                onClick={() => {
                  dispatch(addToCart(choosen));
                }}
              >
                Add to Card
              </button>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CategoryItem;

export async function getServerSideProps(context) {
  const { params } = context;
  const { productId } = params;
  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  );
  const data = await response.json();
  return {
    props: {
      data: data,
    },
  };
}
