import React from "react";
import styles from "../styles/pageStyles/LogIn.module.scss";
import LogInForm from "@/components/LogInForm";

function LogIn() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <LogInForm />
        </div>
      </div>
    </>
  );
}

export default LogIn;
