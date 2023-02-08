import React, { useEffect, useState } from "react";
import styles from "../styles/componentStyles/CartItem.module.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart, clearCart } from "@/Redux/cartSlice";
function CartItem({ product, quant }) {
  let cart = useSelector((state) => state.cart);
  let cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <table className={styles.customTable}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className={styles.product}>
                    <img src={product.image} alt="product img" width={150} />
                    <p>{product.title}</p>
                  </div>
                </td>
                <td>$ {product.price}</td>
                <td>
                  <div className={styles.qunatChanger}>
                    <div className={styles.minus}>-</div>
                    <div>1</div>
                    <div className={styles.plus}>+</div>
                  </div>
                </td>
                <td>
                  <div className={styles.totalCont}>
                    <h2>$ {product.price}</h2>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default CartItem;
