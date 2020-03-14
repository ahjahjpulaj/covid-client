import React, { useState, useEffect } from "react";
import Region from "./region";
import regions from "../utils/regions.json";

const Map = props => {
  const [selectedRegion, setSelectedRegion] = useState("none");

  function changeSelectedRegions(condition, region) {
    const { extFunction } = props;

    console.log(condition);
    console.log(region);

    if (condition) {
      setSelectedRegion("none");
    } else {
      setSelectedRegion(region);
      const regionsList = regions.filter(regione => regione.nome === region);
      console.log(regionsList);
      if (extFunction) {
        extFunction(regionsList);
      }
    }
  }

  const { byDesc, className, data, regionClick, extFunction } = props;

  let par = byDesc ? "nome" : "key";

  return (
    <div className={`map${className ? ` ${className}` : ""}`}>
      <svg height="360" width="360">
        {data.map((reg, index) => {
          return (
            <Region
              key={`${reg.nome}-${index}`}
              clickDisabled={regionClick}
              selectedRegion={selectedRegion}
              name={reg.nome}
              points={reg.confini}
              extFunction={extFunction}
              changeSelectedRegions={changeSelectedRegions}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default Map;
