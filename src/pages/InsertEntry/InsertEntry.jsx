import React from "react";
import "../../styles/pages/InsertEntry.scss";
export const InsertEntry = () => {
  return (
    <main className="insert">
      <h4>Insira aqui entrada de valor para poupar</h4>
      <form action="">
        <label htmlFor="quantity">Quantia:</label>
        <br />
        <input type="text" id="quantity" />
      </form>
    </main>
  );
};

export default InsertEntry;
