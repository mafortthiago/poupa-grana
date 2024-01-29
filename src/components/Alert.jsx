import React from "react";
import styles from "../styles/components/Alert.module.scss";
import { Link } from "react-router-dom";
const Alert = ({ title, description, btnTitle }) => {
  return (
    <div className={styles.container_alert}>
      <div className={styles.alert}>
        <h3>{title}</h3>
        <p>{description}</p>
        <button>
          <Link to={"/gestor"}>{btnTitle}</Link>
        </button>
      </div>
    </div>
  );
};

export default Alert;
