import React, { useEffect } from "react";
import styles from "../styles/componentStyles/Checkout.module.scss";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "@/Redux/cartSlice";
import { getSubTotal } from "@/Redux/cartSlice";

function Checkout({ total }) {
  let cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubTotal());
  }, [cart.items]);

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
            <div className={styles.ContShipping}>
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
