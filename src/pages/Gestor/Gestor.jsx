import React from "react";
import { Item } from "../../components/Item/Item";
import "../../styles/pages/Gestor.scss";
import imgEntry from "../../assets/img/entry.png";
import imgExit from "../../assets/img/exit.png";
export const Gestor = () => {
  const item1 = {
    name: "Conta de água",
    value: 160.9,
    createdAt: "16/07/2022",
  };
  return (
    <main className="gestor">
      <div className="btns">
        <button className="btn_entry">
          <img src={imgEntry} alt="" />
          Inserir entrada
        </button>
        <button className="btn_exit">
          <img src={imgExit} alt="" />
          Inserir saída
        </button>
      </div>

      <section>
        <h4>Movimentações</h4>
        <Item item={item1} />
      </section>
    </main>
  );
};

export default Gestor;
