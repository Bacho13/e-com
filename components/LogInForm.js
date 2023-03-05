import React, { useEffect, useState } from "react";
import styles from "../styles/componentStyles/LogInForm.module.scss";
import { logIn } from "@/Redux/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { updateCart } from "@/Redux/cartSlice";
import { updateCartOfTheUser } from "@/Redux/cartSlice";

function LogInForm() {
  const user = useSelector((state) => state.user.userInfos);
  const userLogin = useSelector((state) => state.user.logIn);
  const [logCreditionals, setLogCreditionals] = useState({
    user: "user",
    password: "paroli",
  });
  const dispatch = useDispatch();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setLogCreditionals((prevState) => ({ ...prevState, [name]: value.trim() }));
  }

  const handleLogIn = (user, password) => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user,
        password: password,
        // expiresInMins: 60, // optional
      }),
    })
      .then((res) => res.json())
      .then((data) => dispatch(logIn(data)));
  };

  const fetchCartItem = async (id) => {
    const response = await fetch(`https://dummyjson.com/carts/${id}`);
    const data = await response.json();
    return data;
  };

  const updateCart = (id) => async (dispatch) => {
    const item = await fetchCartItem(id);
    dispatch(updateCartOfTheUser(item));
  };

  useEffect(() => {
    if (userLogin) {
      dispatch(updateCart(user.id));
    }
  }, [user]);

  const showContetn = (user) => {
    {
      logCreditionals.user !== "user" ? (
        <h1> {user.firstName}</h1>
      ) : (
        <div>
          <label className={styles.label}>
            <h2>User Id</h2>
            <input type="text" name="user" onChange={handleInputChange} />
          </label>
          <label className={styles.label}>
            <h2>Password</h2>
            <input
              type="password"
              name="password"
              onChange={handleInputChange}
            />
          </label>
          <p className={styles.error}>error aris ver shexvedi</p>
          <button
            onClick={() =>
              handleLogIn(logCreditionals.user, logCreditionals.password)
            }
          >
            Log IN
          </button>
        </div>
      );
    }
  };

  return (
    <>
      <div className={styles.main}>
        {userLogin ? (
          <div>Hello, {user.firstName}</div>
        ) : (
          <div>
            <label className={styles.label}>
              <h2>User Id</h2>
              <input type="text" name="user" onChange={handleInputChange} />
            </label>
            <label className={styles.label}>
              <h2>Password</h2>
              <input
                type="password"
                name="password"
                onChange={handleInputChange}
              />
            </label>
            <p className={styles.error}></p>
            <button
              onClick={() =>
                handleLogIn(logCreditionals.user, logCreditionals.password)
              }
            >
              Log IN
            </button>
          </div>
        )}
        {/* {user.firstname ? (
          <h1>yes</h1>
        ) : (
          <div>
            <label className={styles.label}>
              <h2>User Id</h2>
              <input type="text" name="user" onChange={handleInputChange} />
            </label>
            <label className={styles.label}>
              <h2>Password</h2>
              <input
                type="password"
                name="password"
                onChange={handleInputChange}
              />
            </label>
            <p className={styles.error}>error aris ver shexvedi</p>
            <button
              onClick={() =>
                handleLogIn(logCreditionals.user, logCreditionals.password)
              }
            >
              Log IN
            </button>
          </div>
        )} */}
      </div>
    </>
  );
}

export default LogInForm;
