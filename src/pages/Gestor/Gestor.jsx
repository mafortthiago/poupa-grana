import React, { useState } from "react";
import { Item } from "../../components/Item/Item";
import "../../styles/pages/Gestor.scss";
import { InsertEntry } from "../../components/InsertEntry/InsertEntry";
import imgExit from "../../assets/img/exit.png";
export const Gestor = () => {
  const [isInsertEntry, setIsInsertEntry] = useState(false);

  const item1 = {
    name: "Conta de água",
    value: 160.9,
    createdAt: "16/07/2022",
  };
  return (
    <main className="gestor">
      <div className="btns">
        <button className="btn_entry" onClick={() => setIsInsertEntry(true)}>
          <img src={imgExit} alt="" />
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
      {isInsertEntry && <InsertEntry setIsInsertEntry={setIsInsertEntry} />}
    </main>
  );
};

export default Gestor;
