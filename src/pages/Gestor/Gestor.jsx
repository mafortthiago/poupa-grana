import React, { useState } from "react";
import { Item } from "../../components/Item/Item";
import styles from "../../styles/pages/Gestor.module.scss";
import { InsertEntry } from "../../components/InsertEntry/InsertEntry";
import imgExit from "../../assets/img/exit.png";
//icons:
import { BsCashCoin } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsGraphDownArrow } from "react-icons/bs";
import { BsFillTriangleFill } from "react-icons/bs";

export const Gestor = () => {
  const [isInsertEntry, setIsInsertEntry] = useState(false);
  const [isInsertExit, setIsInsertExit] = useState(false);
  const item1 = {
    name: "Conta de água",
    value: 160.9,
    createdAt: "16/07/2022",
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
              Dinheiro poupado: <span> R${567}</span>
            </p>
          </div>
          <div className={`${styles.panel} ${styles.panel2}`}>
            <BsGraphUpArrow className={styles.icon} fill="#90aa86" />
            <p>
              Entrada: <span> R${700}</span>
            </p>
          </div>
          <div className={`${styles.panel} ${styles.panel3}`}>
            <BsGraphDownArrow className={styles.icon} fill="#723D46" />
            <p>
              Saída: <span> R${700 - 567}</span>
            </p>
          </div>
        </div>
        <div></div>
        <div></div>
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

      <section>
        <h4>Movimentações</h4>
        <Item item={item1} />
      </section>
      {isInsertEntry && (
        <InsertEntry
          setIsInsertEntry={setIsInsertEntry}
          title={"Inserir valor para poupar"}
          action={"Inserir"}
          types={typesEntry}
        />
      )}
      {isInsertExit && (
        <InsertEntry
          setIsInsertEntry={setIsInsertExit}
          title={"Retirar valor"}
          action={"Retirar"}
          types={typesExit}
        />
      )}
    </main>
  );
};

export default Gestor;
