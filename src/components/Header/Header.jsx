import React from "react";
import styles from "../../styles/components/Header.module.scss";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={"/"}>
        <h1>Poupa Grana</h1>
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
