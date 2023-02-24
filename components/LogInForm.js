import React, { useState } from "react";
import styles from "../styles/componentStyles/LogInForm.module.scss";
import { logIn } from "@/Redux/userSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

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
    const fetchUsers = async (user) => {
      const res = await axios.get(
        `https://dummyjson.com/users/filter?key=username&value=${user}`
      );
      return res.data;
    };

    const fetchUser = async (userId) => {
      const res = await axios.get(
        `https://dummyjson.com/users/filter?key=id&value=${userId}`
      );
      return res.data;
    };

    fetchUsers(user, password).then((data) => {
      for (let i = 0; i < data.users.length; i++) {
        if (
          data.users[i].username === user &&
          data.users[i].password === password
        ) {
          console.log(data.users[i].id);
          fetchUser(data.users[i].id).then(
            (data) => dispatch(logIn(data.users[0]), console.log(data.users[0]))
            // (data) => console.log(data.users[0])
          );
        } else {
          console.log("aseti momxmarebeli ar arsebobs an ar emtxveva paroli");
        }
      }
    });
  };

  console.log(userLogin);

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
            <p className={styles.error}>error aris ver shexvedi</p>
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
