import React, { useEffect, useState } from "react";
import styles from "../styles/pageStyles/cart.module.scss";
import CartItem from "../components/CartItem";
import Checkout from "@/components/Checkout";
import { useDispatch, useSelector } from "react-redux";
import { decreaseItemQuant, increaseItemQuant } from "@/Redux/cartSlice";

function Cart() {
  let price = 900;
  const [quant, setQuant] = useState(1);
  const [total, setTotal] = useState(0);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const minus = (index) => {
    // dispatch(decreaseItemQuant(index));
    console.log(index);
  };

  const plus = () => {
    setQuant((prev) => prev + 1);
  };

  // const calculateTotal = () => {
  //   setTotal(quant * price);
  // };

  console.log(cart.items);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <h2>Cart</h2>
          {cart.items.map((item, index) => {
            return (
              <CartItem
                key={index}
                product={item}
                index={index}
                handleDecrease={() => {
                  dispatch(decreaseItemQuant(index));
                }}
                handleIncrease={() => {
                  dispatch(increaseItemQuant(index));
                }}
              />
            );
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
