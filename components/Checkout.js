import React, { useEffect } from "react";
import styles from "../styles/componentStyles/Checkout.module.scss";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "@/Redux/cartSlice";
import { getSubTotal } from "@/Redux/cartSlice";
import { useRouter } from "next/router";

function Checkout({ total }) {
  let cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getSubTotal());
  }, [cart.items]);

  const backToShopping = () => {
    router.back();
    router.back();
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.left}>
          <button
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            Clear cart
          </button>
        </div>
        <div className={styles.right}>
          <div className={styles.container}>
            <div className={styles.subtotal}>
              <p className={styles.subP}>Subtotal</p>
              <h6>${cart.subTotal}</h6>
            </div>
            <div className={styles.checkButton}>
              <button>Checout</button>
            </div>
            <div className={styles.ContShipping} onClick={backToShopping}>
              <KeyboardBackspaceIcon />
              <p>Continue Shopping</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
