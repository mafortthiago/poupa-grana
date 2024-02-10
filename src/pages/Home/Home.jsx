import React, { useState, useEffect } from "react";
import "../../styles/pages/Home.scss";
import imgEntry from "../../assets/img/entry.png";
import imgExit from "../../assets/img/exit.png";
import { AssetChart } from "../../components/AssetChart/AssetChart";
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillTrash3Fill } from "react-icons/bs";

import useItems from "../../hooks/useItems";
export const Home = () => {
  const { fetchItems } = useItems();
  const [items, setItems] = useState([]);
  const [goal, setGoal] = useState("");
  const [tempGoal, setTempGoal] = useState("");
  const [existsGoal, setExistsGoal] = useState(false);
  const [isDeleteGoal, setIsDeleteGoal] = useState(false);
  const [isEditGoal, setIsEditGoal] = useState(false);
  const setGoalInStorage = (name, value) => {
    localStorage.setItem(name, value);
  };

  useEffect(() => {
    const getItems = async () => {
      const data = await fetchItems();
      setItems(data);
    };

    getItems();

    const storedMeta = localStorage.getItem("goal");
    if (storedMeta) {
      setGoal(storedMeta);
      setExistsGoal(true);
    }
  }, []);
  const deleteGoal = () => {
    localStorage.removeItem("goal");
    setGoal(null);
    setIsDeleteGoal(false);
  };

  const soma = () => {
    let value = 0;
    items.map((item) => {
      value += item.value;
    });
    return value;
  };
  return (
    <main className="home">
      <section className="money-value">
        <h3>Dinheiro guardado:</h3>
        <span>R$: {soma()}</span>
        {(() => {
          if (soma() < -1000) {
            return <p>Tome cuidado, tente economizar mais!</p>;
          } else if (soma() < 0) {
            return (
              <p>
                Você anda economizando pouco, mas temos certeza que vai dar a
                volta por cima!
              </p>
            );
          } else if (soma() === 0 && items.length !== 0) {
            return (
              <p>
                Valor zerado, mas não se preocupe logo estará poupando bastante
                dinheiro!
              </p>
            );
          } else if (soma() < 1000) {
            return <p>Você está no caminho certo, continue economizando</p>;
          } else if (soma() < 10000) {
            return (
              <p>Você já está poupando um bom dinheiro, continue assim!</p>
            );
          } else {
            return <p>Você é muito bom em guardar dinheiro, parabéns!!</p>;
          }
        })()}
      </section>
      <AssetChart />
      <section className="analyst">
        <h4>Analista</h4>
        <hr />
        <div className="analyst_content">
          <div className="winnings">
            <h5>
              <img src={imgEntry} />
              últimos ganhos:
            </h5>
            {items &&
              items.reduce((acc, item) => {
                if (item.value > 0 && acc.length < 2) {
                  acc.push(
                    <p key={item.id}>
                      R${item.value} - dia {item.created_at}
                    </p>
                  );
                }
                return acc;
              }, [])}
          </div>
          <div className="losses">
            <h5>
              <img src={imgExit} alt="" className="losses_img" />
              últimas perdas:
            </h5>
            {items &&
              items.reduce((acc, item) => {
                if (item.value < 0 && acc.length < 2) {
                  acc.push(
                    <p key={item.id}>
                      R${-item.value} - dia {item.created_at}
                    </p>
                  );
                }
                return acc;
              }, [])}
          </div>
        </div>
      </section>
      <section className="mark">
        <h4>
          Meta
          {goal && (
            <div>
              <BsFillPencilFill onClick={() => setIsEditGoal(true)} />
              <BsFillTrash3Fill
                className="trash"
                onClick={() => setIsDeleteGoal(true)}
              />
            </div>
          )}
          {isDeleteGoal && (
            <div className="container_delete_goal">
              <div className="delete_goal">
                <p>Excluir meta?</p>
                <div className="buttons">
                  <button onClick={deleteGoal}>Sim</button>
                  <button onClick={() => setIsDeleteGoal(false)}>Não</button>
                </div>
              </div>
            </div>
          )}
          {isEditGoal && (
            <div className="container_edit_goal">
              <div className="edit_goal">
                <label htmlFor="goal">Defina uma meta de economia:</label>
                <input
                  step="0.01"
                  type="number"
                  id="goal"
                  onChange={(e) => setTempGoal(e.target.value)}
                />
                <div className="buttons_edit">
                  <button onClick={() => setIsEditGoal(false)}>Voltar</button>
                  <button
                    onClick={() => {
                      setGoal(tempGoal);
                      setGoalInStorage("goal", tempGoal);
                      setIsEditGoal(false);
                    }}
                  >
                    Editar
                  </button>
                </div>
              </div>
            </div>
          )}
        </h4>

        <hr />
        <div className="mark_content">
          <h5>Progresso</h5>
          {goal ? (
            <>
              <div className="progress">
                <div
                  className="progress_bar"
                  style={{ width: `${Math.round((soma() / goal) * 100)}%` }}
                >
                  {Math.round((soma() / goal) * 100) + "%"}
                </div>
              </div>
              <h5>
                Economia desejada: <span>R${goal}</span>
              </h5>
              <h5>
                Quantia economizada: <span>R${soma()}</span>
              </h5>
              <h5>
                Faltam: <span>R${goal - soma()}</span>
              </h5>
            </>
          ) : (
            <>
              <div className="no_goal">
                <label htmlFor="goal">Defina uma meta de economia:</label>
                <input
                  step="0.01"
                  type="number"
                  id="goal"
                  onChange={(e) => setTempGoal(e.target.value)}
                />
                <button
                  onClick={() => {
                    setGoal(tempGoal);
                    setGoalInStorage("goal", tempGoal);
                  }}
                >
                  Definir
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;
