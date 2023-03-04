import React from "react";
import styles from "../styles/pageStyles/LogIn.module.scss";
import LogInForm from "@/components/LogInForm";

function LogIn() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <LogInForm />
          <h1>
            Use to test the web site <br />
            User : kmeus4 <br />
            Password : aUTdmmmbH
          </h1>
        </div>
      </div>
    </>
  );
}

export default LogIn;
