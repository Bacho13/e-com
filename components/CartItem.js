import React, { useEffect, useState } from "react";
import styles from "../styles/componentStyles/CartItem.module.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart, clearCart } from "@/Redux/cartSlice";
function CartItem({ productId, quant }) {
  let cart = useSelector((state) => state.cart);
  let cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [total, setTotal] = useState(1);
  const [innerQuant, setInnerQuant] = useState(quant);

  const plus = () => {
    setInnerQuant((prev) => prev + 1);
  };
  const minus = () => {
    if (innerQuant > 1) {
      setInnerQuant((prev) => prev - 1);
    } else {
      let newCart = cartItems.filter((obj) => obj.productId == productId);
      dispatch(clearCart());
      dispatch(addToCart(newCart));
    }
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
    console.log(productId);
  }, []);

  useEffect(() => {
    setTotal(innerQuant * product.price);
  }, [minus, plus]);

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
                    <div className={styles.minus} onClick={minus}>
                      -
                    </div>
                    <div>{innerQuant}</div>
                    <div className={styles.plus} onClick={plus}>
                      +
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.totalCont}>
                    <h2>$ {total}</h2>
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
