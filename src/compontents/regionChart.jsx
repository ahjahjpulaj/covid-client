import React, { useState, useEffect } from "react";

import Chart from "./chart.jsx";
import Provinces from "./provinces.jsx";
import Map from "./map.jsx";
import itRegions from "../utils/italy-regions.json";

const RegionChart = () => {
  const selectedRegions = [];
  const [chartData, setChartData] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [regionsList, setRegionsList] = useState([]);
  const [hasError, setErrors] = useState(false);

  useEffect(() => {
    if (regionsList) {
      fetchData(regionsList);
    }
  }, [regionsList]);

  async function fetchData(regionsList) {
    regionsList.map(async region => {
      console.log(region);
      const res = await fetch(
        `http://localhost:4000/regioni?code=${region.code}`
      );
      res
        .json()
        .then(res => setChartData(res))
        .catch(err => setErrors(err));
      const provinces = await fetch(
        `http://localhost:4000/province?code=${region.code}`
      );
      provinces
        .json()
        .then(provinces => setProvinces(provinces))
        .catch(err => setErrors(err));
    });
  }

  return (
    <React.Fragment>
      <div className="d-flex justify-content-center">
        <div className="col-6">
          <Map
            key="map"
            className="space-bottom"
            clickDisabled={[]}
            regionSelected={selectedRegions.length > 0 ? selectedRegions : []}
            data={itRegions}
            extFunction={setRegionsList}
          />
        </div>
      </div>
      {chartData.length > 0 ? <Chart chartData={chartData} /> : null}
      {/* <Provinces provinces={provinces} /> */}
      {provinces ? <Provinces provinces={provinces} /> : null}
    </React.Fragment>
  );
};

export default RegionChart;
