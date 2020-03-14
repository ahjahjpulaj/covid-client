import React, { useState, useEffect } from "react";
import "./App.css";
import NationalChart from "./compontents/nationalChart";
import RegionChart from "./compontents/regionChart";
const App = () => {
  return (
    <React.Fragment>
      <NationalChart />
      <RegionChart />
    </React.Fragment>
  );
};

export default App;
