import RegistrationForm from "@/components/RegistrationForm";
import React from "react";
import styles from "../styles/pageStyles/Registration.module.scss";

function Registration() {
  return (
    <>
      <div className={styles.main}>
        <RegistrationForm />
      </div>
    </>
  );
}

export default Registration;
