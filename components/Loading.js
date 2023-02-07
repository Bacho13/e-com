import React from "react";
import styles from "../styles/componentStyles/Loading.module.scss";
import CircularProgress from "@mui/material/CircularProgress";

function Loading() {
  return (
    <>
      <div className={styles.main}>
        <CircularProgress />
      </div>
    </>
  );
}

export default Loading;
