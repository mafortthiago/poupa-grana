import React, { useEffect, useState } from "react";
import styles from "../../styles/components/InsertEntry.module.scss";
import imgEntry from "../../assets/img/entry.png";
import { useNavigate } from "react-router-dom";
const InsertEntry = ({ setIsInsertEntry }) => {
  const navigate = useNavigate();
  /* Gets today's date */
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];

  const [dateToday, setDateToday] = useState(formattedDate);
  const [isTodaySelect, setIsTodaySelect] = useState(true);
  const [type, setType] = useState("");
  const [value, setValue] = useState(0);
  const [isSelectionClicked, setIsSelectionClicked] = useState(true);
  const [isOtherSelectionClicked, setIsOtherSelectionClicked] = useState(false);

  const closeSelection = () => {
    setIsSelectionClicked(!isSelectionClicked);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleClickSelection = (value) => {
    setType(value);
    setIsSelectionClicked(!isSelectionClicked);
  };
  return (
    <div className={styles.insert}>
      <div className={styles.modal_insert}>
        <h4>
          <span>Inserir valor para poupar</span>
          <span
            className={styles.go_back}
            onClick={() => setIsInsertEntry(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#242038"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
            Voltar
          </span>
        </h4>
        <hr />
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* input value */}
          <label htmlFor="value">Valor:</label>
          <input
            type="text"
            id={`${styles.value} `}
            name="value"
            value={value}
            onChange={(e) => setValue(parseFloat(e.target.value))}
          />
          {/* Add number buttons */}
          <div className={styles.buttons_add_value}>
            <button onClick={() => setValue(value + 1)}>+1</button>
            <button onClick={() => setValue(value + 10)}>+10</button>
            <button onClick={() => setValue(value + 100)}>+100</button>
            <button onClick={() => setValue(value + 1000)}>+1000</button>
          </div>
          {/* Which day? */}
          <span>Qual o dia?</span>
          <div className={styles.date}>
            <input
              type="radio"
              name="day"
              id="check-today"
              className={styles.radio}
              onChange={() => setIsTodaySelect(true)}
            />
            <label htmlFor="check_today">Hoje</label>
            <input
              type="radio"
              name="day"
              className={styles.radio}
              id="check_other_day"
              onChange={() => setIsTodaySelect(false)}
            />
            <label htmlFor="check_other_day">Outro dia</label>
            <input
              type="date"
              name=""
              id=""
              disabled={isTodaySelect}
              value={dateToday}
              className={styles.input_date}
              onChange={(e) => setDateToday(e.target.value)}
            />
          </div>
          {/* Custom combobox */}
          <label className={styles.label_select}>
            <div
              className={styles.selector}
              onClick={() => setIsSelectionClicked(!isSelectionClicked)}
            >
              <span className={styles.painel}>
                {type !== "" ? type : "Selecione um tipo"}
              </span>
              <img
                src={imgEntry}
                className={`${styles.img_select} ${
                  !isSelectionClicked ? styles.noRotate : ""
                }`}
              />
            </div>

            <div className={isSelectionClicked ? styles.none : styles.options}>
              <p onClick={(e) => handleClickSelection(e.target.textContent)}>
                Salário
              </p>
              <p onClick={(e) => handleClickSelection(e.target.textContent)}>
                Extra
              </p>
              <p onClick={(e) => handleClickSelection(e.target.textContent)}>
                Presente
              </p>
              <p
                onClick={() =>
                  setIsOtherSelectionClicked(!isOtherSelectionClicked)
                }
                className={styles.paragraph_other_type}
              >
                Outro
                <img
                  src={imgEntry}
                  className={`${styles.img_select} ${
                    isOtherSelectionClicked ? styles.noRotate : ""
                  }`}
                />
              </p>
              {isOtherSelectionClicked && (
                <div className={styles.input_other_type}>
                  <label htmlFor="otherType">Digite o tipo: </label>
                  <input
                    type="text"
                    className={styles.otherType}
                    id="otherType"
                    onChange={(e) => setType(e.target.value)}
                  />
                  <input
                    type="button"
                    value="Ok"
                    className={styles.otherTypeBtn}
                    onClick={() => setIsSelectionClicked(!isSelectionClicked)}
                  />
                </div>
              )}
            </div>
          </label>
          <input type="submit" value="Inserir" className={styles.btn_insert} />
        </form>
      </div>
    </div>
  );
};

export { InsertEntry };
