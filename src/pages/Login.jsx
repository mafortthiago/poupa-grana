import React, { useContext, useState } from "react";
import useAuth from "../hooks/useAuth";
import styles from "../styles/pages/Login.module.scss";
import { Link } from "react-router-dom";
import Alert from "../components/alert";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const { createUser, loading, error, login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isClickedAlert, setIsClickedAlert] = useState(false);
  const [user, setUser] = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userLogin = {
      login: username,
      password: password,
    };
    const user = await login(userLogin);

    setUser(user);
    if (user) {
      setIsClickedAlert(true);
    }
  };
  return (
    <main className={styles.login}>
      <form onSubmit={handleSubmit}>
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
        <input type="submit" value="Entrar" className={styles.btn} />
        {error && <p className={styles.error}>{error.message}</p>}
        <p className={styles.paragraph_register}>
          <span>Você é novo por aqui?</span>
          <Link to="/cadastro" className={styles.link_register}>
            Registre-se
          </Link>
        </p>
      </form>
      {/* {error && (
        <Alert
          title={"Insucesso"}
          description={error}
          btnTitle={"Ok!"}
          link={"/login"}
        />
      )} */}
      {isClickedAlert && (
        <Alert
          title={"Sucesso"}
          description={
            "Login feito com sucesso, bem-vindo(a) novamente no poupa grana!"
          }
          btnTitle={"Ok!"}
          link={"/login"}
        />
      )}
    </main>
  );
};

export default Login;
