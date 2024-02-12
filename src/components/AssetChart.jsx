import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import styles from "../styles/components/AssetChart.module.scss";
import useItems from "../hooks/useItems";

export const AssetChart = () => {
  const { fetchItems } = useItems();
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      const data = await fetchItems();
      setItems(data);
    };

    getItems();
  }, [fetchItems]);
  let dateValues = {};
  let total = 0;
  items.sort(
    (a, b) =>
      new Date(a.created_at.split("/").reverse().join("-")) -
      new Date(b.created_at.split("/").reverse().join("-"))
  );
  if (items.length === 0) {
    return (
      <div className={styles.asset_chart}>
        <p>Quando você fizer uma movimentação aparecerá aqui no gráfico!!</p>
      </div>
    );
  }
  const oldestDate = items[0].created_at;
  const earlierDate = new Date(oldestDate.split("/").reverse().join("-"));
  earlierDate.setDate(earlierDate.getDate() - 3);
  const earlierDateKey = `${earlierDate.getFullYear()}-${(
    "0" +
    (earlierDate.getMonth() + 1)
  ).slice(-2)}-${("0" + earlierDate.getDate()).slice(-2)}`;
  dateValues[earlierDateKey] = 0;
  items.forEach((item) => {
    let [day, month, year] = item.created_at.split("/");
    let dateKey = `${year}-${month}-${day}`;
    total += item.value;
    dateValues[dateKey] = total;
  });
  let options = {
    markers: {
      colors: ["#90aa86", "#90aa86"],
    },
    chart: {
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: Object.keys(dateValues),
    },
    fill: {
      colors: ["#242038"],
    },
    stroke: {
      colors: ["#242038"],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy ",
      },
      marker: {
        fillColors: ["#90aa86"],
        text: "Dinheiro poupado",
      },
    },
  };
  let series = [
    {
      name: "Dinheiro guardado",
      data: Object.values(dateValues),
    },
  ];

  return (
    <>
      <div className={styles.asset_chart}>
        <h4 className={styles.titleChart}>Sua jornada economizando:</h4>
        <Chart options={options} series={series} type="area" height={420} />
      </div>
    </>
  );
};

export default AssetChart;
