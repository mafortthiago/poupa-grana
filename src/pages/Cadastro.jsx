import React from "react";
import styles from "../styles/pages/Login.module.scss";
import styles2 from "../styles/pages/Cadastro.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
const Cadastro = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <main className={`${styles.login} ${styles2.login}`}>
      <form className={styles2.form}>
        <h3>Comece a poupar!</h3>
        <p>
          Você já tem cadastro?
          <br />
          <Link to="/cadastro" className={styles.link_register}>
            Faça login
          </Link>
        </p>
        <label htmlFor="login">Login</label>
        <input
          type="text"
          id="login"
          className={styles.input_login}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder="Insira seu email ou username"
        />
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          className={styles.input_password}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Insira sua senha"
        />
        <label htmlFor="password">Confirme a senha:</label>
        <input
          type="password"
          id="password"
          className={styles.input_password}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Insira sua senha"
        />
        <input type="button" value="Registrar" className={styles.btn} />
      </form>
    </main>
  );
};

export default Cadastro;
