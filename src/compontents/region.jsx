import React, { useState, useEffect } from "react";

const Region = props => {
  const [regionClassName, setRegionClassName] = useState(
    "map__region--unselected"
  );
  const [isClicked, setClicked] = useState(false);

  useEffect(() => {
    const { selectedRegion, name } = props;
    if (selectedRegion) {
      if (selectedRegion === name) {
        setClicked(true);
        setRegionClassName("map__region--selected");
      } else {
        setClicked(false);
        setRegionClassName("map__region--unselected");
      }
    }
  }, [props.selectedRegion]);

  function handleClick() {
    const { name, changeSelectedRegions } = props;

    changeSelectedRegions(isClicked, name);
  }

  const { points, disabled, name } = props;

  let regionClass = `map__region ${regionClassName}`;

  return (
    <React.Fragment>
      <polygon className={regionClass} points={points} onClick={handleClick}>
        <title>{name}</title>
      </polygon>
    </React.Fragment>
  );
};

export default Region;
