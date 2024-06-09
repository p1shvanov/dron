import { Chart as ChartJS, registerables } from 'chart.js';
import { useEffect, useRef } from 'react';
import { getDataset } from '../../utils/getDataSet';
import { getLabels } from '../../utils/getLabels';

ChartJS.register(...registerables);

export const Chart = ({ socketData, dataType, field, field2, field3}) => {
const chartRef = useRef(null);
const arr = [field, field2, field3]
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
console.log(socketData,'socketData')

const data = {
  labels: getLabels(socketData),
  datasets: [
    {
      label: `${dataType} ${field}`, // Template literals for string concatenation
      data: getDataset(socketData, dataType, field), // Pass variables directly
      backgroundColor: '#fa090c'
    },
    field2 ? {
      label: ` ${field2}`,
      data: getDataset(socketData, dataType, field2),
      backgroundColor: '#fa090c'
    } : {},
    field3 ? {
      label: ` ${field3}`,
      data: getDataset(socketData, dataType, field3),
      backgroundColor: '#fa090c'
    } : {},

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
