import { Chart as ChartJS, registerables } from 'chart.js';
import { useEffect, useRef } from 'react';
import { getDataset } from '../../utils/getDataSet';
import { getLabels } from '../../utils/getLabels';

// ChartJS.register(...registerables);

export const Chart = ({ socketData, dataType, field }) => {
const chartRef = useRef(null);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true
    }
  },
  animation: {
    duration: 0
  },
  hover: {
    animationDuration: 0
  },
  responsiveAnimationDuration: 0
};

const data = {
  labels: getLabels(socketData),
  datasets: [
    {
      label: `${dataType} ${field}`,
      data: getDataset(socketData, `${dataType}`, `${field}`),
      backgroundColor: '#fa090c'
    }
  ]
};

useEffect(() => {
  const chartElement = chartRef.current;

  if (!chartElement) return;

  const chartInstance = new ChartJS(chartElement, {
    type: 'line',
    data: data,
    options: options
  });

  chartInstance.options.animation = false;

  return () => {
    chartInstance.destroy();
  };
}, [data]);

return (
  <div className="canvas">
    <canvas ref={chartRef} />
  </div>
);
};
