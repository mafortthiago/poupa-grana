import React from "react";
import Chart from "react-apexcharts";
import "../../styles/components/AssetChart.scss";
export const AssetChart = () => {
  var options = {
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
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-20T00:00:00.000Z",
        "2018-09-21T00:00:00.000Z",
        "2018-09-22T00:00:00.000Z",
        "2018-09-23T00:00:00.000Z",
        "2018-09-24T00:00:00.000Z",
        "2018-09-25T00:00:00.000Z",
      ],
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
    },
  };
  const series = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ];
  return (
    <>
      <div className="asset_chart">
        <h4 className="titleChart">Sua jornada economizando:</h4>
        <Chart options={options} series={series} type="area" height={380} />
      </div>
    </>
  );
};
