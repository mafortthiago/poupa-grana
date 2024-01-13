import React from "react";
import "../../styles/pages/Home.scss";
import imgEntry from "../../assets/img/entry.png";
import imgExit from "../../assets/img/exit.png";
import { AssetChart } from "../../components/AssetChart/AssetChart";
export const Home = () => {
  return (
    <main>
      <section className="money-value">
        <h3>Dinheiro guardado:</h3>
        <span>R$: 18,08</span>
        <p>Opaaa! Parabéns seu patrimônio vem aumentando bastante!</p>
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
            <p>
              R${15} - dia {"09/09/2021"}
            </p>
            <p>
              R${150} - dia {"09/09/2021"}
            </p>
          </div>
          <div className="losses">
            <h5>
              <img src={imgExit} alt="" className="losses_img" />
              últimas perdas:
            </h5>
            <p>
              R${17} - dia {"09/09/2021"}
            </p>
            <p>
              R${25} - dia {"09/09/2021"}
            </p>
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
