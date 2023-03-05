import React, { useEffect, useState } from "react";
import styles from "../styles/pageStyles/cart.module.scss";
import CartItem from "../components/CartItem";
import Checkout from "@/components/Checkout";
import { useDispatch, useSelector } from "react-redux";
import { decreaseItemQuant, increaseItemQuant } from "@/Redux/cartSlice";
import { useRouter } from "next/router";
import { getTotalQuant } from "@/Redux/cartSlice";

function Cart() {
  const user = useSelector((state) => state.user);
  let price = 900;
  const [quant, setQuant] = useState(1);
  const [total, setTotal] = useState(0);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();

  const minus = (index) => {
    // dispatch(decreaseItemQuant(index));
    console.log(index);
  };

  const plus = () => {
    setQuant((prev) => prev + 1);
  };

  const handleStateChange = () => {
    // Determine the new route based on the state
    const newRoute = user.logIn && "/Cart";

    // Navigate to the new route
    router.push(newRoute);
  };

  useEffect(() => {
    console.log(getTotalQuant(cart.items));
  }, [cart]);

  useEffect(() => {}, [user]);

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
                  console.log("daechira");
                }}
                handleIncrease={() => {
                  dispatch(increaseItemQuant(index));
                  console.log("daechira");
                }}
              />
            );
          })}
          <Checkout total={cart.total} />
        </div>
      </div>
    </>
  );
}

export default Cart;
