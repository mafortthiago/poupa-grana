import { useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
const useItems = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [cancelled, setCancelled] = useState(false);
  const [user] = useContext(AuthContext);
  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  const fetchItems = async () => {
    try {
      const response = await fetch(
        `https://api-poupa-grana-production.up.railway.app/item/user/${user.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: user.token,
          },
        }
      );

      let data = await response.json();
      data = data.map((item) => {
        const date = new Date(item.created_at);
        const day = date.getUTCDate();
        const month = date.getUTCMonth() + 1;
        const year = date.getUTCFullYear();
        return {
          ...item,
          created_at: `${day.toString().padStart(2, "0")}/${month
            .toString()
            .padStart(2, "0")}/${year}`,
        };
      });
      return data;
    } catch (e) {
      return;
    }
  };
  useEffect(() => {
    return () => setCancelled(true);
  }, []);
  return { fetchItems };
};
export default useItems;
