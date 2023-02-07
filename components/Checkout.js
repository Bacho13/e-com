import React from "react";
import styles from "../styles/componentStyles/Checkout.module.scss";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useDispatch } from "react-redux";
import { clearCart } from "@/Redux/cartSlice";

function Checkout({ total }) {
  const dispatch = useDispatch(0);
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
              <h6>${total}</h6>
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
