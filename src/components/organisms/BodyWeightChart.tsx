import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface BodyWeightChartProps {
  labels: string[];
  dataset1: number[];
  dataset2: number[];
  paddingLeft?: number;
  paddingRight?: number;
  categorySpacing?: number | string;
  displayTitle?: boolean;
  chartTitle?: string;
  paddingBottom?: number;
  paddingTop?: number;
}

const BodyWeightChart: React.FC<BodyWeightChartProps> = ({
  labels,
  dataset1,
  dataset2,
  paddingLeft,
  paddingRight,
  categorySpacing,
  displayTitle = false,
  chartTitle,
}) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2,
    scales: {
      x: {
        ticks: {
          color: "white", // Change the color of the x-axis ticks here
        },
        grid: {
          color: "#777777", // Change the color of the x-axis grid lines here
          categorySpacing,
        },
      },
      y: {
        display: false,
      },
    },
    layout: {
      padding: {
        bottom: 20, // Adjust the value as needed
        left: paddingLeft,
        right: paddingRight,
      },
    },
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
      },
      title: {
        display: displayTitle,
        text: chartTitle,
      },
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Dataset 1",
        data: dataset1,
        borderColor: "#FFCC21",
        backgroundColor: "#FFCC21",
      },
      {
        label: "Dataset 2",
        data: dataset2,
        borderColor: "#8FE9D0",
        backgroundColor: "#8FE9D0",
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export default BodyWeightChart;
