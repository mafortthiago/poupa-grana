import { useState, useEffect } from "react";
const useAuth = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [cancelled, setCancelled] = useState(false);

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }
  const createUser = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://api-poupa-grana-production.up.railway.app/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        console.log(response);
        throw new Error("Usuário já existe!");
      }

      setLoading(false);
      return true;
    } catch (err) {
      setError(err);
      setLoading(false);
      return false;
    }
  };
  const login = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);
    let response;
    try {
      response = await fetch(
        "https://api-poupa-grana-production.up.railway.app/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
    } catch (error) {
      setError("Ocorreu um erro, tente novamente mais tarde!");
      return;
    }

    if (!response.ok) {
      setLoading(false);
      setError("Usuário e/ou senha inválido(s).");
      return;
    }

    let responseData;
    try {
      responseData = await response.json();
    } catch (error) {
      setLoading(false);
      setError("Ocorreu um erro, tente novamente mais tarde!");

      return;
    }

    const token = responseData.token;
    if (!token) {
      setLoading(false);
      setError("Erro ao gerar token de acesso.");
      return;
    }

    const userLogged = {
      id: responseData.id,
      login: data.login,
      token: token,
    };
    setLoading(false);
    return userLogged;
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { createUser, loading, error, login };
};

export default useAuth;
