import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

function BarChart({ chartData }) {
  return <Bar data={chartData} />;
}

export default BarChart;

