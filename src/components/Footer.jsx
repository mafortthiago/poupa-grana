import React from "react";
import styles from "../styles/components/Footer.module.scss";
import { Link } from "react-router-dom";
//hooks
import { useContext } from "react";
//icones:
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsMailbox2 } from "react-icons/bs";
//user
import AuthContext from "../context/AuthContext";
const Footer = () => {
  const [user] = useContext(AuthContext);
  return (
    <footer className={styles.footer}>
      <div className={styles.about}>
        <h3>Poupa grana</h3>
        <p>
          Projeto feito com react no front-end e no back-end, Java com spring e
          o banco de dados PostgreSQL.
        </p>
      </div>
      <div className={styles.links_container}>
        <h3>Links úteis</h3>
        <div className={styles.links}>
          {user ? (
            <>
              <Link to={"/"}>Home</Link>
              <Link to={"/gestor"}>Gestor</Link>
            </>
          ) : (
            <>
              <Link to={"/login"}>Login</Link>
              <Link to={"/cadastro"}>Cadastro</Link>
            </>
          )}
        </div>
      </div>
      <div className={styles.contact}>
        <h3>Contato</h3>
        <a href="https://www.linkedin.com/in/thiago-mafort/" target="_blank">
          <BsLinkedin className={styles.icon} />
        </a>
        <a href="https://github.com/mafortthiago" target="_blank">
          <BsGithub className={styles.icon} />
        </a>
        <a href="mailto:mafortthiago@gmail.com" target="_blank">
          <BsMailbox2 className={styles.icon} />
        </a>
      </div>
      <div className={styles.portfolio}>
        <hr />
        <a
          href="https://mafortthiago.github.io/"
          className={styles.link_portfolio}
          target="_blank"
        >
          Thiago Mafort
        </a>
      </div>
    </footer>
  );
};

export default Footer;
