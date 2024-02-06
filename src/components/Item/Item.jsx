import { useContext, useState } from "react";
import "../../styles/components/Item.scss";
import imgEntry from "../../assets/img/entry.png";
import imgExit from "../../assets/img/exit.png";
import imgDelete from "../../assets/img/delete.png";
import imgEdit from "../../assets/img/edit.png";
// Import icons
import { BsCaretDownFill } from "react-icons/bs";
import { BsCaretUpFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { BsTrash3Fill } from "react-icons/bs";
//import user
import AuthContext from "../../context/AuthContext";
export const Item = ({ item }) => {
  const [user] = useContext(AuthContext);
  //console.log(user);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
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
      console.log(e.message);
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="item">
        <div className="title_item">
          {item.value > 0 ? (
            <BsCaretUpFill fill="#90aa86" className="icon" />
          ) : (
            <BsCaretDownFill fill="#723D46" className="icon" />
          )}
          <h4>{item.description}</h4>
        </div>

        <div className="panel_item">
          <span>Valor: R${item.value > 0 ? item.value : -item.value}</span>
          <span>{item.created_at}</span>
          <span>
            <BsFillPencilFill className="icon" />
          </span>
          <span onClick={() => setIsDeleteClicked(true)}>
            <BsTrash3Fill className="icon" />
          </span>
        </div>
      </div>
      {isDeleteClicked && (
        <>
          <div className="container_delete_alert">
            <div className="delete_alert">
              <h3>Aviso</h3>
              <p>
                Você deseja realmente{" "}
                <span className="text_delete">excluir</span> a movimentação
                <span className="text_description"> {item.description}</span>?
              </p>
              <div className="delete_buttons">
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
    </>
  );
};

export default Item;
