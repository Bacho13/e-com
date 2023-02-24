import React, { useEffect, useState } from "react";
import styles from "../styles/componentStyles/RegistrationForm.module.scss";
import { useFormik } from "formik";
import { basicSchema } from "../schemas/index";

const onSubmit = async (value, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log();
  actions.resetForm();
};

function RegistrationForm() {
  const {
    values,
    touched,
    isSubmitting,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      last: "",
      email: "",
      pNumber: "",
      pass: "",
      confPass: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <h1>Registration</h1>
            <label>
              <h2>Name:</h2>
              <input
                className={
                  errors.name && touched.name && `${styles.inputError}`
                }
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            <p>{errors.name && touched.name && errors.name}</p>
            <label>
              <h2>Last Name:</h2>
              <input
                className={
                  errors.name && touched.last && `${styles.inputError}`
                }
                type="text"
                name="last"
                value={values.last}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            <p>{errors.last && touched.last && errors.last}</p>
            <label>
              <h2>Email:</h2>

              <input
                className={
                  errors.email && touched.email && `${styles.inputError}`
                }
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            <p>{errors.email && touched.email && errors.email}</p>
            <label>
              <h2>Phone numbers:</h2>

              <input
                className={
                  errors.pNumber && touched.pNumber && `${styles.inputError}`
                }
                name="pNumber"
                value={values.pNumber}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            <p>{errors.pNumber && touched.pNumber && errors.pNumber}</p>
            <label>
              <h2>Password:</h2>

              <input
                className={
                  errors.pass && touched.pass && `${styles.inputError}`
                }
                type="password"
                name="pass"
                value={values.pass}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            <p>{errors.pass && touched.pass && errors.pass}</p>
            <label>
              <h2>Confirm password:</h2>
              <input
                className={
                  errors.confPass && touched.confPass && `${styles.inputError}`
                }
                type="password"
                name="confPass"
                value={values.confPass}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            <p>{errors.confPass && touched.confPass && errors.confPass}</p>
            <button disabled={isSubmitting}>creat account</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegistrationForm;
