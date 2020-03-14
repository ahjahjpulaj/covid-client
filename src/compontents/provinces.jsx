import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import _ from "lodash";

const Provinces = props => {
  const { provinces } = props;
  const selectValues = ["Seleziona un'opzione", ..._.keys(provinces)];
  const [selectValue, setSelectValue] = useState(selectValues[0]);
  const [province, setProvince] = useState([]);
  console.log(selectValues);

  useEffect(() => {
    console.log(provinces);
    if (selectValue !== "Seleziona un'opzione") {
      setProvince(provinces[selectValue]);
    } else {
      setProvince([]);
    }
  }, [selectValue]);

  return (
    <div className="d-flex justify-content-center">
      <div className="col-6">
        <select
          value={selectValue}
          defaultValue={selectValues[0]}
          onChange={e => setSelectValue(e.target.value)}
        >
          {selectValues.map(value => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <Line
          data={{
            labels: province.map(value => value.data),

            datasets: [
              {
                label: selectValue,
                backgroundColor: "rgb(255, 255, 255)",
                borderColor: "rgb(0, 0, 0)",
                data: province.map(value => value["totale_casi"])
              }
            ]
          }}
        />
      </div>
    </div>
  );
};

export default Provinces;
