import React, { useContext } from "react";
import styles from "../styles/pages/Login.module.scss";
import styles2 from "../styles/pages/Cadastro.module.scss";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

import { useState } from "react";
import useAuth from "../hooks/useAuth";
import Alert from "../components/Alert";
const Cadastro = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [user, setUser] = useContext(AuthContext);
  const { createUser, loading, error, login } = useAuth();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isClickedAlert, setIsClickedAlert] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!username || !password || !confirmPassword) {
      setErrorMessage("Por favor, preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("As senhas não correspondem.");
      return;
    }
    if (password.length < 6) {
      setErrorMessage("A senha deve ter no mínimo 6 caracteres");
      return;
    }
    const userRegister = {
      login: username,
      password: password,
      role: "ADMIN",
    };
    const userLogin = {
      login: username,
      password: password,
    };

    const registed = await createUser(userRegister, userLogin);
    if (registed) {
      const loggedInUser = await login(userLogin);
      setUser(loggedInUser);
      navigate("/");
    }
  };

  return (
    <main className={`${styles.login} ${styles2.login}`}>
      <form className={styles2.form} onSubmit={handleSubmit}>
        <h3>Comece a poupar!</h3>

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
        <label htmlFor="confirm_password">Confirme a senha:</label>
        <input
          type="password"
          id="confirm_password"
          className={styles.input_password}
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          placeholder="Insira sua senha"
        />
        {loading && (
          <input
            type="submit"
            value="Aguarde..."
            className={styles.btn}
            disabled
          />
        )}
        {!loading && (
          <input type="submit" value="Registrar" className={styles.btn} />
        )}
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        {error && <p className={styles.error}>{error.message}</p>}
        <p>
          <span>Você já tem cadastro?</span>
          <Link to="/login" className={styles.link_register}>
            Faça login
          </Link>
        </p>
      </form>
      {/* {error && (
        <Alert
          title={"Insucesso"}
          description={error.message}
          btnTitle={"Ok!"}
          link={"/cadastro"}
          setIsClickedAlert={setIsClickedAlert}
        />
      )} */}

      {isClickedAlert && (
        <Alert
          title={"Sucesso"}
          description={
            "Seu registro foi efetuado com sucesso, agora é só começar a poupar!"
          }
          btnTitle={"Ok!"}
          link={"/"}
        />
      )}
    </main>
  );
};

export default Cadastro;
