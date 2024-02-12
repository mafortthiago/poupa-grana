// hooks
import { useContext, useState } from "react";
// style
import styles from "../styles/components/Item.module.scss";
// Import icons
import { BsCaretDownFill } from "react-icons/bs";
import { BsCaretUpFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { BsTrash3Fill } from "react-icons/bs";
//import user
import AuthContext from "../context/AuthContext";
//Component
import { InsertEntry } from "../components/InsertEntry";

export const Item = ({ item }) => {
  const [user] = useContext(AuthContext);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const types = ["Salário", "Contas", "Presente"];
  const deleteItem = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8080/item/${item.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: user.token,
        },
      });
      if (!response.ok) {
        throw new Error("Erro ao deletar");
      }
      setIsDeleteClicked(false);
    } catch (e) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className={styles.item}>
        <div className={styles.title_item}>
          {item.value > 0 ? (
            <BsCaretUpFill fill="#90aa86" className={styles.icon} />
          ) : (
            <BsCaretDownFill fill="#723D46" className={styles.icon} />
          )}
          <h4>{item.description}</h4>
        </div>

        <div className={styles.panel_item}>
          <span>Valor: R${item.value > 0 ? item.value : -item.value}</span>
          <span>{item.created_at}</span>
          <span onClick={() => setIsEditClicked(true)}>
            <BsFillPencilFill className={styles.icon} />
          </span>
          <span onClick={() => setIsDeleteClicked(true)}>
            <BsTrash3Fill className={styles.icon} />
          </span>
        </div>
      </div>
      {isDeleteClicked && (
        <>
          <div className={styles.container_delete_alert}>
            <div className={styles.delete_alert}>
              <h3>Aviso</h3>
              <p>
                Você deseja realmente
                <span className={styles.text_delete}>excluir</span> a
                movimentação
                <span className={styles.text_description}>
                  {item.description}
                </span>
                ?
              </p>
              <div className={styles.delete_buttons}>
                <button onClick={() => setIsDeleteClicked(false)}>Não</button>
                {loading ? (
                  <button onClick={() => deleteItem()} disabled>
                    Aguarde...
                  </button>
                ) : (
                  <button onClick={() => deleteItem()}>Sim</button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
      {isEditClicked && (
        <>
          <InsertEntry
            setIsInsertEntry={setIsEditClicked}
            title={"Editar item"}
            action={item.value >= 0 ? "Inserir" : "Retirar"}
            types={types}
            value_edit={item.value >= 0 ? item.value : -item.value}
            type_edit={item.type}
            description_edit={item.description}
            date_edit={item.created_at}
            method={"PUT"}
            item_id={item.id}
          />
        </>
      )}
    </>
  );
};

export default Item;
