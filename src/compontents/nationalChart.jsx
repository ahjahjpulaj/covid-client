import React, { useState, useEffect } from "react";
import Chart from "./chart.jsx";

const NationalChart = () => {
  const [hasError, setErrors] = useState(false);
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    if (chartData.length === 0) {
      fetchData();
    }
  });

  async function fetchData() {
    const res = await fetch("http://localhost:4000/andamento-nazionale/");
    res
      .json()
      .then(res => setChartData(res))
      .catch(err => setErrors(err));
  }

  return <Chart chartData={chartData} />;
};

export default NationalChart;
