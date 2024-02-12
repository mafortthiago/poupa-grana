import React from "react";
import styles from "../styles/pages/Loading.module.scss";
const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.ball}></div>
      <div className={styles.ball}></div>
      <div className={styles.ball}></div>
    </div>
  );
};

export default Loading;
