import React, { useState, useEffect } from "react";
import { Item } from "../components/Item/";
import styles from "../styles/pages/Gestor.module.scss";
import { InsertEntry } from "../components/InsertEntry/";
import { BsCashCoin } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsGraphDownArrow } from "react-icons/bs";
import { BsFillTriangleFill } from "react-icons/bs";
import useItems from "../hooks/useItems";

export const Gestor = () => {
  const [isInsertEntry, setIsInsertEntry] = useState(false);
  const [isInsertExit, setIsInsertExit] = useState(false);

  const item1 = {
    name: "Conta de água",
    value: 160.9,
    createdAt: "16/07/2022",
  };
  const { fetchItems } = useItems();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const data = await fetchItems();
      setItems(data);
    };

    getItems();
  });
  const soma = () => {
    let entry = 0;
    let exit = 0;
    items &&
      items.map((item) => {
        if (item.value > 0) {
          entry = entry + item.value;
        } else {
          exit = exit + item.value;
        }
      });
    exit = -exit;
    return { entry, exit };
  };

  const typesEntry = ["Salário", "Extra", "Presente"];
  const typesExit = ["Gastos essenciais", "Contas", "Lazer"];

  return (
    <main className={styles.gestor}>
      <div>
        <div className={styles.panels}>
          <div className={`${styles.panel} ${styles.panel1}`}>
            <BsCashCoin className={styles.icon} fill="#d2d3ba" />
            <p>
              Dinheiro poupado: <span> R${soma().entry - soma().exit}</span>
            </p>
          </div>
          <div className={`${styles.panel} ${styles.panel2}`}>
            <BsGraphUpArrow className={styles.icon} fill="#90aa86" />
            <p>
              Entrada: <span> R${soma().entry}</span>
            </p>
          </div>
          <div className={`${styles.panel} ${styles.panel3}`}>
            <BsGraphDownArrow className={styles.icon} fill="#723D46" />
            <p>
              Saída: <span> R${soma().exit}</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.btns}>
        <button
          className={styles.btn_entry}
          onClick={() => setIsInsertEntry(true)}
        >
          <BsFillTriangleFill fill="#90aa86" className={styles.upMoney} />
          Inserir entrada
        </button>
        <button
          className={styles.btn_exit}
          onClick={() => setIsInsertExit(true)}
        >
          <BsFillTriangleFill fill="#723D46" className={styles.moneyspent} />
          Inserir saída
        </button>
      </div>

      <section className={styles.movements}>
        <h4>Movimentações</h4>
        {items && items.map((item, index) => <Item key={index} item={item} />)}
        {items && items.length === 0 && (
          <div className={styles.no_items}>
            <h5>Sem movimentações no momento</h5>
            <p>
              Comece a poupar! É só inserir a movimentação desejada no painel
              acima.
            </p>
          </div>
        )}
      </section>
      {isInsertEntry && (
        <InsertEntry
          setIsInsertEntry={setIsInsertEntry}
          title={"Inserir valor para poupar"}
          action={"Inserir"}
          types={typesEntry}
          method={"POST"}
        />
      )}
      {isInsertExit && (
        <InsertEntry
          setIsInsertEntry={setIsInsertExit}
          title={"Retirar valor"}
          action={"Retirar"}
          types={typesExit}
          method={"POST"}
        />
      )}
    </main>
  );
};

export default Gestor;
