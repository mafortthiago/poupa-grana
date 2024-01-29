import React, { useState } from "react";
import styles from "../styles/pages/Login.module.scss";
import { Link } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <main className={styles.login}>
      <form>
        <h3>Bem-vindo novamente!</h3>
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
        <input type="button" value="Entrar" className={styles.btn} />
        <p className={styles.paragraph_register}>
          <span>Você é novo por aqui?</span>
          <Link to="/cadastro" className={styles.link_register}>
            Registre-se
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Login;
