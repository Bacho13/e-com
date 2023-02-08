import React, { useEffect, useState } from "react";
import styles from "../styles/pageStyles/cart.module.scss";
import CartItem from "../components/CartItem";
import Checkout from "@/components/Checkout";
import { useSelector } from "react-redux";

function Cart() {
  let price = 900;
  const [quant, setQuant] = useState(1);
  const [total, setTotal] = useState(0);
  const cart = useSelector((state) => state.cart);

  const plus = () => {
    setQuant((prev) => prev + 1);
  };

  const minus = () => {
    if (quant > 1) {
      setQuant((prev) => prev - 1);
    }
  };

  // const calculateTotal = () => {
  //   setTotal(quant * price);
  // };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <h2>Cart</h2>
          {cart.items.map((item, index) => {
            return <CartItem key={index} product={item} />;
          })}
          {/* <CartItem
            quant={quant}
            handleplus={plus}
            handleminus={minus}
            price={price}
          />
          <CartItem
            quant={quant}
            handleplus={plus}
            handleminus={minus}
            price={price}
          /> */}
          <Checkout total={cart.total} />
        </div>
      </div>
    </>
  );
}

export default Cart;
