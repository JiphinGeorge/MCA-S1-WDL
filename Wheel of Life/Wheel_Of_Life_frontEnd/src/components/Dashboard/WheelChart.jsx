import React from "react";
import {
  Radar
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function WheelChart({ categories, scores }) {
  if (!categories.length) return <p>Loading chart...</p>;

  const labels = categories.map((c) => c.name);
  const dataValues = categories.map((c) => scores[c.id] || 0);

  const data = {
    labels,
    datasets: [
      {
        label: "Life Progress Wheel",
        data: dataValues,
        backgroundColor: "rgba(54, 162, 235, 0.3)",
        borderColor: "rgb(54, 162, 235)",
        borderWidth: 2,
        pointBackgroundColor: "rgb(54, 162, 235)",
      },
    ],
  };

  const options = {
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 10,
        ticks: { stepSize: 1, color: "#000" },
        grid: { color: "#888" },
        angleLines: { color: "#777" },
      },
    },
    responsive: true,
  };

  return (
    <div style={{ width: "100%", maxWidth: "500px" }}>
      <Radar data={data} options={options} />
    </div>
  );
}
