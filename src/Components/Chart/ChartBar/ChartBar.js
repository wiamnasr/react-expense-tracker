import React from "react";

// Style
import { Wrapper } from "./ChartBar.styles";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <Wrapper>
      <div className='chart-bar'>
        <div className='chart-bar__inner'>
          <div
            className='chart-bar__fill'
            style={{ height: barFillHeight }}
          ></div>
        </div>
        <div className='chart-bar__label'>{props.label}</div>
      </div>
    </Wrapper>
  );
};

export default ChartBar;
