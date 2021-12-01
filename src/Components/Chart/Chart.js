import React from "react";

// Style
import { Wrapper } from "./Chart.styles";

// Components
import ChartBar from "./ChartBar/ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

  const totalMaximum = Math.max(...dataPointValues);

  return (
    <Wrapper>
      <div className='chart'>
        {props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Chart;
