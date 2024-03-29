import React, { useState, useEffect } from "react";
import styles from "../styles/pages/Home.module.scss";
import imgEntry from "../assets/img/entry.png";
import imgExit from "../assets/img/exit.png";
import { AssetChart } from "../components/AssetChart";
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillTrash3Fill } from "react-icons/bs";

import useItems from "../hooks/useItems";
export const Home = () => {
  const { fetchItems } = useItems();
  const [items, setItems] = useState([]);
  const [goal, setGoal] = useState("");
  const [tempGoal, setTempGoal] = useState("");
  const [existsGoal, setExistsGoal] = useState(false);
  const [isConcludedGoal, setIsConcludedGoal] = useState();
  const [isDeleteGoal, setIsDeleteGoal] = useState(false);
  const [isEditGoal, setIsEditGoal] = useState(false);
  const [isLowerValue, setIsLowerValue] = useState(false);
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
      if (soma() > goal) {
        setIsConcludedGoal(true);
      }
    }
  }, [fetchItems]);

  const deleteGoal = () => {
    localStorage.removeItem("goal");
    setGoal(null);
    setIsDeleteGoal(false);
    setIsConcludedGoal(false);
  };
  const soma = () => {
    let value = 0;
    items &&
      items.map((item) => {
        value += item.value;
      });
    return value;
  };
  return (
    <main className={styles.home}>
      <section className={styles.money_value}>
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
          } else if (soma() === 0) {
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
      <section className={styles.analyst}>
        <h4>Analista</h4>
        <hr />
        <div className={styles.analyst_content}>
          {items && items.length !== 0 ? (
            <>
              <div className={styles.winnings}>
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
              <div className={styles.losses}>
                <h5>
                  <img
                    src={imgExit}
                    alt="icone que representa perdas"
                    className={styles.losses_img}
                  />
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
            </>
          ) : (
            <p className={styles.paragraph_no_items}>
              Ainda não foram feitas modificações, insira uma movimentação.
            </p>
          )}
        </div>
      </section>
      <section className={styles.mark}>
        <h4>
          Meta
          {goal && (
            <div>
              <BsFillPencilFill onClick={() => setIsEditGoal(true)} />
              <BsFillTrash3Fill
                className={styles.trash}
                onClick={() => setIsDeleteGoal(true)}
              />
            </div>
          )}
          {isConcludedGoal && (
            <div className={styles.container_concluded_goal}>
              <div className={styles.concluded_goal}>
                <p>
                  Você concluiu sua meta de economizar
                  <span> {goal}</span> reais.
                </p>
                <p>Parabéns!!!!</p>
                <button onClick={() => deleteGoal()}>Definir nova meta</button>
              </div>
            </div>
          )}
          {isDeleteGoal && (
            <div className={styles.container_delete_goal}>
              <div className={styles.delete_goal}>
                <p>Excluir meta?</p>
                <div className={styles.buttons}>
                  <button onClick={deleteGoal}>Sim</button>
                  <button onClick={() => setIsDeleteGoal(false)}>Não</button>
                </div>
              </div>
            </div>
          )}
          {isEditGoal && (
            <div className={styles.container_edit_goal}>
              <div className={styles.edit_goal}>
                <label htmlFor="goal">Defina uma meta de economia:</label>
                <input
                  step="0.01"
                  type="number"
                  id="goal"
                  onChange={(e) => setTempGoal(e.target.value)}
                />
                <div className={styles.buttons_edit}>
                  <button
                    onClick={() => {
                      setIsEditGoal(false);
                      setIsLowerValue(false);
                    }}
                  >
                    Voltar
                  </button>
                  <button
                    onClick={() => {
                      if (tempGoal > soma()) {
                        setGoal(tempGoal);
                        setGoalInStorage("goal", tempGoal);
                        setIsEditGoal(false);
                      } else {
                        setIsLowerValue(true);
                        return;
                      }
                    }}
                  >
                    Editar
                  </button>
                </div>
                {isLowerValue && (
                  <p className={styles.warning_value}>
                    Digite uma meta com valor acima do que você possuí hoje.
                  </p>
                )}
              </div>
            </div>
          )}
        </h4>

        <hr />
        <div className={styles.mark_content}>
          <h5>Progresso</h5>
          {goal ? (
            <>
              <div className={styles.progress}>
                <div
                  className={styles.progress_bar}
                  style={
                    soma() < goal
                      ? { width: `${Math.round((soma() / goal) * 100)}%` }
                      : { width: "100%" }
                  }
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
              <div className={styles.no_goal}>
                <label htmlFor="goal">Defina uma meta de economia:</label>
                <input
                  step="0.01"
                  type="number"
                  id="goal"
                  onChange={(e) => setTempGoal(e.target.value)}
                  className={styles.input_edit}
                />

                <button
                  onClick={() => {
                    if (tempGoal > soma()) {
                      setGoal(tempGoal);
                      setGoalInStorage("goal", tempGoal);
                      setIsLowerValue(false);
                    } else {
                      setIsLowerValue(true);
                      return;
                    }
                  }}
                >
                  Definir
                </button>
                {isLowerValue && (
                  <p className={styles.warning_value}>
                    Digite uma meta com valor acima do que você possuí hoje.
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;
