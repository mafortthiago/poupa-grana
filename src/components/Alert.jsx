import React from "react";
import styles from "../styles/components/Alert.module.scss";
import { Link } from "react-router-dom";
export const Alert = ({ title, description, btnTitle }) => {
  return (
    <div className={styles.container_alert}>
      <div className={styles.alert}>
        <h3>{title}</h3>
        <p>{description}</p>

        <Link to={"/gestor"}>
          <button>{btnTitle}</button>
        </Link>
      </div>
    </div>
  );
};

export default Alert;
