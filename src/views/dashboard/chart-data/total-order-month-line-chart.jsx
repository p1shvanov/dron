// ==============================|| DASHBOARD - TOTAL ORDER MONTH CHART ||============================== //

import { getDataset } from 'utils/getDataSet';

const chartData = (socketData, filterParam, field, yMax) => {
  return {
    type: 'line',
    height: 90,
    options: {
      chart: {
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#fff'],
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      yaxis: {
        min: 0,
        max: yMax
      },
      tooltip: {
        theme: 'dark',
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: () => 'Total Order'
          }
        },
        marker: {
          show: false
        }
      }
    },
    series: [
      {
        name: 'series1',
        data: getDataset(socketData, filterParam, field)
      }
    ]
  };
};

export default chartData;
