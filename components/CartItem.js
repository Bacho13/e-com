import React, { useEffect, useState } from "react";
import styles from "../styles/componentStyles/CartItem.module.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTotalQuant } from "@/Redux/cartSlice";
function CartItem({ product, quant, index, handleDecrease, handleIncrease }) {
  let cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalQuant());
  }, [cart.state]);

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
                    <div className={styles.minus} onClick={handleDecrease}>
                      -
                    </div>
                    <div>{product.itemQuant}</div>
                    <div className={styles.plus} onClick={handleIncrease}>
                      +
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.totalCont}>
                    <h2>
                      ${" "}
                      {parseFloat(product.price * product.itemQuant.toFixed(2))}
                    </h2>
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
