import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import translation from "../utils/translation.json";
import config from "../utils/config.json";

const Chart = props => {
  const { chartData } = props;
  const selectValues = config.hospitalState;
  const [selectValue, setSelectValue] = useState(selectValues[0]);

  function translate(value) {
    return translation[value];
  }

  return (
    <React.Fragment>
      <div className="d-flex justify-content-center">
        <div className="col-6">
          <select
            value={selectValue}
            defaultValue={selectValues[0]}
            onChange={e => setSelectValue(e.target.value)}
          >
            {selectValues.map(value => (
              <option key={value} value={value}>
                {translate(value)}
              </option>
            ))}
          </select>
          <Line
            data={{
              labels: chartData.map(value => value.data),

              datasets: [
                {
                  label: translate(selectValue),
                  backgroundColor: "rgb(255, 255, 255)",
                  borderColor: "rgb(0, 0, 0)",
                  data: chartData.map(value => value[selectValue])
                }
              ]
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Chart;
