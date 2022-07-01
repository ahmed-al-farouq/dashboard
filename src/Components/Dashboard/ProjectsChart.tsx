import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [{
    label: 'Projects of 2021',
    data: [30, 40, 45, 35, 50, 45, 55, 76, 70, 77, 80, 78],
    borderColor: ['#2dce89'],
    pointBackgroundColor: 'red',
    pointBorderColor: 'red',
  }],
};

const options = {
  plugins: {
    title: {
      display: true,
      text: 'Projects Chart',
      color: 'blue',
      font: {
        weight: 'light',
        size: 30,
      },
    },
  },
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  maintainAspectRatio: false,
};

const ProjectsChart : React.FC = () => {
  return (
    <Line
      height="340px"
      data={data}
      options={options}
    />
  );
}

export default ProjectsChart;