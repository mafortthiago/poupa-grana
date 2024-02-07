import React, { useState, useEffect } from "react";
import "../../styles/pages/Home.scss";
import imgEntry from "../../assets/img/entry.png";
import imgExit from "../../assets/img/exit.png";
import { AssetChart } from "../../components/AssetChart/AssetChart";
import useItems from "../../hooks/useItems";
export const Home = () => {
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
        <h4>Meta</h4>
        <hr />
        <div className="mark_content">
          <h5>Progresso</h5>
          <div className="progress">
            <div className="progress_bar">{66 + "%"}</div>
          </div>
          <h5>
            Economia desejada: <span>R${1000}</span>
          </h5>
          <h5>
            Quantia economizada: <span>R${660}</span>
          </h5>
          <h5>
            Faltam: <span>R${340}</span>
          </h5>
        </div>
      </section>
    </main>
  );
};

export default Home;
